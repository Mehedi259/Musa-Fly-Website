const API_URL = "http://46.225.103.236:8001/api";

const tours = [
  { destination: "Dubai City Tour", duration: "5 Days 4 Nights", price: 450.00, image_url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800", inclusions: "Hotel, Breakfast, City Tour, Desert Safari" },
  { destination: "Maldives Honeymoon", duration: "4 Days 3 Nights", price: 1200.00, image_url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800", inclusions: "Water Villa, All Meals, Speedboat Transfer" },
  { destination: "Switzerland Alps", duration: "7 Days 6 Nights", price: 2100.00, image_url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800", inclusions: "4-star Hotel, Breakfast, Train Pass, Mt. Titlis Tour" }
];

const flights = [
  { airline: "Emirates", origin: "Dhaka (DAC)", destination: "Dubai (DXB)", departure_time: "2024-05-10T10:00:00Z", arrival_time: "2024-05-10T13:30:00Z", price: 350.00 },
  { airline: "Qatar Airways", origin: "Dhaka (DAC)", destination: "London (LHR)", departure_time: "2024-06-15T08:00:00Z", arrival_time: "2024-06-15T18:45:00Z", price: 850.00 },
  { airline: "Singapore Airlines", origin: "Dhaka (DAC)", destination: "Singapore (SIN)", departure_time: "2024-07-20T23:55:00Z", arrival_time: "2024-07-21T06:05:00Z", price: 420.00 }
];

const visas = [
  { country: "UAE", visa_type: "Tourist", processing_time: "3-5 Working Days", requirements: "Passport Copy, Photo, National ID", price: 120.00 },
  { country: "Malaysia", visa_type: "E-Visa", processing_time: "2-4 Working Days", requirements: "Passport Copy, Photo, Bank Statement", price: 45.00 },
  { country: "Singapore", visa_type: "Tourist", processing_time: "5-7 Working Days", requirements: "Passport Copy, Photo, LOI, Bank Statement", price: 65.00 }
];

const umrah = [
  { package_name: "Economy Umrah", duration: "14 Days", hotel_makkah: "Al Kiswah Towers", hotel_madinah: "Jewar Al Saqefah", price: 1100.00, image_url: "https://images.unsplash.com/photo-1565552643952-255964893798?q=80&w=800" },
  { package_name: "Premium Umrah", duration: "10 Days", hotel_makkah: "Swissotel Makkah", hotel_madinah: "Pullman Zamzam", price: 1850.00, image_url: "https://images.unsplash.com/photo-1591143223000-e14529f52f36?q=80&w=800" },
  { package_name: "VIP Umrah", duration: "7 Days", hotel_makkah: "Fairmont Makkah", hotel_madinah: "Oberoi Madinah", price: 2900.00, image_url: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800" }
];

const testimonials = [
  { name: "Sarah Johnson", location: "London, UK", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200", rating: 5, text: "MusaFly made our honeymoon to the Maldives absolutely perfect. The entire booking process was smooth, and their support team was always there for us!" },
  { name: "Abdul Rahman", location: "Dhaka, BD", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", rating: 5, text: "I booked my Umrah package through MusaFly and the service was beyond my expectations. Highly recommended!" },
  { name: "David Chen", location: "Singapore", image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", rating: 4, text: "Got my Dubai visa processed very quickly. The platform is very easy to use and their transparency in pricing is commendable." }
];

const faqs = [
  { question: "How can I book a tour package?", answer: "You can book a tour package directly from our website by selecting the desired destination and clicking 'Book Now'. Our team will contact you shortly to confirm the details.", category: "tours" },
  { question: "Do you provide visa assistance for Schengen countries?", answer: "Yes, we provide complete visa assistance including document preparation, appointment booking, and interview guidelines for all Schengen countries.", category: "visa" },
  { question: "Are flights included in the Umrah packages?", answer: "Our standard Umrah packages do not include flights, but we can arrange the best flight options for you at competitive rates upon request.", category: "flights" },
  { question: "Can I cancel or reschedule my flight?", answer: "Cancellations and rescheduling depend on the airline's policy. Please contact our support team with your booking reference for assistance.", category: "flights" },
  { question: "Is my payment secure?", answer: "Yes, we use industry-standard encryption protocols to ensure all your transactions are 100% secure and protected.", category: "general" }
];

async function insertData(endpoint, dataArray) {
  for (let item of dataArray) {
    try {
      const res = await fetch(`${API_URL}/${endpoint}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });
      if (!res.ok) {
        console.error(`Error inserting into ${endpoint}:`, res.status, res.statusText);
      } else {
        console.log(`Successfully added to ${endpoint}`);
      }
    } catch (e) {
      console.error(`Failed to insert into ${endpoint}:`, e.message);
    }
  }
}

async function run() {
  console.log("Seeding Tours...");
  await insertData("tours", tours);
  
  console.log("Seeding Flights...");
  await insertData("flights", flights);
  
  console.log("Seeding Visas...");
  await insertData("visas", visas);
  
  console.log("Seeding Umrah...");
  await insertData("umrah", umrah);
  
  console.log("Seeding Testimonials...");
  await insertData("testimonials", testimonials);
  
  console.log("Seeding FAQs...");
  await insertData("faqs", faqs);

  console.log("✅ All dummy data successfully imported!");
}

run();
