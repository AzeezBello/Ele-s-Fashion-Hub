"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { products, formatPrice } from "@/data/products";

export function VideoShowcase() {
  const clips = products.filter((product) => product.video);
  const [playing, setPlaying] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  if (!clips.length) return null;

  const handlePlay = (id: string) => {
    setPlaying(id);
    videoRefs.current[id]?.play();
  };

  return (
    <section className="bg-ink py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Fresh drops on video</p>
          <h2 className="mt-2 font-serif text-4xl">See it before you shop it.</h2>
        </div>
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0">
          {clips.map((product) => (
            <div key={product.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-black lg:w-auto">
              <video
                ref={(el) => { videoRefs.current[product.id] = el; }}
                src={product.video}
                poster={product.images[0]}
                muted
                loop
                playsInline
                preload="none"
                onMouseEnter={() => handlePlay(product.id)}
                onMouseLeave={() => setPlaying(null)}
                className="h-full w-full object-cover"
              />
              {playing !== product.id && (
                <button
                  onClick={() => handlePlay(product.id)}
                  aria-label={`Play video for ${product.name}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/0"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink">
                    <Play className="h-5 w-5 fill-ink" />
                  </span>
                </button>
              )}
              <Link
                href={`/product/${product.slug}`}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4"
              >
                <p className="text-sm font-medium">{product.name}</p>
                <p className="mt-1 text-xs text-white/70">{formatPrice(product.price)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
