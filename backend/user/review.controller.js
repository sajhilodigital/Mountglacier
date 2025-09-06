// backend/review/review.routes.js
import express from "express";
import mongoose from "mongoose";
import ReviewTable from "../Model/review.model.js";
import TourTable from "../Model/tour.model.js";
import {
  isAuthenticated,
  isAdmin,
} from "../middleware/authentication.middleware.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";
import { validateReqBody } from "../middleware/validateReqBody.js";
import { reviewSchema } from "../validation/review.validation.js";

const router = express.Router();

/**
 * @route   POST /review/tour/:id
 * @desc    Add review for a tour
 * @access  Authenticated Users
 */
router.post(
  "/review/tour/:id",
  isAuthenticated,
  validateMongoIdFromReqParams,
  validateReqBody(reviewSchema),
  async (req, res) => {
    try {
      const { rating, comment } = req.body;
      const tourId = req.params.id;

      // Ensure tour exists
      const tour = await TourTable.findById(tourId);
      if (!tour) {
        return res
          .status(404)
          .json({ success: false, message: "Tour not found." });
      }

      // Prevent duplicate review by same user
      const existingReview = await ReviewTable.findOne({
        user: req.loggedInUserId,
        tour: tourId,
      });
      if (existingReview) {
        return res.status(409).json({
          success: false,
          message: "You have already reviewed this tour.",
        });
      }

      const review = await ReviewTable.create({
        user: req.loggedInUserId,
        tour: tourId,
        rating,
        comment,
      });

      return res
        .status(201)
        .json({ success: true, message: "Review added successfully", review });
    } catch (err) {
      console.error("Review creation error:", err);
      return res.status(500).json({
        success: false,
        message: "An error occurred while adding the review.",
      });
    }
  }
);

/**
 * @route   GET /review/my-reviews
 * @desc    Fetch all reviews by logged-in user
 * @access  Authenticated Users
 */
router.get("/review/my-reviews", isAuthenticated, async (req, res) => {
  try {
    const reviews = await ReviewTable.find({ user: req.loggedInUserId })
      .populate("tour", "title priceUSD")
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: reviews.length, reviews });
  } catch (err) {
    console.error("Fetch user reviews error:", err);
    return res.status(500).json({
      success: false,
      message: "Error fetching your reviews.",
    });
  }
});

/**
 * @route   GET /review/all
 * @desc    Fetch all reviews (Admin only)
 * @access  Admin
 */
router.get("/review/all", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const reviews = await ReviewTable.find()
      .populate("user", "name email")
      .populate("tour", "title")
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: reviews.length, reviews });
  } catch (err) {
    console.error("Fetch all reviews error:", err);
    return res.status(500).json({
      success: false,
      message: "Error fetching reviews.",
    });
  }
});

export { router as reviewController };
