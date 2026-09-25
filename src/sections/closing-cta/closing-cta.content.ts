import { siteConfig } from "@/config/site";
import type { CtaContent } from "@/types/content";

export const closingCtaContent = {
  title: "Every lead you don't close, a competitor will.",
  description:
    "See exactly how Onlyfold qualifies, recovers, and routes your inquiries—custom-built for your agency, shown in a quick 15-minute demo.",
  cta: {
    label: "Book Your Custom Demo",
    href: siteConfig.links.demo,
  } satisfies CtaContent,
  trustBadges: [
    "Official Meta API",
    "Zero Ban Risk",
    "Complete Done-For-You Setup",
  ],
} as const;
