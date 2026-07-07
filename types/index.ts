export type SearchTab = "flights" | "tours" | "visa";

export interface FlightSearchForm {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  tripType: "one-way" | "round-trip";
}

export interface TourSearchForm {
  destination: string;
  startDate: string;
  duration: number;
  travelers: number;
}

export interface VisaSearchForm {
  country: string;
  visaType: string;
  applicants: number;
}
