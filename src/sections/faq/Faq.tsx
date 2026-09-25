import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";
import { faqContent } from "./faq.content";

export function Faq() {
  const { heading, items } = faqContent;

  return (
    <Section id="faq" className="bg-surface py-32">
      <Container>
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          className="mx-auto mb-16 max-w-[700px]"
          titleClassName="text-[clamp(2rem,4vw,3rem)] text-core-navy"
        />
        <RevealOnScroll>
          <FaqAccordion items={items} />
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
