import { siteConfig } from "@/config/site";
import type { LegalPageContent } from "./legal.types";

export const privacyContent: LegalPageContent = {
  badge: "LEGAL",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy",
  metaDescription:
    "Learn how OnlyFold AI collects, uses, and protects business and messaging data across Onlyfold's WhatsApp automation and CRM platform.",
  effectiveDate: "November 5, 2026",
  lastUpdated: "November 5, 2026",
  backLink: {
    label: "← Back to Onlyfold",
    href: siteConfig.links.home,
  },
  operatorNotice:
    'Onlyfold ("we", "us", or "our") is a conversational AI sales and customer-support platform operated by OnlyFold AI.',
  internalLegalComment:
    "TODO: Internal legal review to verify exact controller/processor classification under applicable jurisdictions",
  introduction: [
    'This Privacy Policy describes how OnlyFold AI collects, processes, stores, and protects personal and business information when you visit https://onlyfold.com (the "Website") or utilize our WhatsApp-based sales qualification, CRM synchronization, and messaging automation platform (the "Service").',
    "We are committed to operating transparently, safeguarding customer data, and adhering to applicable data privacy principles. Please read this policy carefully to understand our practices regarding your data and your rights concerning personal information.",
  ],
  sections: [
    {
      id: "information-collected",
      heading: "1. Information We Collect",
      paragraphs: [
        "The scope of information we collect depends on how you interact with Onlyfold—whether as a visitor to our marketing Website or as an authorized business customer configuring and running automated workflows.",
      ],
      subSections: [
        {
          heading: "A. Account and Administrative Information",
          paragraphs: [
            "When you register, schedule a demonstration, or administer an Onlyfold account, we collect:",
          ],
          listItems: [
            "Contact details: full name, business email address, phone number, and job title.",
            "Business profile details: company name, industry, operational parameters, and administrative preferences.",
            "Account credentials: secure authentication records and role-based access configurations.",
          ],
        },
        {
          heading: "B. WhatsApp Integration and Technical Identifiers",
          paragraphs: [
            "To connect your business messaging workflows with Meta's messaging infrastructure, we process technical identifiers associated with your WhatsApp configuration:",
          ],
          listItems: [
            "WhatsApp Business Account (WABA) IDs and Phone Number IDs.",
            "Display names and business profile details configured within your Meta Business Manager.",
            "Authorized integration access tokens and webhook verification parameters.",
          ],
        },
        {
          heading: "C. Communications and Lead Data",
          paragraphs: [
            "When Onlyfold processes inbound and outbound conversational interactions on behalf of a customer business, our platform processes:",
          ],
          listItems: [
            "Lead contact information: phone numbers, names, and contact identifiers provided by the business or submitted by prospective buyers.",
            "Message content and status: textual inquiries, responses, media attachments, and delivery events (sent, delivered, read timestamps).",
            "Message templates and automation rules: pre-approved WhatsApp message templates, qualification logic, and conversation histories.",
          ],
        },
        {
          heading: "D. Technical Telemetry and Website Analytics",
          paragraphs: [
            "When browsing our Website, our hosting infrastructure and performance monitors collect standard technical logs, such as IP addresses, browser types, operating systems, and page response times.",
            "Cookies & Analytics: The Onlyfold marketing website uses privacy-friendly, anonymized web analytics (Vercel Web Analytics and Speed Insights) to evaluate aggregate site traffic and performance without tracking individual identity across different domains. We do not use third-party advertising cookies, cross-site behavioral tracking pixels, or data-broker profiling mechanisms.",
          ],
        },
      ],
    },
    {
      id: "purposes-of-processing",
      heading: "2. How We Use Information",
      paragraphs: [
        "We collect and process personal and business data strictly for defined operational and business purposes:",
      ],
      listItems: [
        "Service Delivery: Operating, maintaining, and providing the Onlyfold CRM synchronization and WhatsApp sales automation platform.",
        "Automated Communication: Facilitating the transmission, qualification, and routing of customer-approved WhatsApp messages under business instructions.",
        "Lead Routing & Handoff: Analyzing conversational inquiries to identify qualified prospects and handing them off to the customer's designated human sales representatives.",
        "Customer Support & Maintenance: Investigating system errors, diagnosing technical issues, and responding to inquiries submitted to our team.",
        "Security & Abuse Prevention: Protecting against fraudulent activity, unauthorized platform access, malicious messaging, and infrastructure abuse.",
        "Account Administration: Managing business billing, order records, customer verification, and administrative communications.",
        "Compliance: Upholding legal, statutory, and regulatory duties applicable to our operations.",
      ],
    },
    {
      id: "meta-whatsapp-relationship",
      heading: "3. Relationship with Meta and the WhatsApp Business Platform",
      paragraphs: [
        "Onlyfold integrates with Meta's official WhatsApp Business Platform (including WhatsApp Business Cloud API and On-Premises API) to transmit and receive business messages.",
        "Onlyfold is an independent software application developed by OnlyFold AI. We do not represent ourselves as an official Meta 'verified partner' or endorsed 'Tech Provider' unless and until such designation has been formally vetted, approved, and granted by Meta Platforms, Inc.",
        "Customer businesses own, retain, and control their WhatsApp business assets, phone numbers, and end-customer relationships. Each customer business remains solely responsible for:",
      ],
      listItems: [
        "Obtaining all required prior consents, opt-ins, and disclosures from message recipients in compliance with local telecommunications, consumer protection, and data privacy legislation.",
        "Ensuring all outbound message content, broadcasts, and template submissions strictly adhere to the WhatsApp Business Messaging Policy and Meta Commerce Policy.",
        "Maintaining active compliance with Meta's Terms of Service and applicable developer agreements.",
      ],
    },
    {
      id: "controller-processor-roles",
      heading: "4. Data Protection Roles and Responsibilities",
      paragraphs: [
        "To ensure clarity under data protection laws, our legal role depends upon the nature of the data being processed:",
        "Customer Communications & Leads (Processor Role): For prospective lead information, customer phone numbers, and WhatsApp message content processed through our platform on behalf of a customer business, the customer business acts as the Data Controller (determining the legal basis and purposes of messaging). Onlyfold acts strictly as a Data Processor or Service Provider, handling such communications solely under the documented instructions and configurations of the customer business.",
        "Direct Account & Website Data (Controller Role): For business contact details of our direct customers, administrative user profiles, billing records, and direct inquiries submitted through our Website, OnlyFold AI acts as the Data Controller.",
      ],
      note: "Internal Note: Classification is based on standard SaaS communication models. Legal counsel should verify multi-jurisdictional nuances.",
    },
    {
      id: "data-sharing-and-recipients",
      heading: "5. Data Sharing and Third-Party Service Providers",
      paragraphs: [
        "We do not sell, rent, lease, or monetize customer data or contact lists to data brokers, marketing agencies, or unauthorized third parties. We share information only with trusted categories of service providers necessary to operate our service:",
      ],
      listItems: [
        "Meta Platforms, Inc. / WhatsApp LLC: To transmit, deliver, and synchronize WhatsApp communications, templates, and webhook event payloads via official WhatsApp Business APIs.",
        "Cloud Hosting and Infrastructure Providers: For secure application and website hosting, compute execution, and content delivery.",
        "Direct Email Communication: Direct electronic mail correspondence managed through our monitored business domain (support@onlyfold.com).",
        "Performance and Analytics Monitoring: Aggregate, anonymized performance measurement to monitor site health, responsiveness, and page load latency.",
        "Legal & Regulatory Authorities: When required by a valid subpoena, court order, or binding statutory mandate, or to protect the safety, rights, and security of our users and the public.",
      ],
    },
    {
      id: "data-retention-and-deletion",
      heading: "6. Data Retention and Deletion",
      paragraphs: [
        "We retain personal and communication data only for as long as necessary to fulfill the operational purposes outlined in this policy, support active customer subscriptions, or satisfy legitimate business, accounting, tax, and legal requirements.",
        "When an account is terminated or data is no longer required, records are deleted or irreversibly anonymized in accordance with our data hygiene procedures.",
        "Requesting Deletion: You or your end-users may submit a formal deletion request at any time by following the instructions on our dedicated Data Deletion page (https://onlyfold.com/data-deletion) or by emailing support@onlyfold.com with the subject line 'Data deletion request'.",
        "Limited Retention Exceptions: Where applicable laws require record retention (such as invoices, statutory tax logs, dispute records, or security audit trails), certain limited data elements may be retained for the mandatory statutory duration before being expunged.",
      ],
    },
    {
      id: "data-security",
      heading: "7. Information Security",
      paragraphs: [
        "We implement appropriate technical, operational, and organizational security measures to protect data against unauthorized access, destruction, loss, or alteration. Safeguards include:",
      ],
      listItems: [
        "Encryption in transit using modern Transport Layer Security (HTTPS / TLS 1.2 and TLS 1.3).",
        "Role-based access control and least-privilege security restrictions for internal team members.",
        "Secure storage and strict segregation of API access tokens, credentials, and configuration secrets.",
        "Continuous infrastructure logging, system monitoring, and error tracking to detect anomalous patterns.",
      ],
      note: "While we employ stringent industry-standard safeguards, no digital transmission or online storage mechanism can be guaranteed 100% impenetrable.",
    },
    {
      id: "user-rights",
      heading: "8. Your Data Protection Rights",
      paragraphs: [
        "Depending on your jurisdiction, you may have specific statutory rights regarding personal data held about you:",
      ],
      listItems: [
        "Access: The right to request confirmation of whether we process your data and receive a copy of that data.",
        "Rectification: The right to request correction of inaccurate, incomplete, or outdated personal data.",
        "Erasure ('Right to be Forgotten'): The right to request deletion of personal information, subject to statutory retention limits.",
        "Restriction: The right to request that we restrict or suspend the processing of your data under specific conditions.",
        "Portability: The right to receive personal data in a structured, commonly used, machine-readable format.",
        "Objection: The right to object to processing carried out on the basis of legitimate business interests.",
      ],
      note: "If your inquiry concerns data processed by Onlyfold on behalf of one of our customer businesses (such as an end-customer lead), we will forward your request to the relevant customer business acting as the Data Controller.",
    },
    {
      id: "policy-updates",
      heading: "9. Policy Updates and Notification",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect operational modifications, product enhancements, or revisions to legal and regulatory standards.",
        "When changes occur, we will post the revised document on this page and update the 'Last Updated' date at the top of the policy. Material modifications will be communicated through appropriate administrative channels or notices on our Website.",
      ],
    },
  ],
  contactNotice: {
    heading: "10. Contact Information",
    text: "For questions, clarifications, privacy inquiries, or data rights requests, please contact our privacy representative directly at:",
    email: "support@onlyfold.com",
  },
} as const;
