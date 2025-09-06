"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const bhutanTours = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cultural", "Trek"] as const;

  const filteredTours =
    selectedCategory === "All"
      ? bhutanTours
      : bhutanTours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="p-6 mt-7">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className="rounded-full px-4"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filteredTours.map((tour, idx) => (
          <Card
            key={idx}
            className="shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl border border-gray-100/60"
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover will-change-transform duration-500 ease-out hover:scale-105"
                priority={idx < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                {tour.category && (
                  <span className="text-xs font-semibold tracking-wide uppercase bg-white/90 text-gray-900 px-2.5 py-1 rounded-full shadow-sm backdrop-blur">
                    {tour.category}
                  </span>
                )}
                {tour.difficulty && (
                  <span className="text-xs font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-sm">
                    {tour.difficulty}
                  </span>
                )}
              </div>

              <div className="absolute top-3 right-3">
                <div className="rounded-full bg-white/95 px-3 py-1.5 shadow-sm text-sm font-semibold">
                  {tour.oldPrice && tour.oldPrice !== tour.price && (
                    <span className="line-through text-gray-400 mr-1">
                      ${tour.oldPrice}
                    </span>
                  )}
                  <span className="text-blue-600">From ${tour.price}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h2 className="text-white text-lg sm:text-xl font-semibold leading-tight line-clamp-2 drop-shadow">
                  {tour.title}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 text-gray-200">
                    <MapPin size={14} className="shrink-0" />
                    <span className="line-clamp-1">{tour.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-yellow-300">
                    <Star size={14} className="shrink-0" />
                    <span>{tour.rating}</span>
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="p-4 sm:p-5 flex flex-col gap-4">
              {tour.routes?.length > 0 && (
                <div>
                  <h3 className="font-medium">Routes</h3>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-600 space-y-0.5">
                    {tour.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                {tour.days && <li>🗓 {tour.days} Days</li>}
                {tour.group && <li>👥 {tour.group}</li>}
                {tour.altitude && <li>⛰ {tour.altitude}</li>}
                {tour.seasons && <li>🍂 {tour.seasons}</li>}
              </ul>

              {tour.highlights?.length > 0 && (
                <div>
                  <h3 className="font-medium">Highlights</h3>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-600 space-y-0.5">
                    {tour.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-1 pt-3 border-t flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  className="font-semibold"
                  onClick={() => router.push(`/destination/${tour?.id}`)}
                >
                  View Details
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:brightness-110"
                  onClick={() => router.push(`/booknow`)}
                >
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
