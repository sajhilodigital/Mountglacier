"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <Box>
      {/* First Section */}
      <Box className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            {/* Company Name */}

            {/* Heading */}
            <Typography
              variant="h4"
              className="font-bold mb-4 text-gray-800 mt-10"
            >
              About <span className="text-blue-500">Us</span>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              className="text-gray-600 max-w-3xl mb-6"
            >
              For over 15 years, Mount Glacier Alpine Adventure Trek and Tours
              has been crafting extraordinary Himalayan and worldwide travel
              experiences. From solo adventures to family tours, we specialize
              in creating unforgettable journeys that connect people with
              breathtaking destinations.
            </Typography>

            {/* Features List */}
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Expert Sherpa & local guides in every destination</li>
              <li>24/7 dedicated customer support</li>
              <li>Sustainable & responsible trekking practices</li>
              <li>Competitive pricing with no hidden fees</li>
            </ul>

            {/* Button */}
            <Link href="/about" passHref>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right Side Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo1.png"
              alt="Mount Glacier Logo"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <Globe className="w-10 h-10 text-blue-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              50+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Countries Covered
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <Users className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              10,000+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Happy Travelers
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <Award className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              25+
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Awards Won
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              98%
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Customer Satisfaction
            </Typography>
          </div>
        </div>
      </Box>

      {/* Second Section */}
      <Box className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Logo + Name */}
          <div className="flex items-center gap-4 mb-10"></div>
          {/* Company Story */}
          <Typography variant="h5" className="font-bold mb-4 text-blue-600">
            Who We Are
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-8">
            Founded with a passion for the Himalayas, we have been helping
            travelers explore Nepal and the world for over 15 years. Our team of
            experienced guides, mountaineers, and travel specialists ensure
            safe, memorable, and sustainable experiences. From Everest Base Camp
            treks to luxury tours, we bring dreams to life.
          </Typography>

          {/* People Section */}
          <Typography variant="h5" className="font-bold mb-4 text-blue-600">
            Meet Our Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-gray-50 rounded-xl shadow text-center hover:shadow-lg transition">
              <Image
                src="/guide1.jpg"
                alt="Lead Guide"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <Typography variant="h6" className="font-semibold">
                Pasang Sherpa
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Lead Trekking Guide
              </Typography>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow text-center hover:shadow-lg transition">
              <Image
                src="/guide2.jpg"
                alt="Expedition Leader"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <Typography variant="h6" className="font-semibold">
                Mingma Lama
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Expedition Leader
              </Typography>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow text-center hover:shadow-lg transition">
              <Image
                src="/guide3.jpg"
                alt="Travel Planner"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <Typography variant="h6" className="font-semibold">
                Anita Gurung
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Travel Planner
              </Typography>
            </div>
          </div>

          {/* Expert Trekker Detail */}
          <Typography variant="h5" className="font-bold mb-4 text-blue-600">
            Expert Trekkers
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            Our expert trekkers have successfully led expeditions across the
            Himalayas, including Everest, Annapurna, Langtang, and beyond. With
            decades of combined experience, safety certifications, and unmatched
            knowledge of local culture and nature, we provide authentic journeys
            that go beyond just trekking.
          </Typography>
        </div>
      </Box>
    </Box>
  );
}
