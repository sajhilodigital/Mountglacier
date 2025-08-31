"use client";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Terms of Service
        </h1>
        <p className="mb-4 text-gray-600">
          By accessing or using Mount Glacier Alpine’s website and services, you
          agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Use of Services
        </h2>
        <p className="text-gray-600 mb-4">
          Our services are intended solely for personal, non-commercial use.
          Users must provide accurate information during registration and
          bookings.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Booking & Payments
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>All bookings are subject to availability.</li>
          <li>Payments must be completed before confirmation of services.</li>
          <li>Cancellation policies vary depending on the package booked.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Liability
        </h2>
        <p className="text-gray-600 mb-4">
          Mount Glacier Alpine is not liable for delays, cancellations, or
          damages caused by third-party providers, weather conditions, or
          unforeseen circumstances.
        </p>

        <p className="text-gray-600 mt-6">
          By continuing to use our services, you acknowledge and agree to these
          terms.
        </p>
      </div>
    </div>
  );
}
