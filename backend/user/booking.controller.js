// backend/booking/booking.routes.js
import express from "express";
import mongoose from "mongoose";
import TourTable from "../Model/tour.model.js";
import BookingTable from "../Model/booking.model.js";
import {
  isAdmin,
  isAuthenticated,
} from "../middleware/authentication.middleware.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";

const router = express.Router();

/**
 * @route   POST /booking/tour/:id
 * @desc    Create a booking for a tour
 * @access  Authenticated Users
 */
router.post(
  "/booking/tour/:id",
  isAuthenticated,
  validateMongoIdFromReqParams,
  async (req, res) => {
    try {
      const { travelersCount } = req.body;
      const { id: tourId } = req.params;

      // 1️⃣ Validate travelersCount strictly
      if (
        !travelersCount ||
        typeof travelersCount !== "number" ||
        travelersCount < 1 ||
        travelersCount > 20
      ) {
        return res.status(400).json({
          success: false,
          message: "Travelers count must be a number between 1 and 20.",
        });
      }

      // 2️⃣ Check if tour exists and is active
      const tour = await TourTable.findOne({
        _id: tourId,
        isActive: true,
      }).lean();
      if (!tour) {
        return res
          .status(404)
          .json({ success: false, message: "Tour not found or inactive." });
      }

      // 3️⃣ Prevent duplicate booking by the same user for the same tour
      const existingBooking = await BookingTable.findOne({
        user: req.loggedInUserId,
        tour: tourId,
        status: { $in: ["pending", "confirmed"] },
      });

      if (existingBooking) {
        return res.status(409).json({
          success: false,
          message: "You already have an active booking for this tour.",
        });
      }

      // 4️⃣ Create booking securely
      const booking = await BookingTable.create({
        user: req.loggedInUserId,
        tour: tourId,
        travelersCount,
        status: "pending",
        paymentStatus: "unpaid",
      });

      return res.status(201).json({
        success: true,
        message: "Booking created successfully.",
        booking,
      });
    } catch (err) {
      console.error("Booking creation error:", err);

      if (err instanceof mongoose.Error.CastError) {
        return res.status(400).json({
          success: false,
          message: "Invalid tour ID format.",
        });
      }

      return res.status(500).json({
        success: false,
        message:
          "An internal server error occurred while creating the booking.",
      });
    }
  }
);

/**
 * @route   GET /booking/get/my-bookings/list
 * @desc    Fetch all bookings for the logged-in user
 * @access  Authenticated Users
 */
router.get(
  "/booking/get/my-bookings/list",
  isAuthenticated,
  async (req, res) => {
    try {
      const userId = new mongoose.Types.ObjectId(req.loggedInUserId);

      const bookings = await BookingTable.aggregate([
        { $match: { user: userId } },
        {
          $lookup: {
            from: "tours",
            localField: "tour",
            foreignField: "_id",
            as: "tourDetails",
          },
        },
        { $unwind: "$tourDetails" },
        {
          $project: {
            travelersCount: 1,
            status: 1,
            paymentStatus: 1,
            bookedAt: 1,
            "tourDetails.title": 1,
            "tourDetails.priceUSD": 1,
            "tourDetails.image": 1,
          },
        },
        { $sort: { bookedAt: -1 } },
      ]);

      return res.status(200).json({
        success: true,
        count: bookings.length,
        bookings,
      });
    } catch (err) {
      console.error("Error fetching user bookings:", err);
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching your bookings.",
      });
    }
  }
);

/**
 * @route   GET /booking/list
 * @desc    Fetch all bookings (Admin only)
 * @access  Admin
 */
router.get("/booking/list", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const bookings = await BookingTable.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      { $unwind: "$userDetails" },
      {
        $lookup: {
          from: "tours",
          localField: "tour",
          foreignField: "_id",
          as: "tourDetails",
        },
      },
      { $unwind: "$tourDetails" },
      {
        $project: {
          travelersCount: 1,
          status: 1,
          paymentStatus: 1,
          bookedAt: 1,
          "userDetails.name": 1,
          "userDetails.email": 1,
          "tourDetails.title": 1,
          "tourDetails.priceUSD": 1,
        },
      },
      { $sort: { bookedAt: -1 } },
    ]);

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (err) {
    console.error("Error fetching all bookings:", err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching bookings.",
    });
  }
});

export { router as bookingController };
