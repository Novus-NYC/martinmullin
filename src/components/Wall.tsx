"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

/** One item hung on the wall. Plain data so server pages can build it. */
export type WallItem = {
  id: string;
  file: string;
  width: number;
  height: number;
  alt: string;
  /** Short name used for link labels and inquiries, for example the title or "City Works, 2 of 6". */
  name?: string;
  /** Title line, shown in serif italic. Only real titles go here. */
  title: string | null;
  /** Supporting lines in order: year, medium, dimensions. */
  lines: string[];
  status?: string;
  /** Optional second view of the same item (for example a staged room render). */
  secondary?: { file: string; width: number; height: number; label: string };
};

type Props = {
  items: WallItem[];
  /** Accessible name for the viewer dialog, for example "LSABS works". */
  label: string;
  /** Smaller rows for documents and scans. */
  compact?: boolean;
  /** Preload the first image(s) when the wall is at the top of the page. Keep this to one on
      series pages: on a phone only the first work is in view, and preloading more makes them
      compete with it for bandwidth. */
  priorityCount?: number;
  /** Series name shown in the viewer's top bar. */
  seriesTitle?: string;
  /** When set, the viewer offers an "Inquire about this work" email link. */
  inquireEmail?: string;
};

type FigureStyle = CSSProperties & { "--r": string };

/** Quality for artwork in the viewer and on the wall. The sources are already web sized, so keep detail. */
const ART_QUALITY = 90;

