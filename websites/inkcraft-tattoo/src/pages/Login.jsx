import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Login.css'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format'
    if (!form.password) newErrors.password = 'Password is required'
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setShowModal(true)
    }
  }

  return (
    <div className="login-page">
      <div className="login-split">
        <div className="login-image">
          <img src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200" alt="Tattoo session" />
          <div className="login-image-overlay"></div>
          <div className="login-image-text">
            <h2>THE ART<br />LIVES HERE</h2>
          </div>
        </div>

        <div className="login-form-side">
          <div className="login-form-container">
            <Link to="/" className="login-logo">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <path d="M50 5 L62 42 L56 42 L56 85 L44 85 L44 42 L38 42 Z" fill="var(--burnt-orange)"/>
                <path d="M44 80 L50 92 L56 80" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5"/>
                <circle cx="50" cy="38" r="3" fill="var(--off-white)"/>
              </svg>
              <span>INKCRAFT</span>
            </Link>

            <h1 className="login-heading">ACCESS YOUR ACCOUNT</h1>
            <p className="login-desc">Welcome back. Sign in to manage your appointments and profile.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  placeholder="your@email.com"
                  className={errors.email ? 'error' : form.email ? 'valid' : ''}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => updateForm('password', e.target.value)}
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : form.password ? 'valid' : ''}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span className="checkmark-small"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn-primary login-submit">Sign In</button>
            </form>

            <div className="login-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            <p className="login-register-link">
              Don&apos;t have an account? <Link to="/register">Join the Craft</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="WELCOME BACK">
        <div className="modal-success-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p>You have been successfully signed in. Redirecting to your dashboard...</p>
      </Modal>
    </div>
  )
}

export default Login
