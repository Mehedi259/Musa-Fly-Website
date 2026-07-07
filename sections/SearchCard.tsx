"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { Calendar, MapPin, Plane, Ticket, Users, ArrowLeftRight, Hotel, Palmtree } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const router = useRouter();
  const handleSearch = () => window.open(SITE_CONFIG.whatsappLink, "_blank");

  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">
        <div className="flex border-b border-gray-200 bg-white rounded-t-3xl">
          <TabButton icon={Plane} label="Flight" active={activeTab === "flights"} onClick={() => setActiveTab("flights")} />
          <TabButton icon={Palmtree} label="Tour" active={activeTab === "tours"} onClick={() => setActiveTab("tours")} />
          <TabButton icon={Ticket} label="Visa" active={activeTab === "visa"} onClick={() => setActiveTab("visa")} />
        </div>
        <div className="p-8 md:p-12">
          {activeTab === "flights" && <FlightsForm onSearch={handleSearch} />}
          {activeTab === "tours" && <ToursForm onSearch={handleSearch} />}
          {activeTab === "visa" && <VisaForm router={router} />}
        </div>
      </div>
    </div>
  );
}

function TabButton({ icon: Icon, label, active, onClick }: { icon: React.ElementType; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex-1 flex flex-col items-center gap-2 py-6 transition-colors relative ${active ? "text-primary" : "text-gray-400 hover:text-gray-600"}`}>
      <Icon className="w-8 h-8" />
      <span className="font-semibold text-base">{label}</span>
      {active && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-lg" />}
    </button>
  );
}

function FlightsForm({ onSearch }: { onSearch: () => void }) {
  const [tripType, setTripType] = useState("one-way");
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="space-y-6">
      <div className="flex gap-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-dark">One Way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" checked={tripType === "round-trip"} onChange={() => setTripType("round-trip")} className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-gray-400">Round Way</span>
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-0 md:gap-4">
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2 hover:border-primary transition-colors">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">FROM</div>
          <input type="text" placeholder="Dhaka" className="w-full text-2xl font-bold text-dark outline-none bg-transparent" />
          <div className="text-sm text-gray-400">DAC, Hazrat Shahjalal Internati...</div>
        </div>
        
        <div className="flex items-center justify-center my-4 md:my-0">
          <button type="button" className="w-14 h-14 rounded-full border-2 border-primary bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <ArrowLeftRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2 hover:border-primary transition-colors">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">TO</div>
          <input type="text" placeholder="Cox's Bazar" className="w-full text-2xl font-bold text-dark outline-none bg-transparent" />
          <div className="text-sm text-gray-400">CXB, Cox's Bazar Airport</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2 hover:border-primary transition-colors">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">DEPARTURE DATE</div>
          <input type="date" className="w-full text-2xl font-bold text-dark outline-none bg-transparent" />
          <div className="text-sm text-gray-400">Friday</div>
        </div>
        {tripType === "round-trip" && (
          <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2 hover:border-primary transition-colors">
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">RETURN DATE</div>
            <input type="date" className="w-full text-2xl font-bold text-dark outline-none bg-transparent" />
            <div className="text-sm text-gray-400">Saturday</div>
          </div>
        )}
      </div>

      <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2 hover:border-primary transition-colors">
        <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">TRAVELER, CLASS</div>
        <div className="text-2xl font-bold text-dark">1 Traveler</div>
        <div className="text-sm text-gray-400">Economy</div>
      </div>

      <Button type="submit" className="w-full md:w-auto md:px-16 h-14 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-dark rounded-2xl shadow-lg">
        Search
      </Button>
    </form>
  );
}

function ToursForm({ onSearch }: { onSearch: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">DESTINATION</div>
          <select className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Oman</option>
            <option>Bangladesh</option>
          </select>
        </div>
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">START DATE</div>
          <input type="date" className="w-full text-2xl font-bold text-dark outline-none bg-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">DURATION</div>
          <select className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
            <option>5 Days / 4 Nights</option>
            <option>7 Days / 6 Nights</option>
          </select>
        </div>
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">TRAVELERS</div>
          <select className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
            <option>2 People</option>
            <option>3-4 People</option>
          </select>
        </div>
      </div>
      <Button type="submit" className="w-full md:w-auto md:px-16 h-14 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-dark rounded-2xl shadow-lg">
        Search
      </Button>
    </form>
  );
}

function VisaForm({ router }: { router: ReturnType<typeof useRouter> }) {
  const [country, setCountry] = useState("");
  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (country) router.push(`/visa/${country.toLowerCase()}-visa`);
    else router.push("/#visa");
  };
  return (
    <form onSubmit={handleApply} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">COUNTRY</div>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
            <option value="">Select Country</option>
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="oman">Oman</option>
            <option value="bangladesh">Bangladesh</option>
          </select>
        </div>
        <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">VISA TYPE</div>
          <select className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
            <option>Tourist Visa</option>
            <option>Business Visa</option>
          </select>
        </div>
      </div>
      <div className="p-6 border-2 border-gray-200 rounded-2xl space-y-2">
        <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">APPLICANTS</div>
        <select className="w-full text-2xl font-bold text-dark outline-none bg-transparent">
          <option>1 Applicant</option>
          <option>2 Applicants</option>
        </select>
      </div>
      <Button type="submit" className="w-full md:w-auto md:px-16 h-14 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-dark rounded-2xl shadow-lg">
        Apply for Visa
      </Button>
    </form>
  );
}
