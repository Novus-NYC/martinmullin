import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealManager from "@/components/RevealManager";
import { site } from "@/lib/site";
import { series } from "@/lib/works";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}, painter`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#F6F5F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const seriesLinks = series.map((s) => ({ href: `/work/${s.slug}`, label: s.title, years: s.years }));

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks that JavaScript is running before first paint so scroll reveals can hide content safely. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-canvas focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar seriesLinks={seriesLinks} />
        <main id="main" className="mx-auto w-full max-w-wall flex-1 px-5 sm:px-8">
          {children}
        </main>
        <Footer />
        <RevealManager />
      </body>
    </html>
  );
}
