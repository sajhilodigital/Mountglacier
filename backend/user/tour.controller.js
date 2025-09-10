import express from "express";
import validateReqBody from "../middleware/validate.req.body.middleware.js";
import { tourSchema } from "../Validation/tour.validation.js";
import TourTable from "../Model/tour.model.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";
import {
  isAdmin,
  isAuthenticated,
} from "../middleware/authentication.middleware.js";
import { upload } from "../Config/multer.js";
import { uploadBufferToCloudinary } from "../Config/Clouninary.Services.js";

const router = express.Router();

/**
 * CREATE TOUR - ADMIN ONLY + Cloudinary Upload
 */
router.post(
  "/tour/add",
  isAuthenticated,
  isAdmin,
  upload.any(), // multer middleware
  validateReqBody(tourSchema),
  async (req, res, next) => {
    try {
      const files = req.files || [];
      const { body } = req;

      // Check duplicate slug
      const existingTour = await TourTable.findOne({ slug: body.slug });
      if (existingTour) {
        return res.status(400).json({
          success: false,
          message: "Tour with this slug already exists",
        });
      }

      // Parse itinerary safely
      let itinerary = [];
      if (body.itinerary) {
        try {
          itinerary =
            typeof body.itinerary === "string" ? JSON.parse(body.itinerary) : body.itinerary;
        } catch (err) {
          return res.status(400).json({ success: false, message: "Invalid itinerary JSON" });
        }
      }

      // Upload tour images
      const tourImagesFiles = files.filter((f) => f.fieldname === "tourImages");
      const images = [];
      for (const file of tourImagesFiles) {
        const result = await uploadBufferToCloudinary(file.buffer, "tours");
        images.push({ url: result.secure_url, public_id: result.public_id });
      }

      // Upload itinerary images
      const dayImagesFiles = files.filter((f) => f.fieldname.startsWith("dayImages-"));
      for (const day of itinerary) {
        const dayFiles = dayImagesFiles.filter((f) => f.fieldname === `dayImages-${day.day}`);
        day.images = [];
        for (const file of dayFiles) {
          const result = await uploadBufferToCloudinary(file.buffer, `tours/day-${day.day}`);
          day.images.push({ url: result.secure_url, public_id: result.public_id });
        }
      }

      // Create tour
      const tour = await TourTable.create({
        ...body,
        images,
        itinerary,
        createdBy: req.loggedInUserId,
      });

      return res.status(201).json({
        success: true,
        message: "Tour created successfully",
        tour,
      });
    } catch (err) {
      console.error("Error creating tour:", err);
      next(err);
    }
  }
);

/**
 * GET ALL TOURS WITH FILTERS & PAGINATION
 */
router.get("/tour/get/list", async (req, res, next) => {
  try {
    const {
      region,
      grade,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = req.query;
    const match = {};

    if (region) match.region = { $regex: new RegExp(region, "i") };
    if (grade) match.grade = grade;
    if (minPrice || maxPrice) match.priceUSD = {};
    if (minPrice) match.priceUSD.$gte = parseFloat(minPrice);
    if (maxPrice) match.priceUSD.$lte = parseFloat(maxPrice);

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const tours = await TourTable.aggregate([
      { $match: match },
      {
        $project: {
          code: 1,
          title: 1,
          region: 1,
          grade: 1,
          priceUSD: 1,
          images: 1,
          createdAt: 1,
        },
      },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: parseInt(limit) },
    ]);

    const totalTours = await TourTable.countDocuments(match);

    res.status(200).json({
      success: true,
      count: tours.length,
      total: totalTours,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalTours / limit),
      tours,
    });
  } catch (err) {
    console.error("Error fetching tours:", err);
    next(err);
  }
});

/**
 * GET SINGLE TOUR
 */
router.get(
  "/tour/get-detail/:id",
  validateMongoIdFromReqParams,
  async (req, res, next) => {
    try {
      const tour = await TourTable.findById(req.params.id).lean();
      if (!tour)
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });
      res.status(200).json({ success: true, tour });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);

