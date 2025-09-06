"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Erin Pratt",
    date: "2 September 2025",
    review:
      "Sabin Maharjan was very helpful in deciding on which dates to book, how to book, and how to arrange flights.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trusted Customer",
    date: "27 August 2025",
    review:
      "Prashant Raut (Travel Advisor) is very responsive and helpful. Very grateful for Prashant’s service :)",
    rating: 5,
  },
  {
    id: 3,
    name: "Traveler",
    date: "10 August 2025",
    review:
      "The Best of the Best in Nepal. You are treated like family from your first trip.",
    rating: 5,
  },
  {
    id: 4,
    name: "Trusted Customer",
    date: "10 August 2025",
    review: "Wonderful service, answered all questions thoroughly.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="text-center py-14 bg-gray-50">
      {/* Top Description */}
      <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6 leading-relaxed text-gray-700">
        Authentic cultural tours and{" "}
        <span className="font-semibold">upscaled</span> adventure travel
        designed for <span className="font-semibold">solo travelers</span>,
        couples, families, and friends. Discover the world in a deeper, more
        meaningful way.
      </p>

      {/* Ratings & Logos */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        {/* Stars + Rating */}
        <div className="flex items-center gap-3">
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-yellow-500 fill-yellow-500"
              />
            ))}
          </span>
          <span className="text-2xl font-bold">4.9/5</span>
          <span className="text-gray-500"> (223+ reviews)</span>
        </div>

        {/* Logos */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/feefo.png" alt="Feefo" width={80} height={40} />
            <span className="text-sm text-gray-600">344 reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/Tripadvisor.jpg"
              alt="Tripadvisor"
              width={90}
              height={40}
            />
            <span className="text-sm text-gray-600">564 reviews</span>
          </div>
        </div>
      </div>

      {/* Read All Button */}
      <Button
        size="lg"
        className="px-6 py-3"
        onClick={() => setShowOverlay(true)}
      >
        Read all reviews
      </Button>

      {/* Auto-Sliding Preview Cards */}
      <div className="relative overflow-hidden mt-10">
        <motion.div
          className="flex gap-6 px-6" // removed big gap
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {reviews.concat(reviews).map((rev, i) => (
            <Card
              key={i}
              className="min-w-[280px] max-w-[300px] p-6 shadow-lg rounded-2xl bg-white mx-[1px]"
            >
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {rev.review}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  {rev.name} - {rev.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Overlay (Read All Reviews) */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-center items-center p-4 mt-24">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full h-[85vh] relative overflow-hidden flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Title */}
            <h2 className="text-center text-2xl font-bold my-6">
              Customer Reviews
            </h2>

            {/* Scrollable Reviews */}
            <div className="flex-1 overflow-y-auto px-6 space-y-4">
              {reviews.map((rev) => (
                <Card key={rev.id} className="p-5 rounded-2xl shadow-md">
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-base text-gray-700">{rev.review}</p>
                    <p className="text-xs text-gray-500 mt-3">
                      {rev.name} - {rev.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
