import { Instagram, Facebook, Twitter } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-accent text-primary mb-3 sm:mb-4">
              {restaurant.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              {restaurant.description}
            </p>

            {/* Awards - Removed for casual vibe */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <span className="text-[10px] sm:text-xs text-primary border border-primary/30 px-2 sm:px-3 py-1 rounded-full">
                Rated {restaurant.rating}/5
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-accent mb-4 sm:mb-6 tracking-wider text-xs sm:text-sm uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm">
              <li>
                <a
                  href="#menu"
                  className="hover:text-primary transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-accent mb-4 sm:mb-6 tracking-wider text-xs sm:text-sm uppercase">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3 text-muted-foreground text-xs sm:text-sm">
              <p>{restaurant.address}</p>
              <p>{restaurant.city}</p>
              <p>{restaurant.phone}</p>
              <p className="break-all">{restaurant.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="col-span-1 h-[200px] w-full rounded-lg overflow-hidden border border-border sm:col-span-2 lg:col-span-1">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=317+Fortaleza+Street,+San+Juan,+Puerto+Rico+00901&t=&z=15&ie=UTF8&iwloc=&output=embed"
            >
            </iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm order-2 sm:order-1">
            © 2019 {restaurant.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 order-1 sm:order-2">
            <a
              href="https://www.instagram.com/marmaladerestpr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/MarmaladeRestaurantPR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground/50 text-xs italic order-3 hidden sm:block">
            Demo Website - Customizable Template
          </p>
        </div>
      </div>
    </footer>
  );
}
