// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Admin/sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glacier Trekking Adventures",
  description: "Explore the mountains with us",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar (fixed on the left) */}
          <aside className="w-64 fixed top-0 left-0 h-screen border-r bg-white shadow-md">
            <Sidebar />
          </aside>

          {/* Page content (with left margin so it doesn't overlap sidebar) */}
          <main className="flex-1 ml-64 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
     
    </html>
  );
}
