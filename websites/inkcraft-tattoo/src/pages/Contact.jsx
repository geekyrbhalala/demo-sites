import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format'
    if (form.phone && !/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = 'Invalid phone number'
    if (!form.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setShowModal(true)
      setForm({ name: '', email: '', phone: '', inquiryType: '', message: '' })
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-subtitle">Questions, custom inquiries, or just want to say hello</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-form-wrap">
                <h2>SEND US A MESSAGE</h2>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      placeholder="Your full name"
                      className={errors.name ? 'error' : form.name ? 'valid' : ''}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                  </div>
                  <div className="form-row">
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
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? 'error' : form.phone ? 'valid' : ''}
                      />
                      {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Inquiry Type *</label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => updateForm('inquiryType', e.target.value)}
                      className={errors.inquiryType ? 'error' : form.inquiryType ? 'valid' : ''}
                    >
                      <option value="">Select inquiry type...</option>
                      <option value="general">General Question</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="aftercare">Aftercare Concern</option>
                      <option value="collaboration">Collaboration / Events</option>
                      <option value="feedback">Feedback</option>
                    </select>
                    {errors.inquiryType && <p className="error-message">{errors.inquiryType}</p>}
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      rows="6"
                      value={form.message}
                      onChange={(e) => updateForm('message', e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      className={errors.message ? 'error' : form.message ? 'valid' : ''}
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary contact-submit">Send Message</button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="contact-info-wrap">
                <div className="contact-info-card">
                  <h3>VISIT THE STUDIO</h3>
                  <div className="contact-map-placeholder">
                    <div className="map-placeholder-inner">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <p>742 Industrial Blvd, Suite 108</p>
                      <p>Arts District, Portland OR 97209</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <h3>STUDIO HOURS</h3>
                  <div className="contact-hours">
                    <div className="hours-section">
                      <h4>By Appointment</h4>
                      <div className="hours-row"><span>Monday - Friday</span><span>11:00 AM - 9:00 PM</span></div>
                      <div className="hours-row"><span>Saturday</span><span>10:00 AM - 10:00 PM</span></div>
                      <div className="hours-row"><span>Sunday</span><span>12:00 PM - 7:00 PM</span></div>
                    </div>
                    <div className="hours-section">
                      <h4>Walk-Ins Welcome</h4>
                      <div className="hours-row"><span>Tuesday - Saturday</span><span>12:00 PM - 6:00 PM</span></div>
                      <p className="hours-note">Walk-in availability depends on artist schedules. Call ahead for best results.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <h3>CONNECT</h3>
                  <div className="contact-links">
                    <a href="tel:+15035550142" className="contact-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                      </svg>
                      (503) 555-0142
                    </a>
                    <a href="mailto:hello@inkcraftstudio.com" className="contact-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                      hello@inkcraftstudio.com
                    </a>
                    <a href="#" className="contact-link">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                      @inkcraftstudio
                    </a>
                  </div>
                </div>

                <div className="contact-age-notice">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p>All clients must be 18 years or older. Valid government-issued photo ID required for all services.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="MESSAGE SENT">
        <div className="modal-success-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p>Thank you for reaching out! We typically respond within 24 hours during business days.</p>
        <p>For urgent aftercare concerns, please call us directly at <strong>(503) 555-0142</strong>.</p>
      </Modal>
    </div>
  )
}

export default Contact
