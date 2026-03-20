import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Reservations.css'

function Reservations() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    requests: ''
  })
  const [errors, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false)

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ]

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) newErrors.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email'
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number'
    else if (!/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!form.date) newErrors.date = 'Please select a date'
    if (!form.time) newErrors.time = 'Please select a time'
    if (!form.guests) newErrors.guests = 'Please select party size'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setShowModal(true)
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '', occasion: '', requests: '' })
    setErrors({})
  }

  return (
    <div className="page-wrapper reservations-page">
      {/* Hero */}
      <section className="res-hero">
        <div className="res-hero-overlay"></div>
        <div className="res-hero-content">
          <span className="section-label">Reserve</span>
          <h1>Book Your Table</h1>
          <div className="gold-line"></div>
          <p className="res-hero-sub">Secure your evening at Savoria</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="res-section section-padding">
        <div className="container">
          <div className="res-grid">
            {/* Image Panel */}
            <ScrollReveal direction="left" className="res-image-panel">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
                alt="Restaurant interior"
              />
              <div className="res-image-info">
                <h3>An Evening to Remember</h3>
                <p>
                  Join us for an unforgettable dining experience. For parties
                  larger than 8, or for private dining inquiries, please call
                  us directly at <strong>(212) 555-1234</strong>.
                </p>
                <div className="res-hours">
                  <div className="res-hour-row">
                    <span>Mon - Thu</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="res-hour-row">
                    <span>Fri - Sat</span>
                    <span>5:00 PM - 11:30 PM</span>
                  </div>
                  <div className="res-hour-row">
                    <span>Sunday</span>
                    <span>4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right" className="res-form-panel">
              <form className="res-form" onSubmit={handleSubmit} noValidate>
                <h2>Make a Reservation</h2>
                <div className="gold-line" style={{ margin: '1rem 0 2rem' }}></div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="res-name">Full Name</label>
                    <input
                      id="res-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="res-email">Email</label>
                    <input
                      id="res-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="res-phone">Phone Number</label>
                  <input
                    id="res-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(212) 555-1234"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="res-date">Date</label>
                    <input
                      id="res-date"
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={errors.date ? 'error' : ''}
                    />
                    {errors.date && <span className="error-message">{errors.date}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="res-time">Time</label>
                    <select
                      id="res-time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={errors.time ? 'error' : ''}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <span className="error-message">{errors.time}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="res-guests">Party Size</label>
                    <select
                      id="res-guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={errors.guests ? 'error' : ''}
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                    </select>
                    {errors.guests && <span className="error-message">{errors.guests}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="res-occasion">Occasion (Optional)</label>
                    <select
                      id="res-occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="res-requests">Special Requests</label>
                  <textarea
                    id="res-requests"
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    placeholder="Dietary restrictions, seating preferences, allergies..."
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary res-submit">
                  Confirm Reservation
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Reservation Confirmed!"
      >
        <p>
          Thank you for choosing Savoria. Your table has been reserved
          and a confirmation has been sent to your email.
        </p>
        <p style={{ marginTop: '0.8rem', color: 'var(--gold)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          We look forward to welcoming you.
        </p>
      </Modal>
    </div>
  )
}

export default Reservations
