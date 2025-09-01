"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Typography } from "@mui/material";
import { Calendar, Camera, Map, Plane, Shield, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Flight Booking",
    desc: "Best deals on flights worldwide with 24/7 customer support",
    icon: <Plane className="h-10 w-10 text-sky-500" />,
    link: "/services/flight",
  },
  {
    title: "Custom Itineraries",
    desc: "Personalized travel plans crafted by our expert travel consultants",
    icon: <Map className="h-10 w-10 text-orange-400" />,
    link: "/services/custom",
  },
  {
    title: "Photo Tours",
    desc: "Capture stunning moments with guided photography expeditions",
    icon: <Camera className="h-10 w-10 text-green-500" />,
    link: "/services/gallery",
  },
  {
    title: "Travel Insurance",
    desc: "Comprehensive coverage for peace of mind during your journey",
    icon: <Shield className="h-10 w-10 text-sky-400" />,
    link: "/services/travel",
  },
  {
    title: "Group Travel",
    desc: "Special packages for families, friends, and corporate groups",
    icon: <Users className="h-10 w-10 text-orange-400" />,
    link: "/services/grouptravel",
  },
  {
    title: "Event Planning",
    desc: "Destination weddings and special occasion travel arrangements",
    icon: <Calendar className="h-10 w-10 text-sky-500" />,
    link: "/services/event",
  },
];

export default function Services() {
  return (
    <Box className="w-full px-6 py-12 text-center">
      {/* Heading */}
      <Typography
        variant="h4"
        className="font-bold mb-2 text-gray-800"
        component="h2"
      >
        Our <span className="text-sky-500">Services</span>
      </Typography>
      <Typography variant="body1" className="text-gray-500 mb-10">
        From planning to booking, we handle every detail of your journey
      </Typography>

      {/* Services Cards */}
      <Box className="flex flex-wrap justify-center gap-6 mt-7">
        {services.map((service, i) => (
          <Link href={service.link} key={i} className="no-underline">
            <Card className="w-72 p-6 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <Box className="flex justify-center mb-4">{service.icon}</Box>
              <Typography variant="h6" className="font-semibold mb-2">
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-500 mb-4 px-2 leading-relaxed"
              >
                {service.desc}
              </Typography>
              <Button
                variant="outline"
                className="rounded-lg hover:bg-sky-500 hover:text-white transition"
              >
                Learn More
              </Button>
            </Card>
          </Link>
        ))}
      </Box>

      {/* Bottom Section */}
      <Box className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-400 text-white">
        <Typography variant="h5" className="font-bold mb-2">
          Ready to Start Your Adventure?
        </Typography>
        <Typography variant="body1" className="mb-6">
          Our travel experts are standing by to help you plan the perfect
          getaway
        </Typography>
        <Box className="flex justify-center gap-4 flex-wrap mt-6">
          <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-lg">
            Get Free Consultation
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg">
            Call Now: +977 9851411452
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
