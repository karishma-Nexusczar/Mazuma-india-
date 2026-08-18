const fs = require('fs');

// 1. Update page.tsx
let page = fs.readFileSync('app/about-us/page.tsx', 'utf8');

const oldHeroRegex = /\{\/\* ── 1\. HERO BANNER ── \*\/\}\s*<section className="au-hero-section">[\s\S]*?<\/section>/;

const newHero = `{/* ── 1. HERO BANNER ── */}
      <section className="au-hero-section">
        {/* Full Background Image (Uncropped) */}
        <div className="au-hero-bg-wrapper">
          <Image
            src="/images/mazuma-group-about-bg.jpg"
            alt="Mazuma Group Background"
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
            {/* The right side image is removed as the image is now the full background */}
          </div>
        </div>
      </section>`;

page = page.replace(oldHeroRegex, newHero);
fs.writeFileSync('app/about-us/page.tsx', page);


// 2. Update about-us.css
let css = fs.readFileSync('app/about-us/about-us.css', 'utf8');

// We need to change .au-hero-bg-img and .au-hero-content-wrapper
css = css.replace(/\.au-hero-bg-img \{[\s\S]*?\}(?=\n\.|\n\n)/g, `.au-hero-bg-img {
  object-fit: contain;
  object-position: center;
}`);

css = css.replace(/\.au-hero-content-wrapper \{[\s\S]*?\}(?=\n\.|\n\n)/g, `.au-hero-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 5;
}`);

// If there are lingering max-width media queries for content wrapper, we can replace them too, but it's flex now.
css = css.replace(/@media \(max-width: 1024px\) \{\s*\.au-hero-content-wrapper \{[\s\S]*?\}\s*\.au-hero-left \{[\s\S]*?\}\s*\.au-hero-desc-group \{[\s\S]*?\}\s*\.au-hero-ctas \{[\s\S]*?\}\s*\.au-hero-img-card-v2 \{[\s\S]*?\}\s*\}/g, `@media (max-width: 1024px) {
  .au-hero-left {
    text-align: left;
    align-items: flex-start;
  }
  .au-hero-desc-group {
    text-align: left;
    margin: 0 0 36px 0;
  }
  .au-hero-ctas {
    justify-content: flex-start;
  }
}`);

// Darken overlay slightly less so the image is highly visible, but text is still readable
css = css.replace(/\.au-hero-bg-overlay \{[\s\S]*?\}(?=\n\.|\n\n)/g, `.au-hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
  z-index: 1;
}`);

// Remove au-hero-right css
css = css.replace(/\.au-hero-right \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-img-card-v2 \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');
css = css.replace(/\.au-hero-img-v2 \{[\s\S]*?\}(?=\n\.|\n\n)/g, '');

fs.writeFileSync('app/about-us/about-us.css', css);
