import PageHeader from "@/components/PageHeader";
import SeriesIndex from "@/components/SeriesIndex";
import { pageMetadata } from "@/lib/metadata";
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
          {series.length} series, newest first. Each page shows every work at its true proportions with its label.
        </p>
      </PageHeader>
      <SeriesIndex items={series} />
    </>
  );
}
