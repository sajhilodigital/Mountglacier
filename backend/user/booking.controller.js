// backend/booking/booking.routes.js
import express from "express";
import mongoose from "mongoose";
import TourTable from "../Model/tour.model.js";
import BookingTable from "../Model/booking.model.js";
import { isAdmin, isAuthenticated } from "../middleware/authentication.middleware.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";

const router = express.Router();

// Create booking - any logged-in user
router.post(
  "/booking/tour/:id",
  isAuthenticated,
  validateMongoIdFromReqParams,
  async (req, res, next) => {
    try {
      const { travelersCount } = req.body;
      const { tourId } = req.params;

      if (!travelersCount || travelersCount < 1) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid travelers count" });
      }

      const tour = await TourTable.findById(tourId);
      if (!tour)
        return res
          .status(404)
          .json({ success: false, message: "Tour not found" });

      const booking = await BookingTable.create({
        user: req.loggedInUserId, // logged-in user id
        tour: tourId,
        travelersCount,
      });

      res.status(201).json({ success: true, booking });
    } catch (err) {
      next(err);
    }
  }
);

// Get my bookings
router.get("/booking/get/my-bookings/list", isAuthenticated, async (req, res, next) => {
  try {
    const bookings = await BookingTable.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(req.loggedInUserId) } },
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
        },
      },
      { $sort: { bookedAt: -1 } },
    ]);
    res.status(200).json({ success: true, count: bookings.length, bookings });
  } catch (err) {
    next(err);
  }
});

// Get all bookings - admin only
router.get("/booking/list", isAuthenticated, isAdmin, async (req, res, next) => {
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
        },
      },
      { $sort: { bookedAt: -1 } },
    ]);
    res.status(200).json({ success: true, count: bookings.length, bookings });
  } catch (err) {
    next(err);
  }
});

export { router as bookingController };
