import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>SHOP.COM</h3>
          <p>
            Premium Basketball Equipment Store bringing you the best trends and quality
            products.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SHOP.CO. All rights reserved.
      </div>
    </footer>
  );
}