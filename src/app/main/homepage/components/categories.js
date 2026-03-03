import "./categories.css";
import Image from "../../../../components/ui/image";
import ball2 from "../../../../components/images/basketball2.png";
import ball3 from "../../../../components/images/basketball3.png";
import ball4 from "../../../../components/images/basketball4.png";
import ball5 from "../../../../components/images/basketball5.png";

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
          <Image src={ball3} alt="Indoor microfiber leather ball" aspect="4-3" />
        </div>

        {/* MEN */}
        <div className="cat men">
          <div className="cat-text">
            <h3>Outdoor Basketball</h3>
            <button>Shop Now</button>
          </div>
          <Image src={ball4} alt="Durable outdoor rubber ball" aspect="4-3" />
        </div>

        {/* KIDS */}
        <div className="cat kids">
          <div className="cat-text">
            <h3>Training Equipment</h3>
            <button>Shop Now</button>
          </div>
          <Image src={ball5} alt="Skill training mini ball" aspect="1-1" />
        </div>

        {/* GIFT */}
        <div className="cat gift">
          <div className="cat-text">
            <h3>Accessories</h3>
            <button>Shop Now</button>
          </div>
          <Image src={ball2} alt="Pump, net, and accessories" aspect="1-1" />
        </div>

      </div>
    </section>
  );
}
