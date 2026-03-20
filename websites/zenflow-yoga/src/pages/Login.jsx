import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email'
    if (!formData.password.trim()) e.password = 'Password is required'
    if (formData.password.trim().length > 0 && formData.password.trim().length < 6) e.password = 'Password must be at least 6 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (validate()) {
      setShowSuccess(true)
      setFormData({ email: '', password: '', remember: false })
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200" alt="Zen studio" className="login-bg-image" />
          <div className="login-left-overlay">
            <div className="login-left-content">
              <p className="login-namaste">namaste</p>
              <h2>Your Practice Awaits</h2>
              <p>Step back into your sanctuary. Your mat, your breath, your journey.</p>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <Link to="/" className="login-logo">
              <svg viewBox="0 0 50 60" width="36" height="44">
                <circle cx="25" cy="10" r="5" fill="none" stroke="var(--moss)" strokeWidth="1.8"/>
                <path d="M25 15 C25 15, 25 22, 25 28 C25 32, 23 36, 18 42 M25 28 C25 32, 27 36, 32 42 M25 22 C22 22, 16 24, 12 22 M25 22 C28 22, 34 24, 38 22" fill="none" stroke="var(--moss)" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M20 42 C18 48, 15 52, 12 56 M30 42 C32 48, 35 52, 38 56" fill="none" stroke="var(--moss)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </Link>
            <h1>Welcome Back to Your Practice</h1>
            <p className="login-subtitle">Sign in to access your account, book classes, and continue your journey.</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={errors.email ? 'error' : formData.email ? 'valid' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className={errors.password ? 'error' : formData.password ? 'valid' : ''}
                  placeholder="Enter your password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="login-options">
                <label className="remember-check">
                  <input
                    type="checkbox"
                    checked={formData.remember}
                    onChange={e => setFormData({...formData, remember: e.target.checked})}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <button type="submit" className="btn-primary login-btn">Sign In</button>
            </form>

            <div className="login-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button className="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="social-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            <p className="login-register-link">
              New to Zenflow? <Link to="/register">Start your free trial</Link>
            </p>

            <p className="login-namaste-bottom">namaste</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Welcome Back!"
        message="You've been signed in successfully. Time to step onto the mat and find your flow."
      />
    </div>
  )
}

export default Login
