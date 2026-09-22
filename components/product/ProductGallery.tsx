"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

type Slide = { type: "image"; src: string } | { type: "video"; src: string; poster: string };

export function ProductGallery({ product }: { product: Product }) {
  const slides: Slide[] = [
    ...product.images.map((src): Slide => ({ type: "image", src })),
    ...(product.video ? [{ type: "video", src: product.video, poster: product.images[0] } as Slide] : [])
  ];
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            className="h-full w-full object-cover"
            controls
            playsInline
            loop
            muted
            autoPlay
          />
        ) : (
          <Image src={current.src} alt={product.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
        )}
      </div>
      {slides.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActive(index)}
              aria-label={slide.type === "video" ? "Play video" : `View image ${index + 1}`}
              className={cn("relative aspect-square overflow-hidden bg-sand", active === index && "ring-2 ring-ink")}
            >
              <Image src={slide.type === "video" ? slide.poster : slide.src} alt="" fill sizes="120px" className="object-cover" />
              {slide.type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <Play className="h-4 w-4 fill-white text-white" />
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
