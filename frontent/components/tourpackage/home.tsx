"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { tours } from "@/lib/tourpackage";
import Image from "next/image";

export default function TourPackages() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Adventure", "Trek", "Tour"];

  const filteredTours =
    selectedCategory === "All"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

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
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <Image
                width={0}
                height={0}
                sizes="100%"
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <CardContent className="p-4 flex flex-col gap-3">
              {/* Title & Rating */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{tour.title}</h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} />
                  <span>{tour.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{tour.location}</p>

              {/* Difficulty */}
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

                  {tour.routeImage && (
                    <div className="mt-2 border-2 border-gray-300 rounded-lg overflow-hidden">
                      <Image
                        width={0}
                        height={0}
                        sizes="100%"
                        src={tour.routeImage}
                        alt={`${tour.title} Route`}
                        className="w-full h-40 object-contain"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Tour Info */}
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🗓 {tour.days} Days</li>
                <li>👥 {tour.group}</li>
                <li>⛰ {tour.altitude}</li>
                <li>🍂 {tour.seasons}</li>
              </ul>

              {/* Highlights */}
              <div>
                <h3 className="font-medium">Tour Highlights:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {tour.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Price + Buttons */}
              <div className="mt-auto pt-3 border-t flex flex-col gap-3">
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

                {/* Buttons Row */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 font-semibold"
                    onClick={() => router.push(`/destination/${tour?.id}`)}
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={() => router.push(`/booknow`)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:scale-105 transition-transform shadow-md"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
