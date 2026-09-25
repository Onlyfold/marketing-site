import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type EyebrowTone = "blue" | "grey";

interface EyebrowProps extends ComponentProps<"span"> {
  readonly tone?: EyebrowTone;
  /** Adds the tinted pill background used in the hero. */
  readonly pill?: boolean;
}

const TONES: Record<EyebrowTone, string> = {
  blue: "text-electric-blue",
  grey: "text-text-grey",
};

/** Short uppercase label that introduces a heading. */
export function Eyebrow({
  tone = "blue",
  pill = false,
  className,
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "text-xs font-bold tracking-eyebrow uppercase",
        TONES[tone],
        pill && "rounded-pill bg-electric-blue/5 px-4 py-2",
        className,
      )}
      {...props}
    />
  );
}
