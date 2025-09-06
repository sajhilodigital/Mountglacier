"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";

const AuthGuard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const role = getCookie("role");

    if (!accessToken || !role) {
      setIsAuthenticated(false);

      // ✅ clear auth cookies
      deleteCookie("accessToken");
      deleteCookie("role");
      deleteCookie("firstName");

      router.replace("/login");
    }
  }, [router]);

  return <>{isAuthenticated && children}</>;
};

export default AuthGuard;
