import Image from "next/image";
import Link from "next/link";
import { altText, coverOf, type Series } from "@/lib/works";

type Props = {
  items: Series[];
  /** Heading level for each series title. */
  headingLevel?: "h2" | "h3";
};

/**
 * The series list: a quiet corridor. Title and years on one side, one work
 * at its true proportions on the other, sides alternating as you scroll.
 */
export default function SeriesIndex({ items, headingLevel = "h2" }: Props) {
  const Heading = headingLevel;
  return (
    <ol className="flex flex-col">
      {items.map((s, i) => {
        const cover = coverOf(s);
        const flip = i % 2 === 1;
        const portrait = cover.height >= cover.width;
        return (
          <li key={s.slug} className="reveal border-t border-hairline py-10 md:py-14">
            <Link
              href={`/work/${s.slug}`}
              className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
              aria-label={`${s.title}, ${s.works.length} works`}
            >
              <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
                <Heading className="font-serif text-3xl leading-tight group-hover:underline group-hover:decoration-accent group-hover:underline-offset-[6px] md:text-4xl">
                  {s.title}
                </Heading>
                <p className="mt-2 text-muted">
                  {s.years && <span>{s.years}</span>}
                  {s.years && <span aria-hidden="true"> &middot; </span>}
                  <span>
                    {s.works.length} {s.works.length === 1 ? "work" : "works"}
                  </span>
                </p>
                {s.subtitle && <p className="mt-3 font-serif text-lg italic text-ink/80">{s.subtitle}</p>}
              </div>
              <div className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
                <Image
                  src={cover.file}
                  alt={altText(cover, s, s.coverIndex)}
                  width={cover.width}
                  height={cover.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`h-auto w-auto max-w-full ${portrait ? "max-h-[26rem]" : "max-h-[22rem]"} ${flip ? "" : "md:ml-auto"}`}
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
