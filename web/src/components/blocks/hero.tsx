"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function Hero({
  headline = "Welcome to Our Product",
  subtext = "Build faster with Strapi + Builder.io + Next.js",
  ctaLabel = "Get Started",
  ctaHref = "#",
  imageUrl,
  imageAlt = "Hero Image",
}: Props) {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-violet-800 text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {headline}
          </h1>
          <p className="text-lg opacity-90">{subtext}</p>
          <Button size="lg" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>

        {/* Optional Image */}
        {imageUrl && (
          <div className="w-full max-w-md">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={500}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
