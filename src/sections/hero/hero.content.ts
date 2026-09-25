import { siteConfig } from "@/config/site";
import type { CtaContent, ImageAsset } from "@/types/content";

export const heroContent = {
  eyebrow: "OFFICIAL WHATSAPP BUSINESS API",
  headline: {
    highlighted: "Don't lose leads",
    rest: " you've already paid for.",
  },
  description: "Automate your business with AI Sales & Customer Support System",
  cta: {
    label: "Book a Free expert session →",
    href: siteConfig.links.demo,
  } satisfies CtaContent,
  video: {
    poster: {
      src: "/images/hero-video-poster.png",
      alt: "Preview of the Onlyfold product demo video",
      width: 1000,
      height: 562,
    } satisfies ImageAsset,
    playLabel: "Play the Onlyfold demo video",
  },
} as const;
