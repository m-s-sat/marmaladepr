import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
