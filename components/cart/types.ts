import { Product } from "@/types/product";

export type CartItem = {
  key: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};
