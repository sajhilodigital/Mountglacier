"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getCookie } from "cookies-next"; // ✅ use cookies

const GuestGuard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const accessToken = getCookie("accessToken"); // ✅ read from cookie

    if (accessToken) {
      router.replace("/"); // already logged in
    } else {
      setChecked(true); // allow rendering login/register
    }
  }, [router]);

  if (!checked) return null; // prevent flicker while checking

  return <>{children}</>;
};

export default GuestGuard;
