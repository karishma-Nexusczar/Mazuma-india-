const fs = require('fs');

// 1. Update page.tsx
let page = fs.readFileSync('app/about-us/page.tsx', 'utf8');

// Ensure we import Image from next/image
if (!page.includes('import Image from "next/image"')) {
  page = page.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
}

const oldHeroRegex = /\{\/\* ── 1\. HERO BANNER ── \*\/\}\s*<section className="au-hero-section">[\s\S]*?<\/section>/;

const newHero = `{/* ── 1. HERO BANNER ── */}
      <section className="au-hero-section">
        {/* Background Layer */}
        <div className="au-hero-bg-wrapper">
          <Image
            src="/images/mazuma-group-about.jpg"
            alt=""
            fill
            priority
            className="au-hero-bg-img"
          />
          <div className="au-hero-bg-overlay" />
        </div>

        <div className="au-shell au-hero-shell relative">
          <nav className="au-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="au-breadcrumb-sep">&gt;</span>
            <span className="current">About Us</span>
          </nav>

          <div className="au-hero-content-wrapper">
            <div className="au-hero-left">
              <span className="au-eyebrow">ABOUT MAZUMA INDIA</span>
              <h1 className="au-hero-title">
                India&apos;s Trusted<br />
                Tax &amp; Business<br />
                <span className="highlight-orange">Compliance Partner</span>
              </h1>

              <div className="au-hero-desc-group">
                <p className="au-hero-desc-p">
                  Mazuma Professional Services Private Limited, established on 07 October 2021, operates under the brand name Mazuma India and provides professional taxation, accounting, compliance, and business advisory services.
                </p>
              </div>

              <div className="au-hero-ctas">
                <button type="button" className="au-btn-orange" onClick={() => setIsModalOpen(true)}>
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <Link href="/#services" className="au-btn-outline">
                  <span>Our Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Card - NO CROP, EXACT IMAGE */}
            <div className="au-hero-right">
              <div className="au-hero-img-card-v2">
                <Image
                  src="/images/mazuma-group-about.jpg"
                  alt="Mazuma Group - Partners in Good Wealth"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="au-hero-img-v2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>`;

page = page.replace(oldHeroRegex, newHero);
fs.writeFileSync('app/about-us/page.tsx', page);


// 2. Update about-us.css
let css = fs.readFileSync('app/about-us/about-us.css', 'utf8');

// Remove old hero section CSS blocks roughly
css = css.replace(/\/\* ── 1\. HERO BANNER ── \*\/[\s\S]*?(?=\.au-glance-section|\/\* ============================================================)/i, '');
css = css.replace(/\.au-hero-section \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-section \.au-shell \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-breadcrumb \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-breadcrumb a \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-breadcrumb a:hover \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-breadcrumb-sep \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-content-wrapper \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-left \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-right \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-img-card \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-img \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-title \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-desc-group \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-desc-p \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-ctas \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-btn-orange \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-btn-orange:hover \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-btn-outline \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-btn-outline:hover \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-inc-badge \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-inc-badge:hover \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-inc-icon \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-inc-label \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-inc-date \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');


const newCSS = `
/* ============================================================
   1. HERO BANNER - PREMIUM LAYERED
   ============================================================ */
.au-hero-section {
  position: relative;
  width: 100%;
  min-height: 650px;
  padding: 60px 0 80px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #0f172a; /* Fallback dark */
}

/* Background Image Layer */
.au-hero-bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.au-hero-bg-img {
  object-fit: cover;
  object-position: center;
  filter: blur(24px) brightness(0.7);
  transform: scale(1.15); /* Prevent blur edges */
}

.au-hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%);
  z-index: 1;
}

.au-hero-shell {
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
}

.au-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: #cbd5e1;
  margin-bottom: 30px;
  align-self: flex-start;
}

.au-breadcrumb a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.2s ease;
}

.au-breadcrumb a:hover {
  color: #f36b21;
}

.au-breadcrumb-sep {
  color: #94a3b8;
  font-size: 12px;
}

.au-breadcrumb .current {
  color: #ffffff;
}

.au-hero-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}

.au-hero-left {
  display: flex;
  flex-direction: column;
}

.au-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f36b21;
  margin-bottom: 16px;
}

.au-hero-title {
  font-family: var(--font-head, 'Plus Jakarta Sans', sans-serif);
  font-size: clamp(34px, 4vw, 54px);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 24px 0;
}

.highlight-orange {
  color: #f36b21;
}

.au-hero-desc-group {
  margin-bottom: 36px;
  max-width: 540px;
}

.au-hero-desc-p {
  font-size: 16.5px;
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
}

.au-hero-ctas {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.au-btn-orange {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #f36b21;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(243, 107, 33, 0.3);
  transition: all 0.25s ease;
}

.au-btn-orange:hover {
  background-color: #d94e0a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(243, 107, 33, 0.4);
}

.au-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 26px;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.25s ease;
}

.au-btn-outline:hover {
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.au-hero-right {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.au-hero-img-card-v2 {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5; /* Approx portrait aspect */
  max-height: 600px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  /* Adding a very subtle warm glow */
  filter: drop-shadow(0 0 25px rgba(243, 107, 33, 0.15));
}

.au-hero-img-v2 {
  object-fit: contain;
  object-position: center;
  border-radius: 16px;
}

@media (max-width: 1024px) {
  .au-hero-content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .au-hero-left {
    text-align: center;
    align-items: center;
  }
  .au-hero-desc-group {
    text-align: center;
    margin: 0 auto 36px auto;
  }
  .au-hero-ctas {
    justify-content: center;
  }
  .au-hero-img-card-v2 {
    max-height: 500px;
  }
}

@media (max-width: 768px) {
  .au-hero-section {
    padding: 40px 0 60px 0;
  }
  .au-hero-title {
    font-size: 32px;
  }
  .au-btn-orange, .au-btn-outline {
    width: 100%;
    justify-content: center;
  }
  .au-hero-img-card-v2 {
    max-height: 400px;
    aspect-ratio: 3/4;
  }
}
`;

fs.writeFileSync('app/about-us/about-us.css', newCSS + '\n' + css);
