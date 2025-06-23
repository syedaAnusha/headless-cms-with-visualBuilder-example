import Hero from "@/components/blocks/hero";
import Features from "@/components/blocks/features";
import Testimonials from "@/components/blocks/testimonials";
import Cta from "@/components/blocks/cta";
import { builder, Builder } from "@builder.io/react";

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY!);
// Register the Hero component
Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "headline", type: "text", defaultValue: "Welcome to Our Product" },
    {
      name: "subtext",
      type: "text",
      defaultValue: "Build faster with Strapi + Builder.io + Next.js",
    },
    { name: "ctaLabel", type: "text", defaultValue: "Get Started" },
    { name: "ctaHref", type: "url", defaultValue: "#" },
    {
      name: "imageUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp", "jpg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fexample-hero.webp",
    },
    { name: "imageAlt", type: "text", defaultValue: "Hero image" },
  ],
});

/* already registered Hero; add the rest */
Builder.registerComponent(Features, {
  name: "Features",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "text", defaultValue: "Feature" },
        { name: "description", type: "text", defaultValue: "Description" },
      ],
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials",
  inputs: [
    {
      name: "people",
      type: "list",
      subFields: [
        { name: "quote", type: "text" },
        { name: "name", type: "text" },
        { name: "role", type: "text" },
      ],
    },
  ],
});

Builder.registerComponent(Cta, {
  name: "Cta",
  inputs: [
    { name: "text", type: "text", defaultValue: "Ready to join us?" },
    { name: "buttonLabel", type: "text", defaultValue: "Sign Up" },
    { name: "buttonHref", type: "url", defaultValue: "#" },
  ],
});
