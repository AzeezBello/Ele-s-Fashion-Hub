"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";

export function CheckoutForm() {
  const { items, subtotal } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (!items.length && !submitted) {
    return (
      <div className="border border-dashed border-black/20 p-10 text-center">
        <p>Your bag is empty.</p>
        <Link href="/shop" className="mt-5 inline-block bg-ink px-6 py-3 text-sm font-semibold text-white">Shop now</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl border border-black/10 bg-white/50 p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">Demo checkout</p>
        <h2 className="mt-3 font-serif text-3xl">Payment integration ready.</h2>
        <p className="mt-4 leading-7 text-black/60">This storefront currently uses a UI checkout. Connect Paystack or Flutterwave in the payment action before accepting live payments.</p>
        <Link href="/checkout/success" className="mt-6 inline-block bg-ink px-6 py-3 text-sm font-semibold text-white">View confirmation</Link>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-2xl">Contact information</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="first-name">First name</label>
            <input id="first-name" required type="text" placeholder="First name" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
            <label className="sr-only" htmlFor="last-name">Last name</label>
            <input id="last-name" required type="text" placeholder="Last name" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" required type="email" placeholder="Email address" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:col-span-2" />
            <label className="sr-only" htmlFor="phone">Phone number</label>
            <input id="phone" required type="tel" placeholder="Phone number" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:col-span-2" />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">Delivery address</h2>
          <div className="mt-5 grid gap-4">
            <label className="sr-only" htmlFor="street-address">Street address</label>
            <input id="street-address" required placeholder="Street address" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="city">City</label>
              <input id="city" required placeholder="City" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
              <label className="sr-only" htmlFor="state">State</label>
              <select id="state" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none">
                <option>Lagos</option><option>Abuja</option><option>Rivers</option><option>Oyo</option><option>Other</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="delivery-notes">Delivery notes (optional)</label>
            <input id="delivery-notes" placeholder="Delivery notes (optional)" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">Payment</h2>
          <div className="mt-5 border border-black/10 bg-white/60 p-5 text-sm text-black/60">
            Secure online payment will be handled by the configured payment provider.
          </div>
        </section>
      </div>

      <aside className="h-fit border border-black/10 bg-white/60 p-6">
        <h2 className="font-serif text-2xl">Your order</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.key} className="flex gap-3">
              <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-sand">
                <Image src={item.product.images[0]} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <div className="flex-1 text-sm"><p>{item.product.name}</p><p className="text-xs text-black/50">{item.size} / {item.color} × {item.quantity}</p></div>
              <span className="text-sm">{formatPrice(item.product.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-black/10 pt-5">
          <div className="flex justify-between font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
        </div>
        <button type="submit" className="mt-6 w-full bg-ink px-5 py-3 text-sm font-semibold text-white">Place order</button>
      </aside>
    </form>
  );
}
