import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";
import { HeroSection } from "@/sections/HeroSection";
import { HotDealsSection } from "@/sections/HotDealsSection";
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
      <HotDealsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
