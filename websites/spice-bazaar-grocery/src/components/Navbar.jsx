import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/deals', label: 'Deals' },
    { to: '/recipes', label: 'Recipes' },
    { to: '/about', label: 'About' },
    { to: '/catering', label: 'Catering' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg viewBox="0 0 48 48" className="logo-icon" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 8c0 0-6 4-6 12s6 16 6 16 6-8 6-16S24 8 24 8z" fill="currentColor" opacity="0.3" />
            <path d="M24 12c-2 3-3 6-3 8 0 4 3 10 3 10s3-6 3-10c0-2-1-5-3-8z" fill="currentColor" />
            <circle cx="24" cy="34" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 34h6" stroke="currentColor" strokeWidth="1" />
            <path d="M24 31v6" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">SPICE BAZAAR</span>
            <span className="logo-tagline">GROCERY & SPICES</span>
          </div>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="nav-link nav-login">Login</Link>
        </div>

        <Link to="/products" className="navbar-cta btn btn-primary btn-small">
          Shop Now
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
