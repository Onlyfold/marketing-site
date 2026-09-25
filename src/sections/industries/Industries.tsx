import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientGlow } from "./AmbientGlow";
import { IndustryCard } from "./IndustryCard";
import { industriesContent } from "./industries.content";

export function Industries() {
  const { heading, industries, cta } = industriesContent;

  return (
    <Section
      id="industries"
      className="relative overflow-hidden bg-background py-32"
    >
      <AmbientGlow />

      <Container className="relative z-[2]">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          className="mx-auto mb-20 max-w-[700px]"
          titleClassName="text-4xl leading-[1.2] text-core-navy below-md:text-3xl"
          descriptionClassName="text-text-grey"
        />

        <RevealOnScroll variant="scale-up">
          <ul className="mx-auto grid max-w-[1000px] grid-cols-4 gap-6 below-lg:grid-cols-3 below-md:grid-cols-2 below-md:gap-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.name} {...industry} />
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16 flex justify-center">
          <Button variant="outline" href={cta.href} className="px-10">
            {cta.label}
          </Button>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
