import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
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
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 L62 42 L56 42 L56 85 L44 85 L44 42 L38 42 Z" fill="var(--burnt-orange)"/>
            <path d="M44 80 L50 92 L56 80" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5"/>
            <circle cx="50" cy="38" r="3" fill="var(--off-white)"/>
          </svg>
          <div className="logo-text">
            <span className="logo-main">INKCRAFT</span>
            <span className="logo-sub">TATTOO STUDIO</span>
          </div>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/artists" className={location.pathname === '/artists' ? 'active' : ''}>Artists</Link>
          <Link to="/piercing" className={location.pathname === '/piercing' ? 'active' : ''}>Piercing</Link>
          <Link to="/aftercare" className={location.pathname === '/aftercare' ? 'active' : ''}>Aftercare</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/booking" className="nav-cta">Book Now</Link>
          <div className="nav-auth-mobile">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/booking" className="nav-cta desktop-only">Book Now</Link>
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
      </div>
    </nav>
  )
}

export default Navbar
