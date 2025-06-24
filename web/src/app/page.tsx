import BuilderPageClient from "@/components/@core/components/BuilderPageClient";
import Testimonials from "@/components/blocks/testimonials";
import { fetchTestimonials } from "@/helpers/fetchTestimonials";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY!);

export const revalidate = 60;

export default async function Home() {
  const testimonials = await fetchTestimonials();
  const content = await builder.get("page", { url: "/" }).toPromise();

  return (
    <>
      <BuilderPageClient content={content} />
      <Testimonials items={testimonials} />
    </>
  );
}
