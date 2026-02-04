import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, MessageSquare, Calendar, Clock } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export function Contact() {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would integrate with backend
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission - would integrate with backend
      alert("Message sent! We'll get back to you shortly.");
    };
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-light relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll reply as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >


            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="p-3 bg-gold/10 rounded-lg">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-gold transition-colors">Location</h3>
                  <p className="text-muted-foreground text-sm">{restaurantInfo.address}</p>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
              </a>

              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Phone className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-gold transition-colors">Phone</h3>
                  <p className="text-muted-foreground text-sm">{restaurantInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Mail className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-gold transition-colors">Email</h3>
                  <p className="text-muted-foreground text-sm">{restaurantInfo.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Clock className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">Daily: 5:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* OpenTable Link */}
            <motion.a
              href={restaurantInfo.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 bg-primary hover:bg-burgundy-light rounded-xl font-semibold transition-colors"
            >
              <Calendar size={20} />
              Book via OpenTable
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-gold py-4 rounded-xl font-semibold text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
