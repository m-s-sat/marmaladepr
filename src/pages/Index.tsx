import { Preloader } from "@/components/Preloader";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FeaturedDishesSection } from "@/components/FeaturedDishesSection";
import { MenuSection } from "@/components/MenuSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Preloader />
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <FeaturedDishesSection />
        <MenuSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
