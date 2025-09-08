"use client";

import React, { useEffect, useRef, useState } from "react";
import { tours } from "@/lib/tourpackage";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import Inclusions from "./inclusions";
import InformationPage from "./information";
import Itinerary from "./itinerary";
import OverviewPage from "./overviewpage";
import ReviewForm from "./review";
import Price from "./price";

// Optional: describe a Tour shape locally for better DX (does not affect runtime)
type Tour = {
  id: string | number;
  title: string;
  image: string;
  location?: string;
  price?: number;
  additionalInfo?: string;
  [key: string]: unknown;
};

export default function TourDetail() {
  // ✅ Strongly type params to avoid TS errors like: Property 'id' does not exist
  const { id } = useParams<{ id: string | string[] }>();
  const tourId = Array.isArray(id) ? id?.[0] : id;

  // ✅ Be defensive: tours could be any[]; coerce ids to string for comparison
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "price", label: "Price" },
    { id: "inclusion", label: "Inclusions" },
    { id: "info", label: "Information" },
    { id: "review", label: "Review" },
  ] as const;

  const [active, setActive] = useState<string>("overview");
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const tour = Array.isArray(tours)
    ? (tours as Tour[]).find((t) => String(t.id) === String(tourId))
    : undefined;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const check = () => {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  if (!tour) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
        <p className="text-lg font-medium">Tour not found</p>
      </div>
    );
  }

  const onKeyDownTabs = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      const i = tabs.findIndex((t) => t.id === active);
      setActive(tabs[Math.min(tabs.length - 1, Math.max(0, i + 1))].id);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const i = tabs.findIndex((t) => t.id === active);
      setActive(tabs[Math.max(0, i - 1)].id);
      e.preventDefault();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Header */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={(tour as Tour).image}
          alt={(tour as Tour).title}
          width={1200}
          height={600}
          className="w-full h-[300px] md:h-[450px] object-cover"
          priority
        />
        <div className="absolute bottom-6 left-6 bg-gradient-to-r from-black/70 to-black/30 text-white p-6 rounded-xl max-w-lg">
          <h1 className="text-2xl md:text-4xl font-bold">
            {(tour as Tour).title}
          </h1>
          {tour.location && (
            <p className="text-sm mt-2">{tour.location as string}</p>
          )}
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mt-10 relative">
        <div className="relative">
          {/* Scroller: flex on mobile (scrollable), grid on md */}
          <div
            ref={scrollerRef}
            onKeyDown={onKeyDownTabs}
            tabIndex={0}
            role="tablist"
            aria-orientation="horizontal"
            className="flex gap-2 overflow-x-auto scroll-smooth md:grid md:grid-cols-6 md:gap-6 bg-blue-100 rounded-xl p-2 md:p-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => {
                    setActive(t.id);
                    const el = scrollerRef.current;
                    const btn =
                      (el?.querySelector(
                        `[data-tab="${t.id}"]`
                      ) as HTMLElement) || null;
                    if (btn && el) {
                      const btnLeft = btn.offsetLeft;
                      const btnRight = btnLeft + btn.offsetWidth;
                      if (btnLeft < el.scrollLeft)
                        el.scrollTo({ left: btnLeft - 8, behavior: "smooth" });
                      else if (btnRight > el.scrollLeft + el.clientWidth)
                        el.scrollTo({
                          left: btnRight - el.clientWidth + 8,
                          behavior: "smooth",
                        });
                    }
                  }}
                  data-tab={t.id}
                  className={`flex-shrink-0 w-1/3 md:w-auto md:justify-center md:px-4 py-2 rounded-lg text-sm md:text-base focus:outline-none ${
                    isActive
                      ? "bg-white text-blue-700 font-semibold shadow"
                      : "text-gray-700 hover:bg-white/60"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Left gradient hint (mobile only) */}
          {canScrollLeft && (
            <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-blue-100 to-transparent pointer-events-none md:hidden" />
          )}

          {/* Right gradient hint (mobile only) */}
          {canScrollRight && (
            <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-blue-100 to-transparent pointer-events-none md:hidden" />
          )}
        </div>
      </div>

      {/* Tab panels */}
      <div className="mt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          {active === "overview" && (
            <div
              id="panel-overview"
              role="tabpanel"
              aria-labelledby="overview"
              className="space-y-6"
            >
              <OverviewPage />
            </div>
          )}

          {active === "itinerary" && (
            <div
              id="panel-itinerary"
              role="tabpanel"
              aria-labelledby="itinerary"
              className="space-y-6"
            >
              <Itinerary />
            </div>
          )}

          {active === "price" && (
            <div
              id="panel-price"
              role="tabpanel"
              aria-labelledby="price"
              className="space-y-4"
            >
              <Price />
              <h2 className="text-xl font-semibold">Pricing</h2>
              <p className="text-lg">
                Starts from{" "}
                <span className="font-bold text-green-600">
                  ${typeof tour.price === "number" ? tour.price : 549}
                </span>{" "}
                per person
              </p>
            </div>
          )}

          {active === "inclusion" && (
            <div
              id="panel-inclusion"
              role="tabpanel"
              aria-labelledby="inclusion"
              className="space-y-4"
            >
              <Inclusions />
            </div>
          )}

          {active === "info" && (
            <div
              id="panel-info"
              role="tabpanel"
              aria-labelledby="info"
              className="space-y-4"
            >
              <InformationPage />
            </div>
          )}

          {active === "review" && (
            <div
              id="panel-review"
              role="tabpanel"
              aria-labelledby="review"
              className="space-y-6"
            >
              <ReviewForm />
              <h2 className="text-xl font-semibold">Additional Info</h2>
              <p className="text-gray-700 leading-relaxed">
                {typeof tour.additionalInfo === "string" &&
                tour.additionalInfo.trim().length > 0
                  ? tour.additionalInfo
                  : "This trek offers cultural immersion with Sherpa, Gurung, and Magar communities, stunning landscapes, and the best views of the Himalayas."}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
