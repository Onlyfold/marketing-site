import { siteConfig } from "@/config/site";

export function formatNumber(value: number): string {
  return value.toLocaleString(siteConfig.numberLocale);
}

/** "₹2,88,000" — whole rupees, rounded up like the reference calculator. */
export function formatInr(value: number): string {
  return `₹${formatNumber(Math.ceil(value))}`;
}

export function formatPercent(value: number): string {
  return `${formatNumber(value)}%`;
}
