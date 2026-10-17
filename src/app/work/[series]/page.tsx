import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SeriesName from "@/components/SeriesName";
import Wall from "@/components/Wall";
import { wallItemsFor } from "@/components/wallItems";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { altText, coverOf, getSeries, series, seriesTitle } from "@/lib/works";

type Params = { series: string };

export function generateStaticParams(): Params[] {
  return series.map((s) => ({ series: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { series: slug } = await params;
  const s = getSeries(slug);
  if (!s) return {};
  const cover = coverOf(s);
  const detail = s.statement[0] ?? s.detail ?? `${s.works.length} works.`;
  return pageMetadata({
    title: seriesTitle(s),
    description: `${s.title}${s.years ? `, ${s.years}` : ""}, by Martin Mullin. ${s.works.length} works. ${detail}`,
    path: `/work/${s.slug}`,
    image: { url: cover.file, width: cover.width, height: cover.height, alt: altText(cover, s, s.coverIndex) },
  });
}

export default async function SeriesPage({ params }: { params: Promise<Params> }) {
  const { series: slug } = await params;
  const s = getSeries(slug);
  if (!s) notFound();

  const position = series.indexOf(s);
  const previous = series[position - 1];
  const next = series[position + 1];
  const items = wallItemsFor(s);

  return (
    <>
      <PageHeader title={s.title} kicker={s.years}>
        {s.subtitle && <p className="mt-3 font-serif text-2xl italic text-ink/80">{s.subtitle}</p>}
        {s.statement.length > 0 && (
          <div className="mt-6 max-w-prose text-lg leading-relaxed">
            {s.statement.map((paragraph, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {s.detail && <p className="mt-5 text-muted">{s.detail}</p>}
        <p className="mt-5 text-sm text-muted">
          {s.works.length} {s.works.length === 1 ? "work" : "works"}. Select a work to view it larger.
        </p>
      </PageHeader>

      <Wall items={items} label={`${s.title} works`} priorityCount={1} seriesTitle={s.title} inquireEmail={site.email} />

      <nav aria-label="Other series" className="mt-20 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-3 sm:items-baseline">
        <div className={previous ? "" : "hidden sm:block"}>
          {previous && (
            <>
              <p className="text-sm text-muted">Newer</p>
              <Link href={`/work/${previous.slug}`} className="font-serif text-2xl underline-offset-[6px] hover:underline hover:decoration-accent">
                <SeriesName series={previous} />
              </Link>
            </>
          )}
        </div>
        <div className={`sm:text-right ${next ? "" : "hidden sm:block"} sm:order-3`}>
          {next && (
            <>
              <p className="text-sm text-muted">Earlier</p>
              <Link href={`/work/${next.slug}`} className="font-serif text-2xl underline-offset-[6px] hover:underline hover:decoration-accent">
                <SeriesName series={next} />
              </Link>
            </>
          )}
        </div>
        <div className="sm:order-2 sm:text-center">
          <Link href="/work" className="inline-flex min-h-11 items-center text-muted underline-offset-4 hover:text-ink hover:underline hover:decoration-accent">
            All {series.length} series
          </Link>
        </div>
      </nav>
    </>
  );
}
