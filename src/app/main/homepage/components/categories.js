import "./categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container categories-inner">

        {/* WOMEN */}
        <div className="cat women">
          <div className="cat-text">
            <h3>Indoor Basketball</h3>
            <button>Shop Now</button>
          </div>
          <div className="cat-img small-img"></div>
        </div>

        {/* MEN */}
        <div className="cat men">
          <div className="cat-text">
            <h3>Outdoor Basketball</h3>
            <button>Shop Now</button>
          </div>
          <div className="cat-img small-img"></div>
        </div>

        {/* KIDS */}
        <div className="cat kids">
          <div className="cat-text">
            <h3>Training Equipment</h3>
            <button>Shop Now</button>
          </div>
        </div>

        {/* GIFT */}
        <div className="cat gift">
          <div className="cat-text">
            <h3>Accessories</h3>
            <button>Shop Now</button>
          </div>
        </div>

      </div>
    </section>
  );
}