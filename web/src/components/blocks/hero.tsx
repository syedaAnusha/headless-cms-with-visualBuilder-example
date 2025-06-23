"use client";
import { Button } from "@/components/ui/button";

export default function Hero({
  headline = "Welcome to Our Product",
  subtext = "Build faster with Strapi + Builder.io + Next.js",
  ctaLabel = "Get Started",
  ctaHref = "#",
}) {
  return (
    <section className="relative flex items-center justify-center h-[70vh] bg-gradient-to-br from-indigo-600 to-violet-800 text-white">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          {headline}
        </h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">{subtext}</p>
        <Button size="lg" asChild>
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </section>
  );
}
