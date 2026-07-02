"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { motion } from "framer-motion";
import { Calendar, MapPin, Plane, Ticket, Users } from "lucide-react";
import { useState } from "react";

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");

  const handleSearch = () => {
    window.open(SITE_CONFIG.whatsappLink, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <TabButton
            icon={Plane}
            label="Flights"
            active={activeTab === "flights"}
            onClick={() => setActiveTab("flights")}
          />
          <TabButton
            icon={MapPin}
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

        {/* Content */}
        <div className="p-8">
          {activeTab === "flights" && <FlightsForm onSearch={handleSearch} />}
          {activeTab === "tours" && <ToursForm onSearch={handleSearch} />}
          {activeTab === "visa" && <VisaForm onSearch={handleSearch} />}
        </div>
      </div>
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
      className={`flex-1 flex items-center justify-center gap-2 py-4 transition-all relative ${
        active
          ? "text-primary font-semibold"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
}

function FlightsForm({ onSearch }: { onSearch: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="From (e.g., New York)"
            className="pl-11"
            aria-label="Departure city"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="To (e.g., Singapore)"
            className="pl-11"
            aria-label="Arrival city"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="date"
            className="pl-11"
            aria-label="Departure date"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="date"
            className="pl-11"
            aria-label="Return date"
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="number"
            placeholder="Passengers"
            min="1"
            defaultValue="1"
            className="pl-11"
            aria-label="Number of passengers"
          />
        </div>
      </div>

      <Button size="lg" className="w-full" onClick={onSearch}>
        Search Flights
      </Button>
    </div>
  );
}

function ToursForm({ onSearch }: { onSearch: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Destination (e.g., Singapore)"
            className="pl-11"
            aria-label="Tour destination"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="date"
            className="pl-11"
            aria-label="Start date"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            type="number"
            placeholder="Duration (days)"
            min="1"
            defaultValue="5"
            aria-label="Tour duration in days"
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="number"
            placeholder="Travelers"
            min="1"
            defaultValue="2"
            className="pl-11"
            aria-label="Number of travelers"
          />
        </div>
      </div>

      <Button size="lg" className="w-full" onClick={onSearch}>
        Explore Tours
      </Button>
    </div>
  );
}

function VisaForm({ onSearch }: { onSearch: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            className="w-full h-12 rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
            aria-label="Select country"
          >
            <option value="">Select Country</option>
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="oman">Oman</option>
            <option value="bangladesh">Bangladesh</option>
          </select>
        </div>
        <div className="relative">
          <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            className="w-full h-12 rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
            aria-label="Select visa type"
          >
            <option value="">Visa Type</option>
            <option value="tourist">Tourist Visa</option>
            <option value="business">Business Visa</option>
            <option value="transit">Transit Visa</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="number"
          placeholder="Number of Applicants"
          min="1"
          defaultValue="1"
          className="pl-11"
          aria-label="Number of applicants"
        />
      </div>

      <Button size="lg" className="w-full" onClick={onSearch}>
        Apply for Visa
      </Button>
    </div>
  );
}
