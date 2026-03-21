import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg viewBox="0 0 48 48" className="footer-logo-icon" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M24 8c0 0-6 4-6 12s6 16 6 16 6-8 6-16S24 8 24 8z" fill="currentColor" opacity="0.3" />
                <path d="M24 12c-2 3-3 6-3 8 0 4 3 10 3 10s3-6 3-10c0-2-1-5-3-8z" fill="currentColor" />
              </svg>
              <div>
                <span className="footer-name">SPICE BAZAAR</span>
                <span className="footer-tagline">GROCERY & SPICES</span>
              </div>
            </Link>
            <p className="footer-description">
              Your neighborhood destination for authentic Indian spices, fresh produce,
              lentils, grains, and artisanal ingredients since 2008.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12 5.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/products">Products</Link>
            <Link to="/deals">Weekly Deals</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/catering">Catering</Link>
            <Link to="/about">About Us</Link>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <Link to="/products">Whole Spices</Link>
            <Link to="/products">Ground Spices</Link>
            <Link to="/products">Rice & Grains</Link>
            <Link to="/products">Lentils & Dals</Link>
            <Link to="/products">Snacks & Sweets</Link>
          </div>

          <div className="footer-col">
            <h4>Store Hours</h4>
            <div className="footer-hours">
              <p><strong>Mon - Sat</strong></p>
              <p className="price">9:00 AM - 9:00 PM</p>
              <p><strong>Sunday</strong></p>
              <p className="price">10:00 AM - 7:00 PM</p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong>Phone:</strong><br />
                <span className="price">(555) 234-5678</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Spice Bazaar Grocery. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
