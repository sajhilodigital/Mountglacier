"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { tours } from "@/lib/tourpackage";
import Image from "next/image";
import Link from "next/link";

export default function TourPackages() {
  const router = useRouter();

  return (
    <div className="p-6 mt-12 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-700 to-amber-500 bg-clip-text text-transparent">
        Popular Tour Packages
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.slice(0, 6).map((tour, idx) => (
          <Card
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full shadow text-sm font-medium flex items-center gap-1">
                <Star size={14} className="text-yellow-500" /> {tour.rating}
              </div>
            </div>

            <CardContent className="p-5 flex flex-col gap-4">
              {/* Title & Location */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-500">{tour.location}</p>
              </div>

              {/* Difficulty */}
              <Chip
                label={tour.difficulty}
                color="primary"
                size="small"
                className="self-start"
              />

              {/* Tour Details */}
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🗓 {tour.days} Days</li>
                <li>👥 {tour.group}</li>
                <li>⛰ {tour.altitude}</li>
                <li>🍂 {tour.seasons}</li>
              </ul>

              {/* Highlights */}
              <div>
                <h4 className="font-medium text-gray-800">Highlights:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {tour.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col gap-3 mt-auto pt-3 border-t">
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
                    onClick={() => router.push(`/destination/${tour?.id}`)}
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 font-semibold"
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

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link href="/package">
          <Button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            View All Packages
          </Button>
        </Link>
      </div>
    </div>
  );
}
