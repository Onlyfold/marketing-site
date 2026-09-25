import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { TrustBadges } from "./TrustBadges";
import { closingCtaContent } from "./closing-cta.content";

export function ClosingCta() {
  const { title, description, cta, trustBadges } = closingCtaContent;

  return (
    <Section
      id="trial"
      className="relative overflow-hidden bg-core-navy py-32 text-center text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-1/2 z-[1] animate-gradient-drift bg-gradient-brand-4 bg-[length:200%_200%] opacity-90"
      />

      <Container className="relative z-[2] flex flex-col items-center">
        <RevealOnScroll className="flex max-w-[800px] flex-col items-center gap-8">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-headline">
            {title}
          </h2>
          <p className="max-w-[600px] text-lg leading-[1.6] opacity-90">
            {description}
          </p>
          <div className="mt-4">
            <Button variant="white" size="lg" href={cta.href}>
              {cta.label}
            </Button>
          </div>
          <TrustBadges badges={trustBadges} />
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
