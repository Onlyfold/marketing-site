/**
 * The single place that reads process.env. Everything else imports from here so
 * environment assumptions are easy to audit.
 */

const FALLBACK_SITE_URL = "https://onlyfold-website-v3.vercel.app";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProductionHost) return `https://${vercelProductionHost}`;

  return FALLBACK_SITE_URL;
}

export const env = {
  /** Canonical origin without a trailing slash. */
  siteUrl: resolveSiteUrl(),
  /** True on any Vercel deployment (production or preview). */
  isVercel: process.env.VERCEL === "1",
  /** Only the production deployment should be indexed; previews get noindex. */
  isIndexable:
    !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production",
  /** Google Search Console ownership token; omitted from the page when unset. */
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
} as const;
