"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection2() {
  return (
    <Box className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/dashboard/contact1.jpeg"
        alt="Contact background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Gradient Overlay */}
      <Box className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></Box>

      {/* Content */}
      <Box className="relative z-10 text-center px-6 md:px-12 space-y-6">
        {/* Main Heading */}
        <Box className="inline-block bg-black/60 backdrop-blur-sm px-6 py-4 rounded-xl animate-fadeIn">
          <Typography
            variant="h2"
            component="h1"
            className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
          >
            Let’s plan your next adventure together
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box className="inline-block bg-blue-900/60 backdrop-blur-sm px-4 py-2 rounded-lg animate-fadeIn delay-150">
          <Typography
            variant="subtitle1"
            className="text-lg md:text-xl text-white drop-shadow-md"
          >
            – reach out today.
          </Typography>
        </Box>
      </Box>

      {/* Animations via Tailwind */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </Box>
  );
}
