import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-white">
        <Image
          src="/product-nike-sb-dunk-otomo-katsuhiro.jpg"
          alt="Ele's Hub curated sneaker collection"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 lg:px-10 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em]">Fashion for all</p>
            <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl">
              Dress the way you feel.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Authentic deadstock sneakers, slides and streetwear essentials &mdash; curated by Ele&rsquo;s Hub for everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">
                Shop collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/shop?category=New%20Arrivals" className="border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
                New arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCategories />
      <FeaturedProducts />
      <VideoShowcase />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/product-nike-sb-dunk-tightbooth.webp"
            alt="Nike SB Dunk Low x Tightbooth"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center bg-sand p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]">The edit</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Pieces with a point of view.</h2>
          <p className="mt-5 max-w-lg leading-7 text-black/65">
            From collectible sneakers to everyday essentials, build a wardrobe that feels unmistakably yours.
          </p>
          <Link href="/shop" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-2 text-sm font-semibold">
            Explore the edit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
