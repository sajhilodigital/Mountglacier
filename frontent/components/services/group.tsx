"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Users,
  TicketPercent,
  Map,
  PartyPopper,
  Globe2,
  Heart,
  Star,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // <-- import useRouter

export default function GroupTravel() {
  const router = useRouter(); // <-- initialize router

  const benefits = [
    {
      icon: <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />,
      title: "Bigger Savings",
      desc: "Special discounts for groups of 5+ travelers.",
    },
    {
      icon: <TicketPercent className="w-10 h-10 text-green-600 mx-auto mb-3" />,
      title: "Exclusive Offers",
      desc: "Complimentary add-ons and group perks.",
    },
    {
      icon: <Map className="w-10 h-10 text-blue-600 mx-auto mb-3" />,
      title: "Custom Routes",
      desc: "Tailor-made itineraries for your group’s needs.",
    },
    {
      icon: <PartyPopper className="w-10 h-10 text-purple-600 mx-auto mb-3" />,
      title: "Fun Experiences",
      desc: "Team bonding, adventure, and cultural activities.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-teal-600 mx-auto mb-3" />,
      title: "Explore Destinations",
      desc: "Discover hidden gems in Nepal, Bhutan, Tibet, and beyond.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />,
      title: "Shared Memories",
      desc: "Create unforgettable moments with your loved ones.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
      title: "Top-rated Services",
      desc: "Quality accommodation, guided tours, and professional support.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-indigo-500 mx-auto mb-3" />,
      title: "Flexible Scheduling",
      desc: "Choose dates that work best for your group’s availability.",
    },
  ];

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-orange-50 to-orange-100 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-orange-700"
        >
          👥 Group Travelling Packages
        </Typography>

        {/* Intro Text */}
        <Typography
          variant="body1"
          className="text-center text-gray-700 mb-12 mx-auto"
        >
          Traveling with friends, family, or colleagues has never been easier or
          more exciting. Our{" "}
          <span className="font-semibold">group travel packages</span> offer{" "}
          <strong>
            exclusive discounts, tailor-made itineraries, premium
            accommodations, and unforgettable shared experiences
          </strong>
          . Whether it’s adventure treks, cultural tours, or relaxing holidays,
          we ensure your group journey is seamless and memorable.
        </Typography>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              {b.icon}
              <Typography variant="h6" className="font-semibold mb-2">
                {b.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {b.desc}
              </Typography>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center mb-12">
          <Typography variant="h5" className="font-bold mb-4 text-orange-700">
            Why Choose Our Group Packages?
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            Our experience in group travel ensures every detail is taken care
            of:
          </Typography>
          <ul className="list-disc text-left text-gray-700 space-y-2 pl-6">
            <li>
              Custom itineraries tailored to your group’s interests and pace.
            </li>
            <li>Special discounts, add-ons, and group perks.</li>
            <li>Professional guides and support for seamless travel.</li>
            <li>
              Carefully selected accommodations and transport for comfort.
            </li>
            <li>
              Activities ranging from adventure treks to cultural explorations.
            </li>
            <li>Safe and responsible travel with high-quality standards.</li>
          </ul>
        </div>

        {/* Highlight Destinations */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center mb-12">
          <Typography variant="h5" className="font-bold mb-4 text-orange-700">
            Popular Group Destinations
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            Experience the best locations with your friends or family:
          </Typography>
          <ul className="list-disc text-left text-gray-700 space-y-2 pl-6">
            <li>Everest Base Camp Trek, Nepal</li>
            <li>Annapurna Circuit, Nepal</li>
            <li>Bhutan Cultural Tours</li>
            <li>Tibet Adventure Treks</li>
            <li>Lake Tilicho and Mustang Valley</li>
            <li>Pokhara & Kathmandu Highlights</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={() => router.push("/contact")} // <-- navigate to contact
          >
            Contact Us for Group Travel Offers
          </Button>
        </div>
      </div>
    </Box>
  );
}
