/** Minimal JSON-LD typing: enough to keep builders honest without a schema library. */
export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | JsonLdNode
  | readonly JsonLdValue[];

export interface JsonLdNode {
  readonly "@type": string;
  readonly "@id"?: string;
  readonly [key: string]: JsonLdValue;
}

export interface JsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly JsonLdNode[];
}

export function createGraph(
  nodes: readonly (JsonLdNode | undefined)[],
): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is JsonLdNode => node !== undefined),
  };
}

/** Serialises for a <script> tag; `<` is escaped so content can never close the tag. */
export function serializeJsonLd(graph: JsonLdGraph): string {
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
