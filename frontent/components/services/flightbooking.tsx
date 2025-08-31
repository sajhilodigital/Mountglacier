"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { Button } from "@/components/ui/button";

export default function FlightBooking() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    passengers: 1,
    travelClass: "Economy",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box className="py-16 bg-gray-50 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <Typography
          variant="h4"
          className="font-bold text-center mb-6 text-blue-700"
        >
          ✈️ Book Your Flight
        </Typography>

        {/* From & To */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <TextField
            label="From"
            name="from"
            value={form.from}
            onChange={handleChange}
            fullWidth
            placeholder="Enter departure city"
          />
          <TextField
            label="To"
            name="to"
            value={form.to}
            onChange={handleChange}
            fullWidth
            placeholder="Enter destination city"
          />
        </div>

        {/* Dates */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <TextField
            label="Departure Date"
            name="departure"
            type="date"
            value={form.departure}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Return Date"
            name="returnDate"
            type="date"
            value={form.returnDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </div>

        {/* Passengers & Class */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <TextField
            label="Passengers"
            name="passengers"
            type="number"
            value={form.passengers}
            onChange={handleChange}
            fullWidth
            inputProps={{ min: 1 }}
          />
          <TextField
            label="Class"
            name="travelClass"
            select
            value={form.travelClass}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First">First Class</MenuItem>
          </TextField>
        </div>

        {/* Search Button */}
        <div className="text-center">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg text-lg">
            Search Flights
          </Button>
        </div>
      </div>
    </Box>
  );
}
