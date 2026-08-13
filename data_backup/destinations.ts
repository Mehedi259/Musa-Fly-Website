export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  tourPackages: number;
  startingPrice: number;
  popular: boolean;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "bangladesh",
    name: "Bangladesh",
    country: "Bangladesh",
    description:
      "Discover the beauty of Bangladesh with its rich culture, stunning landscapes, and warm hospitality. Explore the longest sea beach, tea gardens, and ancient heritage sites.",
    image: "/images/destinations/bangladesh.jpg",
    tourPackages: 15,
    startingPrice: 299,
    popular: true,
    highlights: ["Cox's Bazar", "Sundarbans", "Sylhet Tea Gardens", "Dhaka Old City"],
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    description:
      "Experience the futuristic cityscape of Singapore with world-class attractions, diverse cuisine, and seamless blend of culture and modernity.",
    image: "/images/destinations/singapore.jpg",
    tourPackages: 20,
    startingPrice: 899,
    popular: true,
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Universal Studios"],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    description:
      "Explore Malaysia's tropical paradise with pristine beaches, lush rainforests, and vibrant cities. Perfect blend of natural beauty and modern attractions.",
    image: "/images/destinations/malaysia.jpg",
    tourPackages: 25,
    startingPrice: 699,
    popular: true,
    highlights: ["Kuala Lumpur", "Langkawi", "Penang", "Cameron Highlands"],
  },
  {
    id: "oman",
    name: "Oman",
    country: "Oman",
    description:
      "Discover Oman's dramatic landscapes from golden deserts to pristine beaches. Experience authentic Arabian hospitality and rich cultural heritage.",
    image: "/images/destinations/oman.jpg",
    tourPackages: 12,
    startingPrice: 1099,
    popular: false,
    highlights: ["Muscat", "Wahiba Sands", "Nizwa Fort", "Jebel Shams"],
  },
];
