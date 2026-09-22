"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { cn } from "@/lib/utils";

export function ProductInfo({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const { addItem } = useCart();
  const { isWishlisted, toggle } = useWishlist();
  const [added, setAdded] = useState(false);
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="text-xs uppercase tracking-[0.2em] text-black/45">{product.category}</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">{product.name}</h1>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-lg">{formatPrice(product.price)}</span>
        {product.compareAtPrice && <span className="text-black/35 line-through">{formatPrice(product.compareAtPrice)}</span>}
      </div>
      <p className="mt-6 leading-7 text-black/60">{product.description}</p>
      {!product.inStock && (
        <p className="mt-4 inline-block bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black/60">Sold out</p>
      )}

      <div className="mt-8">
        <div className="mb-3 flex justify-between text-sm"><span className="font-semibold">Color</span><span>{color}</span></div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((item) => <button key={item} onClick={() => setColor(item)} className={`border px-4 py-2 text-sm ${color === item ? "border-ink bg-ink text-white" : "border-black/20"}`}>{item}</button>)}
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex justify-between text-sm"><span className="font-semibold">Size</span><span>{size}</span></div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((item) => <button key={item} onClick={() => setSize(item)} className={`border py-3 text-sm ${size === item ? "border-ink bg-ink text-white" : "border-black/20"}`}>{item}</button>)}
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <Button
          onClick={() => {
            addItem(product, size, color);
            setAdded(true);
            window.setTimeout(() => setAdded(false), 1500);
          }}
          disabled={!product.inStock}
          className="flex-1 bg-ink text-white hover:bg-black disabled:hover:bg-ink"
        >
          {!product.inStock ? "Sold out" : added ? "Added to bag" : "Add to bag"}
        </Button>
        <button
          onClick={() => toggle(product)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="border border-black/15 px-4 transition hover:border-ink"
        >
          <Heart className={cn("h-5 w-5", wishlisted && "fill-ink text-ink")} />
        </button>
      </div>

      <div className="mt-8 space-y-4 border-t border-black/10 pt-6 text-sm">
        <p><strong>Shipping:</strong> Delivery options are shown at checkout.</p>
        <p><strong>Returns:</strong> Eligible items can be returned according to our return policy.</p>
      </div>
    </div>
  );
}
