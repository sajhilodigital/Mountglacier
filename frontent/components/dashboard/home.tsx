"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import CountUp from "react-countup";

export default function Dashboard() {
  return (
    <Box className="relative h-[100vh] flex items-center text-white overflow-hidden">
      {/* Blurred Background */}
      <Box
        className="absolute inset-0"
        sx={{
          backgroundImage: "url('/home.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0px)",
          transform: "scale(1.08)",
        }}
      />

      {/* Dark Overlay */}
      <Box className="absolute inset-0 bg-black/60"></Box>

      {/* Content */}
 <Box className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <Typography
          variant="h1"
          className="!font-bold text-6xl md:text-6xl leading-tight drop-shadow-lg"
        >
          Discover Your Next <span className="text-orange-400">Adventure</span>
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 text-lg md:w-2/3 text-gray-200 drop-shadow-md"
        >
          From pristine beaches to majestic mountains, create unforgettable
          memories with our expertly curated travel experiences.
        </Typography>

        {/* Buttons */}
        <Box className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/destination" passHref>
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-600 normal-case px-6 py-3 shadow-lg"
            >
              Explore Destinations
            </Button>
          </Link>
          <Button
            variant="outlined"
            className="border-white text-white normal-case px-6 py-3 shadow-lg hover:bg-white/10"
          >
            Plan Your Trip
          </Button>
        </Box>

        {/* Stats with CountUp */}
        <Box className="flex flex-col sm:flex-row gap-8 mt-12 text-lg font-semibold">
          <Card className="bg-transparent border-none shadow-none text-center text-white drop-shadow-md">
            <CardContent>
              <Typography variant="h5" className="drop-shadow-md">
                <CountUp end={50} duration={2} />+
              </Typography>
              <Typography variant="body2">Countries</Typography>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-none shadow-none text-center text-white drop-shadow-md">
            <CardContent>
              <Typography variant="h5" className="drop-shadow-md">
                <CountUp end={10000} duration={3} separator="," />+
              </Typography>
              <Typography variant="body2">Happy Travelers</Typography>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-none shadow-none text-center text-white drop-shadow-md">
            <CardContent>
              <Typography variant="h5" className="drop-shadow-md">
                <CountUp end={26} duration={2.5} />+
              </Typography>
              <Typography variant="body2">Years Experience</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
