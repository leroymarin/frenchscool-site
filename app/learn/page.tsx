import Link from "next/link";

export const metadata = {
  title: "Learn French — free",
  description:
    "Browse games, videos, articles and resources to learn French free, by level (A1–B2) and by topic.",
};

const levels = [
  { code: "A1", name: "Beginner", desc: "Your first words and sentences." },
  { code: "A2", name: "Elementary", desc: "Everyday situations, simple chats." },
  { code: "B1", name: "Intermediate", desc: "Hold real conversations." },
  { code: "B2", name: "Upper-intermediate", desc: "Speak with confidence and nuance." },
];

const categories = [
  { emoji: "🎮", name: "Games", desc: "2,000+ games to practise vocabulary and grammar." },
  { emoji: "🎬", name: "Videos", desc: "Watch and listen to real French." },
  { emoji: "📚", name: "Articles", desc: "Clear explanations, in plain English." },
  { emoji: "🧰", name: "Resources", desc: "Posters, checklists and downloads." },
];

export default function LearnPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-20">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Learn French — <span className="text-accent">free.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A growing library of games, videos, articles and resources. Browse by
          level or topic — no signup, no paywall.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-xl font-semibold">Browse by level</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => (
            <div key={l.code} className="rounded-2xl border border-line p-6">
              <span className="text-sm font-semibold text-accent">{l.code}</span>
              <p className="mt-2 font-semibold">{l.name}</p>
              <p className="mt-1 text-sm text-muted">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-xl font-semibold">Browse by topic</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="rounded-2xl border border-line p-6">
              <span className="text-3xl">{c.emoji}</span>
              <p className="mt-4 font-semibold">{c.name}</p>
              <p className="mt-1 text-sm text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-subtle">
          The full library is being migrated from the old site — thousands of
          items are on the way.
        </p>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Done playing? Start speaking.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The hub is how you practise. Live 1-to-1 lessons are how you get
            fluent.
          </p>
          <Link href="/lessons#book" className="btn btn-primary mt-8">
            Book a free 20-min lesson
          </Link>
        </div>
      </section>
    </>
  );
}
