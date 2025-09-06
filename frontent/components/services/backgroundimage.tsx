"use client";

import { Box, Typography } from "@mui/material";

export default function HeroSection2122() {
  return (
    <Box
      className="relative w-full h-[90vh] flex items-center justify-start px-6 md:px-16"
      sx={{
        backgroundImage: "url('/dashboard/destination.jpg')", // your night photo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HDR Effect Overlay */}
      <Box className="absolute inset-0 bg-[#0d0d0d]/70" />

      {/* Content */}
      <Box className="relative z-10 text-left max-w-2xl">
        {/* Heading */}
        <Typography
          variant="h2"
          component="h1"
          className="font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-yellow-400">Reliable</span>{" "}
          <span className="text-blue-300">Services</span>{" "}
          <span className="text-green-400">to Make</span>{" "}
          <span className="text-purple-300">Your Journey</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          className="mt-6 text-lg sm:text-xl md:text-2xl tracking-wide"
        >
          <span className="text-orange-300">Smooth and {""}</span>
          <span className="text-teal-300">Memorable</span>.
        </Typography>
      </Box>
    </Box>
  );
}
