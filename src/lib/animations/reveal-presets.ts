import type { gsap } from "./gsap";

export type RevealVariant = "fade-up" | "scale-up";

export interface RevealPreset {
  readonly from: gsap.TweenVars;
  readonly to: gsap.TweenVars;
  /** ScrollTrigger start position. */
  readonly start: string;
}

export const REVEAL_PRESETS: Record<RevealVariant, RevealPreset> = {
  "fade-up": {
    from: { y: 50, autoAlpha: 0 },
    to: { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
    start: "top 80%",
  },
  "scale-up": {
    from: { scale: 0.8, autoAlpha: 0 },
    to: { scale: 1, autoAlpha: 1, duration: 0.6, ease: "back.out(1.7)" },
    start: "top 85%",
  },
};

/** Media query GSAP uses to decide whether motion is allowed. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
