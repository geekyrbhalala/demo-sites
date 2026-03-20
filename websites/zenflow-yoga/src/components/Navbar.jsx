import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 50 60" width="40" height="48">
            <circle cx="25" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M25 15 C25 15, 25 22, 25 28 C25 32, 23 36, 18 42 M25 28 C25 32, 27 36, 32 42 M25 22 C22 22, 16 24, 12 22 M25 22 C28 22, 34 24, 38 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M20 42 C18 48, 15 52, 12 56 M30 42 C32 48, 35 52, 38 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <div className="logo-text">
            <span className="logo-name">ZENFLOW</span>
            <span className="logo-tagline">yoga & wellness</span>
          </div>
        </Link>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>Schedule</Link>
          <Link to="/classes" className={location.pathname === '/classes' ? 'active' : ''}>Classes</Link>
          <Link to="/instructors" className={location.pathname === '/instructors' ? 'active' : ''}>Instructors</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
          <Link to="/workshops" className={location.pathname === '/workshops' ? 'active' : ''}>Workshops</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <div className="navbar-auth-mobile">
            <Link to="/login" className="btn-login-mobile">Log In</Link>
            <Link to="/register" className="btn-register-mobile">Start Free Trial</Link>
          </div>
        </div>

        <div className="navbar-auth">
          <Link to="/login" className="btn-login">Log In</Link>
          <Link to="/register" className="btn-register">Start Free Trial</Link>
        </div>

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
