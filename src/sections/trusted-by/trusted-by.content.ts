import type { ImageAsset } from "@/types/content";

export const trustedByContent = {
  eyebrow: "TRUSTED BY EXPERTS.",
  title: "Used by the leaders.",
} as const;

/** Client logos shown in the marquee. Heights are fixed at 60px; widths set the aspect. */
export const clientLogos: readonly ImageAsset[] = [
  {
    src: "/images/clients/clat-prep.png",
    alt: "Clat Prep",
    width: 120,
    height: 60,
  },
  { src: "/images/clients/aim.png", alt: "AIM", width: 100, height: 60 },
  {
    src: "/images/clients/raw-defence.png",
    alt: "RAW Defence",
    width: 120,
    height: 60,
  },
  {
    src: "/images/clients/epic-tickets.png",
    alt: "Epic Tickets",
    width: 140,
    height: 60,
  },
  {
    src: "/images/clients/andromeda.png",
    alt: "Andromeda",
    width: 150,
    height: 60,
  },
];
