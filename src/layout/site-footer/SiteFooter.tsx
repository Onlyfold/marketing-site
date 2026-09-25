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
                className="object-contain brightness-0 invert"
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
            © {siteConfig.name}, {year}. {footerContent.rightsNotice}
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
