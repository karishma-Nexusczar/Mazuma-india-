"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

const QUICK_LINKS_DATA = {
  gst: {
    title: "GST",
    links: [
      { label: "GST Home", url: "https://www.gst.gov.in/" },
      { label: "Search Taxpayer", url: "https://services.gst.gov.in/services/searchtp" },
      { label: "GST Acts", url: "https://cbic-gst.gov.in/gst-acts.html" },
      { label: "GST Rules", url: "https://cbic-gst.gov.in/gst-rules.html" },
      { label: "GST News & Updates", url: "https://services.gst.gov.in/services/advisory/advisoryandreleases" },
      { label: "GST Circulars / Orders", url: "https://cbic-gst.gov.in/circulars-cgst.html" },
    ],
  },
  "income-tax": {
    title: "Income Tax",
    links: [
      { label: "Login / e-Filing", url: "https://www.incometax.gov.in/iec/foportal/" },
      { label: "Income Tax Act", url: "https://www.incometaxindia.gov.in/all-acts" },
      { label: "Rules", url: "https://www.incometaxindia.gov.in/income-tax-rule-2026" },
      { label: "Forms", url: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/income-tax-forms" },
      { label: "Notifications", url: "https://www.incometaxindia.gov.in/notifications" },
      { label: "Circulars", url: "https://www.incometaxindia.gov.in/circulars" },
    ],
  },
  mca: {
    title: "MCA / ROC",
    links: [
      { label: "MCA Login / Home", url: "https://www.mca.gov.in/content/mca/global/en/home.html" },
      { label: "Company / LLP Search", url: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html" },
      { label: "MCA User Login", url: "https://www.mca.gov.in/content/mca/global/en/foportal/fologin.html" },
      { label: "Acts & Rules", url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks.html" },
      { label: "About MCA", url: "https://www.mca.gov.in/content/mca/global/en/about-us/aboutmca.html" },
      { label: "Notifications & Circulars", url: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/notifications.html" },
    ],
  },
  rbi: {
    title: "RBI",
    links: [
      { label: "RBI Home", url: "https://www.rbi.org.in/" },
      { label: "Notifications", url: "https://www.rbi.org.in/scripts/NotificationUser.aspx" },
      { label: "Circulars", url: "https://www.rbi.org.in/scripts/bs_circularindexdisplay.aspx/Scripts/BS_CircularIndexDisplay.aspx" },
      { label: "Master Directions", url: "https://www.rbi.org.in/Scripts/BS_ViewMasterDirections.aspx" },
      { label: "Acts", url: "https://www.rbi.org.in/Scripts/Act.aspx" },
      { label: "Rules", url: "https://www.rbi.org.in/Scripts/Rules.aspx" },
      { label: "Press Releases / What's New", url: "https://www.rbi.org.in/" },
    ],
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string>("");
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (
        target &&
        !target.closest(".footer-dropdown-toggle") &&
        !target.closest(".footer-dropdown-list") &&
        !target.closest(".quicklinks-desktop-pane")
      ) {
        setOpenDropdown("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? "" : name);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && !loading) {
      setLoading(true);
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            name: "Newsletter Subscriber",
            service: "Newsletter Subscription",
            message: "User subscribed to newsletter from the footer."
          }),
        });
      } catch (error) {
        console.error("Subscription failed:", error);
      } finally {
        setLoading(false);
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
      }
    }
  };

  return (
    <footer className="modern-footer-section">
      {/* Horizontal Newsletter Bar */}
      <div className="footer-newsletter-bar-outer">
        <div className="footer-newsletter-bar section-shell">
          <div className="footer-newsletter-left">
            <div className="footer-newsletter-icon-wrap">
              <Mail className="footer-newsletter-icon" size={20} />
            </div>
            <div className="footer-newsletter-info">
              <h3 className="footer-newsletter-title">Subscribe to our Newsletter</h3>
              <p className="footer-newsletter-desc">
                Stay updated with our latest news, insights, and compliance updates.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="footer-newsletter-form-row">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-newsletter-input"
              required
            />
            <button type="submit" className="footer-newsletter-btn" disabled={loading}>
              {loading ? "Subscribing..." : subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-top-container section-shell">
        {/* Col 1: Logo & About + Social Icons */}
        <div className="footer-col footer-col-brand">
          <Link href="/" className="footer-logo-link">
            <img
              src="/mazuma-logo-footer.png"
              alt="Mazuma India - Partners in Good Wealth"
              className="footer-brand-logo"
            />
          </Link>
          <p className="footer-brand-desc">
            Mazuma India is a leading compliance and business consulting firm providing a wide range of services to startups, companies and individuals.
          </p>
          <div className="footer-socials-row">
            <a href="https://www.facebook.com/mazumaindiacompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/mazuma-india-010344326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://x.com/Mazuma_Indi" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="footer-social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="https://www.instagram.com/mazumaindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Combined Mobile Row for Quick Links & Our Services */}
        <div className="footer-links-group-mobile">
          {/* Col 2: Explore */}
          <div className="footer-col">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#services">Industries</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/admin/blog">Admin Portal</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="footer-col footer-col-services">
            <h3 className="footer-col-title">Our Services</h3>
            <ul className="footer-links-list">
              <li><Link href="/services/company-registration">Company Registration</Link></li>
              <li><Link href="/services/gst-services">GST Services</Link></li>
              <li><Link href="/services/income-tax">Income Tax</Link></li>
              <li><Link href="/services/msme-startup-india-registration">MSME &amp; Startup India</Link></li>
              <li><Link href="/services/accounting-bookkeeping">Accounting &amp; Bookkeeping</Link></li>
              <li><Link href="/services/trademark-business-registration">Trademark &amp; Registrations</Link></li>
              <li><Link href="/services/ngo-services">NGO Services</Link></li>
              <li><Link href="/services/business-compliance">Business Compliance</Link></li>
              <li><Link href="/services/business-registrations">Business Registrations</Link></li>
              <li><Link href="/services/ffmc-ad-nbfc-registration">FFMC / AD-II / NBFC</Link></li>
            </ul>
          </div>

          {/* Col 3.5: Usefull Links */}
          <div className="footer-col footer-col-quicklinks">
            <h3 className="footer-col-title">Usefull Links</h3>
            <div className="footer-quicklinks-row">
              <div className="footer-dropdowns-container">
                {(Object.keys(QUICK_LINKS_DATA) as Array<keyof typeof QUICK_LINKS_DATA>).map((key) => {
                  const item = QUICK_LINKS_DATA[key];
                  const isOpen = openDropdown === key;
                  return (
                    <div className="footer-dropdown-item" key={key}>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(key)}
                        className="footer-dropdown-toggle"
                        aria-expanded={isOpen}
                        aria-controls={`footer-${key}-dropdown`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={12}
                          strokeWidth={2}
                          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
                        />
                      </button>
                      
                      {/* Mobile-only inline list */}
                      <ul
                        id={`footer-${key}-dropdown`}
                        className={`footer-dropdown-list quicklinks-mobile-pane ${isOpen ? "open" : ""}`}
                      >
                        {item.links.map((link, idx) => (
                          <li key={idx} className="quicklink-item">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <span className="quicklink-arrow">→</span>
                              <span className="quicklink-label-text">{link.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Desktop-only side pane */}
              {openDropdown && (
                <div className="quicklinks-desktop-pane">
                  <h4 className="quicklinks-pane-title">
                    {QUICK_LINKS_DATA[openDropdown as keyof typeof QUICK_LINKS_DATA]?.title} Links
                  </h4>
                  <ul className="footer-links-list">
                    {QUICK_LINKS_DATA[openDropdown as keyof typeof QUICK_LINKS_DATA]?.links.map((link, idx) => (
                      <li key={idx} className="quicklink-item">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <span className="quicklink-arrow">→</span>
                          <span className="quicklink-label-text">{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contact Info</h3>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <Phone size={16} className="contact-lucide-icon" />
              <a href="tel:+919936351555">+91 99363 51555</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="contact-lucide-icon" />
              <a href="tel:+919999865586">+91 99998 65586</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="contact-lucide-icon" />
              <a href="mailto:compliance@mazumaindia.com">compliance@mazumaindia.com</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} className="contact-lucide-icon" style={{ marginTop: "2px" }} />
              <span>B-236, 2nd Floor, IT Tower-2, Grandthum, Plot No. 7, Techzone-4, Greater Noida West, Gautam Budh Nagar, Uttar Pradesh – 201308, India.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Copyright Row */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner section-shell">
          <span className="copyright-text">
            © 2026{" "}
            <a
              href="https://nexusczar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nexusczar-highlight-link"
            >
              <span className="nc-darkblue">Nexus</span>
              <span className="nc-lightblue">Czar.com</span>
            </a>
            . All Rights Reserved.
          </span>
          <div className="legal-links-row">
            <Link href="/contact-us">Privacy Policy</Link>
            <span className="legal-divider">|</span>
            <Link href="/contact-us">Terms & Conditions</Link>
            <span className="legal-divider">|</span>
            <Link href="/admin/blog">Admin Portal</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="floating-actions">
        <a
          className="whatsapp-float-btn"
          href="https://wa.me/919936351555"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
          <svg className="wa-icon" viewBox="0 0 32 32" width="32" height="32" fill="none">
            <path
              d="M16 2C8.268 2 2 8.268 2 16c0 2.66.744 5.15 2.036 7.28L2 30l6.892-1.99C11.01 29.31 13.432 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.44c-2.28 0-4.408-.62-6.242-1.7l-.448-.262-4.108 1.185 1.203-3.992-.288-.458C5.008 20.354 4.36 18.25 4.36 16 4.36 9.582 9.582 4.36 16 4.36S27.64 9.582 27.64 16 22.418 27.44 16 27.44zm7.256-8.775c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.896.199-.265.398-1.028 1.295-1.26 1.56-.232.265-.464.298-.862.099-.398-.199-1.68-.619-3.201-1.974-1.183-1.055-1.983-2.358-2.215-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.099-.199-.896-2.155-1.228-2.951-.323-.775-.651-.67-.896-.682-.232-.012-.497-.012-.763-.012-.265 0-.696.099-1.061.497-.365.398-1.393 1.36-1.393 3.316 0 1.956 1.426 3.846 1.625 4.111.199.265 2.805 4.283 6.796 6.006.949.409 1.69.654 2.268.838.953.303 1.821.26 2.507.158.765-.114 2.355-.962 2.686-1.89.332-.928.332-1.724.232-1.89-.099-.166-.365-.265-.763-.464z"
              fill="#FFFFFF"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
