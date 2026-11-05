import { siteConfig } from "@/config/site";
import type { LegalPageContent } from "./legal.types";

export const dataDeletionContent: LegalPageContent = {
  badge: "DATA PRIVACY",
  title: "User Data Deletion Instructions",
  metaTitle: "Data Deletion Instructions",
  metaDescription:
    "Step-by-step instructions on how to request the deletion or anonymization of your data from Onlyfold's WhatsApp automation system.",
  effectiveDate: "November 5, 2026",
  lastUpdated: "November 5, 2026",
  backLink: {
    label: "← Back to Onlyfold",
    href: siteConfig.links.home,
  },
  operatorNotice:
    "Onlyfold provides transparent mechanisms for users, customers, and data subjects to request the permanent deletion or anonymization of personal and business data processed through our systems.",
  introduction: [
    "In accordance with Meta Platform policies, applicable data privacy regulations, and our commitment to user rights, you may request the deletion of data associated with your interactions with Onlyfold.",
    "Below are the documented, verified instructions for submitting a data deletion request.",
  ],
  sections: [
    {
      id: "submission-steps",
      heading: "1. How to Submit a Deletion Request",
      paragraphs: [
        "To initiate a data deletion request, please transmit an electronic message to our dedicated privacy contact following the specifications below:",
      ],
      listItems: [
        "Recipient Email: support@onlyfold.com",
        "Subject Line: Data deletion request",
        "Required Information to Include:",
        "• Your full legal or representative name",
        "• Your registered business name or account email address",
        "• The relevant phone number(s) or WhatsApp account identifier associated with the request",
        "• A clear description of the specific data, conversations, or account records you request to be deleted",
      ],
    },
    {
      id: "security-warning",
      heading: "2. Sensitive Information Warning",
      paragraphs: [
        "For your security and privacy, NEVER include sensitive authentication credentials or government identity records in your email. We do not require, and you should never send:",
      ],
      listItems: [
        "Account passwords or administrative passcodes",
        "Meta access tokens, bearer tokens, or API secrets",
        "Meta App Secrets or Client Secrets",
        "Government identification numbers (such as PAN, Aadhaar, SSN, or national ID details)",
        "Payment card details, CVV codes, or full banking credentials",
      ],
    },
    {
      id: "verification-and-processing",
      heading: "3. Verification and Processing Procedure",
      paragraphs: [
        "Identity Verification: Before executing a deletion request, we may take reasonable steps to verify the requester's identity and confirm their authority over the associated WhatsApp phone number, account email, or business entity. This prevents unauthorized tampering or deletion of customer records.",
        "Deletion & Anonymization: Once verified, we will permanently purge or irreversibly anonymize the requested personal data and associated messaging records from our operational databases and server logs, where legally and technically permissible.",
        "Processing Timeline: Deletion requests are processed promptly in the ordinary course of business. We do not make unverified, arbitrary commitments to immediate deletion (such as within minutes or hours), but we handle every legitimate request without undue delay.",
      ],
    },
    {
      id: "retention-exceptions",
      heading: "4. Limited Retention Exceptions",
      paragraphs: [
        "Please note that in certain limited situations, specific records cannot be completely expunged immediately. Records may be retained strictly as permitted or required by applicable laws for:",
      ],
      listItems: [
        "Statutory accounting, tax, and invoicing requirements under commercial regulations.",
        "Security audit logs and fraud-prevention records necessary to protect infrastructure integrity.",
        "Ongoing legal holds, dispute resolution documentation, or court-mandated preservation orders.",
      ],
    },
    {
      id: "meta-whatsapp-data-controls",
      heading: "5. Meta and WhatsApp Platform Separation",
      paragraphs: [
        "Onlyfold processes messages via Meta's WhatsApp Business Platform. Deleting data held within Onlyfold's systems does not automatically purge communications, backups, or account assets held directly on Meta's servers or stored within the end-user's personal WhatsApp mobile device.",
        "To manage or delete data held independently by Meta Platforms, Inc. or to revoke application permissions granted to business integrations, please consult Meta's official data and privacy controls via the Meta Privacy Center (https://www.facebook.com/privacy/center) and your Meta Business Manager Settings.",
      ],
    },
  ],
  contactNotice: {
    heading: "6. Questions Regarding Data Deletion",
    text: "If you have questions regarding our data deletion workflows or wish to check the status of a pending request, please email:",
    email: "support@onlyfold.com",
  },
} as const;
