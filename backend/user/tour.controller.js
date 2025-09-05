// backend/tour/tour.routes.js
import express from "express";
import validateReqBody from "../middleware/validate.req.body.middleware.js";
import { tourSchema } from "../Validation/tour.validation.js";
import TourTable from "../Model/tour.model.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";
import {
  isAdmin,
  isAuthenticated,
} from "../middleware/authentication.middleware.js";

const router = express.Router();

/**
 * CREATE TOUR - ADMIN ONLY
 */
router.post(
  "/tour/add",
  isAuthenticated,
  isAdmin,
  validateReqBody(tourSchema),
  async (req, res, next) => {
    try {
      const sanitizedBody = {
        ...req.body,
        createdBy: req.loggedInUserId,
      };

      const tour = await TourTable.create(sanitizedBody);

      return res.status(201).json({
        success: true,
        message: "Tour created successfully",
        tour,
      });
    } catch (err) {
      console.error("Error creating tour:", err.message);
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

    // Filter building
    if (region) match.region = { $regex: new RegExp(region, "i") }; // case-insensitive search
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

    return res.status(200).json({
      success: true,
      count: tours.length,
      total: totalTours,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalTours / limit),
      tours,
    });
  } catch (err) {
    console.error("Error fetching tours:", err.message);
    next(err);
  }
});

/**
 * GET SINGLE TOUR DETAILS
 */
router.get(
  "/tour/get-detail/:id",
  validateMongoIdFromReqParams,
  async (req, res, next) => {
    try {
      const tour = await TourTable.findById(req.params.id).lean();

      if (!tour) {
        return res.status(404).json({
          success: false,
          message: "Tour not found",
        });
      }

      return res.status(200).json({
        success: true,
        tour,
      });
    } catch (err) {
      console.error("Error fetching tour detail:", err.message);
      next(err);
    }
  }
);

/**
 * UPDATE TOUR - ADMIN ONLY
 */
router.put(
  "/tour/update/:id",
  validateMongoIdFromReqParams,
  isAuthenticated,
  isAdmin,
  validateReqBody(tourSchema),
  async (req, res, next) => {
    try {
      const updatedTour = await TourTable.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedTour) {
        return res.status(404).json({
          success: false,
          message: "Tour not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Tour updated successfully",
        tour: updatedTour,
      });
    } catch (err) {
      console.error("Error updating tour:", err.message);
      next(err);
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

      if (!deletedTour) {
        return res.status(404).json({
          success: false,
          message: "Tour not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Tour deleted successfully",
      });
    } catch (err) {
      console.error("Error deleting tour:", err.message);
      next(err);
    }
  }
);

export { router as tourController };
