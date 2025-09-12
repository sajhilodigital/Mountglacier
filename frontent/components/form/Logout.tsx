"use client";

import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstanstance";
// import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  const router = useRouter();
  // const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      // 1️⃣ Call backend logout API to clear cookies
      await axiosInstance.post("/logout");

      // 2️⃣ Clear Redux state
      // dispatch(clearUser());

      // 3️⃣ Clear localStorage/sessionStorage (extra precaution)
      localStorage.clear();
      sessionStorage.clear();

      // 4️⃣ Redirect to login page
      router.push("/login");

      // 5️⃣ Notify user
      toast.success("Logout Successful");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout failed. Try again.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="h-8 w-36 flex justify-center gap-3 items-center bg-transparent "
    >
      <LogOut size={16} /> Log Out
    </button>
  ); 
};
