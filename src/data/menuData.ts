export interface MenuItem {
    name: string;
    description: string;
    price: string;
    tags?: string[];
    dietary?: string[];
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
    note?: string;
}

export const menuData = {
    tastingMenu: {
        title: "Global Tasting Menu",
        description: "A 5-course journey through global flavors, featuring sustainable, organic ingredients.",
        price: "$169",
        priceLabel: "per person",
        winePairing: "Wine Pairing: +$85 per person",
        courses: [
            {
                number: 1,
                name: "Amuse-Bouche",
                description: "Chef's daily creation from the garden.",
                dietary: []
            },
            {
                number: 2,
                name: "The White Bean Soup",
                description: "Our signature dish. Creamy white beans, scallions, black truffle oil, and pancetta dust.",
                dietary: ["Vegetarian Option"]
            },
            {
                number: 3,
                name: "Poached Lobster",
                description: "Caribbean lobster, coconut broth, lemongrass, ginger, and basil oil.",
                dietary: ["GF"]
            },
            {
                number: 4,
                name: "Braised Short Rib",
                description: "Slow-cooked for 48 hours, served with truffle polenta and red wine reduction.",
                dietary: []
            },
            {
                number: 5,
                name: "Chocolate Decadence",
                description: "Valrhona chocolate textures, sea salt, hazelnut praline.",
                dietary: ["Vegetarian"]
            }
        ]
    },
    aLaCarte: [
        {
            name: "White Bean Soup",
            description: "Truffle oil, pancetta dust (vegetarian available). The dish that started it all.",
            price: "$22",
            tags: ["Signature", "Must Try"]
        },
        {
            name: "Heirloom Tomato Salad",
            description: "Local tomatoes, burrata, basil pesto, balsamic glaze.",
            price: "$24",
            tags: ["Vegetarian", "Organic"]
        },
        {
            name: "Hand-Made Pasta",
            description: "Rabbit ragout, wild mushrooms, parmesan foam.",
            price: "$36",
            tags: ["Fresh"]
        },
        {
            name: "Local Snapper",
            description: "Pan-seared, warm quinoa salad, citrus emulsion.",
            price: "$42",
            tags: ["Sustainable"]
        },
        {
            name: "Grass-Fed Beef Tenderloin",
            description: "Root vegetables, bordelaise sauce, potato purée.",
            price: "$58",
            tags: ["Premium"]
        },
        {
            name: "Vegan Risotto",
            description: "Seasonal vegetables, nutritional yeast, fines herbes.",
            price: "$32",
            tags: ["Vegan"]
        }
    ],
    wines: [
        {
            name: "Champagne Pairing",
            description: "A curated selection of 3 champagnes to start your evening.",
            price: "$65"
        },
        {
            name: "Premium Wine Pairing",
            description: "Expertly selected wines to match each course of the tasting menu.",
            price: "$85"
        },
        {
            name: "Non-Alcoholic Pairing",
            description: "House-made juices, ferments, and teas.",
            price: "$45"
        }
    ]
};