export default function Wall({ items, label, compact = false, priorityCount = 0, seriesTitle, inquireEmail }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const [view, setView] = useState<"primary" | "secondary">("primary");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const lastIndex = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const open = useCallback((i: number) => {
    setIndex(i);
    setView("primary");
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => (current === null ? current : (current + delta + items.length) % items.length));
      setView("primary");
    },
    [items.length],
  );

  // Open the native dialog when a work is selected; focus lands on Close.
  useEffect(() => {
    if (index !== null) lastIndex.current = index;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  // Return focus to the work that was last on view, so keyboard users keep their place.
  const onDialogClose = () => {
    setIndex(null);
    const last = lastIndex.current;
    if (last !== null) linkRefs.current[last]?.focus();
  };

  const nameOf = (item: WallItem, i: number) =>
    item.name ?? item.title ?? (seriesTitle ? `${seriesTitle}, ${i + 1} of ${items.length}` : item.alt);

  const current = index === null ? null : { item: items[index], position: index + 1 };
  const shown =
    current && view === "secondary" && current.item.secondary
      ? {
          file: current.item.secondary.file,
          width: current.item.secondary.width,
          height: current.item.secondary.height,
          alt: `${current.item.alt}, ${current.item.secondary.label.toLowerCase()}`,
        }
      : current
        ? { file: current.item.file, width: current.item.width, height: current.item.height, alt: current.item.alt }
        : null;

  const inquiryHref = (() => {
    if (!current || !inquireEmail || current.item.status) return null;
    const name = nameOf(current.item, current.position - 1);
    const subject = [`Inquiry: ${name}`, ...current.item.lines].join(". ");
    const origin = typeof window === "undefined" ? "" : window.location.origin;
    const page = typeof window === "undefined" ? "" : window.location.href.split("#")[0];
    const body = [`Regarding: ${name}`, `Image: ${origin}${current.item.file}`, `Page: ${page}`, "", ""].join("\n");
    return `mailto:${inquireEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  const onWorkClick = (event: MouseEvent<HTMLAnchorElement>, i: number) => {
    // Let modified clicks (new tab, new window, download) open the image file as a normal link.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open(i);
  };

  return (
    <>
      <div className={compact ? "wall wall-compact" : "wall"}>
        {items.map((item, i) => {
          const ratio = item.width / item.height;
          const style: FigureStyle = { "--r": ratio.toFixed(4) };
          const wide = compact && ratio > 1;
          return (
            <figure key={item.id} className="reveal" style={style} data-wide={wide ? "" : undefined}>
              <a
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                href={item.file}
                onClick={(event) => onWorkClick(event, i)}
                className="block"
                aria-label={`View larger: ${nameOf(item, i)}`}
              >
                <Image
                  src={item.file}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  quality={ART_QUALITY}
                  sizes={
                    compact
                      ? wide
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  priority={i < priorityCount}
                />
              </a>
              <figcaption className="mt-3 text-[0.9rem] leading-snug text-muted">
                {item.title && <span className="font-serif text-[1.05rem] italic text-ink">{item.title}</span>}
                {item.lines.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
                {item.status && <span className="block">{item.status}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={label}
        onClose={onDialogClose}
        onClick={(event) => {
          // A click on the dark ground (anywhere outside the picture and the controls) closes the view.
          const target = event.target as HTMLElement;
          if (target === event.currentTarget || target.dataset.stage !== undefined) close();
        }}
      >
        {current && shown && (
          <div className="flex h-full flex-col">
            <div className="flex h-12 shrink-0 items-center justify-between px-5 text-sm sm:h-16 sm:px-8 short:h-11">
              <p className="text-muted-dark">
                {seriesTitle && <span className="text-canvas">{seriesTitle}</span>}
                {seriesTitle && <span aria-hidden="true"> &middot; </span>}
                {current.position} of {items.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                className="-mr-2 inline-flex h-11 items-center px-2 underline-offset-4 hover:underline"
              >
                Close
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 px-3 sm:px-20"
              data-stage
              onTouchStart={(event) => {
                const t = event.touches[0];
                touchStart.current = { x: t.clientX, y: t.clientY };
              }}
              onTouchEnd={(event) => {
                // A horizontal swipe on phones moves to the next or previous work.
                const start = touchStart.current;
                touchStart.current = null;
                if (!start || items.length < 2) return;
                const t = event.changedTouches[0];
                const dx = t.clientX - start.x;
                const dy = t.clientY - start.y;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
              }}
            >
              {/* The stage is a size container: the picture is as large as the space allows but never
                  larger than the source file, so low-resolution scans are not blown up and softened. */}
              <div className="viewer-stage" data-stage>
                <Image
                  key={shown.file}
                  src={shown.file}
                  alt={shown.alt}
                  width={shown.width}
                  height={shown.height}
                  quality={ART_QUALITY}
                  sizes={`(max-width: 640px) 100vw, ${shown.width}px`}
                  style={{
                    width: `min(${shown.width}px, 100cqw, calc(100cqh * ${(shown.width / shown.height).toFixed(4)}))`,
                    height: "auto",
                  }}
                />
              </div>

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-muted-dark hover:text-canvas sm:left-5 sm:inline-flex"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-muted-dark hover:text-canvas sm:right-5 sm:inline-flex"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </>
              )}
            </div>

            {items.length > 1 && (
              <div className="flex shrink-0 justify-between px-3 text-sm text-muted-dark sm:hidden">
                <button type="button" onClick={() => step(-1)} className="inline-flex h-11 items-center px-2">
                  <span aria-hidden="true">&larr;&nbsp;</span>Previous
                </button>
                <button type="button" onClick={() => step(1)} className="inline-flex h-11 items-center px-2">
                  Next<span aria-hidden="true">&nbsp;&rarr;</span>
                </button>
              </div>
            )}

            {/* Caption and actions. On phones and on short screens (a phone held sideways) the label
                lines run together on one line so the picture keeps as much height as possible. */}
            <div className="flex shrink-0 flex-col gap-1 px-5 pb-3 pt-1 text-sm sm:flex-row sm:items-end sm:justify-between sm:gap-2 sm:px-8 sm:pb-6 sm:pt-4 short:flex-row short:items-end short:justify-between short:gap-6 short:pb-2 short:pt-1">
              <div className="min-w-0 leading-snug text-muted-dark" aria-live="polite">
                <span className="sr-only">
                  {current.position} of {items.length}.{" "}
                </span>
                {current.item.title && <p className="font-serif text-[1.05rem] italic text-canvas sm:text-lg">{current.item.title}</p>}
                {!current.item.title && current.item.name && <p className="text-canvas">{current.item.name}</p>}
                <p className="sm:hidden short:block">{[...current.item.lines, ...(current.item.status ? [current.item.status] : [])].join(". ")}</p>
                <div className="hidden sm:block short:hidden">
                  {current.item.lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                  {current.item.status && <p>{current.item.status}</p>}
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-5 sm:shrink-0 sm:justify-end sm:gap-x-6">
                {current.item.secondary && (
                  <div className="flex gap-3 text-muted-dark sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setView("primary")}
                      aria-pressed={view === "primary"}
                      className={`inline-flex min-h-11 items-center whitespace-nowrap underline-offset-4 hover:text-canvas ${view === "primary" ? "text-canvas underline decoration-accent" : ""}`}
                    >
                      Artwork
                    </button>
                    <button
                      type="button"
                      onClick={() => setView("secondary")}
                      aria-pressed={view === "secondary"}
                      className={`inline-flex min-h-11 items-center whitespace-nowrap underline-offset-4 hover:text-canvas ${view === "secondary" ? "text-canvas underline decoration-accent" : ""}`}
                    >
                      {current.item.secondary.label}
                    </button>
                  </div>
                )}
                {inquiryHref && (
                  <a
                    href={inquiryHref}
                    className="inline-flex min-h-11 items-center whitespace-nowrap text-canvas underline decoration-accent underline-offset-4 hover:decoration-canvas"
                  >
                    Inquire<span className="sr-only sm:not-sr-only short:not-sr-only"> about this work</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
