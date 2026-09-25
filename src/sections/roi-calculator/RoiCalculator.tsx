import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoiCalculatorForm } from "./RoiCalculatorForm";
import { roiCalculatorContent } from "./roi-calculator.content";

export function RoiCalculator() {
  const { heading, sliders, result } = roiCalculatorContent;

  return (
    <Section id="pricing" className="relative bg-surface py-32">
      <Container>
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          description={heading.description}
          className="mx-auto mb-16 max-w-[700px]"
          titleClassName="text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-core-navy"
          descriptionClassName="text-text-grey"
        />
        <RevealOnScroll className="flex justify-center">
          <RoiCalculatorForm sliders={sliders} result={result} />
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
