import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { restaurant } from "@/data/restaurant";

export function TestimonialsSection() {
  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="subheading text-primary mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            Guest Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground"
          >
            Reviews
          </motion.h2>
        </div>

        {/* Carousel */}
        <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
          <CarouselContent>
            {restaurant.testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-8 md:p-12 lg:p-16 text-center"
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary/30 mx-auto mb-4 sm:mb-6 lg:mb-8" />

                  {/* Review Text */}
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-display italic text-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8 px-2">
                    "{testimonial.text}"
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.source}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
