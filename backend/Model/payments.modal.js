import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
      index: true,
    },
    amount: { type: Number, required: true },
    method: {
      type: String,
      enum: ["Card", "Bank", "Cash", "eSewa", "Khalti"],
      required: true,
    },
    providerRef: { type: String }, // provider transaction id
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed", "Refunded"],
      required: true,
      default: "Pending",
    },
    meta: { type: Object }, // store provider response
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
