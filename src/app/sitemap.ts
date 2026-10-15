import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { series } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work", "/biography", "/cv", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly" as const })),
    ...series.map((s) => ({ url: `${site.url}/work/${s.slug}`, changeFrequency: "monthly" as const })),
  ];
}
