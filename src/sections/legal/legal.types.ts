import type { Href } from "@/types/links";

export interface LegalSubSection {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly listItems?: readonly string[];
}

export interface LegalSection {
  readonly id?: string;
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly listItems?: readonly string[];
  readonly subSections?: readonly LegalSubSection[];
  readonly note?: string;
}

export interface LegalContactNotice {
  readonly heading: string;
  readonly text: string;
  readonly email: string;
}

export interface LegalPageContent {
  readonly badge: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly effectiveDate: string;
  readonly lastUpdated: string;
  readonly backLink: {
    readonly label: string;
    readonly href: Href;
  };
  readonly operatorNotice?: string;
  readonly internalLegalComment?: string;
  readonly introduction: readonly string[];
  readonly sections: readonly LegalSection[];
  readonly contactNotice: LegalContactNotice;
}
