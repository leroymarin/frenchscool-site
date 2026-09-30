import Link from "next/link";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "Learning hub" },
      { href: "/lessons", label: "Lessons" },
      { href: "/lessons#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Xavier" },
      { href: "/reviews", label: "Reviews" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-semibold">French&apos;s Cool</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Learn French free — then speak it, 1-to-1, with Xavier.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} French&apos;s Cool. All rights reserved.</p>
          <p>Live 1-to-1 French lessons with a native teacher.</p>
        </div>
      </div>
    </footer>
  );
}
