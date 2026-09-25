import type { ImageAsset, SectionHeadingContent } from "@/types/content";

export interface IntegrationBenefitContent {
  readonly title: string;
  readonly description: string;
}

export type SatellitePosition = "top" | "bottom" | "left" | "right";

export interface OrbitSatellite {
  readonly position: SatellitePosition;
  readonly icon: ImageAsset;
  readonly rounded?: boolean;
}

export interface OrbitRingContent {
  readonly id: "inner" | "middle" | "outer";
  readonly satellites: readonly OrbitSatellite[];
}

export const integrationsContent = {
  heading: {
    badge: "INTEGRATION",
    title: "Connects with the lead sources your business runs on.",
    description:
      "Every inquiry flows straight into Onlyfold - unified, cleaned, and actioned automatically.",
  } satisfies SectionHeadingContent,
  benefitIcon: "✅",
  benefits: [
    {
      title: "Zero integration headaches:",
      description:
        "We custom-configure your ad accounts, webhooks, and forms during onboarding so your pipeline is bulletproof.",
    },
    {
      title: "Always in sync:",
      description:
        "Incoming leads trigger instant workflows in true real time, not slow scheduled batches.",
    },
    {
      title: "Phone dedup everywhere:",
      description:
        "Normalizes every contact by phone number so reps never cross wires or pitch the same buyer twice.",
    },
    {
      title: "AI picks up immediately:",
      description:
        "Lead qualified on WhatsApp instantly, regardless of where the prospect clicked.",
    },
  ] satisfies readonly IntegrationBenefitContent[],
  orbit: {
    centerLogo: {
      src: "/images/brand-logo.png",
      alt: "Onlyfold",
      width: 90,
      height: 20,
    } satisfies ImageAsset,
    rings: [
      {
        id: "inner",
        satellites: [
          {
            position: "top",
            icon: {
              src: "/images/lead-sources/google.svg",
              alt: "Google",
              width: 24,
              height: 24,
            },
          },
        ],
      },
      {
        id: "middle",
        satellites: [
          {
            position: "left",
            icon: {
              src: "/images/lead-sources/phone-call.svg",
              alt: "Phone calls",
              width: 22,
              height: 22,
            },
          },
          {
            position: "right",
            icon: {
              src: "/images/lead-sources/web-form.svg",
              alt: "Web forms",
              width: 22,
              height: 22,
            },
          },
        ],
      },
      {
        id: "outer",
        satellites: [
          {
            position: "top",
            icon: {
              src: "/images/lead-sources/instagram.png",
              alt: "Instagram",
              width: 22,
              height: 22,
            },
          },
          {
            position: "bottom",
            icon: {
              src: "/images/lead-sources/justdial.png",
              alt: "Justdial",
              width: 24,
              height: 24,
            },
            rounded: true,
          },
          {
            position: "left",
            icon: {
              src: "/images/lead-sources/facebook.svg",
              alt: "Facebook",
              width: 22,
              height: 22,
            },
          },
          {
            position: "right",
            icon: {
              src: "/images/lead-sources/website.svg",
              alt: "Website",
              width: 22,
              height: 22,
            },
          },
        ],
      },
    ] satisfies readonly OrbitRingContent[],
  },
} as const;
