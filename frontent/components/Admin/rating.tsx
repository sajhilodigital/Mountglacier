"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialRatings = [
  {
    id: 1,
    user: "Roshan Tharu",
    rating: 5,
    comment: "Excellent service! Highly recommended.",
    status: "approved",
    show: true,
  },
  {
    id: 2,
    user: "Sitaram Rimal",
    rating: 4,
    comment: "Good, but can improve.",
    status: "pending",
    show: false,
  },
];

export default function RatingsAdminCards() {
  const [ratings, setRatings] = useState(initialRatings);

  const toggleShow = (id: number) => {
    setRatings((prev) =>
      prev.map((r) => (r.id === id ? { ...r, show: !r.show } : r))
    );
  };

  const changeStatus = (id: number, newStatus: string) => {
    setRatings((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const deleteRating = (id: number) => {
    setRatings((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="grid gap-4 p-6 md:grid-cols-2">
      {ratings.map((rating) => (
        <Card key={rating.id} className="shadow-lg p-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="font-semibold">{rating.user}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < rating.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{rating.comment}</p>
            <div className="mt-3">
              <Select
                value={rating.status}
                onValueChange={(val) => changeStatus(rating.id, val)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="approved">✅ Approved</SelectItem>
                  <SelectItem value="pending">⏳ Pending</SelectItem>
                  <SelectItem value="rejected">❌ Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <Switch
                checked={rating.show}
                onCheckedChange={() => toggleShow(rating.id)}
              />
              <span className="text-sm">
                {rating.show ? "Visible" : "Hidden"}
              </span>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteRating(rating.id)}
            >
              <Trash2 className="h-4 w-4 mr-1" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
