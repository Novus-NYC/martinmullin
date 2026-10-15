/**
 * Central site configuration. Anything unknown is null and the UI that would
 * show it stays hidden until the client supplies it.
 */
export const site = {
  name: "Martin Mullin",
  shortName: "Martin Mullin",
  tagline: "Painter. Born in Ireland, lives and works in New York City.",
  description:
    "Paintings and works on paper by Martin Mullin, an Irish-born artist living and working in New York City. Series from 1989 to the present, biography, CV and contact.",
  url: "https://www.martinmullin.com",
  email: "martin@martinmullin.com",
  city: "New York City",
  phone: null as string | null,
  instagram: null as string | null,
  studioAddress: null as string | null,
  portrait: {
    file: "/portrait-by-jason-schmidt.jpg",
    width: 350,
    height: 239,
    credit: "Portrait by Jason Schmidt",
  },
  documents: {
    biography: "/documents/martin-mullin-biography.pdf",
    resume: "/documents/martin-mullin-resume.pdf",
  },
  credit: { label: "Made by Novus", href: "https://novusnyc.org" },
  nav: [
    { href: "/work", label: "Work" },
    { href: "/biography", label: "Biography" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
