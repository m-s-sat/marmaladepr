import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import cocktail1 from "@/assets/cocktail-1.jpg";

export const restaurantInfo = {
  name: "Marmalade",
  tagline: "A Symphony of Flavors",
  description: "Stylish restaurant featuring an international menu with creative plates, plus cocktails & wine",
  rating: 4.8,
  reviewCount: 1928,
  priceRange: "$100+",
  category: "Fine Dining Restaurant",
  address: "317 C. de la Fortaleza, San Juan, 00901, Puerto Rico",
  phone: "+1 787-724-3969",
  email: "reservations@marmaladepr.com",
  website: "marmaladepr.com",
  plusCode: "FV8P+6M San Juan, Puerto Rico",
  services: ["Dine-in"],
  hours: {
    monday: "5:00 PM - 10:00 PM",
    tuesday: "5:00 PM - 10:00 PM",
    wednesday: "5:00 PM - 10:00 PM",
    thursday: "5:00 PM - 10:00 PM",
    friday: "5:00 PM - 10:00 PM",
    saturday: "5:00 PM - 10:00 PM",
    sunday: "5:00 PM - 10:00 PM",
  },
  openingHour: 17,
  closingHour: 22,
  reservationUrl: "https://www.opentable.com",
  social: {
    instagram: "https://instagram.com/marmaladepr",
    facebook: "https://facebook.com/marmaladepr",
    twitter: "https://twitter.com/marmaladepr",
  },
  stats: {
    yearsInBusiness: 15,
    dishesServed: 50000,
    happyCustomers: 25000,
    awards: 12,
  },
};

export const menuCategories = ["All", "Appetizers", "Main Course", "Desserts", "Cocktails"];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  isChefRecommended?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Seared Duck Breast",
    description: "Pan-seared duck with citrus glaze, julienne vegetables, and truffle jus",
    price: 48,
    category: "Main Course",
    image: dish1,
    tags: ["Gluten-Free"],
    isChefRecommended: true,
  },
  {
    id: "2",
    name: "Golden Scallops",
    description: "Pan-seared diver scallops with beetroot purée, microgreens, and gold leaf",
    price: 52,
    category: "Appetizers",
    image: dish2,
    tags: ["Gluten-Free", "Signature"],
    isChefRecommended: true,
  },
  {
    id: "3",
    name: "Chocolate Fondant",
    description: "Molten dark chocolate cake with 24k gold leaf, raspberry coulis",
    price: 22,
    category: "Desserts",
    image: dish3,
    tags: ["Vegetarian"],
    isChefRecommended: true,
  },
  {
    id: "4",
    name: "The Marmalade Old Fashioned",
    description: "House bourbon infused with orange marmalade, bitters, luxardo cherry",
    price: 18,
    category: "Cocktails",
    image: cocktail1,
    tags: ["Signature"],
    isChefRecommended: false,
  },
  {
    id: "5",
    name: "Wagyu Beef Tartare",
    description: "A5 Wagyu with quail egg, capers, shallots, and toasted brioche",
    price: 38,
    category: "Appetizers",
    image: dish1,
    tags: ["Signature"],
  },
  {
    id: "6",
    name: "Lobster Thermidor",
    description: "Whole Maine lobster with cognac cream, gruyère gratin, asparagus",
    price: 78,
    category: "Main Course",
    image: dish2,
    tags: ["Gluten-Free"],
  },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  platform: "Google" | "TripAdvisor" | "Yelp";
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Michael R.",
    rating: 5,
    text: "An absolutely transcendent dining experience. The tasting menu was a journey through flavors I've never experienced before. Chef's artistry is unmatched.",
    date: "2 weeks ago",
    platform: "Google",
  },
  {
    id: "2",
    name: "Sarah L.",
    rating: 5,
    text: "Perfect anniversary dinner. The ambiance, service, and food were all impeccable. The scallops were life-changing!",
    date: "1 month ago",
    platform: "TripAdvisor",
  },
  {
    id: "3",
    name: "David K.",
    rating: 5,
    text: "Worth every penny. This is fine dining at its absolute finest. The wine pairing was exceptional.",
    date: "3 weeks ago",
    platform: "Google",
  },
  {
    id: "4",
    name: "Elena M.",
    rating: 5,
    text: "A must-visit in San Juan. The chocolate fondant alone is worth the trip. Stunning presentation on every dish.",
    date: "1 week ago",
    platform: "Yelp",
  },
];

export const galleryImages = [
  { id: "1", category: "Food", alt: "Seared duck breast" },
  { id: "2", category: "Food", alt: "Golden scallops" },
  { id: "3", category: "Food", alt: "Chocolate fondant" },
  { id: "4", category: "Drinks", alt: "Signature cocktail" },
  { id: "5", category: "Interior", alt: "Restaurant interior" },
];
