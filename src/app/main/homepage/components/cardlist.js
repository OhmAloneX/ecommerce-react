import "./cardlist.css";
import Card from "../../../../components/ui/card";
import ball1 from "../../../../components/images/basketball1.png";
import ball2 from "../../../../components/images/basketball2.png";
import ball3 from "../../../../components/images/basketball3.png";
import ball4 from "../../../../components/images/basketball4.png";
import ball5 from "../../../../components/images/basketball5.png";
import ball6 from "../../../../components/images/basketball6.png";
import ball7 from "../../../../components/images/basketball7.png";
import ball8 from "../../../../components/images/basketball8.png";


export default function CardList() {
  const products = [
    { id: 1, name: "Pro Grip Basketball", price: "$49.99", image: ball1 },
    { id: 2, name: "Street Series Ball", price: "$39.99", image: ball2 },
    { id: 3, name: "Elite Match Ball", price: "$59.99", image: ball3 },
    { id: 4, name: "Training Ball", price: "$29.99", image: ball4 },
    { id: 5, name: "Indoor Leather Ball", price: "$54.99", image: ball5 },
    { id: 6, name: "Outdoor Rubber Ball", price: "$34.99", image: ball6 },
    { id: 7, name: "Youth Size 6 Ball", price: "$27.99", image: ball7 },
    { id: 8, name: "Mini Skill Ball", price: "$19.99", image: ball8 },
  ];

  return (
    <section>
      <div className="card-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}