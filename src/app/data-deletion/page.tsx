import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/layout/site-footer";
import { SiteHeader } from "@/layout/site-header";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { organizationSchema } from "@/lib/seo/organization.schema";
import { websiteSchema } from "@/lib/seo/website.schema";
import { LegalLayout, dataDeletionContent } from "@/sections/legal";

export const metadata: Metadata = buildMetadata({
  title: dataDeletionContent.metaTitle,
  description: dataDeletionContent.metaDescription,
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LegalLayout content={dataDeletionContent} />
      </main>
      <SiteFooter />
      <JsonLd nodes={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
