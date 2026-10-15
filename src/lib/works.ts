/**
 * Every artwork on the site, grouped by series, newest series first.
 *
 * `caption` is the caption exactly as it appeared on the previous site
 * (martinmullin.com on Weebly). `title`, `year`, `medium` and `dimensions`
 * are split out from that caption without adding words. When a work had no
 * caption, those fields are null and the label falls back to the series line.
 * `captionSource: "filename"` marks the two works whose details came from the
 * original image filename because the caption was missing.
 *
 * Image files are the original uploads, byte for byte, in /public/art.
 */
export type WorkStatus = "not available";

export type Work = {
  id: string;
  file: string;
  width: number;
  height: number;
  caption: string | null;
  title: string | null;
  year: string | null;
  medium: string | null;
  dimensions: string | null;
  status?: WorkStatus;
  captionSource?: "filename";
  /** A staged interior render supplied with the work. Secondary view only. */
  roomView?: { file: string; width: number; height: number };
};

export type Series = {
  slug: string;
  title: string;
  years: string | null;
  subtitle: string | null;
  /** Statement paragraphs carried over word for word. */
  statement: string[];
  /** Medium and size that apply to every work in the series. */
  detail: string | null;
  /** Index into `works` of the piece that represents the series in lists. */
  coverIndex: number;
  works: Work[];
};

// lsabs: 15 works
const lsabs: Work[] = [
  { id: "lsabs-1", file: "/art/lsabs/martin-mullin-lsabs-series-2022-mica-steel-glass-acrylic-wood-panel-10-22x8-22x2-22.jpg", width: 960, height: 1200, caption: "Martin Mullin LSABS Series 2022 Mica Steel Glass Acrylic Wood Panel 10\"x8\"x2\"", title: null, year: "2022", medium: "Mica, steel, glass, acrylic, wood panel", dimensions: "10 × 8 × 2 in" },
  { id: "lsabs-2", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-graphite-steel-glass-acrylic-wood-panel-14-22x11-22x2-22.jpg", width: 955, height: 1200, caption: "Martin Mullin LSABS Series 2021 Mica Graphite Steel Glass Acrylic Wood Panel 14\"x11\"x2\"", title: null, year: "2021", medium: "Mica, graphite, steel, glass, acrylic, wood panel", dimensions: "14 × 11 × 2 in" },
  { id: "lsabs-3", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-glass-steel-acrylic-graphite-wood-panel-40-copy.jpg", width: 768, height: 1200, caption: "Martin Mullin LSABS Series 2021 Mica Graphite Steel Glass Acrylic Wood Panel 36”x24”x2\"", title: null, year: "2021", medium: "Mica, graphite, steel, glass, acrylic, wood panel", dimensions: "36 × 24 × 2 in" },
  { id: "lsabs-4", file: "/art/lsabs/lsabs-5-down-5-across-2021-16-22x12-22x2-22-glass-pearl-steel-iron-oxide-acrylic-wood-panel.jpg", width: 600, height: 800, caption: "Martin Mullin LSABS Series (5 down 5 across) 2021 16\"x12\"x2\" Glass pearl steel iron oxide acrylic wood panel", title: "5 down 5 across", year: "2021", medium: "Glass, pearl, steel, iron oxide, acrylic, wood panel", dimensions: "16 × 12 × 2 in" },
  { id: "lsabs-5", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-graphite-steel-glass-acrylic-wood-panel-12-22x12-22x2-22.jpg", width: 801, height: 800, caption: "Martin Mullin LSABS Series 2021 Mica Graphite Steel Glass Acrylic Wood Panel 12\"x12\"x2\"", title: null, year: "2021", medium: "Mica, graphite, steel, glass, acrylic, wood panel", dimensions: "12 × 12 × 2 in" },
  { id: "lsabs-6", file: "/art/lsabs/martin-mullin-lsabs-series-2021-48-22x42-22-mica-pearl-steel-glass-graphite-acrylic-paper.jpg", width: 1073, height: 1200, caption: "Martin Mullin LSABS Series 2021 48\"x42\" Mica Pearl Steel Glass Graphite Acrylic Paper", title: null, year: "2021", medium: "Mica, pearl, steel, glass, graphite, acrylic, paper", dimensions: "48 × 42 in" },
  { id: "lsabs-7", file: "/art/lsabs/martin-mullin-lsabs-series-2021-14-22x11-22x2-22-glass-pearl-steel-iron-oxide-acrylic-wood-panel.jpg", width: 621, height: 800, caption: null, title: null, year: "2021", medium: "Glass, pearl, steel, iron oxide, acrylic, wood panel", dimensions: "14 × 11 × 2 in", captionSource: "filename" },
  { id: "lsabs-8", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-steel-pearl-glass-wood-panel-acrylic-24-22x18-22x2-22.jpg", width: 891, height: 1200, caption: "Martin Mullin LSABS series 2021 Mica Steel Pearl Glass Wood Panel Acrylic 24\"x18\"x2\"", title: null, year: "2021", medium: "Mica, steel, pearl, glass, wood panel, acrylic", dimensions: "24 × 18 × 2 in" },
  { id: "lsabs-9", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-graphite-steel-glass-acrylic-wood-panel-14-22x11-22x2-22-jpg.jpg", width: 963, height: 1200, caption: "Martin Mullin LSABS Series 2021 Mica Graphite Steel Glass Acrylic Wood Panel 14\"x11\"x2\"", title: null, year: "2021", medium: "Mica, graphite, steel, glass, acrylic, wood panel", dimensions: "14 × 11 × 2 in" },
  { id: "lsabs-10", file: "/art/lsabs/martin-mullin-lsabs-series-2021-22-mica-pearl-steel-glass-acrylic-canvas-ii-48-22x46-22.jpg", width: 771, height: 800, caption: "Martin Mullin LSABS Series 2021-22 Mica Steel Glass Pearl Acrylic Canvas 48\"x46\"", title: null, year: "2021-22", medium: "Mica, steel, glass, pearl, acrylic, canvas", dimensions: "48 × 46 in" },
  { id: "lsabs-11", file: "/art/lsabs/martin-mullin-lsabs-series-2021-22-mica-pearl-steel-glass-acrylic-wood-panel-30-22x30-22x2-22.jpg", width: 794, height: 800, caption: "Martin Mullin LSABS Series 2021-22 Mica Pearl Steel Glass Acrylic Wood Panel 30\"x30\"x2\"", title: null, year: "2021-22", medium: "Mica, pearl, steel, glass, acrylic, wood panel", dimensions: "30 × 30 × 2 in" },
  { id: "lsabs-12", file: "/art/lsabs/martin-mullin-lsabs-series-2021-22-mica-steel-glass-pearl-acrylic-canvas-48-22x46-22.jpg", width: 765, height: 800, caption: null, title: null, year: "2021-22", medium: "Mica, steel, glass, pearl, acrylic, canvas", dimensions: "48 × 46 in", captionSource: "filename" },
  { id: "lsabs-13", file: "/art/lsabs/martin-mullin-lsabs-series-2021-22-mica-steel-glass-pearl-acrylic-canvas-60-22x58-22.jpg", width: 779, height: 800, caption: "Martin Mullin LSABS Series 2021-22 Mica Steel Glass Pearl Acrylic Canvas 60\"x58\"", title: null, year: "2021-22", medium: "Mica, steel, glass, pearl, acrylic, canvas", dimensions: "60 × 58 in" },
  { id: "lsabs-14", file: "/art/lsabs/martin-mullin-lsabs-series-2021-mica-steel-glass-oil-on-panel-16-22x8-22x2-22.jpg", width: 1200, height: 603, caption: "Martin Mullin LSABS Series 2021 Mica Steel Glass Oil on Panel 16\"x8\"x2\"", title: null, year: "2021", medium: "Mica, steel, glass, oil on panel", dimensions: "16 × 8 × 2 in" },
  { id: "lsabs-15", file: "/art/lsabs/martin-mullin.jpg", width: 800, height: 800, caption: "Martin Mullin LSABS series 2022 Mica, Gold, Glass, Pearl, Oil, Canvas, 48”x48”", title: null, year: "2022", medium: "Mica, gold, glass, pearl, oil, canvas", dimensions: "48 × 48 in" },
];

