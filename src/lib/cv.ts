/**
 * Carried over from the CV page and the résumé PDF on the previous site,
 * word for word. Accents (Française, Condé) come from the PDF.
 */
import type { Entry } from "@/lib/biography";

export const resume: Entry[] = [
  {
    year: "2011-2018",
    text: "Managed private studio, bought and sold secondary market artworks for collectors and for my own account from my studio in Hell’s Kitchen, NY.",
  },
  {
    year: "2007-2011",
    text: "Consulted with Artists Rights Society (ARS) and Art Resource on business development strategies. Developed a campaign to expand new member artists and museums. Advocated advancing the Artists Resale Royalties initiative by organizing and moderating a panel on Artists Resale Royalties at NYU’s La Maison Française and had the transcript of the proceedings published in the IFAR Journal (International Foundation for Art Research Vol.12 No.4 2011). Co Curated HENRI MATISSE: Writers on Paper, Selected Drawings and Prints from the Pierre and Tana Matisse Foundation at NYU’s La Maison Française.",
  },
  {
    year: "2005-2007",
    text: "Founded, Directed and Curated MEET A MUSEUM, a museum initiative which brought focused exhibitions to Midtown Manhattan from museums worldwide. I negotiated with museum directors and curators, proposed exhibitions which were curated in collaboration with them, managed their formats and accompanying events. Supervised all functions which included managing logistics shipping, insurance, installations, writing announcements, brochures, catalogs and press releases. Co-Produced a documentary on “Hide/Seek Difference and Desire in American Portraiture”, an exhibition at the National Portrait Gallery Washington, which was aired by PBS.",
  },
  {
    year: "1999-2005",
    text: "Private Investigator, focused on art related investigations for law firms with art recovery and art insurance practices as well as galleries and private clients. Developed and Instructed “Global Issues in Art and Crime” at John Jay College of Criminal Justice, City University of New York. Organized and moderated a panel discussion titled “Cultural Genocide: Keys to Political, Economic, Religious and Cultural Dominance” at The New School, New York.",
  },
  {
    year: "1993-1999",
    text: "Co Published, in collaboration with Museum Towers Editions, prints and portfolios by contemporary artists which are in private and museum collections including MoMA, The Metropolitan Museum of Art, Fine Arts Museums San Francisco, The Whitney Museum, The Brooklyn Museum.",
  },
  {
    year: "1989-1993",
    text: "Estate of Pierre Matisse, worked with the trustees on issues of conservation management, blind distribution of art to heirs and institutions.",
  },
  {
    year: "1983-1989",
    text: "Art Director at Condé Nast magazines, designed editorial and promotional materials for Vanity Fair, Vogue, GQ, House & Gardens.",
  },
  {
    year: "1981-1983",
    text: "Graphic Designer/Storyboard artist for 35mm film, Tropicana Animation Studios, Los Angeles.",
  },
  {
    year: "1980-1981",
    text: "Art director/storyboard designer for animation and commercial industrial shows, New York.",
  },
  {
    year: "1973-1980",
    text: "Account Executive, Ross Woodruff Advertising, London.",
  },
];

export const resumeEducation = [
  "St. Joseph’s College, Manorhamilton, Ireland",
  "B.A. Balinafad College, Ireland",
  "Art Students League, New York",
  "National Academy of Design, New York",
];

export type Scan = { file: string; width: number; height: number; alt: string };

export const referenceLetters: Scan[] = [
  { file: "/cv/museum-letters-single.jpeg", width: 617, height: 800, alt: "Letter of reference from the New-York Historical Society, August 16, 2008" },
  { file: "/cv/museum-letters-single-1.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum director, page 1 of 8" },
  { file: "/cv/museum-letters-single-2.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum director, page 3 of 8" },
  { file: "/cv/hand-written-again.jpg", width: 617, height: 800, alt: "Handwritten letter of reference" },
  { file: "/cv/museum-letters-single-4.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum curator, page 5 of 8" },
  { file: "/cv/museum-letters-single-5.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum curator, page 6 of 8" },
  { file: "/cv/museum-letters-single-6.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum director, page 7 of 8" },
  { file: "/cv/museum-letters-single-7.jpeg", width: 617, height: 800, alt: "Letter of reference from a museum director, page 8 of 8" },
];

