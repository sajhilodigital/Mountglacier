"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash } from "lucide-react";

export default function EditForm() {
  const [priceTiers, setPriceTiers] = useState([
    { groupSize: "2-4", priceUSD: "1200" },
  ]);
  const [itinerary, setItinerary] = useState([
    { day: "1", title: "Arrival", details: "Welcome to Kathmandu" },
  ]);

  const addTier = () =>
    setPriceTiers([...priceTiers, { groupSize: "", priceUSD: "" }]);
  const removeTier = (i: number) =>
    setPriceTiers(priceTiers.filter((_, idx) => idx !== i));

  const addItinerary = () =>
    setItinerary([...itinerary, { day: "", title: "", details: "" }]);
  const removeItinerary = (i: number) =>
    setItinerary(itinerary.filter((_, idx) => idx !== i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", { priceTiers, itinerary });
    alert("Demo Edit Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 max-w-4xl mx-auto">
      <Card className="shadow-lg border p-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Edit Trek Package (Demo)
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Title</Label>
            <Input defaultValue="Everest Base Camp Trek" />
          </div>
          <div>
            <Label>Region</Label>
            <Input defaultValue="Everest" />
          </div>
          <div className="md:col-span-2">
            <Label>Description</Label>
            <Textarea defaultValue="The Everest Base Camp trek is a journey to the foot of the world's highest mountain." />
          </div>
        </CardContent>
      </Card>

      {/* Price Tiers */}
      <Card className="p-0">
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
      <Card className="p-0">
        <CardHeader>
          <CardTitle className="font-semibold">Itinerary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {itinerary.map((day, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start"
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

      <Button type="submit" className="w-full text-lg py-3">
        Save Changes (Demo)
      </Button>
    </form>
  );
}
