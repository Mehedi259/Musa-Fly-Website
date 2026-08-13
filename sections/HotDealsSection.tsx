"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, MapPin, Percent } from "lucide-react";

interface UmrahPackage {
  id: number;
  package_name: string;
  price: string;
  inclusions: string;
}

export function HotDealsSection() {
  const [deals, setDeals] = useState<UmrahPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/umrah/`);
        if (res.ok) {
          const data = await res.json();
          setDeals(data);
        }
      } catch (error) {
        console.error("Failed to fetch deals:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDeals();
  }, []);

  const handleBookNow = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-secondary font-semibold text-sm">LIMITED TIME OFFERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Hot Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing travel deals and special offers
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {deals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2824')"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Percent className="w-4 h-4" />
                      <span className="font-bold">20% OFF</span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1 text-primary" />
                      Saudi Arabia
                    </div>
                    <CardTitle className="text-xl line-clamp-2">
                      {deal.package_name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {deal.inclusions}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span>Valid until the end of the month</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(parseFloat(deal.price) + 200)}
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(parseFloat(deal.price))}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={handleBookNow}
                    >
                      Book Now
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
