import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Award, Users, Utensils } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";
import interiorImage from "@/assets/interior-1.jpg";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Award, label: "Years of Excellence", value: restaurantInfo.stats.yearsInBusiness, suffix: "+" },
  { icon: Utensils, label: "Dishes Served", value: restaurantInfo.stats.dishesServed, suffix: "+" },
  { icon: Users, label: "Happy Guests", value: restaurantInfo.stats.happyCustomers, suffix: "+" },
  { icon: Star, label: "Culinary Awards", value: restaurantInfo.stats.awards, suffix: "" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-charcoal-light relative overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={interiorImage}
                alt="Marmalade Restaurant Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elegant border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold fill-gold" />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-lg">{restaurantInfo.rating}</p>
                  <p className="text-xs text-muted-foreground">{restaurantInfo.reviewCount.toLocaleString()} reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              A Culinary Journey<br />
              <span className="text-gradient">Since 2010</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {restaurantInfo.description}. Nestled in the heart of Old San Juan, Marmalade has been 
              redefining fine dining with innovative techniques and locally-sourced ingredients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our culinary philosophy blends Caribbean heritage with global influences, 
              creating dishes that tell stories and awaken the senses. Every plate is a 
              masterpiece, crafted with passion and presented with artistry.
            </p>

            {/* Price & Category */}
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-4 py-2 bg-primary/20 text-gold rounded-full text-sm font-medium">
                {restaurantInfo.priceRange} per person
              </span>
              <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                {restaurantInfo.category}
              </span>
              <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                Dine-in Only
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold font-serif">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
