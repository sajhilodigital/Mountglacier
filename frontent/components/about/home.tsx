"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Box>
      {/* First Section */}
      <Box className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <Typography
              variant="h4"
              className="font-bold mb-4 text-gray-800 mt-10"
            >
              About <span className="text-blue-500">Us</span>
            </Typography>

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

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Expert Sherpa & local guides in every destination</li>
              <li>24/7 dedicated customer support</li>
              <li>Sustainable & responsible trekking practices</li>
              <li>Competitive pricing with no hidden fees</li>
            </ul>

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
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Globe,
              value: "50+",
              label: "Countries Covered",
              color: "text-blue-500",
            },
            {
              icon: Users,
              value: "10,000+",
              label: "Happy Travelers",
              color: "text-green-500",
            },
            {
              icon: Award,
              value: "25+",
              label: "Awards Won",
              color: "text-yellow-500",
            },
            {
              icon: Heart,
              value: "98%",
              label: "Customer Satisfaction",
              color: "text-red-500",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
              <Typography variant="h6" className="font-semibold">
                {stat.value}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Box>

      {/* Second Section */}
      <Box className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Typography
            variant="h5"
            className="font-bold mb-4 text-blue-600 text-center justify-center"
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-8 !mt-6">
            Founded with a passion for the Himalayas, we have been helping
            travelers explore Nepal and the world for over 15 years. Our team of
            experienced guides, mountaineers, and travel specialists ensure
            safe, memorable, and sustainable experiences. From Everest Base Camp
            treks to luxury tours, we bring dreams to life.
          </Typography>

          {/* People Section */}
          <Typography
            variant="h5"
            className="font-bold mb-6 text-blue-600 text-center justify-center"
          >
            Meet Our Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-6">
            {[
              {
                name: "Pasang Sherpa",
                role: "Lead Trekking Guide",
                img: "/guide1.jpg",
              },
              {
                name: "Mingma Lama",
                role: "Expedition Leader",
                img: "/guide2.jpg",
              },
              {
                name: "Anita Gurung",
                role: "Travel Planner",
                img: "/guide3.jpg",
              },
            ].map((person, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-50 p-6 text-center hover:shadow-2xl cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={120}
                  height={200}
                  className="rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <Typography variant="h6" className="font-semibold">
                  {person.name}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {person.role}
                </Typography>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity">
                  <Button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full hover:bg-blue-600">
                    View Profile
                  </Button>
                  <Button className="bg-green-500 text-white px-3 py-1 text-sm rounded-full hover:bg-green-600">
                    Contact
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expert Trekkers Section */}
          <Typography
            variant="h5"
            className="font-bold mb-4 text-blue-600 text-center justify-center"
          >
            Expert Trekkers
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6 !mt-6">
            Our expert trekkers have successfully led expeditions across the
            Himalayas, including Everest, Annapurna, Langtang, and beyond. With
            decades of combined experience, safety certifications, and unmatched
            knowledge of local culture and nature, we provide authentic journeys
            that go beyond just trekking.
          </Typography>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <Link href="/contact" passHref>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                Plan Your Adventure
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </Box>
  );
}
