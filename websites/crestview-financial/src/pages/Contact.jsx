import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : ''
      case 'phone':
        return value && !/^[\d\s\-\+\(\)]{7,}$/.test(value) ? 'Please enter a valid phone number' : ''
      case 'service':
        return !value ? 'Please select a service' : ''
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const getFieldClass = (name) => {
    if (!touched[name]) return 'form-input'
    return errors[name] ? 'form-input error' : 'form-input valid'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    setErrors(newErrors)
    setTouched({ name: true, email: true, phone: true, service: true, message: true })

    if (Object.keys(newErrors).length === 0) {
      setShowModal(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setTouched({})
      setErrors({})
    }
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <ScrollReveal>
            <span className="contact-hero-badge">Get In Touch</span>
            <h1>Let's Discuss Your Financial Goals</h1>
            <p className="contact-hero-desc">
              Schedule a complimentary consultation with one of our advisors. Whether you are
              buying a home, planning for retirement, or growing your business, we are here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal>
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-desc">
                  Fill out the form below and one of our advisors will reach out within 24 hours.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getFieldClass('name')}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass('email')}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(212) 555-0100"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass('phone')}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getFieldClass('service').replace('form-input', 'form-select')}
                    >
                      <option value="">Select a service...</option>
                      <option value="residential-mortgage">Residential Mortgage</option>
                      <option value="commercial-mortgage">Commercial Mortgage</option>
                      <option value="refinancing">Refinancing</option>
                      <option value="financial-planning">Financial Planning</option>
                      <option value="insurance">Insurance Advisory</option>
                      <option value="tax-services">Tax Services</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.service && <span className="form-error">{errors.service}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your situation and goals..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getFieldClass('message').replace('form-input', 'form-textarea')}
                      rows="5"
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Send Inquiry
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="contact-sidebar">
              <ScrollReveal direction="right" delay={100}>
                <div className="contact-info-card">
                  <h3>Book a Consultation</h3>
                  <p>
                    Prefer to speak directly? Call us or visit our office for a face-to-face
                    meeting with one of our senior advisors.
                  </p>
                  <a href="tel:+12125550180" className="btn btn-navy" style={{ width: '100%' }}>
                    Call (212) 555-0180
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="contact-info-card">
                  <h3>Office Location</h3>
                  <div className="contact-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                      <span>250 Financial District Blvd</span>
                      <span>Suite 1200</span>
                      <span>New York, NY 10005</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="contact-info-card">
                  <h3>Business Hours</h3>
                  <div className="contact-hours">
                    <div className="hours-row">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={400}>
                <div className="contact-info-card">
                  <h3>Other Ways to Reach Us</h3>
                  <div className="contact-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>info@crestviewfinancial.com</span>
                  </div>
                  <div className="contact-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                    </svg>
                    <span>Live chat available during business hours</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="contact-compliance">
        <div className="container">
          <p>
            Crestview Financial Advisors is a registered mortgage brokerage (NMLS #123456) and SEC-registered
            investment advisor. All investment advice is provided by properly licensed representatives.
            Insurance products are offered through licensed agents. Past performance does not guarantee
            future results. All loans subject to credit approval. Equal Housing Opportunity. For our
            privacy policy and full regulatory disclosures, please visit our compliance page or contact
            our compliance department at compliance@crestviewfinancial.com.
          </p>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Message Sent Successfully">
        <p>
          Thank you for reaching out to Crestview Financial. One of our advisors will review
          your inquiry and contact you within 24 business hours. We look forward to helping you
          achieve your financial goals.
        </p>
      </Modal>
    </div>
  )
}

export default Contact
