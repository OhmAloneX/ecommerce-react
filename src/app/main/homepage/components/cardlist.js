import "./cardlist.css";
import Card from "../../../../components/ui/card";


export default function CardList() {
  const products = [
    { title: "Pro Grip", price: 35 },
    { title: "Street Series", price: 20 },
    { title: "Elite Match", price: 55 },
    { title: "Training Equipment", price: 40 },
    { title: "Indoor Leather", price: 25 },
    { title: "Outdor Rubber Ball", price: 45 },
    { title: "Size 6 Ball", price: 120 },
    { title: "Mini Skill Ball", price: 30 },
  ];

  return (
    <section>
      <div className="container">
        <h2 style={{ marginBottom: "60px" }}>Our Trendy Products</h2>
        <div className="cards">
          {products.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}