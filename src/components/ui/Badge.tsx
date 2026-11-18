import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "neutral" | "electricBlue" | "teal" | "orange";

const VARIANTS: Record<BadgeVariant, string> = {
  neutral: "bg-light-grey text-core-navy",
  electricBlue:
    "bg-electric-blue/10 text-electric-blue border border-electric-blue/20",
  teal: "bg-onlyfold-teal/10 text-core-navy border border-onlyfold-teal/30",
  orange: "bg-smart-orange/10 text-smart-orange border border-smart-orange/30",
};

interface BadgeProps extends ComponentProps<"span"> {
  readonly variant?: BadgeVariant;
}

/** Small uppercase pill used above section headings and status badges. */
export function Badge({
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-pill px-3 py-1 text-[0.65rem] font-bold tracking-badge uppercase",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
