"use client";
import axiosInstance from "@/lib/axiosInstanstance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface AdminGuardProps {
  children: React.ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // null = unknown

  useEffect(() => {
    let mounted = true;

    const checkAdmin = async () => {
      try {
        const res = await axiosInstance.get("/auth/me"); // cookies sent automatically

        if (!mounted) return;

        if (res.status === 200 && res.data.user) {
          const user = res.data?.user;
          if (user.role === "admin") {
            setIsAdmin(true); // allow rendering children
          } else {
            setIsAdmin(false);
            router.replace("/"); // redirect non-admin users
          }
        } else {
          setIsAdmin(false);
          router.replace("/"); // redirect if not authenticated
        }
      } catch (err) {
        console.log("Admin auth check error:", err);
        if (!mounted) return;
        setIsAdmin(false);
        router.replace("/"); // redirect if error
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    };

    checkAdmin();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (loading) return null; // wait for auth check
  if (isAdmin === false) return null; // redirecting, don’t render children yet

  return <>{children}</>; // render children only if admin
};

export default AdminGuard;
