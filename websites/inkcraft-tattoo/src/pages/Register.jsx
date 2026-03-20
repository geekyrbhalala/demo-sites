import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
    ageVerified: false,
    newsletter: true,
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = 'Invalid phone number'
    if (!form.dob) newErrors.dob = 'Date of birth is required'
    else {
      const age = Math.floor((new Date() - new Date(form.dob)) / (365.25 * 24 * 60 * 60 * 1000))
      if (age < 18) newErrors.dob = 'You must be 18 or older'
    }
    if (!form.password) newErrors.password = 'Password is required'
    else if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!form.ageVerified) newErrors.ageVerified = 'You must verify you are 18+'
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
    <div className="register-page">
      <div className="register-split">
        <div className="register-image">
          <img src="https://images.unsplash.com/photo-1598371839696-5c5bb1c12015?w=1200" alt="Studio interior" />
          <div className="register-image-overlay"></div>
          <div className="register-image-text">
            <h2>JOIN<br />THE<br />CRAFT</h2>
          </div>
        </div>

        <div className="register-form-side">
          <div className="register-form-container">
            <Link to="/" className="register-logo">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <path d="M50 5 L62 42 L56 42 L56 85 L44 85 L44 42 L38 42 Z" fill="var(--burnt-orange)"/>
                <path d="M44 80 L50 92 L56 80" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5"/>
                <circle cx="50" cy="38" r="3" fill="var(--off-white)"/>
              </svg>
              <span>INKCRAFT</span>
            </Link>

            <h1 className="register-heading">JOIN THE INKCRAFT COMMUNITY</h1>
            <p className="register-desc">Create your account to book sessions, track appointments, and access exclusive content.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => updateForm('fullName', e.target.value)}
                  placeholder="Your full name"
                  className={errors.fullName ? 'error' : form.fullName ? 'valid' : ''}
                />
                {errors.fullName && <p className="error-message">{errors.fullName}</p>}
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  placeholder="your@email.com"
                  className={errors.email ? 'error' : form.email ? 'valid' : ''}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="register-form-row">
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    className={errors.phone ? 'error' : form.phone ? 'valid' : ''}
                  />
                  {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => updateForm('dob', e.target.value)}
                    className={errors.dob ? 'error' : form.dob ? 'valid' : ''}
                  />
                  {errors.dob && <p className="error-message">{errors.dob}</p>}
                </div>
              </div>

              <div className="register-form-row">
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) => updateForm('password', e.target.value)}
                    placeholder="Min. 8 characters"
                    className={errors.password ? 'error' : form.password ? 'valid' : ''}
                  />
                  {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => updateForm('confirmPassword', e.target.value)}
                    placeholder="Repeat password"
                    className={errors.confirmPassword ? 'error' : form.confirmPassword ? 'valid' : ''}
                  />
                  {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="register-checkboxes">
                <label className={`checkbox-label ${errors.ageVerified ? 'checkbox-error' : ''}`}>
                  <input
                    type="checkbox"
                    checked={form.ageVerified}
                    onChange={(e) => updateForm('ageVerified', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  I confirm that I am 18 years or older *
                </label>
                {errors.ageVerified && <p className="error-message">{errors.ageVerified}</p>}

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={(e) => updateForm('newsletter', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Subscribe to newsletter for flash sales, new artists, and studio events
                </label>
              </div>

              <button type="submit" className="btn-primary register-submit">Create Account</button>
            </form>

            <p className="register-login-link">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="WELCOME TO THE CRAFT">
        <div className="modal-success-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p>Welcome, <strong>{form.fullName}</strong>! Your Inkcraft account has been created.</p>
        <p>Check your email at <strong>{form.email}</strong> to verify your account and start booking sessions.</p>
        {form.newsletter && <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>You&apos;re signed up for our newsletter. Get ready for exclusive content and flash sale announcements.</p>}
      </Modal>
    </div>
  )
}

export default Register
