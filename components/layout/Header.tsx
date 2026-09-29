"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

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
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = href.split("?")[0];
    if (href.includes("?")) return false;
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const term = query.trim();
    router.push(term ? `/shop?q=${encodeURIComponent(term)}` : "/shop");
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <a
        href={buildWhatsAppUrl("Hi Ele's Hub! I'd like to place an order.")}
        target="_blank"
        rel="noreferrer"
        className="flex h-9 items-center justify-center gap-2 whitespace-nowrap bg-gold px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-[#e8c36a] sm:tracking-[0.18em]"
      >
        <MessageCircle className="h-3.5 w-3.5 shrink-0" />
        <span className="sm:hidden">Order on WhatsApp — tap to chat</span>
        <span className="hidden sm:inline">We take orders on WhatsApp — tap to chat</span>
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>

        <Link href="/" className="flex items-center" aria-label="Ele's Hub home">
          <Image src="/logo-wordmark-gold.png" alt="Ele's Hub" width={172} height={46} priority className="h-9 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm transition hover:text-gold",
                  active ? "text-gold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold" : "text-white/85"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)} className="transition hover:text-gold">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/wishlist" className="relative transition hover:text-gold" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {productIds.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                {productIds.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative transition hover:text-gold" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[9px] font-semibold text-ink">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 bg-ink px-6 py-4 lg:px-10">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-7xl items-center gap-3">
            <Search className="h-4 w-4 shrink-0 text-white/40" />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sneakers, slides, shirts..."
              className="w-full bg-transparent py-1 text-sm text-white outline-none placeholder:text-white/40"
            />
          </form>
        </div>
      )}

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5 text-white/85">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="hover:text-gold">
                {link.label}
              </Link>
            ))}
            <Link href="/wishlist" onClick={() => setOpen(false)} className="hover:text-gold">Wishlist</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
