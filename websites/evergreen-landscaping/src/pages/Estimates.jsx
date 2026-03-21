import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Estimates.css'

function Estimates() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '',
    propertyType: '', services: [], propertySize: '',
    timeline: '', budget: '', description: ''
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const serviceOptions = [
    'Lawn Maintenance', 'Garden Design', 'Hardscaping',
    'Tree Service', 'Irrigation', 'Seasonal Cleanup',
    'Snow Removal', 'Outdoor Lighting'
  ]

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.propertyType) errs.propertyType = 'Please select property type'
    if (form.services.length === 0) errs.services = 'Select at least one service'
    if (!form.timeline) errs.timeline = 'Please select a timeline'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', address: '', propertyType: '', services: [], propertySize: '', timeline: '', budget: '', description: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const toggleService = (service) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
    if (errors.services) setErrors(prev => ({ ...prev, services: '' }))
  }

  return (
    <div className="estimates-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920" alt="Get an estimate" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Free Consultation</span>
          <h1>Get Your Free Estimate</h1>
          <p>Tell us about your project and we will provide a detailed, no-obligation estimate.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="estimates-layout">
            <ScrollReveal direction="left">
              <div className="estimates-info">
                <h2>How It Works</h2>
                <div className="estimate-steps">
                  <div className="estimate-step">
                    <span className="step-number">1</span>
                    <div>
                      <h4>Submit Your Request</h4>
                      <p>Fill out the form with your project details and preferences.</p>
                    </div>
                  </div>
                  <div className="estimate-step">
                    <span className="step-number">2</span>
                    <div>
                      <h4>On-Site Consultation</h4>
                      <p>Our expert visits your property to assess scope and discuss your vision.</p>
                    </div>
                  </div>
                  <div className="estimate-step">
                    <span className="step-number">3</span>
                    <div>
                      <h4>Detailed Proposal</h4>
                      <p>Receive a comprehensive proposal with pricing, timeline, and design options.</p>
                    </div>
                  </div>
                  <div className="estimate-step">
                    <span className="step-number">4</span>
                    <div>
                      <h4>Project Begins</h4>
                      <p>Approve the plan and our crew starts transforming your outdoor space.</p>
                    </div>
                  </div>
                </div>

                <div className="estimate-contact-box">
                  <h4>Prefer to Call?</h4>
                  <p>Speak directly with our team:</p>
                  <a href="tel:5035558733" className="estimate-phone">(503) 555-TREE</a>
                  <p className="estimate-hours">Mon-Sat: 7am - 6pm</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <form className="estimates-form" onSubmit={handleSubmit}>
                <h3>Project Details</h3>

                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
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
                    <label>Property Address</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Oak Street, Portland" />
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.propertyType ? 'has-error' : ''}`}>
                    <label>Property Type *</label>
                    <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                      <option value="">Select type...</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hoa">HOA / Multi-Unit</option>
                      <option value="municipal">Municipal / Public</option>
                    </select>
                    {errors.propertyType && <span className="error-message">{errors.propertyType}</span>}
                  </div>
                  <div className="form-group">
                    <label>Property Size (approx.)</label>
                    <select name="propertySize" value={form.propertySize} onChange={handleChange}>
                      <option value="">Select size...</option>
                      <option value="small">Under 5,000 sq ft</option>
                      <option value="medium">5,000 - 15,000 sq ft</option>
                      <option value="large">15,000 - 1 acre</option>
                      <option value="xlarge">1+ acres</option>
                    </select>
                  </div>
                </div>

                <div className={`form-group ${errors.services ? 'has-error' : ''}`}>
                  <label>Services Needed *</label>
                  <div className="service-checkboxes">
                    {serviceOptions.map(service => (
                      <label key={service} className={`checkbox-label ${form.services.includes(service) ? 'checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                  {errors.services && <span className="error-message">{errors.services}</span>}
                </div>

                <div className="form-row">
                  <div className={`form-group ${errors.timeline ? 'has-error' : ''}`}>
                    <label>Timeline *</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange}>
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP</option>
                      <option value="month">Within a Month</option>
                      <option value="planning">Just Planning</option>
                    </select>
                    {errors.timeline && <span className="error-message">{errors.timeline}</span>}
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget...</option>
                      <option value="under1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} placeholder="Tell us about your vision, specific needs, or any questions you have..."></textarea>
                </div>

                <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                  Request Free Estimate
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Estimate Requested!"
        message="Thank you! Our team will review your project details and contact you within 24 hours to schedule an on-site consultation."
      />
    </div>
  )
}

export default Estimates
