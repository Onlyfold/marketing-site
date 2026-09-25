import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ClientLogoMarquee } from "./ClientLogoMarquee";
import { clientLogos, trustedByContent } from "./trusted-by.content";

/** Social proof strip below the hero (not a landmark section — no anchor on the reference site). */
export function TrustedBy() {
  return (
    <RevealOnScroll className="bg-background pt-16 pb-24 text-center">
      <Container>
        <div className="mb-12 flex flex-col items-center gap-2">
          <Eyebrow tone="grey">{trustedByContent.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-core-navy">
            {trustedByContent.title}
          </h2>
        </div>
        <ClientLogoMarquee logos={clientLogos} />
      </Container>
    </RevealOnScroll>
  );
}
