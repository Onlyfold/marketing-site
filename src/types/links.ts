import type { Route } from "next";

/** Any href the site links to: internal routes, same-page anchors or absolute URLs. */
export type Href = Route;

/** Ids of the on-page sections. Kept identical to the reference site for anchor parity. */
export type SectionId =
  | "hero"
  | "features"
  | "industries"
  | "integrations"
  | "pricing"
  | "faq"
  | "trial";

export interface LinkItem {
  readonly label: string;
  readonly href: Href;
}

export interface LinkGroup {
  readonly id: string;
  readonly heading: string;
  readonly links: readonly LinkItem[];
}

export type SocialId = "linkedin" | "x" | "youtube" | "facebook";

export interface SocialLink extends LinkItem {
  readonly id: SocialId;
}
