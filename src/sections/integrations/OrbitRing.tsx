import Image from "next/image";
import { cn } from "@/lib/cn";
import type {
  OrbitRingContent,
  SatellitePosition,
} from "./integrations.content";

/* Ring size + spin direction, and the matching counter-spin for its satellites. */
const RING_STYLES: Record<
  OrbitRingContent["id"],
  { ring: string; satellite: string }
> = {
  inner: {
    ring: "h-[180px] w-[180px] animate-orbit-inner below-md:h-[200px] below-md:w-[200px]",
    satellite: "animate-orbit-inner-reverse",
  },
  middle: {
    ring: "h-[300px] w-[300px] animate-orbit-middle-reverse",
    satellite: "animate-orbit-middle",
  },
  outer: {
    ring: "h-[440px] w-[440px] animate-orbit-outer",
    satellite: "animate-orbit-outer-reverse",
  },
};

/* Satellites are 44px; offsets place their centre on the ring's edge. */
const POSITIONS: Record<SatellitePosition, string> = {
  top: "-top-[22px] left-[calc(50%-22px)]",
  bottom: "-bottom-[22px] left-[calc(50%-22px)]",
  left: "-left-[22px] top-[calc(50%-22px)]",
  right: "-right-[22px] top-[calc(50%-22px)]",
};

export function OrbitRing({ id, satellites }: OrbitRingContent) {
  const styles = RING_STYLES[id];

  return (
    <div
      className={cn(
        "absolute rounded-full border border-dashed border-white/30",
        styles.ring,
      )}
    >
      {satellites.map(({ position, icon, rounded }) => (
        <div
          key={position}
          className={cn(
            "absolute flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-satellite",
            styles.satellite,
            POSITIONS[position],
          )}
        >
          <Image
            {...icon}
            alt={icon.alt}
            sizes="24px"
            className={cn(rounded && "rounded-full")}
          />
        </div>
      ))}
    </div>
  );
}
