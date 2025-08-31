"use client";

import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Users, TicketPercent, Map, PartyPopper } from "lucide-react";

export default function GroupTravel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    groupSize: "",
    destination: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Group Travel Request:", form);
    alert("Thank you! We’ll get back to you with group travel offers.");
  };

  return (
    <Box className="py-16 px-6 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Typography
          variant="h4"
          className="font-bold text-center mb-4 text-orange-700"
        >
          👥 Group Travelling Packages
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 mb-12">
          Planning a trip with friends, family, or colleagues? Get **exclusive
          discounts, custom itineraries, and unforgettable shared experiences**
          with our group travel offers.
        </Typography>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Bigger Savings
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Special discounts for groups of 5+ travelers.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <TicketPercent className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Exclusive Offers
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Complimentary add-ons and group perks.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Map className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Custom Routes
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Tailor-made itineraries for your group’s needs.
            </Typography>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <PartyPopper className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <Typography variant="h6" className="font-semibold">
              Fun Experiences
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Team bonding, adventure, and cultural activities.
            </Typography>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <Typography
            variant="h5"
            className="font-bold text-center mb-6 text-orange-700"
          >
            Request Group Travel Quote
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

            {/* Group Size & Destination */}
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                label="Group Size"
                name="groupSize"
                type="number"
                value={form.groupSize}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Preferred Destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>

            {/* Message */}
            <TextField
              label="Additional Message (optional)"
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
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg"
              >
                Get Group Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}
