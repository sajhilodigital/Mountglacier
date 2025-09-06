// app/information/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function InformationPage() {
  const infoSections = [
    {
      id: 1,
      title: "Did You Know?",
      color: "text-indigo-600",
      content: [
        "Mustang was called the “Forbidden Kingdom,” until it allowed westerners in 1992.",
        "Tiji festival takes place in the restricted land of Lomathang.",
        "The famous “Thakali” ethnicities come from Mustang.",
      ],
    },
    {
      id: 2,
      title: "Permit For Mustang Tiji Festival",
      color: "text-purple-600",
      content: [
        "The permit for the Mustang Tiji festival is the permit for Upper Mustang Trek. The Tiji Festival is the indigenous one of the city of Lo-Manthang.",
        "Upper Mustang being a restricted area consists of two permits: ACAP (Annapurna Conservation Area Project) and RAP (Restricted Area Permit). While trekking this region, you won’t be needing a TIMS card, as RAP will cover the requirements.",
        "ACAP comes with a cost of 20 USD per person. RAP comes with a cost of 500 USD per person for 10 days. Exceeding the 10-day limit will require an extra 50 USD per day.",
      ],
    },
    {
      id: 3,
      title: "The Story Of Upper Mustang Tiji Festival",
      color: "text-teal-600",
      content: [
        "Tiji, translated to English, means “prayer for world peace.” A grand Tibetan Buddhist festival celebrated by people in Lo-Manthang. It carries a great importance for the locals.",
        "Tiji festival started over 300 years ago as a celebration of the victory of good over evil. Deity Dorje Jono is the main deity, who defeated evil forces to bring peace.",
        "Each year in May, monks carry out a ritual in his name. The festival lasts up to 3 days with prayers, chants, dances, and symbolic enactments of good defeating evil.",
      ],
    },
    {
      id: 4,
      title: "How Is The Tiji Festival Celebrated?",
      color: "text-rose-600",
      content: [
        "The Tiji festival happens between April and May, under the Tibetan Lunar Calendar. A three-day celebration in Lo-Manthang, where thousands gather.",
        "The three days consist of prayers, chants, and dances by Chhode monastery monks wearing traditional masks and dresses.",
      ],
    },
    {
      id: 5,
      title: "Weather In Mustang During The Tiji Festival",
      color: "text-orange-600",
      content: [
        "The Tiji festival is annually held in April and May, considered spring in Nepal. These months are perfect for trekking Upper Mustang.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-12">
        Mustang Tiji Festival Information
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {infoSections.map((section, index) => (
          <Card
            key={section.id}
            className={`shadow-3xl hover:shadow-xl transition-all duration-300 bg-gray-50 rounded-lg 
              ${
                index % 3 === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : "md:col-span-1"
              }
            `}
          >
            <CardContent className="p-6">
              <h2 className={`text-xl font-semibold mb-2 ${section.color}`}>
                {section.title}
              </h2>
              {section.content.map((line, i) => (
                <p key={i} className="text-gray-700 mb-2">
                  {line}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <p className="text-center text-gray-600 italic">
        ✨ Experience culture, spirituality, and adventure with the Mustang Tiji
        Festival ✨
      </p>
    </div>
  );
}
