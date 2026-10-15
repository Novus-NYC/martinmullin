import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/** PNG fallback for browsers that do not render SVG favicons. Same mark as icon.svg. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F5F2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <div style={{ width: 27, height: 22, border: "3px solid #161616", display: "flex" }} />
        <div style={{ width: 17, height: 3, borderRadius: 2, background: "#9A7B2F", display: "flex" }} />
      </div>
    ),
    size,
  );
}
