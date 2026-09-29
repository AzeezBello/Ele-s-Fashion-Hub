"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
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
              "border px-3 py-2 text-xs font-semibold transition",
              activeCategory === item ? "border-ink bg-ink text-white" : "border-black/10 bg-white/60 hover:border-ink"
            )}
          >
            {item}
          </Link>
        ))}
      </div>
      <label className="relative inline-flex items-center text-sm">
        <span className="sr-only">Sort products</span>
        <select
          value={sort}
          onChange={(event) => router.push(buildHref({ sort: event.target.value === "newest" ? null : event.target.value }))}
          className="appearance-none border border-black/10 bg-white/60 py-2 pl-3 pr-9 text-xs font-semibold outline-none transition hover:border-ink"
        >
          <option value="newest">Sort: Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4" />
      </label>
    </div>
  );
}
