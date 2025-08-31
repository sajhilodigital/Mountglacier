"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const allDestinations = [
  {
    name: "Everest Base Camp Trek",
    location: "Nepal (Khumbu Region)",
    rating: 4.9,
    img: "/destination/everest.jpeg",
    description:
      "One of the world’s most iconic treks, leading you through Sherpa villages, Buddhist monasteries, and breathtaking Himalayan vistas, ending at the foot of Mount Everest. This trek offers an immersive experience into Sherpa culture, stunning glaciers, and dramatic mountain landscapes. You will pass through Namche Bazaar, Tengboche Monastery, and enjoy spectacular sunrise and sunset views of Everest.",
    routes: [
      "Everest Base Camp – 12 Days",
      "Three Pass Trek – 21 Days",
      "Cho La Pass – 12/13 Days",
    ],
  },
  {
    name: "Annapurna Circuit Trek",
    location: "Nepal (Annapurna Range)",
    rating: 4.8,
    img: "/destination/anapurna.jpeg",
    description:
      "A diverse trek that combines lush valleys, arid plateaus, and stunning views of Annapurna, Dhaulagiri, and Machapuchare (Fishtail Mountain). Experience hot springs at Jhinu, cross the Thorong La Pass, and explore traditional villages. The trek offers breathtaking landscapes, cultural interactions, and panoramic Himalayan views.",
    routes: [
      "Annapurna Circuit – 16 Days",
      "Annapurna Base Camp – 12 Days",
      "Mardi Himal – 7 Days",
      "Ghorepani Poon Hill – 5 Days",
    ],
  },
  {
    name: "Langtang Valley Trek",
    location: "Nepal (Langtang National Park)",
    rating: 4.7,
    img: "/destination/lantang.jpeg",
    description:
      "A culturally rich trek near Kathmandu, passing through Tamang villages, yak pastures, and glaciers with magnificent mountain views. Explore Kyanjin Gompa monastery, enjoy wildlife spotting, and experience the authentic Himalayan lifestyle.",
    routes: ["Langtang Valley Trek – 10 Days", "Helambu Trek – 7 Days"],
  },
  {
    name: "Mansarobar Lake",
    location: "China (Tibet)",
    rating: 4.6,
    img: "/destination/mansorobar.jpg",
    description:
      "Spiritual and scenic destination in Tibet, with majestic mountains and serene lake views. Perfect for pilgrims and adventure seekers alike. Includes lakeside trekking and exploration of sacred sites around Mansarobar.",
    routes: ["Mansarobar Lake Tour – 7 Days", "Pilgrimage Route – 5 Days"],
  },
  {
    name: "Lhasa & Everest Tibet",
    location: "China (Tibet)",
    rating: 4.8,
    img: "/destination/lhasa.jpg",
    description:
      "Explore Lhasa city, Potala Palace, Jokhang Temple, and the nearby Everest Base Camp region on the Tibetan side. Experience Tibetan culture, monasteries, and spectacular Himalayan landscapes. An unforgettable spiritual and scenic journey.",
    routes: ["Lhasa City Tour – 3 Days", "Everest Tibet Trek – 10 Days"],
  },
  {
    name: "Kathmandu Heritage Tour",
    location: "Nepal (Kathmandu Valley)",
    rating: 4.7,
    img: "/destination/kathmandu.jpg",
    description:
      "Explore UNESCO World Heritage sites including Swayambhunath (Monkey Temple), Pashupatinath Temple, Boudhanath Stupa, and the medieval cities of Patan and Bhaktapur. Discover centuries-old architecture, bustling markets, and cultural highlights of Kathmandu Valley.",
    routes: ["Kathmandu City Tour – 2 Days", "Heritage Walk – 1 Day"],
  },
];

export default function FeaturedDestinations() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Box className="py-12 px-6 bg-white text-center">
      <Typography
        variant="h4"
        className="font-bold mb-2"
        sx={{
          background: "linear-gradient(90deg, #000, #0077b6, #b08968)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Featured Destinations
      </Typography>
      <Typography variant="body1" className="mb-10 text-gray-500">
        Discover our handpicked selection of extraordinary places that will
        leave you breathless
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {allDestinations.slice(0, 6).map((dest, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div className="absolute top-2 left-2 bg-white/90 text-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                <Star className="w-4 h-4 text-yellow-500" /> {dest.rating}
              </div>
            </div>

            <CardContent className="p-4 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" /> {dest.location}
              </div>
              <Typography variant="h6" className="font-bold mb-2">
                {dest.name}
              </Typography>

              {/* Show full description if expanded */}
              <Typography variant="body2" className="text-gray-600 mb-3">
                {expandedIndex === index
                  ? dest.description
                  : `${dest.description.slice(0, 120)}...`}
              </Typography>

              {/* Routes */}
              {expandedIndex === index && dest.routes && (
                <div>
                  <h3 className="font-medium mt-2">Routes:</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {dest.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end mt-3">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/destination">
          <Button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-3 rounded-lg">
            View All Destinations
          </Button>
        </Link>
      </div>
    </Box>
  );
}
