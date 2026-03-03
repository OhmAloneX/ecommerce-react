import "./deal.css";
import Image from "../../../../components/ui/image";
import promoFallback from "../../../../components/images/basketball4.png";
import dealSection from "../../../../components/images/dealsection.jpg"

export default function Deal() {
  return (
    <section className="deal">
      <div className="container deal-inner">
        <div className="deal-left">
          <h4>This Week’s MVP</h4>
          <h2>Save 20% on TrueGrip Microfiber Leather</h2>
          <p>
            Enhanced control, official size & weight, built for competitive play.
            Limited time offer while stocks last.
          </p>
          <button aria-label="Grab the Deal">Grab the Deal</button>
        </div>

        <div className="deal-right">
          <Image
            src={dealSection}
            alt="TrueGrip microfiber leather basketball photo"
            aspect="1-1"
            sizes="(max-width: 768px) 80vw, 350px"
            fallbackSrc={promoFallback}
          />
        </div>
      </div>
    </section>
  );
}
