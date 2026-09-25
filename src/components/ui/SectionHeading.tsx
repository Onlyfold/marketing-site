import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Eyebrow } from "./Eyebrow";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  readonly badge?: string;
  readonly eyebrow?: string;
  readonly eyebrowTone?: "blue" | "grey";
  readonly title: ReactNode;
  readonly description?: ReactNode;
  /** Wrapper classes: max-width, margins, gap and alignment differ per section. */
  readonly className?: string;
  readonly titleClassName?: string;
  readonly descriptionClassName?: string;
}

/** Badge/eyebrow + h2 + optional description, revealed on scroll. */
export function SectionHeading({
  badge,
  eyebrow,
  eyebrowTone,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn("flex flex-col items-center gap-4 text-center", className)}
    >
      {badge && <Badge>{badge}</Badge>}
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className={cn("font-extrabold", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-lg", descriptionClassName)}>{description}</p>
      )}
    </RevealOnScroll>
  );
}
