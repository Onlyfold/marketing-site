import { siteConfig } from "@/config/site";
import type { LegalPageContent } from "./legal.types";

export const termsContent: LegalPageContent = {
  badge: "LEGAL",
  title: "Terms of Service",
  metaTitle: "Terms of Service",
  metaDescription:
    "Review the Terms of Service governing the use of OnlyFold AI's WhatsApp automation, lead qualification, and CRM integration platform.",
  effectiveDate: "November 5, 2026",
  lastUpdated: "November 11, 2026",
  backLink: {
    label: "← Back to Onlyfold",
    href: siteConfig.links.home,
  },
  operatorNotice:
    'These Terms of Service ("Terms") constitute a legally binding agreement between OnlyFold AI ("Onlyfold", "we", "us", or "our") and the customer ("Customer", "you", or "your") accessing or using our platform and website.',
  introduction: [
    'By accessing https://onlyfold.com (the "Website"), booking an expert demonstration, or utilizing our WhatsApp automation and pipeline management software (the "Service"), you confirm that you have read, understood, and agreed to be bound by these Terms.',
    "If you are entering into these Terms on behalf of an enterprise, company, or legal entity, you represent and warrant that you possess the full legal authority to bind that entity to these Terms.",
  ],
  sections: [
    {
      id: "description-of-service",
      heading: "1. Service Description",
      paragraphs: [
        "Onlyfold provides an intelligent conversational sales and lead management software platform designed to integrate with Meta's official WhatsApp Business Platform.",
        "The Service enables businesses to automate prospect qualification, follow up with inbound sales inquiries, synchronize lead statuses with CRM destinations, and hand off warm sales conversations to designated human personnel.",
      ],
    },
    {
      id: "account-registration",
      heading: "2. Account Registration and Security",
      paragraphs: [
        "To utilize the Service, you must provide accurate, current, and complete business information. You agree to promptly update your registration details to ensure accuracy.",
        "You are exclusively responsible for safeguarding the confidentiality of your administrative credentials, API tokens, and access authorizations. Any activities occurring under your authorized accounts are your sole legal responsibility.",
        "You agree to notify us immediately at support@onlyfold.com if you discover or suspect any unauthorized access, security incident, or credential compromise.",
      ],
    },
    {
      id: "whatsapp-meta-responsibilities",
      heading: "3. WhatsApp Assets, Consent, and Meta Compliance",
      paragraphs: [
        "The Service functions by connecting to Meta's WhatsApp Business Platform. Customer businesses retain exclusive ownership and administrative control of their Meta Business Accounts, WhatsApp Business Accounts (WABA), and phone numbers.",
        "Customer Responsibilities for Messaging & Consent:",
      ],
      listItems: [
        "Recipient Consent: You are strictly responsible for obtaining, verifying, and documenting all legally required consents, opt-ins, and disclosures from recipients prior to transmitting WhatsApp communications, in compliance with applicable regional telecommunications, consumer protection, and privacy laws.",
        "Meta Policy Compliance: You agree to strictly abide by Meta's Terms of Service, the WhatsApp Business Terms of Service, WhatsApp Commerce Policies, and the WhatsApp Business Messaging Policy. You shall not submit or dispatch message content involving prohibited categories (including illegal items, deceptive schemes, unauthorized healthcare/pharmaceutical claims, or predatory lending).",
        "Template Approval: You acknowledge that WhatsApp requires pre-approval of outbound business-initiated message templates by Meta. Onlyfold cannot bypass, accelerate, or modify Meta's independent template review standards.",
      ],
    },
    {
      id: "prohibited-activities",
      heading: "4. Prohibited Uses",
      paragraphs: [
        "You agree not to use the Service directly or indirectly for any prohibited activity, including but not limited to:",
      ],
      listItems: [
        "Sending unsolicited commercial broadcasts, bulk spam, or deceptive marketing blasts.",
        "Harassing, threatening, defaming, or defrauding message recipients or third parties.",
        "Interfering with, disrupting, or attempting to compromise the security, infrastructure, or operational integrity of the Service or Meta's network.",
        "Reverse-engineering, decompiling, or attempting to derive the source code or proprietary algorithms of Onlyfold.",
        "Using the platform to bypass rate limits, quotas, or platform restrictions established by Meta Platforms, Inc.",
      ],
    },
    {
      id: "ai-limitations-and-oversight",
      heading: "5. Artificial Intelligence Limitations and Human Oversight",
      paragraphs: [
        "Onlyfold incorporates machine learning and artificial intelligence models to assist with lead classification, automated qualification, and conversational replies.",
        "Probabilistic Nature: You acknowledge that artificial intelligence outputs are probabilistic and may occasionally contain inaccuracies, unintended phrasing, or incomplete information. Onlyfold is provided with customizable guardrails, but automated outputs cannot be guaranteed to be error-free.",
        "Customer Oversight: You maintain sole responsibility for establishing the knowledge base, product parameters, pricing rules, and conversation guardrails used by the system. You agree to maintain reasonable human agent monitoring over sales pipelines and verify high-value transactions before finalizing customer commitments.",
      ],
    },
    {
      id: "third-party-dependencies",
      heading: "6. Third-Party Services and Meta Infrastructure",
      paragraphs: [
        "The Service relies upon third-party platforms, telecommunications infrastructure, and Meta's official WhatsApp Business Platform APIs.",
        "You acknowledge that Onlyfold does not own, control, or operate Meta's infrastructure. Onlyfold is not liable for any downtime, API latency, network outages, template rejections, rate limits, tier adjustments, or account enforcement actions (such as account restrictions, quality rating warnings, or number suspensions) imposed by Meta Platforms, Inc. or telecommunication carriers.",
      ],
    },
    {
      id: "express-disclaimer-no-guarantees",
      heading: "7. Express Disclaimer of Performance Guarantees",
      paragraphs: [
        "To the maximum extent permitted by applicable law, the Service is provided on an 'AS IS' and 'AS AVAILABLE' basis. Onlyfold expressly disclaims all warranties, representations, and guarantees of any kind, whether express, statutory, or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "Without limiting the foregoing, Onlyfold expressly DOES NOT guarantee:",
      ],
      listItems: [
        "Zero Account Bans: No software provider can grant immunity from Meta policy enforcement. Message delivery and account status depend on message quality, user consent, opt-out rates, and adherence to Meta policies. We do not promise zero ban risk.",
        "Guaranteed Message Delivery: Delivery of messages depends on recipient device status, cellular connectivity, and WhatsApp network availability.",
        "Guaranteed Revenue or Lead Recovery: Conversions, closed deals, and revenue outcomes depend on your product value, pricing, market fit, and sales team execution. Statements illustrating potential recovery rates are mathematical models and do not constitute revenue guarantees.",
        "Guaranteed Meta Approval: We cannot guarantee that Meta Platforms, Inc. will approve any particular WhatsApp Business Account, phone number, display name, official business account status (green badge), or message template.",
        "Guaranteed Activation Timeframe: Implementation schedules depend on timely submission of required business documentation, Meta account access, and phone number ownership validation.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "8. Intellectual Property Rights",
      paragraphs: [
        "Onlyfold AI and its licensors retain all right, title, and interest (including patent, copyright, trademark, trade secret, and all other proprietary rights) in and to the Onlyfold platform, software architecture, user interface, brand assets, and documentation.",
        "Customer Data Ownership: You retain all ownership, rights, and intellectual property in your proprietary business data, customer records, and lead information synced through the platform. You grant Onlyfold a limited, non-exclusive license to process such data strictly as necessary to provide the Service to you.",
      ],
    },
    {
      id: "fees-and-billing",
      heading: "9. Subscription, Fees, and Payments",
      paragraphs: [
        "Access to the Service is provided under agreed commercial plans, enterprise order forms, or trial periods. All fees are stated and payable in the currency specified in the applicable order form.",
        "Payment obligations are non-cancelable and fees paid are non-refundable, except where explicitly agreed upon in a written enterprise agreement or required by statutory consumer regulations.",
        "WhatsApp Conversation Charges: Official WhatsApp Business Platform messaging fees incurred directly with Meta (such as per-conversation fees) are the responsibility of the Customer unless explicitly bundled within an agreed service tier.",
      ],
    },
    {
      id: "suspension-and-termination",
      heading: "10. Suspension and Termination",
      paragraphs: [
        "You may terminate your subscription in accordance with the terms of your active order agreement by providing written notice to support@onlyfold.com.",
        "Onlyfold reserves the right to suspend or terminate your access to the Service immediately and without prior notice in the event of: (a) a material breach of these Terms; (b) spamming, harassment, or violations of WhatsApp Business Messaging Policies; (c) non-payment of undisputed fees; or (d) any action that poses a security risk or threatens platform stability.",
      ],
    },
    {
      id: "data-deletion",
      heading: "11. Data Deletion",
      paragraphs: [
        "Customers and end-users may request the permanent deletion or anonymization of personal and messaging data processed through the Service at any time, including upon subscription termination or withdrawal of consent.",
        "Upon verification of identity and account authority, Onlyfold will delete or irreversibly anonymize operational messaging records and lead information where legally and technically permissible, subject to limited retention exceptions required for statutory accounting, tax, security, or fraud-prevention purposes. Deleting data from Onlyfold's systems is separate from data stored independently by Meta Platforms, Inc. or WhatsApp.",
      ],
      link: {
        prefix:
          "For detailed submission instructions and exclusions, please review our Data Deletion page at ",
        label: "https://onlyfold.com/data-deletion",
        href: siteConfig.links.dataDeletion,
        suffix: ".",
      },
    },
    {
      id: "limitation-of-liability",
      heading: "12. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, in no event shall Onlyfold AI, its founders, directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data loss, business interruption, loss of goodwill, or costs of substitute services, arising out of or related to your use of or inability to use the Service or any actions taken by Meta Platforms, Inc.",
        "To the maximum extent permitted by applicable law, Onlyfold's total aggregate liability arising out of or relating to the Service or these Terms shall not exceed the total amount paid by you to Onlyfold for the Service in the twelve (12) months immediately preceding the event giving rise to liability.",
      ],
    },
    {
      id: "dispute-resolution",
      heading: "13. Dispute Resolution",
      paragraphs: [
        "In the event of any controversy, claim, or dispute arising out of or relating to these Terms or the Service, the parties agree to first attempt in good faith to resolve the matter through informal executive consultations by contacting support@onlyfold.com.",
        "If informal consultations fail to resolve the dispute within thirty (30) days, the dispute shall be resolved through binding, confidential arbitration or conciliation administered in accordance with standard commercial arbitration rules.",
      ],
      note: "Internal Note: Formal jurisdiction clauses should be finalized with designated legal counsel upon completion of corporate incorporation records.",
    },
    {
      id: "modifications-to-terms",
      heading: "14. Modifications to Terms",
      paragraphs: [
        "We reserve the right to revise or update these Terms periodically to reflect product updates, operational changes, or new regulatory standards.",
        "Your continued use of the Service following the publication of revised Terms on this Website constitutes your acceptance of the updated terms. If you do not agree to the updated terms, you must cease using the Service.",
      ],
    },
  ],
  contactNotice: {
    heading: "15. Contact Information",
    text: "For legal inquiries, contract clarifications, or formal notices regarding these Terms, please contact our legal representative at:",
    email: "support@onlyfold.com",
  },
} as const;
