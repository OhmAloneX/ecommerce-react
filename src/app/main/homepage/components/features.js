import "./features.css";

export default function Features() {
  const items = [
    {
      title: "Free Shipping",
      desc: "Free delivery on orders over $75 nationwide.",
    },
    {
      title: "Official Size 7",
      desc: "Regulation size used for competitive play.",
    },
    {
      title: "Enhanced Grip",
      desc: "Textured surface for better control and precision.",
    },
  ];

  return (
    <section className="features">
      <div className="container features-inner">
        {items.map((item, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">★</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}