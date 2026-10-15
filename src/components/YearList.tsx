import type { Entry } from "@/lib/biography";

/** Year in a narrow left column, entry on the right. The museum CV format. */
export default function YearList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="flex flex-col">
      {entries.map((entry, i) => (
        <li key={i} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-hairline py-3 sm:grid-cols-[8rem_1fr]">
          <span className="text-muted">{entry.year}</span>
          <span>{entry.text}</span>
        </li>
      ))}
    </ul>
  );
}
