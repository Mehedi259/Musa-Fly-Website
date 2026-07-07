import { SITE_CONFIG } from "@/constants/config";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = `${SITE_CONFIG.name} - Your Trusted Travel Partner`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #0F6FFF 0%, #00C2A8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 80 }}>{SITE_CONFIG.name}</span>
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            maxWidth: 900,
            opacity: 0.9,
          }}
        >
          Your Trusted Travel Partner
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          Flights • Tours • Visa Services
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
