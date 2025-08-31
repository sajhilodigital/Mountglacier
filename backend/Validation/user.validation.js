import * as yup from "yup";

export const userRegisterSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character")
    .required("Password is required"),
  phone: yup.string().matches(/^[0-9]{7,15}$/, "Invalid phone number"),
  role: yup.string().oneOf(["traveler", "admin", "guide"]).default("traveler"),
  profilePic: yup.string().url("Must be a valid URL").nullable(),
});

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
