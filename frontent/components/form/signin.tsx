"use client";

import axiosInstance from "@/lib/axiosInstanstance";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Loader2, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster, toast } from "sonner";

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

export type RegisterValues = Yup.InferType<typeof RegisterSchema>;

interface RegisterResponse {
  message: string;
  userId?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // ✅ React Query Mutation
  const { mutate, isPending } = useMutation<
    RegisterResponse,
    Error,
    RegisterValues
  >({
    mutationKey: ["register-user"],
    mutationFn: async (values: RegisterValues) => {
      const { data } = await axiosInstance.post<RegisterResponse>(
        "/register",
        values,
        { withCredentials: true }
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Account created successfully!");
      router.replace("/login");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Something went wrong");
    },
  });

  const initialValues: RegisterValues = {
    name: "",
    email: "",
    phone: "",
    role: "traveler",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-muted to-background p-4">
      <Toaster richColors position="top-center" />

      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>Join us and start your adventures.</CardDescription>
        </CardHeader>

        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={(values) => mutate(values)}
          >
            {() => (
              <Form className="space-y-5">
                {/* Name */}
                <div>
                  <Label>Full Name</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type="text"
                      name="name"
                      placeholder="Enter Your Name ..."
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label>Phone</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type="text"
                      name="phone"
                      placeholder="98XXXXXXXX"
                      className="pl-10"
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Role */}
                <div>
                  <Label>Role</Label>
                  <Field
                    as="select"
                    name="role"
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="traveler">Traveler</option>
                    <option value="admin">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <Label>Password</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <Label>Confirm Password</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirm ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending && (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  )}
                  {isPending ? "Registering..." : "Register"}
                </Button>

                <Separator className="my-2" />

                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <a className="underline underline-offset-4" href="/login">
                    Login
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
