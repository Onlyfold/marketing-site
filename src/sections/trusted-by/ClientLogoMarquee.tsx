import Image from "next/image";
import type { ImageAsset } from "@/types/content";

/** Infinite CSS marquee; the list is rendered twice so the loop is seamless. */
export function ClientLogoMarquee({
  logos,
}: {
  readonly logos: readonly ImageAsset[];
}) {
  const loop = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden mask-fade-x">
      <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((logo, index) => (
          <li
            key={`${logo.src}-${index}`}
            aria-hidden={index >= logos.length || undefined}
            className="group flex h-20 items-center justify-center px-12 grayscale transition-[filter] duration-300 ease-base hover:grayscale-0 below-md:px-6"
          >
            <Image
              {...logo}
              alt={logo.alt}
              sizes="150px"
              className="object-contain opacity-70 transition-opacity duration-300 ease-base group-hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
