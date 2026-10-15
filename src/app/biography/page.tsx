import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import YearList from "@/components/YearList";
import { biography } from "@/lib/biography";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Biography",
  description:
    "Martin Mullin was born in Ireland and lives and works in New York City. Education, solo and group exhibitions from 1979 to 2020, collections, professional activities and bibliography.",
  path: "/biography",
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="reveal grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <h2 id={id} className="font-serif text-2xl md:col-span-3 md:text-3xl">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}

export default function BiographyPage() {
  return (
    <>
      <PageHeader title="Biography">
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Image
              src={site.portrait.file}
              alt="Martin Mullin at work in his studio, and a portrait of the artist"
              width={site.portrait.width}
              height={site.portrait.height}
              sizes="350px"
              priority
              className="h-auto w-full max-w-[350px]"
            />
            <p className="mt-2 text-sm text-muted">{site.portrait.credit}</p>
          </div>
          <dl className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-3 self-start md:col-span-7 sm:grid-cols-[8rem_1fr]">
            <dt className="text-muted">Born</dt>
            <dd>{biography.born}</dd>
            <dt className="text-muted">Lives and works</dt>
            <dd>{biography.livesAndWorks}</dd>
            <dt className="text-muted">Education</dt>
            <dd>
              <ul>
                {biography.education.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
        <p className="mt-8">
          <a
            href={site.documents.biography}
            className="underline decoration-hairline underline-offset-4 hover:decoration-accent"
          >
            Download the biography (PDF)
          </a>
        </p>
      </PageHeader>

      <div className="border-t border-hairline">
        <Section id="solo" title="Solo exhibitions">
          <YearList entries={biography.soloExhibitions} />
        </Section>
        <Section id="group" title="Group exhibitions">
          <YearList entries={biography.groupExhibitions} />
        </Section>
        <Section id="collections" title="Collections">
          <ul className="flex flex-col">
            {biography.collections.map((line) => (
              <li key={line} className="border-t border-hairline py-3">
                {line}
              </li>
            ))}
          </ul>
        </Section>
        <Section id="activities" title="Professionally related activities">
          <YearList entries={biography.activities} />
        </Section>
        <Section id="bibliography" title="Bibliography">
          <ul className="flex flex-col">
            {biography.bibliography.map((line) => (
              <li key={line} className="border-t border-hairline py-3">
                {line}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
