export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  /** Optional short clip shown in the product gallery, in addition to images[0] as its poster. */
  video?: string;
  featured?: boolean;
  newArrival?: boolean;
  inStock: boolean;
};
