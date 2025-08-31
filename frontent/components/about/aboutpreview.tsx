"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <Box className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          {/* Logo + Company Name */}
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo1.png" alt="Company Logo" width={60} height={60} />
            <Typography variant="h5" className="font-bold text-gray-800">
              Mount Glacier Alpine Adventure Trek and Tours
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h4" className="font-bold mb-4 text-gray-800">
            About <span className="text-blue-500">Us</span>
          </Typography>

          {/* Description */}
          <Typography variant="body1" className="text-gray-600 mb-6">
            For over 15 years, Mount Glacier Alpine Adventure Trek and Tours has
            been crafting extraordinary Himalayan and worldwide travel
            experiences. From solo adventures to family tours, we specialize in
            creating unforgettable journeys that connect people with
            breathtaking destinations.
          </Typography>

          {/* Button */}
          <Link href="/about" passHref>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
              Learn More About Us
            </Button>
          </Link>
        </div>

        {/* Right Side Logo / Image */}
        <div className="flex justify-center">
          <Image
            src="/logo1.png"
            alt="Mount Glacier Logo"
            width={350}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </Box>
  );
}
