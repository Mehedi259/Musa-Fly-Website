export interface VisaService {
  id: string;
  country: string;
  processingTime: string;
  startingPrice: number;
  type: string;
  requirements: string[];
  popular: boolean;
  image: string;
}

export const visaServices: VisaService[] = [
  {
    id: "singapore-visa",
    country: "Singapore",
    processingTime: "5-7 working days",
    startingPrice: 150,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Hotel booking confirmation",
      "Return flight tickets",
    ],
    popular: true,
    image: "/images/visa/singapore.jpg",
  },
  {
    id: "malaysia-visa",
    country: "Malaysia",
    processingTime: "3-5 working days",
    startingPrice: 120,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Hotel booking confirmation",
      "Return flight tickets",
    ],
    popular: true,
    image: "/images/visa/malaysia.jpg",
  },
  {
    id: "oman-visa",
    country: "Oman",
    processingTime: "4-6 working days",
    startingPrice: 200,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Hotel booking confirmation",
      "Return flight tickets",
    ],
    popular: true,
    image: "/images/visa/oman.jpg",
  },
  {
    id: "bangladesh-visa",
    country: "Bangladesh",
    processingTime: "7-10 working days",
    startingPrice: 100,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Hotel booking confirmation",
      "Return flight tickets",
    ],
    popular: false,
    image: "/images/visa/bangladesh.jpg",
  },
];
