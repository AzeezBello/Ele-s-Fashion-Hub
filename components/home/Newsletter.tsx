import Image from "next/image";
import { MessageCircle, Instagram } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 text-white lg:px-10 lg:py-24">
      <Image
        src="/logo-wordmark-white.png"
        alt=""
        aria-hidden="true"
        width={3829}
        height={1191}
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[640px] -translate-y-1/2 opacity-[0.04] lg:block"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Stay in the know</p>
        <h2 className="mt-3 font-serif text-4xl">First access, always.</h2>
        <p className="mt-4 leading-7 text-white/65">
          New pairs land weekly and the best sizes go fast. Get drop alerts straight to your WhatsApp, or follow along on Instagram.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={buildWhatsAppUrl("Hi Ele's Hub! Please add me to your drop alerts.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#e8c36a]"
          >
            <MessageCircle className="h-4 w-4" /> Get drop alerts on WhatsApp
          </a>
          <span className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold text-white/85">
            <Instagram className="h-4 w-4" /> @Elesfashionhub
          </span>
        </div>
      </div>
    </section>
  );
}
