// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Admin/sidebar";
import Header from "@/components/navbar/header";
import { Toaster } from "sonner";
import ReactQueryClientProvider from "@/provider/QueryClientProvider";
import AdminGuard from "@/guard/AuthGuard";

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
        <Toaster />
        <AdminGuard>

        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </AdminGuard>
      </body>
    </html>
  );
}
