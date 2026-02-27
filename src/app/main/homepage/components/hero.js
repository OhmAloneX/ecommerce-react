import "./hero.css";
import heroBall from "../../../../components/images/basketball.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h5>ELEVATE YOUR GAME</h5>
          <h2>Official Size 7 Performance Basketball</h2>
          <p><b>Built for indoor & outdoor courts.</b></p>
          <button>Shop Now</button>
          
        </div>

        <div className="hero-right">
          
          <div className="hero-image">
            <img src={heroBall} alt="Basketball" />
          </div>
        </div>
      </div>
    </section>
  );
}