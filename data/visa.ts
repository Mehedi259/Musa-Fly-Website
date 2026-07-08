export interface VisaService {
  id: string;
  country: string;
  processingTime: string;
  startingPrice: number;
  type: string;
  requirements: string[];
  popular: boolean;
  image: string;
  description: string;
  validityPeriod: string;
  processingSteps: string[];
  additionalInfo: string[];
  documentsNeeded: {
    title: string;
    description: string;
  }[];
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
    description: "Singapore is a vibrant city-state known for its modern architecture, diverse culture, and world-class attractions. Our Singapore tourist visa service ensures a smooth and hassle-free application process.",
    validityPeriod: "30 days (single/multiple entry available)",
    processingSteps: [
      "Submit required documents",
      "Application review (1-2 days)",
      "Embassy processing (3-5 days)",
      "Visa approval and collection",
    ],
    additionalInfo: [
      "Tourist visa holders can stay up to 30 days",
      "Extensions possible for special circumstances",
      "Multiple entry visa available",
      "Business visa also available on request",
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport with minimum 6 months validity and at least 2 blank pages",
      },
      {
        title: "Photographs",
        description: "2 recent passport-size color photographs (35mm x 45mm) with white background",
      },
      {
        title: "Bank Statement",
        description: "Last 3 months bank statement showing sufficient funds (minimum $3000)",
      },
      {
        title: "Flight Tickets",
        description: "Confirmed round-trip flight booking",
      },
      {
        title: "Hotel Booking",
        description: "Hotel reservation confirmation for entire stay period",
      },
      {
        title: "Cover Letter",
        description: "Purpose of visit and travel itinerary",
      },
    ],
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
    description: "Malaysia offers beautiful beaches, modern cities, and rich cultural heritage. Get your Malaysian tourist visa quickly and easily with our expert assistance.",
    validityPeriod: "30-90 days (depends on visa type)",
    processingSteps: [
      "Document submission and verification",
      "Online application filing",
      "Embassy appointment (if required)",
      "Visa approval and delivery",
    ],
    additionalInfo: [
      "eVisa available for eligible countries",
      "Transit visa available for layovers",
      "Social visit visa for family visits",
      "Multiple entry visa options available",
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Valid passport with at least 6 months validity",
      },
      {
        title: "Photographs",
        description: "2 passport-size color photographs with blue background",
      },
      {
        title: "Financial Proof",
        description: "Bank statement showing minimum $2000 balance",
      },
      {
        title: "Travel Itinerary",
        description: "Detailed travel plan including flights and accommodations",
      },
      {
        title: "Accommodation Proof",
        description: "Hotel bookings or invitation letter from host",
      },
    ],
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
    description: "Discover the beauty of Oman with its stunning deserts, pristine beaches, and rich Arabian heritage. We make your Oman visa application simple and stress-free.",
    validityPeriod: "30 days (single/multiple entry)",
    processingSteps: [
      "Online application submission",
      "Document verification",
      "Embassy processing",
      "eVisa delivery via email",
    ],
    additionalInfo: [
      "eVisa available for most nationalities",
      "Express processing available (2-3 days)",
      "Family visa packages available",
      "Business visa options available",
    ],
    documentsNeeded: [
      {
        title: "Passport Copy",
        description: "Colored scan of passport bio page (minimum 6 months validity)",
      },
      {
        title: "Photograph",
        description: "Digital passport-size photograph with white background",
      },
      {
        title: "Hotel Confirmation",
        description: "Confirmed hotel booking for entire stay",
      },
      {
        title: "Flight Booking",
        description: "Return flight tickets",
      },
      {
        title: "Travel Insurance",
        description: "Valid travel insurance covering Oman (recommended)",
      },
    ],
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
    description: "Experience the natural beauty and warm hospitality of Bangladesh. Our visa services ensure a smooth application process for your Bangladesh visit.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection and verification",
      "Application form completion",
      "Embassy submission",
      "Visa collection after approval",
    ],
    additionalInfo: [
      "Visa on arrival available for some countries",
      "Business visa available",
      "Long-term visa options for extended stays",
      "Student visa processing also available",
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months",
      },
      {
        title: "Photographs",
        description: "4 recent passport-size photographs",
      },
      {
        title: "Application Form",
        description: "Completed and signed visa application form",
      },
      {
        title: "Invitation Letter",
        description: "Invitation letter from host in Bangladesh (if applicable)",
      },
      {
        title: "Financial Documents",
        description: "Proof of sufficient funds for the trip",
      },
    ],
  },
  {
    id: "thailand-visa",
    country: "Thailand",
    processingTime: "5-10 working days",
    startingPrice: 50,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/thailand.jpg",
    description: "Experience the culture and beauty of Thailand with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "dubai-visa",
    country: "Dubai",
    processingTime: "5-10 working days",
    startingPrice: 150,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/dubai.jpg",
    description: "Experience the culture and beauty of Dubai with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "saudi-visa",
    country: "Saudi Arabia",
    processingTime: "5-10 working days",
    startingPrice: 200,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/saudi.jpg",
    description: "Experience the culture and beauty of Saudi Arabia with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "usa-visa",
    country: "USA",
    processingTime: "5-10 working days",
    startingPrice: 160,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/usa.jpg",
    description: "Experience the culture and beauty of USA with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "uk-visa",
    country: "UK",
    processingTime: "5-10 working days",
    startingPrice: 130,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/uk.jpg",
    description: "Experience the culture and beauty of UK with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "canada-visa",
    country: "Canada",
    processingTime: "5-10 working days",
    startingPrice: 100,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/canada.jpg",
    description: "Experience the culture and beauty of Canada with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "australia-visa",
    country: "Australia",
    processingTime: "5-10 working days",
    startingPrice: 140,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/australia.jpg",
    description: "Experience the culture and beauty of Australia with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "schengen-visa",
    country: "Schengen",
    processingTime: "5-10 working days",
    startingPrice: 90,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/schengen.jpg",
    description: "Experience the culture and beauty of Schengen with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "japan-visa",
    country: "Japan",
    processingTime: "5-10 working days",
    startingPrice: 40,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/japan.jpg",
    description: "Experience the culture and beauty of Japan with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "korea-visa",
    country: "South Korea",
    processingTime: "5-10 working days",
    startingPrice: 50,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/korea.jpg",
    description: "Experience the culture and beauty of South Korea with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "vietnam-visa",
    country: "Vietnam",
    processingTime: "5-10 working days",
    startingPrice: 30,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/vietnam.jpg",
    description: "Experience the culture and beauty of Vietnam with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  },
  {
    id: "egypt-visa",
    country: "Egypt",
    processingTime: "5-10 working days",
    startingPrice: 45,
    type: "Tourist Visa",
    requirements: [
      "Valid passport (min 6 months)",
      "Passport size photos",
      "Bank statement (last 3 months)",
      "Flight & Hotel booking"
    ],
    popular: false,
    image: "/images/visa/egypt.jpg",
    description: "Experience the culture and beauty of Egypt with our streamlined visa services.",
    validityPeriod: "30-90 days",
    processingSteps: [
      "Document collection",
      "Application processing",
      "Embassy submission",
      "Visa collection"
    ],
    additionalInfo: [
      "Fast track processing available on request",
      "Multiple entry options available for eligible applicants"
    ],
    documentsNeeded: [
      {
        title: "Passport",
        description: "Original passport valid for at least 6 months"
      },
      {
        title: "Photographs",
        description: "Recent passport-size photographs with white background"
      },
      {
        title: "Financial Documents",
        description: "Last 3-6 months bank statement"
      }
    ]
  }
];