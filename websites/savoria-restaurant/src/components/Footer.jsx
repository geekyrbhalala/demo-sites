import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!email) {
      setEmailError('Please enter your email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="footer-logo">
                <svg viewBox="0 0 100 120" width="50" height="60">
                  <circle cx="50" cy="45" r="38" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="50" y="60" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="44" fontWeight="bold">S</text>
                  <text x="50" y="102" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="11" letterSpacing="4">SAVORIA</text>
                </svg>
              </div>
              <p className="footer-desc">
                An exquisite culinary journey where Italian tradition meets French artistry.
                Every dish is a masterpiece, every moment a celebration.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" aria-label="TripAdvisor" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.3 10.125 5.99 5.99 0 005.738-4.318 5.99 5.99 0 005.738 4.318 5.997 5.997 0 004.3-10.125L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.263 17.41a4.5 4.5 0 110-8.998 4.5 4.5 0 010 8.998zm11.474 0a4.5 4.5 0 110-8.998 4.5 4.5 0 010 8.998zM6.263 10.91a2.498 2.498 0 100 4.996 2.498 2.498 0 000-4.996zm11.474 0a2.498 2.498 0 100 4.996 2.498 2.498 0 000-4.996z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Hours</h4>
              <div className="footer-hours">
                <div className="hours-row">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:30 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday Brunch</span>
                  <span>11:00 AM - 2:30 PM</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <div className="footer-contact">
                <p>142 Rue de la Gastronomie</p>
                <p>New York, NY 10013</p>
                <p style={{ marginTop: '1rem' }}>
                  <a href="tel:+12125551234">(212) 555-1234</a>
                </p>
                <p>
                  <a href="mailto:hello@savoria.com">hello@savoria.com</a>
                </p>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="newsletter-desc">Subscribe for exclusive events, seasonal menus, and chef's specials.</p>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                    className={emailError ? 'error' : ''}
                  />
                  <button type="submit" aria-label="Subscribe">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                {emailError && <span className="footer-error">{emailError}</span>}
                {subscribed && <span className="footer-success">Thank you for subscribing!</span>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; 2026 Savoria. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <Link to="/admin">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
