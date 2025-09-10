"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Destination = {
  id: number;
  title: string;
  region: string;
  duration: string;
  price: number;
  status: string;
  image: string;
  description: string;
};

export default function AdminDestinations() {
  const router = useRouter();
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: 1,
      title: "Everest Base Camp Trek",
      region: "Sagarmatha, Nepal",
      duration: "14 Days",
      price: 1299,
      status: "Active",
      image: "/destination/everest.jpeg",
      description:
        "The Everest Base Camp trek is a journey to the foot of the world's highest mountain, offering stunning views of the Himalayas.",
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      region: "Annapurna, Nepal",
      duration: "10 Days",
      price: 999,
      status: "Draft",
      image: "/destination/anapurna.jpeg",
      description:
        "The Annapurna Circuit is a classic trek that circles the Annapurna Massif, passing through diverse landscapes and cultures.",
    },
    {
      id: 3,
      title: "Langtang Valley Trek",
      region: "Langtang, Nepal",
      duration: "7 Days",
      price: 799,
      status: "Hidden",
      image: "/destination/lantang.jpeg",
      description:
        "Langtang Valley Trek is a short but scenic trek offering beautiful valleys, alpine forests, and Himalayan panoramas.",
    },
    {
      id: 4,
      title: "Manaslu Circuit Trek",
      region: "Gorkha, Nepal",
      duration: "16 Days",
      price: 1399,
      status: "Active",
      image: "/destination/manaslu.jpeg",
      description:
        "Manaslu Circuit Trek is an adventurous and less-crowded trek with breathtaking views and remote village experience.",
    },
    {
      id: 5,
      title: "Mardi Himal Trek",
      region: "Annapurna, Nepal",
      duration: "6 Days",
      price: 699,
      status: "Active",
      image: "/destination/mardihimal.jpg",
      description:
        "Mardi Himal Trek is a short and scenic trek that offers excellent views of Machapuchare and Annapurna range.",
    },
    {
      id: 6,
      title: "Upper Mustang Trek",
      region: "Mustang, Nepal",
      duration: "12 Days",
      price: 1599,
      status: "Active",
      image: "/destination/uppermustang.jpg",
      description:
        "Upper Mustang Trek is a journey into the last forbidden kingdom with Tibetan culture, caves, and desert-like landscapes.",
    },
  ]);

  const editDestination = (id: number) => {
    router.push(`/admin/edit/${id}`);
  };

  const deleteDestination = (id: number) => {
    if (!confirm("Are you sure you want to delete this destination?")) return;
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  };

  const viewDetail = (id: number) => {
    alert(`View details for destination ID: ${id}`);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Admin Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {destinations.map((dest) => (
          <Card
            key={dest.id}
            className="relative overflow-hidden shadow-md rounded-xl group cursor-pointer p-0"
            onClick={() => viewDetail(dest.id)} // whole card clickable on mobile
          >
            {/* Image */}
            <div className="relative w-full h-64 sm:h-60 md:h-64">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-3 transition-all duration-300 group-hover:bg-black/0">
              {/* Top Left Details */}
              <div className="text-white text-sm space-y-1">
                <h2 className="text-lg font-semibold">{dest.title}</h2>
                <p>
                  <strong>Region:</strong> {dest.region}
                </p>
                <p>
                  <strong>Duration:</strong> {dest.duration}
                </p>
                <p>
                  <strong>Price:</strong> ${dest.price}
                </p>
                <p>
                  <strong>Status:</strong> {dest.status}
                </p>
              </div>

              {/* Bottom Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0"
                onClick={(e) => e.stopPropagation()} // prevent parent click
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white w-full sm:w-auto transition-all duration-200"
                  onClick={() => viewDetail(dest.id)}
                >
                  <Eye className="w-4 h-4 mr-1" /> View detail
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white w-full sm:w-auto transition-all duration-200"
                  onClick={() => editDestination(dest.id)}
                >
                  <Pencil className="w-4 h-4 mr-1" /> Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full sm:w-auto transition-all duration-200"
                  onClick={() => deleteDestination(dest.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
