import { siteConfig } from "@/config/site";
import { schemaIds } from "./ids";
import type { JsonLdNode } from "./json-ld";

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
    publisher: { "@type": "Organization", "@id": schemaIds.organization },
  };
}

export function webPageSchema(): JsonLdNode {
  return {
    "@type": "WebPage",
    "@id": schemaIds.webpage,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": schemaIds.website },
    about: { "@type": "SoftwareApplication", "@id": schemaIds.software },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/opengraph-image`,
    },
  };
}
