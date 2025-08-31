"use client";

import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import {
  CalendarHeart,
  Building2,
  Glasses,
  Music,
  PartyPopper,
} from "lucide-react";

export default function EventPlanning() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Planning Request:", form);
    alert("Thank you! Our event specialists will contact you shortly.");
  };

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-purple-700"
        >
          🎉 Event Planning Services
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 mb-12">
          From **corporate events and weddings** to **festivals and retreats**,
          our expert planners ensure flawless execution, creative design, and
          unforgettable experiences.
        </Typography>

        {/* Services Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <CalendarHeart className="w-10 h-10 text-pink-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Weddings
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Destination weddings with magical setups.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Building2 className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Corporate Events
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Conferences, team-building, and retreats.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Music className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Cultural Shows
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Local music, dance, and festivals arranged.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Glasses className="w-10 h-10 text-blue-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Private Parties
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Birthdays, anniversaries & celebrations.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <PartyPopper className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Festivals
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Event design & logistics for large gatherings.
            </Typography>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <Typography
            variant="h5"
            className="font-bold text-center mb-6 text-purple-700"
          >
            Plan Your Event With Us
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

            {/* Event Type & Guests */}
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                label="Event Type"
                name="eventType"
                placeholder="Wedding, Corporate, Festival..."
                value={form.eventType}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Expected Guests"
                name="guests"
                type="number"
                value={form.guests}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>

            {/* Message */}
            <TextField
              label="Additional Details"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg"
              >
                Get Event Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}
