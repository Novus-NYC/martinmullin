import type { WallItem } from "@/components/Wall";
import { altText, labelLines, type Series } from "@/lib/works";

/** Turns a series' works into plain wall items for the client component. */
export function wallItemsFor(s: Series): WallItem[] {
  return s.works.map((work, i) => {
    const { title, lines } = labelLines(work, s, i);
    return {
      id: work.id,
      file: work.file,
      width: work.width,
      height: work.height,
      alt: altText(work, s, i),
      // `title` from labelLines falls back to "Series, n of N" for untitled works. That is a
      // locator, not a title, so it is used for link names and inquiries but never set in italic.
      name: title ?? undefined,
      title: work.title,
      lines,
      status: work.status === "not available" ? "Not available" : undefined,
      secondary: work.roomView ? { ...work.roomView, label: "Shown in a room" } : undefined,
    };
  });
}
