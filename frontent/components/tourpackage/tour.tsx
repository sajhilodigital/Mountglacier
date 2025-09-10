"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Mountain } from "lucide-react";
import { useRouter } from "next/navigation";
import { tours } from "@/lib/tourpackage";
import Image from "next/image";
import Link from "next/link";

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
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-0">
        {filteredTours.slice(0, 6).map((tour, idx) => (
          <Card
            key={idx}
            className="p-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group p-"
          >
            {/* Image with left-side overlay */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={tour.image}
                alt={tour.title}
                width={0}
                height={0}
                fill
                sizes="100%"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Content (top-left corner) */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white rounded-xl p-3 flex flex-col gap-2 max-w-[65%]">
                <h2 className="text-sm font-bold leading-tight line-clamp-2">
                  {tour.title}
                </h2>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <MapPin size={14} />
                  <span className="line-clamp-1">{tour.location}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  <Star size={14} /> {tour.rating}
                </div>

                <div className="flex items-center gap-1 text-xs opacity-90">
                  <Users size={14} /> {tour.group}
                </div>
                </div>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <Mountain size={14} /> {tour.altitude}
                </div>

                {/* Overlay Buttons */}
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                    onClick={() => router.push(`/destination/${tour?.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:brightness-110"
                    onClick={() => router.push(`/booknow`)}
                  >
                    Book
                  </Button>
                </div>
              </div>

              {/* Price badge bottom-left */}
              <div className="absolute bottom-3 left-3 bg-white/90 text-gray-900 font-semibold rounded-full px-3 py-1 shadow">
                ${tour.price}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      {filteredTours.length > 8 && (
        <div className="flex justify-center mt-10">
          <Link href="/destination">
            <Button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              View All Destinations
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
