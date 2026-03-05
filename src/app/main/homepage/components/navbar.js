import { useState } from "react";
import "./navbar.css";
import logo from "../../../../components/images/courtking-logo.svg";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a className="logo" href="/" aria-label="CourtKing Home">
          <img src={logo} alt="CourtKing" />
        </a>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>

        <div className="nav-icons">
          <Search size={20} strokeWidth={1.5} className="nav-icon" />
          <ShoppingCart size={20} strokeWidth={1.5} className="nav-icon" />
          <User size={20} strokeWidth={1.5} className="nav-icon" />
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
