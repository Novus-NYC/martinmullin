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
      title: work.title ?? (work.year || work.medium || work.dimensions ? null : title),
      lines,
      status: work.status === "not available" ? "Not available" : undefined,
      secondary: work.roomView
        ? { ...work.roomView, label: "Shown in a room" }
        : undefined,
    };
  });
}
