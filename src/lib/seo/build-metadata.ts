import type { Metadata, Viewport } from "next";
import { env } from "@/config/env";
import { siteConfig } from "@/config/site";

export interface MetadataOptions {
  readonly title?: string;
  readonly description?: string;
  readonly path?: `/${string}`;
}

/** Root or route metadata. Route-level image files (opengraph-image, icon) are picked up automatically. */
export function buildMetadata(options?: MetadataOptions): Metadata {
  const { name, seo, locale } = siteConfig;
  const pageTitle = options?.title ?? siteConfig.title;
  const pageDescription = options?.description ?? siteConfig.description;
  const canonicalPath = options?.path ?? "/";

  return {
    metadataBase: new URL(siteConfig.url),
    title: options?.title
      ? { default: options.title, template: `%s | ${name}` }
      : { default: siteConfig.title, template: `%s | ${name}` },
    description: pageDescription,
    applicationName: name,
    keywords: [...seo.keywords],
    authors: [{ name, url: siteConfig.url }],
    creator: name,
    publisher: name,
    category: "technology",
    formatDetection: { telephone: false },
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale,
      url: canonicalPath,
      siteName: name,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
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
    ...(env.googleSiteVerification
      ? { verification: { google: env.googleSiteVerification } }
      : {}),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#191841",
};
