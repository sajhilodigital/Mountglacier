"use client";

import { PhoneCall, MessageCircle,  Smartphone } from "lucide-react"; // using lucide icons

export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Ready to plan your next adventure? Contact our travel experts today!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Travel Destination"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Tell us about your dream vacation..."
              rows={4}
              className="w-full p-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded text-white font-medium bg-gradient-to-r from-blue-500 to-orange-400 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          {/* Visit Us */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
            <p className="text-gray-600 text-sm">
              Thamel <br /> Kathmandu ,44600, Nepal
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
            <p className="text-gray-600 text-sm">+977 9851411452</p>
            <p className="text-gray-600 text-sm">+977 9843431452</p>
          </div>

          {/* Email Us */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
            <p className="text-gray-600 text-sm">mountadventure091@gmail.com</p>
            <p className="text-gray-600 text-sm">
              mountadventure091@hotmail.com
            </p>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
            <p className="text-gray-600 text-sm">Mon - Fri: 9AM - 6PM</p>
            <p className="text-gray-600 text-sm">Sat - Sun: 10AM - 4PM</p>
          </div>

          {/* WhatsApp / Viber / WeChat */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-gray-800 mb-2">Chat with Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/9779851411452"
                target="_blank"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B9779851411452"
                className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition"
              >
                <PhoneCall size={18} /> Viber
              </a>
              <a
                href="weixin://dl/chat?username=9779851411452"
                className="flex items-center gap-2 bg-sky-500 text-white px-3 py-2 rounded-md hover:bg-sky-600 transition"
              >
                <Smartphone size={18} /> WeChat
              </a>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Emergency Support</h4>
            <p className="text-sm mb-3">
              Need assistance while traveling? Our 24/7 emergency support team
              is here to help.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold">
              Emergency Hotline: +977 9851411452 911-HELP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
