import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Star, Leaf, Wheat, ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories, menuItems, MenuItem } from "@/data/restaurant";

const ITEMS_PER_PAGE = 6;

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Chef's Recommendation Badge */}
        {item.isChefRecommended && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
            <Star size={12} fill="currentColor" />
            Chef's Pick
          </div>
        )}
        
        {/* Price */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-gold font-bold">${item.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold transition-colors">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
            >
              {tag === "Vegetarian" && <Leaf size={10} />}
              {tag === "Gluten-Free" && <Wheat size={10} />}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <section id="menu" className="section-padding bg-background relative">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
            Culinary Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each dish is a masterpiece, crafted with passion using the finest ingredients 
            and innovative techniques.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
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

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-muted border border-border rounded-full text-sm focus:outline-none focus:border-gold transition-colors w-64"
            />
          </div>
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery + currentPage}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginatedItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-muted-foreground"
          >
            No dishes found matching your search.
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === page
                      ? "bg-gold text-charcoal"
                      : "bg-muted text-muted-foreground hover:bg-gold/20"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}

        {/* Items count */}
        {filteredItems.length > 0 && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length} dishes
          </p>
        )}
      </div>
    </section>
  );
}
