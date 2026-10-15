"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

  // Open or close the native dialog when `index` changes.
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

  const current = index === null ? null : items[index];
  const shown = current && view === "secondary" && current.secondary ? current.secondary : current;

  return (
    <>
      <div className={`wall ${compact ? "wall-compact" : ""}`} style={compact ? { gap: "2rem 1.25rem" } : undefined}>
        {items.map((item, i) => (
          <figure
            key={item.id}
            className="reveal"
            style={{ ["--r" as string]: (item.width / item.height).toFixed(4), ...(compact ? { flexBasis: `calc(${(item.width / item.height).toFixed(4)} * 11rem)` } : {}) }}
          >
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
                sizes={compact ? "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
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
        ))}
      </div>

      <dialog ref={dialogRef} className="lightbox" aria-label={label} onClose={onDialogClose}>
        {current && shown && (
          <div className="flex h-full flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between px-5 text-sm sm:px-8">
              <p className="text-[#bdb9b0]">
                {index! + 1} of {items.length}
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

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 sm:px-20">
              <div className="relative h-full w-full">
                <Image
                  key={shown.file}
                  src={shown.file}
                  alt={view === "secondary" && current.secondary ? current.secondary.label : current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-[#bdb9b0] hover:text-canvas sm:left-5"
                    aria-label="Previous work"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl text-[#bdb9b0] hover:text-canvas sm:right-5"
                    aria-label="Next work"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </>
              )}
            </div>

            <div className="flex shrink-0 flex-col gap-3 px-5 pb-6 pt-4 text-sm sm:flex-row sm:items-end sm:justify-between sm:px-8">
              <div className="leading-snug text-[#bdb9b0]">
                {current.title && <p className="font-serif text-lg italic text-canvas">{current.title}</p>}
                {current.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
                {current.status && <p>{current.status}</p>}
              </div>
              {current.secondary && (
                <div className="flex gap-4 text-[#bdb9b0]">
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
                    {current.secondary.label}
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
