"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { isWishlisted, toggle } = useWishlist();
  const [added, setAdded] = useState(false);
  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = () => {
    addItem(product, product.sizes[0], product.colors[0]);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-sand">
        <Link href={`/product/${product.slug}`} className="block aspect-[4/5]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
        {!product.inStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-white/70 text-xs font-semibold uppercase tracking-wider">
            Sold out
          </span>
        )}
        {product.newArrival && (
          <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">New</span>
        )}
        <button
          onClick={() => toggle(product)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 rounded-full bg-white p-2 transition hover:scale-105"
        >
          <Heart className={cn("h-4 w-4", wishlisted && "fill-ink text-ink")} />
        </button>
      </div>
      <div className="pt-4">
        <Link href={`/product/${product.slug}`}>
          <p className="text-[11px] uppercase tracking-[0.15em] text-black/40">{product.category}</p>
          <h3 className="mt-1 text-sm font-medium">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span>{formatPrice(product.price)}</span>
          {product.compareAtPrice && <span className="text-black/35 line-through">{formatPrice(product.compareAtPrice)}</span>}
        </div>
        <button
          onClick={handleQuickAdd}
          disabled={!product.inStock}
          className={cn(
            "mt-3 w-full border py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40",
            added ? "border-ink bg-ink text-white" : "border-black/20 hover:bg-ink hover:text-white"
          )}
        >
          {!product.inStock ? "Sold out" : added ? "Added to bag" : "Quick add"}
        </button>
      </div>
    </article>
  );
}
