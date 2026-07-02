export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    text: "Musa Fly made our Singapore trip absolutely unforgettable! The planning was seamless, and their customer support was available 24/7. Highly recommended!",
    date: "2026-06-15",
  },
  {
    id: "testimonial-2",
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    image: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    text: "Excellent visa service! They handled everything professionally and got my Malaysia visa approved in just 4 days. Will definitely use their services again.",
    date: "2026-06-10",
  },
  {
    id: "testimonial-3",
    name: "Emily Chen",
    location: "London, UK",
    image: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    text: "The Malaysia tour package was incredible value for money. Everything was perfectly organized, and the WhatsApp support was super responsive. Thank you Musa Fly!",
    date: "2026-05-28",
  },
  {
    id: "testimonial-4",
    name: "Michael Brown",
    location: "Toronto, Canada",
    image: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    text: "Best travel agency I've worked with! The team is professional, prices are competitive, and they genuinely care about customer satisfaction. Our Oman trip was amazing!",
    date: "2026-05-20",
  },
];
