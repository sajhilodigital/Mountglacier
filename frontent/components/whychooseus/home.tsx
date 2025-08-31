"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Shield,
  Users,
  Globe,
  Heart,
  Compass,
  Clock,
} from "lucide-react";

export default function AdventurePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "5000+",
      desc: "Successful Treks",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "98%",
      desc: "Success Rate",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "50+",
      desc: "Expert Guides",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "15",
      desc: "Countries Served",
    },
  ];

  const details = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Safety First",
      desc: "Certified guides, emergency protocols, and comprehensive insurance.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Expert Local Guides",
      desc: "Sherpa guides with mountain knowledge and cultural insights.",
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "20+ Years Experience",
      desc: "Two decades of successful expeditions.",
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-500" />,
      title: "Sustainable Tourism",
      desc: "Preserving Himalayan culture and supporting locals.",
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: "Unique Routes",
      desc: "Exclusive trails and hidden gems.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "24/7 Support",
      desc: "Assistance before, during, and after your adventure.",
    },
  ];

  const faqs = [
    {
      question: "What is the best time to visit the Himalayas?",
      answer:
        "The best seasons are spring (March–May) and autumn (September–November), when the weather is stable and the skies are clear.",
    },
    {
      question: "Do I need previous trekking experience?",
      answer:
        "No prior experience is necessary for beginner-friendly treks. However, being reasonably fit will make your experience more enjoyable.",
    },
    {
      question: "What gear and equipment do I need?",
      answer:
        "Essential gear includes trekking boots, layered clothing, a warm jacket, a backpack, and a sleeping bag. A full gear list will be provided upon booking.",
    },
    {
      question: "How do you handle altitude sickness?",
      answer:
        "Our guides are trained in altitude management. We follow a gradual acclimatization schedule and carry oxygen & first aid kits.",
    },
    {
      question: "What permits are required for Himalayan treks?",
      answer:
        "Required permits vary by region, such as TIMS and national park entry permits. We handle all permit arrangements for you.",
    },
    {
      question: "What about food and accommodation?",
      answer:
        "Accommodation is usually in tea houses or lodges. Meals are freshly prepared, with options for both vegetarians and non-vegetarians.",
    },
    {
      question: "How physically fit do I need to be?",
      answer:
        "Most treks require moderate fitness. Regular walking or light cardio exercise beforehand will help you enjoy the trek comfortably.",
    },
    {
      question: "What’s included in the tour packages?",
      answer:
        "Packages generally include accommodation, meals during the trek, permits, guide services, and ground transportation.",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Adventure Features Section */}
      <section className="w-full px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            Why Choose <span className="text-blue-500">Our Adventures</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Trusted worldwide for safe, authentic, and transformative Himalayan
            experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {features.map((f, i) => (
            <Card
              key={i}
              className="rounded-xl p-4 text-center hover:shadow-md hover:scale-105 transition-transform duration-200"
            >
              <CardContent>
                <div className="flex justify-center mb-2">{f.icon}</div>
                <p className="font-semibold text-lg">{f.title}</p>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((d, i) => (
            <Card
              key={i}
              className="rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              <CardContent>
                <div className="flex justify-center mb-3">{d.icon}</div>
                <p className="font-semibold text-base mb-1">{d.title}</p>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Everything you need to know about Himalayan adventures and our
            services
          </p>
        </div>

        <div className="bg-white shadow rounded-lg divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4">
              <button
                className="w-full flex justify-between items-center text-left font-medium text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
