import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/layout/site-footer";
import { SiteHeader } from "@/layout/site-header";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { organizationSchema } from "@/lib/seo/organization.schema";
import { websiteSchema } from "@/lib/seo/website.schema";
import { LegalLayout, privacyContent } from "@/sections/legal";

export const metadata: Metadata = buildMetadata({
  title: privacyContent.metaTitle,
  description: privacyContent.metaDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LegalLayout content={privacyContent} />
      </main>
      <SiteFooter />
      <JsonLd nodes={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
