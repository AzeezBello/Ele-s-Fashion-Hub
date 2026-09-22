import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Sneakers", image: "/product-nike-sb-dunk-otomo-katsuhiro.jpg" },
  { name: "Slides", image: "/product-moncler-thong-slides.webp" },
  { name: "Shirts", image: "/poster-lacoste-yellow-polo.jpg" }
];

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Shop by category</p>
          <h2 className="mt-2 font-serif text-4xl">Find your next favourite.</h2>
        </div>
        <Link href="/shop" className="hidden text-sm font-semibold underline underline-offset-4 sm:block">View all</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link href={`/shop?category=${category.name}`} key={category.name} className="group relative block aspect-[4/5] overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white">
              <h3 className="font-serif text-2xl">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
