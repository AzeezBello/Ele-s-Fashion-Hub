import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);
  return (
    <section className="bg-white/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Curated for you</p>
            <h2 className="mt-2 font-serif text-4xl">Featured pieces</h2>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-sm font-semibold sm:flex">Shop all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {featured.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    </section>
  );
}
