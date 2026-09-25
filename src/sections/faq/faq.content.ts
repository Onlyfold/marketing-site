import type { SectionHeadingContent } from "@/types/content";

export interface FaqItemContent {
  readonly question: string;
  readonly answer: string;
}

export const faqContent = {
  heading: {
    badge: "FAQ",
    title: "The questions every founder asks.",
  } satisfies SectionHeadingContent,
  items: [
    {
      question: "Will all this follow-up get my WhatsApp number banned?",
      answer:
        "No. Onlyfold runs on the official WhatsApp Business API as a verified partner. Every message is sent through approved, compliant channels so your number stays safe while the system follows up.",
    },
    {
      question: "Do I need any technical skills to set this up?",
      answer:
        "Not at all. Our team handles the entire setup, configuration, and integration process for you during onboarding.",
    },
    {
      question: "How fast does it go live?",
      answer:
        "Typically, we can have your custom system fully configured and running within 48 to 72 hours from kickoff.",
    },
    {
      question: "What if it doesn't work for us?",
      answer:
        "We offer a performance guarantee. If the system doesn't recover leads as projected, we will work with you to optimize it or offer a refund according to our terms.",
    },
    {
      question: "How is this different from AiSensy, Wati, or Meta's free AI?",
      answer:
        "Unlike standard broadcasting tools, Onlyfold is purpose-built for sales pipeline automation. It intelligently qualifies leads, handles objections, and seamlessly hands off hot prospects to your human reps.",
    },
    {
      question: "We already have a CRM. Why do we need Onlyfold?",
      answer:
        "Onlyfold acts as the intelligent layer between your lead sources and your CRM. It does the heavy lifting of qualifying and following up, ensuring only sales-ready leads ever enter your CRM.",
    },
    {
      question:
        "Will the AI message my leads on its own and say the wrong thing?",
      answer:
        "No. The AI operates strictly within the guardrails and knowledge base we establish together. It's trained on your specific products, pricing, and FAQs to ensure accurate responses.",
    },
  ] satisfies readonly FaqItemContent[],
} as const;
