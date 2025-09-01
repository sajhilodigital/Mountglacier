"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Chip } from "@mui/material";
import Image from "next/image";

const chinaTours = [
  {
    title: "Mansarovar Lake Trek",
    location: "Mansarovar, Tibet, China",
    rating: 4.8,
    difficulty: "Challenging",
    days: 12,
    group: "4-8 people",
    altitude: "4,590m",
    seasons: "May-Sep",
    price: 2099,
    oldPrice: 2199,
    routes: ["Mansarovar Pilgrimage – 12 Days"],
    highlights: [
      "Sacred Lake Mansarovar",
      "Pilgrimage circuit around the lake",
      "Views of Mt. Kailash",
      "Remote Tibetan villages",
    ],
    image: "/destination/mansorobar.jpg",
    category: "Adventure",
  },
  {
    title: "Everest Tibet Base Camp",
    location: "Tibet, China",
    rating: 4.9,
    difficulty: "Moderate to Challenging",
    days: 10,
    group: "6-12 people",
    altitude: "5,200m",
    seasons: "Mar-May, Sep-Nov",
    price: 2299,
    oldPrice: 2399,
    routes: ["Everest Tibet Base Camp – 10 Days"],
    highlights: [
      "Panoramic view of Mt. Everest from Tibet",
      "Tibetan culture immersion",
      "Rongbuk Monastery visit",
      "Scenic trekking trails",
    ],
    image: "/destination/everesttibet.jpg",
    category: "Adventure",
  },
  {
    title: "Lhasa City Tour",
    location: "Lhasa, Tibet, China",
    rating: 4.7,
    difficulty: "Easy",
    days: 5,
    group: "4-15 people",
    altitude: "3,650m",
    seasons: "All year",
    price: 899,
    oldPrice: 999,
    routes: ["Lhasa Cultural Tour – 5 Days"],
    highlights: [
      "Potala Palace visit",
      "Jokhang Temple and Barkhor Street",
      "Tibetan monasteries",
      "Local markets and Tibetan cuisine",
    ],
    image: "/destination/lhasa.jpg",
    category: "Tour",
  },
  {
    title: "Tibet High Pass Trek",
    location: "Tibet, China",
    rating: 4.8,
    difficulty: "Challenging",
    days: 14,
    group: "4-10 people",
    altitude: "5,500m",
    seasons: "May-Sep",
    price: 3199,
    oldPrice: 3299,
    routes: ["Tibet High Pass Circuit – 14 Days"],
    highlights: [
      "Kailash Circuit views",
      "Remote Tibetan villages",
      "High-altitude trekking adventure",
      "Sacred sites and monasteries",
    ],
    image: "/destination/tibethigh.jpg",
    category: "Adventure",
  },
];

export default function ChinaTrek() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Adventure", "Tour"];

  const filteredTours =
    selectedCategory === "All"
      ? chinaTours
      : chinaTours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="p-6 mt-7">
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((tour, idx) => (
          <Card
            key={idx}
            className="shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-40 w-full overflow-hidden">
              <Image
                width={0}
                height={0}
                sizes="100%"
                src={tour?.image}
                alt={tour?.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardContent className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{tour.title}</h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} />
                  <span>{tour.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{tour.location}</p>

              <Chip label={tour.difficulty} color="primary" size="small" />

              {/* Routes */}
              {tour.routes && (
                <div>
                  <h3 className="font-medium mt-2">Routes:</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {tour.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="font-medium">Tour Highlights:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {tour.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Price on left, Book Now button on right */}
              <div className="flex justify-between items-center mt-auto">
                <div>
                  {tour.oldPrice !== tour.price && (
                    <span className="line-through text-gray-400 text-sm mr-2">
                      ${tour.oldPrice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-blue-600">
                    From ${tour.price}
                  </span>
                </div>
                <Button className="transition-colors hover:bg-blue-700">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
