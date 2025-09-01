"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { allDestinations } from "@/lib/destination";
import { useRouter } from "next/navigation";

export default function FeaturedDestinations() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const router = useRouter();

  return (
    <Box className="py-12 px-6 bg-white text-center">
      <Typography
        variant="h4"
        className="font-bold mb-2"
        sx={{
          background: "linear-gradient(90deg, #000, #0077b6, #b08968)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Featured Destinations
      </Typography>
      <Typography variant="body1" className="mb-10 text-gray-500">
        Discover our handpicked selection of extraordinary places that will
        leave you breathless
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {allDestinations.slice(0, 6).map((dest, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div className="absolute top-2 left-2 bg-white/90 text-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                <Star className="w-4 h-4 text-yellow-500" /> {dest.rating}
              </div>
            </div>

            <CardContent className="p-4 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" /> {dest.location}
              </div>
              <Typography variant="h6" className="font-bold mb-2">
                {dest.name}
              </Typography>

              {/* Show full description if expanded */}
              <Typography variant="body2" className="text-gray-600 mb-3">
                {expandedIndex === index
                  ? dest.longDesc
                  : `${dest.shortDesc.slice(0, 120)}...`}
              </Typography>

              {/* Routes */}
              {expandedIndex === index && dest.routes && (
                <div>
                  <h3 className="font-medium mt-2">Routes:</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {dest.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-end mt-3">
                <Button
                  onClick={() => router.push(`/destination/${dest?.id}`)}
                  variant="outline"
                  className="text-sm"
                >
                  view details
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "less show" : "show more"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/destination">
          <Button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-3 rounded-lg">
            View All Destinations
          </Button>
        </Link>
      </div>
    </Box>
  );
}
