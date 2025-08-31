"use client";

import { Box, Typography } from "@mui/material";

export default function HeroSection22() {
  return (
    <Box
      className="relative w-full h-[90vh]"
      sx={{
        backgroundImage: "url('/dashboard/about.jpeg')", // 👈 background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <Box className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

      {/* Content - Top Right */}
      <Box className="relative z-10 text-right text-white px-6 md:px-16 lg:px-24 pt-20 max-w-3xl ml-auto">
        <Typography
          variant="h2"
          component="h1"
          className="font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl text-yellow-400"
        >
          Passionate Explorers
        </Typography>

        <Typography
          variant="h3"
          className="mt-2 font-semibold text-2xl md:text-3xl text-gray-100 drop-shadow-lg"
        >
          Bringing Your Travel Dreams to Life
        </Typography>

        <Typography
          variant="subtitle1"
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md"
        >
          Experience adventure, culture, and comfort in every journey. Let us
          guide your next unforgettable trip.
        </Typography>
      </Box>
    </Box>
  );
}
