import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

const FAQS = [
  {
    id: "authenticity",
    question: "Are your sneakers and pieces authentic?",
    answer: "Yes. Every pair and piece is sourced and checked for authenticity before it's listed. We don't sell replicas."
  },
  {
    id: "sizing",
    question: "How do I pick the right size?",
    answer: "Sizes shown on each product page are true to standard EU sizing. If you're between sizes or unsure, message us on Instagram or by phone before ordering."
  },
  {
    id: "shipping",
    question: "How long does delivery take?",
    answer: "Orders within Lagos typically arrive in 1-2 business days. Other states across Nigeria usually take 2-5 business days depending on location. Delivery fees are calculated at checkout."
  },
  {
    id: "returns",
    question: "What is your returns policy?",
    answer: "Unworn items in original packaging can be returned within 3 days of delivery. Contact us before sending anything back so we can confirm eligibility and arrange the return."
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept secure online payment at checkout, as well as bank transfer. Reach out if you'd prefer to arrange payment directly."
  }
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-10 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Support</p>
      <h1 className="mt-3 font-serif text-5xl">Frequently asked questions</h1>

      <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
        {FAQS.map((faq) => (
          <div key={faq.id} id={faq.id} className="scroll-mt-28 py-6">
            <h2 className="font-serif text-2xl">{faq.question}</h2>
            <p className="mt-3 leading-7 text-black/60">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