/**  
 * UPDATE TOUR - ADMIN ONLY + Cloudinary Update
 */
router.put(
  "/tour/update/:id",
  validateMongoIdFromReqParams,
  isAuthenticated,
  isAdmin,
  upload.any(),
  validateReqBody(tourSchema),
  async (req, res, next) => {
    try {
      const { files, body } = req;
      const tourId = req.params.id;

      // --- Parse itinerary safely
      let itinerary = [];
      if (body.itinerary) {
        try {
          itinerary =
            typeof body.itinerary === "string"
              ? JSON.parse(body.itinerary)
              : body.itinerary;
        } catch {
          return res.status(400).json({
            success: false,
            message: "Invalid itinerary JSON",
          });
        }
      }

      // --- Handle tour images
      let images = [];
      if (files?.length) {
        const tourImageFiles = files.filter(
          (f) => f.fieldname === "tourImages"
        );
        for (const file of tourImageFiles) {
          const result = await uploadBufferToCloudinary(file.buffer, "tours");
          images.push({ url: result.secure_url, public_id: result.public_id });
        }
      } else if (body.images) {
        try {
          const parsedImages =
            typeof body.images === "string"
              ? JSON.parse(body.images)
              : body.images;
          images = parsedImages.map((img) =>
            typeof img === "string" ? { url: img, public_id: "" } : img
          );
        } catch {
          return res.status(400).json({
            success: false,
            message: "Invalid images data format",
          });
        }
      }

      // --- Handle day images
      const dayImageFiles =
        files?.filter((f) => f.fieldname.startsWith("dayImages-")) || [];
      for (const day of itinerary) {
        day.images = [];
        const dayFiles = dayImageFiles.filter(
          (f) => f.fieldname === `dayImages-${day.day}`
        );
        for (const file of dayFiles) {
          const result = await uploadBufferToCloudinary(
            file.buffer,
            `tours/day-${day.day}`
          );
          day.images.push({
            url: result.secure_url,
            public_id: result.public_id,
          });
        }
      }

      // --- Build update payload
      const updateData = { ...body, images, itinerary };

      // --- Prevent duplicate code
      if (updateData.code) {
        const codeExists = await TourTable.findOne({
          code: updateData.code.trim(),
          _id: { $ne: tourId },
        });
        if (codeExists) {
          return res.status(400).json({
            success: false,
            message:
              "Duplicate tour code detected. Please choose another code.",
          });
        }
      }

      // --- Prevent duplicate slug
      if (updateData.slug) {
        const slugExists = await TourTable.findOne({
          slug: updateData.slug.trim(),
          _id: { $ne: tourId },
        });
        if (slugExists) {
          return res.status(400).json({
            success: false,
            message: "Duplicate slug detected. Please choose another slug.",
          });
        }
      }

      // --- Update tour
      const updatedTour = await TourTable.findByIdAndUpdate(
        tourId,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedTour) {
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });
      }

      // --- Success response
      return res.status(200).json({
        success: true,
        message: "Tour updated successfully",
        tour: updatedTour,
      });
    } catch (err) {
      console.error("Error updating tour:", err);
      // Handle Mongo duplicate key error just in case
      if (err.code === 11000) {
        const key = Object.keys(err.keyValue)[0];
        return res.status(400).json({
          success: false,
          message: `Duplicate ${key} detected. Please choose another one.`,
        });
      }
      return res
        .status(500)
        .json({ success: false, message: "Server error. Update failed." });
    }
  }
);



/** 
 * DELETE TOUR - ADMIN ONLY
 */
router.delete(
  "/tour/delete/:id",
  validateMongoIdFromReqParams,
  isAuthenticated,
  isAdmin,
  async (req, res, next) => {
    try {
      const deletedTour = await TourTable.findByIdAndDelete(req.params.id);
      if (!deletedTour)
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });

      res
        .status(200)
        .json({ success: true, message: "Tour deleted successfully" });
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);

export { router as tourController };
