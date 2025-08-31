import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }, // hashed later
    phone: { type: String },
    role: {
      type: String,
      enum: ["traveler", "admin", "guide"],
      default: "traveler",
    },
    profilePic: { type: String },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

const UserTable = mongoose.model("User", userSchema);
export default UserTable;
