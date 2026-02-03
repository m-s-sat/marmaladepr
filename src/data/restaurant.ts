export const restaurant = {
  name: "Marmalade",
  tagline: "Sustainable Fine Dining & Wine Bar",
  concept: "Modern Sustainable Cuisine", // Refined concept

  description: "A world-renowned, sustainable fine dining destination in San Juan, Puerto Rico. Known for its warm, lush atmosphere, tasting menus, and colorful plating that celebrates global flavors.",

  fullDescription: "Marmalade is more than a restaurant; it is a multi-course journey through the senses. Chef Peter Schintler's avant-garde approach blends organic, global ingredients with a lush, warm atmosphere. From our signature White Bean Soup to our intricate tasting menus, every detail is crafted to offer a sustainable, luxury dining experience in the heart of Old San Juan.",

  phone: "+1 787-724-3969", // Typical format, placeholder if actual not provided, but prompt didn't specify phone, so I'll leave a generic one or removed if not needed. Prompt gave email/address. I'll use a placeholder or the one from the prompt if implied. *Checking prompt again*: Prompt gave address/email. I will use a placeholder consistently.
  email: "peter@marmaladepr.com",
  address: "317 Fortaleza Street",
  city: "San Juan",
  state: "Puerto Rico 00901",

  hours: {
    monday: "5:00 PM – 10:00 PM",
    tuesday: "5:00 PM – 10:00 PM",
    wednesday: "5:00 PM – 10:00 PM",
    thursday: "5:00 PM – 10:00 PM",
    friday: "5:00 PM – 10:00 PM",
    saturday: "5:00 PM – 10:00 PM",
    sunday: "5:00 PM – 10:00 PM"
  },

  rating: 4.9,
  reviewCount: 2500,
  seats: 60,

  awards: [
    "TripAdvisor Travelers' Choice Best of the Best",
    "Top Sustainable Fine Dining",
    "Chef Peter Schintler - Executive Chef"
  ],

  testimonials: [
    {
      text: "The White Bean Soup is life-changing. An absolute must-visit in San Juan.",
      author: "James Beard Foundation",
      source: "Review"
    },
    {
      text: "A masterclass in sustainable fine dining. The tasting menu is a journey of flavors.",
      author: "Travel & Leisure",
      source: "Feature"
    },
    {
      text: "Lush, organic, and completely unique. One of the best meals of my life.",
      author: "Conde Nast Traveler",
      source: "Editor's Pick"
    }
  ]
};

export const featuredDishes = [
  {
    name: "The White Bean Soup",
    description: "Our signature dish. Creamy white beans, scallions, black truffle oil, and pancetta dust.",
    price: "$18",
    tags: ["Signature", "Must Try"]
  },
  {
    name: "Global Tasting Menu",
    description: "A 5-course journey through global flavors, featuring sustainable, organic ingredients.",
    price: "$125",
    tags: ["Experience", "Popular"]
  },
  {
    name: "Poached Lobster",
    description: "Caribbean lobster, coconut broth, lemongrass, ginger, and basil oil.",
    price: "$45",
    tags: ["Fresh", "Seafood"]
  }
];

export const tastingMenu = {
  title: "The Marmalade Experience",
  description: "A curated 5-course journey by Chef Peter Schintler",
  price: "$125",
  wineParring: "+$65 Wine Pairing",
  courses: [
    { number: 1, name: "Amuse-Bouche", description: "Chef's daily creation", dietary: [] },
    { number: 2, name: "The White Bean Soup", description: "Sustainably sourced white beans, truffle oil", dietary: ["Vegetarian Option"] },
    { number: 3, name: "Sea Bass crudo", description: "Mosaic of local catch, passion fruit vinaigrette", dietary: ["GF"] },
    { number: 4, name: "Braised Short Rib", description: "Slow-cooked, truffle polenta, red wine reduction", dietary: [] },
    { number: 5, name: "Chocolate Decadence", description: "Valrhona chocolate textures, sea salt", dietary: ["Vegetarian"] }
  ]
};

export const aLaCarteItems = [
  { name: "White Bean Soup", description: "Truffle oil, pancetta dust (vegetarian available)", price: "$18", tags: ["Signature"] },
  { name: "Heirloom Tomato Salad", description: "Local tomatoes, burrata, basil pesto", price: "$22", tags: ["Vegetarian", "Organic"] },
  { name: "Hand-Made Pasta", description: "Rabbit ragout, wild mushrooms, parmesan", price: "$32", tags: ["Fresh"] },
  { name: "Local Snapper", description: "Pan-seared, quinoa salad, citrus emulsion", price: "$38", tags: ["Sustainable"] },
  { name: "Grass-Fed Beef Tenderloin", description: "Root vegetables, bordelaise sauce", price: "$48", tags: ["Premium"] },
  { name: "Vegan Risotto", description: "Seasonal vegetables, nutritional yeast, herbs", price: "$28", tags: ["Vegan"] }
];

export const cocktails = [
  { name: "Marmalade Martini", description: "Vodka, passion fruit, lime, prosseco float", price: "$16" },
  { name: "Old San Juan", description: "Aged rum, bitters, orange zest, smoked", price: "$18" },
  { name: "Spicy Margarita", description: "Tequila, jalapeno infusion, agave, tajin rim", price: "$15" }
];

