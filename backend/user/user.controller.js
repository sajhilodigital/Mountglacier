import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import UserTable from "../Model/user.model.js";
import { loginSchema, userRegisterSchema } from "../Validation/user.validation.js";
import validateReqBody from "../middleware/validate.req.body.middleware.js";

dotenv.config();

const router = express.Router();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || "default_insecure_secret";
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;
const JWT_EXPIRY = "7d";
const COOKIE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// REGISTER
router.post(
  "/user/register",
  validateReqBody(userRegisterSchema),
  async (req, res) => {
    try {
      const newUser = req.body;

      const existingUser = await UserTable.findOne({
        email: newUser.email,
      });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists." });
      }

      const hashedPassword = await bcrypt.hash(newUser.password, SALT_ROUNDS);
      newUser.password = hashedPassword;

      await UserTable.create(newUser);

      return res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      console.error(error.message);
      // return res.status(500).json({ message: "Internal server error." });
    }
  }
);

// LOGIN
router.post(
  "/user/login",
  validateReqBody(loginSchema),
  async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserTable.findOne({ email }).lean();
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      const payload = { email: user.email, id: user._id };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });

      // remove password before sending user details
      const { password: _, ...userDetails } = user;

      // Send cookie
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // send only over HTTPS in production
        sameSite: "Strict",
        maxAge: COOKIE_EXPIRY_MS,
      });

      return res.status(200).json({
        message: "Login successful.",
        userDetails,
      });
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
);

// LOGOUT
router.post("/user/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "Logged out successfully." });
});

export { router as userController };
