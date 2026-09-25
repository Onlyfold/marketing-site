import { siteConfig } from "@/config/site";
import type { CtaContent, SectionHeadingContent } from "@/types/content";

export interface IndustryContent {
  readonly name: string;
  readonly icon: string;
}

export const industriesContent = {
  heading: {
    eyebrow: "INDUSTRIES",
    title: "Built for businesses that initiate or close deals on WhatsApp.",
    description:
      "Onlyfold automates high-intent sales pipelines from first touch to sales.",
  } satisfies SectionHeadingContent,
  industries: [
    { name: "Tour & Travel", icon: "🏕️" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Coaching & EdTech", icon: "🎓" },
    { name: "Fintech", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "B2B Services", icon: "🤝" },
    { name: "Consulting Firms", icon: "📊" },
    { name: "Events & Ticketing", icon: "🎫" },
  ] satisfies readonly IndustryContent[],
  cta: {
    label: "Try Onlyfold →",
    href: siteConfig.links.demo,
  } satisfies CtaContent,
} as const;
