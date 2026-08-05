import { ImageResponse } from "next/og";

export const alt = "Switch Integrated";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #061b2e 0%, #0b2f4a 55%, #2bbcc0 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(43, 188, 192, 0.28)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "82px",
              height: "82px",
              borderRadius: "24px",
              background: "#2bbcc0",
              color: "#061b2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: 900,
            }}
          >
            SI
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "44px", fontWeight: 900 }}>
              Switch Integrated
            </div>
            <div style={{ marginTop: "8px", fontSize: "24px", color: "#bdeff1" }}>
              Where Businesses Connect, Engage, and Grow.
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "920px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            Digital Communication Solutions for Businesses Across Africa
          </div>

          <div
            style={{
              marginTop: "28px",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#e5f9fa",
            }}
          >
            Enterprise messaging, OTP, USSD, mobile engagement, and digital
            communication infrastructure.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
