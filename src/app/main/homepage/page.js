import "./homepage.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";
import CardList from "./components/cardlist";
import Deal from "./components/deal";
import Features from "./components/features";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Categories />
      <CardList />
      <Deal />
      <Features />
      <Footer />
    </div>
  );
}