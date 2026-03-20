import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const getPasswordStrength = (pw) => {
    let score = 0
    if (pw.length >= 6) score++
    if (pw.length >= 10) score++
    if (/[A-Z]/.test(pw)) score++
    if (/[0-9]/.test(pw)) score++
    if (/[^A-Za-z0-9]/.test(pw)) score++
    return score
  }

  const strengthLabel = (score) => {
    if (score === 0) return ''
    if (score <= 1) return 'Weak'
    if (score <= 2) return 'Fair'
    if (score <= 3) return 'Good'
    if (score <= 4) return 'Strong'
    return 'Very Strong'
  }

  const strengthColor = (score) => {
    if (score <= 1) return '#e74c3c'
    if (score <= 2) return '#e67e22'
    if (score <= 3) return '#f1c40f'
    if (score <= 4) return '#27ae60'
    return '#2ecc71'
  }

  const validate = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = 'Please enter your first name'
    if (!form.lastName.trim()) newErrors.lastName = 'Please enter your last name'
    if (!form.email.trim()) newErrors.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!form.password) newErrors.password = 'Please create a password'
    else if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!form.terms) newErrors.terms = 'You must accept the terms and conditions'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setShowModal(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false
    })
    setErrors({})
  }

  const pwStrength = getPasswordStrength(form.password)

  return (
    <div className="page-wrapper register-page">
      <div className="register-container">
        <div className="register-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Restaurant interior"
          />
          <div className="register-image-overlay">
            <div className="register-image-content">
              <svg viewBox="0 0 100 120" width="60" height="72">
                <circle cx="50" cy="45" r="38" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                <text x="50" y="60" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="44" fontWeight="bold">S</text>
                <text x="50" y="102" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="11" letterSpacing="4">SAVORIA</text>
              </svg>
              <h2>Join the Experience</h2>
              <p>Create your Savoria account to unlock exclusive reservations, personalized recommendations, and members-only events.</p>
              <div className="register-perks">
                <div className="perk">
                  <span className="perk-icon">&#9733;</span>
                  <span>Priority reservations</span>
                </div>
                <div className="perk">
                  <span className="perk-icon">&#9733;</span>
                  <span>Exclusive tasting events</span>
                </div>
                <div className="perk">
                  <span className="perk-icon">&#9733;</span>
                  <span>Birthday special menus</span>
                </div>
                <div className="perk">
                  <span className="perk-icon">&#9733;</span>
                  <span>Seasonal menu previews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="register-form-panel">
          <div className="register-form-inner">
            <h1>Create Account</h1>
            <p className="register-subtitle">Join the Savoria family</p>
            <div className="gold-line" style={{ margin: '1.5rem 0 2rem' }}></div>

            <form className="register-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reg-first">First Name</label>
                  <input
                    id="reg-first"
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="reg-last">Last Name</label>
                  <input
                    id="reg-last"
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reg-email">Email Address</label>
                <input
                  id="reg-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="reg-phone">Phone (Optional)</label>
                <input
                  id="reg-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(212) 555-1234"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="reg-password">Password</label>
                <div className="password-wrap">
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}

                {form.password && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div
                        className="strength-fill"
                        style={{
                          width: `${(pwStrength / 5) * 100}%`,
                          background: strengthColor(pwStrength)
                        }}
                      ></div>
                    </div>
                    <span className="strength-label" style={{ color: strengthColor(pwStrength) }}>
                      {strengthLabel(pwStrength)}
                    </span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="reg-confirm">Confirm Password</label>
                <div className="password-wrap">
                  <input
                    id="reg-confirm"
                    type={showConfirm ? 'text' : 'password'}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirm(!showConfirm)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <div className="terms-group">
                <label className="terms-label">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                  />
                  <span className="custom-checkbox"></span>
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
                {errors.terms && <span className="error-message">{errors.terms}</span>}
              </div>

              <button type="submit" className="btn-primary register-submit">Create Account</button>
            </form>

            <p className="register-login-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to Savoria!"
      >
        <p>
          Your account has been created successfully. Welcome to the Savoria family.
          Check your email for a confirmation link.
        </p>
        <p style={{ marginTop: '0.8rem', color: 'var(--gold)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          Your culinary journey begins now.
        </p>
      </Modal>
    </div>
  )
}

export default Register
