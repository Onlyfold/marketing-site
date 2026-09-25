"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

/**
 * Drives Lenis from GSAP's ticker so ScrollTrigger reveals stay in sync with the
 * interpolated scroll position. Rendered inside <ReactLenis>, because the instance
 * is only available through context once Lenis has been created.
 */
function GsapScrollBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

/** Lenis smooth scrolling for the whole document. */
export function SmoothScrollProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <ReactLenis root options={{ ...siteConfig.smoothScroll, autoRaf: false }}>
      <GsapScrollBridge />
      {children}
    </ReactLenis>
  );
}
