const API_URL = "http://46.225.103.236:8001/api";

const umrah = [
  { package_name: "Economy Umrah (14 Days)", price: 1100.00, inclusions: "Visa, Flights, Hotel Al Kiswah Towers, Hotel Jewar Al Saqefah" },
  { package_name: "Premium Umrah (10 Days)", price: 1850.00, inclusions: "Visa, Direct Flights, Swissotel Makkah, Pullman Zamzam" },
  { package_name: "VIP Umrah (7 Days)", price: 2900.00, inclusions: "Visa, First Class Flights, Fairmont Makkah, Oberoi Madinah" }
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
  console.log("Seeding Umrah...");
  await insertData("umrah", umrah);
  console.log("✅ Umrah data imported!");
}

run();
