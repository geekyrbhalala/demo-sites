import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Home.css'

const todaysClasses = [
  { time: '7:00 AM', name: 'Morning Vinyasa Flow', instructor: 'Sarah Chen', level: 'All Levels', spots: 6, duration: '60 min' },
  { time: '9:30 AM', name: 'Gentle Hatha', instructor: 'Marcus Rivera', level: 'Beginner', spots: 8, duration: '75 min' },
  { time: '12:00 PM', name: 'Power Lunch Yoga', instructor: 'Ava Johansson', level: 'Intermediate', spots: 3, duration: '45 min' },
  { time: '5:30 PM', name: 'Yin & Restore', instructor: 'Priya Sharma', level: 'All Levels', spots: 10, duration: '90 min' },
]

const classCategories = [
  {
    name: 'Vinyasa Flow',
    description: 'Dynamic, breath-synchronized movement that builds heat, strength, and flexibility through fluid sequences.',
    difficulty: 3,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <path d="M32 8 C28 16, 20 20, 16 32 C12 44, 20 56, 32 56 C44 56, 52 44, 48 32 C44 20, 36 16, 32 8Z" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <path d="M28 28 Q32 20, 36 28 Q40 36, 36 40 Q32 48, 28 40 Q24 36, 28 28Z" fill="var(--moss)" opacity="0.15"/>
      </svg>
    )
  },
  {
    name: 'Hatha Yoga',
    description: 'Traditional practice holding poses with mindful alignment. Perfect for building a strong foundation.',
    difficulty: 2,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <circle cx="32" cy="32" r="22" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <circle cx="32" cy="32" r="12" fill="var(--moss)" opacity="0.15"/>
        <circle cx="32" cy="32" r="4" fill="var(--moss)" opacity="0.3"/>
      </svg>
    )
  },
  {
    name: 'Yin & Restorative',
    description: 'Deep, passive stretching held for minutes. Releases fascia, calms the nervous system, and restores balance.',
    difficulty: 1,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <path d="M16 40 Q32 16, 48 40" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <path d="M12 44 Q32 24, 52 44" fill="var(--moss)" opacity="0.1"/>
        <circle cx="32" cy="28" r="3" fill="var(--moss)" opacity="0.3"/>
      </svg>
    )
  },
  {
    name: 'Hot Yoga',
    description: 'Practiced in a heated room (95-105F) for deeper stretching, detoxification, and intense cardiovascular work.',
    difficulty: 4,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <path d="M24 48 C24 36, 20 28, 28 16 M32 48 C32 36, 28 28, 36 16 M40 48 C40 36, 36 28, 44 16" fill="none" stroke="var(--moss)" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="32" cy="52" rx="14" ry="4" fill="var(--moss)" opacity="0.15"/>
      </svg>
    )
  },
  {
    name: 'Meditation & Breathwork',
    description: 'Guided meditation and pranayama techniques to cultivate inner peace, focus, and emotional resilience.',
    difficulty: 1,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <circle cx="32" cy="24" r="8" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <path d="M24 36 C16 40, 12 48, 20 52 L32 56 L44 52 C52 48, 48 40, 40 36" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <circle cx="32" cy="24" r="3" fill="var(--moss)" opacity="0.2"/>
      </svg>
    )
  },
  {
    name: 'Prenatal Yoga',
    description: 'Gentle, supportive practice designed for expecting mothers. Safe modifications for every trimester.',
    difficulty: 1,
    icon: (
      <svg viewBox="0 0 64 64" className="class-icon">
        <circle cx="32" cy="16" r="6" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <path d="M26 24 C24 30, 24 38, 28 44 Q32 50, 36 44 C40 38, 40 30, 38 24" fill="none" stroke="var(--moss)" strokeWidth="2"/>
        <ellipse cx="32" cy="36" rx="5" ry="6" fill="var(--moss)" opacity="0.15"/>
      </svg>
    )
  },
]

const instructors = [
  {
    name: 'Sarah Chen',
    specialty: 'Vinyasa & Power Flow',
    quote: '"Movement is medicine for the soul"',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
  },
  {
    name: 'Marcus Rivera',
    specialty: 'Hatha & Meditation',
    quote: '"Stillness is where transformation begins"',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
  },
  {
    name: 'Priya Sharma',
    specialty: 'Yin & Restorative',
    quote: '"Surrender to what is, let go of what was"',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
  },
]

