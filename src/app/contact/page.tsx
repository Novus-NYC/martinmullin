import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

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

      <section className="reveal border-t border-hairline py-12 md:py-16" aria-label="Email">
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
      </section>

      <section className="reveal border-t border-hairline py-12" aria-labelledby="next-heading">
        <h2 id="next-heading" className="font-serif text-2xl">
          While you are here
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
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
      </section>
    </>
  );
}
