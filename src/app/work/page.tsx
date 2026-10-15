import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SeriesWall from "@/components/SeriesWall";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { series, totalWorks } from "@/lib/works";

export const metadata = pageMetadata({
  title: "Work",
  description: `All ${series.length} series by Martin Mullin, from the Fuller Building Paintings of 1989 to LSABS, 2020 to 2022. ${totalWorks} works, labeled with title, year, medium and dimensions where known.`,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work" kicker="1989 to 2022">
        <p className="mt-4 max-w-prose text-lg text-muted">
          {series.length} series and {totalWorks} works, newest first. Choose a series to see every work at its true
          proportions, with its label.
        </p>
      </PageHeader>

      <SeriesWall entries={series.map((s) => ({ series: s }))} />

      <aside className="reveal mt-20 flex flex-col gap-3 border-t border-hairline pt-8 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-muted">
          Interested in a work? Write to the artist, or{" "}
          <Link href="/biography" className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-accent">
            read the biography
          </Link>
          .
        </p>
        <a
          href={`mailto:${site.email}`}
          className="font-serif text-2xl underline decoration-hairline underline-offset-[6px] hover:decoration-accent"
        >
          {site.email}
        </a>
      </aside>
    </>
  );
}
