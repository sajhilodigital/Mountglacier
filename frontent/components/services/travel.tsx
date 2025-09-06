"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  ShieldCheck,
  HeartPulse,
  Plane,
  Mountain,
  Globe2,
  FileCheck2,
} from "lucide-react";

export default function TravelInsurance() {
  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-blue-700"
        >
          🛡️ Travel Insurance for Adventure Treks & Tours
        </Typography>
        <Typography variant="body1" className="text-center text-gray-700 mb-10">
          Trekking and mountaineering come with unforgettable experiences—but
          also risks. Our trusted{" "}
          <span className="font-semibold">Travel Insurance</span> ensures that
          you stay protected during your journey in Nepal, Bhutan, and Tibet.
          From medical emergencies to adventure coverage, we’ve got you covered.
        </Typography>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Comprehensive Protection
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Covers medical costs, trip cancellations, lost gear, and more.
            </Typography>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <HeartPulse className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Medical Emergencies
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              24/7 emergency support, including evacuation from remote areas.
            </Typography>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <Plane className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Flight & Trip Cover
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Compensation for delays, cancellations, or missed connections.
            </Typography>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <Mountain className="w-10 h-10 text-amber-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Adventure Activities
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Extra coverage for trekking, climbing, rafting, and
              mountaineering.
            </Typography>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <Globe2 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Worldwide Coverage
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Valid across multiple destinations, ideal for multi-country tours.
            </Typography>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition">
            <FileCheck2 className="w-10 h-10 text-teal-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Easy Claim Process
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Hassle-free digital claims with quick approvals and payouts.
            </Typography>
          </div>
        </div>

        {/* Why Important */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <Typography variant="h5" className="font-bold mb-4 text-blue-700">
            Why Do You Need Travel Insurance?
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            Adventure tours often take you to remote regions where medical
            facilities are limited. Having travel insurance ensures that you can
            trek and travel with confidence, knowing that you are covered in
            case of emergencies.
          </Typography>

          <ul className="list-disc text-left text-gray-700 space-y-2 pl-6">
            <li>Emergency helicopter rescue and evacuation.</li>
            <li>Hospitalization and medical treatment coverage.</li>
            <li>Trip cancellation and interruption benefits.</li>
            <li>Coverage for lost baggage, gear, or documents.</li>
            <li>Special adventure cover for trekking above 5,000m.</li>
            <li>Accidental death and disability benefits.</li>
            <li>24/7 multilingual assistance hotline.</li>
            <li>COVID-19 related medical coverage and trip protection.</li>
            <li>Support for high-altitude sickness and related emergencies.</li>
          </ul>
        </div>
      </div>
    </Box>
  );
}
