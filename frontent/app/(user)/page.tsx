import ContactSection from "@/components/contact/home";
import Dashboard from "@/components/dashboard/home";
import FeaturedDestinations from "@/components/Destinations/Home";

import Services from "@/components/services/home";
import AdventureFeatures from "@/components/whychooseus/home";

import AboutPreview from "@/components/about/aboutpreview";
import Tour from "@/components/tourpackage/tour";
import ReviewsSection from "@/components/dashboard/reviewsection";

const home = () => {
  return (
    <div>
      <Dashboard />
      <FeaturedDestinations />
      <ReviewsSection />
      <Tour />
      <AboutPreview />
      <Services />
      <AdventureFeatures />
      <ContactSection />

      {/* You can add more components here as needed */}
    </div>
  );
};

export default home;
