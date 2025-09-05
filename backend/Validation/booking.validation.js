// backend/validators/bookingSchemas.ts
import * as yup from "yup";

// Booking validation schema
export const bookingSchema = yup.object({
  user: yup
    .string()
    .required("User ID is required")
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB User ID"),
  tour: yup
    .string()
    .required("Tour ID is required")
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB Tour ID"),
  status: yup
    .string()
    .oneOf(["pending", "confirmed", "cancelled"])
    .default("pending"),
  paymentStatus: yup
    .string()
    .oneOf(["unpaid", "paid", "refunded"])
    .default("unpaid"),
  travelersCount: yup
    .number()
    .min(1, "Travelers count must be at least 1")
    .required("Travelers count is required"),
});
