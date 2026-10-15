import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { altText, getSeries, labelLines } from "@/lib/works";

/** Resolute (2010) also opened the previous site's home page. */
const largePaintings = getSeries("large-paintings");
const resolute = largePaintings?.works.find((w) => w.title === "Resolute");

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact Martin Mullin, painter, New York City. Write to ${site.email} for more information about the work.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact">
        <p className="mt-4 max-w-prose text-lg text-muted">For more information about the work, write to the artist.</p>
      </PageHeader>

      <div className="grid gap-12 border-t border-hairline py-12 md:grid-cols-12 md:gap-10 md:py-16">
        <section className="reveal md:col-span-7" aria-label="Email">
          <a
            href={`mailto:${site.email}`}
            className="break-words font-serif text-[1.75rem] leading-tight underline decoration-hairline underline-offset-[8px] hover:decoration-accent sm:text-4xl md:text-5xl"
          >
            {site.email}
          </a>
          <p className="mt-6 text-muted">Studio in {site.city}.</p>
          {site.phone && (
            <p className="mt-2">
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </p>
          )}
          {site.instagram && (
            <p className="mt-2">
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </p>
          )}

          <nav aria-labelledby="next-heading" className="mt-16 border-t border-hairline pt-8 md:mt-24">
            <h2 id="next-heading" className="font-serif text-2xl">
              While you are here
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              <li>
                <Link href="/work" className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
                  See all work
                </Link>
              </li>
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
            </ul>
          </nav>
        </section>

        {largePaintings && resolute && (
          <figure className="reveal md:col-span-4 md:col-start-9">
            <Link href={`/work/${largePaintings.slug}`} className="block" aria-label={`Open the ${largePaintings.title} series`}>
              <Image
                src={resolute.file}
                alt={altText(resolute, largePaintings, largePaintings.works.indexOf(resolute))}
                width={resolute.width}
                height={resolute.height}
                sizes="(max-width: 768px) 100vw, 30vw"
                className="h-auto w-full"
              />
            </Link>
            <figcaption className="mt-3 text-[0.9rem] leading-snug text-muted">
              <span className="font-serif text-[1.05rem] italic text-ink">{resolute.title}</span>
              {labelLines(resolute, largePaintings, 0).lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </figcaption>
          </figure>
        )}
      </div>

    </>
  );
}
