"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const MAP_EMBED_SRC =
    "https://www.google.com/maps?q=27.7163402,85.310942&z=16&output=embed";
  const MAP_OPEN_LINK = "https://maps.app.goo.gl/2LA5t11yQoj4yUbi6";

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Left Side - Brand + Map */}
        <div className="space-y-8 md:col-span-1">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo1.png"
                alt="Mount Glacier Logo"
                width={160}
                height={100}
                className="rounded-md"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Creating extraordinary travel experiences for adventurous souls
              around the world.
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/mountglacieralpineadventure",
                },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Youtube, link: "#" },
                { icon: Mail, link: "mailto:info@example.com" },
                { icon: MessageCircle, link: "https://wa.me/+9779851411452" },
                { icon: Phone, link: "tel:+9779851411452" },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">
              Our Location
            </h4>
            <div className="rounded-xl overflow-hidden ring-1 ring-gray-800 shadow-md">
              <iframe
                src={MAP_EMBED_SRC}
                title="Our Location - Google Maps"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
                className="block"
              />
            </div>
            <a
              href={MAP_OPEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-orange-400 hover:text-orange-300 underline underline-offset-4"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Right Side - Links & Newsletter */}
        <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:text-orange-400">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/flight" className="hover:text-orange-400">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400">
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link href="/package" className="hover:text-orange-400">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/travel" className="hover:text-orange-400">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400">
                  Visa Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-white font-semibold text-lg">Stay Updated</h4>
            <p className="text-sm">
              Subscribe to our newsletter for travel tips and exclusive deals.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r text-sm">
                Subscribe
              </button>
            </div>

            {/* Payment */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-lg">
                We Accept
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "fonepay",
                  "esewa",
                  "khalti",
                  "connectips",
                  "mastercard",
                  "paypal",
                  "visa",
                  "banktransfer",
                ].map((item) => (
                  <Image
                    key={item}
                    src={`/payment/${item}.png`}
                    alt={item}
                    width={55}
                    height={35}
                    className="rounded bg-white p-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Mount Glacier. All rights reserved by Pramod.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-400">
              Privacy Policy
            </Link>
            <Link href="/term" className="hover:text-orange-400">
              Terms of Service
            </Link>
            <Link href="/cookie" className="hover:text-orange-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