// autumn-works-2020: 7 works
const autumn_works_2020: Work[] = [
  { id: "autumn-works-2020-1", file: "/art/autumn-works-2020/six-b6e19128-ac4d-43d9-9d04-1e38a5bbb733.jpg", width: 644, height: 800, caption: "Untitled (Grey) 48\"x42\" Acrylic/Paper 2020", title: "Untitled (Grey)", year: "2020", medium: "Acrylic, paper", dimensions: "48 × 42 in", roomView: {"file":"/art/autumn-works-2020/2grey.jpg","width":936,"height":736} },
  { id: "autumn-works-2020-2", file: "/art/autumn-works-2020/six-8ec62fb1-7f83-494f-b1d1-56f327b9432f.jpg", width: 644, height: 800, caption: "Untitled (Green) 42\"x36\" Acrylic/Goldpaint/Resin/Paper 2020", title: "Untitled (Green)", year: "2020", medium: "Acrylic, gold paint, resin, paper", dimensions: "42 × 36 in", roomView: {"file":"/art/autumn-works-2020/3turqoise.jpg","width":936,"height":770} },
  { id: "autumn-works-2020-3", file: "/art/autumn-works-2020/six-3ab9df7e-cd7a-463c-9ae8-fefaa8a56c36.jpg", width: 644, height: 800, caption: "Untitled (Blue/Yellow) 48\"x42\" Acrylic/Resin/Paper 2020", title: "Untitled (Blue/Yellow)", year: "2020", medium: "Acrylic, resin, paper", dimensions: "48 × 42 in", roomView: {"file":"/art/autumn-works-2020/4-test.jpg","width":936,"height":616} },
  { id: "autumn-works-2020-4", file: "/art/autumn-works-2020/six-71f46e5a-0a0a-4dc4-9e61-e39000418a7d.jpg", width: 644, height: 800, caption: "Untitled (Red). 42\"x36\" Acrylic/Paper 2020", title: "Untitled (Red)", year: "2020", medium: "Acrylic, paper", dimensions: "42 × 36 in", roomView: {"file":"/art/autumn-works-2020/red-and-blue.jpg","width":936,"height":845} },
  { id: "autumn-works-2020-5", file: "/art/autumn-works-2020/martin-mullin.png", width: 919, height: 514, caption: "TRIPTYCH - Pearl/ Glass /Silver /Acrylic/Handmade Paper. Each panel 30\"x22\" OVERALL SIZE ( 30\" x 66\")", title: "Triptych", year: null, medium: "Pearl, glass, silver, acrylic, handmade paper", dimensions: "Each panel 30 × 22 in, overall 30 × 66 in" },
  { id: "autumn-works-2020-6", file: "/art/autumn-works-2020/wop2.jpg", width: 1080, height: 1487, caption: "Martin Mullin Pearl /Glass/Silver/Acrylic/Handmade Paper 30\" x 22\"", title: null, year: null, medium: "Pearl, glass, silver, acrylic, handmade paper", dimensions: "30 × 22 in" },
  { id: "autumn-works-2020-7", file: "/art/autumn-works-2020/wop1.jpg", width: 1080, height: 1425, caption: "Martin Mullin Pearl /Glass/Silver/Acrylic/Handmade Paper 30\" x 22\"", title: null, year: null, medium: "Pearl, glass, silver, acrylic, handmade paper", dimensions: "30 × 22 in" },
];

