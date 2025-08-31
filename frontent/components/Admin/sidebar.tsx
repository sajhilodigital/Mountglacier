"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { User, Menu, X } from "lucide-react"; // icons
import { useState } from "react";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/user" },
    { name: "Orders", path: "/admin/order" },
    { name: "Contacts", path: "/admin/contact" },
    { name: "Settings", path: "/admin/setting" },
  ];

  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md">
        <Image src="/logo1.png" alt="Store Logo" width={120} height={40} />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-6 flex flex-col transform transition-transform duration-300 z-50
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        {/* Logo (hidden on mobile since header already has it) */}
        <div className="hidden md:flex items-center mb-6">
          <Image
            src="/logo1.png"
            alt="Store Logo"
            width={200}
            height={60}
            className="mr-2"
          />
        </div>

        {/* Menu */}
        <nav className="space-y-4 flex-1">
          {menus.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link key={i} href={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Dashboard Button */}
        <div className="mt-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Button
              variant={pathname.startsWith("/user") ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <User className="h-5 w-5 mr-2" />
              User Dashboard
            </Button>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
