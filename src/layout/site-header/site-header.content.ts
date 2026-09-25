import { siteConfig } from "@/config/site";
import type { NavAction, NavItem } from "./site-header.types";

/**
 * Primary navigation. Anchor targets are copied verbatim from the reference site;
 * most of them have no matching section yet — update the hrefs here when pages exist.
 */
export const navItems: readonly NavItem[] = [
  {
    kind: "menu",
    id: "industry",
    label: "Industry",
    items: [
      { label: "Tour & Travel", href: "#tour-&-travel" },
      { label: "Coaching & EdTech", href: "#coaching-&-edtech" },
      { label: "Real Estate", href: "#real-estate" },
      { label: "Fintech", href: "#fintech" },
      { label: "Consulting Firms", href: "#consulting-firms" },
      { label: "B2B Services", href: "#b2b-services" },
      { label: "Healthcare", href: "#healthcare" },
      { label: "Event & Ticketing", href: "#event-&-ticketing" },
    ],
  },
  {
    kind: "menu",
    id: "features",
    label: "Features",
    items: [
      { label: "AI Qualification", href: "#ai-qualification" },
      { label: "Lead Management", href: "#lead-management" },
      { label: "Auto Follow-ups", href: "#auto-follow-ups" },
      { label: "WhatsApp CRM", href: "#whatsapp-crm" },
      { label: "WhatsApp API", href: "#whatsapp-api" },
      { label: "Integrations", href: "#integrations" },
      { label: "Lead Capture", href: "#lead-capture" },
      { label: "WhatsApp conversion API", href: "#whatsapp-conversion-api" },
    ],
  },
  { kind: "link", label: "Customer Reviews", href: siteConfig.links.reviews },
  { kind: "link", label: "Pricing", href: siteConfig.links.pricing },
];

export const navActions: readonly NavAction[] = [
  {
    label: "Start Free Trial",
    href: siteConfig.links.trial,
    variant: "outline",
  },
  { label: "Request demo", href: siteConfig.links.demo, variant: "primary" },
];

export const brandLogo = {
  src: "/images/brand-logo.png",
  alt: "Onlyfold",
  width: 150,
  height: 32,
} as const;
