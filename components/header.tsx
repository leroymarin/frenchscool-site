"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/lessons", label: "Lessons" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          French&apos;s Cool
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-line font-medium text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/lessons#book"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong sm:inline-flex"
          >
            Book a free lesson
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-line hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/lessons#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            >
              Book a free lesson
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
