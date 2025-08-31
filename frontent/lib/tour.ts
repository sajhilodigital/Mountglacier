export type Tour = {
  id: number;
  title: string;
  location: string;
  days: string;
  group: string;
  altitude: string;
  level: string;
  rating: string;
  highlights: string[];
  price: string;
  img: string;
  season: string;
};

export const TOURS: Tour[] = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    location: "Sagarmatha National Park, Nepal",
    days: "14 Days",
    group: "12 people",
    altitude: "5,364m",
    level: "Moderate to Challenging",
    rating: "4.9",
    highlights: [
      "Views of Mt. Everest",
      "Sherpa culture immersion",
      "Namche Bazaar stay",
      "Tengboche Monastery",
    ],
    price: "$2,899",
    img: "/images/everest.jpg",
    season: "Sep, Nov, Mar, May",
  },
  {
    id: 2,
    title: "Annapurna Circuit Trek",
    location: "Annapurna Conservation Area, Nepal",
    days: "16 Days",
    group: "10 people",
    altitude: "5,416m",
    level: "Moderate",
    rating: "4.8",
    highlights: [
      "Thorong La Pass crossing",
      "Diverse landscapes",
      "Hindu & Buddhist temples",
      "Muktinath Temple",
    ],
    price: "$2,299",
    img: "/images/annapurna.jpg",
    season: "Oct, Dec, Mar, May",
  },
  {
    id: 3,
    title: "Langtang Valley Trek",
    location: "Langtang National Park, Nepal",
    days: "9 Days",
    group: "8 people",
    altitude: "4,984m",
    level: "Moderate",
    rating: "4.7",
    highlights: [
      "Tamang villages & culture",
      "Langtang Gompa monastery",
      "Glaciers & alpine meadows",
      "Wildlife spotting",
    ],
    price: "$1,599",
    img: "/images/langtang.jpg",
    season: "Sep, Nov, Mar, May",
  },
  {
    id: 4,
    title: "Manaslu Circuit Trek",
    location: "Manaslu Conservation Area, Nepal",
    days: "18 Days",
    group: "10 people",
    altitude: "5,106m",
    level: "Challenging",
    rating: "4.9",
    highlights: [
      "Remote villages",
      "Larke La Pass",
      "Diverse ecosystems",
      "Monasteries",
    ],
    price: "$2,499",
    img: "/images/manaslu.jpg",
    season: "Sep, Oct, Apr, May",
  },
  {
    id: 5,
    title: "Upper Mustang Trek",
    location: "Mustang Region, Nepal",
    days: "14 Days",
    group: "8 people",
    altitude: "3,810m",
    level: "Moderate",
    rating: "4.6",
    highlights: [
      "Ancient Tibetan culture",
      "Lo Manthang",
      "Desert landscapes",
      "Monasteries & caves",
    ],
    price: "$2,799",
    img: "/images/mustang.jpg",
    season: "May, Sep, Oct",
  },
  {
    id: 6,
    title: "Kanchenjunga Base Camp Trek",
    location: "Kanchenjunga Conservation Area, Nepal",
    days: "22 Days",
    group: "10 people",
    altitude: "5,143m",
    level: "Challenging",
    rating: "5.0",
    highlights: [
      "Remote eastern Himalayas",
      "Stunning glaciers",
      "Rhododendron forests",
      "Cultural villages",
    ],
    price: "$3,199",
    img: "/images/kanchenjunga.jpg",
    season: "Apr, May, Sep, Oct",
  },
];
