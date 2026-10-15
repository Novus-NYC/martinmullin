import Link from "next/link";
import { site } from "@/lib/site";
import { series, seriesTitle } from "@/lib/works";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto grid max-w-wall gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-serif text-2xl leading-none">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm underline-offset-4 hover:underline hover:decoration-accent">
            {site.email}
          </a>
        </div>

        <nav aria-label="Footer pages" className="md:col-span-3">
          <p className="text-sm text-muted">Pages</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[{ href: "/", label: "Home" }, ...site.nav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline hover:decoration-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer series" className="md:col-span-5">
          <p className="text-sm text-muted">Series</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {series.map((s) => (
              <li key={s.slug}>
                <Link href={`/work/${s.slug}`} className="underline-offset-4 hover:underline hover:decoration-accent">
                  {seriesTitle(s)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-wall flex-col gap-2 border-t border-hairline px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All artwork copyright the artist.
        </p>
        <a
          href={site.credit.href}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 hover:text-ink hover:underline hover:decoration-accent"
        >
          {site.credit.label}
        </a>
      </div>
    </footer>
  );
}
