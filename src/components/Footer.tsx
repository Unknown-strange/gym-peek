import { Link } from 'react-router-dom'
import { Logo, Instagram, Twitter, Linkedin, Chat } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand">
              <Logo size={30} />
              <span>GymPeek</span>
            </Link>
            <p className="footer-tagline">See inside the gym before you go.</p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <Link to="/gyms">Browse Gyms</Link>
            <Link to="/add-your-gym">Add your gym</Link>
            <Link to="/about">About</Link>
            <Link to="/about#contact">Contact</Link>
          </nav>

          <div className="footer-social">
            <a href="https://wa.me/233241234567" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <Chat size={16} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a href="https://x.com" aria-label="X" target="_blank" rel="noreferrer">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GymPeek Ghana. All rights reserved.</span>
          <span>Accra • Kumasi • Takoradi • Tamale • Tema</span>
        </div>
      </div>
    </footer>
  )
}
