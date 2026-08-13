"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Package } from "lucide-react";

interface Tour {
  id: number;
  destination: string;
  duration: string;
  price: string;
  inclusions: string;
  image_url: string;
}

export function ToursSection() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://46.225.103.236:8001/api'}/tours/`);
        if (res.ok) {
          const data = await res.json();
          setTours(data);
        }
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

  const handleExplore = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <section id="tours" className="py-20 bg-gray-50">
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

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                      style={{ backgroundImage: `url('${tour.image_url}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {tour.destination}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tour.destination}
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardDescription className="line-clamp-2">
                      {tour.inclusions}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="w-4 h-4 mr-2 text-primary" />
                        {tour.duration}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">Starting from</span>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(parseFloat(tour.price))}
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
        )}
      </div>
    </section>
  );
}
