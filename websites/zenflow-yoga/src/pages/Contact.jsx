import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', inquiry: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Valid email is required'
    if (formData.phone && !/^[0-9()+\-\s]{7,}$/.test(formData.phone)) e.phone = 'Please enter a valid phone number'
    if (!formData.inquiry) e.inquiry = 'Please select an inquiry type'
    if (!formData.message.trim()) e.message = 'Message is required'
    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (validate()) {
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', inquiry: '', message: '' })
    }
  }

  const getFieldClass = (field) => {
    if (errors[field]) return 'error'
    if (formData[field]) return 'valid'
    return ''
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Get in Touch</h1>
            <p className="contact-hero-accent">we would love to hear from you</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-form-wrap">
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={getFieldClass('name')}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-row">
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
                  </div>
                  <div className="form-group">
                    <label>Inquiry Type *</label>
                    <select
                      value={formData.inquiry}
                      onChange={e => setFormData({...formData, inquiry: e.target.value})}
                      className={getFieldClass('inquiry')}
                    >
                      <option value="">Select an option...</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Questions</option>
                      <option value="private">Private Session</option>
                      <option value="corporate">Corporate Wellness</option>
                      <option value="collaboration">Collaboration</option>
                    </select>
                    {errors.inquiry && <span className="error-message">{errors.inquiry}</span>}
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className={getFieldClass('message')}
                      placeholder="Tell us how we can help..."
                      rows={5}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>
            </ScrollReveal>

            <div className="contact-info-side">
              <ScrollReveal delay={200}>
                <div className="contact-info-card">
                  <h3>Visit Our Studio</h3>
                  <div className="contact-map-placeholder">
                    <div className="map-inner">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--moss)" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <p>123 Serenity Lane<br/>Portland, OR 97201</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="contact-info-card">
                  <h3>Getting Here</h3>
                  <div className="transport-info">
                    <div className="transport-item">
                      <strong>By Car</strong>
                      <p>Free 2-hour parking in our lot. Additional street parking available on Serenity and Oak.</p>
                    </div>
                    <div className="transport-item">
                      <strong>By Transit</strong>
                      <p>Bus lines 14, 35 stop at Serenity & Main. MAX Blue Line Pearl District station (5 min walk).</p>
                    </div>
                    <div className="transport-item">
                      <strong>By Bike</strong>
                      <p>Covered bike rack at the rear entrance. Biketown station across the street.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="contact-info-card">
                  <h3>Studio Hours</h3>
                  <div className="hours-list">
                    <div className="hours-row">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 9:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span>7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="contact-direct">
                    <p><strong>Phone:</strong> (503) 555-0192</p>
                    <p><strong>Email:</strong> hello@zenflow.studio</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="new-to-yoga">
        <div className="container">
          <ScrollReveal>
            <div className="new-yoga-card">
              <div className="new-yoga-blob"></div>
              <span className="new-yoga-accent">welcome</span>
              <h2>New to Yoga?</h2>
              <p>We remember our first class, too. Walking into a yoga studio for the first time can feel intimidating, but we promise you'll be greeted with warmth and zero judgment. Here's what to know:</p>
              <div className="new-yoga-tips">
                <div className="tip">
                  <h4>Arrive Early</h4>
                  <p>Come 15 minutes before class to sign in, set up, and settle in.</p>
                </div>
                <div className="tip">
                  <h4>Wear Comfort</h4>
                  <p>Stretchy, breathable clothing. No special gear needed — we provide mats.</p>
                </div>
                <div className="tip">
                  <h4>Listen to Your Body</h4>
                  <p>Every pose has modifications. Rest whenever you need to. This is your practice.</p>
                </div>
                <div className="tip">
                  <h4>Stay Hydrated</h4>
                  <p>Bring a water bottle. Avoid heavy meals 2 hours before class.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for reaching out. We typically respond within 24 hours. In the meantime, feel free to explore our class schedule."
      />
    </div>
  )
}

export default Contact
