export const metadata = {
  title: "Contact",
  description: "Book a free trial lesson or get in touch with Xavier.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Say bonjour.
        </h1>
        <p className="mt-4 text-lg text-muted">
          The quickest way to start is a free 20-minute trial lesson. Or drop me
          a message with any questions.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-2xl border border-line bg-card p-8 text-center">
          <h2 className="text-xl font-semibold">Book your free trial</h2>
          <p className="mt-2 text-muted">
            Booking goes through my calendar. For now, email me and I&apos;ll
            send you times that work.
          </p>
          <a href="mailto:hello@learnfrench.co" className="btn btn-primary mt-6">
            hello@learnfrench.co
          </a>
          <p className="mt-6 text-sm text-subtle">
            Online booking is coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
