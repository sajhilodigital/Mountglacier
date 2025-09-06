import Header from "@/components/navbar/header";
import AuthGuard from "@/gurd/AuthGurd";
import GuestGuard from "@/gurd/GuestGurd";
import ReactQueryClientProvider from "@/provider/QueryClientProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glacier Trekking Adventures", // Custom title
  description: "Explore the mountains with us",
  icons: {
    icon: "/logo.png", // Use your logo.png in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <GuestGuard>
        <AuthGuard>
          <Header />
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </AuthGuard>
        </GuestGuard>
      </body>
    </html>
  );
}
