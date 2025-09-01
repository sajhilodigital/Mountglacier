"use client";

import { Button } from "@/components/ui/button";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CustomItineraries() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    preferences: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Custom Itinerary Request:", form);
    alert("Your custom itinerary request has been submitted!");
  };

  return (
    <Box className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <Typography
          variant="h4"
          className="font-bold text-center mb-6 text-blue-700"
        >
          🗺️ Create Your Custom Itinerary
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 mb-8">
          Tell us your dream destinations, travel style, and preferences. Our
          experts will craft the perfect adventure for you!
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

          {/* Destination */}
          <TextField
            label="Preferred Destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            fullWidth
            placeholder="E.g., Everest Base Camp, Bhutan, Annapurna Circuit"
            required
          />

          {/* Dates */}
          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="End Date"
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </div>

          {/* Travelers */}
          <TextField
            label="Number of Travelers"
            name="travelers"
            type="number"
            value={form.travelers}
            onChange={handleChange}
            fullWidth
            inputProps={{ min: 1 }}
          />

          {/* Preferences */}
          <TextField
            label="Special Preferences (e.g. luxury, adventure, cultural tours)"
            name="preferences"
            value={form.preferences}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />

          {/* Submit */}
          <div className="text-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              Request Itinerary
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
}
