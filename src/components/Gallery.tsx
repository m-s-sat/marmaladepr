import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import cocktail1 from "@/assets/cocktail-1.jpg";
import interior1 from "@/assets/interior-1.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";

const galleryCategories = ["All", "Food", "Interior", "Drinks"];

const galleryItems = [
  { id: 1, image: dish2, title: "Golden Scallops", category: "Food" },
  { id: 2, image: heroImage, title: "Main Dining Room", category: "Interior" },
  { id: 3, image: dish1, title: "Duck Breast", category: "Food" },
  { id: 4, image: cocktail1, title: "Signature Cocktail", category: "Drinks" },
  { id: 5, image: interior1, title: "Intimate Setting", category: "Interior" },
  { id: 6, image: dish3, title: "Chocolate Fondant", category: "Food" },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="section-padding bg-charcoal-light relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Immerse yourself in the artistry of our cuisine and the elegance of our space
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-charcoal shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid - Professional Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(item.id)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-xs font-medium tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-center px-4">
                    {item.title}
                  </h3>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-muted hover:bg-gold hover:text-charcoal transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-muted hover:bg-gold hover:text-charcoal transition-colors z-10"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-muted hover:bg-gold hover:text-charcoal transition-colors z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[85vh] w-full"
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <span className="text-gold text-sm font-medium tracking-wider uppercase">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-serif font-semibold mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
