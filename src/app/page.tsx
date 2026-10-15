import Image from "next/image";
import Link from "next/link";
import SeriesIndex from "@/components/SeriesIndex";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { altText, featuredWork, labelLines, series } from "@/lib/works";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

const highlighted = ["lsabs", "autumn-works-2020", "golden-books", "large-paintings"];

export default function HomePage() {
  const { series: featuredSeries, work } = featuredWork;
  const featuredIndex = featuredSeries.works.indexOf(work);
  const label = labelLines(work, featuredSeries, featuredIndex);
  const picks = highlighted.map((slug) => series.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <>
      <section className="reveal pt-14 md:pt-24">
        <h1 className="font-serif text-[3rem] leading-[0.95] tracking-tight sm:text-[4.5rem] md:text-[6rem]">{site.name}</h1>
        <p className="mt-5 max-w-prose text-lg text-muted md:text-xl">{site.tagline}</p>
      </section>

      <section className="reveal mt-14 md:mt-20" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="sr-only">
          Featured work
        </h2>
        <figure className="mx-auto max-w-[46rem]">
          <Link href={`/work/${featuredSeries.slug}`} className="block" aria-label={`Open the ${featuredSeries.title} series`}>
            <Image
              src={work.file}
              alt={altText(work, featuredSeries, featuredIndex)}
              width={work.width}
              height={work.height}
              sizes="(max-width: 768px) 100vw, 46rem"
              priority
              className="h-auto w-full"
            />
          </Link>
          <figcaption className="mt-4 flex flex-col gap-1 text-[0.9rem] leading-snug text-muted sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <span className="font-serif text-[1.05rem] italic text-ink">{featuredSeries.title} series</span>
              {label.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </div>
            <Link href={`/work/${featuredSeries.slug}`} className="shrink-0 text-ink underline-offset-4 hover:underline hover:decoration-accent">
              See the series
            </Link>
          </figcaption>
        </figure>
      </section>

      <section className="mt-24 md:mt-32" aria-labelledby="series-heading">
        <div className="reveal mb-2 flex items-baseline justify-between gap-6">
          <h2 id="series-heading" className="font-serif text-3xl md:text-4xl">
            Selected series
          </h2>
          <Link href="/work" className="shrink-0 text-muted underline-offset-4 hover:text-ink hover:underline hover:decoration-accent">
            All work, {series.length} series
          </Link>
        </div>
        <SeriesIndex items={picks} headingLevel="h3" />
      </section>

      <section className="reveal mt-20 grid gap-8 border-t border-hairline pt-12 md:mt-28 md:grid-cols-12 md:pt-16" aria-labelledby="about-heading">
        <div className="md:col-span-5">
          <h2 id="about-heading" className="font-serif text-3xl md:text-4xl">
            About the artist
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Image
            src={site.portrait.file}
            alt="Martin Mullin at work in his studio, and a portrait of the artist"
            width={site.portrait.width}
            height={site.portrait.height}
            sizes="350px"
            className="h-auto w-full max-w-[350px]"
          />
          <p className="mt-2 text-sm text-muted">{site.portrait.credit}</p>
          <p className="mt-6 max-w-prose text-lg">
            Born in Ireland, Martin Mullin lives and works in New York City. His work is held in the collections of the Brooklyn
            Museum, the Irish Museum of Modern Art, the United States Library of Congress and the New York Public Library, among
            others.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
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
