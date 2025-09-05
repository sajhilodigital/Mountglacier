"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

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
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: 1,
      title: "Everest Base Camp Trek",
      region: "Sagarmatha, Nepal",
      duration: "14 Days",
      price: 1299,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1509644851180-7f3b3c341f11?w=800",
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
      image:
        "https://images.unsplash.com/photo-1509644851180-7f3b3c341f22?w=800",
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
      image:
        "https://images.unsplash.com/photo-1509644851180-7f3b3c341f33?w=800",
      description:
        "Langtang Valley Trek is a short but scenic trek offering beautiful valleys, alpine forests, and Himalayan panoramas.",
    },
  ]);

  const editDestination = (id: number) => {
    alert(`Edit destination with ID: ${id}`);
  };

  const deleteDestination = (id: number) => {
    if (!confirm("Are you sure you want to delete this destination?")) return;
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Admin Destinations</h1>

      <div className="space-y-6">
        {destinations.map((dest) => (
          <Card key={dest.id} className="overflow-hidden shadow-md">
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {dest.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
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
              <p className="text-gray-700">{dest.description}</p>
            </CardContent>
            <div className="flex justify-end gap-2 p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => editDestination(dest.id)}
              >
                <Pencil className="w-4 h-4 mr-1" /> Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteDestination(dest.id)}
              >
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
