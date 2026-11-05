import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import type { LegalPageContent } from "./legal.types";

interface LegalLayoutProps {
  readonly content: LegalPageContent;
}

export function LegalLayout({ content }: LegalLayoutProps) {
  return (
    <article className="py-12 md:py-20">
      <Container className="max-w-4xl">
        {/* Top Back Link */}
        <div className="mb-6">
          <Link
            href={content.backLink.href}
            className="inline-flex items-center text-sm font-semibold text-text-grey transition-colors hover:text-electric-blue"
          >
            {content.backLink.label}
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 border-b border-light-grey pb-6">
          <Badge className="mb-3">{content.badge}</Badge>
          <h1 className="text-3xl font-extrabold tracking-headline text-core-navy md:text-5xl">
            {content.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-text-grey">
            <span>Effective Date: {content.effectiveDate}</span>
            <span aria-hidden="true">•</span>
            <span>Last Updated: {content.lastUpdated}</span>
          </div>
        </header>

        {/* Operator Notice */}
        {content.operatorNotice && (
          <div className="mb-8 rounded-lg border border-light-grey bg-surface p-4 text-sm font-medium text-text-grey">
            {content.operatorNotice}
          </div>
        )}

        {/* Introduction */}
        <div className="space-y-4 text-base leading-relaxed text-text-grey">
          {content.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-8 space-y-10">
          {content.sections.map((section) => (
            <section
              key={section.heading}
              id={section.id}
              className="border-t border-light-grey pt-8"
            >
              <h2 className="mb-4 text-xl font-bold text-core-navy md:text-2xl">
                {section.heading}
              </h2>

              {section.paragraphs.length > 0 && (
                <div className="space-y-3 text-base leading-relaxed text-text-grey">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.listItems && section.listItems.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-text-grey">
                  {section.listItems.map((item, lIndex) => (
                    <li key={lIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subSections && section.subSections.length > 0 && (
                <div className="mt-6 space-y-6">
                  {section.subSections.map((sub) => (
                    <div key={sub.heading}>
                      <h3 className="mb-2 text-lg font-semibold text-core-navy">
                        {sub.heading}
                      </h3>
                      <div className="space-y-2 text-base leading-relaxed text-text-grey">
                        {sub.paragraphs.map((subP, subPIndex) => (
                          <p key={subPIndex}>{subP}</p>
                        ))}
                      </div>
                      {sub.listItems && sub.listItems.length > 0 && (
                        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-text-grey">
                          {sub.listItems.map((subItem, subLIndex) => (
                            <li key={subLIndex}>{subItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.note && (
                <div className="mt-4 rounded-lg border border-light-grey bg-surface p-4 text-sm text-text-grey italic">
                  {section.note}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Contact Information Box */}
        <div className="mt-12 rounded-xl border border-light-grey bg-surface p-6">
          <h3 className="mb-2 text-lg font-bold text-core-navy">
            {content.contactNotice.heading}
          </h3>
          <p className="mb-3 text-sm text-text-grey">
            {content.contactNotice.text}
          </p>
          <a
            href={`mailto:${content.contactNotice.email}`}
            className="text-sm font-semibold text-electric-blue hover:underline"
          >
            {content.contactNotice.email}
          </a>
        </div>

        {/* Bottom Back Link */}
        <div className="mt-10 border-t border-light-grey pt-6">
          <Link
            href={content.backLink.href}
            className="inline-flex items-center text-sm font-semibold text-text-grey transition-colors hover:text-electric-blue"
          >
            {content.backLink.label}
          </Link>
        </div>
      </Container>
    </article>
  );
}
