import { motion } from "framer-motion";
import { restaurant } from "@/data/restaurant";
import chefImage from "@/assets/chef-plating.jpg";

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-background via-charcoal to-background py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] group order-2 lg:order-1"
          >
            <img
              src={chefImage}
              alt="Chef crafting perfection"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Gold Border Frame Effect - Hidden on mobile */}
            <div className="absolute inset-0 border-2 border-primary/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Subtitle */}
            <p className="subheading text-primary mb-4 sm:mb-6 text-xs sm:text-sm">Organic & Global</p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              Sustainable
              <br />
              <span className="text-primary">Fine Dining</span>
            </h2>

            {/* Body Content */}
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-body">
              <p>{restaurant.description}</p>
              <p className="hidden sm:block">
                Our chef-driven menu changes seasonally, ensuring every visit
                offers something new and extraordinary. Each dish is a
                carefully composed work of art, designed to delight all your
                senses.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-1 sm:mb-2">
                  {restaurant.rating}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                  Rating
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-1 sm:mb-2">
                  {restaurant.reviewCount}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                  Reviews
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-1 sm:mb-2">
                  {restaurant.seats}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                  Seats Only
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
