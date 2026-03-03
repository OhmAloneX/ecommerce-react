import { useState } from "react";
import "./navbar.css";
import logo from "../../../../components/images/courtking-logo.svg";

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
          <span>🔍</span>
          <span>🛒</span>
          <span>👤</span>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
