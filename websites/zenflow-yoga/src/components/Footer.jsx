import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-blob">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,0 L0,0 Z" fill="var(--mist)"/>
        </svg>
      </div>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 50 60" width="36" height="44">
                <circle cx="25" cy="10" r="5" fill="none" stroke="var(--sand)" strokeWidth="1.8"/>
                <path d="M25 15 C25 15, 25 22, 25 28 C25 32, 23 36, 18 42 M25 28 C25 32, 27 36, 32 42 M25 22 C22 22, 16 24, 12 22 M25 22 C28 22, 34 24, 38 22" fill="none" stroke="var(--sand)" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M20 42 C18 48, 15 52, 12 56 M30 42 C32 48, 35 52, 38 56" fill="none" stroke="var(--sand)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="footer-logo-name">ZENFLOW</span>
                <span className="footer-logo-tagline">yoga & wellness</span>
              </div>
            </div>
            <p className="footer-description">
              A sanctuary for body, mind, and spirit. Where ancient wisdom meets modern wellness in a space designed for transformation.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Practice</h4>
            <Link to="/schedule">Class Schedule</Link>
            <Link to="/classes">Class Types</Link>
            <Link to="/instructors">Instructors</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <Link to="/contact">Visit Us</Link>
            <Link to="/register">New Students</Link>
            <Link to="/pricing">Memberships</Link>
            <a href="#">Gift Cards</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <p className="footer-contact-item">
              <span>123 Serenity Lane</span>
              <span>Portland, OR 97201</span>
            </p>
            <p className="footer-contact-item">
              <span>(503) 555-0192</span>
            </p>
            <p className="footer-contact-item">
              <span>hello@zenflow.studio</span>
            </p>
            <div className="footer-hours">
              <span>Mon-Fri: 6am - 9pm</span>
              <span>Sat-Sun: 7am - 7pm</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Zenflow Yoga & Wellness. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
