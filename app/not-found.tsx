import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-4 text-muted">
        The page you&apos;re looking for doesn&apos;t exist — but the French
        does.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
