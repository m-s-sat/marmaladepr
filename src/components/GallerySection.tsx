import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/hero-restaurant.jpg";
import chefPlating from "@/assets/chef-plating.jpg";
import dishFoieGras from "@/assets/dish-foiegras.jpg";
import dishRibeye from "@/assets/dish-ribeye.jpg";
import dishWagyu from "@/assets/dish-wagyu.jpg";

const galleryImages = [
    { src: heroImage, alt: "Dining Room Atmosphere" },
    { src: chefPlating, alt: "Chef Plating" },
    { src: dishFoieGras, alt: "Foie Gras Dish" },
    { src: dishRibeye, alt: "Ribeye Steak" },
    { src: dishWagyu, alt: "Wagyu Beef" },
];

export function GallerySection() {
    return (
        <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="subheading text-primary mb-3 sm:mb-4 text-xs sm:text-sm"
                    >
                        Visual Journey
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground"
                    >
                        Gallery
                    </motion.h2>
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{ align: "center", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                        {galleryImages.map((image, index) => (
                            <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="aspect-[4/5] relative rounded-lg overflow-hidden border border-primary/20 group"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-8">
                        <CarouselPrevious className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
                        <CarouselNext className="relative static bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
