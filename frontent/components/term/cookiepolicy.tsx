"use client";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Cookie Policy</h1>
        <p className="mb-4 text-gray-600">
          Mount Glacier Alpine uses cookies to enhance your browsing experience
          and provide personalized content. This policy explains how and why we
          use cookies.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          What Are Cookies?
        </h2>
        <p className="text-gray-600 mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember your preferences and activity.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Types of Cookies We Use
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for website
            functionality.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us analyze site usage.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Store user preferences.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Show personalized ads.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
          Managing Cookies
        </h2>
        <p className="text-gray-600 mb-4">
          You can manage or disable cookies through your browser settings.
          However, some features of our site may not function properly without
          cookies.
        </p>

        <p className="text-gray-600 mt-6">
          For more details, contact us at{" "}
          <a
            href="mailto:privacy@mountglacier.com"
            className="text-blue-600 underline"
          >
            privacy@mountglacier.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
