import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    region: { type: String },
    description: { type: String },
    durationDays: { type: Number },
    grade: { type: String }, // Easy, Moderate, Strenuous
    priceUSD: { type: Number },
    priceTiers: [{ groupSize: String, priceUSD: Number }],
    season: [{ type: String }],
    included: [{ type: String }],
    excluded: [{ type: String }],
    accommodation: { type: String },
    maxAltitude: { type: Number },
    transportation: [{ type: String }],
    highlights: [{ type: String }],
    itinerary: [{ day: Number, title: String, details: String }],
    images: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const TabTable = mongoose.model("Tour", tourSchema);
export default TabTable;
