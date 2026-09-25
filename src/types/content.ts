import type { Href } from "./links";

/** A static image under /public/images. */
export interface ImageAsset {
  readonly src: `/images/${string}`;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface CtaContent {
  readonly label: string;
  readonly href: Href;
}

export interface SectionHeadingContent {
  readonly badge?: string;
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
}
