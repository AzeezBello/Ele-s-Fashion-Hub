"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=New%20Arrivals", label: "New Arrivals" },
  { href: "/about", label: "About" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { totalItems } = useCart();
  const { productIds } = useWishlist();
  const router = useRouter();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const term = query.trim();
    router.push(term ? `/shop?q=${encodeURIComponent(term)}` : "/shop");
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ee]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>

        <Link href="/" className="flex items-center" aria-label="Ele's Hub home">
          <Image src="/logo-wordmark-gold.png" alt="Ele's Hub" width={172} height={46} priority className="h-9 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="h-5 w-5" />
          </button>
          <Link href="/wishlist" className="relative" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {productIds.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[9px] text-white">
                {productIds.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[9px] text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-black/10 bg-[#f7f3ee] px-6 py-4 lg:px-10">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-7xl items-center gap-3">
            <Search className="h-4 w-4 shrink-0 text-black/40" />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sneakers, slides, shirts..."
              className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-black/40"
            />
          </form>
        </div>
      )}

      {open && (
        <div className="border-t border-black/10 bg-[#f7f3ee] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/wishlist" onClick={() => setOpen(false)}>Wishlist</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
