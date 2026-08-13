import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";
import { HeroSection } from "@/sections/HeroSection";

import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ToursSection } from "@/sections/ToursSection";
import { VisaSection } from "@/sections/VisaSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ToursSection />
      <VisaSection />

      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
