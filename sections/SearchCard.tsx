"use client";

import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { ArrowLeftRight, Palmtree, Plane, Ticket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const [visaCountry, setVisaCountry] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (activeTab === "visa") {
      if (visaCountry) router.push(`/visa/${visaCountry.toLowerCase()}-visa`);
      else router.push("/#visa");
    } else {
      window.open(SITE_CONFIG.whatsappLink, "_blank");
    }
  };

  return (
    <div className="w-full flex justify-center px-2 md:px-4 mt-8 md:mt-16 relative pb-8 md:pb-12">
      {/* Tabs */}
      <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex z-20 overflow-hidden">
        <TabButton icon={Plane} label="Flight" active={activeTab === "flights"} onClick={() => setActiveTab("flights")} />
        <TabButton icon={Palmtree} label="Tour" active={activeTab === "tours"} onClick={() => setActiveTab("tours")} />
        <TabButton icon={Ticket} label="Visa" active={activeTab === "visa"} onClick={() => setActiveTab("visa")} />
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-[850px] pt-12 md:pt-16 px-3 md:px-8 pb-10 relative z-10 border border-gray-100">
        {activeTab === "flights" && <FlightsForm />}
        {activeTab === "tours" && <ToursForm />}
        {activeTab === "visa" && <VisaForm country={visaCountry} setCountry={setVisaCountry} />}
        
        {/* Search Button */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[80%] md:w-auto">
          <button 
            onClick={handleSearch}
            className="w-full bg-secondary hover:bg-secondary/90 text-white md:text-primary font-bold text-sm md:text-xl px-12 md:px-20 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function TabButton({ icon: Icon, label, active, onClick }: { icon: React.ElementType; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-1 min-w-[70px] md:min-w-[95px] px-3 md:px-5 py-3 md:py-4 relative ${active ? "text-primary" : "text-[#A0A4AB] hover:text-gray-600"}`}>
      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${active ? "text-primary" : ""}`} strokeWidth={1.5} />
      <span className="font-bold text-xs md:text-[13px]">{label}</span>
      {active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-secondary rounded-t-full" />}
    </button>
  );
}

function FlightsForm() {
  const [tripType, setTripType] = useState("one-way");
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");
  const [date, setDate] = useState("2026-07-10");
  
  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };
  
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Radio Buttons */}
      <div className="flex gap-4 md:gap-8 mb-1 md:mb-2 px-1 md:px-2">
        <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer" onClick={() => setTripType("one-way")}>
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "one-way" ? "border-primary" : "border-gray-300"}`}>
            {tripType === "one-way" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-primary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "one-way" ? "text-primary" : "text-[#B3B8C2]"}`}>One Way</span>
        </label>
        <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer" onClick={() => setTripType("round-trip")}>
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "round-trip" ? "border-primary" : "border-gray-300"}`}>
            {tripType === "round-trip" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-primary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "round-trip" ? "text-primary" : "text-[#B3B8C2]"}`}>Round Way</span>
        </label>
        <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer" onClick={() => setTripType("multi-city")}>
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "multi-city" ? "border-primary" : "border-gray-300"}`}>
            {tripType === "multi-city" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-primary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "multi-city" ? "text-primary" : "text-[#B3B8C2]"}`}>Multi City</span>
        </label>
      </div>
      
      {/* Inputs Grid (3 Rows) */}
      <div className="flex flex-col gap-2 md:gap-4">
        {/* Top Row: From / To */}
        <div className="flex flex-row gap-2 md:gap-4 relative">
          {/* FROM */}
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors cursor-text min-w-0">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">FROM</div>
            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none truncate mb-0.5 md:mb-1" />
            <div className="text-[9px] md:text-sm text-gray-400 truncate">DAC, Hazrat Shahjalal...</div>
          </div>
          
          {/* Swap Button */}
          <button type="button" onClick={swapLocations} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#5B658A] hover:text-primary hover:border-primary transition-all z-10 shadow-sm">
            <ArrowLeftRight className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={1.5} />
          </button>
          
          {/* TO */}
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors cursor-text min-w-0 pl-6 md:pl-8">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">TO</div>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none truncate mb-0.5 md:mb-1" />
            <div className="text-[9px] md:text-sm text-gray-400 truncate">CXB, Cox's Bazar...</div>
          </div>
        </div>
        
        {/* Middle Row: Dates */}
        <div className="flex flex-row gap-2 md:gap-4">
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors cursor-text min-w-0">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">DEPARTURE DATE</div>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none cursor-pointer" />
          </div>
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors cursor-text flex flex-col justify-center min-w-0">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">RETURN DATE</div>
            <div className="flex items-center">
              <span className="text-[10px] md:text-sm text-gray-400 truncate">Save more on return flight</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Row: Travelers */}
        <div className="border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors cursor-text">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">TRAVELER, CLASS</div>
          <select className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none cursor-pointer appearance-none">
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
          </select>
          <div className="text-[9px] md:text-sm text-gray-400 mt-0.5 md:mt-1">Economy</div>
        </div>
      </div>
    </div>
  );
}

function ToursForm() {
  return (
    <div className="space-y-2 md:space-y-4">
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">DESTINATION</div>
          <select className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Oman</option>
            <option>Bangladesh</option>
            <option>Thailand</option>
            <option>Maldives</option>
            <option>Dubai</option>
          </select>
        </div>
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">START DATE</div>
          <input type="date" className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">DURATION</div>
          <select className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>5 Days / 4 Nights</option>
            <option>7 Days / 6 Nights</option>
            <option>3 Days / 2 Nights</option>
          </select>
        </div>
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">TRAVELERS</div>
          <select className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>2 People</option>
            <option>3-4 People</option>
            <option>1 Person</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function VisaForm({ country, setCountry }: { country: string; setCountry: (val: string) => void }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">COUNTRY</div>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option value="">Select Country</option>
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="oman">Oman</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="thailand">Thailand</option>
            <option value="dubai">Dubai (UAE)</option>
            <option value="saudi">Saudi Arabia</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="schengen">Schengen</option>
            <option value="japan">Japan</option>
            <option value="korea">South Korea</option>
            <option value="vietnam">Vietnam</option>
            <option value="egypt">Egypt</option>
          </select>
        </div>
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">VISA TYPE</div>
          <select className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>Tourist Visa</option>
            <option>Business Visa</option>
            <option>Student Visa</option>
            <option>Work Visa</option>
          </select>
        </div>
      </div>
      <div className="p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
        <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">APPLICANTS</div>
        <select className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
          <option>1 Applicant</option>
          <option>2 Applicants</option>
          <option>3 Applicants</option>
          <option>4+ Applicants</option>
        </select>
      </div>
    </div>
  );
}
