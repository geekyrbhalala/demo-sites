import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', propertyType: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', service: '', propertyType: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920" alt="Contact us" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We would love to hear about your landscaping project. Reach out anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <ScrollReveal direction="left">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>

                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(503) 555-1234" />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label>Service Interest</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option value="lawn">Lawn Maintenance</option>
                      <option value="garden">Garden Design</option>
                      <option value="hardscape">Hardscaping</option>
                      <option value="tree">Tree Service</option>
                      <option value="irrigation">Irrigation</option>
                      <option value="seasonal">Seasonal Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Property Type</label>
                  <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                    <option value="">Select type...</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hoa">HOA / Multi-Unit</option>
                  </select>
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or question..." rows="5"></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="contact-info-panel">
                <div className="contact-info-card">
                  <h3>Office Location</h3>
                  <div className="contact-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <strong>Evergreen Landscaping</strong>
                      <span>247 Oak Grove Road<br/>Portland, OR 97201</span>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    <div>
                      <strong>Phone</strong>
                      <span>(503) 555-TREE (8733)</span>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                    <div>
                      <strong>Email</strong>
                      <span>info@evergreenlandscaping.com</span>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <h3>Service Area</h3>
                  <p>We serve the greater Portland metropolitan area, including:</p>
                  <div className="service-areas">
                    <span>Portland</span>
                    <span>Beaverton</span>
                    <span>Lake Oswego</span>
                    <span>Tigard</span>
                    <span>West Linn</span>
                    <span>Hillsboro</span>
                    <span>Clackamas</span>
                    <span>Milwaukie</span>
                  </div>
                </div>

                <div className="contact-info-card hours-card">
                  <h3>Business Hours</h3>
                  <div className="hours-grid">
                    <div className="hours-row">
                      <span className="hours-day">Mon - Fri</span>
                      <span className="hours-time">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Saturday</span>
                      <span className="hours-time">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Sunday</span>
                      <span className="hours-time">Closed</span>
                    </div>
                  </div>
                  <div className="hours-note">
                    <strong>Winter hours (Nov - Feb):</strong> Mon - Fri 8am - 5pm, Sat 9am - 2pm
                  </div>
                </div>

                <div className="emergency-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <div>
                    <h4>Emergency Tree Service</h4>
                    <p>24/7 storm damage and hazardous tree removal</p>
                    <a href="tel:5035559111" className="emergency-number">(503) 555-9111</a>
                  </div>
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
        message="Thank you for contacting Evergreen Landscaping. We will respond within 1 business day."
      />
    </div>
  )
}

export default Contact
