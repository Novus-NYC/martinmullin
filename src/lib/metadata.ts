import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  /** Route path starting with "/" */
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
};

export const defaultImage = {
  url: "/art/lsabs/martin-mullin.jpg",
  width: 800,
  height: 800,
  alt: "Martin Mullin, LSABS series, 2022. Mica, gold, glass, pearl, oil, canvas, 48 by 48 inches.",
};

/** Builds per-route metadata so every page has its own canonical, og:url and image. */
export function pageMetadata({ title, description, path, image = defaultImage }: PageMeta): Metadata {
  const fullTitle = path === "/" ? `${site.name}, painter` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
