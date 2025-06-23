"use client";
import { CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

export default function Features({ items = [] as Feature[] }) {
  return (
    <section className="py-1 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-3">
        {items.map((f, i) => (
          <article
            key={i}
            className="rounded-2xl bg-white dark:bg-gray-800 shadow p-6 space-y-3"
          >
            <CheckCircle2 className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-semibold">{f.title}</h1>
            <p className="text-sm opacity-80">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
