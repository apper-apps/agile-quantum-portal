import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import IndustriesSection from "@/components/organisms/IndustriesSection";
import TeamSection from "@/components/organisms/TeamSection";
import AchievementsSection from "@/components/organisms/AchievementsSection";
import ContactSection from "@/components/organisms/ContactSection";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TeamSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Home;