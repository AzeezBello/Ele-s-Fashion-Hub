"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "New Arrivals", ...categories];

export function ShopFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "All";
  const sort = searchParams.get("sort") ?? "newest";

  const buildHref = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "All") params.delete(key);
      else params.set(key, value);
    });
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-4">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <Link
            key={item}
            href={buildHref({ category: item === "All" ? null : item })}
            className={cn(
              "px-3 py-2 text-xs font-semibold transition",
              activeCategory === item ? "bg-ink text-white" : "bg-white/60 hover:bg-white"
            )}
          >
            {item}
          </Link>
        ))}
      </div>
      <label className="inline-flex items-center gap-2 text-sm">
        <SlidersHorizontal className="h-4 w-4" />
        <select
          aria-label="Sort products"
          value={sort}
          onChange={(event) => router.push(buildHref({ sort: event.target.value === "newest" ? null : event.target.value }))}
          className="bg-transparent outline-none"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
}
