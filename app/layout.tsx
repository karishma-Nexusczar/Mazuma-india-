import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./home.css";

export const viewport: Viewport = {
  themeColor: "#051A2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mazumaindia.com"),
  title: {
    default: "Mazuma India | Tax, Compliance & Business Advisory | mazumaindia.com",
    template: "%s | Mazuma India",
  },
  description:
    "Mazuma India (mazumaindia.com) - Premier Tax, GST registration, company incorporation, ITR filing, accounting & business compliance advisory services in India.",
  keywords: [
    "Mazuma India",
    "mazumaindia.com",
    "Mazuma",
    "Mazuma Logo",
    "Mazuma Taxation",
    "Mazuma India Tax",
    "Mazuma India Website",
    "Mazuma GST",
    "Tax Consultant India",
    "GST Registration India",
    "Company Registration",
    "Income Tax Return",
    "Chartered Accountant India",
    "Business Advisory India",
    "Accounting Services"
  ],
  authors: [{ name: "Mazuma India", url: "https://mazumaindia.com" }],
  creator: "Mazuma India",
  publisher: "Mazuma India",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/mazuma-logo-transparent.png", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mazumaindia.com",
    siteName: "Mazuma India",
    title: "Mazuma India | Tax, Compliance & Business Advisory | mazumaindia.com",
    description:
      "Clear advice. Confident decisions. Compliant growth. Expert tax, GST, and corporate compliance services across India.",
    images: [
      {
        url: "/mazuma-logo-transparent.png",
        width: 800,
        height: 800,
        alt: "Mazuma India Logo",
      },
      {
        url: "/mazuma-hero-office.png",
        width: 1200,
        height: 630,
        alt: "Mazuma India Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazuma India | Tax, Compliance & Business Advisory",
    description: "Tax, GST, company registration and compliance support for ambitious Indian businesses.",
    images: ["/mazuma-hero-office.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mazumaindia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mazumaindia.com/#organization",
        name: "Mazuma India",
        alternateName: ["mazumaindia.com", "Mazuma Logo", "Mazuma", "Mazuma India Tax"],
        url: "https://mazumaindia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://mazumaindia.com/mazuma-logo-transparent.png",
          caption: "Mazuma India Logo",
        },
        image: "https://mazumaindia.com/mazuma-logo-transparent.png",
        description:
          "Mazuma India is a leading tax, GST, company incorporation, and financial compliance services firm in India.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9876543210",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.facebook.com/mazumaindiacompany",
          "https://x.com/Mazuma_Indi",
          "https://www.instagram.com/mazumaindia/",
          "https://www.linkedin.com/in/mazuma-india-010344326/",
          "https://www.youtube.com/@MAZUMAINDIA"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://mazumaindia.com/#website",
        url: "https://mazumaindia.com",
        name: "Mazuma India",
        alternateName: "mazumaindia.com",
        publisher: {
          "@id": "https://mazumaindia.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

