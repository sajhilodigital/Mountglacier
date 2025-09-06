// backend/inquiry/inquiry.routes.js
import express from "express";
import mongoose from "mongoose";
import InquiryTable from "../Model/inquiry.model.js";
import {
  isAuthenticated,
  isAdmin,
} from "../middleware/authentication.middleware.js";
import { validateReqBody } from "../middleware/validateReqBody.js";
import { inquirySchema } from "../validation/inquiry.validation.js";

const router = express.Router();

/**
 * @route   POST /inquiry
 * @desc    Create an inquiry
 * @access  Public
 */
router.post("/inquiry", validateReqBody(inquirySchema), async (req, res) => {
  try {
    const inquiry = await InquiryTable.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry,
    });
  } catch (err) {
    console.error("Inquiry creation error:", err);
    return res.status(500).json({
      success: false,
      message: "Error submitting inquiry.",
    });
  }
});

/**
 * @route   GET /inquiry/all
 * @desc    Fetch all inquiries (Admin only)
 * @access  Admin
 */
router.get("/inquiry/all", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const inquiries = await InquiryTable.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (err) {
    console.error("Error fetching inquiries:", err);
    return res.status(500).json({
      success: false,
      message: "Error fetching inquiries.",
    });
  }
});

export { router as inquiryController };
