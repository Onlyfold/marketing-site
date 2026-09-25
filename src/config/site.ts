import type { Href, SocialLink } from "@/types/links";
import { env } from "./env";

/**
 * Cross-cutting site configuration: identity, canonical URL, shared links and
 * SEO defaults. Section copy lives next to each section in `*.content.ts`.
 */
export const siteConfig = {
  name: "Onlyfold",
  url: env.siteUrl,
  title: "Onlyfold | Turn conversations into closed deals",
  description:
    "Automate your business with AI Sales & Customer Support System on WhatsApp.",
  locale: "en_US",
  /** Locale used for every number shown on the page (deterministic across server and client). */
  numberLocale: "en-US",

  /**
   * Shared destinations used by CTAs across sections.
   * `#demo` and `#reviews` match the reference site and currently have no target
   * section; point them at real pages/anchors here when those exist.
   */
  links: {
    home: "/",
    demo: "#demo",
    trial: "#trial",
    pricing: "#pricing",
    reviews: "#reviews",
  } satisfies Record<string, Href>,

  video: {
    /** Placeholder id from the reference site — replace with the real product video. */
    youtubeId: "dQw4w9WgXcQ",
    title: "Onlyfold product demo",
    /** ISO 8601 date. When set, a VideoObject schema is emitted for rich results. */
    uploadDate: undefined as string | undefined,
  },

  socials: [
    { id: "linkedin", label: "LinkedIn", href: "#" },
    { id: "x", label: "X (Twitter)", href: "#" },
    { id: "youtube", label: "YouTube", href: "#" },
    { id: "facebook", label: "Facebook", href: "#" },
  ] satisfies readonly SocialLink[],

  seo: {
    keywords: [
      "WhatsApp Business API",
      "WhatsApp CRM",
      "AI sales assistant",
      "lead qualification",
      "lead follow-up automation",
      "WhatsApp automation",
      "sales pipeline automation",
    ],
    /** e.g. "@onlyfold" — omitted from twitter cards when undefined. */
    twitterHandle: undefined as string | undefined,
    ogImageAlt: "Onlyfold — Don't lose leads you've already paid for.",
  },

  smoothScroll: {
    lerp: 0.1,
    duration: 1.5,
    syncTouch: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
