import { siteConfig } from "@/config/site";
import type { JsonLdNode } from "@/lib/seo/json-ld";
import { heroContent } from "./hero.content";

/** VideoObject for the hero demo. Google requires uploadDate, so it is only emitted when known. */
export function heroVideoSchema(): JsonLdNode | undefined {
  const { youtubeId, title, uploadDate } = siteConfig.video;
  if (!uploadDate) return undefined;

  return {
    "@type": "VideoObject",
    name: title,
    description: heroContent.description,
    thumbnailUrl: [`${siteConfig.url}${heroContent.video.poster.src}`],
    uploadDate,
    embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
  };
}
