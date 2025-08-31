"use client";

import { Box, Typography } from "@mui/material";

export default function HeroSection123() {
  return (
    <Box
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
      sx={{
        backgroundImage: "url('/dashboard/tour.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for cinematic effect */}
      <Box className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />

      {/* Content */}
      <Box className="relative z-10 px-6 md:px-12 flex flex-col items-start space-y-6 max-w-3xl">
        {/* Heading with transparent box */}
        <Box className="inline-block bg-white/20 px-8 py-4 rounded-xl">
          <Typography
            variant="h2"
            component="h1"
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-yellow-400 to-cyan-400 drop-shadow-lg"
          >
            Affordable and Customized
          </Typography>
        </Box>

        {/* Subtitle positioned to the left/below the heading */}
        <Box className="inline-block bg-white/20 px-6 py-2 rounded-lg mt-2 ml-8">
          <Typography
            variant="subtitle1"
            className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-200 drop-shadow-md"
          >
            Packages for Every Traveler
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
