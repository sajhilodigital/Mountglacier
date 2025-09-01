import ContactSection from "@/components/contact/home";
import Dashboard from "@/components/dashboard/home";
import FeaturedDestinations from "@/components/Destinations/Home";

import Services from "@/components/services/home";
import AdventureFeatures from "@/components/whychooseus/home";

import React from "react";
import AboutPreview from "@/components/about/aboutpreview";

const home = () => {
  return (
    <div>
      <Dashboard />
      <FeaturedDestinations />
      <AboutPreview />
      <Services />
      <AdventureFeatures />
      <ContactSection />

      {/* You can add more components here as needed */}
    </div>
  );
};

export default home;
