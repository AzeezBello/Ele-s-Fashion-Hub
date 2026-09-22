"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { products } from "@/data/products";

export default function WishlistPage() {
  const { productIds } = useWishlist();
  const items = products.filter((product) => productIds.includes(product.id));

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm text-black/60 hover:text-black">
        <ArrowLeft className="h-4 w-4" /> Continue shopping
      </Link>
      <h1 className="font-serif text-5xl">Your wishlist</h1>
      {items.length === 0 ? (
        <div className="mt-12 border border-dashed border-black/20 p-12 text-center">
          <h2 className="font-serif text-3xl">Nothing saved yet.</h2>
          <p className="mt-3 text-black/55">Tap the heart on any product to save it here.</p>
          <Link href="/shop" className="mt-6 inline-block bg-ink px-6 py-3 text-sm font-semibold text-white">Shop now</Link>
        </div>
      ) : (
        <div className="mt-10">
          <ProductGrid products={items} />
        </div>
      )}
    </div>
  );
}
