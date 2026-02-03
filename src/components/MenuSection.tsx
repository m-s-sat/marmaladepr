import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "@/data/menuData";

export function MenuSection() {
  return (
    <section id="menu" className="py-16 sm:py-24 lg:py-32 bg-background relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="subheading text-primary mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            Curated Selection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-4 sm:mb-6"
          >
            Our Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-body px-4"
          >
            Each dish is thoughtfully crafted using seasonal ingredients and
            innovative techniques
          </motion.p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="tasting-menu" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="w-full justify-center bg-transparent border-b border-border mb-8 sm:mb-12 lg:mb-16 flex-wrap gap-2 sm:gap-4 md:gap-8 pb-4 h-auto">
            <TabsTrigger
              value="tasting-menu"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent text-muted-foreground uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-accent pb-4 transition-all duration-300 rounded-none px-2 sm:px-4"
            >
              Tasting Menu
            </TabsTrigger>
            <TabsTrigger
              value="a-la-carte"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent text-muted-foreground uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-accent pb-4 transition-all duration-300 rounded-none px-2 sm:px-4"
            >
              À La Carte
            </TabsTrigger>
            <TabsTrigger
              value="wines"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent text-muted-foreground uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-accent pb-4 transition-all duration-300 rounded-none px-2 sm:px-4"
            >
              Wine Bar
            </TabsTrigger>
          </TabsList>

          {/* Tasting Menu Content */}
          <TabsContent value="tasting-menu" className="mt-0">
            <div className="max-w-4xl mx-auto">
              {/* Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-12 lg:mb-16 p-4 sm:p-6 lg:p-8 border border-primary/20 bg-primary/5 backdrop-blur-sm"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-3 sm:mb-4">
                  {menuData.tastingMenu.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 px-2">
                  {menuData.tastingMenu.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8">
                  <div className="text-3xl sm:text-4xl font-accent text-primary">
                    {menuData.tastingMenu.price}
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base">{menuData.tastingMenu.priceLabel}</div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                  {menuData.tastingMenu.winePairing}
                </p>
              </motion.div>

              {/* Courses */}
              <div className="space-y-0">
                {menuData.tastingMenu.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-border py-8 hover:bg-secondary/50 transition-all duration-300 px-4 md:px-8"
                  >
                    <div className="flex items-start gap-3 sm:gap-6">
                      {/* Course Number */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary/30 flex items-center justify-center font-accent text-primary text-sm sm:text-base group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                        {course.number}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Course Name */}
                        <h4 className="text-lg sm:text-xl md:text-2xl font-display text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                          {course.name}
                        </h4>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {course.description}
                        </p>

                        {/* Dietary Tags */}
                        {course.dietary && (
                          <div className="flex gap-2 mt-3 flex-wrap">
                            {course.dietary.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs text-primary/70 border border-primary/30 px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* À La Carte Content */}
          <TabsContent value="a-la-carte">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {menuData.aLaCarte.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-4 sm:p-6 lg:p-8 border border-border hover:border-primary/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gold accent on hover */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />

                  <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                    <h4 className="text-base sm:text-lg lg:text-xl font-display text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xl sm:text-2xl font-accent text-primary flex-shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-primary border border-primary/30 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Wines Content */}
          <TabsContent value="wines">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {menuData.wines.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 sm:p-6 lg:p-8 border border-border hover:border-primary/50 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300 text-center"
                >
                  <h4 className="text-base sm:text-lg lg:text-xl font-display text-foreground group-hover:text-primary transition-colors mb-2 sm:mb-3">
                    {item.name}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <span className="text-xl sm:text-2xl font-accent text-primary">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
