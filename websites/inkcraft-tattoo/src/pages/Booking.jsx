import { useState } from 'react'
import Modal from '../components/Modal'
import './Booking.css'

const serviceTypes = [
  { id: 'tattoo', label: 'New Tattoo', icon: '&#9998;', desc: 'Custom design, flash, or collaboration' },
  { id: 'piercing', label: 'Piercing', icon: '&#9672;', desc: 'Professional body piercing services' },
  { id: 'touchup', label: 'Touch-Up', icon: '&#8635;', desc: 'Refresh or repair existing work' },
  { id: 'consultation', label: 'Consultation', icon: '&#9993;', desc: 'Free 30-min design discussion' },
]

const styleOptions = ['Geometric', 'Realism', 'Traditional', 'Japanese', 'Blackwork', 'Watercolor', 'Minimalist', 'Neo-Traditional', 'Lettering', 'Cover-up', 'Other']
const placementOptions = ['Upper Arm', 'Lower Arm', 'Full Sleeve', 'Chest', 'Back', 'Ribs', 'Shoulder', 'Leg (Upper)', 'Leg (Lower)', 'Hand', 'Foot', 'Neck', 'Other']

const artistOptions = [
  { name: 'Marcus Chen', specialty: 'Geometric & Blackwork', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800' },
  { name: 'Elena Vasquez', specialty: 'Realism & Watercolor', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800' },
  { name: 'Kai Takahashi', specialty: 'Japanese Traditional', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800' },
  { name: 'Luna Park', specialty: 'Fine Line & Minimalist', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800' },
  { name: 'No Preference', specialty: 'Let us match you', img: '' },
]

function Booking() {
  const [step, setStep] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    serviceType: '',
    style: '',
    placement: '',
    artist: '',
    description: '',
    referenceNote: '',
    name: '',
    email: '',
    phone: '',
    ageConfirmed: false,
    preferredDate1: '',
    preferredDate2: '',
  })

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: '' }))
    }
  }

  const validateStep = (s) => {
    const newErrors = {}
    if (s === 1 && !form.serviceType) newErrors.serviceType = 'Please select a service type'
    if (s === 2) {
      if (!form.style) newErrors.style = 'Please select a style'
      if (!form.placement) newErrors.placement = 'Please select a placement'
    }
    if (s === 3 && !form.artist) newErrors.artist = 'Please select an artist'
    if (s === 5) {
      if (!form.name.trim()) newErrors.name = 'Name is required'
      if (!form.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format'
      if (!form.phone.trim()) newErrors.phone = 'Phone is required'
      else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = 'Invalid phone number'
      if (!form.ageConfirmed) newErrors.ageConfirmed = 'You must confirm you are 18+'
      if (!form.preferredDate1) newErrors.preferredDate1 = 'Select at least one preferred date'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 5))
    }
  }

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = () => {
    if (validateStep(5)) {
      setShowModal(true)
    }
  }

  const steps = ['Service', 'Style', 'Artist', 'Reference', 'Details']

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <h1 className="booking-title">BOOK YOUR SESSION</h1>
          <p className="booking-subtitle">Five steps to your next masterpiece</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="booking-layout">
            {/* Progress Bar */}
            <div className="progress-bar">
              {steps.map((s, i) => (
                <div key={s} className={`progress-step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
                  <div className="progress-dot">
                    {step > i + 1 ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>
                  <span className="progress-label">{s}</span>
                  {i < steps.length - 1 && <div className="progress-line"></div>}
                </div>
              ))}
            </div>

            <div className="booking-form-area">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <div className="booking-step">
                  <h2 className="step-title">WHAT ARE WE DOING?</h2>
                  <p className="step-desc">Select the type of service you need</p>
                  {errors.serviceType && <p className="form-error-msg">{errors.serviceType}</p>}
                  <div className="service-cards">
                    {serviceTypes.map(s => (
                      <button
                        key={s.id}
                        className={`service-card ${form.serviceType === s.id ? 'selected' : ''}`}
                        onClick={() => updateForm('serviceType', s.id)}
                      >
                        <span className="service-icon" dangerouslySetInnerHTML={{ __html: s.icon }}></span>
                        <h3>{s.label}</h3>
                        <p>{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Style & Placement */}
              {step === 2 && (
                <div className="booking-step">
                  <h2 className="step-title">STYLE & PLACEMENT</h2>
                  <p className="step-desc">Tell us about your vision</p>
                  <div className="booking-form-grid">
                    <div className="form-group">
                      <label>Style Preference</label>
                      <select
                        value={form.style}
                        onChange={(e) => updateForm('style', e.target.value)}
                        className={errors.style ? 'error' : form.style ? 'valid' : ''}
                      >
                        <option value="">Select a style...</option>
                        {styleOptions.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.style && <p className="error-message">{errors.style}</p>}
                    </div>
                    <div className="form-group">
                      <label>Body Placement</label>
                      <select
                        value={form.placement}
                        onChange={(e) => updateForm('placement', e.target.value)}
                        className={errors.placement ? 'error' : form.placement ? 'valid' : ''}
                      >
                        <option value="">Select placement...</option>
                        {placementOptions.map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.placement && <p className="error-message">{errors.placement}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Select Artist */}
              {step === 3 && (
                <div className="booking-step">
                  <h2 className="step-title">CHOOSE YOUR ARTIST</h2>
                  <p className="step-desc">Who do you want to work with?</p>
                  {errors.artist && <p className="form-error-msg">{errors.artist}</p>}
                  <div className="artist-select-cards">
                    {artistOptions.map(a => (
                      <button
                        key={a.name}
                        className={`artist-select-card ${form.artist === a.name ? 'selected' : ''}`}
                        onClick={() => updateForm('artist', a.name)}
                      >
                        {a.img ? (
                          <img src={a.img} alt={a.name} loading="lazy" />
                        ) : (
                          <div className="artist-placeholder">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                          </div>
                        )}
                        <h3>{a.name}</h3>
                        <span>{a.specialty}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Reference & Description */}
              {step === 4 && (
                <div className="booking-step">
                  <h2 className="step-title">SHARE YOUR VISION</h2>
                  <p className="step-desc">Help your artist understand what you want</p>
                  <div className="reference-zone">
                    <div className="drop-zone">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="1.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <h4>Drop reference images here</h4>
                      <p>or click to browse (PNG, JPG up to 10MB)</p>
                      <span className="drop-note">Reference images help your artist understand your vision. Not required but highly recommended.</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Describe Your Idea</label>
                    <textarea
                      rows="5"
                      value={form.description}
                      onChange={(e) => updateForm('description', e.target.value)}
                      placeholder="Tell us about the design, meaning, size, anything that helps us understand your vision..."
                      className={form.description ? 'valid' : ''}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Reference Notes (optional)</label>
                    <textarea
                      rows="3"
                      value={form.referenceNote}
                      onChange={(e) => updateForm('referenceNote', e.target.value)}
                      placeholder="Links to Pinterest boards, Instagram posts, or other references..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 5: Personal Details */}
              {step === 5 && (
                <div className="booking-step">
                  <h2 className="step-title">YOUR DETAILS</h2>
                  <p className="step-desc">Almost there! Just a few more details.</p>
                  <div className="booking-form-grid">
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
                      <label>Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? 'error' : form.phone ? 'valid' : ''}
                      />
                      {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                      <label>Preferred Date 1 *</label>
                      <input
                        type="date"
                        value={form.preferredDate1}
                        onChange={(e) => updateForm('preferredDate1', e.target.value)}
                        className={errors.preferredDate1 ? 'error' : form.preferredDate1 ? 'valid' : ''}
                      />
                      {errors.preferredDate1 && <p className="error-message">{errors.preferredDate1}</p>}
                    </div>
                    <div className="form-group">
                      <label>Preferred Date 2 (optional)</label>
                      <input
                        type="date"
                        value={form.preferredDate2}
                        onChange={(e) => updateForm('preferredDate2', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group checkbox-group">
                    <label className={`checkbox-label ${errors.ageConfirmed ? 'checkbox-error' : ''}`}>
                      <input
                        type="checkbox"
                        checked={form.ageConfirmed}
                        onChange={(e) => updateForm('ageConfirmed', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      I confirm that I am 18 years or older and will bring valid ID *
                    </label>
                    {errors.ageConfirmed && <p className="error-message">{errors.ageConfirmed}</p>}
                  </div>

                  {/* Summary Panel */}
                  <div className="booking-summary">
                    <h3>BOOKING SUMMARY</h3>
                    <div className="summary-row">
                      <span>Service</span>
                      <span>{form.serviceType || '-'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Style</span>
                      <span>{form.style || '-'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Placement</span>
                      <span>{form.placement || '-'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Artist</span>
                      <span>{form.artist || '-'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Preferred Date</span>
                      <span>{form.preferredDate1 || '-'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="booking-nav">
                {step > 1 && (
                  <button className="btn-outline" onClick={prevStep}>Back</button>
                )}
                <div className="booking-nav-right">
                  {step < 5 ? (
                    <button className="btn-primary" onClick={nextStep}>Continue</button>
                  ) : (
                    <button className="btn-primary" onClick={handleSubmit}>Confirm Booking</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="YOUR SESSION IS BOOKED">
        <div className="modal-success-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p>
          Thank you, <strong>{form.name}</strong>! Your {form.serviceType} session with{' '}
          <strong>{form.artist}</strong> has been requested.
        </p>
        <p>
          We&apos;ll send a confirmation to <strong>{form.email}</strong> within 24 hours.
          A $50 deposit will be required to secure your appointment.
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '1rem' }}>
          Remember to bring valid photo ID to your appointment.
        </p>
      </Modal>
    </div>
  )
}

export default Booking