const pricingPlans = [
  { name: 'Drop-In', price: '22', period: 'per class', features: ['Single class access', 'All class types', 'Mat rental included'] },
  { name: 'Monthly Unlimited', price: '139', period: 'per month', features: ['Unlimited classes', '10% workshop discount', 'Guest pass monthly', 'Priority booking'], popular: true },
  { name: 'Annual Membership', price: '1,188', period: 'per year', features: ['Unlimited classes', '20% workshop discount', 'Free guest passes', 'Priority booking', 'Retail discount'] },
]

const testimonials = [
  { text: 'Zenflow changed my relationship with my body. The instructors create a space where you feel truly seen and supported.', author: 'Jennifer M.', since: 'Member since 2023' },
  { text: 'I came for the yoga, I stayed for the community. This studio feels like a second home.', author: 'David L.', since: 'Member since 2022' },
  { text: 'The attention to detail here is extraordinary. From the curated playlists to the warm tea after class.', author: 'Amara K.', since: 'Member since 2024' },
]

const workshops = [
  { date: 'Mar 28', title: 'Spring Equinox Flow', instructor: 'Sarah Chen', price: '$45', time: '10:00 AM - 12:30 PM' },
  { date: 'Apr 5', title: 'Breathwork & Sound Healing', instructor: 'Priya Sharma', price: '$55', time: '2:00 PM - 4:00 PM' },
]

