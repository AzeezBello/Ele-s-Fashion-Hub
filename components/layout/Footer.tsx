import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Music2, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/logo-wordmark-white.png" alt="Ele's Hub" width={220} height={68} className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Fashion for all. Deadstock sneakers, slides and streetwear curated for everyone.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> @Elesfashionhub</span>
            <span className="inline-flex items-center gap-2"><Facebook className="h-4 w-4" /> Ele&rsquo;sFashionHub</span>
            <span className="inline-flex items-center gap-2"><Music2 className="h-4 w-4" /> @elesfashion.hub</span>
            <a href="tel:+2349167593804" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> 0916 759 3804
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/50">Shop</p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <Link href="/shop">All products</Link>
            <Link href="/shop?category=Sneakers">Sneakers</Link>
            <Link href="/shop?category=Slides">Slides</Link>
            <Link href="/shop?category=Shirts">Shirts</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/50">Help</p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq#shipping">Shipping</Link>
            <Link href="/faq#returns">Returns</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col-reverse items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Ele&rsquo;s Hub. All rights reserved.</p>
        <Link href="/faq" className="hover:text-white/70">FAQ</Link>
      </div>
    </footer>
  );
}
