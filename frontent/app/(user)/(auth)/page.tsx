import ContactSection from "@/components/contact/home";
import Dashboard from "@/components/dashboard/home";
import FeaturedDestinations from "@/components/Destinations/Home";

import Services from "@/components/services/home";
import AdventureFeatures from "@/components/whychooseus/home";

import AboutPreview from "@/components/about/aboutpreview";
import Footer from "@/components/navbar/footer";

const home = () => {
  return (
    <main>
      {/* Header stays fixed at the top */}
      {/* Add padding so content doesn’t hide behind the header */}
      <main className="pt-16">
        <div>
          <Dashboard />
          <FeaturedDestinations />
          <AboutPreview />
          <Services />
          <AdventureFeatures />
          <ContactSection />

          {/* You can add more components here as needed */}
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default home;
