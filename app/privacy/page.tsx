import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MusaFly",
  description: "Privacy Policy for MusaFly mobile application and web services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b pb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">Last updated: October 19, 2026</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to MusaFly (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting the personal data of users who use our website, mobile application (&quot;MusaFly&quot;), and related travel booking services (flights, tours, Umrah packages, and visa consulting).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            When you use the MusaFly application, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Personal Identification:</strong> Name, email address, phone number, and nationality when booking or submitting inquiries.</li>
            <li><strong>Travel Information:</strong> Passport details, flight preferences, travel dates, passenger details required for flight, tour, or visa bookings.</li>
            <li><strong>Device and Usage Information:</strong> Device model, operating system version, and general non-identifying diagnostics to improve app performance and stability.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>To process your flight searches, tour reservations, Umrah packages, and visa assistance requests.</li>
            <li>To send booking confirmations, flight status notifications, and customer support responses.</li>
            <li>To maintain security, prevent fraud, and comply with international travel regulations.</li>
            <li>We do NOT sell, rent, or trade your personal data to third parties for advertising or marketing.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing and Third Parties</h2>
          <p className="text-gray-600 leading-relaxed">
            We only share your information with trusted travel service providers (airlines, hotel partners, authorized visa agencies, and payment processors) strictly as required to fulfill your requested bookings. All data transmissions are encrypted using industry-standard HTTPS / TLS.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">5. Data Retention and Deletion</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Users have the right to request deletion of their account and associated personal data at any time by contacting us at contact@musafly.com.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">6. Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not intended for children under 13 without parental consent. We do not knowingly collect personal information directly from children under 13.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">7. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns about this Privacy Policy or your data, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-700 space-y-1">
            <p><strong>MusaFly Travel Services</strong></p>
            <p>Email: contact@musafly.com</p>
            <p>Phone: +968 95923226</p>
            <p>Location: Muscat, Sultanate of Oman</p>
            <p>Website: https://www.musafly.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
