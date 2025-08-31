import * as yup from "yup";

export const tourSchema = yup.object({
  code: yup.string().required("Code is required"),
  title: yup.string().required("Title is required"),
  slug: yup.string().matches(/^[a-z0-9-]+$/, "Slug must be URL-friendly"),
  region: yup.string(),
  description: yup.string(),
  durationDays: yup.number().positive(),
  grade: yup.string().oneOf(["Easy", "Moderate", "Strenuous"]),
  priceUSD: yup.number().min(0),
  priceTiers: yup.array().of(
    yup.object({
      groupSize: yup.string().required(),
      priceUSD: yup.number().min(0).required(),
    })
  ),
  season: yup.array().of(yup.string()),
  included: yup.array().of(yup.string()),
  excluded: yup.array().of(yup.string()),
  accommodation: yup.string(),
  maxAltitude: yup.number().positive(),
  transportation: yup.array().of(yup.string()),
  highlights: yup.array().of(yup.string()),
  itinerary: yup.array().of(
    yup.object({
      day: yup.number().required(),
      title: yup.string().required(),
      details: yup.string(),
    })
  ),
  images: yup.array().of(yup.string().url("Must be a valid URL")),
});
