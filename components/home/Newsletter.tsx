export function Newsletter() {
  return (
    <section className="bg-sand px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em]">Stay in the know</p>
        <h2 className="mt-3 font-serif text-4xl">First access, always.</h2>
        <p className="mt-4 leading-7 text-black/60">Sign up for new drops, private offers and style inspiration.</p>
        <form className="mx-auto mt-8 flex max-w-lg gap-2">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            className="min-w-0 flex-1 border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black"
          />
          <button type="submit" className="bg-ink px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