export const catalogs: Scan[] = [
  { file: "/cv/alex-katz_1.jpg", width: 1100, height: 623, alt: "MEET A MUSEUM catalog: Alex Katz, Early Paintings, The Farnsworth Art Museum, March 15 to May 4, 2007" },
  { file: "/cv/andy-worhal.jpg", width: 1100, height: 618, alt: "MEET A MUSEUM catalog: Andy Warhol exhibition" },
  { file: "/cv/norman-rockwell.jpg", width: 1100, height: 637, alt: "MEET A MUSEUM catalog: Norman Rockwell exhibition" },
];

export const matisseCatalog: Scan = {
  file: "/cv/screen-shot-2018-10-23-at-3-35-26-pm.png",
  width: 454,
  height: 448,
  alt: "Catalog cover: Henri Matisse, Writers on Paper, Selected Drawings and Prints from the Pierre and Tana Matisse Foundation",
};

export const publicity = {
  press:
    "Managed all press contacts for reviews and articles published in a broad range of news outlets including The New York Times, The Art Newspaper, New York Magazine, The New York Sun, and Yahoo.",
  television: {
    heading: "Television production story consultation",
    text: "Co-Produced documentary Hide/Seek Difference and Desire in American Portraiture at the National Portrait Gallery, Washington DC. Aired on PBS stations nationwide.",
    href: "https://www.youtube.com/watch?v=NGGvzn-ZqgM",
    linkLabel: "Watch Hide/Seek on YouTube",
  },
  programming: {
    heading: "Public programming",
    items: [
      {
        text: "NYU: organized and moderated the panel discussion Artist’s Resale Royalties. Transcript published in IFAR Journal Vol.12 No.4 2011.",
        href: "https://www.ifar.org/publication_detail.php?docid=1326744954",
        linkLabel: "IFAR Journal",
      },
      {
        text: "The New School: organized and moderated the panel discussion Cultural Genocide: Keys to Political, Economic, Religious and Cultural Dominance.",
        href: null,
        linkLabel: null,
      },
    ],
  },
};

export type PressLink = { title: string; by: string | null; outlet: string; date: string; href: string };

/** Media coverage of MEET A MUSEUM exhibitions, as linked on the previous site. */
export const pressLinks: PressLink[] = [
  { title: "Amid the A.T.M’s Art Blossoms", by: "Jennifer Bleyer", outlet: "The New York Times", date: "January 7, 2007", href: "http://www.nytimes.com/2007/01/07/nyregion/thecity/07bank.html?scp=2&sq=park+avenue+bank&st=nyt" },
  { title: "Deposit of Portraits", by: "John Goodrich, front page", outlet: "The New York Sun", date: "January 10, 2008", href: "https://www.nysun.com/arts/deposit-of-portraits/69297/" },
  { title: "A Colorless Look at Rockwell’s Romantic Realism", by: "Maureen Mularkey", outlet: "The New York Sun", date: "May 29, 2008", href: "http://www.nysun.com/arts/a-colorless-look-at-rockwells-romantic-realism/78808/" },
  { title: "Banking on Art, Around Town", by: "Kate Taylor", outlet: "The New York Sun", date: "January 17, 2007", href: "https://www.nysun.com/arts/banking-on-art/46877/" },
  { title: "Art in Brief: Faith and Fortune, Five Centuries of European Masterworks", by: null, outlet: "The New York Sun", date: "December 28, 2006", href: "https://www.nysun.com/arts/art-in-brief-2006-12-28/45865/" },
  { title: "Warhol’s Tribe", by: "Beth Schwartzapfel", outlet: "The Jewish Daily Forward", date: "February 23, 2007", href: "https://forward.com/culture/10159/warhol-s-tribe/" },
  { title: "20th Century American Women in the Collection of Frances Lehman Loeb Art Center, Vassar College", by: null, outlet: "Artnet", date: "October 25, 2007", href: "http://www.artnet.com/magazineus/features/finch/finch10-25-07.asp" },
  { title: "Park Avenue Bank Launches Exhibition Program", by: null, outlet: "Artnet", date: "November 16, 2007", href: "http://www.artnet.com/magazineus/news/artnetnews/artnetnews11-16-06.asp" },
  { title: "Banking With Warhol and the Jews", by: "Jonathan Chait", outlet: "New York Magazine", date: "January 19, 2007", href: "http://nymag.com/intelligencer/2007/01/banking_with_warhol_and_the_je.html" },
];
