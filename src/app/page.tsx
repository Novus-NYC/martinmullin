import Image from "next/image";
import Link from "next/link";
import SeriesWall from "@/components/SeriesWall";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { altText, featuredWork, getSeries, labelLines, series, type Series, type Work } from "@/lib/works";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

/**
 * Recent series shown on the home page. LSABS is represented by a different
 * work than the hero so the same painting never appears twice on one screen.
 */
const recent: Array<{ slug: string; workId?: string }> = [
  { slug: "lsabs", workId: "lsabs-13" },
  { slug: "autumn-works-2020" },
  { slug: "golden-books" },
  { slug: "large-paintings" },
];

export default function HomePage() {
  const { series: featuredSeries, work } = featuredWork;
  const featuredIndex = featuredSeries.works.indexOf(work);
  const label = labelLines(work, featuredSeries, featuredIndex);

  const entries = recent.flatMap(({ slug, workId }) => {
    const s = getSeries(slug);
    if (!s) return [];
    const chosen: Work | undefined = workId ? s.works.find((w) => w.id === workId) : undefined;
    return [{ series: s as Series, work: chosen }];
  });

  return (
    <>
      {/* Hero: the name and the way in on the left, a recent painting on the right, both in the first screen. */}
      <section className="grid items-end gap-10 pt-10 md:grid-cols-12 md:items-center md:gap-10 md:pt-14">
        <div className="reveal md:col-span-5 md:pb-2">
          <p className="text-muted">Painter</p>
          <h1 className="mt-2 font-serif text-[3.25rem] leading-[0.92] tracking-tight sm:text-[4.5rem] lg:text-[6.25rem]">
            Martin{" "}
            <br />
            Mullin
          </h1>
          <p className="mt-6 max-w-[26rem] text-lg leading-relaxed text-muted">
            Born in Ireland, he lives and works in New York City. Paintings and works on paper, 1989 to 2022.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center bg-ink px-6 text-[0.95rem] text-canvas transition-colors hover:bg-ink/80"
            >
              View the work
            </Link>
            <Link href="/biography" className="inline-flex min-h-12 items-center underline decoration-hairline underline-offset-[6px] hover:decoration-accent">
              Read the biography
            </Link>
          </div>
        </div>

        <figure className="reveal md:col-span-7">
          <div className="hero-frame" style={{ "--r": (work.width / work.height).toFixed(4) } as React.CSSProperties}>
            <Link href={`/work/${featuredSeries.slug}`} className="block" aria-label={`Open the ${featuredSeries.title} series`}>
              <Image
                src={work.file}
                alt={altText(work, featuredSeries, featuredIndex)}
                width={work.width}
                height={work.height}
                sizes="(max-width: 768px) 100vw, 58vw"
                quality={90}
                priority
                className="h-auto w-full"
              />
            </Link>
            <figcaption className="mt-4 flex items-baseline justify-between gap-6 text-[0.9rem] leading-snug text-muted">
              <div>
                <span className="font-serif text-[1.05rem] italic text-ink">{featuredSeries.title} series</span>
                <span className="block">{label.lines.join(". ")}</span>
              </div>
              <Link href={`/work/${featuredSeries.slug}`} className="shrink-0 text-ink underline-offset-4 hover:underline hover:decoration-accent">
                See the series
              </Link>
            </figcaption>
          </div>
        </figure>
      </section>

      <section className="mt-24 md:mt-28" aria-labelledby="series-heading">
        <div className="reveal mb-8 flex flex-col gap-2 border-b border-hairline pb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="series-heading" className="font-serif text-3xl md:text-4xl">
            Recent series
          </h2>
          <Link href="/work" className="text-muted underline-offset-4 hover:text-ink hover:underline hover:decoration-accent">
            All {series.length} series, 1989 to 2022
          </Link>
        </div>
        <SeriesWall entries={entries} headingLevel="h3" size="feature" />
      </section>

      <section
        className="reveal mt-24 grid gap-8 border-t border-hairline pt-12 md:mt-32 md:grid-cols-12 md:gap-10 md:pt-16"
        aria-labelledby="about-heading"
      >
        <figure className="md:col-span-4">
          <Image
            src={site.portrait.file}
            alt={site.portrait.alt}
            width={site.portrait.width}
            height={site.portrait.height}
            sizes="350px"
            className="h-auto w-full max-w-[350px]"
          />
          <figcaption className="mt-2 text-sm text-muted">{site.portrait.credit}</figcaption>
        </figure>
        <div className="md:col-span-7 md:col-start-6">
          <h2 id="about-heading" className="font-serif text-3xl md:text-4xl">
            About the artist
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed">
            Born in Ireland, Martin Mullin lives and works in New York City. His work is held in the collections of the Brooklyn
            Museum, the Irish Museum of Modern Art, the United States Library of Congress and the New York Public Library, among
            others.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link href="/biography" className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
                Read the biography
              </Link>
            </li>
            <li>
              <Link href="/cv" className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
                Read the CV
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
                Write to the artist
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
