"use client";

import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { ArrowLeftRight, Calendar, Clock, MapPin, MessageCircle, Palmtree, Plane, Ticket, Users, X } from "lucide-react";
import { useState } from "react";

// Airport data for FROM/TO dropdowns
const AIRPORTS = [
  { code: "DAC", city: "Dhaka", name: "Hazrat Shahjalal International Airport" },
  { code: "CXB", city: "Cox's Bazar", name: "Cox's Bazar Airport" },
  { code: "CGP", city: "Chittagong", name: "Shah Amanat International Airport" },
  { code: "ZYL", city: "Sylhet", name: "Osmani International Airport" },
  { code: "RJH", city: "Rajshahi", name: "Shah Makhdum Airport" },
  { code: "SPD", city: "Saidpur", name: "Saidpur Airport" },
  { code: "BZL", city: "Barishal", name: "Barishal Airport" },
  { code: "DXB", city: "Dubai", name: "Dubai International Airport" },
  { code: "KUL", city: "Kuala Lumpur", name: "Kuala Lumpur International Airport" },
  { code: "SIN", city: "Singapore", name: "Changi Airport" },
  { code: "BKK", city: "Bangkok", name: "Suvarnabhumi Airport" },
  { code: "DOH", city: "Doha", name: "Hamad International Airport" },
  { code: "JED", city: "Jeddah", name: "King Abdulaziz International Airport" },
  { code: "MCT", city: "Muscat", name: "Muscat International Airport" },
  { code: "DEL", city: "Delhi", name: "Indira Gandhi International Airport" },
  { code: "CCU", city: "Kolkata", name: "Netaji Subhas Chandra Bose Airport" },
  { code: "LHR", city: "London", name: "Heathrow Airport" },
  { code: "IST", city: "Istanbul", name: "Istanbul Airport" },
  { code: "MLE", city: "Malé", name: "Velana International Airport" },
];

