"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Itinerary() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival at Kathmandu (1,400m)",
      img: "/bg.jpeg",
    },
    {
      day: "Day 2",
      title: "Kathmandu Valley Sightseeing.",
      img: "/images/day2.jpg",
    },
    { day: "Day 3", title: "Drive to Pokhara (822m)", img: "/images/day3.jpg" },
    {
      day: "Day 4",
      title: "Fly to Jomsom (2,720m) and then drive to Kagbeni (2,858m)",
      img: "/images/day4.jpg",
    },
    { day: "Day 5", title: "Drive to Ghami (3,520m)", img: "/images/day5.jpg" },
    {
      day: "Day 6",
      title: "Drive to Lomangthang (3,840m) – First day of Tiji festival",
      img: "/images/day6.jpg",
    },
    { day: "Day 7", title: "Festive Vibes", img: "/images/day7.jpg" },
    { day: "Day 8", title: "Third Tiji Day", img: "/images/day8.jpg" },
    {
      day: "Day 9",
      title: "Drive to Muktinath (3,710m)",
      img: "/images/day9.jpg",
    },
    {
      day: "Day 10",
      title: "Drive back to Pokhara (822m)",
      img: "/images/day10.jpg",
    },
    {
      day: "Day 11",
      title: "Drive back to Kathmandu (1,310m)",
      img: "/images/day11.jpg",
    },
    {
      day: "Day 12",
      title: "Farewell and departure to the airport",
      img: "/images/day12.jpg",
    },
    {
      day: "Day 12",
      title: "Farewell and departure to the airport",
      img: "/images/day12.jpg",
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Itinerary</h2>

      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-24 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2" />

      <div className="space-y-16">
        {itinerary.map((item, index) => (
          <div
            key={index}
            className={`flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-1/2 px-4">
              <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                {/* Background Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 group-hover:brightness-75 transition duration-500"
                  />
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <p className="text-white font-semibold">{item.day}</p>
                  </div>
                  <p className="text-white text-sm leading-relaxed font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
