import Link from "next/link";

export const metadata = {
  title: "Reviews",
  description:
    "What real students say about learning French with Xavier — live, 1-to-1, patient and fun.",
};

const reviews = [
  {
    quote: "Super fun, super cool, super nice guy who makes learning French fun.",
    name: "vegangingy",
    source: "Fiverr",
  },
  {
    quote: "I had a great first lesson with Xavier… very patient and helpful.",
    name: "Luis",
    source: "italki",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Real students. Real words.
        </h1>
        <p className="mt-4 text-lg text-muted">
          No scripts, no actors — just what students said after their lessons.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col justify-between rounded-2xl border border-line p-8"
            >
              <blockquote className="text-xl leading-relaxed text-foreground">
                &quot;{r.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                — {r.name}, {r.source}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-muted">
          5 years teaching French online and at a university. Your first paid
          lesson is covered by a full refund.
        </p>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            The easiest way to find out? Try it.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The trial is free and there&apos;s no card required. Worst case, you
            lose 20 minutes.
          </p>
          <Link href="/lessons#book" className="btn btn-primary mt-8">
            Book your free 20-min lesson
          </Link>
        </div>
      </section>
    </>
  );
}
