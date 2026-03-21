import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.subject) errs.subject = 'Please select a subject'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — questions, feedback, or bulk orders</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p className="contact-intro">
                  Whether you have a question about our products, want to place a bulk order,
                  or just want to say hello, we're here for you.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Visit Us</h4>
                      <p>456 Flavor Street<br />Spicetown, CA 90210</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Call Us</h4>
                      <p className="price">(555) 234-5678</p>
                      <p>For phone orders & inquiries</p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4>Email Us</h4>
                      <p className="price">hello@spicebazaar.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-hours">
                  <h4>Store Hours</h4>
                  <div className="hours-grid">
                    <span>Monday - Friday</span>
                    <span className="price">9:00 AM - 9:00 PM</span>
                    <span>Saturday</span>
                    <span className="price">9:00 AM - 9:00 PM</span>
                    <span>Sunday</span>
                    <span className="price">10:00 AM - 7:00 PM</span>
                    <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Thanksgiving</span>
                    <span className="price">10:00 AM - 3:00 PM</span>
                    <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Christmas</span>
                    <span className="price">Closed</span>
                  </div>
                </div>

                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">YouTube</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="contact-form-wrapper">
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                  </div>
                  <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Question</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="catering">Catering</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <span className="error-msg">{errors.subject}</span>}
                  </div>
                  <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." rows="5" />
                    {errors.message && <span className="error-msg">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Message Sent!"
        message="Thank you for reaching out! We'll get back to you within 24 hours."
      />
    </div>
  )
}

export default Contact
