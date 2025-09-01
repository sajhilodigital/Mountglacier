"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-full max-w-2xl p-8 rounded-2xl">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Write A Review
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Share your experience with us! Your feedback helps us improve and
          inspires future travelers.
        </p>

        {/* Star Rating */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-7 h-7 cursor-pointer transition-all ${
                star <= rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <Label className="text-sm">Full Name</Label>
            <Input placeholder="Enter your full name" />
          </div>
          <div>
            <Label className="text-sm">Email</Label>
            <Input type="email" placeholder="example@email.com" />
          </div>
          <div>
            <Label className="text-sm">Country</Label>
            <Input placeholder="Your country" />
          </div>
          <div>
            <Label className="text-sm">Select Tour</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a tour" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="everest">Everest Base Camp Trek</SelectItem>
                <SelectItem value="mustang">
                  Mustang Tiji Festival 12 Days
                </SelectItem>
                <SelectItem value="annapurna">
                  Annapurna Circuit Trek
                </SelectItem>
                <SelectItem value="kathmandu">
                  Kathmandu Heritage Tour
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm">Message</Label>
            <Textarea placeholder="Write your review here..." rows={4} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Button className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:opacity-90">
            Submit Review
          </Button>
        </div>
      </div>
    </div>
  );
}
