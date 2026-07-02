export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "visa" | "tours" | "flights";
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I book a flight through Musa Fly?",
    answer:
      "Simply click on any flight-related button or link, and you'll be redirected to our WhatsApp where our travel experts will assist you in finding the best flights at competitive prices.",
    category: "flights",
  },
  {
    id: "faq-2",
    question: "What documents do I need for a visa application?",
    answer:
      "Generally, you'll need a valid passport (minimum 6 months validity), passport-size photos, bank statements (last 3 months), hotel booking confirmation, and return flight tickets. Requirements may vary by country.",
    category: "visa",
  },
  {
    id: "faq-3",
    question: "How long does visa processing take?",
    answer:
      "Processing time varies by country. Typically, it ranges from 3-10 working days. We also offer express processing services for faster approval. Contact us for specific country timelines.",
    category: "visa",
  },
  {
    id: "faq-4",
    question: "Are your tour packages customizable?",
    answer:
      "Yes! We offer both pre-designed packages and fully customizable tours based on your preferences, budget, and travel dates. Contact us on WhatsApp to discuss your requirements.",
    category: "tours",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including bank transfers, credit/debit cards, and online payment platforms. Payment details will be shared during the booking process through WhatsApp.",
    category: "general",
  },
  {
    id: "faq-6",
    question: "Is customer support available 24/7?",
    answer:
      "Yes! Our customer support team is available 24/7 via WhatsApp. Feel free to reach out anytime with your queries or booking requests.",
    category: "general",
  },
  {
    id: "faq-7",
    question: "What happens if my visa application is rejected?",
    answer:
      "While we maintain a high approval rate, in the rare case of rejection, we'll guide you through the reapplication process. Refund policies vary by country and will be discussed during booking.",
    category: "visa",
  },
  {
    id: "faq-8",
    question: "Do you provide travel insurance?",
    answer:
      "Yes, we can arrange comprehensive travel insurance coverage for your trips. This includes medical emergencies, trip cancellations, lost baggage, and more. Contact us for details.",
    category: "tours",
  },
];
