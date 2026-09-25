import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "./ProcessSteps";
import { howItWorksContent } from "./how-it-works.content";

export function HowItWorks() {
  const { heading, steps, closingLine } = howItWorksContent;

  return (
    <Section
      id="features"
      className="relative overflow-hidden bg-gradient-how-it-works py-24 text-white"
    >
      <Container>
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          description={heading.description}
          className="mx-auto mb-20 max-w-[800px] gap-6"
          titleClassName="text-[clamp(2rem,4vw,3.5rem)] leading-[1.2]"
          descriptionClassName="leading-[1.6] opacity-90"
        />

        <ProcessSteps steps={steps} />

        <RevealOnScroll className="mt-20 flex justify-center">
          <p className="inline-flex items-center justify-center rounded-pill border-[1.5px] border-white bg-white/10 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur-[5px] transition-all duration-200 ease-base hover:bg-white hover:text-core-navy below-md:text-base">
            {closingLine}
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
