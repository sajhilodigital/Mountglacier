// backend/user/user.controller.js
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"; // <--- add this
import UserTable from "../Model/user.model.js";
import {
  loginSchema,
  userRegisterSchema,
} from "../Validation/user.validation.js";
import validateReqBody from "../middleware/validate.req.body.middleware.js";

dotenv.config();

const router = express.Router();
router.use(cookieParser()); // <--- enable cookie parsing

// Environment variables with defaults
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS ?? "12", 10);
const JWT_EXPIRY = process.env.JWT_EXPIRY ?? "7d";
const COOKIE_EXPIRY_MS = parseInt(
  process.env.COOKIE_EXPIRY_MS ?? `${7 * 24 * 60 * 60 * 1000}`,
  10
);

// -------------------- REGISTER --------------------
router.post(
  "/register",
  validateReqBody(userRegisterSchema),
  async (req, res) => {
    try {
      const { email, password, ...rest } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required.",
        });
      }

      const existingUser = await UserTable.findOne({ email }).lean();
      if (existingUser) {
        return res
          .status(409)
          .json({ success: false, message: "User already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await UserTable.create({
        email,
        password: hashedPassword,
        ...rest,
      });

      return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        userId: user._id.toString(),
      });
    } catch (err) {
      console.error("Register Error:", err);
      return res.status(500).json({
        success: false,
        message: err?.message ?? "Internal server error",
      });
    }
  }
);

// -------------------- LOGIN --------------------
router.post("/login", validateReqBody(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password required." });
    }

    const user = await UserTable.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const payload = {
      id: user._id.toString(),
      email: user.email,
      role: user.role ?? "user",
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });

    const { password: _, __v, ...userDetails } = user.toObject();

    // ✅ FIX cookie options
    res.cookie("accessToken", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
      // sameSite: "Lax", // "Strict" can sometimes block in Postman
      maxAge: COOKIE_EXPIRY_MS,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: { ...userDetails, _id: user._id.toString() },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      success: false,
      message: err?.message ?? "Internal server error",
    });
  }
});

// -------------------- LOGOUT --------------------
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "Lax",
    });
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully." });
  } catch (err) {
    console.error("Logout Error:", err);
    return res.status(500).json({
      success: false,
      message: err?.message ?? "Internal server error",
    });
  }
});

// -------------------- AUTHENTICATION --------------------


export { router as userController };
