import { siteConfig } from "@/config/site";
import { schemaIds } from "./ids";
import type { JsonLdNode } from "./json-ld";

export function softwareApplicationSchema(): JsonLdNode {
  return {
    "@type": "SoftwareApplication",
    "@id": schemaIds.software,
    name: siteConfig.name,
    description: siteConfig.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    publisher: { "@type": "Organization", "@id": schemaIds.organization },
  };
}
