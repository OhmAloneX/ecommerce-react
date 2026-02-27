import "./card.css";

export default function Card({ title, price }) {
  return (
    <div className="card">
      <div className="card-img"></div>
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}