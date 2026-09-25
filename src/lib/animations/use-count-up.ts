import { useRef, type RefObject } from "react";
import { gsap, useGSAP } from "./gsap";

interface CountUpOptions {
  /** Formats the tweened value for display, e.g. formatInr. Must be referentially stable. */
  readonly format: (value: number) => string;
  readonly duration?: number;
}

/**
 * Tweens the text content of the referenced element from its previous value to
 * `target` every time `target` changes. The first render shows `format(0)`.
 */
export function useCountUp<T extends HTMLElement>(
  target: number,
  { format, duration = 0.8 }: CountUpOptions,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const counter = useRef({ value: 0 });

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.to(counter.current, {
        value: target,
        duration,
        ease: "power2.out",
        snap: { value: 1 },
        overwrite: "auto",
        onUpdate: () => {
          element.textContent = format(counter.current.value);
        },
      });
    },
    { dependencies: [target, format, duration] },
  );

  return ref;
}
