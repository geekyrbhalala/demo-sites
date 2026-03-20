import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Instructors.css'

const instructors = [
  {
    name: 'Sarah Chen',
    title: 'Lead Vinyasa Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
    certifications: ['E-RYT 500', 'YACEP', 'Ashtanga Certification'],
    style: 'Dynamic and creative, blending traditional sequencing with modern movement science. Sarah is known for her thoughtful playlists and encouraging presence.',
    specialties: ['Vinyasa Flow', 'Power Yoga', 'Arm Balances'],
    years: 12,
    quote: 'Movement is medicine for the soul. Every time you step on the mat, you choose to show up for yourself.',
  },
  {
    name: 'Marcus Rivera',
    title: 'Hatha & Meditation Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
    certifications: ['E-RYT 500', 'Certified Meditation Teacher', 'Yoga Therapy Certificate'],
    style: 'Patient, precise, and deeply grounding. Marcus teaches with clarity and compassion, making complex alignment accessible to all bodies.',
    specialties: ['Hatha Yoga', 'Meditation', 'Yoga Philosophy'],
    years: 15,
    quote: 'Stillness is where transformation begins. The pose begins when you want to leave it.',
  },
  {
    name: 'Priya Sharma',
    title: 'Yin & Restorative Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    certifications: ['RYT 500', 'Yin Yoga Certification', 'Sound Healing Practitioner'],
    style: 'Gentle, intuitive, and deeply nurturing. Priya creates sacred space where vulnerability is welcomed and healing happens naturally.',
    specialties: ['Yin Yoga', 'Restorative', 'Sound Healing', 'Breathwork'],
    years: 10,
    quote: 'Surrender to what is, let go of what was, and have faith in what will be.',
  },
  {
    name: 'Ava Johansson',
    title: 'Hot Yoga & Vinyasa Instructor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800',
    certifications: ['RYT 200', 'Hot Yoga Certified', 'ACE Personal Trainer'],
    style: 'Energetic, motivating, and playful. Ava brings a contagious enthusiasm that pushes students beyond their perceived limits with joy.',
    specialties: ['Hot Yoga', 'Vinyasa Flow', 'Athletic Yoga'],
    years: 7,
    quote: 'Your body is capable of so much more than your mind believes. Trust the process.',
  },
  {
    name: 'Lena Kowalski',
    title: 'Prenatal & Postnatal Specialist',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    certifications: ['RYT 500', 'Pre/Postnatal Yoga Certification', 'Doula Training'],
    style: 'Warm, knowledgeable, and deeply empathetic. Lena combines her yoga expertise with maternal health knowledge to support expecting mothers.',
    specialties: ['Prenatal Yoga', 'Postnatal Recovery', 'Family Yoga'],
    years: 9,
    quote: 'Pregnancy is a journey of profound transformation. Yoga helps you navigate it with grace and strength.',
  },
]

function Instructors() {
  const [showApply, setShowApply] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', experience: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required'
    if (!formData.experience.trim()) newErrors.experience = 'Please share your experience'
    if (!formData.message.trim()) newErrors.message = 'Please write a message'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setShowApply(true)
      setFormData({ name: '', email: '', experience: '', message: '' })
    }
  }

  return (
    <div className="instructors-page">
      <section className="instructors-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Our Instructors</h1>
            <p className="instructors-hero-accent">passionate teachers, dedicated practitioners</p>
            <p className="instructors-hero-desc">Each of our instructors brings a unique perspective, years of dedicated study, and a genuine love for sharing the practice.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="instructors-list">
        <div className="container">
          {instructors.map((inst, i) => (
            <ScrollReveal key={i}>
              <div className={`instructor-full-card ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="instructor-image-section">
                  <div className="instructor-image-wrap-full">
                    <img src={inst.image} alt={inst.name} />
                  </div>
                  <div className="instructor-blob-full"></div>
                </div>
                <div className="instructor-info-section">
                  <div className="instructor-name-row">
                    <h2>{inst.name}</h2>
                    <span className="instructor-title-tag">{inst.title}</span>
                  </div>
                  <div className="instructor-years">
                    <span>{inst.years} years teaching</span>
                  </div>
                  <div className="instructor-certs">
                    {inst.certifications.map((c, ci) => (
                      <span key={ci} className="cert-tag">{c}</span>
                    ))}
                  </div>
                  <div className="instructor-detail-block">
                    <h4>Teaching Style</h4>
                    <p>{inst.style}</p>
                  </div>
                  <div className="instructor-detail-block">
                    <h4>Specialties</h4>
                    <div className="specialty-tags">
                      {inst.specialties.map((s, si) => (
                        <span key={si} className="specialty-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                  <blockquote className="instructor-quote-full">
                    <span className="quote-mark">&ldquo;</span>
                    {inst.quote}
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="join-team-section">
        <div className="container">
          <ScrollReveal>
            <div className="join-team-card">
              <div className="join-team-content">
                <h2>Join Our Teaching Team</h2>
                <p className="join-team-accent">share your passion with our community</p>
                <p>We're always looking for passionate, certified yoga instructors who share our values of authenticity, inclusivity, and continuous growth. If you feel called to teach in a studio that honors both tradition and innovation, we'd love to hear from you.</p>
                <form className="join-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={errors.name ? 'error' : formData.name ? 'valid' : ''}
                      placeholder="Full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className={errors.email ? 'error' : formData.email ? 'valid' : ''}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label>Teaching Experience</label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={e => setFormData({...formData, experience: e.target.value})}
                      className={errors.experience ? 'error' : formData.experience ? 'valid' : ''}
                      placeholder="e.g., RYT 500, 5 years experience"
                    />
                    {errors.experience && <span className="error-message">{errors.experience}</span>}
                  </div>
                  <div className="form-group">
                    <label>Why Zenflow?</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className={errors.message ? 'error' : formData.message ? 'valid' : ''}
                      placeholder="Tell us about yourself and why you'd like to teach at Zenflow..."
                      rows={4}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn-primary">Submit Application</button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showApply}
        onClose={() => setShowApply(false)}
        title="Application Received!"
        message="Thank you for your interest in joining Zenflow. We'll review your application and get back to you within 5 business days. Namaste."
      />
    </div>
  )
}

export default Instructors
