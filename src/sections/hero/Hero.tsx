import { Section } from "@/components/ui/Section";
import { HeroIntro } from "./HeroIntro";

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-background pt-40 pb-20 text-center"
    >
      <HeroIntro />
    </Section>
  );
}
