"use client";

import { BuilderComponent } from "@builder.io/react";

type Props = {
  content: any;
};

export default function BuilderPageClient({ content }: Props) {
  return <BuilderComponent model="page" content={content} />;
}