// golden-books: 33 works
const golden_books: Work[] = [
  { id: "golden-books-1", file: "/art/golden-books/819250.jpg", width: 625, height: 800, caption: "Book 8", title: "Book 8", year: null, medium: null, dimensions: null },
  { id: "golden-books-2", file: "/art/golden-books/3975165.jpg", width: 645, height: 800, caption: "Book 9", title: "Book 9", year: null, medium: null, dimensions: null },
  { id: "golden-books-3", file: "/art/golden-books/3999420.jpg", width: 630, height: 800, caption: "Book 7", title: "Book 7", year: null, medium: null, dimensions: null },
  { id: "golden-books-4", file: "/art/golden-books/7587007.jpg", width: 620, height: 800, caption: "Book 6", title: "Book 6", year: null, medium: null, dimensions: null },
  { id: "golden-books-5", file: "/art/golden-books/1218837.jpg", width: 633, height: 800, caption: "Book 5", title: "Book 5", year: null, medium: null, dimensions: null },
  { id: "golden-books-6", file: "/art/golden-books/8090501.jpg", width: 628, height: 800, caption: "Book 4", title: "Book 4", year: null, medium: null, dimensions: null },
  { id: "golden-books-7", file: "/art/golden-books/7531052.jpg", width: 629, height: 800, caption: "Book 3", title: "Book 3", year: null, medium: null, dimensions: null },
  { id: "golden-books-8", file: "/art/golden-books/1001883.jpg", width: 634, height: 800, caption: "Book 2", title: "Book 2", year: null, medium: null, dimensions: null },
  { id: "golden-books-9", file: "/art/golden-books/6452215.jpg", width: 630, height: 800, caption: "Book 1", title: "Book 1", year: null, medium: null, dimensions: null },
  { id: "golden-books-10", file: "/art/golden-books/9188768.jpg", width: 598, height: 800, caption: "Quotes", title: "Quotes", year: null, medium: null, dimensions: null },
  { id: "golden-books-11", file: "/art/golden-books/4778106.jpg", width: 631, height: 800, caption: "Quotes II", title: "Quotes II", year: null, medium: null, dimensions: null },
  { id: "golden-books-12", file: "/art/golden-books/5267152.jpg", width: 624, height: 800, caption: "Reflections", title: "Reflections", year: null, medium: null, dimensions: null },
  { id: "golden-books-13", file: "/art/golden-books/8769254.jpg", width: 601, height: 800, caption: "\"Citly Crakle\" 48\" x 36\" Acrylic 23 Karat Gold on Linen mounted on wood panel", title: "Citly Crakle", year: null, medium: "Acrylic, 23 karat gold on linen mounted on wood panel", dimensions: "48 × 36 in" },
  { id: "golden-books-14", file: "/art/golden-books/7545756.jpg", width: 593, height: 800, caption: "\"Sea Island\" 48\" x 36\" Acrylic 23 Karat Gold on Linen mounted on wood panel", title: "Sea Island", year: null, medium: "Acrylic, 23 karat gold on linen mounted on wood panel", dimensions: "48 × 36 in" },
  { id: "golden-books-15", file: "/art/golden-books/567704.jpg", width: 604, height: 800, caption: "\"Untitled November\" Mixed Media on Handmade Paper 30\" x 22.5\"", title: "Untitled November", year: null, medium: "Mixed media on handmade paper", dimensions: "30 × 22.5 in" },
  { id: "golden-books-16", file: "/art/golden-books/4761680.jpg", width: 670, height: 800, caption: "Black-Gold 23K goldleaf/Flashe/Acrylic on panel 15\"x12.5\" 2014", title: "Black-Gold", year: "2014", medium: "23K goldleaf, Flashe, acrylic on panel", dimensions: "15 × 12.5 in" },
  { id: "golden-books-17", file: "/art/golden-books/3035001.jpg", width: 660, height: 800, caption: "Gold-Black 23K Goldleaf/Flashe/Acrylic on panel 2015 15\"x12.5\"", title: "Gold-Black", year: "2015", medium: "23K goldleaf, Flashe, acrylic on panel", dimensions: "15 × 12.5 in" },
  { id: "golden-books-18", file: "/art/golden-books/7468632.jpg", width: 659, height: 800, caption: "Golden Book 1 '14 23K Goldleaf/ Acrylic/Oil/wood panel 30\"x24\" 2014", title: "Golden Book 1 '14", year: "2014", medium: "23K goldleaf, acrylic, oil, wood panel", dimensions: "30 × 24 in" },
  { id: "golden-books-19", file: "/art/golden-books/373469.jpg", width: 676, height: 800, caption: "Golden Book 2 '15 23K Goldleaf/Acrylic/Oil/woodpanel 30\"x24\" 2015", title: "Golden Book 2 '15", year: "2015", medium: "23K goldleaf, acrylic, oil, wood panel", dimensions: "30 × 24 in" },
  { id: "golden-books-20", file: "/art/golden-books/9920242.jpg", width: 639, height: 800, caption: "Golden Book 3 '15 23k Goldleaf/Acrylic/Oil/wood panel 30\"x24\" 2015", title: "Golden Book 3 '15", year: "2015", medium: "23K goldleaf, acrylic, oil, wood panel", dimensions: "30 × 24 in" },
  { id: "golden-books-21", file: "/art/golden-books/1412304.jpg", width: 620, height: 800, caption: "Golden Book (Untitled Red) 48\" x 36\" 2015 Gold/Acrylic/Resin/Wood Panel", title: "Golden Book (Untitled Red)", year: "2015", medium: "Gold, acrylic, resin, wood panel", dimensions: "48 × 36 in" },
  { id: "golden-books-22", file: "/art/golden-books/4329484.jpg", width: 615, height: 800, caption: "Golden Book (Untitled) 30\"x 24\" 2015 Gold/Acrylic/Resin/Wood Panel", title: "Golden Book (Untitled)", year: "2015", medium: "Gold, acrylic, resin, wood panel", dimensions: "30 × 24 in" },
  { id: "golden-books-23", file: "/art/golden-books/9554511.jpg", width: 586, height: 800, caption: "Golden Book (Untitled Acqua) 48\" x 36\" 2015 Gold/Acrylic/Resin/Wood Panel", title: "Golden Book (Untitled Acqua)", year: "2015", medium: "Gold, acrylic, resin, wood panel", dimensions: "48 × 36 in" },
  { id: "golden-books-24", file: "/art/golden-books/golden-book-blue-2016-60-x48-epoxy-gold-cloth-acrylic-on-canvas-on-wood-panel.jpg", width: 597, height: 800, caption: "Golden Book Blue 2016 48\"x 36\" Epoxy Gold Cloth Acrylic on Canvas on Wood panel not available", title: "Golden Book Blue", year: "2016", medium: "Epoxy, gold cloth, acrylic on canvas on wood panel", dimensions: "48 × 36 in", status: "not available" },
  { id: "golden-books-25", file: "/art/golden-books/golden-book-pink-2016-60-x48-epoxy-gold-acrylic-on-canvas-on-wood-panel.jpeg", width: 588, height: 800, caption: "Golden Book Pink 2016 48\"x36 \" Epoxy Gold Acrylic on Canvas on Wood panel", title: "Golden Book Pink", year: "2016", medium: "Epoxy, gold, acrylic on canvas on wood panel", dimensions: "48 × 36 in" },
  { id: "golden-books-26", file: "/art/golden-books/gold-stitch-2017-14-x11-x2-gold-cloth-thread-epoxy-on-wood-panel.jpg", width: 626, height: 800, caption: "Gold-Stitch 2017 14”x11”x2” Gold-cloth-thread-epoxy on wood panel", title: "Gold-Stitch", year: "2017", medium: "Gold cloth, thread, epoxy on wood panel", dimensions: "14 × 11 × 2 in" },
  { id: "golden-books-27", file: "/art/golden-books/img-1158.jpg", width: 599, height: 800, caption: "Gold/Vermilion acrylic /resin on Linen 2018 40”x30”", title: "Gold/Vermilion", year: "2018", medium: "Acrylic, resin on linen", dimensions: "40 × 30 in" },
  { id: "golden-books-28", file: "/art/golden-books/2341576.jpg", width: 1061, height: 800, caption: "Golden Book (Untitled Rust) 2015 18\"x24\" Gold/Acrylic/Resin/Linen", title: "Golden Book (Untitled Rust)", year: "2015", medium: "Gold, acrylic, resin, linen", dimensions: "18 × 24 in" },
  { id: "golden-books-29", file: "/art/golden-books/4526244.jpg", width: 1044, height: 800, caption: "Golden Book (Untitled Blue/Grey) 12\" x 16\" 2015 Gold/Acrylic/Resin/Wood Panel", title: "Golden Book (Untitled Blue/Grey)", year: "2015", medium: "Gold, acrylic, resin, wood panel", dimensions: "12 × 16 in" },
  { id: "golden-books-30", file: "/art/golden-books/5997634.jpg", width: 1070, height: 800, caption: "Golden Book (Untitled Grey) 2015 18\" x 24\" Gold/Acrylic/Resin/Linen not available", title: "Golden Book (Untitled Grey)", year: "2015", medium: "Gold, acrylic, resin, linen", dimensions: "18 × 24 in", status: "not available" },
  { id: "golden-books-31", file: "/art/golden-books/375174.jpg", width: 1080, height: 800, caption: "Golden Book (Untitled Pink) 12\" x 16\" 2015 Gold/Acrylic/Resin/Wood Panel", title: "Golden Book (Untitled Pink)", year: "2015", medium: "Gold, acrylic, resin, wood panel", dimensions: "12 × 16 in" },
  { id: "golden-books-32", file: "/art/golden-books/golden-book-aqua-untitled-18x24-copy.jpg", width: 1064, height: 800, caption: "Golden Book (Aqua) Untitled 18x24", title: "Golden Book (Aqua) Untitled", year: null, medium: null, dimensions: "18 × 24 in" },
  { id: "golden-books-33", file: "/art/golden-books/golden-book-untitled-pink-18x24.jpg", width: 1079, height: 800, caption: "Golden Book Untitled (Pink) 18x24", title: "Golden Book Untitled (Pink)", year: null, medium: null, dimensions: "18 × 24 in" },
];

