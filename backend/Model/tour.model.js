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
      { groupSize: String, priceUSD: Number },
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
        images: [
          {
            url: { type: String, required: true },
            public_id: { type: String, required: true },
          },
        ],
      },
    ],
    images: [
      { url: String, public_id: String }
    ],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const TourTable = mongoose.models.Tour || mongoose.model("Tour", tourSchema);
export default TourTable;
