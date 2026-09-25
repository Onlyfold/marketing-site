import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase pill used above section headings. */
export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-pill bg-light-grey px-3 py-1 text-[0.65rem] font-bold tracking-badge text-core-navy uppercase",
        className,
      )}
      {...props}
    />
  );
}
