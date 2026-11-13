import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { howItWorksContent } from "./how-it-works.content";
import { StepVisual } from "./visuals/StepVisual";

export function HowItWorksNarrative() {
  const { steps, ctaButton } = howItWorksContent;

  return (
    <div className="relative space-y-24 py-8 md:space-y-32">
      {/* Central Illuminated Pipeline Thread on Desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 bottom-12 left-1/2 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-onlyfold-teal via-agentic-purple to-aqua-mint opacity-25 lg:block"
      />

      {steps.map((step, index) => {
        const isEven = index % 2 === 1;

        return (
          <RevealOnScroll
            key={step.id}
            className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Center Node Badge on Desktop */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-core-navy text-xs font-extrabold text-aqua-mint shadow-xl">
                {step.number}
              </div>
            </div>

            {/* Visual Column */}
            <div
              className={`flex flex-col items-center ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="w-full">
                <StepVisual stepId={step.id} />
              </div>

              {/* Colocated Micro Social Proof / Metric (TeleCRM style) */}
              <div className="mt-4 w-full max-w-[480px] rounded-2xl border border-white/10 bg-core-navy/60 p-4 shadow-lg backdrop-blur-md transition-colors hover:border-white/20">
                <div className="flex items-start gap-3.5">
                  {/* Founder / Leader Initials Monogram Badge */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-aqua-mint/40 bg-gradient-to-br from-core-navy to-electric-blue text-xs font-black text-aqua-mint shadow-inner">
                    {step.socialProof.author.split(" ")[0]?.[0]}
                    {step.socialProof.author.split(" ")[1]?.[0]}
                  </div>

                  <div className="flex-1">
                    <p className="text-xs leading-relaxed text-white/90 italic">
                      &ldquo;{step.socialProof.quote}&rdquo;
                    </p>
                    <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/5 pt-2">
                      <p className="text-[11px] font-medium text-white/60">
                        — {step.socialProof.author}
                      </p>
                      <span className="shrink-0 rounded-full border border-aqua-mint/30 bg-aqua-mint/15 px-2.5 py-0.5 text-[10px] font-bold text-aqua-mint">
                        {step.socialProof.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div
              className={`flex flex-col items-start ${
                isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
              }`}
            >
              {/* Step Chip & Eyebrow */}
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-aqua-mint lg:hidden">
                  {step.number}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-aqua-mint uppercase">
                  {step.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {step.title}
              </h3>

              {/* Problem-Solution Subtitle */}
              <p className="mt-3 text-base leading-relaxed text-white/70">
                {step.subtitle}
              </p>

              {/* 3 Checkmark Benefit Points */}
              <ul className="mt-6 space-y-3">
                {step.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-mint/20 text-xs font-bold text-aqua-mint">
                      ✓
                    </span>
                    <span className="text-sm text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Section CTA Button */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="sm"
                  href={ctaButton.href}
                  className="shadow-lg shadow-electric-blue/20"
                >
                  {ctaButton.label}
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
