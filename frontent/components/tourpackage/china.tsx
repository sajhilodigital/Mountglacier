"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const chinaTours = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Adventure", "Tour"] as const;

  const filteredTours =
    selectedCategory === "All"
      ? chinaTours
      : chinaTours.filter((tour) => tour.category === selectedCategory);

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
            {/* Media with Overlay */}
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

            {/* Body */}
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
                  <h3 className="font-medium">Tour Highlights</h3>
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
                  onClick={() => router.push(`/china/${tour?.id}`)}
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
