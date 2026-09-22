import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Secure checkout</p>
        <h1 className="mt-3 font-serif text-5xl">Complete your order</h1>
      </div>
      <CheckoutForm />
    </div>
  );
}
