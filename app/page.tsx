import Link from "next/link";

export const metadata = {
  title: "French's Cool — Learn French free, then speak it 1-to-1",
  description:
    "2,000+ games, videos and resources to learn French free — plus live 1-to-1 lessons with Xavier, a French teacher with 5 years of real experience.",
};

const categories = [
  { emoji: "🎮", name: "Games", count: "2,000+" },
  { emoji: "🎬", name: "Videos", count: "Watch & listen" },
  { emoji: "📚", name: "Articles", count: "Explained simply" },
  { emoji: "🧰", name: "Resources", count: "1,100+" },
];

const steps = [
  {
    n: "1",
    title: "Learn free",
    body: "Dive into the hub. Games, videos, articles — no signup, no paywall.",
  },
  {
    n: "2",
    title: "Book a free 20-min trial",
    body: "Meet Xavier, check your level, and talk about what you want.",
  },
  {
    n: "3",
    title: "Speak",
    body: "Live 1-to-1 lessons, at your pace, always on a real curriculum.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Live 1-to-1 French lessons
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Learn French free —{" "}
          <span className="text-accent">then speak it, 1-to-1.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          2,000+ games, videos, and resources for every level. And when
          you&apos;re ready to actually <em>talk</em>: live lessons with Xavier,
          a French teacher with 5 years of real experience.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/learn" className="btn btn-primary">
            Start learning free
          </Link>
          <Link href="/lessons#book" className="btn btn-secondary">
            Book a free 20-min lesson
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Apps teach you to tap. Speaking is different.
          </h2>
          <p className="mt-5 text-lg text-muted">
            You&apos;ve kept the streaks and done the flashcards — but the moment
            you have to actually <em>say</em> something, the words hide.
            That&apos;s not you failing. That&apos;s what happens without real
            speaking practice.
          </p>
        </div>
      </section>

      {/* Hub */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to learn French — free.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Browse by level and topic. No signup, no paywall.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.name}
                href="/learn"
                className="group rounded-2xl border border-line p-6 transition-colors hover:border-subtle"
              >
                <span className="text-3xl">{c.emoji}</span>
                <p className="mt-4 font-semibold">{c.name}</p>
                <p className="mt-1 text-sm text-muted">{c.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to really speak? Lessons with Xavier.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Live and 1-to-1 over Zoom. I adapt to you — your level, your goals,
            your pace — but there&apos;s always a solid curriculum underneath, so
            you&apos;re never just &quot;chatting.&quot;
          </p>
          <Link href="/lessons#book" className="btn btn-primary mt-8">
            Book a free 20-min trial
          </Link>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Real students. Real words.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <figure className="rounded-2xl border border-line p-6">
              <blockquote className="text-lg text-foreground">
                &quot;Super fun, super cool, super nice guy who makes learning
                French fun.&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                — vegangingy, Fiverr
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-line p-6">
              <blockquote className="text-lg text-foreground">
                &quot;I had a great first lesson with Xavier… very patient and
                helpful.&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                — Luis, italki
              </figcaption>
            </figure>
          </div>
          <p className="mt-8 text-center text-muted">
            5 years teaching French online and at a university.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Three easy steps.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-line p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {s.n}
                </span>
                <p className="mt-4 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure it&apos;s for you?
          </h2>
          <p className="mt-5 text-lg text-muted">
            The trial is free — no card, no commitment. Your first paid lesson is
            covered by a full refund. If it&apos;s not a fit, you&apos;ve lost 20
            minutes, not money.
          </p>
          <Link
            href="/faq"
            className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-strong"
          >
            Read the guarantee →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Start speaking French.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/lessons#book" className="btn btn-primary">
              Book your free 20-min lesson
            </Link>
            <Link href="/learn" className="btn btn-secondary">
              Or keep learning free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
