"use client";

import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartPulse, Plane, Mountain } from "lucide-react";

export default function TravelInsurance() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    duration: "",
    coverage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Travel Insurance Request:", form);
    alert("Your travel insurance request has been submitted!");
  };

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-blue-700"
        >
          🛡️ Travel Insurance
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 mb-10">
          Ensure peace of mind while traveling with our trusted travel insurance
          partners. Get covered for **medical emergencies, trip cancellations,
          and adventure activities** like trekking and mountaineering.
        </Typography>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Full Protection
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Cover for medical expenses, lost luggage, and trip interruptions.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <HeartPulse className="w-10 h-10 text-red-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Emergency Medical
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              24/7 support for health emergencies during your journey.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Plane className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Flight Delays
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Compensation for cancellations or missed connections.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Mountain className="w-10 h-10 text-amber-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Adventure Cover
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Extra protection for trekking, hiking, and outdoor adventures.
            </Typography>
          </div>
        </div>

        {/* Request Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <Typography
            variant="h5"
            className="font-bold text-center mb-6 text-blue-700"
          >
            Get a Travel Insurance Quote
          </Typography>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>

            {/* Country & Duration */}
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                label="Traveling To"
                name="country"
                value={form.country}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Duration (Days)"
                name="duration"
                type="number"
                value={form.duration}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>

            {/* Coverage */}
            <TextField
              label="Coverage Type (e.g. Basic, Premium, Adventure)"
              name="coverage"
              value={form.coverage}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
              >
                Request Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}
