import ContactSection from "@/components/contact/home";
import Dashboard from "@/components/dashboard/home";
import FeaturedDestinations from "@/components/Destinations/Home";

import Services from "@/components/services/home";
import AdventureFeatures from "@/components/whychooseus/home";

import AboutPreview from "@/components/about/aboutpreview";
import Tour from "@/components/tourpackage/tour";

const home = () => {
  return (
    <div>
      <Dashboard />
      <FeaturedDestinations />
      <AboutPreview />
      <Tour />
      <Services />
      <AdventureFeatures />
      <ContactSection />

      {/* You can add more components here as needed */}
    </div>
  );
};

export default home;
