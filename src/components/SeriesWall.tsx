import Image from "next/image";
import Link from "next/link";
import { altText, coverOf, type Series, type Work } from "@/lib/works";

type Entry = {
  series: Series;
  /** Use a different work than the series cover (for example to avoid repeating the hero). */
  work?: Work;
};

type Props = {
  entries: Entry[];
  /** Heading level for each series title. */
  headingLevel?: "h2" | "h3";
  /** Row height on wide screens. Larger for short lists, smaller for the full index. */
  size?: "index" | "feature";
};

/**
 * Series covers hung on one line, like a salon wall. Every cover keeps its
 * true proportions (the justified-row logic in globals.css gives each row a
 * shared height), so nothing is cropped and the index stays compact.
 */
export default function SeriesWall({ entries, headingLevel = "h2", size = "index" }: Props) {
  const Heading = headingLevel;
  return (
    <ol className={`wall wall-index ${size === "feature" ? "wall-feature" : ""}`}>
      {entries.map(({ series: s, work }) => {
        const cover = work ?? coverOf(s);
        const coverIndex = s.works.indexOf(cover);
        return (
          <li key={s.slug} className="reveal" style={{ "--r": (cover.width / cover.height).toFixed(4) } as React.CSSProperties}>
            <Link href={`/work/${s.slug}`} className="group block">
              <Image
                quality={90}
                src={cover.file}
                alt={altText(cover, s, coverIndex)}
                width={cover.width}
                height={cover.height}
                sizes={size === "feature" ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"}
              />
              <Heading className="mt-3 font-serif text-[1.3rem] leading-tight underline-offset-[5px] group-hover:underline group-hover:decoration-accent md:text-[1.5rem]">
                {s.title}
              </Heading>
              <p className="mt-1 text-[0.9rem] text-muted">
                {s.years && s.years !== s.title && <span className="whitespace-nowrap">{s.years} </span>}
                <span className="whitespace-nowrap">
                  {s.years && s.years !== s.title && <span aria-hidden="true">&middot; </span>}
                  {s.works.length} {s.works.length === 1 ? "work" : "works"}
                </span>
              </p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
