import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Squad Spawn Commands – Vehicle & Deployable Admin Reference";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a1d24 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,166,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Category icons row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "24px",
            fontSize: "32px",
            opacity: 0.6,
          }}
        >
          <span>🔱</span>
          <span>⚔️</span>
          <span>🛡️</span>
          <span>🚙</span>
          <span>🚛</span>
          <span>💥</span>
          <span>🚁</span>
          <span>🚤</span>
          <span>🎯</span>
          <span>🏗️</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            letterSpacing: "-2px",
            color: "white",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          Squad Commands
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#8b949e",
            textAlign: "center",
            marginBottom: "32px",
            fontWeight: 400,
          }}
        >
          Vehicle & Deployable Admin Spawn Reference
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Click to Copy", "All Factions", "10 Categories", "Wiki Links"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(88,166,255,0.1)",
                  border: "1px solid rgba(88,166,255,0.2)",
                  borderRadius: "99px",
                  padding: "8px 20px",
                  fontSize: "18px",
                  color: "#58a6ff",
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "20px",
            color: "#484f58",
            fontWeight: 500,
          }}
        >
          squadcommands.com
        </div>
      </div>
    ),
    { ...size }
  );
}
