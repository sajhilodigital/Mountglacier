import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
      index: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ReviewSchema.index({ user: 1, tour: 1 }, { unique: true }); // one review per user per tour

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
