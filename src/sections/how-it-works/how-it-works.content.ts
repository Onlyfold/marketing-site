import type { SectionHeadingContent } from "@/types/content";

export type ProcessStepId =
  "capture" | "qualify" | "followup" | "alert" | "close";

export interface ProcessStepSocialProof {
  readonly quote: string;
  readonly author: string;
  readonly metric: string;
}

export interface ProcessStepVisualMeta {
  readonly badge: string;
  readonly headline: string;
  readonly subline: string;
}

export interface ProcessStepContent {
  readonly id: ProcessStepId;
  readonly number: string;
  readonly tag: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly benefits: readonly string[];
  readonly socialProof: ProcessStepSocialProof;
  readonly visualMeta: ProcessStepVisualMeta;
}

export const howItWorksContent = {
  heading: {
    badge: "HOW THE SYSTEM WORKS",
    title: "One AI-Powered Engine, Zero Leaked Leads.",
    description:
      "No missed enquiries. No late replies. No cold calling. Just WhatsApp, AI, and your team closing the deals.",
  } satisfies SectionHeadingContent,
  ctaButton: {
    label: "BOOK A FREE DEMO",
    href: "#demo",
  },
  steps: [
    {
      id: "capture",
      number: "01",
      tag: "Instant Capture",
      eyebrow: "INSTANT LEAD INGESTION",
      title: "All leads captured in one place automatically",
      subtitle:
        "Your team shouldn't hunt for enquiries across ads, forms, and missed calls.",
      benefits: [
        "Leads from Meta Ads, Google Ads, forms, websites, and missed calls in one CRM.",
        "Slow reply = lost sale. Onlyfold replies in under 3 seconds.",
      ],
      socialProof: {
        quote:
          "Our first-response time dropped from 4 hours to 3 seconds. Unreachable lead rates plunged to near zero.",
        author: "Vikram R., Head of Growth",
        metric: "< 3s Response",
      },
      visualMeta: {
        badge: "24/7 AUTO-CAPTURE",
        headline: "Meta Ad Click Verified",
        subline: "Synced to WhatsApp & CRM in 2.4s",
      },
    },
    {
      id: "qualify",
      number: "02",
      tag: "AI Discovery",
      eyebrow: "WHATSAPP AI QUALIFICATION",
      title: "Qualify before the call",
      subtitle:
        "Stop using sales team time to find out whether a lead is serious. Let Onlyfold identify who is worth a call.",
      benefits: [
        "Onlyfold chats in English, Hindi, Hinglish, and regional languages.",
        "Know your customer intent upfront before picking up the phone.",
      ],
      socialProof: {
        quote:
          "Onlyfold filters out 60% of unqualified enquiries on WhatsApp. Our reps now speak only to serious buyers with budget.",
        author: "Pooja M., Sales Director",
        metric: "60% Junk Filtered",
      },
      visualMeta: {
        badge: "AI DISCOVERY LIVE",
        headline: "Rajesh Sharma",
        subline: "Budget: ₹1.5 Cr • Ready to Book",
      },
    },
    {
      id: "followup",
      number: "03",
      tag: "Auto Sequence",
      eyebrow: "RELENTLESS AUTO-CADENCE",
      title: "Follow-up runs automatically",
      subtitle:
        "Most sales need 5+ follow-ups. Humans do 1–2. Onlyfold does all 5.",
      benefits: [
        "Multi-day WhatsApp nurture with carousels, PDFs, images, and videos.",
        "Your brand stays top of mind while competitors go silent.",
      ],
      socialProof: {
        quote:
          "42% of our closed sales come from automated follow-ups sent on Day 3 and Day 5 that our team used to miss.",
        author: "Rohan S., Founder",
        metric: "+42% Recovered Sales",
      },
      visualMeta: {
        badge: "MULTI-TOUCH CADENCE",
        headline: "Auto-Nurture Active",
        subline: "Day 3 Re-engagement • Reply Received",
      },
    },
    {
      id: "alert",
      number: "04",
      tag: "Buying Intent",
      eyebrow: "INSTANT WHATSAPP ALERTS",
      title: "Hot lead alert sent to your team's WhatsApp instantly",
      subtitle:
        "A hot lead sitting in a dashboard is a lost lead. Onlyfold alerts your team instantly on WhatsApp.",
      benefits: [
        "Instant WhatsApp alert with full buyer context and verified need.",
        "1-tap Call Now or Open Chat directly from WhatsApp.",
      ],
      socialProof: {
        quote:
          "Our reps live on WhatsApp. Getting hot lead alerts with the full summary directly in chat changed everything.",
        author: "Anil K., Commercial Sales Head",
        metric: "Instant Ping",
      },
      visualMeta: {
        badge: "🔥 HOT LEAD ALERT",
        headline: "WhatsApp Notification to Rep",
        subline: "Rajesh Sharma • 3BHK • Call at 4 PM",
      },
    },
    {
      id: "close",
      number: "05",
      tag: "Rep Handoff",
      eyebrow: "SEAMLESS SALES CLOSING",
      title: "Call informed. Close faster.",
      subtitle:
        "You didn't hire your team to chase. Onlyfold gives them a warm, educated buyer so they can close.",
      benefits: [
        "Full conversation history attached, no briefing needed.",
        "Let your team focus on fit, objections, and the next step — not repeating discovery questions.",
      ],
      socialProof: {
        quote:
          "Reps went from making 60 cold calls a day to closing 8 qualified high-ticket appointments every week.",
        author: "Deepak G., Managing Partner",
        metric: "3.4x Close Rate",
      },
      visualMeta: {
        badge: "DEAL CLOSED 🏆",
        headline: "Rajesh Sharma • ₹1.5 Cr Deal",
        subline: "Pre-qualified on WhatsApp • Closed on 1st Call",
      },
    },
  ] satisfies readonly ProcessStepContent[],
  closingLine:
    "Every lead you lose today won't come back. See the fix in 15 minutes.",
} as const;
