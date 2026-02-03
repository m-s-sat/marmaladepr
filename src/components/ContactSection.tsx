import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

export function ContactSection() {
  const hours = restaurant.hours;

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Hours & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-8 sm:mb-12">
              Visit Us
            </h2>

            {/* Hours */}
            <div className="mb-12">
              <h3 className="text-xl font-accent text-primary mb-6 tracking-wider uppercase">
                Hours
              </h3>
              <div className="space-y-0">
                {Object.entries(hours).map(([day, time]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-4 border-b border-border"
                  >
                    <span className="text-muted-foreground capitalize font-body">
                      {day}
                    </span>
                    <span className="text-foreground font-semibold">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">{restaurant.address}</p>
                  <p className="text-muted-foreground">
                    {restaurant.city}, {restaurant.state}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg">{restaurant.phone}</span>
              </a>

              <a
                href={`mailto:${restaurant.email}`}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span>{restaurant.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal p-6 sm:p-8 lg:p-10 border border-primary/20"
          >
            <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-6 sm:mb-8">
              Send a Message
            </h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-background border border-border text-foreground px-6 py-4 focus:border-primary transition-colors outline-none placeholder:text-muted-foreground"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-background border border-border text-foreground px-6 py-4 focus:border-primary transition-colors outline-none placeholder:text-muted-foreground"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  className="bg-background border border-border text-foreground px-6 py-4 focus:border-primary transition-colors outline-none placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full bg-background border border-border text-foreground px-6 py-4 focus:border-primary transition-colors outline-none placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="w-full bg-background border border-border text-foreground px-6 py-4 focus:border-primary transition-colors outline-none placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-gold-dark text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 gold-glow-hover"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
