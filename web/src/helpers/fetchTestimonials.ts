export async function fetchTestimonials() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=avatar`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  const { data } = await res.json();
  return data;
}
