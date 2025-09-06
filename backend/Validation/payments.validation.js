import * as yup from "yup";

export const createPaymentSchema = yup.object({
  booking: yup.string().required(),
  amount: yup.number().min(0).required(),
  method: yup
    .string()
    .oneOf(["Card", "Bank", "Cash", "eSewa", "Khalti"])
    .required(),
  providerRef: yup.string().optional(),
});

export const updatePaymentSchema = yup.object({
  status: yup
    .string()
    .oneOf(["Pending", "Completed", "Failed", "Refunded"])
    .required(),
});
