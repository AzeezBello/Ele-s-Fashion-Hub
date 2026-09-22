"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "./CartProvider";
import { CartSummary } from "./CartSummary";
import { formatPrice } from "@/data/products";

export function CartView() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (!items.length) {
    return (
      <div className="mt-12 border border-dashed border-black/20 p-12 text-center">
        <h2 className="font-serif text-3xl">Your bag is empty.</h2>
        <p className="mt-3 text-black/55">Discover something new from our latest collection.</p>
        <Link href="/shop" className="mt-6 inline-block bg-ink px-6 py-3 text-sm font-semibold text-white">Shop now</Link>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.key} className="flex gap-4 border-b border-black/10 pb-5">
            <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-sand">
              <Image src={item.product.images[0]} alt={item.product.name} fill sizes="96px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between gap-4">
                <div>
                  <Link href={`/product/${item.product.slug}`} className="font-medium">{item.product.name}</Link>
                  <p className="mt-1 text-xs text-black/50">{item.color} / {item.size}</p>
                </div>
                <span className="text-sm">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
              <div className="mt-auto flex items-center justify-between pt-5">
                <div className="flex items-center border border-black/15">
                  <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="p-2"><Minus className="h-3 w-3" /></button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="p-2"><Plus className="h-3 w-3" /></button>
                </div>
                <button onClick={() => removeItem(item.key)} className="text-black/50 hover:text-black"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartSummary subtotal={subtotal} />
    </div>
  );
}
