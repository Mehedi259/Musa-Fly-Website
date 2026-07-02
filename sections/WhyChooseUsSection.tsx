"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  DollarSign,
  FileCheck,
  MessageCircle,
  Package,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Trusted Agency",
    description:
      "Years of experience in the travel industry with thousands of satisfied customers worldwide",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Quick turnaround times for all services ensuring you get your bookings and visas on time",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description:
      "Competitive rates and exclusive deals on flights, tours, and visa services",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Complete visa support with document preparation and application tracking",
  },
  {
    icon: Package,
    title: "Tour Packages",
    description:
      "Curated tour packages with accommodation, transfers, and guided experiences",
  },
  {
    icon: MessageCircle,
    title: "24/7 WhatsApp Support",
    description:
      "Round-the-clock customer support via WhatsApp for all your travel queries",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose Musa Fly?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with excellent
            service and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
