"use client";

import { Box, Typography } from "@mui/material";

export default function HeroSection2112() {
  return (
    <Box
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4"
      sx={{
        backgroundImage: "url('/dashboard/destination.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <Box className="relative z-10 text-center text-white max-w-4xl">
        {/* Heading */}
        <Typography
          variant="h2"
          component="h1"
          className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          <span className="text-white">Explore</span>{" "}
          <span className="text-yellow-400">Breathtaking</span>{" "}
          <span className="text-blue-400">Places</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 tracking-wide"
        >
          Across <span className="text-yellow-300 font-semibold">Nepal</span>{" "}
          and Beyond 🌍
        </Typography>
      </Box>
    </Box>
  );
}
