"use client";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials({ people = [] as Testimonial[] }) {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 space-y-10">
        {people.map((p, i) => (
          <figure key={i} className="space-y-4">
            <Quote className="w-8 h-8 text-indigo-500" />
            <blockquote className="text-2xl font-medium">{p.quote}</blockquote>
            <figcaption className="text-sm opacity-70">
              — {p.name}, {p.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