// staves: 8 works
const staves: Work[] = [
  { id: "staves-1", file: "/art/staves/5494214.jpg", width: 628, height: 800, caption: "Untitled (Staves) 01'15 14\"x11\"", title: "Untitled (Staves) 01'15", year: "2015", medium: null, dimensions: "14 × 11 in" },
  { id: "staves-2", file: "/art/staves/5435856.jpg", width: 627, height: 800, caption: "Untitled (Staves) 02'15 14\"x11\"", title: "Untitled (Staves) 02'15", year: "2015", medium: null, dimensions: "14 × 11 in" },
  { id: "staves-3", file: "/art/staves/2423754.jpg", width: 645, height: 800, caption: "Untitled (staves) 05 15 14\" x 11\"", title: "Untitled (staves) 05 15", year: "2015", medium: null, dimensions: "14 × 11 in" },
  { id: "staves-4", file: "/art/staves/8808613.jpg", width: 1019, height: 800, caption: "Untitled (Staves) 04'15 11\"x14\"", title: "Untitled (Staves) 04'15", year: "2015", medium: null, dimensions: "11 × 14 in" },
  { id: "staves-5", file: "/art/staves/5872058.jpg", width: 1011, height: 800, caption: "Untitled (Staves) 03'15 11\"x14\"", title: "Untitled (Staves) 03'15", year: "2015", medium: null, dimensions: "11 × 14 in" },
  { id: "staves-6", file: "/art/staves/5346241.jpg", width: 667, height: 800, caption: "Untitled (Staves) Bl:Wh'15 36'x30\"", title: "Untitled (Staves) Bl:Wh'15", year: "2015", medium: null, dimensions: "36 × 30 in" },
  { id: "staves-7", file: "/art/staves/3606791.jpg", width: 621, height: 800, caption: "Staves, 60\" x 48\" , Acrylic/Oil/Linen, 2012", title: "Staves", year: "2012", medium: "Acrylic, oil, linen", dimensions: "60 × 48 in" },
  { id: "staves-8", file: "/art/staves/2387984.jpg", width: 609, height: 800, caption: "Untitled (Staves) 06 '15 24\"x18\"", title: "Untitled (Staves) 06 '15", year: "2015", medium: null, dimensions: "24 × 18 in" },
];

