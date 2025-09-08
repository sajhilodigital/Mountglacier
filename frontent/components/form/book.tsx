"use client";

import React from "react";

export default function BookNowForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 mt-16">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-lg">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 text-center">
          Book Your Adventure
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6 text-center">
          Fill in your details and let’s plan your perfect journey.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Destination */}
          <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white">
            <option>Select Destination</option>
            <option>Everest Base Camp</option>
            <option>Annapurna Circuit</option>
            <option>Ladakh Adventure</option>
            <option>Bhutan Cultural Tour</option>
          </select>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
            <input
              type="date"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
          </div>

          {/* Travelers */}
          <input
            type="number"
            placeholder="Number of Travelers"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Special Requests */}
          <textarea
            placeholder="Special Requests (optional)"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            rows={3}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
