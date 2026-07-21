import { ImageResponse } from "next/og";
import { ProfileData } from "@/data/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0077ff 0%, #003a80 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, opacity: 0.85 }}>{ProfileData.role}</div>
      <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16 }}>{ProfileData.name}</div>
      <div style={{ fontSize: 32, marginTop: 24, opacity: 0.9 }}>{ProfileData.tagline}</div>
    </div>,
    { ...size },
  );
}
