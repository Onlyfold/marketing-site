"use client";

import type { ComponentProps } from "react";
import { useRevealOnScroll } from "@/lib/animations/use-reveal-on-scroll";
import type { RevealVariant } from "@/lib/animations/reveal-presets";

interface RevealOnScrollProps extends ComponentProps<"div"> {
  readonly variant?: RevealVariant;
}

/** Block wrapper that fades/scales its content in when scrolled into view. */
export function RevealOnScroll({
  variant = "fade-up",
  ...props
}: RevealOnScrollProps) {
  const ref = useRevealOnScroll<HTMLDivElement>(variant);
  return <div ref={ref} data-reveal="" {...props} />;
}
