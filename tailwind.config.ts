import type { Config } from "tailwindcss";

/**
 * Design tokens for martinmullin.com.
 *
 * Documented exception to the Volta Website Build Standard ("one or two
 * primary colors and one or two supplemental colors"): this is an artist's
 * portfolio and the paintings carry all the color. The palette is therefore
 * near-neutral by design, with a single supplemental gold (lifted from the
 * Golden Books and LSABS mica) reserved for focus rings, the current-page
 * marker and hover underlines. See the matching note in globals.css.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F5F2",
        surface: "#FFFFFF",
        ink: "#161616",
        muted: "#6F6C66",
        hairline: "#DDD9D2",
        accent: "#9A7B2F",
        dark: "#111111",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wall: "1320px",
        prose: "65ch",
      },
      transitionDuration: {
        reveal: "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
