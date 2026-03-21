import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Login.css'

function Login() {
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
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ email: '', password: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200" alt="Spices" />
          <div className="login-left-overlay">
            <h2>Welcome to<br />Spice Bazaar</h2>
            <p>Your gateway to authentic Indian flavors</p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-section">
            <Link to="/" className="login-logo">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <circle cx="24" cy="24" r="22" fill="none" stroke="var(--primary)" strokeWidth="2" />
                <path d="M24 8c0 0-6 4-6 12s6 16 6 16 6-8 6-16S24 8 24 8z" fill="var(--primary)" opacity="0.3" />
                <path d="M24 12c-2 3-3 6-3 8 0 4 3 10 3 10s3-6 3-10c0-2-1-5-3-8z" fill="var(--primary)" />
              </svg>
            </Link>

            <h1>Welcome Back</h1>
            <p className="login-subtitle">Sign in to your Spice Bazaar account</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
                {errors.password && <span className="error-msg">{errors.password}</span>}
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="login-forgot">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Sign In
              </button>
            </form>

            <div className="login-divider">
              <span>or continue with</span>
            </div>

            <div className="social-buttons">
              <button className="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button className="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>

            <p className="login-footer">
              Don't have an account? <Link to="/register">Create one</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome Back!"
        message="You've been successfully signed in to your Spice Bazaar account."
      />
    </div>
  )
}

export default Login
