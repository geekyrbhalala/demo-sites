import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

function Register() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '',
    propertyType: '', password: '', confirmPassword: '',
    services: [], contactMethod: '', terms: false
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const serviceOptions = ['Lawn Care', 'Garden Design', 'Hardscaping', 'Tree Service', 'Irrigation', 'Seasonal Maintenance']

  const getPasswordStrength = (pass) => {
    let score = 0
    if (pass.length >= 6) score++
    if (pass.length >= 10) score++
    if (/[A-Z]/.test(pass)) score++
    if (/[0-9]/.test(pass)) score++
    if (/[^A-Za-z0-9]/.test(pass)) score++
    return score
  }

  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent']
  const strengthColors = ['', '#e53935', '#FF6D00', '#FFC107', '#8BC34A', '#1B5E20']
  const strength = getPasswordStrength(form.password)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    if (!form.terms) errs.terms = 'You must accept the terms'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ firstName: '', lastName: '', email: '', phone: '', address: '', propertyType: '', password: '', confirmPassword: '', services: [], contactMethod: '', terms: false })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const toggleService = (service) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  return (
    <div className="register-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920" alt="Register" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Get Started</span>
          <h1>Join the Evergreen Family</h1>
          <p>Create your client account to access project tracking, scheduling, and exclusive offers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="register-layout">
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="register-section-title">
                <h3>Personal Information</h3>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.firstName ? 'has-error' : ''}`}>
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className={`form-group ${errors.lastName ? 'has-error' : ''}`}>
                  <label>Last Name *</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(503) 555-1234" />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Property Address</label>
                  <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Oak Street, Portland, OR" />
                </div>
                <div className="form-group">
                  <label>Property Type</label>
                  <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                    <option value="">Select type...</option>
                    <option value="house">Single Family Home</option>
                    <option value="townhouse">Townhouse / Condo</option>
                    <option value="apartment">Apartment Complex</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>
              </div>

              <div className="register-section-title">
                <h3>Service Interests</h3>
              </div>

              <div className="service-interests">
                {serviceOptions.map(service => (
                  <label key={service} className={`interest-chip ${form.services.includes(service) ? 'active' : ''}`}>
                    <input type="checkbox" checked={form.services.includes(service)} onChange={() => toggleService(service)} />
                    {service}
                  </label>
                ))}
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="contact-methods">
                  {['Email', 'Phone', 'Text'].map(method => (
                    <label key={method} className={`method-option ${form.contactMethod === method.toLowerCase() ? 'active' : ''}`}>
                      <input type="radio" name="contactMethod" value={method.toLowerCase()} checked={form.contactMethod === method.toLowerCase()} onChange={handleChange} />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div className="register-section-title">
                <h3>Account Security</h3>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                  <label>Password *</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" />
                  {form.password && (
                    <div className="password-strength">
                      <div className="strength-bars">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="strength-bar" style={{ background: i <= strength ? strengthColors[strength] : '#e0e0e0' }}></div>
                        ))}
                      </div>
                      <span className="strength-label" style={{ color: strengthColors[strength] }}>{strengthLabels[strength]}</span>
                    </div>
                  )}
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
                  <label>Confirm Password *</label>
                  <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter password" />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className={`form-group terms-group ${errors.terms ? 'has-error' : ''}`}>
                <label className="terms-label">
                  <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
                  <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>
                {errors.terms && <span className="error-message">{errors.terms}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Create Account
              </button>

              <p className="register-login-link">
                Already have an account? <Link to="/login">Sign in here</Link>
              </p>
            </form>

            <div className="register-benefits">
              <h3>Member Benefits</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4>Project Dashboard</h4>
                    <p>Track your active projects, view progress photos, and communicate with your crew.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  </div>
                  <div>
                    <h4>Easy Scheduling</h4>
                    <p>Book and manage service appointments online at your convenience.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <div>
                    <h4>Exclusive Offers</h4>
                    <p>Get priority pricing on seasonal packages and early access to promotions.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div>
                    <h4>Digital Invoices</h4>
                    <p>Paperless billing with easy online payment options and invoice history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to Evergreen!"
        message="Your account has been created successfully. Check your email for a confirmation link to get started."
      />
    </div>
  )
}

export default Register
