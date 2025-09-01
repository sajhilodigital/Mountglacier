"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { allDestinations, Destination } from "@/lib/destination";

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    Destination["category"] | "All"
  >("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories: (Destination["category"] | "All")[] = [
    "All",
    "Adventure",
    "Trek",
    "Tour",
    "China",
  ];

  const filteredDestinations =
    selectedCategory === "All"
      ? allDestinations
      : allDestinations.filter((dest) => dest.category === selectedCategory);

  return (
    <Box className="py-12 px-6 bg-white text-center">
      <Typography
        variant="h4"
        className="font-bold mb-10"
        sx={{
          background: "linear-gradient(90deg, #000, #0077b6, #b08968)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Adventure, Trek & Tour Destinations
      </Typography>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map((dest, idx) => (
          <Card
            key={idx}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-white/90 text-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                <Star className="w-4 h-4 text-yellow-500" /> {dest.rating}
              </div>
            </div>

            <CardContent className="p-4 text-left flex flex-col gap-2">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" /> {dest.location}
              </div>
              <Typography variant="h6" className="font-bold mb-1">
                {dest.name}
              </Typography>

              {dest.routes && (
                <div>
                  <h3 className="font-medium text-sm">Routes:</h3>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {dest.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Typography variant="body2" className="text-gray-600">
                {expandedIndex === idx ? dest.longDesc : dest.shortDesc}
              </Typography>

              <Button
                variant="ghost"
                className="flex items-center gap-1 mt-2 ml-auto"
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
              >
                {expandedIndex === idx ? "Show Less" : "View Details"}{" "}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
}
