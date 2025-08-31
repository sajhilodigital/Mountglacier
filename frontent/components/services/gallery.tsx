"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = [
  "All",
  "Adventure",
  "Expedition",
  "Culture",
  "Team",
  "Relaxation",
];

// Auto-generate 40 gallery items
const galleryItems = Array.from({ length: 40 }, (_, i) => ({
  title: `Adventure ${i + 1}`,
  desc: `Experience the beauty of the Himalayas - Image ${i + 1}`,
  img: `/gallery/${i + 1}.jpeg`, // keep images inside public/images/gallery
  category: categories[(i % (categories.length - 1)) + 1], // distribute across categories
}));

export default function AdventureGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Box className="w-full px-6 py-12 text-center">
      {/* Heading */}
      <Typography variant="h4" className="font-bold mb-2 text-gray-800">
        Adventure <span className="text-sky-500">Gallery</span>
      </Typography>
      <Typography variant="body1" className="text-gray-500 mb-10">
        Witness the breathtaking beauty of the Himalayas through our curated
        collection of expedition moments
      </Typography>

      {/* Category Buttons */}
      <Box className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat, i) => (
          <Button
            key={i}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 ${
              activeCategory === cat
                ? "bg-sky-500 text-white hover:bg-sky-600"
                : "hover:bg-sky-50"
            }`}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Gallery Cards */}
      <Box className="flex flex-wrap justify-center gap-6">
        {filteredItems.map((item, i) => (
          <Card
            key={i}
            className="w-80 overflow-hidden shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Image */}
            <Box className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Category Tag */}
              <span className="absolute top-2 left-2 bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>
            </Box>

            {/* Content */}
            <CardContent className="text-left p-4">
              <Typography variant="h6" className="font-semibold mb-1">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-500 leading-relaxed"
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
