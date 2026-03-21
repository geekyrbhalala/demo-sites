import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Catering.css'

const packages = [
  {
    name: 'Intimate Gathering',
    guests: '10-25 guests',
    price: '25',
    unit: 'per person',
    features: ['Appetizer platter', '2 main courses', '1 dessert', 'Naan & rice', 'Setup & cleanup', 'Basic tableware'],
    popular: false,
  },
  {
    name: 'Celebration Package',
    guests: '25-75 guests',
    price: '35',
    unit: 'per person',
    features: ['3 appetizers', '3 main courses', '2 desserts', 'Assorted breads & rice', 'Live chaat counter', 'Premium tableware', 'Dedicated server'],
    popular: true,
  },
  {
    name: 'Grand Feast',
    guests: '75-200 guests',
    price: '45',
    unit: 'per person',
    features: ['5 appetizers', '4 main courses', '3 desserts', 'Live cooking station', 'Chai bar', 'Premium decor', 'Full service team', 'Custom menu options'],
    popular: false,
  },
]

function Catering() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', date: '',
    guests: '', dietary: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required'
    if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Invalid phone number'
    if (!form.eventType) errs.eventType = 'Please select event type'
    if (!form.date) errs.date = 'Event date is required'
    if (!form.guests) errs.guests = 'Number of guests is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', dietary: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="catering-page">
      <section className="catering-hero">
        <div className="container">
          <h1>Catering Services</h1>
          <p>Authentic Indian cuisine for your special occasions</p>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Catering Packages</h2>
            <p className="section-subtitle">Choose the perfect package for your event</p>
          </ScrollReveal>
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 100}>
                <div className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                  {pkg.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{pkg.name}</h3>
                  <span className="package-guests">{pkg.guests}</span>
                  <div className="package-price">
                    <span className="price package-amount">${pkg.price}</span>
                    <span className="package-unit">{pkg.unit}</span>
                  </div>
                  <ul className="package-features">
                    {pkg.features.map(f => (
                      <li key={f}>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#catering-form" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                    Get a Quote
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Menu Highlights</h2>
            <p className="section-subtitle">A taste of what we can serve at your event</p>
          </ScrollReveal>
          <div className="menu-highlights-grid">
            <ScrollReveal delay={0}>
              <div className="menu-highlight">
                <h4>Appetizers</h4>
                <ul>
                  <li><span>Samosa Platter</span><span className="price">$4/pc</span></li>
                  <li><span>Paneer Tikka</span><span className="price">$12/plate</span></li>
                  <li><span>Aloo Tikki Chaat</span><span className="price">$8/plate</span></li>
                  <li><span>Chicken Seekh Kebab</span><span className="price">$14/plate</span></li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="menu-highlight">
                <h4>Main Courses</h4>
                <ul>
                  <li><span>Butter Chicken</span><span className="price">$16/tray</span></li>
                  <li><span>Palak Paneer</span><span className="price">$14/tray</span></li>
                  <li><span>Lamb Biryani</span><span className="price">$20/tray</span></li>
                  <li><span>Dal Makhani</span><span className="price">$12/tray</span></li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="menu-highlight">
                <h4>Desserts</h4>
                <ul>
                  <li><span>Gulab Jamun</span><span className="price">$3/pc</span></li>
                  <li><span>Kheer (Rice Pudding)</span><span className="price">$8/bowl</span></li>
                  <li><span>Mango Kulfi</span><span className="price">$5/pc</span></li>
                  <li><span>Rasmalai</span><span className="price">$4/pc</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section" id="catering-form">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Request a Quote</h2>
            <p className="section-subtitle">Tell us about your event and we'll create a custom menu</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="catering-form-wrapper">
              <form className="catering-form" onSubmit={handleSubmit}>
                <div className="form-row">
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
                </div>
                <div className="form-row">
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                  </div>
                  <div className={`form-group ${errors.eventType ? 'has-error' : ''}`}>
                    <label htmlFor="eventType">Event Type *</label>
                    <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange}>
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="religious">Religious Ceremony</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <span className="error-msg">{errors.eventType}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className={`form-group ${errors.date ? 'has-error' : ''}`}>
                    <label htmlFor="date">Event Date *</label>
                    <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                    {errors.date && <span className="error-msg">{errors.date}</span>}
                  </div>
                  <div className={`form-group ${errors.guests ? 'has-error' : ''}`}>
                    <label htmlFor="guests">Number of Guests *</label>
                    <input id="guests" name="guests" type="number" value={form.guests} onChange={handleChange} placeholder="Estimated guests" min="1" />
                    {errors.guests && <span className="error-msg">{errors.guests}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="dietary">Dietary Requirements</label>
                  <select id="dietary" name="dietary" value={form.dietary} onChange={handleChange}>
                    <option value="">No specific requirements</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="nut-free">Nut-Free</option>
                    <option value="mixed">Mixed (please specify below)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Any specific dishes, preferences, or special requests..." rows="4" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Inquiry Received!"
        message="Thank you for your catering inquiry! Our team will review your request and get back to you within 24 hours with a custom quote."
      />
    </div>
  )
}

export default Catering