// city-works: 6 works
const city_works: Work[] = [
  { id: "city-works-1", file: "/art/city-works/4698989.jpg", width: 621, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "city-works-2", file: "/art/city-works/4594219.jpg", width: 612, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "city-works-3", file: "/art/city-works/3002829.jpg", width: 611, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "city-works-4", file: "/art/city-works/2649615.jpg", width: 615, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "city-works-5", file: "/art/city-works/7100678.jpg", width: 593, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "city-works-6", file: "/art/city-works/9042428.jpg", width: 604, height: 800, caption: null, title: null, year: null, medium: null, dimensions: null },
];

// works-on-paper: 20 works
const works_on_paper: Work[] = [
  { id: "works-on-paper-1", file: "/art/works-on-paper/4943990.jpg", width: 426, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-2", file: "/art/works-on-paper/7669632.jpg", width: 437, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-3", file: "/art/works-on-paper/3006236.jpg", width: 428, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-4", file: "/art/works-on-paper/5720806.jpg", width: 430, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-5", file: "/art/works-on-paper/3469393.jpg", width: 419, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-6", file: "/art/works-on-paper/8372163.jpg", width: 429, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-7", file: "/art/works-on-paper/4645401.jpg", width: 424, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-8", file: "/art/works-on-paper/2246678.jpg", width: 427, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-9", file: "/art/works-on-paper/1775881.jpg", width: 427, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-10", file: "/art/works-on-paper/9444701.jpg", width: 425, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-11", file: "/art/works-on-paper/2603507.jpg", width: 420, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-12", file: "/art/works-on-paper/774385.jpg", width: 433, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-13", file: "/art/works-on-paper/8173803.jpg", width: 427, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-14", file: "/art/works-on-paper/4609895.jpg", width: 440, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-15", file: "/art/works-on-paper/4972453.jpg", width: 429, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-16", file: "/art/works-on-paper/487207.jpg", width: 427, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-17", file: "/art/works-on-paper/5985334.jpg", width: 434, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-18", file: "/art/works-on-paper/7144854.jpg", width: 422, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-19", file: "/art/works-on-paper/4621452.jpg", width: 426, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "works-on-paper-20", file: "/art/works-on-paper/5567634.jpg", width: 428, height: 576, caption: null, title: null, year: null, medium: null, dimensions: null },
];

