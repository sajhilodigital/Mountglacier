import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/navbar/footer";

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
        {/* Header stays fixed at the top */}
        <Header />
        {/* Add padding so content doesn’t hide behind the header */}
        <main className="pt-16">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
