import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { formatPrice } from "@/data/products";

export function CartSummary({ subtotal }: { subtotal: number }) {
  return (
    <div className="border border-black/10 bg-white/60 p-6">
      <h2 className="font-serif text-2xl">Order summary</h2>
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between text-black/50"><span>Delivery</span><span>Confirmed on WhatsApp</span></div>
      </div>
      <div className="mt-6 border-t border-black/10 pt-5">
        <div className="flex justify-between font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
      </div>
      <Link href="/checkout" className="mt-6 flex items-center justify-center gap-2 bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-black">
        Proceed to checkout <ArrowRight className="h-4 w-4" />
      </Link>
      <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-black/55">
        <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        You&rsquo;ll send your order to us on WhatsApp — no card details are taken on this site.
      </p>
    </div>
  );
}
