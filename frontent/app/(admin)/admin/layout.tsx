// app/layout.tsx
import AuthGuard from "@/gurd/AuthGurd";
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
  title: "Glacier Trekking Adventures",
  description: "Explore the mountains with us",
  icons: {
    icon: "/logo1.png",
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
        <AuthGuard>
          <ReactQueryClientProvider>
            {children}
          </ReactQueryClientProvider>
        </AuthGuard>
      </body>
    </html>
  );
}
