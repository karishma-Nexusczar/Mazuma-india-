import {
  ReceiptText,
  Calculator,
  Building2,
  BadgeIndianRupee,
  ShieldCheck,
  Users,
  Factory,
  Handshake,
  FileCheck,
  ClipboardCheck,
  ScanLine,
  Landmark,
  Stamp,
  FileBadge,
  BriefcaseBusiness,
  Scale,
  type LucideIcon
} from "lucide-react";

export type ServiceItem = {
  title: string;
  icon: LucideIcon;
  category: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    title: "Company Registration",
    icon: Building2,
    category: "Registration",
    description: "Fast & hassle-free Private Limited, OPC, and Section 8 company incorporation."
  },
  {
    title: "Income Tax / GST / TDS",
    icon: ReceiptText,
    category: "Taxation",
    description: "Complete ITR filing, GST registration & returns, TDS compliance, and tax planning."
  },
  {
    title: "Accounting / Return / Tax Filing",
    icon: Calculator,
    category: "Accounting",
    description: "End-to-end bookkeeping, annual return filing, financial statements & tax compliance."
  },
  {
    title: "Trademark, ISO, IEC, FSSAI",
    icon: ShieldCheck,
    category: "Legal & Licenses",
    description: "Trademark search & filing, ISO certification, IEC code, and FSSAI food licensing."
  },
  {
    title: "Firm / MSME / LLP / Startup India",
    icon: BriefcaseBusiness,
    category: "Business Services",
    description: "Partnership firm, MSME Udyam registration, LLP incorporation, and Startup India benefits."
  },
  {
    title: "NGO Registration Services",
    icon: Users,
    category: "NGO",
    description: "Trust, Society, Section 8 registration, 12A/80G tax exemption, and FCRA services."
  },
  {
    title: "MSME Services",
    icon: Factory,
    category: "Registration",
    description: "Udyam Registration, Benefits & Loans"
  },
  {
    title: "Business Advisory",
    icon: Handshake,
    category: "Consulting",
    description: "Financial Planning, Funding & Compliance"
  },
  {
    title: "ROC Compliance",
    icon: FileCheck,
    category: "Compliance",
    description: "ROC Annual Filing & Company Returns"
  },
  {
    title: "Payroll Services",
    icon: ClipboardCheck,
    category: "HR",
    description: "Salary Processing & PF ESI Compliance"
  },
  {
    title: "Audit & Assurance",
    icon: ScanLine,
    category: "Audit",
    description: "Internal & Statutory Audit Services"
  },
  {
    title: "IEC Registration",
    icon: Landmark,
    category: "Import Export",
    description: "Import Export Code Registration"
  },
  {
    title: "Digital Signature",
    icon: Stamp,
    category: "Digital",
    description: "Class 3 DSC Registration & Certificate"
  },
  {
    title: "FSSAI Registration",
    icon: FileBadge,
    category: "Food License",
    description: "Food Business License & Registration"
  },
  {
    title: "Business Loans",
    icon: BriefcaseBusiness,
    category: "Finance",
    description: "MSME & Corporate Business Loans"
  },
  {
    title: "Legal Compliance",
    icon: Scale,
    category: "Compliance",
    description: "Complete Corporate Legal Compliance"
  }
];
