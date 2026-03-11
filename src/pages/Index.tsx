import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import MethodSection from "@/components/MethodSection";
import ThesisSection from "@/components/ThesisSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <PrinciplesSection />
      <MethodSection />
      <ThesisSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
