import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import './Register.css'

const interests = ['Vinyasa Flow', 'Hatha Yoga', 'Yin & Restorative', 'Hot Yoga', 'Meditation & Breathwork', 'Workshops & Retreats']

function Register() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    password: '', confirmPassword: '',
    experience: '', health: '', heardAbout: '',
    interests: [],
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.firstName.trim()) e.firstName = 'First name is required'
    if (!formData.lastName.trim()) e.lastName = 'Last name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Valid email is required'
    if (formData.phone && !/^[0-9()+\-\s]{7,}$/.test(formData.phone)) e.phone = 'Please enter a valid phone number'
    if (!formData.password.trim()) e.password = 'Password is required'
    if (formData.password.length < 8) e.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match'
    if (!formData.experience) e.experience = 'Please select your experience level'
    if (!formData.agree) e.agree = 'You must agree to the terms'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (validate()) {
      setShowSuccess(true)
      setFormData({
        firstName: '', lastName: '', email: '', phone: '',
        password: '', confirmPassword: '',
        experience: '', health: '', heardAbout: '',
        interests: [], agree: false,
      })
    }
  }

  const toggleInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const getFieldClass = (field) => {
    if (errors[field]) return 'error'
    if (formData[field]) return 'valid'
    return ''
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-sidebar">
          <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200" alt="Yoga practice" className="register-bg-image" />
          <div className="register-sidebar-overlay">
            <div className="register-sidebar-content">
              <div className="free-week-badge">
                <span className="fwb-accent">Your first week</span>
                <span className="fwb-free">FREE</span>
                <span className="fwb-note">Unlimited classes, no commitment</span>
              </div>
              <h2>Begin Your Journey</h2>
              <p>Join a community of mindful practitioners in Portland's most welcoming yoga studio.</p>
              <ul className="register-perks">
                <li>Unlimited classes for 7 days</li>
                <li>No credit card required</li>
                <li>All class types included</li>
                <li>Mats and props provided</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="register-form-side">
          <div className="register-form-container">
            <Link to="/" className="register-logo">
              <svg viewBox="0 0 50 60" width="32" height="40">
                <circle cx="25" cy="10" r="5" fill="none" stroke="var(--moss)" strokeWidth="1.8"/>
                <path d="M25 15 C25 15, 25 22, 25 28 C25 32, 23 36, 18 42 M25 28 C25 32, 27 36, 32 42 M25 22 C22 22, 16 24, 12 22 M25 22 C28 22, 34 24, 38 22" fill="none" stroke="var(--moss)" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M20 42 C18 48, 15 52, 12 56 M30 42 C32 48, 35 52, 38 56" fill="none" stroke="var(--moss)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span>ZENFLOW</span>
            </Link>

            <h1>Begin Your Journey</h1>
            <p className="register-subtitle">Create your account and start your free week of unlimited yoga.</p>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className={getFieldClass('firstName')}
                    placeholder="First name"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className={getFieldClass('lastName')}
                    placeholder="Last name"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={getFieldClass('email')}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className={getFieldClass('phone')}
                  placeholder="(503) 555-0192"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    className={getFieldClass('password')}
                    placeholder="Min. 8 characters"
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
                    className={getFieldClass('confirmPassword')}
                    placeholder="Confirm password"
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Experience Level *</label>
                <div className="experience-options">
                  {['New to Yoga', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                    <button
                      key={level}
                      type="button"
                      className={`exp-btn ${formData.experience === level ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, experience: level})}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                {errors.experience && <span className="error-message">{errors.experience}</span>}
              </div>

              <div className="form-group">
                <label>Health Considerations <span className="optional">(optional)</span></label>
                <textarea
                  value={formData.health}
                  onChange={e => setFormData({...formData, health: e.target.value})}
                  placeholder="Any injuries, conditions, or considerations our instructors should know about..."
                  rows={3}
                ></textarea>
              </div>

              <div className="form-group">
                <label>How did you hear about us?</label>
                <select
                  value={formData.heardAbout}
                  onChange={e => setFormData({...formData, heardAbout: e.target.value})}
                >
                  <option value="">Select an option...</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google Search</option>
                  <option value="friend">Friend or Family</option>
                  <option value="walkby">Walked By Studio</option>
                  <option value="yelp">Yelp / Reviews</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>I'm interested in: <span className="optional">(select all that apply)</span></label>
                <div className="interest-checkboxes">
                  {interests.map(interest => (
                    <label key={interest} className={`interest-check ${formData.interests.includes(interest) ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                      />
                      <span className="interest-checkmark"></span>
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="agree-check">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={e => setFormData({...formData, agree: e.target.checked})}
                  />
                  <span className="agree-checkmark"></span>
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
                {errors.agree && <span className="error-message">{errors.agree}</span>}
              </div>

              <button type="submit" className="btn-primary register-btn">Create Account & Start Free Week</button>
            </form>

            <p className="register-login-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="toast-overlay" onClick={() => setShowSuccess(false)}>
          <div className="toast-modal register-success-modal" onClick={e => e.stopPropagation()}>
            <div className="lotus-animation">
              <svg viewBox="0 0 120 120" width="80" height="80" className="lotus-svg">
                <path className="lotus-petal lp1" d="M60 20 C50 40, 30 50, 40 70 C50 60, 60 50, 60 20Z" fill="var(--moss)" opacity="0.6"/>
                <path className="lotus-petal lp2" d="M60 20 C70 40, 90 50, 80 70 C70 60, 60 50, 60 20Z" fill="var(--moss)" opacity="0.6"/>
                <path className="lotus-petal lp3" d="M30 50 C40 40, 55 35, 60 50 C50 45, 35 45, 30 50Z" fill="var(--clay)" opacity="0.5"/>
                <path className="lotus-petal lp4" d="M90 50 C80 40, 65 35, 60 50 C70 45, 85 45, 90 50Z" fill="var(--clay)" opacity="0.5"/>
                <ellipse cx="60" cy="75" rx="25" ry="8" fill="var(--moss)" opacity="0.15"/>
                <circle cx="60" cy="45" r="5" fill="var(--clay)" opacity="0.4"/>
              </svg>
            </div>
            <h3>Welcome to Zenflow!</h3>
            <p>Your account has been created and your free week starts now. Check your email for a welcome guide with everything you need for your first class.</p>
            <p className="success-namaste">namaste</p>
            <button onClick={() => setShowSuccess(false)} className="btn-primary">Begin Your Journey</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register
