// backend/tour/tour.routes.js
import express from "express";
import validateReqBody from "../middleware/validate.req.body.middleware.js";
import { tourSchema } from "../Validation/tour.validation.js";
import TourTable from "../Model/tour.model.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";
import { isAdmin, isAuthenticated } from "../middleware/authentication.middleware.js";


const router = express.Router();

// Create tour - ADMIN only
router.post(
  "/tour/add",
//   isAuthenticated,
//   isAdmin,
  validateReqBody(tourSchema),
  async (req, res, next) => {
    try {
      const tour = await TourTable.create({
        ...req.body,
        createdBy: req.loggedInUserId,
      });
     return  res.status(201).json({ success: true, tour });
    } catch (err) {
      next(err);
    }
  }
);

// Get all tours with filters and pagination
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
    if (region) match.region = region;
    if (grade) match.grade = grade;
    if (minPrice || maxPrice) match.priceUSD = {};
    if (minPrice) match.priceUSD.$gte = parseFloat(minPrice);
    if (maxPrice) match.priceUSD.$lte = parseFloat(maxPrice);

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
        },
      },
      { $sort: { createdAt: -1 } },
      { $skip: (page - 1) * parseInt(limit) },
      { $limit: parseInt(limit) },
    ]);

    res.status(200).json({ success: true, count: tours.length, tours });
  } catch (err) {
    next(err);
  }
});

// Get single tour
router.get("/tour/get-detail/:id", validateMongoIdFromReqParams, async (req, res, next) => {
  try {
    const tour = await TourTable.findById(req.params.id).lean();
    if (!tour)
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    res.status(200).json({ success: true, tour });
  } catch (err) {
    next(err);
  }
});

// Update tour - ADMIN only
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
        { new: true }
      );
      if (!updatedTour)
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });
      res.status(200).json({ success: true, tour: updatedTour });
    } catch (err) {
      next(err);
    }
  }
);

// Delete tour - ADMIN only
router.delete(
  "/:id",
  validateMongoIdFromReqParams,
  isAuthenticated,
  isAdmin,
  async (req, res, next) => {
    try {
        console.log(req.params.id)
      const deletedTour = await TourTable.findByIdAndDelete(req.params.id);
      if (!deletedTour)
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });
     return res
        .status(200)
        .json({ success: true, message: "Tour deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
);

export { router as tourController };
