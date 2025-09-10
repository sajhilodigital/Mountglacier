"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash } from "lucide-react";

export default function TrekForm() {
  const [priceTiers, setPriceTiers] = useState([
    { groupSize: "", priceUSD: "" },
  ]);
  const [itinerary, setItinerary] = useState([
    { day: "", title: "", details: "", image: null as File | null },
  ]);
  const [frontImage, setFrontImage] = useState<File | null>(null);

  // --- Price Tier Functions ---
  const addTier = () =>
    setPriceTiers([...priceTiers, { groupSize: "", priceUSD: "" }]);
  const removeTier = (i: number) =>
    setPriceTiers(priceTiers.filter((_, idx) => idx !== i));

  // --- Itinerary Functions ---
  const addItinerary = () =>
    setItinerary([
      ...itinerary,
      { day: "", title: "", details: "", image: null },
    ]);
  const removeItinerary = (i: number) =>
    setItinerary(itinerary.filter((_, idx) => idx !== i));

  // --- Submit Handler ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Build payload JSON
    const payload = {
      code: formData.get("code"),
      title: formData.get("title"),
      slug: formData.get("slug"),
      region: formData.get("region"),
      description: formData.get("description"),
      durationDays: formData.get("durationDays"),
      grade: formData.get("grade"),
      priceUSD: formData.get("priceUSD"),
      maxAltitude: formData.get("maxAltitude"),
      accommodation: formData.get("accommodation"),
      included: formData.get("included"),
      excluded: formData.get("excluded"),
      season: formData.get("season"),
      transportation: formData.get("transportation"),
      highlights: formData.get("highlights"),
      priceTiers,
      itinerary: itinerary.map((d, i) => ({
        day: d.day,
        title: d.title,
        details: d.details,
        imageField: `itineraryImage_${i}`, // reference for image upload
      })),
    };

    // Final FormData
    const finalData = new FormData();
    finalData.append("payload", JSON.stringify(payload));

    // Add front image
    if (frontImage) {
      finalData.append("frontImage", frontImage);
    }

    // Add itinerary images
    itinerary.forEach((d, i) => {
      if (d.image) {
        finalData.append(`itineraryImage_${i}`, d.image);
      }
    });

    try {
      const res = await axios.post("/api/treks", finalData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Saved Successfully:", res.data);
      alert("Trek Package Added Successfully ✅");
    } catch (error) {
      console.error("Error saving trek package:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 max-w-5xl mx-auto">
      {/* Basic Info */}
      <Card className="shadow-lg border p-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Add Trek Package
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="frontImage">Front Image</Label>
            <Input
              id="frontImage"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFrontImage(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <div>
            <Label htmlFor="code">Code</Label>
            <Input id="code" name="code" placeholder="MT-004423" required />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Everest Base Camp Trek"
              required
            />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              placeholder="everest-base-camp-trek"
              required
            />
          </div>
          <div>
            <Label htmlFor="region">Region</Label>
            <Input id="region" name="region" placeholder="Everest" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Write trek description..."
            />
          </div>
          <div>
            <Label htmlFor="durationDays">Duration (days)</Label>
            <Input id="durationDays" type="number" name="durationDays" />
          </div>
          <div>
            <Label htmlFor="grade">Grade</Label>
            <Input id="grade" name="grade" placeholder="Challenging" />
          </div>
          <div>
            <Label htmlFor="priceUSD">Base Price (USD)</Label>
            <Input id="priceUSD" type="number" name="priceUSD" />
          </div>
          <div>
            <Label htmlFor="maxAltitude">Max Altitude (m)</Label>
            <Input id="maxAltitude" type="number" name="maxAltitude" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="accommodation">Accommodation</Label>
            <Input id="accommodation" name="accommodation" />
          </div>
        </CardContent>
      </Card>

      {/* Price Tiers */}
      <Card className="shadow-md border p-0">
        <CardHeader>
          <CardTitle className="font-semibold">Price Tiers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {priceTiers.map((tier, i) => (
            <div key={i} className="flex gap-2 items-center">
              <Input
                placeholder="Group size"
                value={tier.groupSize}
                onChange={(e) => {
                  const updated = [...priceTiers];
                  updated[i].groupSize = e.target.value;
                  setPriceTiers(updated);
                }}
              />
              <Input
                type="number"
                placeholder="Price (USD)"
                value={tier.priceUSD}
                onChange={(e) => {
                  const updated = [...priceTiers];
                  updated[i].priceUSD = e.target.value;
                  setPriceTiers(updated);
                }}
              />
              {priceTiers.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeTier(i)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addTier}>
            <PlusCircle className="mr-2 w-4 h-4" /> Add Tier
          </Button>
        </CardContent>
      </Card>

      {/* Itinerary */}
      <Card className="shadow-md border p-0">
        <CardHeader>
          <CardTitle className="font-semibold">Itinerary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {itinerary.map((day, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-5 gap-2 items-start"
            >
              <Input
                placeholder="Day"
                value={day.day}
                onChange={(e) => {
                  const updated = [...itinerary];
                  updated[i].day = e.target.value;
                  setItinerary(updated);
                }}
              />
              <Input
                placeholder="Title"
                value={day.title}
                onChange={(e) => {
                  const updated = [...itinerary];
                  updated[i].title = e.target.value;
                  setItinerary(updated);
                }}
              />
              <Textarea
                placeholder="Details"
                value={day.details}
                onChange={(e) => {
                  const updated = [...itinerary];
                  updated[i].details = e.target.value;
                  setItinerary(updated);
                }}
              />
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  const updated = [...itinerary];
                  updated[i].image = file;
                  setItinerary(updated);
                }}
              />
              {itinerary.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItinerary(i)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addItinerary}>
            <PlusCircle className="mr-2 w-4 h-4" /> Add Day
          </Button>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card className="shadow-md border p-0">
        <CardHeader>
          <CardTitle className="font-semibold">
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="included">Included</Label>
            <Textarea id="included" name="included" />
          </div>
          <div>
            <Label htmlFor="excluded">Excluded</Label>
            <Textarea id="excluded" name="excluded" />
          </div>
          <div>
            <Label htmlFor="season">Best Season</Label>
            <Input id="season" name="season" placeholder="Spring, Autumn" />
          </div>
          <div>
            <Label htmlFor="transportation">Transportation</Label>
            <Input
              id="transportation"
              name="transportation"
              placeholder="Flight, Trek"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="highlights">Highlights</Label>
            <Textarea id="highlights" name="highlights" />
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full text-lg py-3">
        Save Trek Package
      </Button>
    </form>
  );
}
