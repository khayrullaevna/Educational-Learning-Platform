import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link">
              <span>l</span>earn
            </Link>
          </div>

          <div className="footer-links-box">
            <div className="footer-links">
              <Link to="/about" className="footer-link">
                About Us
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/globalmove.uz/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="footer-icon" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/globalmove/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer-icon" />
                LinkedIn
              </a>
              <a
                href="https://telegram.org/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="footer-icon" />
                Telegram
              </a>
            </div>

            <div className="footer-contact">
              <p>📍 Uzbekistan, Tashkent</p>
              <p>🏣 Alisher Navoiy street, 11a, Tashkent</p>
              <p>📞 +998 (99) 299-02-02</p>
              <p>📧 hello@globalmove.uz</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
