"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Users, Mountain } from "lucide-react";
import { tours } from "@/lib/tourpackage";

export default function TourDashboard() {
  const [filter, setFilter] = useState("Tour");

  // show only tours
  const filteredTours = tours.filter((t) => t.category === "Tour");

  return (
    <div className="w-full p-6">
      {/* Dashboard Header with Background Image */}
      <div
        className="relative rounded-2xl overflow-hidden mb-8 shadow-lg"
        style={{
          backgroundImage: "url('/images/tour-bg.jpg')", // 👉 replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered Text */}
        <div className="relative z-10 text-center text-white px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Tour Dashboard</h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100">
            Welcome to our exclusive <strong>Tours of Nepal</strong> – your
            gateway to adventure, culture, and unforgettable experiences.
            <br />
            From the breathtaking peaks of the Himalayas to the serene valleys
            dotted with ancient temples, each tour is carefully crafted to offer
            you the perfect balance of discovery and relaxation.
            <br />
            Our professional guides ensure safety and comfort while introducing
            you to hidden gems and vibrant traditions.
            <br />
            Whether you seek thrilling treks, cultural immersion, or peaceful
            escapes, we have the right journey for you.
            <br />
            With flexible packages, small groups, and eco-friendly practices,
            our tours promise authenticity and comfort.
            <br />
            Join us to explore untouched trails, vibrant festivals, and local
            hospitality like never before.
            <br />
            Let every trip be a story you’ll cherish for a lifetime.
            <br />
            Book today and unlock the best that Nepal has to offer.
          </p>
        </div>
      </div>

      {/* Layout with sidebar filter + tour grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filter */}
        <aside className="bg-gray-100 p-6 rounded-2xl shadow-md lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Filter Tours</h2>
          <div className="space-y-3">
            <Button
              variant={filter === "Tour" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFilter("Tour")}
            >
              All Tours
            </Button>
            <Button
              variant={filter === "Easy" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFilter("Easy")}
            >
              Easy
            </Button>
            <Button
              variant={filter === "Moderate" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFilter("Moderate")}
            >
              Moderate
            </Button>
            <Button
              variant={filter === "Challenging" ? "default" : "outline"}
              className="w-full"
              onClick={() => setFilter("Challenging")}
            >
              Challenging
            </Button>
          </div>
        </aside>

        {/* Tour Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTours.map((tour) => (
            <Card
              key={tour.title}
              className="overflow-hidden shadow-md rounded-2xl hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <img
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
                  <span className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-gray-500" />{" "}
                    {tour.altitude}
                  </span>
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
                <Button variant="outline">View Details</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
