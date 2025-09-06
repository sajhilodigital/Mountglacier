// backend/payment/payment.routes.js
import express from "express";
import mongoose from "mongoose";
import PaymentTable from "../Model/payment.model.js";
import BookingTable from "../Model/booking.model.js";
import {
  isAuthenticated,
  isAdmin,
} from "../middleware/authentication.middleware.js";
import { validateMongoIdFromReqParams } from "../middleware/validate.mongo.id.js";
import { validateReqBody } from "../middleware/validateReqBody.js";
import { paymentSchema } from "../validation/payment.validation.js";

const router = express.Router();

/**
 * @route   POST /payment/:bookingId
 * @desc    Create a payment for a booking
 * @access  Authenticated Users
 */
router.post(
  "/payment/:id",
  isAuthenticated,
  validateMongoIdFromReqParams,
  validateReqBody(paymentSchema),
  async (req, res) => {
    try {
      const bookingId = req.params.id;
      const { amount, method, transactionId } = req.body;

      // Ensure booking exists
      const booking = await BookingTable.findById(bookingId);
      if (!booking) {
        return res
          .status(404)
          .json({ success: false, message: "Booking not found." });
      }

      if (booking.paymentStatus === "paid") {
        return res.status(400).json({
          success: false,
          message: "This booking has already been paid.",
        });
      }

      const payment = await PaymentTable.create({
        booking: bookingId,
        amount,
        method,
        transactionId,
        status: "pending",
      });

      booking.paymentStatus = "paid";
      booking.status = "confirmed";
      await booking.save();

      return res
        .status(201)
        .json({
          success: true,
          message: "Payment recorded successfully",
          payment,
        });
    } catch (err) {
      console.error("Payment error:", err);
      return res.status(500).json({
        success: false,
        message: "Error processing payment.",
      });
    }
  }
);

/**
 * @route   GET /payment/all
 * @desc    Fetch all payments (Admin only)
 * @access  Admin
 */
router.get("/payment/all", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const payments = await PaymentTable.find()
      .populate("booking", "travelersCount status")
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ success: true, count: payments.length, payments });
  } catch (err) {
    console.error("Fetch payments error:", err);
    return res.status(500).json({
      success: false,
      message: "Error fetching payments.",
    });
  }
});

export { router as paymentController };
