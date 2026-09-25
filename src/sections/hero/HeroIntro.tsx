"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/config/site";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { MOTION_OK } from "@/lib/animations/reveal-presets";
import { HeroVideoPoster } from "./HeroVideoPoster";
import { VideoModal } from "./VideoModal";
import { heroContent } from "./hero.content";

/** Hero copy + video poster with a staggered entrance, and the video modal. */
export function HeroIntro() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-reveal='hero']",
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      });
    },
    { scope },
  );

  const { eyebrow, headline, description, cta, video } = heroContent;

  return (
    <Container ref={scope}>
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6">
        <Eyebrow pill data-reveal="hero">
          {eyebrow}
        </Eyebrow>
        <h1
          data-reveal="hero"
          className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-extrabold tracking-headline text-core-navy"
        >
          <span className="text-gradient-brand">{headline.highlighted}</span>
          {headline.rest}
        </h1>
        <p
          data-reveal="hero"
          className="mx-auto max-w-[600px] text-lg text-text-grey"
        >
          {description}
        </p>
        <div data-reveal="hero" className="mt-4">
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        </div>
      </div>

      <HeroVideoPoster
        poster={video.poster}
        label={video.playLabel}
        onPlay={() => setIsVideoOpen(true)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        youtubeId={siteConfig.video.youtubeId}
        title={siteConfig.video.title}
        onClose={() => setIsVideoOpen(false)}
      />
    </Container>
  );
}
