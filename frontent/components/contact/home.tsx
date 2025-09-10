"use client";

import { useState } from "react";
import { PhoneCall, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Typography } from "@mui/material";
import { Calendar, Camera, Map, Plane, Shield, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Flight Booking",
    desc: "Best deals on flights worldwide with 24/7 customer support",
    icon: <Plane className="h-10 w-10 text-white" />,
    link: "/services/flight",
  },
  {
    title: "Custom Itineraries",
    desc: "Personalized travel plans crafted by our expert travel consultants",
    icon: <Map className="h-10 w-10 text-white" />,
    link: "/services/custom",
  },
  {
    title: "Photo Tours",
    desc: "Capture stunning moments with guided photography expeditions",
    icon: <Camera className="h-10 w-10 text-white" />,
    link: "/services/gallery",
  },
  {
    title: "Travel Insurance",
    desc: "Comprehensive coverage for peace of mind during your journey",
    icon: <Shield className="h-10 w-10 text-white" />,
    link: "/services/travel",
  },
  {
    title: "Group Travel",
    desc: "Special packages for families, friends, and corporate groups",
    icon: <Users className="h-10 w-10 text-white" />,
    link: "/services/grouptravel",
  },
  {
    title: "Event Planning",
    desc: "Destination weddings and special occasion travel arrangements",
    icon: <Calendar className="h-10 w-10 text-white" />,
    link: "/services/event",
  },
];

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "You can fill out the contact form above or call us directly. Our travel experts will guide you through the booking process.",
  },
  {
    question: "Do you offer customized tours?",
    answer:
      "Yes! We specialize in tailor-made travel experiences to fit your preferences, budget, and schedule.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 7 days before the trip are fully refundable. For last-minute cancellations, partial refunds may apply.",
  },
  {
    question: "Can I get travel insurance?",
    answer:
      "Absolutely! We provide travel insurance options for all our tours, ensuring you have peace of mind throughout your journey.",
  },
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 mt-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Ready to plan your next adventure? Contact our travel experts today!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Travel Destination"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Tell us about your dream vacation..."
              rows={4}
              className="w-full p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded text-white font-medium bg-gradient-to-r from-blue-500 to-orange-400 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
            <p className="text-gray-600 text-sm">
              Thamel <br /> Kathmandu ,44600, Nepal
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
            <p className="text-gray-600 text-sm">+977 9851411452</p>
            <p className="text-gray-600 text-sm">+977 9843431452</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
            <p className="text-gray-600 text-sm">mountadventure091@gmail.com</p>
            <p className="text-gray-600 text-sm">
              mountadventure091@hotmail.com
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
            <p className="text-gray-600 text-sm">Mon - Fri: 9AM - 6PM</p>
            <p className="text-gray-600 text-sm">Sat - Sun: 10AM - 4PM</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Chat with Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/9779851411452"
                target="_blank"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B9779851411452"
                className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition"
              >
                <PhoneCall size={18} /> Viber
              </a>
              <a
                href="weixin://dl/chat?username=9779851411452"
                className="flex items-center gap-2 bg-sky-500 text-white px-3 py-2 rounded-md hover:bg-sky-600 transition"
              >
                <Smartphone size={18} /> WeChat
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Emergency Support</h4>
            <p className="text-sm mb-3">
              Need assistance while traveling? Our 24/7 emergency support team
              is here to help.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold">
              Emergency Hotline: +977 9851411452 911-HELP
            </button>
          </div>
        </div>
      </div>

      {/* ==================== Services Section ==================== */}
      <Box className="w-full px-6 py-12 text-center mt-16">
        <Typography variant="body1" className="text-gray-500 mb-10">
          From planning to booking, we handle every detail of your journey
        </Typography>

        <Box className="flex flex-wrap justify-center max-w-7xl mx-auto gap-6 mt-7">
          {services.map((service, i) => (
            <Link href={service.link} key={i} className="no-underline">
              <Card className="w-72 text-center shadow-lg rounded-2xl transition-transform duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer border border-transparent hover:border-gradient-to-r hover:from-sky-400 hover:to-orange-400 bg-gradient-to-br from-white via-gray-50 to-white">
                <Box className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-sky-500 to-orange-400 p-4 rounded-full inline-flex items-center justify-center">
                    {service.icon}
                  </div>
                </Box>
                <Typography
                  variant="h6"
                  className="font-semibold mb-2 text-gray-800"
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600 mb-4 px-2 leading-relaxed"
                >
                  {service.desc}
                </Typography>
              </Card>
            </Link>
          ))}
        </Box>

        {/* ==================== FAQ Section ==================== */}
        <Box className="mt-16 text-left max-w-4xl mx-auto">
          <Typography variant="h4" className="font-bold mb-6 text-center">
            Frequently Asked Questions
          </Typography>

          {faqs.map((faq, i) => (
            <Box
              key={i}
              className="mb-4 border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-4 py-3 bg-sky-50 hover:bg-sky-100 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-gray-500 font-bold">
                  {openFaq === i ? "-" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <Box className="px-4 py-3 bg-white text-gray-600">
                  {faq.answer}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* Bottom CTA Section */}
        <Box className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-400 text-white text-center">
          <Typography variant="h5" className="font-bold mb-2">
            Ready to Start Your Adventure?
          </Typography>
          <Typography variant="body1" className="mb-6">
            Our travel experts are standing by to help you plan the perfect
            getaway
          </Typography>
          <Box className="flex justify-center gap-4 flex-wrap mt-6">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-lg">
              Get Free Consultation
            </Button>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg">
              Call Now: +977 9851411452
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
