import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Classes.css'

const classTypes = [
  {
    name: 'Vinyasa Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920',
    description: 'Vinyasa, meaning "to place in a special way," is a dynamic practice that links breath to movement. Each class is a flowing journey through creative sequences, building heat, strength, and awareness. No two classes are ever the same.',
    benefits: ['Builds cardiovascular endurance', 'Increases flexibility and strength', 'Improves mental focus', 'Reduces stress and anxiety', 'Enhances body-mind coordination'],
    forWhom: 'Those who enjoy movement, variety, and a physical challenge. Great for athletes, dancers, and anyone seeking an active meditation.',
    expect: 'Expect continuous movement guided by breath. Classes typically begin with grounding, move through sun salutations, standing sequences, balances, and end with cool-down and savasana.',
    difficulty: 3,
    duration: '60-75 min',
  },
  {
    name: 'Hatha Yoga',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200',
    description: 'The foundation of all yoga styles, Hatha focuses on holding poses with intentional alignment and breath awareness. This traditional practice creates space for deep exploration of each posture, building strength and flexibility from the ground up.',
    benefits: ['Improves posture and alignment', 'Builds core strength', 'Enhances body awareness', 'Calms the nervous system', 'Creates a strong foundation for other styles'],
    forWhom: 'Beginners looking to learn fundamentals, anyone recovering from injury, and practitioners who prefer a slower, more mindful approach.',
    expect: 'Poses held for 30 seconds to 2 minutes with clear alignment instructions. Includes standing, seated, and supine poses with pranayama (breathing) practice.',
    difficulty: 2,
    duration: '60-90 min',
  },
  {
    name: 'Yin & Restorative',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200',
    description: 'A deeply meditative practice where poses are held for extended periods, typically 3-7 minutes. Yin targets the connective tissue — fascia, ligaments, and joints — while Restorative uses props to support the body in complete surrender. Together, they offer profound release.',
    benefits: ['Releases deep fascial tension', 'Improves joint mobility', 'Reduces cortisol levels', 'Enhances parasympathetic response', 'Promotes emotional healing'],
    forWhom: 'Anyone needing to slow down. Athletes seeking recovery, desk workers with tension, and anyone dealing with stress, insomnia, or burnout.',
    expect: 'A quiet, dimly-lit room with soft music. Minimal physical effort — the magic is in the stillness. Bolsters, blankets, and blocks support you throughout.',
    difficulty: 1,
    duration: '75-90 min',
  },
  {
    name: 'Hot Yoga',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1200',
    description: 'Practiced in a room heated to 95-105°F (35-40°C), hot yoga intensifies the physical practice through heat. Our heated classes include both structured sequences and creative flows, allowing muscles to release more deeply while building endurance and detoxifying through sweat.',
    benefits: ['Deep detoxification through sweat', 'Enhanced flexibility from heat', 'Cardiovascular conditioning', 'Mental toughness and resilience', 'Improved circulation'],
    forWhom: 'Those who enjoy intensity and heat. Athletes wanting cross-training benefits. Anyone seeking a challenging, sweat-inducing practice.',
    expect: 'A heated room, lots of sweat, and physical challenge. Bring a large towel and plenty of water. Classes move at a moderate to vigorous pace.',
    difficulty: 4,
    duration: '60-75 min',
  },
  {
    name: 'Meditation & Breathwork',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200',
    description: 'Our meditation and breathwork sessions offer a range of techniques — from mindfulness and loving-kindness to pranayama and sound healing. These practices cultivate inner peace, emotional resilience, and heightened awareness.',
    benefits: ['Reduces anxiety and depression', 'Improves sleep quality', 'Enhances emotional intelligence', 'Increases focus and productivity', 'Lowers blood pressure'],
    forWhom: 'Everyone. Absolute beginners to experienced meditators. Especially beneficial for those with high-stress lifestyles, anxiety, or difficulty sleeping.',
    expect: 'Comfortable seated or lying positions. Guided instruction through various meditation techniques. Sessions may include breathwork, visualization, mantra, or sound healing elements.',
    difficulty: 1,
    duration: '45-60 min',
  },
  {
    name: 'Prenatal Yoga',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200',
    description: 'Specifically designed for expecting mothers at every stage of pregnancy. Our certified prenatal instructors guide you through safe, modified poses that address the unique needs of each trimester while building community among parents-to-be.',
    benefits: ['Reduces pregnancy discomfort', 'Prepares the body for labor', 'Builds community with other parents', 'Reduces stress and promotes sleep', 'Strengthens pelvic floor'],
    forWhom: 'Expecting mothers in any trimester (with doctor clearance). No prior yoga experience needed. Partners welcome in Saturday classes.',
    expect: 'Modified poses safe for pregnancy, pelvic floor exercises, breathing techniques for labor, relaxation, and supported restorative poses. A warm, supportive community.',
    difficulty: 1,
    duration: '60 min',
  },
]

