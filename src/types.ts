// The shape of one product. Every component that handles products uses this type.
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}
