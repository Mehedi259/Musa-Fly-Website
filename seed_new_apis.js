const API_URL = "http://46.225.103.236:8001/api";

async function pushData() {
  console.log("Pushing dummy Testimonial...");
  await fetch(`${API_URL}/testimonials/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Ahmed Hassan",
      location: "Dubai, UAE",
      image_url: "",
      rating: 5,
      text: "Excellent visa service! They handled everything professionally and got my Malaysia visa approved in just 4 days. Will definitely use their services again."
    })
  });

  console.log("Pushing dummy FAQ...");
  await fetch(`${API_URL}/faqs/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: "How do I book a flight through Musa Fly?",
      answer: "Simply click on any flight-related button or link, and you'll be redirected to our WhatsApp where our travel experts will assist you in finding the best flights at competitive prices.",
      category: "flights"
    })
  });

  console.log("Done pushing dummy data to new APIs!");
}
pushData();
