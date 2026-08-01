export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What documents are required for a Private Limited Company?",
    answer: "PAN, Aadhaar, address proof, passport-size photos, and office address proof of the directors."
  },
  {
    id: "faq-2",
    question: "How long does GST Registration take?",
    answer: "GST registration is usually completed within 3–7 working days, subject to document verification."
  },
  {
    id: "faq-3",
    question: "What annual compliances are mandatory for companies?",
    answer: "Companies must file annual returns, financial statements, income tax returns, and ROC compliances."
  },
  {
    id: "faq-4",
    question: "Do you provide accounting and bookkeeping services?",
    answer: "Yes, we offer bookkeeping, payroll, financial reporting, GST, and accounting solutions for businesses."
  },
  {
    id: "faq-5",
    question: "Are there any hidden charges?",
    answer: "No. We follow transparent pricing with no hidden costs. All charges are shared before the service begins."
  }
];
