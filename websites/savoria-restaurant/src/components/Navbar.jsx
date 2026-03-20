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
  }, [location])

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg className="logo-svg" viewBox="0 0 100 120" width="45" height="54">
            <defs>
              <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#c9a84c', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e8d48b', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="45" r="38" fill="none" stroke="url(#logo-gold)" strokeWidth="1.5" />
            <text x="50" y="60" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="44" fontWeight="bold">S</text>
            <text x="50" y="102" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="11" letterSpacing="4">SAVORIA</text>
          </svg>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active-link' : ''}>Menu</Link>
          <Link to="/reservations" className={location.pathname === '/reservations' ? 'active-link' : ''}>Reservations</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
          <Link to="/login" className="nav-login-link">Login</Link>
        </div>

        <Link to="/reservations" className="navbar-cta">Reserve</Link>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
