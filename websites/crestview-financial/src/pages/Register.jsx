import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

function Register() {
  const [accountType, setAccountType] = useState('personal')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreePrivacy: false
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return value.trim().length < 2 ? 'First name is required' : ''
      case 'lastName':
        return value.trim().length < 2 ? 'Last name is required' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : ''
      case 'phone':
        return !/^[\d\s\-\+\(\)]{7,}$/.test(value) ? 'Please enter a valid phone number' : ''
      case 'companyName':
        return accountType === 'business' && value.trim().length < 2 ? 'Company name is required for business accounts' : ''
      case 'password':
        if (value.length < 8) return 'Password must be at least 8 characters'
        if (!/[A-Z]/.test(value)) return 'Must include an uppercase letter'
        if (!/[0-9]/.test(value)) return 'Must include a number'
        return ''
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : ''
      case 'agreeTerms':
        return !value ? 'You must accept the terms of service' : ''
      case 'agreePrivacy':
        return !value ? 'You must accept the privacy policy' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setFormData(prev => ({ ...prev, [name]: val }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, val) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, val) }))
  }

  const getFieldClass = (name) => {
    if (!touched[name]) return 'form-input'
    return errors[name] ? 'form-input error' : 'form-input valid'
  }

  const getPasswordStrength = () => {
    const pw = formData.password
    if (!pw) return { level: 0, label: '', color: '' }
    let score = 0
    if (pw.length >= 8) score++
    if (pw.length >= 12) score++
    if (/[A-Z]/.test(pw)) score++
    if (/[0-9]/.test(pw)) score++
    if (/[^A-Za-z0-9]/.test(pw)) score++

    if (score <= 2) return { level: 1, label: 'Weak', color: 'var(--error)' }
    if (score <= 3) return { level: 2, label: 'Fair', color: 'var(--warning)' }
    if (score <= 4) return { level: 3, label: 'Good', color: 'var(--steel)' }
    return { level: 4, label: 'Strong', color: 'var(--success)' }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    const fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'password', 'confirmPassword', 'agreeTerms', 'agreePrivacy']
    if (accountType === 'business') fieldsToValidate.push('companyName')

    fieldsToValidate.forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    const allTouched = {}
    fieldsToValidate.forEach(k => { allTouched[k] = true })
    setTouched(allTouched)

    if (Object.keys(newErrors).length === 0) {
      setShowModal(true)
    }
  }

  const strength = getPasswordStrength()

  return (
    <div className="register-page">
      <div className="register-split">
        {/* Left Panel */}
        <div className="register-brand-panel">
          <div className="register-brand-content">
            <Link to="/" className="register-logo">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L6 28H14L20 16L26 28H34L20 4Z" fill="var(--white)" />
                <path d="M20 16L14 28H26L20 16Z" fill="var(--gold)" opacity="0.8" />
              </svg>
              <div>
                <span className="register-logo-name">CRESTVIEW</span>
                <span className="register-logo-sub">FINANCIAL ADVISORS</span>
              </div>
            </Link>
            <h2>Begin Your Financial Journey</h2>
            <p className="register-brand-desc">
              Create your client account to access our full suite of financial tools,
              personalized advisory services, and secure document portal.
            </p>
            <div className="register-steps">
              <div className="register-step">
                <div className="register-step-number">1</div>
                <div>
                  <span className="register-step-title">Create Account</span>
                  <span className="register-step-desc">Register with your details</span>
                </div>
              </div>
              <div className="register-step">
                <div className="register-step-number">2</div>
                <div>
                  <span className="register-step-title">Verify Identity</span>
                  <span className="register-step-desc">Complete secure verification</span>
                </div>
              </div>
              <div className="register-step">
                <div className="register-step-number">3</div>
                <div>
                  <span className="register-step-title">Get Started</span>
                  <span className="register-step-desc">Access your personalized dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="register-form-panel">
          <div className="register-form-wrapper">
            <div className="register-form-header">
              <h1>Create Your Account</h1>
              <p>Join over 2,500 clients who trust Crestview</p>
            </div>

            {/* Account Type Toggle */}
            <div className="register-type-toggle">
              <button
                className={`type-toggle-btn ${accountType === 'personal' ? 'active' : ''}`}
                onClick={() => setAccountType('personal')}
                type="button"
              >
                Personal
              </button>
              <button
                className={`type-toggle-btn ${accountType === 'business' ? 'active' : ''}`}
                onClick={() => setAccountType('business')}
                type="button"
              >
                Business
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClass('firstName')}
                  />
                  {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClass('lastName')}
                  />
                  {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-email">Email Address *</label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('email')}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-phone">Phone Number *</label>
                <input
                  id="reg-phone"
                  name="phone"
                  type="tel"
                  placeholder="(212) 555-0100"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('phone')}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              {accountType === 'business' && (
                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">Company Name *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Company Inc."
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getFieldClass('companyName')}
                  />
                  {errors.companyName && <span className="form-error">{errors.companyName}</span>}
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="reg-password">Password *</label>
                <div className="login-password-wrap">
                  <input
                    id="reg-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
                {formData.password && (
                  <div className="password-strength">
                    <div className="password-strength-bar">
                      {[1,2,3,4].map(i => (
                        <div
                          key={i}
                          className="password-strength-segment"
                          style={{
                            background: i <= strength.level ? strength.color : 'var(--medium-gray)'
                          }}
                        />
                      ))}
                    </div>
                    <span className="password-strength-label" style={{ color: strength.color }}>
                      {strength.label}
                    </span>
                  </div>
                )}
                {errors.password && <span className="form-error">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('confirmPassword')}
                />
                {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
              </div>

              {/* Checkboxes */}
              <div className="register-checkboxes">
                <label className="register-checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="register-checkbox-mark" />
                  <span>I agree to the <a href="#">Terms of Service</a> *</span>
                </label>
                {errors.agreeTerms && <span className="form-error">{errors.agreeTerms}</span>}

                <label className="register-checkbox">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="register-checkbox-mark" />
                  <span>I accept the <a href="#">Privacy Policy</a> and consent to data processing *</span>
                </label>
                {errors.agreePrivacy && <span className="form-error">{errors.agreePrivacy}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Create Account
              </button>
            </form>

            <p className="register-signin">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>

            <p className="register-back">
              <Link to="/">Back to Homepage</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Account Created!">
        <p>
          Welcome to Crestview Financial! Your {accountType} account has been created successfully.
          A verification email has been sent to your inbox. Please verify your email to activate
          your account and access the client portal.
        </p>
      </Modal>
    </div>
  )
}

export default Register
