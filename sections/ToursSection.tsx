"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import { destinations } from "@/data/destinations";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Package } from "lucide-react";

export function ToursSection() {
  const handleExplore = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <section id="tours" className="py-20 bg-gray-50 mt-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Popular Tour Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore handpicked destinations with our exclusive tour packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundImage:
                        destination.id === "singapore"
                          ? "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2852')"
                          : destination.id === "malaysia"
                            ? "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2864')"
                            : destination.id === "oman"
                              ? "url('https://images.unsplash.com/photo-1547304638-aa0a7b5aae3d?q=80&w=2940')"
                              : "url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2787')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                  {destination.popular && (
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.country}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="line-clamp-2">
                    {destination.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Package className="w-4 h-4 mr-2 text-primary" />
                      {destination.tourPackages} packages available
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-600">Starting from</span>
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(destination.startingPrice)}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleExplore}
                  >
                    Explore Tours
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
