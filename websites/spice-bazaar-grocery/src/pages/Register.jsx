import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

function Register() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '',
    password: '', confirmPassword: '',
    vegetarian: false, vegan: false, glutenFree: false,
    newsletter: true, terms: false,
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getPasswordStrength = (pw) => {
    let score = 0
    if (pw.length >= 6) score++
    if (pw.length >= 10) score++
    if (/[A-Z]/.test(pw)) score++
    if (/[0-9]/.test(pw)) score++
    if (/[^A-Za-z0-9]/.test(pw)) score++
    if (score <= 1) return { level: 'Weak', cls: 'weak', width: '20%' }
    if (score <= 2) return { level: 'Fair', cls: 'fair', width: '40%' }
    if (score <= 3) return { level: 'Good', cls: 'good', width: '60%' }
    if (score <= 4) return { level: 'Strong', cls: 'strong', width: '80%' }
    return { level: 'Very Strong', cls: 'very-strong', width: '100%' }
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
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
    setForm({
      name: '', email: '', phone: '', address: '',
      password: '', confirmPassword: '',
      vegetarian: false, vegan: false, glutenFree: false,
      newsletter: true, terms: false,
    })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const strength = getPasswordStrength(form.password)

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left">
          <img src="https://images.unsplash.com/photo-1534483509719-8017d63a3b96?w=1200" alt="Indian market" />
          <div className="register-left-overlay">
            <h2>Join the<br />Bazaar Family</h2>
            <p>Sign up for exclusive deals, recipes, and rewards</p>
            <div className="register-perks">
              <div className="perk">
                <span className="perk-icon">🎁</span>
                <span>Welcome discount on first order</span>
              </div>
              <div className="perk">
                <span className="perk-icon">📬</span>
                <span>Weekly deals & new arrivals</span>
              </div>
              <div className="perk">
                <span className="perk-icon">⭐</span>
                <span>Earn Spice Rewards points</span>
              </div>
            </div>
          </div>
        </div>

        <div className="register-right">
          <div className="register-form-section">
            <h1>Create Your Account</h1>
            <p className="register-subtitle">Start your journey with Spice Bazaar</p>

            <form onSubmit={handleSubmit}>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="register-row">
                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" type="text" value={form.address} onChange={handleChange} placeholder="Your address (optional)" />
                </div>
              </div>

              <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                <label htmlFor="password">Password *</label>
                <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" />
                {form.password && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div className={`strength-fill ${strength.cls}`} style={{ width: strength.width }}></div>
                    </div>
                    <span className={`strength-text ${strength.cls}`}>{strength.level}</span>
                  </div>
                )}
                {errors.password && <span className="error-msg">{errors.password}</span>}
              </div>

              <div className={`form-group ${errors.confirmPassword ? 'has-error' : ''}`}>
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter your password" />
                {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
              </div>

              <div className="dietary-section">
                <label className="dietary-label">Dietary Preferences</label>
                <div className="dietary-options">
                  <label className="checkbox-label">
                    <input type="checkbox" name="vegetarian" checked={form.vegetarian} onChange={handleChange} />
                    <span>Vegetarian</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="vegan" checked={form.vegan} onChange={handleChange} />
                    <span>Vegan</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="glutenFree" checked={form.glutenFree} onChange={handleChange} />
                    <span>Gluten-Free</span>
                  </label>
                </div>
              </div>

              <div className="register-checkboxes">
                <label className="checkbox-label">
                  <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                  <span>Send me weekly deals and recipes</span>
                </label>
                <label className={`checkbox-label ${errors.terms ? 'has-error-check' : ''}`}>
                  <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
                  <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> *</span>
                </label>
                {errors.terms && <span className="error-msg">{errors.terms}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Create Account
              </button>
            </form>

            <p className="register-footer">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to the Family!"
        message="Your Spice Bazaar account has been created. Check your email for a special welcome discount!"
      />
    </div>
  )
}

export default Register
