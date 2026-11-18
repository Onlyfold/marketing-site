import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HowItWorksNarrative } from "./HowItWorksNarrative";
import { howItWorksContent } from "./how-it-works.content";

export function HowItWorks() {
  const { heading, closingLine } = howItWorksContent;

  return (
    <Section
      id="features"
      className="overflow-hidden bg-gradient-how-it-works py-28 text-white"
    >
      <Container className="relative z-[2]">
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          description={heading.description}
          className="mx-auto mb-16 max-w-[850px] gap-6 below-md:mb-12"
          titleClassName="text-[clamp(2rem,4vw,3.5rem)] leading-[1.2]"
          descriptionClassName="leading-[1.6] opacity-90"
        />

        <HowItWorksNarrative />

        <RevealOnScroll className="mt-20 flex justify-center">
          <p className="inline-flex items-center gap-3 rounded-pill border border-white/90 bg-white px-8 py-4 text-center text-lg font-bold text-core-navy shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-base hover:scale-[1.02] below-md:px-6 below-md:text-base">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-electric-blue"
            />
            {closingLine}
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
