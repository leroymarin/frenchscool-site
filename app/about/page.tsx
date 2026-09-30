import Link from "next/link";

export const metadata = {
  title: "About Xavier",
  description:
    "Xavier is a native French teacher with 5 years online and 5 years at a university — warm, encouraging, and a bit playful.",
};

const facts = [
  {
    title: "5 years online",
    body: "Teaching French one-to-one to students around the world, over video.",
  },
  {
    title: "5 years at university",
    body: "Teaching French at Burapha University in Thailand.",
  },
  {
    title: "Qualified teacher",
    body: "TEFL-qualified, with a Master's degree and a Bachelor's behind it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m Xavier.
        </h1>
        <p className="mt-5 text-xl text-muted">
          A French teacher who meets you where you are.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-5 text-lg text-muted">
          <p>
            I&apos;ve spent the last ten years teaching French — five years
            one-to-one online, and five years at a university in Thailand. Along
            the way I&apos;ve been a camp counsellor, an animator and a tourism
            guide, which is probably why my lessons are warm, encouraging and a
            little bit playful.
          </p>
          <p>
            Here&apos;s what I believe: apps are great for vocabulary, but
            fluency comes from actually speaking. That&apos;s why every lesson
            with me is live, one-to-one, and built around real conversation —
            while always following a solid curriculum, so you&apos;re never just
            &quot;chatting.&quot;
          </p>
          <p>
            I built French&apos;s Cool to do two things at once: give you a huge
            library of free French content to learn with, and a clear path to
            real speaking practice when you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            The short version
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line p-6">
                <p className="font-semibold">{f.title}</p>
                <p className="mt-2 text-sm text-muted">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/lessons#book" className="btn btn-primary">
              Book a free 20-min trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
