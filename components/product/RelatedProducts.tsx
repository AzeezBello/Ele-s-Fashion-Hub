import { ProductCard } from "@/components/shop/ProductCard";
import { Product } from "@/types/product";
import { products } from "@/data/products";

export function RelatedProducts({ current }: { current: Product }) {
  const related = products.filter((p) => p.id !== current.id && p.category === current.category).slice(0, 4);
  if (!related.length) return null;
  return (
    <section className="mt-20 border-t border-black/10 pt-14">
      <h2 className="font-serif text-3xl">You may also like</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        {related.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
