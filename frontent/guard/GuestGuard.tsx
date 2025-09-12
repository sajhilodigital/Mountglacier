"use client";
import axiosInstance from "@/lib/axiosInstanstance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = unknown

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get("/auth/me"); // cookies sent automatically

        if (!mounted) return;

        if (res.status === 200) {
          setIsAuthenticated(true); // user is authenticated
          router.replace("/"); // redirect away from guest pages
        } else {
          setIsAuthenticated(false); // user is not authenticated, can show children
        }
      } catch (err) {
        console.log("Auth check error:", err);
        if (!mounted) return;
        setIsAuthenticated(false); // treat error as unauthenticated
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (loading) return null; // wait for auth check
  return <>{isAuthenticated && children}</>; // render children only if NOT authenticated
};

export default GuestGuard;
