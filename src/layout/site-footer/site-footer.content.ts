import { siteConfig } from "@/config/site";
import type { CtaContent, ImageAsset } from "@/types/content";
import type { LinkGroup } from "@/types/links";

export const footerLogo: ImageAsset = {
  src: "/images/footer-logo.png",
  alt: "Onlyfold",
  width: 150,
  height: 32,
};

export const footerContent = {
  tagline: "Turn conversations into closed deals.",
  cta: {
    label: "BOOK A FREE DEMO",
    href: siteConfig.links.demo,
  } satisfies CtaContent,
  followLabel: "Follow Us:",
  rightsNotice: "All rights reserved worldwide.",
} as const;

/** Footer link columns. Destinations are placeholders until the pages exist. */
export const footerLinkGroups: readonly LinkGroup[] = [
  {
    id: "features",
    heading: "FEATURES",
    links: [
      { label: "Lead Management", href: "#" },
      { label: "WhatsApp AI Bot", href: "#" },
      { label: "Broadcast Lists", href: "#" },
      { label: "Auto Triggers", href: "#" },
    ],
  },
  {
    id: "comparisons",
    heading: "COMPARISONS",
    links: [
      { label: "Onlyfold vs Wati", href: "#" },
      { label: "Onlyfold vs AISensy", href: "#" },
    ],
  },
  {
    id: "industries",
    heading: "INDUSTRIES",
    links: [
      { label: "Coaching & EdTech", href: "#" },
      { label: "Real Estate", href: "#" },
      { label: "Fintech", href: "#" },
      { label: "B2B Services", href: "#" },
      { label: "Events & Ticketing", href: "#" },
    ],
  },
  {
    id: "resources",
    heading: "RESOURCES",
    links: [
      { label: "Support", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "API Documentation", href: "#" },
    ],
  },
  {
    id: "company",
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];
