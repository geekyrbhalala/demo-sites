import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L62 42 L56 42 L56 85 L44 85 L44 42 L38 42 Z" fill="var(--burnt-orange)"/>
                <path d="M44 80 L50 92 L56 80" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5"/>
                <circle cx="50" cy="38" r="3" fill="var(--off-white)"/>
              </svg>
              <div>
                <span className="footer-logo-main">INKCRAFT</span>
                <span className="footer-logo-sub">TATTOO STUDIO</span>
              </div>
            </Link>
            <p className="footer-desc">
              Premium tattoo and piercing studio where body art is elevated to fine art.
              Every piece is a collaboration between artist and canvas.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.19z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0c0 2.22-1.79 4-4 4"/><path d="M10 16l-1 4"/><path d="M12 2a10 10 0 1 0 4 19.17"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/artists">Our Artists</Link>
            <Link to="/booking">Book a Session</Link>
            <Link to="/piercing">Piercing</Link>
            <Link to="/aftercare">Aftercare</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <span>Custom Tattoos</span>
            <span>Cover-ups</span>
            <span>Touch-ups</span>
            <span>Body Piercing</span>
            <span>Consultations</span>
            <span>Flash Days</span>
          </div>

          <div className="footer-col">
            <h4>Studio Hours</h4>
            <div className="footer-hours">
              <div><span>Monday - Friday</span><span>11:00 AM - 9:00 PM</span></div>
              <div><span>Saturday</span><span>10:00 AM - 10:00 PM</span></div>
              <div><span>Sunday</span><span>12:00 PM - 7:00 PM</span></div>
            </div>
            <div className="footer-address">
              <p>742 Industrial Blvd, Suite 108</p>
              <p>Arts District, Portland OR 97209</p>
              <p>(503) 555-0142</p>
              <p>hello@inkcraftstudio.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>&copy; 2026 Inkcraft Tattoo Studio. All rights reserved.</p>
            <p className="footer-age-notice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              You must be 18 years or older for tattoo and piercing services. Valid ID required.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
