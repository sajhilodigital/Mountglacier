"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tours } from "@/lib/tourpackage";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import Inclusions from "./inclusions";
import InformationPage from "./information";
import Itinerary from "./itinerary";
import OverviewPage from "./overviewpage";
import ReviewForm from "./review";

export default function TourDetail() {
  const params = useParams();
  const tour = tours.find((t) => t.id === params.id);

  if (!tour) return <div className="text-center py-20">Tour not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={tour?.image}
          alt={tour.title}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-black/60 text-white p-6 rounded-xl">
          <h1 className="text-3xl font-bold">{tour.title}</h1>
          <p className="text-sm mt-2">{tour.location}</p>
        </div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="mt-10">
        <TabsList className="grid grid-cols-6 gap-6  mx-auto w-full md:h-16 bg-blue-200">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="price">Price</TabsTrigger>
          <TabsTrigger value="inclusion">Inclusions</TabsTrigger>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview">
          <motion.div
            className="mt-6 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* OverviewPage full width */}
            <OverviewPage />
          </motion.div>
        </TabsContent>

        {/* Itinerary */}
        <TabsContent value="itinerary">
          <motion.div
            className="mt-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Itinerary />
          </motion.div>
        </TabsContent>

        {/* Price */}
        <TabsContent value="price">
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <p className="text-lg">
              Starts from <span className="font-bold text-green-600">$549</span>{" "}
              per person
            </p>
          </motion.div>
        </TabsContent>

        {/* Inclusions */}
        <TabsContent value="inclusion">
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Inclusions />
          </motion.div>
        </TabsContent>

        {/* Info */}
        <TabsContent value="info">
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <InformationPage />
          </motion.div>
        </TabsContent>

        {/* review */}
        <TabsContent value="review">
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ReviewForm />
            <h2 className="text-xl font-semibold mb-4">Additional Info</h2>
            <p>
              This trek offers cultural immersion with Sherpa, Gurung, and Magar
              communities, stunning landscapes, and the best views of the
              Himalayas.
            </p>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
