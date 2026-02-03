import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredDishes } from "@/data/restaurant";

import dishWagyu from "@/assets/dish-wagyu.jpg";
import dishFoiegras from "@/assets/dish-foiegras.jpg";
import dishRibeye from "@/assets/dish-ribeye.jpg";

const dishImages = [dishWagyu, dishFoiegras, dishRibeye];

export function FeaturedDishesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="subheading text-primary mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Signature Creations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground"
        >
          Chef's Selection
        </motion.h2>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {featuredDishes.map((dish, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={dishImages[index]}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                  {/* Gold Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500" />

                  {/* Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    {/* Badge */}
                    <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 glass-card rounded-full">
                      <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase font-accent">
                        Signature Dish
                      </span>
                    </div>

                    {/* Dish Name */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                      {dish.name}
                    </h3>

                    {/* Description - visible on mobile, hover on desktop */}
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                      {dish.description}
                    </p>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xl sm:text-2xl font-accent text-primary">{dish.price}</span>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 text-xs sm:text-sm px-3 sm:px-4"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
