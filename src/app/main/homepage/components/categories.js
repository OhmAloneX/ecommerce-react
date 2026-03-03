import "./categories.css";
import Image from "../../../../components/ui/image";
import indoor from "../../../../components/images/indoor.jpg"
import outdoor from "../../../../components/images/outdoor.jpg"
import trainingEquipment from "../../../../components/images/training equipment.jpg"
import accessories from "../../../../components/images/accessories.jpg"
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
          <Image src={indoor} alt="Indoor microfiber leather ball" aspect="4-3" />
        </div>

        {/* MEN */}
        <div className="cat men">
          <div className="cat-text">
            <h3>Outdoor Basketball</h3>
            <button>Shop Now</button>
          </div>
          <Image src={outdoor} alt="Durable outdoor rubber ball" aspect="4-3" />
        </div>

        {/* KIDS */}
        <div className="cat kids">
          <div className="cat-text">
            <h3>Training Equipment</h3>
            <button>Shop Now</button>
          </div>
          <Image src={trainingEquipment} alt="Skill training mini ball" aspect="1-1" />
        </div>

        {/* GIFT */}
        <div className="cat gift">
          <div className="cat-text">
            <h3>Accessories</h3>
            <button>Shop Now</button>
          </div>
          <Image src={accessories} alt="Pump, net, and accessories" aspect="1-1" />
        </div>

      </div>
    </section>
  );
}
