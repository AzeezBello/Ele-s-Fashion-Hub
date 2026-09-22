import Link from "next/link";
import { formatPrice } from "@/data/products";

export function CartSummary({ subtotal }: { subtotal: number }) {
  return (
    <div className="border border-black/10 bg-white/60 p-6">
      <h2 className="font-serif text-2xl">Order summary</h2>
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between text-black/50"><span>Shipping</span><span>Calculated at checkout</span></div>
      </div>
      <div className="mt-6 border-t border-black/10 pt-5">
        <div className="flex justify-between font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
      </div>
      <Link href="/checkout" className="mt-6 block bg-ink px-5 py-3 text-center text-sm font-semibold text-white">Proceed to checkout</Link>
    </div>
  );
}
