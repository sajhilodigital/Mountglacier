"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  User,
  Home,
  Users,
  ShoppingCart,
  Mail,
  Settings,
  Star,
  MapPinned,
} from "lucide-react";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", path: "/admin", icon: <Home className="h-6 w-6" /> },
    { name: "Users", path: "/admin/user", icon: <Users className="h-6 w-6" /> },
    {
      name: "Orders",
      path: "/admin/order",
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      name: "Contacts",
      path: "/admin/contact",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      name: "Reviews",
      path: "/admin/review",
      icon: <Star className="h-6 w-6" />,
    },
    {
      name: "Tour Details",
      path: "/admin/tourdetail",
      icon: <MapPinned className="h-6 w-6" />,
    },
    {
      name: "Settings",
      path: "/admin/setting",
      icon: <Settings className="h-6 w-6" />,
    },
  ];

  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen bg-white shadow-md p-6 flex-col z-50">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <Image src="/logo1.png" alt="Store Logo" width={200} height={60} />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {menus.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link key={i} href={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start hover:bg-gray-100"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Dashboard Link */}
        <div className="mt-4">
          <Link href="/">
            <Button
              variant={pathname.startsWith("/user") ? "default" : "ghost"}
              className="w-full justify-start hover:bg-gray-100"
            >
              <User className="h-5 w-5 mr-2" />
              User Dashboard
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar (Icons only) */}
      <aside className="fixed top-0 left-0 h-screen md:w-full bg-white shadow-md flex flex-col items-center py-4 px-2 md:hidden z-50">
        {menus.map((item, i) => {
          const isActive = pathname === item.path;
          return (
            <Link key={i} href={item.path}>
              <button
                className={`w-12 h-12 flex items-center justify-center my-2 rounded-lg hover:bg-gray-100 transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item.icon}
              </button>
            </Link>
          );
        })}

        {/* User Dashboard */}
        <div className="mt-auto">
          <Link href="/">
            <button
              className={`w-12 h-12 flex items-center justify-center my-2 rounded-lg hover:bg-gray-100 transition-colors ${
                pathname.startsWith("/user") ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <User className="h-6 w-6" />
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
