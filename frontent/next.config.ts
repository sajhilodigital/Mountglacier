import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sajilodigital.com.np", 
        pathname: "/**",
      },
    ],
    domains: ["images.unsplash.com"],
  },
  /* config options here */
};

export default nextConfig;
