// backend/user/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
      index: true, // improves query performance
    },
    password: { type: String, required: true, minlength: 8 },
    phone: {
      type: String,
      match: [/^\+?[0-9]{7,15}$/, "Enter a valid phone number"],
    },
    role: {
      type: String,
      enum: ["traveler", "admin", "guide"],
      default: "traveler",
    },
    profilePic: { type: String, default: "" },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    lastLogin: { type: Date },
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
  },
  { timestamps: true }
);

// Index email for faster lookups
userSchema.index({ email: 1 });

// Model
const UserTable = mongoose.models.User || mongoose.model("User", userSchema);

export default UserTable;
