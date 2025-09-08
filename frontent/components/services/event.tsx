"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  CalendarHeart,
  Building2,
  Glasses,
  Music,
  PartyPopper,
  Star,
  Heart,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EventPlanning() {
  const router = useRouter(); // <-- Add this

  const services = [
    {
      icon: <CalendarHeart className="w-10 h-10 text-pink-500 mx-auto mb-3" />,
      title: "Weddings",
      desc: "Destination weddings with magical setups and personalized touches.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
      title: "Corporate Events",
      desc: "Conferences, retreats, and team-building activities organized flawlessly.",
    },
    {
      icon: <Music className="w-10 h-10 text-green-600 mx-auto mb-3" />,
      title: "Cultural Shows",
      desc: "Live music, dance, and traditional festivals arranged for groups.",
    },
    {
      icon: <Glasses className="w-10 h-10 text-blue-500 mx-auto mb-3" />,
      title: "Private Parties",
      desc: "Birthdays, anniversaries, and celebrations with creative setups.",
    },
    {
      icon: <PartyPopper className="w-10 h-10 text-orange-500 mx-auto mb-3" />,
      title: "Festivals",
      desc: "Complete event design & logistics for large gatherings.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
      title: "Premium Experiences",
      desc: "Luxury decorations, high-end catering, and professional coordination.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />,
      title: "Memorable Moments",
      desc: "Every event designed to create unforgettable memories.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-teal-500 mx-auto mb-3" />,
      title: "Global Reach",
      desc: "Event planning services available locally and internationally.",
    },
  ];

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-purple-50 to-purple-100 mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-purple-700"
        >
          🎉 Event Planning Services
        </Typography>

        {/* Intro Text */}
        <Typography
          variant="body1"
          className="text-center text-gray-700 mb-12 mx-auto"
        >
          From <strong>corporate events and weddings</strong> to{" "}
          <strong>festivals and private celebrations</strong>, our expert
          planners ensure flawless execution, creative design, and{" "}
          <span className="font-semibold">unforgettable experiences</span>. Let
          us handle the details while you enjoy your special moments.
        </Typography>

        {/* Services Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              {s.icon}
              <Typography variant="h6" className="font-semibold mb-2">
                {s.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {s.desc}
              </Typography>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center mb-12">
          <Typography variant="h5" className="font-bold mb-4 text-purple-700">
            Why Choose Our Event Planning Services?
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            We make every event seamless and special:
          </Typography>
          <ul className="list-disc text-left text-gray-700 space-y-2 pl-6">
            <li>Personalized planning for your event type and scale.</li>
            <li>
              Creative designs, high-end decor, and professional coordination.
            </li>
            <li>On-time execution with attention to every detail.</li>
            <li>Wide network of vendors, caterers, and entertainers.</li>
            <li>Flexible packages for small and large gatherings.</li>
            <li>Memorable experiences that leave a lasting impression.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={() => router.push("/contact")} // <-- works now
          >
            Contact Us for Event Planning
          </Button>
        </div>
      </div>
    </Box>
  );
}
