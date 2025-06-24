"use client";

import Image from "next/image";

type StrapiFile = {
  url: string;
  formats?: {
    thumbnail?: { url: string };
  };
};

type Item = {
  id: number;
  quote: string;
  name: string;
  role?: string;
  avatar?: StrapiFile;
};

export default function Testimonials({ items = [] }: { items: Item[] }) {
  console.log("Testimonials items:", items);
  if (!items.length) return null;

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 space-y-10">
        {items.map((t) => {
          const { id, quote, name, role, avatar } = t;
          const imgUrl = avatar?.formats?.thumbnail?.url || avatar?.url || "";

          return (
            <figure key={id} className="space-y-4 text-center">
              {imgUrl && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imgUrl}`}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded-full mx-auto shadow"
                />
              )}
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
