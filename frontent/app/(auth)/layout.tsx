import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/navbar/footer";
import { Toaster } from "sonner";
import ReactQueryClientProvider from "@/provider/QueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// layout.tsx or layout.js
export const metadata: Metadata = {
  title: {
    default: "Glacier Trekking Adventures",
    template: "%s | Glacier Trekking Adventures",
  },
  description: "Explore the mountains with us — guided treks, tours, and adventures.",
  keywords: ["trekking", "mountains", "adventures", "glacier tours"],
  openGraph: {
    title: "Glacier Trekking Adventures",
    description: "Join us for unforgettable glacier and mountain treks.",
    url: "https://yourdomain.com",
    siteName: "Glacier Trekking Adventures",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Glacier Trekking Adventures Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glacier Trekking Adventures",
    description: "Explore the mountains with us.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
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

        <Toaster />

          <ReactQueryClientProvider>

             <Header />
            {children}
            </ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
