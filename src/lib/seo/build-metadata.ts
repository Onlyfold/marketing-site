import type { Metadata, Viewport } from "next";
import { env } from "@/config/env";
import { siteConfig } from "@/config/site";

/** Root metadata. Route-level image files (opengraph-image, icon) are picked up automatically. */
export function buildMetadata(): Metadata {
  const { name, title, description, seo, locale } = siteConfig;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${name}` },
    description,
    applicationName: name,
    keywords: [...seo.keywords],
    authors: [{ name, url: siteConfig.url }],
    creator: name,
    publisher: name,
    category: "technology",
    formatDetection: { telephone: false },
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale,
      url: "/",
      siteName: name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(seo.twitterHandle
        ? { site: seo.twitterHandle, creator: seo.twitterHandle }
        : {}),
    },
    robots: env.isIndexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    verification: {
      ...(env.verification.google ? { google: env.verification.google } : {}),
      ...(env.verification.bing
        ? { other: { "msvalidate.01": env.verification.bing } }
        : {}),
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#191841",
};
