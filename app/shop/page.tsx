import { Suspense } from "react";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { products } from "@/data/products";
import { Product } from "@/types/product";

type SearchParams = { category?: string; sort?: string; q?: string };

function filterAndSort(all: Product[], { category, sort, q }: SearchParams) {
  let result = all;

  if (category === "New Arrivals") result = result.filter((product) => product.newArrival);
  else if (category && category !== "All") result = result.filter((product) => product.category === category);

  if (q) {
    const term = q.trim().toLowerCase();
    result = result.filter(
      (product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
    );
  }

  if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);

  return result;
}

export default async function ShopPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const filtered = filterAndSort(products, params);
  const heading = params.category && params.category !== "All" ? params.category : "Shop all";

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Ele&rsquo;s Hub</p>
        <h1 className="mt-3 font-serif text-5xl">{heading}</h1>
        <p className="mt-4 max-w-xl text-black/60">
          {params.q
            ? `${filtered.length} result${filtered.length === 1 ? "" : "s"} for “${params.q}”`
            : "Deadstock sneakers, slides and streetwear — curated for everyone."}
        </p>
      </div>
      <Suspense>
        <ShopFilters />
      </Suspense>
      <ProductGrid products={filtered} />
    </div>
  );
}
