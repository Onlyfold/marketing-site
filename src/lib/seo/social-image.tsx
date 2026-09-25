import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/sections/hero/hero.content";
import { loadGoogleFont } from "./load-google-font";

export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 } as const;

const COLORS = {
  navy: "#191841",
  blue: "#0708ee",
  purple: "#af4fed",
  orange: "#eb5854",
  grey: "#484b58",
} as const;

async function brandLogoDataUrl(): Promise<string> {
  const file = await readFile(
    path.join(process.cwd(), "public/images/brand-logo.png"),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

/** 1200×630 card shared by opengraph-image and twitter-image. */
export async function renderSocialImage(): Promise<ImageResponse> {
  const headline = `${heroContent.headline.highlighted}${heroContent.headline.rest}`;
  const eyebrow = heroContent.eyebrow;
  const description = siteConfig.description;

  const [logo, extraBold, medium] = await Promise.all([
    brandLogoDataUrl(),
    loadGoogleFont("Inter", 800, headline),
    loadGoogleFont("Inter", 500, `${eyebrow}${description}`),
  ]);

  const fonts = [
    extraBold && {
      name: "Inter",
      data: extraBold,
      weight: 800 as const,
      style: "normal" as const,
    },
    medium && {
      name: "Inter",
      data: medium,
      weight: 500 as const,
      style: "normal" as const,
    },
  ].filter((font) => font !== undefined);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#ffffff",
        fontFamily: "Inter",
        color: COLORS.navy,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
      <img src={logo} alt="" width={254} height={60} />

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 4,
            color: COLORS.blue,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: COLORS.grey,
            maxWidth: 900,
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 16,
          background: `linear-gradient(90deg, ${COLORS.navy}, ${COLORS.blue}, ${COLORS.purple}, ${COLORS.orange})`,
        }}
      />
    </div>,
    { ...SOCIAL_IMAGE_SIZE, fonts },
  );
}
