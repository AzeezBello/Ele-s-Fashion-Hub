"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";

type CartItem = {
  key: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  subtotal: number;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("ele-fashion-cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("ele-fashion-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string, color: string) => {
    const key = `${product.id}-${size}-${color}`;
    setItems((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { key, product, size, color, quantity: 1 }];
    });
  };

  const removeItem = (key: string) => setItems((current) => current.filter((item) => item.key !== key));
  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) return removeItem(key);
    setItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item));
  };

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    updateQuantity,
    subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0)
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
