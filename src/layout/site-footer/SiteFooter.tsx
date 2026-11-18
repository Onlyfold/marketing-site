import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/config/site";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { SocialLinks } from "./SocialLinks";
import {
  footerContent,
  footerLinkGroups,
  footerLogo,
} from "./site-footer.content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-core-navy pt-24 pb-8 text-white">
      <Container>
        <RevealOnScroll className="mb-16 flex justify-between gap-16 below-lg:flex-col">
          <div className="flex max-w-[300px] flex-col items-start gap-6">
            <Link
              href={siteConfig.links.home}
              aria-label={`${siteConfig.name} home`}
            >
              <Image
                {...footerLogo}
                alt={footerLogo.alt}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-base leading-normal text-white/70">
              {footerContent.tagline}
            </p>
            <Button
              variant="primary"
              size="sm"
              href={footerContent.cta.href}
              className="mt-2"
            >
              {footerContent.cta.label}
            </Button>
            <div className="mt-1 flex flex-col gap-2.5 text-sm text-white/80">
              <a
                href={footerContent.contact.phone.href}
                className="inline-flex items-center gap-2.5 transition-colors duration-200 ease-base hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-onlyfold-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{footerContent.contact.phone.label}</span>
              </a>
              <a
                href={footerContent.contact.email.href}
                className="inline-flex items-center gap-2.5 transition-colors duration-200 ease-base hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-onlyfold-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{footerContent.contact.email.label}</span>
              </a>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-1 flex-wrap justify-end gap-12 below-lg:justify-start below-md:gap-8"
          >
            {footerLinkGroups.map((group) => (
              <FooterLinkColumn key={group.id} {...group} />
            ))}
          </nav>
        </RevealOnScroll>

        <div className="relative flex flex-wrap items-center justify-between gap-4 pt-8 before:absolute before:top-0 before:left-0 before:h-px before:w-full before:bg-gradient-footer-divider before:content-[''] below-md:flex-col below-md:justify-center below-md:text-center">
          <p className="text-sm text-white/50">
            © {footerContent.copyrightOwner}, {year}.{" "}
            {footerContent.rightsNotice}
          </p>
          <SocialLinks
            label={footerContent.followLabel}
            links={siteConfig.socials}
          />
        </div>
      </Container>
    </footer>
  );
}
