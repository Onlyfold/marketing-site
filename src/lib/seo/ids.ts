import { siteConfig } from "@/config/site";

/** Stable `@id`s so graph nodes can reference each other. */
export const schemaIds = {
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  webpage: `${siteConfig.url}/#webpage`,
  software: `${siteConfig.url}/#software`,
} as const;
