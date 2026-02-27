import "./deal.css";

export default function Deal() {
  return (
    <section className="deal">
      <div className="container deal-inner">
        <div className="deal-left">
          <h4>Limited Offer</h4>
          <h2>20% Off Pro Series</h2>
          <p>
            Don’t miss out on our biggest sale of the season. Grab your
            favorites before they’re gone.
          </p>
          <button>Shop Now</button>
        </div>

        <div className="deal-right">
          <div className="deal-img"></div>
        </div>
      </div>
    </section>
  );
}