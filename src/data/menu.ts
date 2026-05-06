import chicken_satay from "@/assets/dish-chickensatay.jpg";
import noodles from "@/assets/dish-noodles.jpg";
import rice from "@/assets/dish-rice.jpg";
import crispy_chicken from "@/assets/dish-crispychicken.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Chicken Satay", description: "Grilled skewers with rich peanut sauce.", price: "12.95", image: chicken_satay, popular: true },
      { name: "Crispy Chicken Larb", description: "Crispy chicken tossed with fresh herbs, lime, and Thai chili.", price: "13.95", image: crispy_chicken, popular: true },
      { name: "Crab Rangoon", description: "Crispy wontons stuffed with cream cheese and crab, served with sweet & sour.", price: "8.95" },
      { name: "Fresh Spring Rolls", description: "Rice paper rolls with shrimp, vermicelli, herbs, and peanut sauce.", price: "9.50" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Pad Thai", description: "Sweet-savory noodles with crushed peanuts and lime.", price: "16.95", image: noodles, popular: true },
      { name: "Crab Fried Rice", description: "Jumbo lump crab folded into fragrant rice.", price: "15.95", image: rice, popular: true },
      { name: "Pad Thai", description: "Classic stir-fried rice noodles, tamarind sauce, peanuts, bean sprouts, and lime.", price: "15.50" },
      { name: "Basil Fried Rice", description: "Jasmine rice wok-fried with Thai basil, chili, garlic, and bell peppers.", price: "14.95" },
      { name: "Green Curry", description: "House-made green curry with bamboo, eggplant, basil, and coconut milk.", price: "16.50" },
      { name: "Massaman Curry", description: "Slow-simmered curry with potato, peanuts, and tender protein.", price: "17.50" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Thai Iced Tea", description: "Bold black tea with sweetened condensed milk over ice.", price: "4.95" },
      { name: "Thai Iced Coffee", description: "Strong cold brew with cardamom and cream.", price: "5.50" },
      { name: "Fresh Lemongrass", description: "Chilled lemongrass infusion with lime and honey.", price: "4.50" },
      { name: "Coconut Water", description: "Pure young coconut water served cold.", price: "5.00" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Mango Sticky Rice", description: "Warm sticky rice with sweet coconut cream and ripe mango.", price: "8.95" },
      { name: "Fried Banana", description: "Crispy battered banana drizzled with honey and sesame.", price: "6.95" },
    ],
  },
];
