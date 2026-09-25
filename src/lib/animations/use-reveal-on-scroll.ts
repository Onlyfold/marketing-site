import { useRef, type RefObject } from "react";
import { gsap, useGSAP } from "./gsap";
import {
  MOTION_OK,
  REVEAL_PRESETS,
  type RevealVariant,
} from "./reveal-presets";

/**
 * Reveals the referenced element when it scrolls into view and hides it again
 * when it scrolls back out (matching the reference site). The element must carry
 * `data-reveal` so it starts hidden in CSS and never flashes before hydration.
 */
export function useRevealOnScroll<T extends HTMLElement>(
  variant: RevealVariant,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      const preset = REVEAL_PRESETS[variant];
      const media = gsap.matchMedia();

      media.add(MOTION_OK, () => {
        gsap.fromTo(element, preset.from, {
          ...preset.to,
          scrollTrigger: {
            trigger: element,
            start: preset.start,
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: ref },
  );

  return ref;
}
