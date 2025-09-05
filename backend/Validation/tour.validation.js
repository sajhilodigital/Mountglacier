// backend/validators/tourSchemas.ts
import * as yup from "yup";



// Tour validation schema
export const tourSchema = yup.object({
  code: yup.string().required("Code is required"),
  title: yup.string().required("Title is required"),
  slug: yup
    .string()
    .matches(/^[a-z0-9-]+$/, "Slug must be URL-friendly")
    .optional(),
  region: yup.string().optional(),
  description: yup.string().optional(),
  durationDays: yup.number().positive().optional(),
  grade: yup.string().oneOf(["Easy", "Moderate", "Strenuous"]).optional(),
  priceUSD: yup.number().min(0).optional(),
  priceTiers: yup
    .array()
    .of(
      yup.object({
        groupSize: yup.string().required(),
        priceUSD: yup.number().min(0).required(),
      })
    )
    .optional(),
  season: yup.array().of(yup.string()).optional(),
  included: yup.array().of(yup.string()).optional(),
  excluded: yup.array().of(yup.string()).optional(),
  accommodation: yup.string().optional(),
  maxAltitude: yup.number().positive().optional(),
  transportation: yup.array().of(yup.string()).optional(),
  highlights: yup.array().of(yup.string()).optional(),
  itinerary: yup
    .array()
    .of(
      yup.object({
        day: yup.number().required(),
        title: yup.string().required(),
        details: yup.string().optional(),
      })
    )
    .optional(),
  images: yup.array().of(yup.string().url("Must be a valid URL")).optional(),
});
