import { destinations } from "./data/destinations";
import { visaServices as visas } from "./data/visa";
import { hotDeals } from "./data/deals";

const API_URL = "http://46.225.103.236:8001/api";

async function seedData() {
  console.log("Starting data seeding...");

  // Seed Destinations (Tours)
  console.log("Seeding Tours...");
  for (const dest of destinations) {
    try {
      const response = await fetch(`${API_URL}/tours/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: dest.name,
          duration: `${dest.tourPackages} packages`,
          price: dest.startingPrice,
          inclusions: dest.description,
          image_url:
            dest.id === "singapore"
              ? "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2852"
              : dest.id === "malaysia"
              ? "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2864"
              : dest.id === "oman"
              ? "https://images.unsplash.com/photo-1547304638-aa0a7b5aae3d?q=80&w=2940"
              : "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2787",
        }),
      });
      if (response.ok) {
        console.log(`✅ Created Tour: ${dest.name}`);
      } else {
        console.error(`❌ Failed to create Tour: ${dest.name}`, await response.text());
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Seed Visas
  console.log("Seeding Visas...");
  for (const v of visas) {
    try {
      const response = await fetch(`${API_URL}/visas/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: v.country,
          visa_type: v.type,
          processing_time: v.processingTime,
          price: v.startingPrice,
          requirements: v.requirements.join(", "),
        }),
      });
      if (response.ok) {
        console.log(`✅ Created Visa: ${v.country}`);
      } else {
        console.error(`❌ Failed to create Visa: ${v.country}`, await response.text());
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Seed Deals as Flights/Umrah Packages based on category
  console.log("Seeding Deals...");
  for (const deal of hotDeals) {
    try {
      let endpoint = "";
      let payload = {};

      if (deal.category === "flight") {
        endpoint = "/flights/";
        payload = {
          airline: "Generic Airline",
          origin: "Dhaka",
          destination: deal.destination,
          departure_time: new Date().toISOString(),
          arrival_time: new Date(Date.now() + 86400000).toISOString(), // +1 day
          price: deal.discountedPrice,
        };
      } else if (deal.category === "package") {
        endpoint = "/umrah/";
        payload = {
          package_name: deal.title,
          price: deal.discountedPrice,
          inclusions: deal.description,
        };
      } else {
        // Tour category
        endpoint = "/tours/";
        payload = {
          destination: deal.destination,
          duration: "Variable",
          price: deal.discountedPrice,
          inclusions: deal.description,
          image_url: "",
        };
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(`✅ Created Deal as ${deal.category}: ${deal.title}`);
      } else {
        console.error(`❌ Failed to create Deal: ${deal.title}`, await response.text());
      }
    } catch (e) {
      console.error(e);
    }
  }

  console.log("Seeding completed!");
}

seedData();
