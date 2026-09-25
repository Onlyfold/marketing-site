import type { ComponentProps } from "react";
import type { SectionId } from "@/types/links";

interface SectionProps extends Omit<ComponentProps<"section">, "id"> {
  readonly id: SectionId;
}

/** The only component that renders a <section> landmark, keyed by a known anchor id. */
export function Section({ id, ...props }: SectionProps) {
  return <section id={id} {...props} />;
}
