import type { SectionHeadingContent } from "@/types/content";

export interface ProcessStepContent {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export const howItWorksContent = {
  heading: {
    badge: "HOW THE SYSTEM WORKS",
    title: "One AI powered system, Zero leaked leads.",
    description:
      "Every lead runs the exact same path engaged instantly, qualified automatically, and handed to your sales reps the moment they are ready to buy.",
  } satisfies SectionHeadingContent,
  steps: [
    {
      icon: "+",
      title: "Lead lands",
      description:
        "Every enquiry - ads, web forms, a missed call or more drops directly into our CRM.",
    },
    {
      icon: "💬",
      title: "Onlyfold Qualifies",
      description:
        "Instantly asks your discovery questions to filter out tire-kickers and identify high-intent leads.",
    },
    {
      icon: "🔄",
      title: "Relentless Follow-up",
      description:
        "Chases unresponsive leads for days using a tight, automated sequence until they finally reply.",
    },
    {
      icon: "🔥",
      title: "Flags the Hot Leads",
      description:
        "The exact moment a prospect signals buying intent, your sales team gets a Slack or CRM alert to take over.",
    },
    {
      icon: "📱",
      title: "Your rep closes",
      description:
        "Your Account Executive steps in with the full chat history drafted, ready to jump on a call and close the deal.",
    },
  ] satisfies readonly ProcessStepContent[],
  closingLine: "You run a sales operation — your team just takes the calls.",
} as const;
