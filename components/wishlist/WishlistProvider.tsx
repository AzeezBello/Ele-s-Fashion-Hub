"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";

type WishlistContextType = {
  productIds: string[];
  isWishlisted: (productId: string) => boolean;
  toggle: (product: Product) => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);
const STORAGE_KEY = "ele-fashion-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [productIds, setProductIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setProductIds(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productIds));
  }, [productIds]);

  const toggle = (product: Product) => {
    setProductIds((current) =>
      current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id]
    );
  };

  const value = useMemo(
    () => ({
      productIds,
      isWishlisted: (productId: string) => productIds.includes(productId),
      toggle
    }),
    [productIds]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
