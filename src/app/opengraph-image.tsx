import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/config";

export const alt = `${siteConfig.business.name} — Massage in Antwerpen`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontsDir = join(process.cwd(), "src/app/fonts");
  const [regular, italic, inter, photo] = await Promise.all([
    readFile(join(fontsDir, "CormorantGaramond-Regular.ttf")),
    readFile(join(fontsDir, "CormorantGaramond-Italic.ttf")),
    readFile(join(fontsDir, "Inter-Medium.ttf")),
    readFile(join(process.cwd(), "public/images/els/Els-in-actie.jpeg")),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#F5F0E8",
          padding: 28,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 210,
            background: "rgba(196, 120, 92, 0.10)",
            top: -140,
            left: -100,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 500,
            paddingLeft: 48,
            paddingRight: 28,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              position: "relative",
              marginBottom: 32,
            }}
          >
            {[0, 45, 90, 135].map((deg) => (
              <div
                key={deg}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `rotate(${deg}deg)`,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 28,
                    borderRadius: 8,
                    background: "#C4785C",
                    opacity: 0.9,
                    display: "flex",
                  }}
                />
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#A8603F",
                display: "flex",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 14,
              letterSpacing: "0.28em",
              color: "#C4785C",
              marginBottom: 20,
            }}
          >
            MASSAGETHERAPIE ANTWERPEN
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Cormorant Garamond",
              fontSize: 72,
              lineHeight: 1.05,
              color: "#2C2417",
              letterSpacing: "-0.02em",
            }}
          >
            Massages by Els
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Cormorant Garamond",
              fontSize: 28,
              fontStyle: "italic",
              color: "#7A6B5A",
              marginTop: 18,
              lineHeight: 1.3,
            }}
          >
            Lichaamswerk dat diep doorwerkt.
          </div>

          <div
            style={{
              display: "flex",
              width: 64,
              height: 1,
              background: "#C4785C",
              marginTop: 32,
              marginBottom: 24,
              opacity: 0.7,
            }}
          />

          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 14,
              letterSpacing: "0.12em",
              color: "#7A6B5A",
            }}
          >
            Van Schoonbekestraat · Antwerpen
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 18px 40px rgba(44, 36, 23, 0.18)",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={640}
            height={574}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 18%",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: regular, weight: 400, style: "normal" },
        { name: "Cormorant Garamond", data: italic, weight: 400, style: "italic" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    }
  );
}
