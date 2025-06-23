import Hero from "@/components/blocks/hero";
import { builder, Builder } from "@builder.io/react";

// Initialize Builder
builder.init(process.env.BUILDER_PUBLIC_KEY!);

// Register the Hero component
Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "headline", type: "text", defaultValue: "Hero headline" },
    { name: "subtext", type: "text", defaultValue: "A short subtitle" },
    { name: "ctaLabel", type: "text", defaultValue: "Get Started" },
    { name: "ctaHref", type: "url", defaultValue: "#" },
  ],
});
