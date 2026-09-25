import type { CSSProperties } from "react";

type CssVarName = `--${string}`;

/** Builds a typed `style` object for custom properties, e.g. cssVars({ "--progress": "40%" }). */
export function cssVars(
  vars: Record<CssVarName, string | number>,
): CSSProperties {
  return vars as CSSProperties;
}
