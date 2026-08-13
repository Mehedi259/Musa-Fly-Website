const API_URL = "http://46.225.103.236:8001/api";

async function pushData() {
  console.log("Pushing dummy Tour...");
  await fetch(`${API_URL}/tours/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      destination: "Maldives (Demo)",
      duration: "5 days",
      price: "1200.00",
      image_url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865",
      inclusions: "Resort stay, flights, breakfast, snorkeling"
    })
  });

  console.log("Pushing dummy Flight...");
  await fetch(`${API_URL}/flights/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      airline: "Qatar Airways (Demo)",
      destination: "Doha, Qatar",
      price: "850.00",
      departure_time: new Date().toISOString(),
      arrival_time: new Date(Date.now() + 86400000).toISOString(),
      class_type: "Economy"
    })
  });

  console.log("Pushing dummy Visa...");
  await fetch(`${API_URL}/visas/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      country: "Turkey (Demo)",
      visa_type: "Tourist",
      processing_time: "3-5 days",
      price: "60.00",
      requirements: "Passport, Photo, Bank Statement"
    })
  });

  console.log("Pushing dummy Umrah...");
  await fetch(`${API_URL}/umrah/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      package_name: "Premium Umrah (Demo)",
      price: "1500.00",
      inclusions: "Makkah 5 Star Hotel, Madinah 4 Star Hotel, Visa, Flights"
    })
  });

  console.log("Done pushing dummy data!");
}
pushData();
