import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/layout/site-footer";
import { SiteHeader } from "@/layout/site-header";
import { organizationSchema } from "@/lib/seo/organization.schema";
import { softwareApplicationSchema } from "@/lib/seo/software-application.schema";
import { webPageSchema, websiteSchema } from "@/lib/seo/website.schema";
import { ClosingCta } from "@/sections/closing-cta";
import { Faq, faqPageSchema } from "@/sections/faq";
import { Hero, heroVideoSchema } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-it-works";
import { Industries } from "@/sections/industries";
import { Integrations } from "@/sections/integrations";
import { RoiCalculator } from "@/sections/roi-calculator";
import { TrustedBy } from "@/sections/trusted-by";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Industries />
        <Integrations />
        <RoiCalculator />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(),
          webPageSchema(),
          softwareApplicationSchema(),
          faqPageSchema(),
          heroVideoSchema(),
        ]}
      />
    </>
  );
}
