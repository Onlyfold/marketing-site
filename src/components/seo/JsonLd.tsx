import {
  createGraph,
  serializeJsonLd,
  type JsonLdNode,
} from "@/lib/seo/json-ld";

interface JsonLdProps {
  readonly nodes: readonly (JsonLdNode | undefined)[];
}

/** Emits one structured-data script for the page. */
export function JsonLd({ nodes }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(createGraph(nodes)) }}
    />
  );
}
