import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Centred, padded page column (1280px max). */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-8", className)}
      {...props}
    />
  );
}
