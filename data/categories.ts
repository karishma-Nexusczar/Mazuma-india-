export interface CategoryDefinition {
  id: string;
  name: string;
  slug: string;
  description: string;
  relatedServices: {
    title: string;
    description: string;
    link: string;
  }[];
}

export const CATEGORIES_DATA: CategoryDefinition[] = [
  {
    id: "income-tax",
    name: "Income Tax",
    slug: "income-tax",
    description: "Expert guides on ITR filing, tax planning, capital gains, and statutory compliance.",
    relatedServices: [
      {
        title: "Income Tax Return (ITR) Filing Services",
        description: "CA-assisted e-filing for salaried, business, and capital gain taxpayers.",
        link: "/#contact-us"
      },
      {
        title: "TDS Returns & Compliance",
        description: "Quarterly Form 26Q & 24Q filing with Form 16/16A generation.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "gst",
    name: "GST",
    slug: "gst",
    description: "Goods and Services Tax registration, GSTR-1, GSTR-3B returns, and Input Tax Credit (ITC) reconciliation.",
    relatedServices: [
      {
        title: "GST Registration & Amendment",
        description: "Instant new GSTIN registration within 3-5 business days.",
        link: "/#contact-us"
      },
      {
        title: "Monthly GSTR-1 & GSTR-3B Filing",
        description: "100% accurate return filing with GSTR-2B ITC reconciliation.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "company-registration",
    name: "Company Registration",
    slug: "company-registration",
    description: "Private Limited Company, LLP, OPC, and Section 8 company incorporation services.",
    relatedServices: [
      {
        title: "Private Limited Company Incorporation",
        description: "Complete setup including Name Approval, SPICe+ filing, PAN, TAN & DIN.",
        link: "/#contact-us"
      },
      {
        title: "Limited Liability Partnership (LLP)",
        description: "Low-compliance partnership registration with legal agreement drafting.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "roc",
    name: "ROC",
    slug: "roc",
    description: "Annual MCA returns, DIR-3 KYC, AOC-4, MGT-7, and secretarial legal compliance.",
    relatedServices: [
      {
        title: "Annual ROC Return Filing (AOC-4 & MGT-7)",
        description: "Timely financial statement submission to Registrar of Companies.",
        link: "/#contact-us"
      },
      {
        title: "DIR-3 Director KYC Verification",
        description: "Mandatory annual director identity verification before MCA due date.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "accounting",
    name: "Accounting",
    slug: "accounting",
    description: "Bookkeeping, financial audit, balance sheet preparation, and Virtual CFO services.",
    relatedServices: [
      {
        title: "Cloud Bookkeeping & Accounting",
        description: "Daily accounting on Tally, Zoho Books, or QuickBooks by senior accountants.",
        link: "/#contact-us"
      },
      {
        title: "Financial Audit & Tax Audit",
        description: "Chartered Accountant audit for corporate compliance and loan eligibility.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "trademark",
    name: "Trademark",
    slug: "trademark",
    description: "Brand name, logo registration, IP search, objection reply, and copyright protection.",
    relatedServices: [
      {
        title: "Trademark Class Search & Registration",
        description: "Protect your brand name & logo with ™ symbol within 24 hours.",
        link: "/#contact-us"
      },
      {
        title: "Trademark Objection & Hearing Reply",
        description: "Expert IP lawyer representation before Trademark Registry.",
        link: "/#contact-us"
      }
    ]
  },
  {
    id: "msme",
    name: "MSME",
    slug: "msme",
    description: "Udyam registration benefits, government subsidies, and collateral-free loans.",
    relatedServices: [
      {
        title: "Udyam MSME Registration Certificate",
        description: "Official government MSME certificate for bank loan subsidies and tender preference.",
        link: "/#contact-us"
      }
    ]
  }
];
