"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/constants/config";
import type { VisaService } from "@/data/visa";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Info,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

interface VisaDetailsPageProps {
  visa: VisaService;
  selectedType?: string;
}

export function VisaDetailsPage({ visa }: VisaDetailsPageProps) {
  const handleWhatsAppContact = () => {
    const message = `Hello! I'm interested in applying for a ${visa.country} ${visa.type}. Can you help me with the process?`;
    const whatsappUrl = `${SITE_CONFIG.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary to-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
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
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <Link
            href="/#visa"
            className="inline-flex items-center text-white hover:text-white/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Visa Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white font-semibold">{visa.type}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {visa.country} Visa
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {visa.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-6 h-6 text-primary" />
                    Visa Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Processing Time</div>
                        <div className="font-semibold text-dark">
                          {visa.processingTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Starting Price</div>
                        <div className="font-semibold text-dark">
                          {formatPrice(visa.startingPrice)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Validity Period</div>
                        <div className="font-semibold text-dark">
                          {visa.validityPeriod}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Processing Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {visa.processingSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {visa.documentsNeeded.map((doc, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-primary pl-4 py-2"
                      >
                        <h4 className="font-semibold text-dark mb-1">
                          {doc.title}
                        </h4>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-6 h-6 text-primary" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {visa.additionalInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sticky top-24 space-y-6"
            >
              {/* Contact Card */}
              <Card className="border-2 border-primary">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardTitle className="text-center">
                    Ready to Apply?
                  </CardTitle>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Contact us on WhatsApp for instant assistance
                  </p>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Starting from</div>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {formatPrice(visa.startingPrice)}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact us on WhatsApp
                  </Button>

                  <div className="pt-4 border-t space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Expert Visa Assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Fast Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>High Approval Rate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {visa.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
