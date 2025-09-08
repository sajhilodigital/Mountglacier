"use client";

import React from "react";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import { Button } from "@/components/ui/button";
import { TravelExplore, Verified, Star } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function CustomItineraries() {
  const router = useRouter();

  return (
    <Box className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* Hero Section */}
        <Typography
          variant="h3"
          className="font-extrabold text-center text-blue-700 mb-4"
        >
          🗺️ Craft Your Dream Journey
        </Typography>
        <Typography className="text-center text-gray-700 mb-8 text-lg">
          Tell us about your dream destinations and travel style. Our travel
          experts will create a personalized itinerary just for you, making your
          adventure seamless and unforgettable!
        </Typography>

        {/* Benefits Section */}
        <Box className="mb-10">
          <Typography
            variant="h5"
            className="font-bold text-gray-800 mb-4 text-center"
          >
            Why Choose Our Custom Itineraries?
          </Typography>
          <List className="space-y-3 max-w-xl mx-auto">
            <ListItem className="flex items-center gap-3">
              <Verified className="text-green-500" />
              <span>Tailored travel plans for your unique preferences</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <Star className="text-yellow-500" />
              <span>Handpicked destinations, experiences & activities</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <TravelExplore className="text-blue-500" />
              <span>Expert travel guidance & insider tips</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <Verified className="text-green-500" />
              <span>Flexible and stress-free planning</span>
            </ListItem>
          </List>
        </Box>

        <Divider className="my-8" />

        {/* Call to Action */}
        <Box className="text-center">
          <Button
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Contact Us for Your Custom Itinerary
          </Button>
        </Box>
      </div>
    </Box>
  );
}
