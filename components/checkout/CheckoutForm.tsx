"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/data/products";
import { buildOrderMessage, buildWhatsAppUrl, generateOrderNumber } from "@/lib/whatsapp";

const inputClass = "border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black";

type PreparedOrder = { orderNumber: string; message: string; url: string };

export function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [order, setOrder] = useState<PreparedOrder | null>(null);

  if (!items.length && !order) {
    return (
      <div className="border border-dashed border-black/20 p-10 text-center">
        <p>Your bag is empty.</p>
        <Link href="/shop" className="mt-5 inline-block bg-ink px-6 py-3 text-sm font-semibold text-white">Shop now</Link>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const orderNumber = generateOrderNumber();
    const message = buildOrderMessage(
      orderNumber,
      {
        name: String(data.get("name") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim(),
        address: String(data.get("address") ?? "").trim(),
        city: String(data.get("city") ?? "").trim(),
        state: String(data.get("state") ?? "").trim(),
        note: String(data.get("note") ?? "")
      },
      items,
      subtotal
    );
    setOrder({ orderNumber, message, url: buildWhatsAppUrl(message) });
  };

  if (order) {
    return (
      <div className="max-w-2xl">
        <div className="border border-black/10 bg-white/60 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Order {order.orderNumber}</p>
          <h2 className="mt-3 font-serif text-3xl">Your order is ready to send.</h2>
          <p className="mt-4 leading-7 text-black/60">
            Tap the button below to open WhatsApp with your order pre-filled. We&rsquo;ll confirm availability,
            delivery fee and payment details with you directly in the chat.
          </p>
          <a
            href={order.url}
            target="_blank"
            rel="noreferrer"
            onClick={clearCart}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1ebe5b] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Send order on WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/checkout/success" className="underline underline-offset-4">I&rsquo;ve sent my order</Link>
            <button type="button" onClick={() => setOrder(null)} className="text-black/55 hover:text-black">Edit details</button>
          </div>
        </div>
        <details className="mt-4 border border-black/10 bg-white/40 p-5 text-sm">
          <summary className="cursor-pointer font-semibold">Preview message</summary>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-xs leading-6 text-black/70">{order.message}</pre>
        </details>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-2xl">Your details</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="name">Full name</label>
            <input id="name" name="name" required type="text" autoComplete="name" placeholder="Full name" className={inputClass} />
            <label className="sr-only" htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="Phone number" className={inputClass} />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">Delivery address</h2>
          <div className="mt-5 grid gap-4">
            <label className="sr-only" htmlFor="address">Street address</label>
            <input id="address" name="address" required autoComplete="street-address" placeholder="Street address" className={inputClass} />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="city">City</label>
              <input id="city" name="city" required autoComplete="address-level2" placeholder="City" className={inputClass} />
              <label className="sr-only" htmlFor="state">State</label>
              <select id="state" name="state" className={inputClass}>
                <option>Lagos</option><option>Abuja</option><option>Rivers</option><option>Oyo</option><option>Other</option>
              </select>
            </div>
            <label className="sr-only" htmlFor="note">Note (optional)</label>
            <textarea id="note" name="note" rows={3} placeholder="Note for us (optional) — e.g. preferred delivery time" className={inputClass} />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">How it works</h2>
          <div className="mt-5 border border-black/10 bg-white/60 p-5 text-sm leading-6 text-black/60">
            We take orders on WhatsApp. On the next step we&rsquo;ll open a chat with your order already written out;
            we then confirm stock, delivery fee and payment with you there. No card details are collected on this site.
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
        <div className="mt-6 space-y-2 border-t border-black/10 pt-5 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="flex justify-between text-black/50"><span>Delivery</span><span>Confirmed on WhatsApp</span></div>
        </div>
        <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
          <MessageCircle className="h-4 w-4" /> Continue to WhatsApp
        </button>
      </aside>
    </form>
  );
}
