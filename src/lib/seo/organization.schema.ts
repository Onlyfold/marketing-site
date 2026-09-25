import { siteConfig } from "@/config/site";
import { schemaIds } from "./ids";
import type { JsonLdNode } from "./json-ld";

export function organizationSchema(): JsonLdNode {
  const sameAs = siteConfig.socials
    .map((social) => social.href)
    .filter((href): href is Exclude<typeof href, "#"> => href !== "#");

  return {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/brand-logo.png`,
      width: 855,
      height: 202,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
