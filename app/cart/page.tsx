import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CartView } from "@/components/cart/CartView";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm text-black/60 hover:text-black">
        <ArrowLeft className="h-4 w-4" /> Continue shopping
      </Link>
      <h1 className="font-serif text-5xl">Your bag</h1>
      <CartView />
    </div>
  );
}
