"use client";

import { SITE_CONFIG } from "@/constants/config";
import type { SearchTab } from "@/types";
import { ArrowLeftRight, Calendar, Clock, MapPin, MessageCircle, Palmtree, Plane, Ticket, Users, X, Moon } from "lucide-react";
import { useState, useEffect } from "react";

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


export function SearchCard() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const [visaCountry, setVisaCountry] = useState("");

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

  const [baggage, setBaggage] = useState("20 KG Checked Baggage");

  const handleSearch = () => {
    if (activeTab === "flights") {
      const fromAirport = AIRPORTS.find(a => a.code === flightFrom);
      const toAirport = AIRPORTS.find(a => a.code === flightTo);
      const fromDisplay = fromAirport ? `${fromAirport.city} (${flightFrom})` : flightFrom;
      const toDisplay = toAirport ? `${toAirport.city} (${flightTo})` : flightTo;
      
      const message = `Hi MusaFly! I'm interested in booking a flight:\n✈️ ${fromDisplay} → ${toDisplay}\n📅 Date: ${flightDate}\n🔄 Trip Type: ${flightTripType}\n👤 ${flightTravelers}\n🧳 ${baggage}\n\nPlease provide available options and pricing.`;
      
      const encoded = encodeURIComponent(message);
      window.open(`${SITE_CONFIG.whatsappLink}?text=${encoded}`, "_blank");
      
    } else if (activeTab === "tours") {
      const message = `Hi MusaFly! I'm interested in a tour package:\n🌴 Destination: ${tourDestination}\n📅 Duration: ${tourDuration}\n👤 ${tourTravelers}\n🧳 ${baggage}\n${tourDate ? `📆 Preferred Date: ${tourDate}\n` : ""}\nPlease provide available options and pricing.`;
      
      const encoded = encodeURIComponent(message);
      window.open(`${SITE_CONFIG.whatsappLink}?text=${encoded}`, "_blank");
      
    } else if (activeTab === "visa") {
      if (visaCountry) {
        window.location.href = `/visa/${visaCountry.toLowerCase()}-visa`;
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-center px-2 md:px-4 mt-0 md:mt-8 relative pb-8 md:pb-12">
        {/* Tabs */}
        <div className="absolute -top-9 md:-top-12 left-1/2 -translate-x-1/2 bg-primary/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl flex z-20 overflow-hidden border border-white/10 p-1 md:p-1.5 gap-0.5 md:gap-1">
          <TabButton icon={Plane} label="Flight" active={activeTab === "flights"} onClick={() => setActiveTab("flights")} />
          <TabButton icon={Palmtree} label="Tour" active={activeTab === "tours"} onClick={() => setActiveTab("tours")} />
          <TabButton icon={Ticket} label="Visa" active={activeTab === "visa"} onClick={() => setActiveTab("visa")} />
          <TabButton icon={Moon} label="Umrah" active={activeTab === "umrah"} onClick={() => setActiveTab("umrah")} />
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-primary/95 via-primary-900/90 to-secondary/60 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] w-full max-w-[850px] pt-12 md:pt-16 px-3 md:px-8 pb-10 relative z-10 border border-white/10">
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
          {activeTab === "umrah" && <UmrahDetails />}
          
          {activeTab !== "umrah" && (
            <div className="mt-4 md:mt-6 mb-8 md:mb-12 border flex flex-col items-center text-center border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-4 hover:border-secondary transition-colors cursor-text">
              <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">BAGGAGE / LUGGAGE</div>
              <select value={baggage} onChange={(e) => setBaggage(e.target.value)} className="w-full text-center text-sm md:text-xl font-bold text-white bg-transparent outline-none cursor-pointer appearance-none">
                <option className="text-gray-900 text-center">Cabin Baggage Only (7 KG)</option>
                <option className="text-gray-900 text-center">20 KG Checked Baggage</option>
                <option className="text-gray-900 text-center">30 KG Checked Baggage</option>
                <option className="text-gray-900 text-center">40 KG Checked Baggage</option>
              </select>
            </div>
          )}
          
          {/* Search Button */}
          {activeTab !== "umrah" && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[80%] md:w-auto">
              <button 
                onClick={handleSearch}
                className="w-full bg-secondary hover:bg-secondary-600 text-white font-bold text-sm md:text-xl px-12 md:px-20 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </div>

    </>
  );
}

function UmrahDetails() {
  const [packageData, setPackageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/umrah/`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            // Assume we take the last added package
            setPackageData(data[data.length - 1]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch umrah packages:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  const handleWhatsApp = () => {
    const message = packageData 
      ? `Hi MusaFly! I'm interested in the ${packageData.package_name} package. Could you provide more details regarding pricing, hotels, and available dates?`
      : "Hi MusaFly! I'm interested in the Umrah packages. Could you provide more details regarding pricing, hotels, and available dates?";
    const encoded = encodeURIComponent(message);
    window.open(`${SITE_CONFIG.whatsappLink}?text=${encoded}`, "_blank");
  };

  return (
    <>
      <div className="space-y-4 md:space-y-6 text-white text-left p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-secondary">
              {loading ? "Loading..." : packageData ? packageData.package_name : "Premium Umrah Packages"}
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-3">
              {packageData ? packageData.inclusions : "Experience a spiritually enriching journey with our comprehensive Umrah packages. We handle all the details so you can focus on your prayers."}
            </p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Required Documents:</h4>
              <ul className="list-disc list-inside text-sm md:text-base text-white/70 space-y-1">
                <li>Original Passport (valid for at least 6 months)</li>
                <li>2 Passport size photographs (white background)</li>
                <li>NID / Smart Card copy</li>
                <li>Vaccination Certificate</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="text-center">
              <div className="text-white/70 text-sm uppercase tracking-wider mb-2">Available Package</div>
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              ) : packageData ? (
                <>
                  <div className="text-2xl font-bold text-white mb-2">{packageData.package_name}</div>
                  <div className="text-secondary font-bold text-xl">OMR {packageData.price}</div>
                </>
              ) : (
                <div className="text-white/70 text-sm">No packages currently available.</div>
              )}
            </div>
            
            <div className="w-full space-y-3">
              <button
                onClick={() => setShowModal(true)}
                disabled={!packageData}
                className="w-full bg-primary/20 border border-primary hover:bg-primary/40 text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl transition-all disabled:opacity-50"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showModal && packageData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in" onClick={e => e.stopPropagation()}>
            <div className="bg-primary text-white p-6 relative">
              <h2 className="text-2xl font-bold pr-8">{packageData.package_name}</h2>
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Package Price:</h4>
                <p className="text-2xl font-bold text-secondary">OMR {packageData.price}</p>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-2">Package Inclusions:</h4>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{packageData.inclusions}</p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  handleWhatsApp();
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TabButton({ icon: Icon, label, active, onClick }: { icon: React.ElementType; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-0.5 md:gap-1 min-w-[64px] md:min-w-[95px] px-2 md:px-5 py-1.5 md:py-3 rounded-lg md:rounded-xl relative transition-all duration-300 ${active ? "bg-white text-primary shadow-md" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
      <Icon className={`w-4 h-4 md:w-6 md:h-6 ${active ? "text-primary" : "text-white/70"}`} strokeWidth={1.5} />
      <span className="font-bold text-[11px] md:text-[13px]">{label}</span>
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
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "one-way" ? "border-secondary" : "border-white/30"}`}>
            {tripType === "one-way" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-secondary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "one-way" ? "text-secondary" : "text-white/60"}`}>One Way</span>
        </label>
        <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer" onClick={() => setTripType("round-trip")}>
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "round-trip" ? "border-secondary" : "border-white/30"}`}>
            {tripType === "round-trip" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-secondary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "round-trip" ? "text-secondary" : "text-white/60"}`}>Round Way</span>
        </label>
        <label className="flex items-center gap-1.5 md:gap-2 cursor-pointer" onClick={() => setTripType("multi-city")}>
          <div className={`w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full border-[2px] flex items-center justify-center ${tripType === "multi-city" ? "border-secondary" : "border-white/30"}`}>
            {tripType === "multi-city" && <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-secondary" />}
          </div>
          <span className={`text-[11px] md:text-[15px] font-bold ${tripType === "multi-city" ? "text-secondary" : "text-white/60"}`}>Multi City</span>
        </label>
      </div>
      
      {/* Inputs Grid (3 Rows) */}
      <div className="flex flex-col gap-2 md:gap-4">
        {/* Top Row: From / To */}
        <div className="flex flex-row gap-2 md:gap-4 relative">
          {/* FROM */}
          <div className="flex-1 flex flex-col items-center text-center border border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-secondary transition-colors min-w-0">
            <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">FROM</div>
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white bg-transparent outline-none cursor-pointer appearance-none truncate mb-0.5 md:mb-1">
              {AIRPORTS.map(airport => (
                <option key={airport.code} value={airport.code} className="text-gray-900 text-center">{airport.city}</option>
              ))}
            </select>
            <div className="text-[9px] md:text-sm text-white/50 truncate w-full">{fromAirport ? `${fromAirport.code}, ${fromAirport.name}` : ""}</div>
          </div>
          
          {/* Swap Button - centered between FROM and TO */}
          <button type="button" onClick={swapLocations} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-primary border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all z-10 shadow-sm">
            <ArrowLeftRight className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={1.5} />
          </button>
          
          {/* TO */}
          <div className="flex-1 flex flex-col items-center text-center border border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-secondary transition-colors min-w-0">
            <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">TO</div>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white bg-transparent outline-none cursor-pointer appearance-none truncate mb-0.5 md:mb-1">
              {AIRPORTS.map(airport => (
                <option key={airport.code} value={airport.code} className="text-gray-900 text-center">{airport.city}</option>
              ))}
            </select>
            <div className="text-[9px] md:text-sm text-white/50 truncate w-full">{toAirport ? `${toAirport.code}, ${toAirport.name}` : ""}</div>
          </div>
        </div>
        
        {/* Middle Row: Dates */}
        <div className="flex flex-row gap-2 md:gap-4">
          <div className="flex-1 flex flex-col items-center text-center border border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-secondary transition-colors cursor-text min-w-0">
            <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">DEPARTURE DATE</div>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white bg-transparent outline-none cursor-pointer [color-scheme:dark]" />
          </div>
          <div className="flex-1 flex flex-col items-center text-center border border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-secondary transition-colors cursor-text justify-center min-w-0">
            <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">RETURN DATE</div>
            <div className="flex items-center">
              <span className="text-[10px] md:text-sm text-white/50 truncate">Save more on return flight</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Row: Travelers */}
        <div className="border flex flex-col items-center text-center border-white/20 bg-white/5 rounded-xl md:rounded-2xl p-2 md:p-5 hover:border-secondary transition-colors cursor-text">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-0.5 md:mb-1.5">TRAVELER, CLASS</div>
          <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white bg-transparent outline-none cursor-pointer appearance-none">
            <option className="text-gray-900 text-center">1 Traveler</option>
            <option className="text-gray-900 text-center">2 Travelers</option>
            <option className="text-gray-900 text-center">3 Travelers</option>
            <option className="text-gray-900 text-center">4 Travelers</option>
            <option className="text-gray-900 text-center">5+ Travelers</option>
          </select>
          <div className="text-[9px] md:text-sm text-white/50 mt-0.5 md:mt-1 w-full text-center">Economy</div>
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
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">DESTINATION</div>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option className="text-gray-900 text-center">Singapore</option>
            <option className="text-gray-900 text-center">Malaysia</option>
            <option className="text-gray-900 text-center">Oman</option>
            <option className="text-gray-900 text-center">Bangladesh</option>
            <option className="text-gray-900 text-center">Thailand</option>
            <option className="text-gray-900 text-center">Maldives</option>
            <option className="text-gray-900 text-center">Dubai</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">START DATE</div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent cursor-pointer [color-scheme:dark]" />
        </div>
      </div>
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">DURATION</div>
          <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option className="text-gray-900 text-center">5 Days / 4 Nights</option>
            <option className="text-gray-900 text-center">7 Days / 6 Nights</option>
            <option className="text-gray-900 text-center">3 Days / 2 Nights</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">TRAVELERS</div>
          <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option className="text-gray-900 text-center">2 People</option>
            <option className="text-gray-900 text-center">3-4 People</option>
            <option className="text-gray-900 text-center">1 Person</option>
            <option className="text-gray-900 text-center">5+ People</option>
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
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">COUNTRY</div>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option value="" className="text-gray-900 text-center">Select Country</option>
            <option value="singapore" className="text-gray-900 text-center">Singapore</option>
            <option value="malaysia" className="text-gray-900 text-center">Malaysia</option>
            <option value="oman" className="text-gray-900 text-center">Oman</option>
            <option value="bangladesh" className="text-gray-900 text-center">Bangladesh</option>
            <option value="thailand" className="text-gray-900 text-center">Thailand</option>
            <option value="dubai" className="text-gray-900 text-center">Dubai (UAE)</option>
            <option value="saudi" className="text-gray-900 text-center">Saudi Arabia</option>
            <option value="usa" className="text-gray-900 text-center">USA</option>
            <option value="uk" className="text-gray-900 text-center">UK</option>
            <option value="canada" className="text-gray-900 text-center">Canada</option>
            <option value="australia" className="text-gray-900 text-center">Australia</option>
            <option value="schengen" className="text-gray-900 text-center">Schengen</option>
            <option value="japan" className="text-gray-900 text-center">Japan</option>
            <option value="korea" className="text-gray-900 text-center">South Korea</option>
            <option value="vietnam" className="text-gray-900 text-center">Vietnam</option>
            <option value="egypt" className="text-gray-900 text-center">Egypt</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
          <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">VISA TYPE</div>
          <select className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
            <option className="text-gray-900 text-center">Tourist Visa</option>
            <option className="text-gray-900 text-center">Business Visa</option>
            <option className="text-gray-900 text-center">Student Visa</option>
            <option className="text-gray-900 text-center">Work Visa</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-2 md:p-5 border border-white/20 bg-white/5 rounded-xl md:rounded-2xl hover:border-secondary transition-colors min-w-0">
        <div className="text-[9px] md:text-xs text-white/70 uppercase tracking-wide font-medium mb-1">APPLICANTS</div>
        <select className="w-full text-center text-sm md:text-2xl font-bold text-white outline-none bg-transparent appearance-none cursor-pointer truncate">
          <option className="text-gray-900 text-center">1 Applicant</option>
          <option className="text-gray-900 text-center">2 Applicants</option>
          <option className="text-gray-900 text-center">3 Applicants</option>
          <option className="text-gray-900 text-center">4+ Applicants</option>
        </select>
      </div>
    </div>
  );
}


