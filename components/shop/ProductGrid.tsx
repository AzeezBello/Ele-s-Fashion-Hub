import { ProductCard } from "./ProductCard";
import { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="border border-dashed border-black/15 py-20 text-center">
        <p className="font-serif text-2xl">No products found.</p>
        <p className="mt-2 text-sm text-black/55">Try a different category or clear your search.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {products.map((product) => <ProductCard product={product} key={product.id} />)}
    </div>
  );
}
