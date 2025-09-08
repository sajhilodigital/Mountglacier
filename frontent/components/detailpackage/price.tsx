"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Price() {
  const routes = [
    { route: "Kathmandu → Pokhara", price: 249 },
    { route: "Kathmandu → Chitwan", price: 199 },
    { route: "Pokhara → Mustang", price: 399 },
    { route: "Everest Base Camp Trek", price: 549 },
  ];

  const [offers, setOffers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState<{ [key: string]: boolean }>({});

  const handleOfferChange = (route: string, value: string) => {
    setOffers((prev) => ({ ...prev, [route]: value }));
  };

  const handleSubmit = (route: string) => {
    if (!offers[route]) return;
    setLoading((prev) => ({ ...prev, [route]: true }));

    // Fake 1.5s delay to simulate API call
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [route]: false }));
      setSubmitted((prev) => ({ ...prev, [route]: true }));
    }, 1500);
  };

  return (
    <motion.div
      className="mt-6 p-6 rounded-2xl border shadow-md bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Pricing by Route</h2>

      <div className="space-y-6">
        {routes.map((item) => (
          <div
            key={item.route}
            className="space-y-2 border-b pb-4 last:border-none"
          >
            {/* Route and base price */}
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{item.route}</span>
              <span className="font-semibold text-green-600">
                ${item.price}
              </span>
            </div>

            {/* Bargain section */}
            {!submitted[item.route] ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="number"
                  placeholder="Enter your offer"
                  value={offers[item.route] || ""}
                  onChange={(e) =>
                    handleOfferChange(item.route, e.target.value)
                  }
                  disabled={loading[item.route]}
                />
                <Button
                  onClick={() => handleSubmit(item.route)}
                  disabled={loading[item.route]}
                >
                  {loading[item.route] ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Offer"
                  )}
                </Button>
              </div>
            ) : (
              <p className="text-blue-600">
                ✅ Demo: Your offer of <strong>${offers[item.route]}</strong>{" "}
                for <em>{item.route}</em> was “submitted”.
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
