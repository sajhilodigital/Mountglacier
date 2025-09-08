"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Collapse,
  Divider,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  FlightTakeoff,
  LocalOffer,
  Verified,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

export default function FlightBooking() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const router = useRouter();

  const faqs = [
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us via the Contact Us page or email. Our support team is ready to assist you with flight tickets and offers.",
    },
    {
      question: "Do you provide personalized flight offers?",
      answer:
        "Yes! Contact us and our team will help you find the best flights tailored to your travel needs.",
    },
    {
      question: "Can I inquire about group bookings?",
      answer:
        "Absolutely! Our team can provide special group booking options and discounts. Reach out through our Contact Us page.",
    },
    {
      question: "How soon will I get a response?",
      answer:
        "Our team usually responds within 24 hours to all inquiries to ensure you get your tickets on time.",
    },
  ];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <Box className="py-16 bg-gray-50 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* Hero Section */}
        <Typography
          variant="h3"
          className="font-extrabold text-center text-blue-700 mb-4"
        >
          ✈️ Fly with Ease & Comfort
        </Typography>
        <Typography className="text-center text-gray-700 mb-8 text-lg">
          Need help booking flights? Contact us for amazing offers and
          hassle-free service to destinations worldwide.
        </Typography>

        {/* Offers Section */}
        <Box className="mb-10">
          <Typography variant="h5" className="font-bold text-gray-800 mb-4">
            🌟 Our Exclusive Offers
          </Typography>
          <List className="space-y-2">
            <ListItem className="flex items-center gap-3">
              <LocalOffer className="text-blue-500" />
              <span>Up to 30% off on early bookings</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <LocalOffer className="text-blue-500" />
              <span>Special discounts for families & groups</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <LocalOffer className="text-blue-500" />
              <span>Last-minute deals on popular routes</span>
            </ListItem>
          </List>
        </Box>

        <Divider className="my-8" />

        {/* Why Choose Us */}
        <Box className="mb-10">
          <Typography variant="h5" className="font-bold text-gray-800 mb-4">
            ✅ Why Choose Us?
          </Typography>
          <List className="space-y-2">
            <ListItem className="flex items-center gap-3">
              <Verified className="text-green-500" />
              <span>Trusted airline partners</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <FlightTakeoff className="text-blue-500" />
              <span>Easy assistance & instant support</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <Verified className="text-green-500" />
              <span>Flexible inquiries & personalized help</span>
            </ListItem>
            <ListItem className="flex items-center gap-3">
              <FlightTakeoff className="text-blue-500" />
              <span>Worldwide destinations & flight options</span>
            </ListItem>
          </List>
        </Box>

        <Divider className="my-8" />

        {/* FAQ Section */}
        <Box className="mb-10">
          <Typography
            variant="h5"
            className="font-bold text-gray-800 mb-4 text-center"
          >
            ❓ Frequently Asked Questions
          </Typography>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Box
                key={index}
                className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <Typography className="font-medium">
                    {faq.question}
                  </Typography>
                  <IconButton size="small">
                    {faqOpen === index ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
                <Collapse in={faqOpen === index} timeout="auto" unmountOnExit>
                  <Typography className="mt-2 text-gray-700">
                    {faq.answer}
                  </Typography>
                </Collapse>
              </Box>
            ))}
          </div>
        </Box>

        {/* Call to Action */}
        <Box className="text-center">
          <Button
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </Box>
      </div>
    </Box>
  );
}
