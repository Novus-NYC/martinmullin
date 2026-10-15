"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type SeriesLink = { href: string; label: string; years: string | null };

export default function Navbar({ seriesLinks }: { seriesLinks: SeriesLink[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }, [pathname]);

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-autofocus]")?.focus();
  };

  const closeMenu = () => dialogRef.current?.close();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 bg-canvas transition-[border-color] duration-300 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-wall items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-[1.35rem] leading-none tracking-tight text-ink"
          aria-label={`${site.name}, home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.95rem]">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`inline-block py-2 underline-offset-[6px] transition-colors hover:text-ink hover:underline hover:decoration-accent ${
                    isActive(item.href) ? "text-ink underline decoration-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={openButtonRef}
          type="button"
          onClick={openMenu}
          className="-mr-2 inline-flex h-11 items-center px-2 text-[0.95rem] text-ink md:hidden"
          aria-haspopup="dialog"
        >
          Menu
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="menu md:hidden"
        aria-label="Site menu"
        onClose={() => openButtonRef.current?.focus()}
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pb-10">
          <div className="flex h-16 items-center justify-between">
            <span className="font-serif text-[1.35rem] leading-none tracking-tight">{site.name}</span>
            <button
              type="button"
              onClick={closeMenu}
              data-autofocus
              className="-mr-2 inline-flex h-11 items-center px-2 text-[0.95rem]"
            >
              Close
            </button>
          </div>

          <nav aria-label="Pages" className="mt-6">
            <ul className="flex flex-col">
              {[{ href: "/", label: "Home" }, ...site.nav].map((item) => (
                <li key={item.href} className="border-t border-hairline">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-4 font-serif text-3xl ${isActive(item.href) ? "text-ink" : "text-ink/80"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Series" className="mt-10">
            <p className="text-sm text-muted">Series</p>
            <ul className="mt-2 flex flex-col">
              {seriesLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    aria-current={pathname === s.href ? "page" : undefined}
                    className={`flex items-baseline justify-between gap-4 py-2.5 text-[1.05rem] ${
                      pathname === s.href ? "text-ink underline decoration-accent underline-offset-4" : "text-ink/80"
                    }`}
                  >
                    <span>{s.label}</span>
                    {s.years && <span className="text-sm text-muted">{s.years}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
