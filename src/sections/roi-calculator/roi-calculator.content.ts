import { siteConfig } from "@/config/site";
import type { CtaContent, SectionHeadingContent } from "@/types/content";
import type { SliderDefinition } from "./roi-calculator.types";

export const roiCalculatorContent = {
  heading: {
    badge: "THE COST OF THE LEAK",
    title: "See what you're leaving on the table.",
    description:
      "Stop competing with time. See immediate value and get an estimate of what Onlyfold recovers from the leads you already pay for.",
  } satisfies SectionHeadingContent,
  sliders: [
    {
      id: "leadsPerMonth",
      label: "Leads Per Month",
      unit: "count",
      min: 10,
      max: 1000,
      step: 1,
      defaultValue: 50,
    },
    {
      id: "averageDealValue",
      label: "Average deal value (₹)",
      unit: "currency",
      min: 500,
      max: 100000,
      step: 500,
      defaultValue: 8000,
    },
    {
      id: "recoveryRate",
      label: "Approx. leads Onlyfold recovers",
      unit: "percent",
      min: 1,
      max: 20,
      step: 1,
      defaultValue: 6,
    },
  ] satisfies readonly SliderDefinition[],
  result: {
    label: "Estimated annual recovery",
    description: "That's revenue slipping away without a system to recover it.",
    cta: {
      label: "Book a demo to plug the leak",
      href: siteConfig.links.demo,
    } satisfies CtaContent,
    stats: [
      { value: "10x", label: "Fast response" },
      { value: "24/7", label: "Availability" },
    ],
  },
} as const;
