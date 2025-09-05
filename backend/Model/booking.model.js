// backend/booking/booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
    travelersCount: { type: Number, required: true, min: 1 },
    bookedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const BookingTable =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default BookingTable;
