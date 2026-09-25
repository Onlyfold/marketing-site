import type { JsonLdNode } from "@/lib/seo/json-ld";
import { faqContent } from "./faq.content";

/** FAQPage structured data generated from the same content the page renders. */
export function faqPageSchema(): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
