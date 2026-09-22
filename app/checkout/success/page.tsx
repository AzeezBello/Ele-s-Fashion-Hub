import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <CheckCircle2 className="h-14 w-14" />
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em]">Order received</p>
      <h1 className="mt-3 font-serif text-5xl">Thank you for shopping with us.</h1>
      <p className="mt-5 leading-7 text-black/60">
        Your order has been placed successfully. A confirmation will be sent to your email once payment is confirmed.
      </p>
      <Link href="/shop" className="mt-8 bg-ink px-7 py-3 text-sm font-semibold text-white">Continue shopping</Link>
    </div>
  );
}
