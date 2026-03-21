import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
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

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg viewBox="0 0 48 48" className="logo-icon" aria-hidden="true">
            <path d="M24 4c-3 4-10 14-10 22a10 10 0 0020 0C34 18 27 8 24 4z" fill="#1B5E20" opacity="0.9"/>
            <path d="M24 8c-2 3-7 10-7 16a7 7 0 0014 0c0-6-5-13-7-16z" fill="#8BC34A" opacity="0.7"/>
            <path d="M23.5 14v20M20 20c2 2 5 2 7 0M19 26c2.5 2 7.5 2 10 0" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M24 34v10" stroke="#795548" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20 44h8" stroke="#795548" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="logo-text">
            <span className="logo-name">EVERGREEN</span>
            <span className="logo-sub">LANDSCAPING</span>
          </div>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
          <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link>
          <Link to="/seasonal" className={isActive('/seasonal') ? 'active' : ''}>Seasonal</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          <Link to="/estimates" className="btn btn-accent navbar-cta">Free Estimate</Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
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
