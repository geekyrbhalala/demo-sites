import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L6 28H14L20 16L26 28H34L20 4Z" fill="var(--white)" />
                <path d="M20 16L14 28H26L20 16Z" fill="var(--gold)" opacity="0.8" />
              </svg>
              <div>
                <span className="footer-logo-name">CRESTVIEW</span>
                <span className="footer-logo-sub">FINANCIAL ADVISORS</span>
              </div>
            </div>
            <p className="footer-desc">
              Trusted mortgage brokerage and financial advisory serving clients across the nation since 2008.
              Your financial future is our priority.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <Link to="/services" className="footer-link">Residential Mortgages</Link>
            <Link to="/services" className="footer-link">Commercial Mortgages</Link>
            <Link to="/services" className="footer-link">Refinancing</Link>
            <Link to="/services" className="footer-link">Financial Planning</Link>
            <Link to="/services" className="footer-link">Insurance Advisory</Link>
            <Link to="/services" className="footer-link">Tax Services</Link>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/about" className="footer-link">Our Team</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/calculator" className="footer-link">Mortgage Calculator</Link>
            <Link to="/login" className="footer-link">Client Portal</Link>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Contact Info</h4>
            <p className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              250 Financial District Blvd<br />Suite 1200, New York, NY 10005
            </p>
            <p className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (212) 555-0180
            </p>
            <p className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@crestviewfinancial.com
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Crestview Financial Advisors. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              Crestview Financial Advisors is a registered mortgage brokerage. NMLS #123456. Licensed in all 50 states.
              All loans are subject to credit approval. Rates and terms are subject to change without notice.
              This is not a commitment to lend. Equal Housing Opportunity.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclosures</a>
              <a href="#">NMLS Consumer Access</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
