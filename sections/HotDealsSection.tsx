"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import { hotDeals } from "@/data/deals";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, MapPin, Percent } from "lucide-react";

export function HotDealsSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hotDeals.map((deal, index) => (
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
                      backgroundImage:
                        deal.destination === "Singapore"
                          ? "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2852')"
                          : deal.destination === "Malaysia"
                            ? "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2864')"
                            : deal.destination === "Oman"
                              ? "url('https://images.unsplash.com/photo-1547304638-aa0a7b5aae3d?q=80&w=2940')"
                              : "url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2787')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Percent className="w-4 h-4" />
                    <span className="font-bold">{deal.discount}% OFF</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                    {deal.destination}
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {deal.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {deal.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(deal.originalPrice)}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(deal.discountedPrice)}
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
      </div>
    </section>
  );
}
