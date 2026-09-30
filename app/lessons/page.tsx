import Link from "next/link";

export const metadata = {
  title: "Lessons with Xavier",
  description:
    "Live 1-to-1 French lessons with a native teacher. Free 20-minute trial, then simple per-lesson pricing and packs.",
};

const singles = [
  { mins: "30 min", price: "€20" },
  { mins: "45 min", price: "€30" },
  { mins: "60 min", price: "€40" },
];

const method = [
  {
    title: "Adapted to you",
    body: "Your level, your goals, your pace. Every lesson is built around what you need next.",
  },
  {
    title: "A real curriculum underneath",
    body: "Personalised, but never random. We follow a solid structure so you always know you're making progress.",
  },
  {
    title: "Native & qualified",
    body: "TEFL-qualified, 5 years teaching French online and at a university. Real conversation, corrected as you go.",
  },
];

export default function LessonsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Live · 1-to-1 · over Zoom
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          French lessons, <span className="text-accent">adapted to you.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Real conversation with a native teacher — but always on a real
          curriculum, so you&apos;re never just &quot;chatting.&quot;
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="#book" className="btn btn-primary">
            Book a free 20-min trial
          </Link>
          <Link href="#pricing" className="btn btn-secondary">
            See pricing
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            The method: personalisation within structure
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {method.map((m) => (
              <div key={m.title} className="rounded-2xl border border-line p-6">
                <p className="font-semibold">{m.title}</p>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 border-t border-line bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Simple pricing
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted">
            Start with a free trial. Then pay per lesson, or save with a pack.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-accent p-6">
              <p className="text-sm font-medium text-accent">Free trial</p>
              <p className="mt-2 text-3xl font-semibold">€0</p>
              <p className="mt-1 text-sm text-muted">
                20 minutes. Meet Xavier, check your level, no card needed.
              </p>
            </div>
            {singles.map((s) => (
              <div key={s.mins} className="rounded-2xl border border-line p-6">
                <p className="text-sm font-medium text-muted">{s.mins} lesson</p>
                <p className="mt-2 text-3xl font-semibold">{s.price}</p>
                <p className="mt-1 text-sm text-muted">
                  One-to-one, live, adapted to you.
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-muted">
            Lesson packs from{" "}
            <span className="font-semibold text-foreground">€85</span>, valid for
            12 months. Specialised tracks (DELF prep, professional French)
            available on request.
          </p>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Book your free 20-min lesson
          </h2>
          <p className="mt-4 text-lg text-muted">
            No card, no commitment. Just 20 minutes to meet Xavier, check your
            level, and see if it&apos;s a fit.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Book your free trial
          </Link>
        </div>
      </section>
    </>
  );
}
