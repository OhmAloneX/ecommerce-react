import "./cardlist.css";
import { useState } from "react";
import Image from "../../../../components/ui/image";
import ball1 from "../../../../components/images/basketball1.png";
import ball2 from "../../../../components/images/basketball2.png";
import ball3 from "../../../../components/images/basketball3.png";
import ball4 from "../../../../components/images/basketball4.png";
import ball5 from "../../../../components/images/basketball5.png";
import ball6 from "../../../../components/images/basketball6.png";
import ball7 from "../../../../components/images/basketball7.png";
import ball8 from "../../../../components/images/basketball8.png";


export default function CardList() {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { key: "all", label: "All" },
    { key: "new", label: "New Arrivals" },
    { key: "best", label: "Best Seller" },
    { key: "top", label: "Top Rated" },
  ];
  const products = [
    { id: 1, name: "Pro Grip Basketball", price: "₱299.99", image: ball1, tag: "best" },
    { id: 2, name: "Street Series Ball", price: "₱399.99", image: ball2, tag: "top" },
    { id: 3, name: "Elite Match Ball", price: "₱599.99", image: ball3, tag: "new" },
    { id: 4, name: "Training Ball", price: "₱559.99", image: ball4, tag: "new" },
    { id: 5, name: "Indoor Leather Ball", price: "₱549.99", image: ball5, tag: "best" },
    { id: 6, name: "Outdoor Rubber Ball", price: "₱349.99", image: ball6, tag: "top" },
    { id: 7, name: "Youth Size 6 Ball", price: "₱279.99", image: ball7, tag: "best" },
    { id: 8, name: "Mini Skill Ball", price: "₱199.99", image: ball8, tag: "top" },
  ];
  const shown = activeTab === "all" ? products : products.filter(p => p.tag === activeTab);

  return (
    <section aria-labelledby="trendy-products">
      <div className="container">
        <h2 id="trendy-products">Our Trendy Products</h2>
      </div>
      <div className="container tabs" role="tablist" aria-label="Product categories">
        {tabs.map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={activeTab === t.key}
            className={`tab ${activeTab === t.key ? "active" : ""}`}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="container card-grid" role="list">
        {shown.map((product) => (
          <div className="product-card" key={product.id} role="listitem">
            <Image
              src={product.image}
              alt={product.name}
              aspect="1-1"
              sizes="(max-width: 1024px) 45vw, (max-width: 600px) 90vw, 260px"
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
