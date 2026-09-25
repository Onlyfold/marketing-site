"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

/**
 * Lenis smooth scrolling driven by GSAP's ticker so ScrollTrigger reveals stay
 * in sync with the interpolated scroll position.
 */
export function SmoothScrollProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ ...siteConfig.smoothScroll, autoRaf: false }}
    >
      {children}
    </ReactLenis>
  );
}
