import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description:
    "Common questions about French lessons with Xavier — pricing, the free trial, rescheduling, and the guarantee.",
};

const faqs = [
  {
    q: "How does the free trial work?",
    a: "It's a free 20-minute video call. You meet Xavier, check your level, and talk about what you want. No card, no commitment.",
  },
  {
    q: "What do lessons cost?",
    a: "€20 for 30 minutes, €30 for 45 minutes, or €40 for 60 minutes. Lesson packs start from €85 and are valid for 12 months.",
  },
  {
    q: "What's your guarantee?",
    a: "Your first paid lesson is covered by a full refund. If it's not a fit, you don't pay for it.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes — rescheduling is free with more than 24 hours' notice.",
  },
  {
    q: "What if I'm a complete beginner?",
    a: "Perfect. Lessons adapt to your level, so we start wherever you are and build up.",
  },
  {
    q: "How do lessons happen?",
    a: "Live and one-to-one over Zoom. You speak, I correct and guide you, and we follow a real curriculum.",
  },
  {
    q: "Are you a qualified teacher?",
    a: "I'm TEFL-qualified with 5 years teaching French online and 5 years at a university. I'm a native speaker and a working teacher.",
  },
  {
    q: "Do I have to buy a pack?",
    a: "No. You can pay per lesson. Packs are just there to save you money if you want regular lessons.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Questions, answered.
        </h1>
        <p className="mt-4 text-lg text-muted">
          Anything else? Just{" "}
          <Link href="/contact" className="text-accent hover:text-accent-strong">
            get in touch
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h2 className="font-semibold">{f.q}</h2>
              <p className="mt-2 text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Still on the fence?
          </h2>
          <p className="mt-4 text-lg text-muted">
            The free trial makes it easy. Book one and see for yourself.
          </p>
          <Link href="/lessons#book" className="btn btn-primary mt-8">
            Book your free 20-min lesson
          </Link>
        </div>
      </section>
    </>
  );
}