const upcomingWorkshops = [
  { date: 'Mar 28, 2026', title: 'Spring Equinox Flow', instructor: 'Sarah Chen', price: '$45', description: 'Celebrate the vernal equinox with a 2.5-hour immersive flow practice exploring balance and renewal.' },
  { date: 'Apr 5, 2026', title: 'Breathwork & Sound Healing', instructor: 'Priya Sharma', price: '$55', description: 'A powerful combination of pranayama techniques and crystal singing bowl sound bath.' },
  { date: 'Apr 19, 2026', title: 'Arm Balances Workshop', instructor: 'Sarah Chen', price: '$50', description: 'Demystify crow, side crow, and flying pigeon with step-by-step progressions.' },
]

function Classes() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className="classes-page">
      <section className="classes-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Our Classes</h1>
            <p className="classes-hero-accent">every body, every journey</p>
            <p className="classes-hero-desc">From dynamic flows to deep stillness, find the practice that nourishes your unique path.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="class-types-section">
        <div className="container">
          {classTypes.map((cls, i) => (
            <ScrollReveal key={i}>
              <div className={`class-type-card ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="class-type-image-wrap">
                  <img src={cls.image} alt={cls.name} className="class-type-image" />
                  <div className="class-type-blob"></div>
                </div>
                <div className="class-type-content">
                  <h2>{cls.name}</h2>
                  <div className="class-type-meta">
                    <span className="class-type-duration">{cls.duration}</span>
                    <span className="class-type-difficulty">
                      {[1, 2, 3, 4, 5].map(d => (
                        <span key={d} className={`dot-sm ${d <= cls.difficulty ? 'filled' : ''}`}></span>
                      ))}
                    </span>
                  </div>
                  <p className="class-type-desc">{cls.description}</p>
                  <div className="class-type-details">
                    <div className="detail-block">
                      <h4>Benefits</h4>
                      <ul>
                        {cls.benefits.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-block">
                      <h4>Who It&apos;s For</h4>
                      <p>{cls.forWhom}</p>
                    </div>
                    <div className="detail-block">
                      <h4>What to Expect</h4>
                      <p>{cls.expect}</p>
                    </div>
                  </div>
                  <Link to="/schedule" className="btn-primary" style={{ marginTop: '1.5rem' }}>View Schedule</Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="workshops-section-classes">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Upcoming Workshops</h2>
            <p className="section-subtitle">go deeper into your practice</p>
          </ScrollReveal>
          <div className="workshops-grid-classes">
            {upcomingWorkshops.map((w, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="workshop-card-classes">
                  <span className="workshop-date-tag">{w.date}</span>
                  <h3>{w.title}</h3>
                  <p className="workshop-instructor-tag">with {w.instructor}</p>
                  <p className="workshop-desc-tag">{w.description}</p>
                  <div className="workshop-footer-tag">
                    <span className="workshop-price-tag">{w.price}</span>
                    <button className="btn-clay" onClick={() => setShowRegister(true)} style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Register</button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="private-section">
        <div className="container">
          <div className="private-grid">
            <ScrollReveal>
              <div className="private-content">
                <span className="private-accent">One-on-One</span>
                <h2>Private Sessions</h2>
                <p>Work directly with one of our experienced instructors in a personalized session tailored to your goals. Whether you're working with injuries, preparing for a specific event, or wanting to deepen your understanding of a particular aspect of yoga, private sessions offer focused, individualized guidance.</p>
                <ul className="private-features">
                  <li>Customized to your body and goals</li>
                  <li>Available in 60 or 90-minute sessions</li>
                  <li>In-studio or virtual options</li>
                  <li>Packages of 5 or 10 available</li>
                </ul>
                <Link to="/contact" className="btn-primary">Inquire About Private Sessions</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="private-image-wrap">
                <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200" alt="Private yoga session" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="corporate-section">
        <div className="container">
          <ScrollReveal>
            <div className="corporate-card">
              <h2>Corporate Wellness</h2>
              <p className="corporate-accent">bring the practice to your workplace</p>
              <p>Our corporate wellness programs bring the benefits of yoga and meditation to your team. We offer on-site classes, virtual sessions, and customized wellness packages designed to reduce workplace stress, improve productivity, and build team cohesion.</p>
              <div className="corporate-features">
                <div className="corporate-feature">
                  <h4>On-Site Classes</h4>
                  <p>We come to your office with mats and equipment</p>
                </div>
                <div className="corporate-feature">
                  <h4>Virtual Sessions</h4>
                  <p>Live-streamed classes for remote teams</p>
                </div>
                <div className="corporate-feature">
                  <h4>Wellness Retreats</h4>
                  <p>Half-day or full-day team wellness experiences</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">Learn More</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        title="Registration Confirmed!"
        message="You're registered for the workshop! A confirmation email with all the details is on its way."
      />
    </div>
  )
}

export default Classes
