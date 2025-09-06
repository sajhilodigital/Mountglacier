"use client";

import { Box, Typography } from "@mui/material";

export default function HeroSection212() {
  return (
    <Box
      className="relative w-full h-[90vh] flex items-start justify-start overflow-hidden mt-16"
      sx={{
        backgroundImage: "url('/dashboard/whychoose.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <Box className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/0" />

      {/* Content */}
      <Box className="relative z-10 text-left px-8 pt-24 space-y-4 max-w-xl">
        {/* Main Heading */}
        <Box className="inline-block bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl">
          <Typography
            variant="h2"
            component="h1"
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
          >
            Trusted by Travelers,
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box className="inline-block bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-lg">
          <Typography
            variant="subtitle1"
            className="text-lg md:text-xl text-white drop-shadow-md"
          >
            Loved for our care and quality.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
