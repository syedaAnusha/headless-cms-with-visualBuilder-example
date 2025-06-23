"use client";
import { Button } from "@/components/ui/button";

export default function Cta({
  text = "Ready to boost your workflow?",
  buttonLabel = "Start Free Trial",
  buttonHref = "#",
}) {
  return (
    <section className="py-16 bg-indigo-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">{text}</h2>
      <Button size="lg" variant="secondary" asChild>
        <a href={buttonHref}>{buttonLabel}</a>
      </Button>
    </section>
  );
}