// large-paintings: 8 works
const large_paintings: Work[] = [
  { id: "large-paintings-1", file: "/art/large-paintings/promised-land-variation-i-72-22x-60-22-oil-canvas-1996-2014.jpg", width: 675, height: 800, caption: "Promised Land (variation I) 72\"x 60\" Oil / canvas. 1996-2014", title: "Promised Land (variation I)", year: "1996-2014", medium: "Oil, canvas", dimensions: "72 × 60 in" },
  { id: "large-paintings-2", file: "/art/large-paintings/site-variation-i-oil-fabric-on-canvas-72-x-60-22-2007-2014jpg.jpg", width: 676, height: 800, caption: "Site (variation I) Oil/fabric on canvas 72 x 60\" 2007-2014", title: "Site (variation I)", year: "2007-2014", medium: "Oil, fabric on canvas", dimensions: "72 × 60 in" },
  { id: "large-paintings-3", file: "/art/large-paintings/8411247.jpg", width: 780, height: 800, caption: "Plane 60\" x 58\" Flashe/ Oil on Linen 2010", title: "Plane", year: "2010", medium: "Flashe, oil on linen", dimensions: "60 × 58 in" },
  { id: "large-paintings-4", file: "/art/large-paintings/9641549.jpg", width: 765, height: 800, caption: "Resolute 60\" x 58\" Oil on Linen 2010", title: "Resolute", year: "2010", medium: "Oil on linen", dimensions: "60 × 58 in" },
  { id: "large-paintings-5", file: "/art/large-paintings/301871.jpg", width: 800, height: 760, caption: "Strata 48\" x 48\" Oil on Linen 2011", title: "Strata", year: "2011", medium: "Oil on linen", dimensions: "48 × 48 in" },
  { id: "large-paintings-6", file: "/art/large-paintings/7856467.jpg", width: 669, height: 694, caption: "Site 48\" x 48\" Oil/Fabric on Linen 2007 not available", title: "Site", year: "2007", medium: "Oil, fabric on linen", dimensions: "48 × 48 in", status: "not available" },
  { id: "large-paintings-7", file: "/art/large-paintings/2993933.jpg", width: 621, height: 800, caption: "Staves, 60\" x 48\" , Acrylic/Oil/Linen, 2012", title: "Staves", year: "2012", medium: "Acrylic, oil, linen", dimensions: "60 × 48 in" },
  { id: "large-paintings-8", file: "/art/large-paintings/4932828.jpg", width: 776, height: 800, caption: "Restraint, 60\" x 58\", Flashe/Acrylic/Oil on Linen, 2008", title: "Restraint", year: "2008", medium: "Flashe, acrylic, oil on linen", dimensions: "60 × 58 in" },
];

// 2008-2009: 9 works
const _2008_2009: Work[] = [
  { id: "2008-2009-1", file: "/art/2008-2009/2466829.jpg", width: 605, height: 800, caption: "Untitled 1", title: "Untitled 1", year: null, medium: null, dimensions: null },
  { id: "2008-2009-2", file: "/art/2008-2009/590193.jpg", width: 594, height: 800, caption: "Untitled 2", title: "Untitled 2", year: null, medium: null, dimensions: null },
  { id: "2008-2009-3", file: "/art/2008-2009/659236.jpg", width: 598, height: 800, caption: "Untitled 3", title: "Untitled 3", year: null, medium: null, dimensions: null },
  { id: "2008-2009-4", file: "/art/2008-2009/2272913.jpg", width: 592, height: 800, caption: "Untitled 4a", title: "Untitled 4a", year: null, medium: null, dimensions: null },
  { id: "2008-2009-5", file: "/art/2008-2009/8616052.jpg", width: 573, height: 800, caption: "Untitled 5", title: "Untitled 5", year: null, medium: null, dimensions: null },
  { id: "2008-2009-6", file: "/art/2008-2009/4156899.jpg", width: 585, height: 800, caption: "Untitled 6", title: "Untitled 6", year: null, medium: null, dimensions: null },
  { id: "2008-2009-7", file: "/art/2008-2009/5660648.jpg", width: 597, height: 800, caption: "Untitled 7", title: "Untitled 7", year: null, medium: null, dimensions: null },
  { id: "2008-2009-8", file: "/art/2008-2009/1600546.jpg", width: 598, height: 800, caption: "Untitled 8", title: "Untitled 8", year: null, medium: null, dimensions: null },
  { id: "2008-2009-9", file: "/art/2008-2009/2171645.jpg", width: 1100, height: 706, caption: "Untitled 19", title: "Untitled 19", year: null, medium: null, dimensions: null },
];

