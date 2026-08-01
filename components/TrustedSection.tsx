import Image from "next/image";
import { trustedLogoRows, type TrustedLogo } from "../data/trusted-logos";

function MovingLogo({ logo }: { logo: TrustedLogo }) {
  return (
    <div className="trusted-moving-logo" role="img" aria-label={logo.alt}>
      <Image src={logo.src} alt={logo.alt} width={120} height={52} sizes="120px" />
    </div>
  );
}

export default function TrustedSection() {
  const logos = trustedLogoRows.flat();

  return (
    <section className="trusted-section" aria-label="Company trust statistic">
      <div className="trusted-shell">
        <p className="trusted-summary"><strong>1000+</strong> <span>companies trust us!</span></p>
        <div className="trusted-logo-window" aria-label="Recognized platforms and authorities">
          <div className="trusted-logo-track">
            {[...logos, ...logos].map((logo, index) => <MovingLogo key={`${logo.name}-${index}`} logo={logo} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
