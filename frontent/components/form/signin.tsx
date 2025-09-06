"use client";

import axiosInstance from "@/lib/axiosInstanstance";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

// ✅ Validation Schema
const RegisterSchema = Yup.object({
  name: Yup.string().trim().min(2).max(50).required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  role: Yup.string()
    .oneOf(["traveler", "admin", "guide"], "Invalid role")
    .required("Role is required"),
  profilePic: Yup.string().url("Enter a valid URL").optional().nullable(),
  password: Yup.string()
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "Must contain uppercase")
    .matches(/[a-z]/, "Must contain lowercase")
    .matches(/[0-9]/, "Must contain a number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

//  Types from Yup schema
export type RegisterValues = Yup.InferType<typeof RegisterSchema>;

//  API Response Type
interface RegisterResponse {
  message: string;
  userId?: string;
}

export default function RegisterForm() {
  const router = useRouter();

  //  Secure API call with axiosInstance
  const { mutate, isPending } = useMutation<
    RegisterResponse,
    Error,
    RegisterValues
  >({
    mutationKey: ["register-user"],
    mutationFn: async (values: RegisterValues) => {
      const { data } = await axiosInstance.post<RegisterResponse>(
        "/user/register",
        values,
        { withCredentials: true }
      );
      return data;
    },
    onSuccess: () => {
      router.replace("/login");
    },
    onError: (err: Error) => {
      alert(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (values: RegisterValues) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Create an Account
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Join us and start your adventures
        </p>

        <Formik<RegisterValues>
          initialValues={{
            name: "",
            email: "",
            phone: "",
            role: "traveler",
            profilePic: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Role */}
              <div>
                <Field
                  as="select"
                  name="role"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="traveler">Traveler</option>
                  <option value="guide">Guide</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
              >
                {isPending && <Loader2 className="h-5 w-5 mr-2 animate-spin" />}
                {isPending ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