// the-arrival-of-anselm-kiefer-in-bunclody: 7 works
const the_arrival_of_anselm_kiefer_in_bunclody: Work[] = [
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-1", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/2084927.jpg", width: 600, height: 421, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-2", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/3954540.jpg", width: 600, height: 418, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-3", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/4811727.jpg", width: 600, height: 416, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-4", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/6214805.jpg", width: 600, height: 420, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-5", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/4599890.jpg", width: 600, height: 419, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-6", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/4086077.jpg", width: 600, height: 422, caption: null, title: null, year: null, medium: null, dimensions: null },
  { id: "the-arrival-of-anselm-kiefer-in-bunclody-7", file: "/art/the-arrival-of-anselm-kiefer-in-bunclody/4926754.jpg", width: 600, height: 421, caption: null, title: null, year: null, medium: null, dimensions: null },
];

// stuyvesant-fish-house-paintings: 7 works
const stuyvesant_fish_house_paintings: Work[] = [
  { id: "stuyvesant-fish-house-paintings-1", file: "/art/stuyvesant-fish-house-paintings/1539514.jpg", width: 429, height: 517, caption: "Snap 22\" x 24\" Mixed Media on Linen 2000", title: "Snap", year: "2000", medium: "Mixed media on linen", dimensions: "22 × 24 in" },
  { id: "stuyvesant-fish-house-paintings-2", file: "/art/stuyvesant-fish-house-paintings/3486581.jpg", width: 436, height: 502, caption: "Cove 14\" x 12\" Mixed Media on Linen 2000", title: "Cove", year: "2000", medium: "Mixed media on linen", dimensions: "14 × 12 in" },
  { id: "stuyvesant-fish-house-paintings-3", file: "/art/stuyvesant-fish-house-paintings/9957354.jpg", width: 595, height: 705, caption: "Here 24\" x 20\" Oil on Linen 2004", title: "Here", year: "2004", medium: "Oil on linen", dimensions: "24 × 20 in" },
  { id: "stuyvesant-fish-house-paintings-4", file: "/art/stuyvesant-fish-house-paintings/8450268.jpg", width: 430, height: 521, caption: "Crossroad 24\" x 20\" Mixed Media on Linen 2000", title: "Crossroad", year: "2000", medium: "Mixed media on linen", dimensions: "24 × 20 in" },
  { id: "stuyvesant-fish-house-paintings-5", file: "/art/stuyvesant-fish-house-paintings/8495208.jpg", width: 426, height: 506, caption: "Piano 24\" x 20\" Mixed Media on Linen 2000", title: "Piano", year: "2000", medium: "Mixed media on linen", dimensions: "24 × 20 in" },
  { id: "stuyvesant-fish-house-paintings-6", file: "/art/stuyvesant-fish-house-paintings/2201903.jpg", width: 425, height: 494, caption: "Bridge 24\" x 20\" Mixed Media on Linen 2000", title: "Bridge", year: "2000", medium: "Mixed media on linen", dimensions: "24 × 20 in" },
  { id: "stuyvesant-fish-house-paintings-7", file: "/art/stuyvesant-fish-house-paintings/6378807.jpg", width: 427, height: 508, caption: "Belacqua 24\" x 20\" Mixed Media on Linen 2000", title: "Belacqua", year: "2000", medium: "Mixed media on linen", dimensions: "24 × 20 in" },
];

// fuller-building-paintings: 4 works
const fuller_building_paintings: Work[] = [
  { id: "fuller-building-paintings-1", file: "/art/fuller-building-paintings/4579834.jpg", width: 696, height: 800, caption: "The Promised Land, 72\" x 60\", 1993, Oil on Linen", title: "The Promised Land", year: "1993", medium: "Oil on linen", dimensions: "72 × 60 in" },
  { id: "fuller-building-paintings-2", file: "/art/fuller-building-paintings/8357900.jpg", width: 748, height: 800, caption: "Fuller Building Painting VII, 60\" x 58\", 1992, oil on linen", title: "Fuller Building Painting VII", year: "1992", medium: "Oil on linen", dimensions: "60 × 58 in" },
  { id: "fuller-building-paintings-3", file: "/art/fuller-building-paintings/6038367.jpg", width: 756, height: 800, caption: "Fuller Building Painting VI, 60\" x 58\", 1992, oil on linen", title: "Fuller Building Painting VI", year: "1992", medium: "Oil on linen", dimensions: "60 × 58 in" },
  { id: "fuller-building-paintings-4", file: "/art/fuller-building-paintings/9158607.jpg", width: 789, height: 800, caption: "Fuller Building Painting V, 60\" x 58\", 1992, oil on linen", title: "Fuller Building Painting V", year: "1992", medium: "Oil on linen", dimensions: "60 × 58 in" },
];

