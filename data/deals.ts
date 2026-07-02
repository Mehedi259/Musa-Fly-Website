export interface HotDeal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  category: "flight" | "tour" | "package";
  destination: string;
  validUntil: string;
  featured: boolean;
}

export const hotDeals: HotDeal[] = [
  {
    id: "deal-1",
    title: "Singapore Dream Package",
    description: "3 nights 4 days all-inclusive Singapore tour with flights and hotel",
    originalPrice: 1299,
    discountedPrice: 999,
    discount: 23,
    image: "/images/deals/singapore-deal.jpg",
    category: "package",
    destination: "Singapore",
    validUntil: "2026-08-31",
    featured: true,
  },
  {
    id: "deal-2",
    title: "Malaysia Beach Getaway",
    description: "5 nights Langkawi beach resort with breakfast and airport transfers",
    originalPrice: 899,
    discountedPrice: 699,
    discount: 22,
    image: "/images/deals/malaysia-deal.jpg",
    category: "tour",
    destination: "Malaysia",
    validUntil: "2026-09-15",
    featured: true,
  },
  {
    id: "deal-3",
    title: "Oman Desert Adventure",
    description: "4 nights Oman tour with desert safari, city tour and accommodation",
    originalPrice: 1499,
    discountedPrice: 1199,
    discount: 20,
    image: "/images/deals/oman-deal.jpg",
    category: "package",
    destination: "Oman",
    validUntil: "2026-08-20",
    featured: true,
  },
  {
    id: "deal-4",
    title: "Bangladesh Cultural Tour",
    description: "6 nights Bangladesh tour covering Dhaka, Cox's Bazar and Sylhet",
    originalPrice: 599,
    discountedPrice: 449,
    discount: 25,
    image: "/images/deals/bangladesh-deal.jpg",
    category: "tour",
    destination: "Bangladesh",
    validUntil: "2026-09-30",
    featured: false,
  },
];

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "offer-1",
    title: "Summer Special",
    subtitle: "Up to 30% Off",
    description: "Book your dream vacation now and save big on selected destinations",
    image: "/images/offers/summer-special.jpg",
    ctaText: "Explore Deals",
    ctaLink: "#deals",
  },
  {
    id: "offer-2",
    title: "Family Packages",
    subtitle: "Special Group Discounts",
    description: "Travel with family and get exclusive discounts on tour packages",
    image: "/images/offers/family-package.jpg",
    ctaText: "View Packages",
    ctaLink: "#tours",
  },
  {
    id: "offer-3",
    title: "Visa Fast Track",
    subtitle: "Express Processing",
    description: "Get your visa approved faster with our premium processing service",
    image: "/images/offers/visa-express.jpg",
    ctaText: "Apply Now",
    ctaLink: "#visa",
  },
];
