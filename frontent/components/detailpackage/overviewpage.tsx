// app/overview/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-pink-50 md:mt-32 via-white to-indigo-50 min-h-screen">
      {/* Sidebar */}
      <Card className="md:col-span-1 shadow-xl rounded-2xl border-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10">
        <CardContent className="space-y-4 text-sm p-4">
          <h2 className="text-lg font-bold text-indigo-600">Trip Details</h2>

          <div>
            <p className="font-semibold text-gray-700">Trip Code:</p>
            <p className="text-indigo-600">NLMTJFT - 2</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Accommodation:</p>
            <p className="text-pink-600">Tea House, Lodges</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Maximum Altitude:</p>
            <p className="text-indigo-600">3850 M</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Season:</p>
            <p className="text-rose-600">May - August</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Meals:</p>
            <p className="text-teal-600">Breakfast, Lunch and Dinner</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Destination:</p>
            <p className="text-indigo-700">Kathmandu Mustang Tiji Festival</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Duration:</p>
            <p className="text-fuchsia-600">12 Days</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Grade:</p>
            <p className="text-orange-600">Moderate</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Transportation:</p>
            <p className="text-teal-700">Private Car, Tourist Bus</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Trip Attraction:</p>
            <p className="text-pink-700">Upper Mustang, Tiji Festival</p>
          </div>

          <Separator className="my-4" />

          <div>
            <p className="font-semibold text-gray-700">No of People</p>
            <p className="text-sm mt-2">
              <span className="text-indigo-600">1-3</span> →{" "}
              <span className="font-bold text-rose-600">1900 USD</span>
            </p>
            <p>
              <span className="text-indigo-600">4-6</span> →{" "}
              <span className="font-bold text-rose-600">1900 USD</span>
            </p>
            <p>
              <span className="text-indigo-600">6 above</span> →{" "}
              <span className="font-bold text-rose-600">1900 USD</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Card className="md:col-span-2 shadow-xl rounded-2xl border-0 bg-white">
        <CardContent className="space-y-6 p-6">
          {/* Share Buttons */}
          <div className="flex gap-3 flex-wrap">
            <Button
              variant="secondary"
              size="sm"
              className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
            >
              Share
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-sky-500 hover:bg-sky-600 text-white shadow-md"
            >
              Tweet
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-rose-500 hover:bg-rose-600 text-white shadow-md"
            >
              Email
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-teal-500 hover:bg-teal-600 text-white shadow-md"
            >
              Save
            </Button>
          </div>

          {/* Title */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold">Trip Highlights</h2>
            <h1 className="text-3xl font-extrabold mt-2">
              Mustang Tiji Festival Trek
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
            <p>
              🌸 The Mustang Tiji Festival is a fascinating annual three-day
              festival with Tibetan rituals celebrating the myth of a son who
              saved the Mustang kingdom from destruction...
            </p>

            <p>
              ✨ The word <span className="text-indigo-600">Tiji</span> comes
              from “Ten Che,” meaning{" "}
              <span className="italic text-rose-600">
                hope of Buddhism prevailing for peace
              </span>
              ...
            </p>

            <h3 className="font-semibold text-indigo-700 text-lg">
              Upper Mustang trekking in Nepal
            </h3>
            <p>
              Officially opened in{" "}
              <span className="font-bold text-teal-600">1992</span>, the Upper
              Mustang trek allows only minimal trekkers each year...
            </p>

            <h3 className="font-semibold text-rose-700 text-lg">
              On The 1st Day of The Mustang Tiji Festival
            </h3>
            <p>
              Monks perform a dance called{" "}
              <span className="font-bold">‘Tsa Cham’</span>, telling the story
              of Dorji Sonam...
            </p>

            <h3 className="font-semibold text-pink-700 text-lg">
              On The 2nd Day
            </h3>
            <p>
              The <span className="italic">‘NgaCham’</span> dance portrays
              Dorjee Sonam trying to return the demon...
            </p>

            <h3 className="font-semibold text-indigo-700 text-lg">
              On The 3rd And Final Day
            </h3>
            <p>
              🎉 The <span className="font-bold">‘Rha Cham’</span> ceremony
              banishes evil and spreads{" "}
              <span className="text-green-600 font-semibold">peace</span>...
            </p>

            <h3 className="font-semibold text-fuchsia-700 text-lg">
              Current Update of Mustang
            </h3>
            <p>
              🏔 Mustang is now ranked the{" "}
              <span className="text-indigo-600 font-bold">
                23rd best travel destination
              </span>{" "}
              in the world (BBC).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