function Home() {
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setShowNewsletter(true)
    setEmail('')
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-blob hero-blob-1">
          <svg viewBox="0 0 600 600">
            <path d="M300 50 C450 50, 550 150, 550 300 C550 450, 450 550, 300 550 C150 550, 50 450, 50 300 C50 150, 150 50, 300 50Z" fill="var(--moss)" opacity="0.06"/>
          </svg>
        </div>
        <div className="hero-blob hero-blob-2">
          <svg viewBox="0 0 400 400">
            <path d="M200 30 C320 30, 370 130, 370 200 C370 280, 320 370, 200 370 C80 370, 30 280, 30 200 C30 130, 80 30, 200 30Z" fill="var(--clay)" opacity="0.06"/>
          </svg>
        </div>
        <div className="hero-image-container">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920" alt="Yoga class in serene studio" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="hero-accent breathing">breathe, move, be</p>
          <h1 className="hero-title">Find Your Flow</h1>
          <p className="hero-subtitle">A sanctuary for body, mind, and spirit in the heart of Portland</p>
          <div className="hero-cta">
            <Link to="/schedule" className="btn-primary">View Class Schedule</Link>
            <Link to="/register" className="btn-secondary hero-btn-secondary">Start Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Today's Classes */}
      <section className="today-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Today&apos;s Classes</h2>
            <p className="section-subtitle">Step onto the mat today</p>
          </ScrollReveal>
          <div className="today-grid">
            {todaysClasses.map((cls, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="today-card">
                  <div className="today-time">{cls.time}</div>
                  <h3 className="today-name">{cls.name}</h3>
                  <p className="today-instructor">{cls.instructor}</p>
                  <div className="today-meta">
                    <span className="today-level">{cls.level}</span>
                    <span className="today-duration">{cls.duration}</span>
                  </div>
                  <div className="today-spots">
                    <span className={`spots-count ${cls.spots <= 3 ? 'low' : ''}`}>{cls.spots} spots left</span>
                  </div>
                  <Link to="/schedule" className="today-book">Book Now</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <ScrollReveal>
              <div className="philosophy-image-wrap">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200" alt="Meditation in nature" className="philosophy-image" />
                <div className="philosophy-blob"></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="philosophy-content">
                <span className="philosophy-accent">Our Philosophy</span>
                <h2>Where Ancient Wisdom Meets Modern Practice</h2>
                <p>At Zenflow, we believe yoga is more than movement — it's a journey home to yourself. Our studio is designed as a sanctuary where the noise of daily life fades, and you reconnect with what matters most.</p>
                <p>Drawing from the Japanese concept of <em>wabi-sabi</em> — finding beauty in imperfection — and the Scandinavian spirit of <em>hygge</em> — creating warmth and presence — we've created a space that honors both stillness and strength.</p>
                <Link to="/classes" className="btn-secondary">Explore Our Classes</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Class Categories */}
      <section className="categories-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Practice</h2>
            <p className="section-subtitle">Find the practice that speaks to you</p>
          </ScrollReveal>
          <div className="categories-grid">
            {classCategories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="category-card">
                  <div className="category-blob-bg"></div>
                  <div className="category-icon">{cat.icon}</div>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <div className="difficulty-dots">
                    {[1, 2, 3, 4, 5].map(d => (
                      <span key={d} className={`dot ${d <= cat.difficulty ? 'filled' : ''}`}></span>
                    ))}
                    <span className="difficulty-label">
                      {cat.difficulty <= 1 ? 'Gentle' : cat.difficulty <= 2 ? 'Moderate' : cat.difficulty <= 3 ? 'Active' : 'Vigorous'}
                    </span>
                  </div>
                  <Link to="/classes" className="category-link">Learn More</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Spotlights */}
      <section className="instructors-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Meet Your Guides</h2>
            <p className="section-subtitle">Passionate teachers, dedicated practitioners</p>
          </ScrollReveal>
          <div className="instructors-grid">
            {instructors.map((inst, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="instructor-card-home">
                  <div className="instructor-photo-wrap">
                    <img src={inst.image} alt={inst.name} />
                  </div>
                  <h3>{inst.name}</h3>
                  <p className="instructor-specialty">{inst.specialty}</p>
                  <p className="instructor-quote">{inst.quote}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="instructors-cta">
            <Link to="/instructors" className="btn-secondary">Meet All Instructors</Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section-home">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Invest in your wellbeing</p>
          </ScrollReveal>
          <div className="pricing-grid-home">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`pricing-card-home ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price-display">
                    <span className="price-dollar">$</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period.split(' ')[1]}</span>
                  </div>
                  <ul>
                    {plan.features.map((f, fi) => (
                      <li key={fi}>
                        <svg viewBox="0 0 20 20" width="16" height="16">
                          <path d="M5 10 L8 13 L15 6" fill="none" stroke="var(--moss)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                    Choose Plan
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Words from Our Community</h2>
            <p className="section-subtitle">Stories of transformation</p>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="testimonial-card">
                  <span className="testimonial-quote-mark">&ldquo;</span>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <strong>{t.author}</strong>
                    <span>{t.since}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Preview */}
      <section className="workshops-preview">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Upcoming Workshops</h2>
            <p className="section-subtitle">Deepen your practice</p>
          </ScrollReveal>
          <div className="workshops-preview-grid">
            {workshops.map((w, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="workshop-preview-card">
                  <div className="workshop-date-badge">
                    <span className="workshop-date-month">{w.date.split(' ')[0]}</span>
                    <span className="workshop-date-day">{w.date.split(' ')[1]}</span>
                  </div>
                  <div className="workshop-preview-info">
                    <h3>{w.title}</h3>
                    <p className="workshop-preview-instructor">with {w.instructor}</p>
                    <p className="workshop-preview-time">{w.time}</p>
                    <div className="workshop-preview-footer">
                      <span className="workshop-price">{w.price}</span>
                      <Link to="/workshops" className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Details</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="workshops-cta">
            <Link to="/workshops" className="btn-secondary">View All Workshops</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter-card">
              <div className="newsletter-blob"></div>
              <h2>Join Our Community</h2>
              <p className="newsletter-accent">stay connected, stay grounded</p>
              <p>Weekly inspiration, class updates, wellness tips, and exclusive member offers delivered to your inbox.</p>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setEmailError('') }}
                    className={emailError ? 'error' : ''}
                  />
                  {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
              <span className="newsletter-note">We respect your inbox. Unsubscribe anytime.</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        title="Welcome to the Community!"
        message="You've been added to our newsletter. Expect weekly doses of inspiration, class updates, and exclusive wellness tips."
      />
    </div>
  )
}

export default Home
