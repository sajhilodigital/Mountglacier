"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Star, MapPin, ArrowRight } from "lucide-react";

interface Destination {
  name: string;
  location: string;
  rating: number;
  img: string;
  category: "Adventure" | "Trek" | "Tour" | "China";
  routes?: string[];
  shortDesc: string;
  longDesc: string;
}

const allDestinations: Destination[] = [
  // Nepal - Adventure/Trek/Tour
  {
    name: "Everest Base Camp Trek",
    location: "Nepal (Khumbu Region)",
    rating: 4.9,
    img: "/destination/everest.jpeg",
    category: "Adventure",
    routes: [
      "Everest Base Camp – 12 Days",
      "Three Pass Trek – 21 Days",
      "Cho La Pass – 12/13 Days",
    ],
    shortDesc: "Iconic trek through Sherpa villages and Himalayan vistas.",
    longDesc:
      "One of the world’s most iconic treks, leading you through Sherpa villages, Buddhist monasteries, and breathtaking Himalayan vistas, ending at the foot of Mount Everest. Suitable for experienced trekkers, includes acclimatization days and scenic viewpoints.",
  },
  {
    name: "Annapurna Circuit Trek",
    location: "Nepal (Annapurna Range)",
    rating: 4.8,
    img: "/destination/anapurna.jpeg",
    category: "Adventure",
    routes: [
      "Annapurna Circuit – 16 Days",
      "Annapurna Base Camp – 12 Days",
      "Mardi Himal – 7 Days",
      "Ghorepani Poon Hill – 5 Days",
    ],
    shortDesc: "Diverse landscapes and cultural experience.",
    longDesc:
      "A diverse trek that combines lush valleys, arid plateaus, and stunning views of Annapurna, Dhaulagiri, and Machapuchare (Fishtail Mountain). Explore local villages, hot springs, and religious sites.",
  },
  {
    name: "Manaslu Circuit Trek",
    location: "Nepal (Gorkha Region)",
    rating: 4.8,
    img: "/destination/manaslum.jpeg",
    category: "Adventure",
    routes: ["Manaslu Circuit – 14 Days", "Tsum Valley Trek – 18 Days"],
    shortDesc: "Less crowded trek with rich cultural encounters.",
    longDesc:
      "A less crowded alternative to Annapurna, this trek circles Mount Manaslu (8,163m) and offers a blend of cultural encounters and dramatic landscapes. Remote villages and high mountain passes included.",
  },
  {
    name: "Langtang Valley Trek",
    location: "Nepal (Langtang National Park)",
    rating: 4.7,
    img: "/destination/lantang.jpeg",
    category: "Trek",
    routes: ["Langtang Valley Trek – 10 Days", "Helambu Trek – 7 Days"],
    shortDesc: "Cultural trek near Kathmandu with scenic views.",
    longDesc:
      "A culturally rich trek near Kathmandu, passing through Tamang villages, yak pastures, and glaciers with magnificent mountain views. Moderate difficulty suitable for most trekkers.",
  },
  {
    name: "Mardi Himal Trek",
    location: "Nepal (Annapurna Region)",
    rating: 4.6,
    img: "/destination/manaslu.jpeg",
    category: "Trek",
    routes: ["Mardi Himal Trek – 7 Days"],
    shortDesc: "Quiet off-the-beaten-path trek.",
    longDesc:
      "Close-up views of Machhapuchhre, quiet off-the-beaten-path route, Rhododendron forests, and scenic ridge trails. Best in fall and spring seasons.",
  },
  {
    name: "Ghorepani Poon Hill Trek",
    location: "Nepal (Pokhara Region)",
    rating: 4.6,
    img: "/destination/poonhill.jpeg",
    category: "Trek",
    routes: ["Poon Hill Trek – 5 Days"],
    shortDesc: "Short scenic trek for beginners.",
    longDesc:
      "A short yet scenic trek ideal for beginners, offering spectacular sunrise views over the Annapurna and Dhaulagiri ranges from Poon Hill. Cultural experience in Gurung villages.",
  },
  {
    name: "Chitwan Jungle Safari",
    location: "Nepal (Chitwan National Park)",
    rating: 4.7,
    img: "/destination/chitwan.jpg",
    category: "Tour",
    routes: ["Chitwan Safari – 3 Days"],
    shortDesc: "Wildlife safari with jeep and canoe rides.",
    longDesc:
      "Experience Nepal’s wildlife with jeep safaris and canoe rides. Spot rhinos, elephants, crocodiles, and if lucky, the elusive Bengal tiger. Learn about Tharu culture.",
  },
  {
    name: "Kathmandu Heritage Tour",
    location: "Nepal (Kathmandu Valley)",
    rating: 4.7,
    img: "/destination/kathmandu.jpg",
    category: "Tour",
    routes: ["Kathmandu Heritage – 2 Days"],
    shortDesc: "Explore UNESCO World Heritage sites.",
    longDesc:
      "Explore UNESCO World Heritage sites including Swayambhunath (Monkey Temple), Pashupatinath Temple, Boudhanath Stupa, and the medieval cities of Patan and Bhaktapur.",
  },
  {
    name: "Lumbini Pilgrimage Tour",
    location: "Nepal (Lumbini)",
    rating: 4.5,
    img: "/destination/lumbini.jpg",
    category: "Tour",
    routes: ["Lumbini Pilgrimage – 1 Day"],
    shortDesc: "Spiritual journey to Buddha's birthplace.",
    longDesc:
      "A spiritual journey to the birthplace of Lord Buddha, featuring sacred monasteries, meditation centers, and peaceful gardens.",
  },
  {
    name: "Rara Lake Adventure",
    location: "Nepal (Mugu District)",
    rating: 4.7,
    img: "/destination/rara.jpg",
    category: "Adventure",
    routes: ["Rara Lake Trek – 7 Days"],
    shortDesc: "Trek to Nepal's largest lake.",
    longDesc:
      "Trek to the pristine Rara Lake, surrounded by pine forests, snowcapped peaks, and peaceful Himalayan scenery. Ideal for nature lovers.",
  },
  {
    name: "Upper Mustang Cultural Journey",
    location: "Nepal (Mustang Region)",
    rating: 4.8,
    img: "/destination/uppermustang.jpg",
    category: "Adventure",
    routes: ["Upper Mustang – 12 Days"],
    shortDesc: "Journey through 'Forbidden Kingdom'.",
    longDesc:
      "Step back in time with this journey through the 'Forbidden Kingdom' of Mustang, known for its ancient Tibetan Buddhist culture, cave monasteries, and dramatic desert landscapes.",
  },
  // China / Tibet
  {
    name: "Mansarovar Pilgrimage",
    location: "Tibet, China",
    rating: 4.8,
    img: "/destination/mansorobar.jpg",
    category: "China",
    routes: ["Mansarovar – 10 Days"],
    shortDesc: "Sacred lake pilgrimage in Tibet.",
    longDesc:
      "Journey to Lake Mansarovar in Tibet, visit sacred monasteries, and experience the spiritual ambiance of the region.",
  },
  {
    name: "Lhasa Cultural Tour",
    location: "Tibet, China",
    rating: 4.7,
    img: "/destination/lhasa.jpg",
    category: "China",
    routes: ["Lhasa – 5 Days"],
    shortDesc: "Visit Potala Palace and Jokhang Temple.",
    longDesc:
      "Explore Lhasa, the capital of Tibet, visiting the iconic Potala Palace, Jokhang Temple, Barkhor Street, and experience Tibetan culture firsthand.",
  },
  {
    name: "Everest Tibet Base Camp Trek",
    location: "Tibet, China",
    rating: 4.8,
    img: "/destination/everesttibet.jpg",
    category: "China",
    routes: ["Everest Tibet Base Camp – 10 Days"],
    shortDesc: "View Everest from Tibet side.",
    longDesc:
      "Trek to the northern base camp of Everest in Tibet, offering stunning views of the world’s highest peak with fewer crowds than the Nepal side.",
  },
  {
    name: "Great Himalaya Trail",
    location: "Across Nepal",
    rating: 5.0,
    img: "/destination/GreatHimalaya.webp",
    category: "Adventure",
    routes: ["Full GHT Traverse – 150 Days"],
    shortDesc: "The ultimate trekking adventure across Nepal.",
    longDesc:
      "The Great Himalaya Trail is one of the longest and most challenging treks in the world, spanning the entire length of Nepal. It connects remote villages, high passes, and offers views of Everest, Annapurna, Kanchenjunga, and many more peaks.",
  },

  {
    name: "Bhaktapur Tour",
    location: "Bhaktapur, Nepal",
    rating: 4.7,
    img: "/destination/bhaktapur.jpg",
    category: "Tour",
    routes: ["Bhaktapur Heritage Tour – 1 Day"],
    shortDesc: "Discover the living museum of Bhaktapur.",
    longDesc:
      "Bhaktapur, a UNESCO World Heritage city, is a cultural hub showcasing traditional Newari architecture, temples, and art. Explore Durbar Square, Pottery Square, and taste authentic Newari cuisine on this one-day heritage tour.",
  },

  {
    name: "Patan Tour",
    location: "Lalitpur, Nepal",
    rating: 4.6,
    img: "/destination/patan.jpg",
    category: "Tour",
    routes: ["Patan Heritage Tour – 1 Day"],
    shortDesc: "Explore ancient Newari art and culture.",
    longDesc:
      "Patan, known as the city of fine arts, is home to ancient temples, stupas, and courtyards. Visit Patan Durbar Square, explore the Patan Museum, and witness Newari handicrafts that reflect centuries of tradition.",
  },
  {
    name: "Kanchenjunga Trek",
    location: "Taplejung, Nepal",
    rating: 4.9,
    img: "/destination/kanchanjunga.jpg",
    category: "Trek",
    routes: ["Kanchenjunga Base Camp – 20 Days"],
    shortDesc: "A remote trek to the world’s third-highest mountain.",
    longDesc:
      "The Kanchenjunga Trek offers breathtaking views of Mt. Kanchenjunga (8,586m), the third-highest peak in the world. This challenging adventure passes through remote trails, traditional villages, and high-altitude landscapes for an unforgettable experience.",
  },

  {
    name: "Dhaulagiri Trek",
    location: "Dhaulagiri Region, Nepal",
    rating: 4.8,
    img: "/destination/dhaulagiri.jpg",
    category: "Trek",
    routes: ["Dhaulagiri Circuit – 16 Days"],
    shortDesc: "A classic trek around Mt. Dhaulagiri.",
    longDesc:
      "The Dhaulagiri Trek takes you around the seventh-highest mountain in the world (8,167m). It passes through remote valleys, glaciers, and cultural villages, offering adventure seekers a demanding but rewarding trekking route.",
  },

  {
    name: "Dolpo Trek",
    location: "Shey Phoksundo, Dolpo, Nepal",
    rating: 4.7,
    img: "/destination/dolpa.jpg",
    category: "Adventure",
    routes: ["Upper Dolpo – 24 Days", "Lower Dolpo – 14 Days"],
    shortDesc: "Remote trekking into the hidden valleys of Dolpo.",
    longDesc:
      "The Dolpo Trek explores one of Nepal’s most isolated regions, famous for Shey Phoksundo Lake, Tibetan culture, ancient monasteries, and pristine Himalayan valleys. This challenging trek also offers chances to spot rare wildlife like blue sheep and snow leopards.",
  },
  {
    name: "Paro Taktsang (Tiger's Nest)",
    location: "Paro, Bhutan",
    rating: 4.8,
    img: "/destination/paro.jpg",
    category: "Tour",
    routes: ["Paro Hike – 1 Day"],
    shortDesc: "Visit Bhutan's most iconic monastery perched on a cliff.",
    longDesc:
      "Paro Taktsang, also known as the Tiger's Nest, is a sacred Himalayan monastery clinging to a cliffside. It offers breathtaking views of the Paro Valley and is one of Bhutan's most important spiritual landmarks.",
  },
  {
    name: "Punakha Dzong",
    location: "Punakha, Bhutan",
    rating: 4.7,
    img: "/destination/punakha.jpg",
    category: "Tour",
    routes: ["Punakha Tour – 2 Days"],
    shortDesc: "Explore the majestic fortress at the confluence of two rivers.",
    longDesc:
      "Punakha Dzong, also known as the 'Palace of Great Happiness,' is one of Bhutan’s most stunning fortresses. It is located at the meeting point of the Pho Chhu and Mo Chhu rivers and showcases exquisite Bhutanese architecture.",
  },
  {
    name: "Thimphu",
    location: "Thimphu, Bhutan",
    rating: 4.6,
    img: "/destination/thimphu.jpg",
    category: "Tour",
    routes: ["Thimphu City Tour – 2 Days"],
    shortDesc: "Discover the charm of Bhutan's capital city.",
    longDesc:
      "Thimphu, Bhutan’s capital, blends modern development with ancient traditions. From the majestic Tashichho Dzong to the bustling weekend markets, Thimphu offers a unique mix of culture, history, and spirituality.",
  },
  {
    name: "Bumthang Valley",
    location: "Bumthang, Bhutan",
    rating: 4.7,
    img: "/destination/bumthang.jpg",
    category: "Tour",
    routes: ["Bumthang Exploration – 3 Days"],
    shortDesc: "Experience the spiritual heartland of Bhutan.",
    longDesc:
      "Bumthang Valley is known as the spiritual heart of Bhutan, dotted with ancient monasteries and temples. Surrounded by lush fields and scenic mountains, it is a place of peace, devotion, and natural beauty.",
  },
  {
    name: "Jumolhari Trek",
    location: "Bhutan",
    rating: 4.9,
    img: "/destination/jumolhari.jpg",
    category: "Trek",
    routes: ["Jumolhari Trek – 7 Days"],
    shortDesc:
      "A classic Bhutanese trek offering stunning views of Mount Jumolhari.",
    longDesc:
      "The Jumolhari Trek is one of Bhutan’s most famous trekking routes, taking adventurers through alpine meadows, remote villages, and high mountain passes, with awe-inspiring views of Mount Jumolhari.",
  },
  {
    name: "Laya Gasa Trek",
    location: "Bhutan",
    rating: 4.8,
    img: "/destination/laya.jpg",
    category: "Trek",
    routes: ["Laya Gasa Trek – 14 Days"],
    shortDesc:
      "An adventurous high-altitude trek through remote villages and pristine valleys.",
    longDesc:
      "The Laya Gasa Trek is a challenging journey across Bhutan’s rugged landscapes. It takes you to remote villages, hot springs, and pristine mountain regions, offering an unforgettable cultural and natural experience.",
  },
  {
    name: "Snowman Trek",
    location: "Bhutan",
    rating: 5.0,
    img: "/destination/snowman.jpg",
    category: "Trek",
    routes: ["Snowman Trek – 25 Days"],
    shortDesc:
      "One of the world's most challenging treks, crossing high passes with breathtaking views.",
    longDesc:
      "The Snowman Trek is Bhutan’s ultimate adventure, often considered one of the hardest treks in the world. It crosses multiple high passes above 5,000 meters, showcasing untouched landscapes and secluded Himalayan villages.",
  },
  {
    name: "Chele La Trek",
    location: "Paro, Bhutan",
    rating: 4.5,
    img: "/destination/chelela.jpg",
    category: "Trek",
    routes: ["Chele La Trek – 2 Days"],
    shortDesc:
      "A shorter, scenic trek offering panoramic views of the Himalayas.",
    longDesc:
      "The Chele La Trek is a relatively short but rewarding hike near Paro. It provides sweeping views of the Himalayan range, alpine meadows, and colorful wildflowers, making it ideal for those seeking a moderate adventure.",
  },
  {
    name: "Shigatse & Namtso Lake",
    location: "Tibet, China",
    rating: 4.6,
    img: "/destination/shigatse.jpg",
    category: "China",
    routes: ["Shigatse – 4 Days", "Namtso Lake – 3 Days"],
    shortDesc: "Cultural and natural Tibetan journey.",
    longDesc:
      "Visit Shigatse, the second largest city in Tibet, explore Tashilhunpo Monastery, and marvel at the turquoise Namtso Lake surrounded by mountains.",
  },
];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    Destination["category"] | "All"
  >("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories: (Destination["category"] | "All")[] = [
    "All",
    "Adventure",
    "Trek",
    "Tour",
    "China",
  ];

  const filteredDestinations =
    selectedCategory === "All"
      ? allDestinations
      : allDestinations.filter((dest) => dest.category === selectedCategory);

  return (
    <Box className="py-12 px-6 bg-white text-center">
      <Typography
        variant="h4"
        className="font-bold mb-10"
        sx={{
          background: "linear-gradient(90deg, #000, #0077b6, #b08968)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Adventure, Trek & Tour Destinations
      </Typography>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map((dest, idx) => (
          <Card
            key={idx}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-white/90 text-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                <Star className="w-4 h-4 text-yellow-500" /> {dest.rating}
              </div>
            </div>

            <CardContent className="p-4 text-left flex flex-col gap-2">
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" /> {dest.location}
              </div>
              <Typography variant="h6" className="font-bold mb-1">
                {dest.name}
              </Typography>

              {dest.routes && (
                <div>
                  <h3 className="font-medium text-sm">Routes:</h3>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {dest.routes.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Typography variant="body2" className="text-gray-600">
                {expandedIndex === idx ? dest.longDesc : dest.shortDesc}
              </Typography>

              <Button
                variant="ghost"
                className="flex items-center gap-1 mt-2 ml-auto"
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
              >
                {expandedIndex === idx ? "Show Less" : "View Details"}{" "}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
}
