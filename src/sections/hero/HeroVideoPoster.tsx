import Image from "next/image";
import { PlayIcon } from "@/components/icons/PlayIcon";
import type { ImageAsset } from "@/types/content";

interface HeroVideoPosterProps {
  readonly poster: ImageAsset;
  readonly label: string;
  readonly onPlay: () => void;
}

/** Poster image with a play button overlay; the whole card is one button. */
export function HeroVideoPoster({
  poster,
  label,
  onPlay,
}: HeroVideoPosterProps) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-haspopup="dialog"
      aria-label={label}
      data-reveal="hero"
      className="group relative mx-auto mt-16 block w-full max-w-[1000px] overflow-hidden rounded-2xl shadow-video"
    >
      <Image
        {...poster}
        alt={poster.alt}
        preload
        fetchPriority="high"
        sizes="(max-width: 1000px) 100vw, 1000px"
        className="block h-auto w-full transition-transform duration-500 ease-base group-hover:scale-[1.02]"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-core-navy shadow-play transition-all duration-300 ease-base group-hover:scale-110 group-hover:bg-white"
      >
        <PlayIcon className="ml-1.5" />
      </span>
    </button>
  );
}
