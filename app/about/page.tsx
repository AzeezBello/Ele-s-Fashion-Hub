import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">About us</p>
        <h1 className="mt-3 font-serif text-5xl">Fashion for all.</h1>
        <p className="mt-6 leading-7 text-black/65">
          Ele&rsquo;s Hub started as a small sneaker and streetwear page, sourcing authentic deadstock pairs and
          quality pieces for people who love fashion but don&rsquo;t want to compromise on the real thing. Today
          we curate sneakers, slides and everyday shirts &mdash; every item shot and shipped by us, no
          middlemen.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/product-nike-sb-dunk-otomo-katsuhiro.jpg"
            alt="Curated sneakers at Ele's Hub"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl">What we stand for</h2>
          <ul className="mt-6 space-y-4 text-black/65">
            <li><strong className="text-ink">Authenticity first.</strong> Every pair and piece is checked before it&rsquo;s listed.</li>
            <li><strong className="text-ink">Fashion for everyone.</strong> Sizes and styles for every kind of customer.</li>
            <li><strong className="text-ink">Real people, real service.</strong> Reach us directly on Instagram, TikTok or by phone.</li>
          </ul>
          <Link href="/shop" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-2 text-sm font-semibold">
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
