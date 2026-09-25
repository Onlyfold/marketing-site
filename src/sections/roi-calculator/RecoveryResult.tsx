"use client";

import { Button } from "@/components/ui/Button";
import { useCountUp } from "@/lib/animations/use-count-up";
import { formatInr } from "@/lib/format-number";
import { StatHighlight } from "./StatHighlight";
import type { roiCalculatorContent } from "./roi-calculator.content";

interface RecoveryResultProps {
  readonly amount: number;
  readonly content: typeof roiCalculatorContent.result;
}

/** White result panel: the animated amount, CTA and supporting stats. */
export function RecoveryResult({ amount, content }: RecoveryResultProps) {
  const amountRef = useCountUp<HTMLParagraphElement>(amount, {
    format: formatInr,
  });

  return (
    <div className="flex w-[400px] flex-col justify-center bg-white p-12 text-core-navy below-calc:w-full below-xs:px-6 below-xs:py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium text-text-grey">{content.label}</p>
        <p
          ref={amountRef}
          aria-live="polite"
          className="text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-extrabold text-core-navy"
        >
          {formatInr(0)}
        </p>
        <p className="mb-4 text-xs text-text-grey">{content.description}</p>

        <Button
          variant="indigo"
          href={content.cta.href}
          className="w-full px-0 py-4"
        >
          {content.cta.label}
        </Button>

        <div className="mt-8 flex w-full justify-between border-t border-light-grey pt-8">
          {content.stats.map((stat) => (
            <StatHighlight key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
