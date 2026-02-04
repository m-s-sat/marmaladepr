import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews, restaurantInfo } from "@/data/restaurant";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % reviews.length;
      }
      return prev === 0 ? reviews.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-gold/5 to-transparent" />

      <div className="container-custom relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Guest <span className="text-gradient">Reviews</span>
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-3xl font-bold">{restaurantInfo.rating}</span>
            <span className="text-muted-foreground">
              Based on {restaurantInfo.reviewCount.toLocaleString()} reviews
            </span>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <Quote className="absolute -top-8 left-0 text-gold/20 w-24 h-24" />

          <div className="relative overflow-hidden py-8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center px-8 md:px-16"
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < reviews[currentIndex].rating
                            ? "text-gold fill-gold"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-lg">{reviews[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {reviews[currentIndex].date} • via {reviews[currentIndex].platform}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-6" : "bg-muted hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
