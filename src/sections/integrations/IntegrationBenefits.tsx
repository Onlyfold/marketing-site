import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { IntegrationBenefitContent } from "./integrations.content";

interface IntegrationBenefitsProps {
  readonly icon: string;
  readonly benefits: readonly IntegrationBenefitContent[];
}

export function IntegrationBenefits({
  icon,
  benefits,
}: IntegrationBenefitsProps) {
  return (
    <RevealOnScroll>
      <ul className="flex flex-col gap-6">
        {benefits.map((benefit) => (
          <li key={benefit.title} className="flex items-start gap-4 text-left">
            <span aria-hidden="true" className="text-xl leading-normal">
              {icon}
            </span>
            <p className="text-base leading-[1.6] opacity-90">
              <strong className="text-white">{benefit.title}</strong>{" "}
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}
