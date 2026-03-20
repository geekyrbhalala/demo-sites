import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : ''
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const getFieldClass = (name) => {
    if (!touched[name]) return 'form-input'
    return errors[name] ? 'form-input error' : 'form-input valid'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    setErrors(newErrors)
    setTouched({ email: true, password: true })

    if (Object.keys(newErrors).length === 0) {
      setShowModal(true)
    }
  }

  return (
    <div className="login-page">
      <div className="login-split">
        {/* Left Panel */}
        <div className="login-brand-panel">
          <div className="login-brand-content">
            <Link to="/" className="login-logo">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L6 28H14L20 16L26 28H34L20 4Z" fill="var(--white)" />
                <path d="M20 16L14 28H26L20 16Z" fill="var(--gold)" opacity="0.8" />
              </svg>
              <div>
                <span className="login-logo-name">CRESTVIEW</span>
                <span className="login-logo-sub">FINANCIAL ADVISORS</span>
              </div>
            </Link>
            <h2>Client Portal</h2>
            <p className="login-brand-tagline">Access Your Portfolio</p>
            <p className="login-brand-desc">
              View your investments, track mortgage applications, access financial reports,
              and communicate securely with your advisor.
            </p>
            <div className="login-features">
              <div className="login-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Real-time portfolio tracking</span>
              </div>
              <div className="login-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Secure document sharing</span>
              </div>
              <div className="login-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Direct advisor messaging</span>
              </div>
              <div className="login-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Monthly performance reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="login-form-panel">
          <div className="login-form-wrapper">
            <div className="login-form-header">
              <h1>Welcome Back</h1>
              <p>Sign in to access your account</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('email')}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                  <a href="#" className="login-forgot">Forgot password?</a>
                </label>
                <div className="login-password-wrap">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClass('password')}
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <span className="form-error">{errors.password}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Sign In
              </button>
            </form>

            <div className="login-2fa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Protected by 2FA</span>
            </div>

            <div className="login-divider">
              <span>New to Crestview?</span>
            </div>

            <Link to="/register" className="btn btn-outline" style={{ width: '100%' }}>
              Create an Account
            </Link>

            <p className="login-back">
              <Link to="/">Back to Homepage</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Login Successful">
        <p>
          Welcome back! You have been securely authenticated. Your dashboard is loading
          with the latest portfolio updates and notifications.
        </p>
      </Modal>
    </div>
  )
}

export default Login
