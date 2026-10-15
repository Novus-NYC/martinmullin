"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

/** One item hung on the wall. Plain data so server pages can build it. */
export type WallItem = {
  id: string;
  file: string;
  width: number;
  height: number;
  alt: string;
  /** Title line, shown in serif italic. */
  title: string | null;
  /** Supporting lines in order: year, medium, dimensions. */
  lines: string[];
  status?: string;
  /** Optional second view of the same item (for example a staged room render). */
  secondary?: { file: string; width: number; height: number; label: string };
};

type Props = {
  items: WallItem[];
  /** Accessible name for the lightbox dialog, for example "LSABS works". */
  label: string;
  /** Smaller rows for documents and scans. */
  compact?: boolean;
  /** Mark the first few images as priority when the wall is at the top of the page. */
  priorityCount?: number;
};

type FigureStyle = CSSProperties & { "--r": string };

export default function Wall({ items, label, compact = false, priorityCount = 0 }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const [view, setView] = useState<"primary" | "secondary">("primary");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((i: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
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

  const onDialogClose = () => {
    setIndex(null);
    triggerRef.current?.focus();
  };

  const current = index === null ? null : { item: items[index], position: index + 1 };
  const shownImage =
    current && view === "secondary" && current.item.secondary
      ? { file: current.item.secondary.file, alt: current.item.secondary.label }
      : current
        ? { file: current.item.file, alt: current.item.alt }
        : null;

  return (
    <>
      <div className={compact ? "wall wall-compact" : "wall"}>
        {items.map((item, i) => {
          const style: FigureStyle = { "--r": (item.width / item.height).toFixed(4) };
          return (
            <figure key={item.id} className="reveal" style={style}>
              <a
                href={item.file}
                onClick={(event) => {
                  event.preventDefault();
                  open(i, event.currentTarget);
                }}
                className="block"
                aria-label={`View ${item.title ?? item.alt} larger`}
              >
                <Image
                  src={item.file}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes={
                    compact
                      ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
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
          // A click on the dark ground (outside any control or the image) closes the view.
          const target = event.target as HTMLElement;
          if (target === event.currentTarget || target.dataset.stage !== undefined) close();
        }}
      >
        {current && shownImage && (
          <div className="flex h-full flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between px-5 text-sm sm:px-8">
              <p className="text-muted-dark" aria-live="polite">
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

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 sm:px-20" data-stage>
              <div className="relative h-full w-full" data-stage>
                <Image key={shownImage.file} src={shownImage.file} alt={shownImage.alt} fill sizes="100vw" className="object-contain" />
              </div>

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-muted-dark hover:text-canvas sm:left-5"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-muted-dark hover:text-canvas sm:right-5"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </>
              )}
            </div>

            <div className="flex shrink-0 flex-col gap-3 px-5 pb-6 pt-4 text-sm sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <div className="leading-snug text-muted-dark" aria-live="polite">
                {current.item.title && <p className="font-serif text-lg italic text-canvas">{current.item.title}</p>}
                {current.item.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
                {current.item.status && <p>{current.item.status}</p>}
              </div>
              {current.item.secondary && (
                <div className="flex gap-4 text-muted-dark">
                  <button
                    type="button"
                    onClick={() => setView("primary")}
                    aria-pressed={view === "primary"}
                    className={`underline-offset-4 hover:text-canvas ${view === "primary" ? "text-canvas underline decoration-accent" : ""}`}
                  >
                    Artwork
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("secondary")}
                    aria-pressed={view === "secondary"}
                    className={`underline-offset-4 hover:text-canvas ${view === "secondary" ? "text-canvas underline decoration-accent" : ""}`}
                  >
                    {current.item.secondary.label}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
