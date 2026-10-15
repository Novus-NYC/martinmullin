import { type Series } from "@/lib/works";

/** "Title, years" with the years kept on one line so ranges never break at the hyphen. */
export default function SeriesName({ series: s }: { series: Series }) {
  if (!s.years || s.years === s.title) return <>{s.title}</>;
  return (
    <>
      {s.title}, <span className="whitespace-nowrap">{s.years}</span>
    </>
  );
}
