import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IntegrationBenefits } from "./IntegrationBenefits";
import { LeadSourceOrbit } from "./LeadSourceOrbit";
import { integrationsContent } from "./integrations.content";

export function Integrations() {
  const { heading, benefitIcon, benefits, orbit } = integrationsContent;

  return (
    <Section
      id="integrations"
      className="overflow-hidden bg-gradient-integrations py-32 text-white"
    >
      <Container className="grid grid-cols-2 items-center gap-16 below-lg:grid-cols-1 below-lg:text-center">
        <div className="flex flex-col gap-12">
          <SectionHeading
            badge={heading.badge}
            title={heading.title}
            description={heading.description}
            className="items-start text-left below-lg:items-center below-lg:text-center"
            titleClassName="text-[clamp(2rem,4vw,3rem)] leading-[1.2]"
            descriptionClassName="leading-[1.6] opacity-90"
          />
          <IntegrationBenefits icon={benefitIcon} benefits={benefits} />
        </div>

        <RevealOnScroll
          variant="scale-up"
          className="relative flex min-h-[500px] items-center justify-center"
        >
          <LeadSourceOrbit {...orbit} />
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
