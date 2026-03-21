import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/practice-areas', label: 'Practice Areas' },
    { path: '/attorneys', label: 'Attorneys' },
    { path: '/results', label: 'Results' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 48 48" width="40" height="40">
            <rect x="4" y="38" width="40" height="4" fill="var(--accent)" rx="1" />
            <rect x="8" y="14" width="4" height="24" fill="currentColor" rx="1" />
            <rect x="22" y="14" width="4" height="24" fill="currentColor" rx="1" />
            <rect x="36" y="14" width="4" height="24" fill="currentColor" rx="1" />
            <path d="M2 14 L24 4 L46 14 Z" fill="currentColor" />
            <circle cx="24" cy="10" r="2" fill="var(--accent)" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">NORTHGATE</span>
            <span className="logo-sub">LAW</span>
          </div>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-gold navbar-cta">
            Free Consultation
          </Link>
        </div>

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
