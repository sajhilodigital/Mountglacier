"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Users, Mountain } from "lucide-react";
import { tours } from "@/lib/tourpackage";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Trekking() {
  const [category, setCategory] = useState("Tour"); // ✅ default = Tour
  const [difficulty, setDifficulty] = useState("All");
  const router = useRouter();

  // ✅ Filter tours by category + difficulty
  const filteredTours = tours.filter(
    (t) =>
      (category === "All" ? true : t.category === category) &&
      (difficulty === "All" ? true : t.difficulty === difficulty)
  );

  return (
    <div className="w-full p-6 mt-16 md:mt-24">
      {/* Dashboard Header */}
      <div
        className="relative rounded-2xl overflow-hidden mb-8 shadow-lg"
        style={{
          backgroundImage: "url('/destination/bhaktapur.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-8 py-16 mt-6 md:mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the Wonders of Nepal
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            Your gateway to{" "}
            <span className="font-semibold">
              adventure, culture, and unforgettable experiences
            </span>
            .
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg">
            Book Your Adventure
          </Button>
        </div>
      </div>

      {/* Layout with Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filter */}
        <aside className="bg-gray-100 p-6 rounded-2xl shadow-md lg:col-span-1 space-y-6">
          {/* Category Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Filter by Category</h2>
            <div className="space-y-2">
              {["All", "Tour", "Trek", "Adventure"].map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Filter by Difficulty</h2>
            <div className="space-y-2">
              {["All", "Easy", "Moderate", "Challenging"].map((diff) => (
                <Button
                  key={diff}
                  variant={difficulty === diff ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setDifficulty(diff)}
                >
                  {diff}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Tour Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <Card
                key={tour.title}
                className="overflow-hidden shadow-md rounded-2xl hover:shadow-xl hover:scale-[1.02] transition duration-300"
              >
                {/* Image */}
                <div className="relative h-52 w-full">
                  <Image
                    height={0}
                    width={0}
                    sizes="100%"
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center bg-white/80 rounded-full px-2 py-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {tour.rating}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold">{tour.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {tour.location}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" /> {tour.days}{" "}
                      Days
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" /> {tour.group}
                    </span>
                    {tour.altitude && (
                      <span className="flex items-center gap-1">
                        <Mountain className="h-4 w-4 text-gray-500" />{" "}
                        {tour.altitude}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex justify-between items-center p-4">
                  <Button
                    variant="outline"
                    onClick={() => router.push(`/destination/${tour?.id}`)}
                  >
                    View Details
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No tours found for this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
