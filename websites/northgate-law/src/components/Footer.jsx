import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg viewBox="0 0 48 48" width="36" height="36">
                <rect x="4" y="38" width="40" height="4" fill="var(--accent)" rx="1" />
                <rect x="8" y="14" width="4" height="24" fill="currentColor" rx="1" />
                <rect x="22" y="14" width="4" height="24" fill="currentColor" rx="1" />
                <rect x="36" y="14" width="4" height="24" fill="currentColor" rx="1" />
                <path d="M2 14 L24 4 L46 14 Z" fill="currentColor" />
                <circle cx="24" cy="10" r="2" fill="var(--accent)" />
              </svg>
              <div className="footer-logo-text">
                <span className="footer-logo-name">NORTHGATE</span>
                <span className="footer-logo-sub">LAW</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Providing exceptional legal counsel with integrity and dedication since 1998.
              Your rights, our commitment.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Practice Areas</h4>
            <Link to="/practice-areas" className="footer-link">Corporate Law</Link>
            <Link to="/practice-areas" className="footer-link">Real Estate</Link>
            <Link to="/practice-areas" className="footer-link">Family Law</Link>
            <Link to="/practice-areas" className="footer-link">Criminal Defense</Link>
            <Link to="/practice-areas" className="footer-link">Estate Planning</Link>
            <Link to="/practice-areas" className="footer-link">Immigration</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/attorneys" className="footer-link">Our Attorneys</Link>
            <Link to="/results" className="footer-link">Case Results</Link>
            <Link to="/resources" className="footer-link">Legal Resources</Link>
            <Link to="/about" className="footer-link">About the Firm</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/login" className="footer-link">Client Portal</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Info</h4>
            <p className="footer-info">
              <strong>Main Office</strong><br />
              450 Justice Avenue, Suite 1200<br />
              New York, NY 10001
            </p>
            <p className="footer-info">
              <strong>Phone:</strong> (212) 555-0190
            </p>
            <p className="footer-info">
              <strong>Email:</strong> info@northgatelaw.com
            </p>
            <p className="footer-info">
              <strong>Hours:</strong><br />
              Mon–Fri: 8:00 AM – 6:00 PM<br />
              Sat: By Appointment
            </p>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            <strong>Legal Disclaimer:</strong> The information on this website is for general informational purposes only.
            Nothing on this site should be taken as legal advice for any individual case or situation.
            This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            Past results do not guarantee future outcomes. Every case is different and must be judged on its own merits.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Northgate Law. All rights reserved.</p>
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
