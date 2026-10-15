import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Wall, { type WallItem } from "@/components/Wall";
import YearList from "@/components/YearList";
import { catalogs, matisseCatalog, pressLinks, publicity, referenceLetters, resume, resumeEducation } from "@/lib/cv";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "CV",
  description:
    "Martin Mullin's professional CV: art director at Condé Nast, founder and curator of MEET A MUSEUM, co-curator of Henri Matisse: Writers on Paper at NYU, with letters of reference, catalogs and press.",
  path: "/cv",
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

const letterItems: WallItem[] = referenceLetters.map((scan, i) => ({
  id: `letter-${i + 1}`,
  file: scan.file,
  width: scan.width,
  height: scan.height,
  alt: scan.alt,
  title: null,
  lines: [scan.alt.replace(/^(Handwritten letter|Letter) from /, "")],
}));

const catalogItems: WallItem[] = catalogs.map((scan, i) => ({
  id: `catalog-${i + 1}`,
  file: scan.file,
  width: scan.width,
  height: scan.height,
  alt: scan.alt,
  title: null,
  lines: [scan.alt.replace(/^MEET A MUSEUM brochure: /, "")],
}));

export default function CvPage() {
  return (
    <>
      <PageHeader title="CV">
        <p className="mt-4 max-w-prose text-lg text-muted">
          Professional work in the art world, with letters of reference, exhibition catalogs and press coverage.
        </p>
        <p className="mt-6">
          <a href={site.documents.resume} className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
            Download the r&eacute;sum&eacute; (PDF)
          </a>
        </p>
      </PageHeader>

      <div className="border-t border-hairline">
        <Section id="resume" title="Résumé">
          <YearList entries={resume} />
          <h3 className="mt-8 text-muted">Education</h3>
          <ul className="mt-2">
            {resumeEducation.map((line) => (
              <li key={line} className="border-t border-hairline py-3">
                {line}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="letters" title="Museum directors and curators, letters of reference">
          <Wall items={letterItems} label="Letters of reference" compact />
        </Section>

        <Section id="catalogs" title="A sample of MEET A MUSEUM exhibition catalogs">
          <Wall items={catalogItems} label="Exhibition catalogs" compact />
        </Section>

        <Section id="matisse" title="Henri Matisse exhibition catalog">
          <Image
            src={matisseCatalog.file}
            alt={matisseCatalog.alt}
            width={matisseCatalog.width}
            height={matisseCatalog.height}
            sizes="(max-width: 640px) 100vw, 320px"
            className="h-auto w-full max-w-[320px]"
          />
          <p className="mt-3 max-w-prose text-muted">
            Henri Matisse: Writers on Paper, Selected Drawings and Prints from the Pierre and Tana Matisse Foundation. Co-curated
            at NYU&rsquo;s La Maison Fran&ccedil;aise.
          </p>
        </Section>

        <Section id="publicity" title="Publicity">
          <p className="max-w-prose">{publicity.press}</p>
          <h3 className="mt-8 font-serif text-xl">{publicity.television.heading}</h3>
          <p className="mt-2 max-w-prose">{publicity.television.text}</p>
          <p className="mt-2">
            <a
              href={publicity.television.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-hairline underline-offset-4 hover:decoration-accent"
            >
              {publicity.television.linkLabel}
            </a>
          </p>
          <h3 className="mt-8 font-serif text-xl">{publicity.programming.heading}</h3>
          <ul className="mt-2 flex max-w-prose flex-col gap-3">
            {publicity.programming.items.map((item) => (
              <li key={item.text}>
                {item.text}
                {item.href && item.linkLabel && (
                  <>
                    {" "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-hairline underline-offset-4 hover:decoration-accent"
                    >
                      {item.linkLabel}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="press" title="Media coverage of MEET A MUSEUM exhibitions">
          <ul className="flex flex-col">
            {pressLinks.map((link) => (
              <li key={link.href} className="border-t border-hairline py-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-lg italic underline-offset-4 hover:underline hover:decoration-accent"
                >
                  {link.title}
                </a>
                <p className="text-sm text-muted">
                  {link.by && <span>{link.by}, </span>}
                  {link.outlet}, {link.date}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
