"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const bhutanTours = [
  {
    title: "Paro Taktsang (Tiger's Nest)",
    location: "Paro, Bhutan",
    rating: 4.8,
    difficulty: "Moderate",
    days: 1,
    group: "2-15 people",
    altitude: "3,120m",
    seasons: "Mar-May, Sep-Nov",
    price: 199,
    oldPrice: 249,
    routes: ["Paro Hike – 1 Day"],
    highlights: [
      "Cliffside monastery",
      "Panoramic Paro Valley views",
      "Sacred pilgrimage site",
      "Colorful prayer flags",
    ],
    image: "/destination/paro.jpg",
    category: "Cultural",
  },
  {
    title: "Punakha Dzong",
    location: "Punakha, Bhutan",
    rating: 4.7,
    difficulty: "Easy",
    days: 2,
    group: "2-20 people",
    altitude: "1,200m",
    seasons: "All year",
    price: 299,
    oldPrice: 349,
    routes: ["Punakha Tour – 2 Days"],
    highlights: [
      "Riverside fortress",
      "Traditional Bhutanese architecture",
      "Historic seat of government",
      "Scenic riverside views",
    ],
    image: "/destination/punakha.jpg",
    category: "Cultural",
  },
  {
    title: "Thimphu City Tour",
    location: "Thimphu, Bhutan",
    rating: 4.6,
    difficulty: "Easy",
    days: 2,
    group: "2-20 people",
    altitude: "2,334m",
    seasons: "All year",
    price: 279,
    oldPrice: 329,
    routes: ["Thimphu City Tour – 2 Days"],
    highlights: [
      "Tashichho Dzong",
      "Buddha Dordenma statue",
      "Weekend market",
      "Cultural museums",
    ],
    image: "/destination/thimphu.jpg",
    category: "Cultural",
  },
  {
    title: "Bumthang Valley",
    location: "Bumthang, Bhutan",
    rating: 4.7,
    difficulty: "Easy–Moderate",
    days: 3,
    group: "2-12 people",
    altitude: "2,600m",
    seasons: "Mar-May, Sep-Nov",
    price: 499,
    oldPrice: 549,
    routes: ["Bumthang Exploration – 3 Days"],
    highlights: [
      "Ancient monasteries",
      "Scenic farmlands",
      "Spiritual heritage",
      "Peaceful valley walks",
    ],
    image: "/destination/bumthang.jpg",
    category: "Cultural",
  },
  {
    title: "Jumolhari Trek",
    location: "Bhutan",
    rating: 4.9,
    difficulty: "Challenging",
    days: 7,
    group: "2-10 people",
    altitude: "4,890m",
    seasons: "Apr-Jun, Sep-Oct",
    price: 1699,
    oldPrice: 1799,
    routes: ["Jumolhari Trek – 7 Days"],
    highlights: [
      "Views of Mount Jumolhari",
      "Remote villages",
      "High mountain passes",
      "Alpine meadows",
    ],
    image: "/destination/jumolhari.jpg",
    category: "Trek",
  },
  {
    title: "Laya Gasa Trek",
    location: "Bhutan",
    rating: 4.8,
    difficulty: "Hard",
    days: 14,
    group: "2-10 people",
    altitude: "4,800m",
    seasons: "Apr-Jun, Sep-Oct",
    price: 2499,
    oldPrice: 2599,
    routes: ["Laya Gasa Trek – 14 Days"],
    highlights: [
      "High-altitude trekking",
      "Remote Laya villages",
      "Hot springs",
      "Wildlife spotting",
    ],
    image: "/destination/laya.jpg",
    category: "Trek",
  },
  {
    title: "Snowman Trek",
    location: "Bhutan",
    rating: 5.0,
    difficulty: "Extreme",
    days: 25,
    group: "2-8 people",
    altitude: "5,400m",
    seasons: "Sep-Oct",
    price: 4999,
    oldPrice: 5199,
    routes: ["Snowman Trek – 25 Days"],
    highlights: [
      "World’s toughest trek",
      "Multiple 5,000m+ passes",
      "Secluded Himalayan villages",
      "Untouched landscapes",
    ],
    image: "/destination/snowman.jpg",
    category: "Trek",
  },
  {
    title: "Chele La Trek",
    location: "Paro, Bhutan",
    rating: 4.5,
    difficulty: "Moderate",
    days: 2,
    group: "2-12 people",
    altitude: "3,988m",
    seasons: "Mar-May, Sep-Nov",
    price: 399,
    oldPrice: 449,
    routes: ["Chele La Trek – 2 Days"],
    highlights: [
      "Himalayan mountain views",
      "Alpine meadows",
      "Colorful wildflowers",
      "Scenic ridgelines",
    ],
    image: "/destination/chelela.jpg",
    category: "Trek",
  },
];

export default function BhutanTours() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cultural", "Trek"];

  const filteredTours =
    selectedCategory === "All"
      ? bhutanTours
      : bhutanTours.filter((tour) => tour.category === selectedCategory);

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
                src={tour.image}
                alt={tour.title}
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
                <h3 className="font-medium">Highlights:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {tour.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Price + Button */}
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
