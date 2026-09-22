import type { Metadata } from "next";
import { Instagram, Facebook, Music2, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="mb-10 max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">Get in touch</p>
        <h1 className="mt-3 font-serif text-5xl">We&rsquo;d love to hear from you.</h1>
        <p className="mt-4 leading-7 text-black/60">
          Questions about sizing, an order, or a specific pair you&rsquo;re after? Message us directly and
          we&rsquo;ll get back to you as soon as we can.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="contact-name">Your name</label>
            <input id="contact-name" required placeholder="Your name" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
            <label className="sr-only" htmlFor="contact-email">Email address</label>
            <input id="contact-email" required type="email" placeholder="Email address" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
          <label className="sr-only" htmlFor="contact-message">How can we help?</label>
          <textarea id="contact-message" required rows={5} placeholder="How can we help?" className="border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          <button type="submit" className="w-fit bg-ink px-6 py-3 text-sm font-semibold text-white">Send message</button>
        </form>

        <aside className="h-fit border border-black/10 bg-white/60 p-6">
          <h2 className="font-serif text-2xl">Reach us directly</h2>
          <div className="mt-6 space-y-4 text-sm">
            <a href="tel:+2349167593804" className="flex items-center gap-3 hover:text-black/70">
              <Phone className="h-4 w-4" /> 0916 759 3804
            </a>
            <p className="flex items-center gap-3"><Instagram className="h-4 w-4" /> @Elesfashionhub</p>
            <p className="flex items-center gap-3"><Music2 className="h-4 w-4" /> @elesfashion.hub</p>
            <p className="flex items-center gap-3"><Facebook className="h-4 w-4" /> Ele&rsquo;sFashionHub</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
