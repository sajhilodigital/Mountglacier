"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { AxiosError } from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";
import axiosInstance from "@/lib/axiosInstanstance";

// ================= TYPES =================

// Request body
interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

// Server response
interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

// Error shape
interface ApiError {
  message: string;
  code?: number;
}

// ================= SCHEMA =================
const LoginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  remember: yup.boolean().default(false).defined(),
});

type LoginValues = yup.InferType<typeof LoginSchema>; // same as LoginRequest

// ================= COMPONENT =================
export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  const { mutate, isPending } = useMutation<
    LoginResponse, // TData
    AxiosError<ApiError>, // TError
    LoginRequest // TVariables
  >({
    mutationKey: ["login-user"],
    mutationFn: async (values: LoginRequest): Promise<LoginResponse> => {
      const res = await axiosInstance.post<LoginResponse>(
        "/user/login",
        values
      );
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Logged in successfully");
        router.push("/booknow");
      } else {
        toast.error(data.message || "Login failed");
      }
    },
    onError: (err) => {
      toast.error(err.response?.data?.message ?? "Invalid credentials");
    },
  });

  const initialValues: LoginValues = {
    email: "",
    password: "",
    remember: false,
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-muted to-background p-4">
      <Toaster richColors position="top-center" />

      <Card className="w-full max-w-md border-0 shadow-xl p-0">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Sign in to continue your journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values) => mutate(values)}
          >
            {({ values, handleChange }) => (
              <Form className="space-y-6">
                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
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

                {/* Password */}
                <div>
                  <Label>Password</Label>
                  <div className="relative">
                    <Field
                      as={Input}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
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

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={values.remember}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border"
                    />
                    Remember me
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm underline underline-offset-4"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Signing in…" : "Sign in"}
                </Button>

                <Separator className="my-2" />

                <p className="text-sm text-center text-muted-foreground">
                  Don’t have an account?{" "}
                  <a className="underline underline-offset-4" href="/register">
                    Create one
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