export const series: Series[] = [
  {
    slug: "lsabs",
    title: "LSABS",
    years: "2020-22",
    subtitle: "Like something almost being said",
    statement: [
      "“Like something almost being said” (LSABS) is the second line of Philip Larkin’s poem The Trees.",
      "The poem encourages hope, optimism and fresh beginnings, and is the inspiration for this body of work which I began in 2020.",
    ],
    detail: null,
    coverIndex: 14,
    works: lsabs,
  },
  {
    slug: "autumn-works-2020",
    title: "Autumn Works",
    years: "2020",
    subtitle: "New paintings on paper",
    statement: [],
    // Verbatim from the old page: "Acrylic/ Watercolor /Silver/ Resin/ Paper".
    detail: "Acrylic, watercolor, silver, resin, paper",
    coverIndex: 0,
    works: autumn_works_2020,
  },
  {
    slug: "golden-books",
    title: "Golden Books",
    years: "2012-2018",
    subtitle: null,
    // The old page says "22 Karat Gold" here while several captions say "23K". Both kept as written.
    statement: [
      "Evoking literature, architecture and music.",
      "22 Karat Gold with oil, acrylic and flashe paint on wood panel.",
    ],
    detail: null,
    coverIndex: 19,
    works: golden_books,
  },
  {
    slug: "staves",
    title: "Staves",
    years: "2012-2015",
    subtitle: null,
    statement: [],
    detail: null,
    coverIndex: 5,
    works: staves,
  },
  {
    slug: "city-works",
    title: "City Works",
    years: "2013",
    subtitle: null,
    statement: [],
    detail: "24 × 18 in, 22 karat goldleaf, acrylic, oil, linen on wood panel, 2013",
    coverIndex: 0,
    works: city_works,
  },
  {
    slug: "works-on-paper",
    title: "Works on Paper",
    years: "2010",
    subtitle: null,
    statement: [
      "When I travel to and from my studio next to the Hudson River in the Hell’s Kitchen neighborhood of New York City I am always struck by the perpetual motion and physical changes at play.",
      "From the vantage point of my studio I see and experience the elements that make up these changes, some fast moving and monumental others almost imperceptible.",
      "For this body of work I painted with quick drying Flashe paint and high-keyed translucent acrylic on handmade paper to build fixed point grids, veils of color and translucent river and glass reflections to interpret some of these elements in a spontaneous and whimsical way.",
    ],
    detail: "8 × 5.5 in, Flashe, acrylic on paper, 2010",
    coverIndex: 0,
    works: works_on_paper,
  },
  {
    slug: "large-paintings",
    title: "Large Paintings",
    years: "2007-2014",
    subtitle: null,
    statement: [],
    detail: null,
    coverIndex: 3,
    works: large_paintings,
  },
  {
    slug: "2008-2009",
    title: "2008-2009",
    years: null,
    subtitle: null,
    statement: [],
    detail: "16 × 12 in, Flashe, acrylic, linen",
    coverIndex: 0,
    works: _2008_2009,
  },
  {
    slug: "stuyvesant-fish-house-paintings",
    title: "The Stuyvesant-Fish House Paintings",
    years: "1999-2001",
    subtitle: null,
    statement: [],
    detail: null,
    coverIndex: 6,
    works: stuyvesant_fish_house_paintings,
  },
  {
    slug: "the-arrival-of-anselm-kiefer-in-bunclody",
    title: "The Arrival of Anselm Kiefer in Bunclody",
    years: "1991",
    subtitle: null,
    statement: [
      "Varient Monotype printed at Deriere L’Etoile Studios, New York. 1991 in a series of 6 portfolios with 7 images on Arches cover 270 grams paper.",
    ],
    detail: "Paper size 24 1/2 × 35 in, image size 19 × 27 in",
    coverIndex: 0,
    works: the_arrival_of_anselm_kiefer_in_bunclody,
  },
  {
    slug: "fuller-building-paintings",
    title: "Fuller Building Paintings",
    years: "1989-1994",
    subtitle: null,
    statement: [],
    detail: null,
    coverIndex: 0,
    works: fuller_building_paintings,
  },
];

export const featuredWork = { series: series[0], work: coverOf(series[0]) };

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

export function coverOf(s: Series): Work {
  return s.works[s.coverIndex] ?? s.works[0];
}

export function seriesTitle(s: Series): string {
  return s.years && s.years !== s.title ? `${s.title}, ${s.years}` : s.title;
}

/** Lines for a wall label, in order. Never invents a title. */
export function labelLines(work: Work, s: Series, index: number): { title: string | null; lines: string[] } {
  const lines: string[] = [];
  if (work.year) lines.push(work.year);
  if (work.medium) lines.push(work.medium);
  if (work.dimensions) lines.push(work.dimensions);
  if (!work.title && !work.medium && !work.dimensions && s.detail) lines.push(s.detail);
  const title = work.title ?? `${s.title}, ${index + 1} of ${s.works.length}`;
  return { title, lines };
}

export function altText(work: Work, s: Series, index: number): string {
  const { title, lines } = labelLines(work, s, index);
  return [title, ...lines].join(", ") + ", by Martin Mullin";
}

export const totalWorks = series.reduce((n, s) => n + s.works.length, 0);
