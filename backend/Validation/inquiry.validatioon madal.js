import * as yup from "yup";

export const inquirySchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().optional(),
  subject: yup.string().optional(),
  message: yup.string().required(),
  tour: yup.string().optional(),
});
