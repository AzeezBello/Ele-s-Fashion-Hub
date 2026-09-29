import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Checkout</p>
        <h1 className="mt-3 font-serif text-5xl">Complete your order</h1>
        <p className="mt-4 max-w-xl text-black/60">Add your details and we&rsquo;ll send your order straight to us on WhatsApp.</p>
      </div>
      <CheckoutForm />
    </div>
  );
}
