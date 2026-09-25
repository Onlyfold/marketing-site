"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { MOTION_OK } from "@/lib/animations/reveal-presets";
import { ProcessStep } from "./ProcessStep";
import type { ProcessStepContent } from "./how-it-works.content";

const SLIDE_IN = { duration: 0.8, stagger: 0.2, ease: "power3.out" } as const;

/** The five step cards, sliding in from the left on desktop and from above on mobile. */
export function ProcessSteps({
  steps,
}: {
  readonly steps: readonly ProcessStepContent[];
}) {
  const scope = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const list = scope.current;
      if (!list) return;

      const cards = "[data-reveal='step']";
      const media = gsap.matchMedia();

      media.add(`${MOTION_OK} and (min-width: 769px)`, () => {
        gsap.fromTo(
          cards,
          { x: -100, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ...SLIDE_IN,
            scrollTrigger: { trigger: list, start: "top 75%" },
          },
        );
      });

      media.add(`${MOTION_OK} and (max-width: 768px)`, () => {
        gsap.fromTo(
          cards,
          { y: -50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ...SLIDE_IN,
            scrollTrigger: { trigger: list, start: "top 85%" },
          },
        );
      });
    },
    { scope },
  );

  return (
    <ol
      ref={scope}
      className="flex flex-wrap items-stretch justify-center gap-4 below-md:flex-col below-md:items-center below-md:gap-10"
    >
      {steps.map((step, index) => (
        <ProcessStep
          key={step.title}
          {...step}
          hasNext={index < steps.length - 1}
          stackOrder={steps.length - index}
        />
      ))}
    </ol>
  );
}
