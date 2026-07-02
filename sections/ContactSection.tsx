"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/config";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you plan your next adventure. Contact us anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark mb-1">Phone</div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark mb-1">Email</div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark mb-1">Address</div>
                    <p className="text-gray-600">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark mb-1">
                      WhatsApp Support
                    </div>
                    <p className="text-gray-600 mb-3">
                      Available 24/7 for your queries
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => window.open(SITE_CONFIG.whatsappLink, "_blank")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[400px]">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-dark mb-2">
                    Visit Our Office
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Come visit us at our location or contact us through WhatsApp for
                    instant support
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open(SITE_CONFIG.whatsappLink, "_blank")}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
