"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Plane, Ticket, Users, ArrowRightLeft, Palmtree } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const router = useRouter();

  const handleSearch = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Premium Tabs */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
          <div className="flex p-2 gap-2">
            <TabButton
              icon={Plane}
              label="Flights"
              active={activeTab === "flights"}
              onClick={() => setActiveTab("flights")}
            />
            <TabButton
              icon={Palmtree}
              label="Tours"
              active={activeTab === "tours"}
              onClick={() => setActiveTab("tours")}
            />
            <TabButton
              icon={Ticket}
              label="Visa"
              active={activeTab === "visa"}
              onClick={() => setActiveTab("visa")}
            />
          </div>
        </div>

        {/* Content with Animation */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === "flights" && (
              <motion.div
                key="flights"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <FlightsForm onSearch={handleSearch} />
              </motion.div>
            )}
            {activeTab === "tours" && (
              <motion.div
                key="tours"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ToursForm onSearch={handleSearch} />
              </motion.div>
            )}
            {activeTab === "visa" && (
              <motion.div
                key="visa"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <VisaForm onSearch={handleSearch} router={router} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function TabButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all relative overflow-hidden group ${
        active
          ? "bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/30"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon className={`w-5 h-5 ${active ? "text-white" : "text-gray-500"}`} />
      <span className={`font-semibold ${active ? "text-white" : ""}`}>{label}</span>
      
      {active && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-xl"
          style={{ zIndex: -1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
}

function FlightsForm({ onSearch }: { onSearch: () => void }) {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("round-trip");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="space-y-6">
      {/* Trip Type Radio */}
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={tripType === "round-trip"}
            onChange={(e) => setTripType(e.target.value as "round-trip")}
            className="w-5 h-5 text-primary focus:ring-primary"
          />
          <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
            Round Trip
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === "one-way"}
            onChange={(e) => setTripType(e.target.value as "one-way")}
            className="w-5 h-5 text-primary focus:ring-primary"
          />
          <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
            One Way
          </span>
        </label>
      </div>

      {/* From and To with Swap */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            From
          </label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <Input
              placeholder="Departure City"
              className="pl-12 h-14 text-base bg-gray-50 border-gray-200 hover:border-primary focus:border-primary transition-all"
              aria-label="Departure city"
            />
          </div>
          <p className="text-xs text-gray-500 pl-1">e.g., Dhaka, New York</p>
        </div>

        <button
          type="button"
          className="mb-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center hover:from-primary hover:to-secondary hover:text-white transition-all hover:scale-110 group"
          aria-label="Swap locations"
        >
          <ArrowRightLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
        </button>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            To
          </label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary transition-all group-hover:scale-110" />
            <Input
              placeholder="Arrival City"
              className="pl-12 h-14 text-base bg-gray-50 border-gray-200 hover:border-secondary focus:border-secondary transition-all"
              aria-label="Arrival city"
            />
          </div>
          <p className="text-xs text-gray-500 pl-1">e.g., Singapore, London</p>
        </div>
      </div>

      {/* Dates and Passengers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Departure Date
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <Input
              type="date"
              className="pl-12 h-14 text-base bg-gray-50 border-gray-200 hover:border-primary focus:border-primary transition-all"
              aria-label="Departure date"
            />
          </div>
        </div>

        {tripType === "round-trip" && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Return Date
            </label>
            <div className="relative group">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary transition-all group-hover:scale-110" />
              <Input
                type="date"
                className="pl-12 h-14 text-base bg-gray-50 border-gray-200 hover:border-secondary focus:border-secondary transition-all"
                aria-label="Return date"
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Passengers
          </label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <select className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5+ Travelers</option>
            </select>
          </div>
        </div>
      </div>

      <Button type="submit" size="xl" className="w-full h-16 text-lg font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all">
        <Plane className="w-6 h-6 mr-2" />
        Search Flights
      </Button>
    </form>
  );
}

function ToursForm({ onSearch }: { onSearch: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Destination
          </label>
          <div className="relative group">
            <Palmtree className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <select className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option value="">Select Destination</option>
              <option value="singapore">Singapore</option>
              <option value="malaysia">Malaysia</option>
              <option value="oman">Oman</option>
              <option value="bangladesh">Bangladesh</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Start Date
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <Input
              type="date"
              className="pl-12 h-14 text-base bg-gray-50 border-gray-200 hover:border-primary focus:border-primary transition-all"
              aria-label="Start date"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Duration
          </label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary transition-all group-hover:scale-110" />
            <select className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-secondary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all">
              <option value="">Select Duration</option>
              <option value="3">3 Days / 2 Nights</option>
              <option value="5">5 Days / 4 Nights</option>
              <option value="7">7 Days / 6 Nights</option>
              <option value="10">10 Days / 9 Nights</option>
              <option value="custom">Custom Duration</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Travelers
          </label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <select className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3-4">3-4 People</option>
              <option value="5+">5+ People (Group)</option>
            </select>
          </div>
        </div>
      </div>

      <Button type="submit" size="xl" className="w-full h-16 text-lg font-semibold shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all bg-gradient-to-r from-secondary to-secondary-600">
        <Palmtree className="w-6 h-6 mr-2" />
        Explore Tours
      </Button>
    </form>
  );
}

function VisaForm({ router }: { onSearch: () => void; router: ReturnType<typeof useRouter> }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedCountry && selectedType) {
      const countrySlug = selectedCountry.toLowerCase().replace(/\s+/g, "-") + "-visa";
      router.push(`/visa/${countrySlug}?type=${encodeURIComponent(selectedType)}`);
    } else if (selectedCountry) {
      const countrySlug = selectedCountry.toLowerCase().replace(/\s+/g, "-") + "-visa";
      router.push(`/visa/${countrySlug}`);
    } else {
      router.push("/#visa");
    }
  };

  return (
    <form onSubmit={handleApply} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Country
          </label>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
            <select
              className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Oman">Oman</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Visa Type
          </label>
          <div className="relative group">
            <Ticket className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary transition-all group-hover:scale-110" />
            <select
              className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-secondary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Select Visa Type</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Transit Visa">Transit Visa</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Number of Applicants
        </label>
        <div className="relative group">
          <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary transition-all group-hover:scale-110" />
          <select className="w-full h-14 rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-base hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
            <option value="1">1 Applicant</option>
            <option value="2">2 Applicants</option>
            <option value="3">3 Applicants</option>
            <option value="4">4 Applicants</option>
            <option value="5+">5+ Applicants</option>
          </select>
        </div>
      </div>

      <Button type="submit" size="xl" className="w-full h-16 text-lg font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all">
        <Ticket className="w-6 h-6 mr-2" />
        Apply for Visa
      </Button>
    </form>
  );
}
