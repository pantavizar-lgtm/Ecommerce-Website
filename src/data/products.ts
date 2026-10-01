import type { Product } from "../types";

// Local product data used for Section A.
// Later (Section C) I'll replace this with data fetched from an API.
export const products: Product[] = [
  {
    id: 1,
    name: "Foldsack Backpack",
    price: 109.95,
    image: "https://picsum.photos/seed/p1/300/300",
    rating: 3.9,
    category: "men's clothing",
  },
  {
    id: 2,
    name: "Slim Fit Premium T-Shirt",
    price: 22.3,
    image: "https://picsum.photos/seed/p2/300/300",
    rating: 4.1,
    category: "men's clothing",
  },
  {
    id: 3,
    name: "Cotton Jacket",
    price: 55.99,
    image: "https://picsum.photos/seed/p3/300/300",
    rating: 4.7,
    category: "men's clothing",
  },
  {
    id: 4,
    name: "Casual Slim Fit Shirt",
    price: 15.99,
    image: "https://picsum.photos/seed/p4/300/300",
    rating: 2.1,
    category: "men's clothing",
  },
  {
    id: 5,
    name: "Dragon Chain Bracelet",
    price: 695,
    image: "https://picsum.photos/seed/p5/300/300",
    rating: 4.6,
    category: "jewelery",
  },
  {
    id: 6,
    name: "Gold Petite Micropave Ring",
    price: 168,
    image: "https://picsum.photos/seed/p6/300/300",
    rating: 3.9,
    category: "jewelery",
  },
];
