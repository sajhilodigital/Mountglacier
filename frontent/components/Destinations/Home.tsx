"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const destinations = [
  {
    name: "Tour in Nepal",
    img: "/destination/chitwan.jpg", // replace with your actual file name
    link: "/destination/travel",
  },
  {
    name: "Peak Climbing",
    img: "/destination/everest.jpeg",
    link: "/destination/peak-climbing",
  },
  {
    name: "Trekking in Nepal",
    img: "/destination/poonhill.jpeg",
    link: "/destination/trekking",
  },
  {
    name: "Bhutan Tours",
    img: "/destination/bumthang.jpg",
    link: "/destination/bhutan",
  },
  {
    name: "China Tours",
    img: "/destination/tibethigh.jpg",
    link: "/destination/china",
  },
];

export default function FeaturedDestinations() {
  return (
    <Box className=" from-white via-gray-50 to-gray-100 text-center max-w-7xl mx-auto">
      {/* Title */}
      <Typography
        variant="h4"
        className="font-extrabold mb-4 text-3xl md:text-4xl  md:py-10 "
        sx={{
          background: "linear-gradient(90deg, #0f172a, #1e3a8a, #f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Top Destinations With Best Trekking Company In Nepal
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        className="mb-12 text-gray-600  flex items-center justify-center py-6"
      >
        Discover our handpicked trekking and tour packages in Nepal, Bhutan, and
        Tibet. From the Himalayas to cultural tours, find your perfect adventure
        with us.
      </Typography>

      {/* Explore All button */}
      <div className="flex justify-end mb-10">
        <Link href="/destination">
          <Button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            Explore All
          </Button>
        </Link>
      </div>

      {/* Custom Grid with center large card */}
      <div
        className="grid gap-6"
        style={{
          display: "grid",
          gridTemplateAreas: `
            "a b c"
            "d b e"
          `,
          gridTemplateColumns: "1fr 1.5fr 1fr",
          gridAutoRows: "260px",
        }}
      >
        {destinations.map((dest, index) => {
          const gridAreas = ["a", "b", "c", "d", "e"];
          return (
            <Card
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500 p-0"
              style={{ gridArea: gridAreas[index] }}
            >
              {/* Background Image */}

<<<<<<< HEAD
              <div className="relative h-full w-full">
=======
              <div className="relative h-full  w-full">
>>>>>>> balgobind
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  priority
<<<<<<< HEAD
                  className="object-cover transition-transform duration-500 group-hover:scale-110 "
=======
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
>>>>>>> balgobind
                />
                {/* Overlay gradient */}
                <div className=" h-full w-full absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Title Button */}
              <CardContent className="absolute bottom-5 left-5">
                <Link href="/destination/travel">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                    {dest.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Box>
  );
}
