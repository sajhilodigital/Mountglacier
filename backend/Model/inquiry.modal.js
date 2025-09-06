import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" }, // optional, if related to tour
    status: { type: String, enum: ["new", "open", "closed"], default: "new" },
    handledBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry ||
  mongoose.model("Inquiry", InquirySchema);
