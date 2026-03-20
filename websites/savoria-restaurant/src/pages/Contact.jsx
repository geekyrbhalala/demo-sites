import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [focused, setFocused] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) newErrors.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!form.message.trim()) newErrors.message = 'Please enter a message'
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleFocus = (name) => setFocused((prev) => ({ ...prev, [name]: true }))
  const handleBlur = (name) => {
    if (!form[name]) setFocused((prev) => ({ ...prev, [name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setFocused({})
    setErrors({})
  }

  return (
    <div className="page-wrapper contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <div className="gold-line"></div>
          <p className="contact-hero-sub">We would love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal direction="left" className="contact-form-wrap">
              <h2>Send Us a Message</h2>
              <div className="gold-line" style={{ margin: '1rem 0 2rem' }}></div>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`floating-group ${focused.name || form.name ? 'active' : ''} ${errors.name ? 'has-error' : ''}`}>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className={errors.name ? 'error' : ''}
                  />
                  <label htmlFor="contact-name">Your Name</label>
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className={`floating-group ${focused.email || form.email ? 'active' : ''} ${errors.email ? 'has-error' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={errors.email ? 'error' : ''}
                  />
                  <label htmlFor="contact-email">Email Address</label>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className={`floating-group ${focused.phone || form.phone ? 'active' : ''} ${errors.phone ? 'has-error' : ''}`}>
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className={errors.phone ? 'error' : ''}
                  />
                  <label htmlFor="contact-phone">Phone (Optional)</label>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className={`floating-group ${focused.message || form.message ? 'active' : ''} ${errors.message ? 'has-error' : ''}`}>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="5"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  <label htmlFor="contact-message">Your Message</label>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary contact-submit">Send Message</button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right" className="contact-info-wrap">
              {/* Map Image */}
              <div className="contact-map">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800"
                  alt="Location map"
                />
                <div className="map-overlay">
                  <div className="map-pin">
                    <svg viewBox="0 0 24 24" fill="var(--gold)" width="40" height="40">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>142 Rue de la Gastronomie</p>
                    <p>New York, NY 10013</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+12125551234">(212) 555-1234</a></p>
                    <p><a href="tel:+12125551235">(212) 555-1235</a> (Private Dining)</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:hello@savoria.com">hello@savoria.com</a></p>
                    <p><a href="mailto:events@savoria.com">events@savoria.com</a></p>
                  </div>
                </div>
              </div>

              {/* Hours Cards */}
              <div className="hours-cards">
                <div className="hours-card">
                  <h4>Dinner Service</h4>
                  <p>Mon - Thu: 5:00 PM - 10:00 PM</p>
                  <p>Fri - Sat: 5:00 PM - 11:30 PM</p>
                  <p>Sunday: 4:00 PM - 9:00 PM</p>
                </div>
                <div className="hours-card">
                  <h4>Sunday Brunch</h4>
                  <p>11:00 AM - 2:30 PM</p>
                  <p>Reservations recommended</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social-links">
                  <a href="#" className="social-btn">Facebook</a>
                  <a href="#" className="social-btn">Instagram</a>
                  <a href="#" className="social-btn">Twitter</a>
                  <a href="#" className="social-btn">TripAdvisor</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Message Sent!"
      >
        <p>
          Thank you for reaching out to Savoria. We have received your message
          and will respond within 24 hours.
        </p>
      </Modal>
    </div>
  )
}

export default Contact
