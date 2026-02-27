import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="logo">SHOP.COM</div>

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