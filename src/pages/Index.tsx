
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import VisionMissionSection from "../components/VisionMissionSection";
import RegistrationSection from "../components/RegistrationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FeaturesSection />
      <VisionMissionSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
