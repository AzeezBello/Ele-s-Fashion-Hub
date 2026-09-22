import { Product } from "@/types/product";

const SHOE_SIZES = ["40", "41", "42", "43", "44", "45"];
const APPAREL_SIZES = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    id: "efh-001",
    slug: "new-balance-9060-burgundy-violet",
    name: "New Balance 9060 — Burgundy Violet",
    description: "A chunky dad-shoe silhouette in burgundy suede and grey mesh, finished with a lilac ABZORB midsole and reflective N branding.",
    price: 185000,
    compareAtPrice: 210000,
    category: "Sneakers",
    sizes: SHOE_SIZES,
    colors: ["Burgundy / Violet"],
    images: ["/product-new-balance-9060-burgundy.jpg"],
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: "efh-002",
    slug: "nike-sb-dunk-low-tightbooth",
    name: "Nike SB Dunk Low × Tightbooth",
    description: "A collaborative Dunk Low with woven cross-hatch textile paneling, black leather overlays and a Tightbooth-branded pull tab.",
    price: 145000,
    category: "Sneakers",
    sizes: SHOE_SIZES,
    colors: ["Black / White"],
    images: ["/product-nike-sb-dunk-tightbooth.webp"],
    featured: true,
    inStock: true
  },
  {
    id: "efh-003",
    slug: "moncler-tricolor-thong-slides",
    name: "Moncler Tricolor Thong Slides",
    description: "Smooth leather thong slides with Moncler's signature red, white and navy webbing strap and a moulded comfort footbed.",
    price: 98000,
    category: "Slides",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Black / Tricolor"],
    images: ["/product-moncler-thong-slides.webp"],
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: "efh-004",
    slug: "nike-sb-dunk-low-otomo-katsuhiro",
    name: "Nike SB Dunk Low — Otomo Katsuhiro Edition",
    description: "A limited-run Dunk Low in green suede with grey leather overlays, coral trim and a gum outsole, packaged in collectible graphic art box.",
    price: 165000,
    category: "Sneakers",
    sizes: SHOE_SIZES,
    colors: ["Green / Grey"],
    images: ["/product-nike-sb-dunk-otomo-katsuhiro.jpg"],
    newArrival: true,
    inStock: true
  },
  {
    id: "efh-005",
    slug: "nike-sb-dunk-low-grey-olive",
    name: "Nike SB Dunk Low — Grey Olive",
    description: "A soft grey and white base offset by an olive suede Swoosh and dusty pink heel tabs, on a tonal gum sole with a spare set of laces.",
    price: 155000,
    category: "Sneakers",
    sizes: SHOE_SIZES,
    colors: ["Grey / Olive / Pink"],
    images: ["/product-nike-sb-dunk-grey-olive.jpg"],
    inStock: true
  },
  {
    id: "efh-006",
    slug: "gxnt-oversized-graphic-tee",
    name: "GXNT Oversized Graphic Tee",
    description: "A heavyweight cotton tee cut for an oversized, dropped-shoulder fit with a bold puff-print graphic across the chest.",
    price: 32000,
    category: "Shirts",
    sizes: APPAREL_SIZES,
    colors: ["Cream"],
    images: ["/poster-gxnt-oversized-tee.jpg"],
    video: "/product-gxnt-oversized-tee.mp4",
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: "efh-007",
    slug: "ribbed-collar-knit-polo-navy",
    name: "Ribbed Collar Knit Polo — Navy",
    description: "A fine-rib knit polo in navy with a crisp contrast white collar and placket, cut for a relaxed everyday fit.",
    price: 28000,
    category: "Shirts",
    sizes: APPAREL_SIZES,
    colors: ["Navy"],
    images: ["/poster-navy-collar-knit-polo.jpg"],
    video: "/product-navy-collar-knit-polo.mp4",
    inStock: true
  },
  {
    id: "efh-008",
    slug: "ribbed-knit-polo-green-stripe",
    name: "Ribbed Knit Polo — Green Stripe",
    description: "A textured stripe-knit polo in forest green with a structured collar and quarter-button placket for a polished layer.",
    price: 29000,
    category: "Shirts",
    sizes: APPAREL_SIZES,
    colors: ["Green Stripe"],
    images: ["/poster-green-stripe-knit-polo.jpg"],
    video: "/product-green-stripe-knit-polo.mp4",
    newArrival: true,
    inStock: true
  },
  {
    id: "efh-009",
    slug: "lacoste-classic-pique-polo-yellow",
    name: "Lacoste Classic Pique Polo — Butter Yellow",
    description: "The classic Lacoste pique cotton polo in a soft butter yellow, with the embroidered crocodile logo and a regular fit.",
    price: 45000,
    category: "Shirts",
    sizes: APPAREL_SIZES,
    colors: ["Butter Yellow"],
    images: ["/poster-lacoste-yellow-polo.jpg"],
    video: "/product-lacoste-yellow-polo.mp4",
    featured: true,
    inStock: true
  }
];

export const categories = ["Sneakers", "Slides", "Shirts"] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}
