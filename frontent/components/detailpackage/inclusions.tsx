"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function Inclusions() {
  const included = [
    "Airport picks up & drop by private vehicle to hotel.",
    "Transportation from Kathmandu to Pokhara and Pokhara to Kathmandu.",
    "Flight from Pokhara to Jomsom and Jomsom to Pokhara.",
    "Sightseeing at Kathmandu Valley.",
    "Sharing jeep over trip for Upper Mustang.",
    "Necessary paperwork and Trekking Permits fee (ACAP permit & Upper Mustang Restricted Permit).",
    "Accommodation during trek and Meal (Breakfast, Lunch, Dinner and a cup of coffee or tea).",
    "Licensed English or Chinese or Korean or Hindi along with Nepali speaking Friendly trekking guide.",
    "Coverage of Guides including their Meals, Insurance, Salary, Lodging, transportation and other necessary equipment.",
    "First Aid Medical Kit (Carried by the guide).",
    "Sleeping bag, down jackets and trekking map, if necessary.",
    "Emergency Evacuation Assistance Service (The cost of the helicopter, hospital and necessary transport are not payable by the company).",
    "Welcome or farewell dinner in Kathmandu at a cultural restaurant (complimentary).",
    "A nation-wide operated Mobile SIM Card and a map of the trekking region.",
  ];

  const optional = [
    "Private vehicle from Kathmandu to Pokhara and Pokhara to Kathmandu.",
  ];

  const notIncluded = [
    "International airfare.",
    "Nepal Entry Visa fee: you can obtain a visa easily upon your arrival at Tribhuvan International Airport.",
    "Personal Travel insurance which has to cover emergency high-altitude rescue and evacuation compulsory.",
    "Personal expense (shopping, snacks, boil bottle water, hot and cold drinks, hot shower, Alcohol, Wi-Fi, telephone call, battery re-chargefee).",
    "Accommodation, Lunches and dinners in Kathmandu, except the farewell dinner.",
    "Emergency expenses such as expenses on charted helicopter.",
    "Additional costs or delays caused by out of management control, for example, landslide, weather condition, itinerary modification due to safety concerns, illness, change of government policies etc.",
    "Gratitude and tips for your guide, porter and driver.",
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Inclusions & Exclusions
      </h2>

      <div className="space-y-10">
        {/* Included */}
        <div>
          <h3 className="text-xl font-bold bg-green-200 text-gray-800 mb-6 flex items-center rounded-t-2xl justify-center py-4  gap-2">
            What&apos;s Included
          </h3>
          <ul className="space-y-4">
            {included.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 hover:bg-green-50 p-2 rounded-lg transition"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Optional */}
          <h4 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
            Optional Addons
          </h4>
          <ul className="space-y-4">
            {optional.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 hover:bg-green-50 p-2 rounded-lg transition"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div>
          <h3 className="text-xl font-bold bg-red-200 text-gray-800 mb-6 flex items-center rounded-t-2xl justify-center py-4  gap-2">
            What&apos;s Not Included
          </h3>
          <ul className="space-y-4">
            {notIncluded.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 hover:bg-red-50 p-2 rounded-lg transition"
              >
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
