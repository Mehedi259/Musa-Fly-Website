"use client";

import { motion } from "framer-motion";
import { SearchCard } from "./SearchCard";

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2831')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/70" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 pt-4 md:pt-8 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-6"
          >
            Discover Your Next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Adventure
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Search Card Inside Hero */}
      <div className="container mx-auto relative z-20 px-4 mb-auto mt-6 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SearchCard />
        </motion.div>
      </div>
    </section>
  );
}
