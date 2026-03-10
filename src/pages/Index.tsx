import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import MethodSection from "@/components/MethodSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <MethodSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
