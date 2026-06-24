import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Nino D — Paintings that leave the wall by Nino Devdariani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette
const INK = "#0B0B0B";
const IVORY = "#F4F1EC";
const OXBLOOD = "#581F24";
const STONE = "#A8A49D";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: IVORY,
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${OXBLOOD}`,
            padding: "64px 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: STONE,
              marginBottom: 40,
            }}
          >
            Contemporary Art · Est. 2026
          </div>

          <div
            style={{
              fontSize: 150,
              fontWeight: 700,
              letterSpacing: 28,
              textTransform: "uppercase",
              color: INK,
              lineHeight: 1,
            }}
          >
            Nino D
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              marginBottom: 36,
            }}
          >
            <div style={{ width: 60, height: 1, backgroundColor: STONE }} />
            <div
              style={{
                fontSize: 40,
                fontStyle: "italic",
                color: OXBLOOD,
                padding: "0 28px",
              }}
            >
              Paintings that leave the wall
            </div>
            <div style={{ width: 60, height: 1, backgroundColor: STONE }} />
          </div>

          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              color: INK,
              opacity: 0.75,
            }}
          >
            Original paintings · Limited editions · Wearable silk archive
          </div>

          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: STONE,
              marginTop: 48,
            }}
          >
            by Nino Devdariani · ninod.space
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
