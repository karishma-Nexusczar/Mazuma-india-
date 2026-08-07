"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Award, FileText, Mail, X, Menu, Calendar } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function Header() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Company Registration",
    city: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const pathname = usePathname();

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name || formData.email || "Website Client",
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          city: formData.city,
          source: "Header Consultation Form"
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "Company Registration",
          city: ""
        });
      }, 3500);
    } catch (err) {
      console.error("Header consultation submit error:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const headerServicesList = [
    { name: "Company Registration", href: "/services/company-registration", targetId: "service-company-registration" },
    { name: "GST Services", href: "/services/gst-services", targetId: "service-gst" },
    { name: "Income Tax", href: "/services/income-tax", targetId: "service-incometax" },
    { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping", targetId: "service-accounting" },
    { name: "Trademark & Business Registrations", href: "/services/trademark-business-registration", targetId: "service-trademark" },
    { name: "NGO Services", href: "/services/ngo-services", targetId: "service-ngo-registration" },
    { name: "Business Compliance", href: "/services/business-compliance", targetId: "services" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setServicesOpen(false);
    setResourcesOpen(false);
    setMenuOpen(false);

    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        const headerWrapper = document.querySelector(".sticky-header-wrapper");
        const headerHeight = headerWrapper ? headerWrapper.getBoundingClientRect().height : 90;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - headerHeight + 10);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="sticky-header-wrapper">
      {/* Top Bar (Matched 100% to Image 8) */}
      <div className="top-trust-bar">
        <div className="top-trust-bar-inner">
          <div className="top-trust-stats-row">
            <div className="top-trust-stat-item">
              <div className="top-trust-icon-box">
                <Users size={14} />
              </div>
              <span className="top-trust-stat-text">5000+ Happy Clients</span>
            </div>

            <div className="top-trust-stat-item">
              <div className="top-trust-icon-box">
                <Award size={14} />
              </div>
              <span className="top-trust-stat-text">20+ Years Experience</span>
            </div>

            <div className="top-trust-stat-item">
              <div className="top-trust-icon-box">
                <FileText size={14} />
              </div>
              <span className="top-trust-stat-text">100000+ Tax Filings</span>
            </div>
          </div>

          <div className="top-trust-right-row">
            <a href="mailto:compliance@mazumaindia.com" className="top-trust-email-link">
              compliance@mazumaindia.com
            </a>
            <div className="top-trust-socials">
              <a href="https://www.facebook.com/mazumaindiacompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="top-trust-social-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://x.com/Mazuma_Indi" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="top-trust-social-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/mazuma-india-010344326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="top-trust-social-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com/mazumaindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="top-trust-social-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`site-header ${showTop ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Mazuma India home" onClick={() => setMenuOpen(false)}>
          <img src="/mazuma-logo-transparent.png" alt="Mazuma, Partners in Good Wealth" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu backdrop */}
        {menuOpen && (
          <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
        )}

        <nav className={menuOpen ? "open" : ""}>
          <Link href="/" onClick={(e) => handleNavClick(e, "home")}>
            <span>Home</span>
          </Link>
          
          <Link href="/about-us" onClick={() => { setMenuOpen(false); setServicesOpen(false); setResourcesOpen(false); }}>
            <span>About Us</span>
          </Link>

          {/* Services Dropdown */}
          <div
            className={`nav-dropdown-item ${servicesOpen ? "dropdown-expanded" : ""}`}
            onMouseEnter={() => {
              if (typeof window !== "undefined" && window.innerWidth > 900) {
                setServicesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (typeof window !== "undefined" && window.innerWidth > 900) {
                setServicesOpen(false);
              }
            }}
          >
            <Link
              href="/#services"
              className="nav-link-dropdown"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.innerWidth <= 900) {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                } else {
                  handleNavClick(e, "services");
                }
              }}
            >
              <span>Services</span>
              <svg className={`nav-chevron ${servicesOpen ? "is-active" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>

            <div className={`services-dropdown-menu ${servicesOpen ? "is-open" : ""}`}>
              {headerServicesList.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="services-dropdown-link"
                    onClick={(e) => {
                      setServicesOpen(false);
                      setMenuOpen(false);
                      if (pathname === item.href) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div
            className={`nav-dropdown-item ${resourcesOpen ? "dropdown-expanded" : ""}`}
            onMouseEnter={() => {
              if (typeof window !== "undefined" && window.innerWidth > 900) {
                setResourcesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (typeof window !== "undefined" && window.innerWidth > 900) {
                setResourcesOpen(false);
              }
            }}
          >
            <Link
              href="/blog"
              className="nav-link-dropdown"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.innerWidth <= 900) {
                  e.preventDefault();
                  setResourcesOpen(!resourcesOpen);
                } else {
                  setMenuOpen(false);
                }
              }}
            >
              <span>Resources</span>
              <svg className={`nav-chevron ${resourcesOpen ? "is-active" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>

            <div className={`services-dropdown-menu ${resourcesOpen ? "is-open" : ""}`}>
              <Link href="/blog" className="services-dropdown-link" onClick={() => setMenuOpen(false)}>Latest Articles</Link>
              <Link href="/#testimonials" className="services-dropdown-link" onClick={(e) => handleNavClick(e, "testimonials")}>Client Testimonials</Link>
              <Link href="/#contact-us" className="services-dropdown-link" onClick={(e) => handleNavClick(e, "contact-us")}>FAQ</Link>
              <Link href="/#contact-us" className="services-dropdown-link" onClick={(e) => handleNavClick(e, "contact-us")}>Free Consultation</Link>
            </div>
          </div>

          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            <span>Blog</span>
          </Link>
          
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            <span>Contact Us</span>
          </Link>

          {/* Mobile menu action button inside drawer */}
          <div className="mobile-drawer-cta">
            <button
              className="button button-primary mobile-cta-button"
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              <Calendar size={18} />
              <span>Book Free Consultation</span>
            </button>
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <button
          className="button button-primary header-cta-desktop"
          onClick={() => setIsModalOpen(true)}
        >
          <Calendar size={16} />
          <span>Book Free Consultation</span>
        </button>
      </header>

      {/* HEADER CONSULTATION POPUP MODAL */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
