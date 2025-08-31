import * as yup from "yup";

export const bookingSchema = yup.object({
  user: yup.string().required("User ID required"),
  tour: yup.string().required("Tour ID required"),
  status: yup.string().oneOf(["pending", "confirmed", "cancelled"]),
  paymentStatus: yup.string().oneOf(["unpaid", "paid", "refunded"]),
  travelersCount: yup.number().min(1).required("Travelers count required"),
});
