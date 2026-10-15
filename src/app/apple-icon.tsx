import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** The frame-and-label mark, drawn with shapes only so no font is needed. */
export default function AppleIcon() {
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
          gap: 22,
        }}
      >
        <div style={{ width: 100, height: 84, border: "11px solid #161616", display: "flex" }} />
        <div style={{ width: 62, height: 11, borderRadius: 6, background: "#9A7B2F", display: "flex" }} />
      </div>
    ),
    size,
  );
}
