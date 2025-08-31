"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-600">
          At Mount Glacier Alpine, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your information when you interact with
          our website and services.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Personal details such as name, email, phone number, and address.
          </li>
          <li>Travel preferences and booking history.</li>
          <li>
            Payment information processed securely via third-party providers.
          </li>
          <li>Cookies and usage data to improve website functionality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use your data to provide better travel services, process bookings,
          personalize your experience, and send updates or promotional offers
          relevant to your interests.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Data Protection
        </h2>
        <p className="text-gray-600 mb-4">
          We take strict security measures to ensure your personal information
          is safe from unauthorized access or disclosure.
        </p>

        <p className="text-gray-600 mt-6">
          If you have any questions, please contact us at{" "}
          <a
            href="mailto:support@mountglacier.com"
            className="text-blue-600 underline"
          >
            support@mountglacier.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
