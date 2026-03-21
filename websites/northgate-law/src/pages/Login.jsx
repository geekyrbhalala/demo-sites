import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Login.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setShowModal(true)
    setForm({ email: '', password: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <main className="login-page">
      <div className="login-bg">
        <div className="login-overlay"></div>
      </div>
      <div className="login-container">
        <div className="login-card">
          {/* Logo */}
          <Link to="/" className="login-logo">
            <svg viewBox="0 0 48 48" width="40" height="40">
              <rect x="4" y="38" width="40" height="4" fill="var(--accent)" rx="1" />
              <rect x="8" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <rect x="22" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <rect x="36" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <path d="M2 14 L24 4 L46 14 Z" fill="var(--ivory)" />
              <circle cx="24" cy="10" r="2" fill="var(--accent)" />
            </svg>
          </Link>

          <h1 className="login-title">Client Portal</h1>
          <p className="login-subtitle">Sign in to access your case files and documents</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group-float">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className={errors.email ? 'error' : ''}
              />
              <label htmlFor="email">Email Address</label>
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group-float">
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder=" "
                className={errors.password ? 'error' : ''}
              />
              <label htmlFor="password">Password</label>
              {errors.password && <span className="form-error">{errors.password}</span>}
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary login-btn">
              Sign In
            </button>

            <div className="login-2fa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span>Two-factor authentication available for enhanced security</span>
            </div>
          </form>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <div className="login-social">
            <button className="social-btn google">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="social-btn microsoft">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z"/>
                <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                <path fill="#FFB900" d="M13 13h10v10H13z"/>
              </svg>
              Microsoft
            </button>
          </div>

          <p className="login-register">
            Don&apos;t have an account? <Link to="/register">Create one here</Link>
          </p>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome Back"
        message="You have successfully signed in to the Northgate Law Client Portal."
      />
    </main>
  )
}
