// No 'use client' → this is an async **Server Component**
import Image from "next/image";

async function getTestimonials() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 }, // optional ISR per block
    }
  );

  const { data } = await res.json();
  return data.map((d: any) => ({ id: d.id, ...d }));
}

export default async function TestimonialsServer() {
  const items = await getTestimonials();
  if (!items.length) return null;

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 space-y-10">
        {items.map((t: any) => {
          const { id, quote, name, role } = t;
          return (
            <figure key={id} className="space-y-4 text-center">
              <blockquote className="text-xl font-semibold">
                “{quote}”
              </blockquote>
              <figcaption className="text-sm opacity-70">
                — {name}
                {role && `, ${role}`}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
