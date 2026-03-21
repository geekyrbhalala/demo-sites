import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

const practiceOptions = [
  'Corporate Law',
  'Real Estate',
  'Family Law',
  'Criminal Defense',
  'Estate Planning',
  'Immigration',
  'Other',
]

const contactMethods = ['Phone', 'Email', 'Either']
const urgencyLevels = ['Standard', 'Urgent', 'Emergency']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    contactMethod: 'Email',
    urgency: 'Standard',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-+()]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.practiceArea) errs.practiceArea = 'Please select a practice area'
    if (!form.message.trim()) errs.message = 'Please describe your legal matter'
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
    setForm({ name: '', email: '', phone: '', practiceArea: '', contactMethod: 'Email', urgency: 'Standard', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Get in Touch</span>
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-subtitle">
              Schedule a free, confidential consultation with one of our experienced attorneys.
              We are here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container contact-grid">
          {/* Form */}
          <ScrollReveal direction="left">
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Request a Consultation</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and a member of our team will contact you within one business day.
              </p>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(212) 555-0190"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="practiceArea">Practice Area *</label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    value={form.practiceArea}
                    onChange={handleChange}
                    className={errors.practiceArea ? 'error' : ''}
                  >
                    <option value="">Select a practice area</option>
                    {practiceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.practiceArea && <span className="form-error">{errors.practiceArea}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Contact Method</label>
                    <div className="radio-group">
                      {contactMethods.map((m) => (
                        <label key={m} className="radio-label">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={m}
                            checked={form.contactMethod === m}
                            onChange={handleChange}
                          />
                          <span>{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Urgency Level</label>
                    <div className="radio-group">
                      {urgencyLevels.map((u) => (
                        <label key={u} className="radio-label">
                          <input
                            type="radio"
                            name="urgency"
                            value={u}
                            checked={form.urgency === u}
                            onChange={handleChange}
                          />
                          <span>{u}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Describe Your Legal Matter *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Please provide a brief description of your legal situation..."
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <div className="form-confidential">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  <span>All information is kept strictly confidential under attorney-client privilege.</span>
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Main Office</h3>
                <p>450 Justice Avenue, Suite 1200<br />New York, NY 10001</p>
                <p className="contact-phone">(212) 555-0190</p>
                <p>info@northgatelaw.com</p>
              </div>

              <div className="contact-info-card">
                <h3>Hartford Office</h3>
                <p>225 Constitution Plaza, Suite 800<br />Hartford, CT 06103</p>
                <p className="contact-phone">(860) 555-0145</p>
              </div>

              <div className="contact-info-card">
                <h3>Newark Office</h3>
                <p>100 Federal Street, Suite 600<br />Newark, NJ 07102</p>
                <p className="contact-phone">(973) 555-0167</p>
              </div>

              <div className="contact-info-card hours">
                <h3>Office Hours</h3>
                <div className="hours-row">
                  <span>Monday – Friday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>By Appointment</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="contact-emergency">
                <h4>After-Hours Emergency</h4>
                <p>For urgent legal matters outside business hours, call our emergency line:</p>
                <a href="tel:2125559111" className="emergency-phone">(212) 555-9111</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Consultation Request Received"
        message="Thank you for contacting Northgate Law. An attorney from our team will review your inquiry and contact you within one business day. All information you have provided is protected by attorney-client confidentiality."
      />
    </main>
  )
}
