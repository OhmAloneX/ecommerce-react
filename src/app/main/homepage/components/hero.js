import "./hero.css";
import Image from "../../../../components/ui/image";
import heroBall from "../../../../components/images/basketball.png";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="badge">Rated 4.8/5 by 5,000+ players</div>
          <h1 id="hero-title">Elevate Your Game</h1>
          <p className="subtitle">Pro‑grade basketballs engineered for grip, bounce, and durability.</p>
          <div className="cta-row">
            <button className="cta-primary">Shop Pro Balls</button>
            <button className="cta-secondary" aria-label="Compare Models">Compare Models</button>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src={heroBall}
            alt="Pro basketball with microfiber leather and deep channels"
            aspect="16-9"
            sizes="(max-width: 768px) 90vw, 600px"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
