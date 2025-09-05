// backend/tour/tour.model.js
import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    region: { type: String },
    description: { type: String },
    durationDays: { type: Number },
    grade: {
      type: String,
      enum: ["easy", "moderate", "risky", "challenging"], 
      required: true,
    },
    priceUSD: { type: Number },
    priceTiers: [
      {
        groupSize: { type: String },
        priceUSD: { type: Number },
      },
    ],
    season: [{ type: String }],
    included: [{ type: String }],
    excluded: [{ type: String }],
    accommodation: { type: String },
    maxAltitude: { type: Number },
    transportation: [{ type: String }],
    highlights: [{ type: String }],
    itinerary: [
      {
        day: { type: Number },
        title: { type: String },
        details: { type: String },
      },
    ],
    images: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const TourTable = mongoose.models.Tour || mongoose.model("Tour", tourSchema);

export default TourTable;