// Tour packages data
const TOUR_PACKAGES = [
  { destination: "Singapore", duration: "5 Days / 4 Nights", price: "৳45,000", highlights: ["Marina Bay", "Sentosa Island", "Gardens by the Bay", "Universal Studios"] },
  { destination: "Malaysia", duration: "5 Days / 4 Nights", price: "৳38,000", highlights: ["Petronas Towers", "Langkawi", "Genting Highlands", "Batu Caves"] },
  { destination: "Thailand", duration: "5 Days / 4 Nights", price: "৳35,000", highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market", "Pattaya"] },
  { destination: "Maldives", duration: "5 Days / 4 Nights", price: "৳65,000", highlights: ["Water Villas", "Snorkeling", "Dolphin Watching", "Beach BBQ"] },
  { destination: "Dubai", duration: "5 Days / 4 Nights", price: "৳55,000", highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"] },
  { destination: "Oman", duration: "5 Days / 4 Nights", price: "৳48,000", highlights: ["Sultan Qaboos Mosque", "Wadi Shab", "Muscat Old Town", "Wahiba Sands"] },
  { destination: "Bangladesh", duration: "3 Days / 2 Nights", price: "৳15,000", highlights: ["Cox's Bazar", "Sundarbans", "Sajek Valley", "Bandarban"] },
];

// Flight results mock data generator
function generateFlightResults(from: string, to: string, date: string) {
  const airlines = ["Biman Bangladesh", "US-Bangla Airlines", "Novoair", "Air Astra"];
  const results = [];
  const fromAirport = AIRPORTS.find(a => a.code === from);
  const toAirport = AIRPORTS.find(a => a.code === to);
  
  for (let i = 0; i < 3; i++) {
    const depHour = 6 + i * 4;
    const arrHour = depHour + 1 + Math.floor(Math.random() * 2);
    const basePrice = 3500 + Math.floor(Math.random() * 4000);
    results.push({
      id: i + 1,
      airline: airlines[i % airlines.length],
      from: fromAirport?.city || from,
      fromCode: from,
      to: toAirport?.city || to,
      toCode: to,
      departure: `${String(depHour).padStart(2, "0")}:${i === 0 ? "00" : "30"}`,
      arrival: `${String(arrHour).padStart(2, "0")}:${i === 0 ? "15" : "45"}`,
      duration: `${arrHour - depHour}h ${i === 0 ? "15" : "15"}m`,
      price: `৳${basePrice.toLocaleString()}`,
      stops: "Non-stop",
      date: date,
    });
  }
  return results;
}

interface SearchResult {
  type: "flights" | "tours";
  flights?: ReturnType<typeof generateFlightResults>;
  tours?: typeof TOUR_PACKAGES;
  searchParams: Record<string, string>;
}

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const [visaCountry, setVisaCountry] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  // Flight form state (lifted up for search)
  const [flightFrom, setFlightFrom] = useState("DAC");
  const [flightTo, setFlightTo] = useState("CXB");
  const [flightDate, setFlightDate] = useState("2026-07-10");
  const [flightTripType, setFlightTripType] = useState("one-way");
  const [flightTravelers, setFlightTravelers] = useState("1 Traveler");

  // Tour form state
  const [tourDestination, setTourDestination] = useState("Singapore");
  const [tourDate, setTourDate] = useState("");
  const [tourDuration, setTourDuration] = useState("5 Days / 4 Nights");
  const [tourTravelers, setTourTravelers] = useState("2 People");

  const handleSearch = () => {
    if (activeTab === "flights") {
      const results = generateFlightResults(flightFrom, flightTo, flightDate);
      const fromAirport = AIRPORTS.find(a => a.code === flightFrom);
      const toAirport = AIRPORTS.find(a => a.code === flightTo);
      setSearchResult({
        type: "flights",
        flights: results,
        searchParams: {
          from: fromAirport?.city || flightFrom,
          to: toAirport?.city || flightTo,
          date: flightDate,
          tripType: flightTripType,
          travelers: flightTravelers,
        },
      });
    } else if (activeTab === "tours") {
      const filtered = TOUR_PACKAGES.filter(p => p.destination === tourDestination);
      const results = filtered.length > 0 ? filtered : TOUR_PACKAGES.slice(0, 3);
      setSearchResult({
        type: "tours",
        tours: results,
        searchParams: {
          destination: tourDestination,
          date: tourDate,
          duration: tourDuration,
          travelers: tourTravelers,
        },
      });
    } else if (activeTab === "visa") {
      if (visaCountry) {
        window.location.href = `/visa/${visaCountry.toLowerCase()}-visa`;
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-center px-2 md:px-4 mt-8 md:mt-16 relative pb-8 md:pb-12">
        {/* Tabs */}
        <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex z-20 overflow-hidden">
          <TabButton icon={Plane} label="Flight" active={activeTab === "flights"} onClick={() => setActiveTab("flights")} />
          <TabButton icon={Palmtree} label="Tour" active={activeTab === "tours"} onClick={() => setActiveTab("tours")} />
          <TabButton icon={Ticket} label="Visa" active={activeTab === "visa"} onClick={() => setActiveTab("visa")} />
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-[850px] pt-12 md:pt-16 px-3 md:px-8 pb-10 relative z-10 border border-gray-100">
          {activeTab === "flights" && (
            <FlightsForm
              from={flightFrom} setFrom={setFlightFrom}
              to={flightTo} setTo={setFlightTo}
              date={flightDate} setDate={setFlightDate}
              tripType={flightTripType} setTripType={setFlightTripType}
              travelers={flightTravelers} setTravelers={setFlightTravelers}
            />
          )}
          {activeTab === "tours" && (
            <ToursForm
              destination={tourDestination} setDestination={setTourDestination}
              date={tourDate} setDate={setTourDate}
              duration={tourDuration} setDuration={setTourDuration}
              travelers={tourTravelers} setTravelers={setTourTravelers}
            />
          )}
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

      {/* Search Results Modal */}
      {searchResult && (
        <SearchResultsModal result={searchResult} onClose={() => setSearchResult(null)} />
      )}
    </>
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

interface FlightsFormProps {
  from: string; setFrom: (v: string) => void;
  to: string; setTo: (v: string) => void;
  date: string; setDate: (v: string) => void;
  tripType: string; setTripType: (v: string) => void;
  travelers: string; setTravelers: (v: string) => void;
}

function FlightsForm({ from, setFrom, to, setTo, date, setDate, tripType, setTripType, travelers, setTravelers }: FlightsFormProps) {
  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  
  const fromAirport = AIRPORTS.find(a => a.code === from);
  const toAirport = AIRPORTS.find(a => a.code === to);
  
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
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors min-w-0">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">FROM</div>
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none cursor-pointer appearance-none truncate mb-0.5 md:mb-1">
              {AIRPORTS.map(airport => (
                <option key={airport.code} value={airport.code}>{airport.city}</option>
              ))}
            </select>
            <div className="text-[9px] md:text-sm text-gray-400 truncate">{fromAirport ? `${fromAirport.code}, ${fromAirport.name}` : ""}</div>
          </div>
          
          {/* Swap Button - centered between FROM and TO */}
          <button type="button" onClick={swapLocations} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#5B658A] hover:text-primary hover:border-primary transition-all z-10 shadow-sm">
            <ArrowLeftRight className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={1.5} />
          </button>
          
          {/* TO */}
          <div className="flex-1 border border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-primary transition-colors min-w-0">
            <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">TO</div>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none cursor-pointer appearance-none truncate mb-0.5 md:mb-1">
              {AIRPORTS.map(airport => (
                <option key={airport.code} value={airport.code}>{airport.city}</option>
              ))}
            </select>
            <div className="text-[9px] md:text-sm text-gray-400 truncate">{toAirport ? `${toAirport.code}, ${toAirport.name}` : ""}</div>
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
          <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary bg-transparent outline-none cursor-pointer appearance-none">
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
            <option>4 Travelers</option>
            <option>5+ Travelers</option>
          </select>
          <div className="text-[9px] md:text-sm text-gray-400 mt-0.5 md:mt-1">Economy</div>
        </div>
      </div>
    </div>
  );
}

interface ToursFormProps {
  destination: string; setDestination: (v: string) => void;
  date: string; setDate: (v: string) => void;
  duration: string; setDuration: (v: string) => void;
  travelers: string; setTravelers: (v: string) => void;
}

function ToursForm({ destination, setDestination, date, setDate, duration, setDuration, travelers, setTravelers }: ToursFormProps) {
  return (
    <div className="space-y-2 md:space-y-4">
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">DESTINATION</div>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
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
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">DURATION</div>
          <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>5 Days / 4 Nights</option>
            <option>7 Days / 6 Nights</option>
            <option>3 Days / 2 Nights</option>
          </select>
        </div>
        <div className="flex-1 p-2 md:p-5 border border-gray-200 rounded-xl md:rounded-2xl hover:border-primary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-[#5B658A] uppercase tracking-wide font-medium mb-1">TRAVELERS</div>
          <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className="w-full text-sm md:text-2xl font-bold text-primary outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option>2 People</option>
            <option>3-4 People</option>
            <option>1 Person</option>
            <option>5+ People</option>
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

/* ──────────────── Search Results Modal ──────────────── */

function SearchResultsModal({ result, onClose }: { result: SearchResult; onClose: () => void }) {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`${SITE_CONFIG.whatsappLink}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-6 md:py-10 px-3 md:px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[900px] relative animate-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-2xl md:rounded-t-3xl px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-1">
              {result.type === "flights" ? "✈️ Flight Results" : "🌴 Tour Packages"}
            </h2>
            <p className="text-white/80 text-xs md:text-sm">
              {result.type === "flights"
                ? `${result.searchParams.from} → ${result.searchParams.to} • ${result.searchParams.date} • ${result.searchParams.travelers}`
                : `${result.searchParams.destination} • ${result.searchParams.duration} • ${result.searchParams.travelers}`
              }
            </p>
          </div>
          <button onClick={onClose} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 md:p-8 space-y-3 md:space-y-4 max-h-[70vh] overflow-y-auto">
          {result.type === "flights" && result.flights?.map((flight) => (
            <div key={flight.id} className="border border-gray-100 rounded-xl md:rounded-2xl p-3 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                {/* Airline & Route */}
                <div className="flex-1">
                  <div className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    {flight.airline}
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="text-center">
                      <div className="text-base md:text-xl font-bold text-gray-900">{flight.departure}</div>
                      <div className="text-[10px] md:text-xs text-gray-500">{flight.fromCode}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center px-1 md:px-2">
                      <div className="text-[9px] md:text-xs text-gray-400">{flight.duration}</div>
                      <div className="w-full h-[1px] bg-gray-300 relative my-1">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                      </div>
                      <div className="text-[9px] md:text-xs text-green-600 font-medium">{flight.stops}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base md:text-xl font-bold text-gray-900">{flight.arrival}</div>
                      <div className="text-[10px] md:text-xs text-gray-500">{flight.toCode}</div>
                    </div>
                  </div>
                </div>
                
                {/* Price & CTA */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:gap-3 border-t md:border-t-0 md:border-l border-gray-100 pt-3 md:pt-0 md:pl-6">
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-primary">{flight.price}</div>
                    <div className="text-[9px] md:text-xs text-gray-400">per person</div>
                  </div>
                  <button
                    onClick={() => handleWhatsApp(`Hi MusaFly! I'm interested in booking a flight:\n✈️ ${flight.from} (${flight.fromCode}) → ${flight.to} (${flight.toCode})\n📅 Date: ${flight.date}\n🕐 Time: ${flight.departure} - ${flight.arrival}\n✈️ Airline: ${flight.airline}\n💰 Price: ${flight.price}\n👤 ${result.searchParams.travelers}\n\nPlease provide more details.`)}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs md:text-sm font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Contact WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}

          {result.type === "tours" && result.tours?.map((tour, index) => (
            <div key={index} className="border border-gray-100 rounded-xl md:rounded-2xl p-3 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4">
                {/* Tour Info */}
                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-bold text-primary mb-1 md:mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    {tour.destination}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 md:w-4 md:h-4" /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 md:w-4 md:h-4" /> {result.searchParams.travelers}</span>
                    {result.searchParams.date && <span className="flex items-center gap-1"><Calendar className="w-3 h-3 md:w-4 md:h-4" /> {result.searchParams.date}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {tour.highlights.map((h, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-[9px] md:text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                </div>
                
                {/* Price & CTA */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:gap-3 border-t md:border-t-0 md:border-l border-gray-100 pt-3 md:pt-0 md:pl-6">
                  <div>
                    <div className="text-[9px] md:text-xs text-gray-400">Starting from</div>
                    <div className="text-lg md:text-2xl font-bold text-primary">{tour.price}</div>
                    <div className="text-[9px] md:text-xs text-gray-400">per person</div>
                  </div>
                  <button
                    onClick={() => handleWhatsApp(`Hi MusaFly! I'm interested in a tour package:\n🌴 Destination: ${tour.destination}\n📅 Duration: ${tour.duration}\n💰 Price: ${tour.price}\n👤 ${result.searchParams.travelers}\n${result.searchParams.date ? `📆 Preferred Date: ${result.searchParams.date}\n` : ""}\nPlease provide more details.`)}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs md:text-sm font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Contact WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-4 md:px-8 py-3 md:py-4 rounded-b-2xl md:rounded-b-3xl bg-gray-50/50">
          <p className="text-[10px] md:text-xs text-gray-400 text-center">
            Prices are indicative. Contact us on WhatsApp for confirmed pricing and availability.
          </p>
        </div>
      </div>
    </div>
  );
}
