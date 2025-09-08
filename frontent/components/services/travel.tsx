"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  ShieldCheck,
  HeartPulse,
  Plane,
  Mountain,
  Globe2,
  FileCheck2,
  UserCheck,
  UserMinus,
  Activity,
  Star,
  MapPin,
  AlertTriangle,
} from "lucide-react";

export default function TravelInsurance() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />,
      title: "Comprehensive Protection",
      desc: "Covers medical costs, trip cancellations, lost gear, and more.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-red-500 mx-auto mb-3" />,
      title: "Medical Emergencies",
      desc: "24/7 emergency support, including evacuation from remote areas.",
    },
    {
      icon: <Plane className="w-10 h-10 text-green-500 mx-auto mb-3" />,
      title: "Flight & Trip Cover",
      desc: "Compensation for delays, cancellations, or missed connections.",
    },
    {
      icon: <Mountain className="w-10 h-10 text-amber-600 mx-auto mb-3" />,
      title: "Adventure Activities",
      desc: "Extra coverage for trekking, climbing, rafting, and mountaineering.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-purple-600 mx-auto mb-3" />,
      title: "Worldwide Coverage",
      desc: "Valid across multiple destinations, ideal for multi-country tours.",
    },
    {
      icon: <FileCheck2 className="w-10 h-10 text-teal-600 mx-auto mb-3" />,
      title: "Easy Claim Process",
      desc: "Hassle-free digital claims with quick approvals and payouts.",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-indigo-500 mx-auto mb-3" />,
      title: "Personalized Assistance",
      desc: "Tailored support for your trip, adventure, and health needs.",
    },
    {
      icon: <UserMinus className="w-10 h-10 text-pink-500 mx-auto mb-3" />,
      title: "Coverage for Companions",
      desc: "Protect your travel buddies or family members during the trip.",
    },
    {
      icon: <Activity className="w-10 h-10 text-orange-500 mx-auto mb-3" />,
      title: "Adventure Sports Cover",
      desc: "Special coverage for trekking, skiing, paragliding, and more.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-lime-500 mx-auto mb-3" />,
      title: "High Altitude Support",
      desc: "Extra protection for treks above 4,000m including emergency services.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-3" />,
      title: "Natural Disaster Coverage",
      desc: "Includes protection for weather delays, landslides, and unexpected events.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />,
      title: "Premium Benefits",
      desc: "Optional upgrades for VIP services, luxury accommodations, and concierge support.",
    },
  ];

  const steps = [
    "Choose your preferred travel insurance plan online.",
    "Provide basic traveler and trip information.",
    "Receive instant confirmation and digital insurance documents.",
    "Access 24/7 emergency assistance anytime during your trip.",
    "Submit claims digitally for quick approval and payout.",
  ];

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-blue-700"
        >
          🛡️ Travel Insurance for Adventure Treks & Tours
        </Typography>

        {/* Updated Center Text */}
        <Typography
          variant="body1"
          className="text-center text-gray-700 mb-12  mx-auto justify-center "
        >
          Explore the world with confidence! Our reliable{" "}
          <span className="font-semibold">Travel Insurance</span> keeps you safe
          during treks, adventure activities, and tours across Nepal, Bhutan,
          Tibet, and beyond. Enjoy your journey knowing that we’ve got you
          covered in every situation.
        </Typography>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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
          <Typography variant="h5" className="font-bold mb-4 text-blue-700">
            Why Travel Insurance is Essential
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            Traveling in remote regions can pose risks. With our insurance, you
            can explore confidently knowing that you are protected.
          </Typography>
          <ul className="list-disc text-left text-gray-700 space-y-2 pl-6">
            <li>Emergency helicopter rescue and evacuation.</li>
            <li>Hospitalization and medical treatment coverage.</li>
            <li>Trip cancellation and interruption benefits.</li>
            <li>Lost baggage, gear, or document protection.</li>
            <li>Coverage for adventure activities above 5,000m.</li>
            <li>Accidental death and disability benefits.</li>
            <li>24/7 multilingual assistance hotline.</li>
            <li>COVID-19 related medical and trip coverage.</li>
            <li>Support for high-altitude sickness and emergencies.</li>
            <li>Optional premium plans for luxury travel protection.</li>
            <li>Worldwide coverage for multiple countries in one plan.</li>
          </ul>
        </div>

        {/* Steps to Claim Insurance */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center mb-12">
          <Typography variant="h5" className="font-bold mb-4 text-blue-700">
            How It Works
          </Typography>
          <ol className="list-decimal text-left text-gray-700 space-y-2 pl-6">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
            Contact Us for Insurance Plans
          </Button>
        </div>
      </div>
    </Box>
  );
}
