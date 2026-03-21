import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

const caseTypes = [
  'Corporate / Business',
  'Real Estate',
  'Family Law',
  'Criminal Defense',
  'Estate Planning',
  'Immigration',
  'Other',
]

const referralSources = [
  'Google Search',
  'Referral from Attorney',
  'Referral from Friend/Family',
  'Social Media',
  'Legal Directory',
  'Advertisement',
  'Other',
]

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
    referralSource: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getPasswordStrength = () => {
    const p = form.password
    if (!p) return { level: 0, text: '', color: '' }
    let score = 0
    if (p.length >= 6) score++
    if (p.length >= 10) score++
    if (/[A-Z]/.test(p)) score++
    if (/[0-9]/.test(p)) score++
    if (/[^A-Za-z0-9]/.test(p)) score++

    if (score <= 1) return { level: 1, text: 'Weak', color: '#c62828' }
    if (score <= 2) return { level: 2, text: 'Fair', color: '#ef6c00' }
    if (score <= 3) return { level: 3, text: 'Good', color: '#2e7d32' }
    return { level: 4, text: 'Strong', color: '#1b5e20' }
  }

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-+()]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.caseType) errs.caseType = 'Please select a case type'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    if (!form.agreeTerms) errs.agreeTerms = 'You must agree to the terms'
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
    setForm({
      firstName: '', lastName: '', email: '', phone: '',
      caseType: '', referralSource: '', password: '', confirmPassword: '',
      agreeTerms: false,
    })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const strength = getPasswordStrength()

  return (
    <main className="register-page">
      <div className="register-bg">
        <div className="register-overlay"></div>
      </div>
      <div className="register-container">
        <div className="register-card">
          <Link to="/" className="register-logo">
            <svg viewBox="0 0 48 48" width="36" height="36">
              <rect x="4" y="38" width="40" height="4" fill="var(--accent)" rx="1" />
              <rect x="8" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <rect x="22" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <rect x="36" y="14" width="4" height="24" fill="var(--ivory)" rx="1" />
              <path d="M2 14 L24 4 L46 14 Z" fill="var(--ivory)" />
              <circle cx="24" cy="10" r="2" fill="var(--accent)" />
            </svg>
          </Link>

          <h1 className="register-title">Create Your Client Portal</h1>
          <p className="register-subtitle">
            Secure access to your case files, documents, and attorney communications.
          </p>

          <form className="register-form" onSubmit={handleSubmit} noValidate>
            <div className="reg-form-row">
              <div className="form-group-float">
                <input
                  type="text" id="firstName" name="firstName"
                  value={form.firstName} onChange={handleChange} placeholder=" "
                  className={errors.firstName ? 'error' : ''}
                />
                <label htmlFor="firstName">First Name *</label>
                {errors.firstName && <span className="form-error">{errors.firstName}</span>}
              </div>
              <div className="form-group-float">
                <input
                  type="text" id="lastName" name="lastName"
                  value={form.lastName} onChange={handleChange} placeholder=" "
                  className={errors.lastName ? 'error' : ''}
                />
                <label htmlFor="lastName">Last Name *</label>
                {errors.lastName && <span className="form-error">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group-float">
              <input
                type="email" id="email" name="email"
                value={form.email} onChange={handleChange} placeholder=" "
                className={errors.email ? 'error' : ''}
              />
              <label htmlFor="email">Email Address *</label>
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group-float">
              <input
                type="tel" id="phone" name="phone"
                value={form.phone} onChange={handleChange} placeholder=" "
                className={errors.phone ? 'error' : ''}
              />
              <label htmlFor="phone">Phone Number</label>
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="reg-form-row">
              <div className="reg-select-group">
                <label>Case Type *</label>
                <select name="caseType" value={form.caseType} onChange={handleChange}
                  className={errors.caseType ? 'error' : ''}>
                  <option value="">Select</option>
                  {caseTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.caseType && <span className="form-error">{errors.caseType}</span>}
              </div>
              <div className="reg-select-group">
                <label>How Did You Hear About Us?</label>
                <select name="referralSource" value={form.referralSource} onChange={handleChange}>
                  <option value="">Select</option>
                  {referralSources.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group-float">
              <input
                type="password" id="password" name="password"
                value={form.password} onChange={handleChange} placeholder=" "
                className={errors.password ? 'error' : ''}
              />
              <label htmlFor="password">Password *</label>
              {errors.password && <span className="form-error">{errors.password}</span>}
              {form.password && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div
                      className="strength-fill"
                      style={{ width: `${strength.level * 25}%`, background: strength.color }}
                    ></div>
                  </div>
                  <span style={{ color: strength.color }}>{strength.text}</span>
                </div>
              )}
            </div>

            <div className="form-group-float">
              <input
                type="password" id="confirmPassword" name="confirmPassword"
                value={form.confirmPassword} onChange={handleChange} placeholder=" "
                className={errors.confirmPassword ? 'error' : ''}
              />
              <label htmlFor="confirmPassword">Confirm Password *</label>
              {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
            </div>

            <div className="register-terms">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={form.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>,
                  and acknowledge the <a href="#">Confidentiality Agreement</a>.
                </span>
              </label>
              {errors.agreeTerms && <span className="form-error">{errors.agreeTerms}</span>}
            </div>

            <div className="register-privilege-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span>
                All information submitted is protected under attorney-client privilege and kept strictly confidential.
              </span>
            </div>

            <button type="submit" className="btn btn-primary register-btn">
              Create Account
            </button>
          </form>

          <p className="register-login">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to Northgate Law"
        message="Your client portal account has been created successfully. You will receive a confirmation email with instructions to activate your account and complete the onboarding process."
      />
    </main>
  )
}
