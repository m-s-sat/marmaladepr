import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import heroImage from "@/assets/hero-restaurant.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NOIRE dining experience"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 overlay-dark" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Tagline - Fade in first */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="subheading text-primary mb-4 sm:mb-6 text-xs sm:text-sm"
        >
          Marmalade
        </motion.p>

        {/* Restaurant Name - HUGE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display font-bold text-foreground mb-4 sm:mb-6 text-shadow-lg leading-none"
        >
          A Multi-Course Journey in Old San Juan
        </motion.h1>

        {/* Tagline - Elegant */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 sm:mb-12 max-w-3xl mx-auto italic font-display px-4"
        >
          {restaurant.tagline}
        </motion.p>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.1, duration: 1 }}
          className="h-px divider-gold mx-auto mb-8 sm:mb-12 max-w-[150px] sm:max-w-[200px]"
        />


      </div>

      {/* Scroll Indicator - Clickable */}
      <motion.button
        onClick={() => {
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary/70 hover:text-primary transition-colors cursor-pointer z-20"
      >
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>

      {/* Awards - Bottom Corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 text-right hidden lg:block"
      >
        <p className="text-primary text-xl tracking-wider font-accent font-bold">
          Rated {restaurant.rating}/5
        </p>
        <p className="text-muted-foreground text-sm mt-1">based on {restaurant.reviewCount.toLocaleString()} reviews</p>
      </motion.div>
    </section>
  );
}
