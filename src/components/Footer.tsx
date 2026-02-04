import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Encode address for Google Maps embed
  const mapQuery = encodeURIComponent(restaurantInfo.address);

  return (
    <footer className="bg-background border-t border-border">
      {/* Google Map */}
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 items-start">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-gradient">Marmalade</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {restaurantInfo.description}. Experience fine dining at its best in the heart of
              Old San Juan, Puerto Rico.
            </p>
            <div className="inline-block px-3 py-1 border border-gold/30 rounded-full bg-gold/5 text-gold text-xs font-semibold tracking-wide mb-4">
              Rated 4.9/5
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-gold hover:text-charcoal transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-muted-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-sm">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">San Juan</span>
              </li>
              <li>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <span className="text-sm">{restaurantInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <span className="text-sm">{restaurantInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map Column */}
          <div className="w-full h-[200px] relative rounded-lg overflow-hidden border border-border/50">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=16`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marmalade Restaurant Location"
              className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            <a
              href={`https://maps.google.com/?q=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 left-2 px-2 py-1 bg-background/90 text-[10px] rounded text-muted-foreground hover:text-gold transition-colors block md:hidden lg:block backdrop-blur-sm shadow-sm"
            >
              View larger map
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4 mt-8">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Marmalade Restaurant. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
