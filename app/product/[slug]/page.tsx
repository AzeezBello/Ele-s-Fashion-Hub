import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs text-black/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-ink">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/shop" className="hover:text-ink">Shop</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-ink">{product.category}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-ink" aria-current="page">{product.name}</li>
        </ol>
      </nav>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
      <RelatedProducts current={product} />
    </div>
  );
}
