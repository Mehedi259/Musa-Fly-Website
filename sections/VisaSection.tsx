"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import { visaServices } from "@/data/visa";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, Clock, FileText } from "lucide-react";

export function VisaSection() {
  const handleApply = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <section id="visa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Visa Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast and reliable visa processing for your travel needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaServices.map((visa, index) => (
            <motion.div
              key={visa.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {visa.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-br from-primary to-secondary text-white px-4 py-1 text-xs font-semibold transform rotate-45 translate-x-8 translate-y-2">
                      Popular
                    </div>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        visa.id === "singapore-visa"
                          ? "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2852')"
                          : visa.id === "malaysia-visa"
                            ? "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2864')"
                            : visa.id === "oman-visa"
                              ? "url('https://images.unsplash.com/photo-1547304638-aa0a7b5aae3d?q=80&w=2940')"
                              : "url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2787')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{visa.country}</CardTitle>
                  <p className="text-sm text-gray-600">{visa.type}</p>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">{visa.processingTime}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">Starting from</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(visa.startingPrice)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-semibold">Requirements:</span>
                    </div>
                    <ul className="space-y-1">
                      {visa.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleApply}
                  >
                    Apply Now
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
