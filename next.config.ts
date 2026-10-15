import type { NextConfig } from "next";

/** Old Weebly URLs mapped to the new routes. Kept as permanent redirects. */
const oldRoutes: Array<[string, string]> = [
  ["/index.html", "/"],
  ["/lsabs.html", "/work/lsabs"],
  ["/autumn.html", "/work/autumn-works-2020"],
  ["/golden-books-2012-2018.html", "/work/golden-books"],
  ["/staves.html", "/work/staves"],
  ["/city-works-2013.html", "/work/city-works"],
  ["/works-on-paper.html", "/work/works-on-paper"],
  ["/large-paintings.html", "/work/large-paintings"],
  ["/2008-2009.html", "/work/2008-2009"],
  ["/the-arrival-of-anselm-kiefer-in-bunclody-1991.html", "/work/the-arrival-of-anselm-kiefer-in-bunclody"],
  ["/the-stuyvesant-fish-house-paintings-1999-2001.html", "/work/stuyvesant-fish-house-paintings"],
  ["/fuller-building-paintings-1989-1994.html", "/work/fuller-building-paintings"],
  ["/1989-2001.html", "/work"],
  ["/current-work.html", "/work"],
  ["/bio.html", "/biography"],
  ["/cv.html", "/cv"],
  ["/contact.html", "/contact"],
  ["/blog.html", "/"],
  ["/blog1.html", "/"],
  ["/video-test.html", "/"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [160, 240, 320, 420],
    // 90 for artwork (the sources are already web sized, so keep surface detail); 75 for everything else.
    qualities: [75, 90],
  },
  async redirects() {
    return oldRoutes.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
