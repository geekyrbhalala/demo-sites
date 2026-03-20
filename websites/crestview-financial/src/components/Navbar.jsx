import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <svg className="navbar-logo-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L6 28H14L20 16L26 28H34L20 4Z" fill="currentColor" />
            <path d="M20 16L14 28H26L20 16Z" fill="var(--gold)" opacity="0.8" />
          </svg>
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">CRESTVIEW</span>
            <span className="navbar-logo-sub">FINANCIAL ADVISORS</span>
          </div>
        </Link>

        <nav className={`navbar-nav ${isOpen ? 'navbar-nav-open' : ''}`}>
          <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`navbar-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
          <Link to="/calculator" className={`navbar-link ${location.pathname === '/calculator' ? 'active' : ''}`}>Calculator</Link>
          <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/login" className="btn btn-outline btn-sm navbar-cta">Client Portal</Link>
        </nav>

        <button
          className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </header>
  )
}

export default Navbar
