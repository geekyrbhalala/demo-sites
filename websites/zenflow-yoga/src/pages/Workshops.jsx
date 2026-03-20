import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Workshops.css'

const workshops = [
  {
    date: 'March 28, 2026',
    day: 'Saturday',
    time: '10:00 AM - 12:30 PM',
    title: 'Spring Equinox Flow',
    instructor: 'Sarah Chen',
    description: 'Celebrate the vernal equinox with a 2.5-hour immersive vinyasa flow exploring themes of balance, renewal, and new beginnings. Includes guided meditation, journaling prompts, and herbal tea ceremony.',
    price: '$45',
    capacity: 30,
    registered: 22,
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920',
  },
  {
    date: 'April 5, 2026',
    day: 'Sunday',
    time: '2:00 PM - 4:00 PM',
    title: 'Breathwork & Sound Healing',
    instructor: 'Priya Sharma',
    description: 'A powerful combination of pranayama techniques and crystal singing bowl sound bath. Learn 5 breathwork techniques for stress relief, energy, and deep relaxation. Ends with a 30-minute sound healing journey.',
    price: '$55',
    capacity: 25,
    registered: 18,
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200',
  },
  {
    date: 'April 19, 2026',
    day: 'Saturday',
    time: '1:00 PM - 3:30 PM',
    title: 'Arm Balances Workshop',
    instructor: 'Sarah Chen',
    description: 'Demystify crow, side crow, and flying pigeon with step-by-step progressions. Build the strength, alignment, and confidence to take flight. All levels welcome with modifications provided.',
    price: '$50',
    capacity: 20,
    registered: 15,
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200',
  },
  {
    date: 'May 2-3, 2026',
    day: 'Sat-Sun',
    time: 'All Day',
    title: 'Weekend Wellness Retreat',
    instructor: 'All Instructors',
    description: 'A transformative two-day retreat right in our studio. Includes 6 classes, guided meditation, nutrition workshop, community meals, and journaling sessions. Discover a deeper connection to your practice.',
    price: '$195',
    capacity: 40,
    registered: 28,
    category: 'Retreats',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200',
  },
  {
    date: 'May 16, 2026',
    day: 'Saturday',
    time: '6:00 PM - 9:00 PM',
    title: 'Full Moon Ceremony',
    instructor: 'Priya Sharma',
    description: 'A monthly community gathering honoring the full moon cycle. Includes gentle yoga flow, meditation, intention setting, and community sharing circle. Light refreshments provided.',
    price: '$25',
    capacity: 50,
    registered: 35,
    category: 'Community Events',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1200',
  },
  {
    date: 'June 6, 2026',
    day: 'Saturday',
    time: '9:00 AM - 12:00 PM',
    title: 'Yoga for Athletes',
    instructor: 'Ava Johansson',
    description: 'Targeted yoga practice for runners, cyclists, swimmers, and gym-goers. Learn poses and sequences that prevent injury, enhance recovery, and improve athletic performance.',
    price: '$55',
    capacity: 25,
    registered: 10,
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200',
  },
]

const pastEvents = [
  { title: 'Winter Solstice Gathering', date: 'Dec 2025', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200' },
  { title: 'New Year Intention Setting', date: 'Jan 2026', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200' },
  { title: 'Partner Yoga Valentine', date: 'Feb 2026', image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200' },
]

const categories = ['All', 'Workshops', 'Retreats', 'Community Events']

function Workshops() {
  const [filter, setFilter] = useState('All')
  const [showRegister, setShowRegister] = useState(false)
  const [selectedWorkshop, setSelectedWorkshop] = useState('')

  const filtered = filter === 'All' ? workshops : workshops.filter(w => w.category === filter)

  const handleRegister = (title) => {
    setSelectedWorkshop(title)
    setShowRegister(true)
  }

  return (
    <div className="workshops-page">
      <section className="workshops-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Workshops & Events</h1>
            <p className="workshops-hero-accent">deepen your practice, expand your world</p>
            <p className="workshops-hero-desc">Immersive experiences that go beyond the daily class. Explore new techniques, connect with community, and discover the transformative power of dedicated practice.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="workshops-filter-section">
        <div className="container">
          <div className="workshops-filters">
            {categories.map(c => (
              <button key={c} className={`filter-btn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="workshops-list-section">
        <div className="container">
          <div className="workshops-timeline">
            {filtered.map((w, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="workshop-timeline-card">
                  <div className="workshop-timeline-image">
                    <img src={w.image} alt={w.title} />
                    <span className="workshop-category-tag">{w.category}</span>
                  </div>
                  <div className="workshop-timeline-content">
                    <div className="workshop-timeline-date">
                      <span className="wtd-date">{w.date}</span>
                      <span className="wtd-day">{w.day}</span>
                      <span className="wtd-time">{w.time}</span>
                    </div>
                    <h3>{w.title}</h3>
                    <p className="wtd-instructor">with {w.instructor}</p>
                    <p className="wtd-description">{w.description}</p>
                    <div className="wtd-capacity">
                      <div className="capacity-bar">
                        <div className="capacity-fill" style={{ width: `${(w.registered / w.capacity) * 100}%` }}></div>
                      </div>
                      <span className="capacity-text">{w.registered}/{w.capacity} registered</span>
                    </div>
                    <div className="wtd-footer">
                      <span className="wtd-price">{w.price}</span>
                      <button className="btn-primary" onClick={() => handleRegister(w.title)}>Register</button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="past-events-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Past Events</h2>
            <p className="section-subtitle">memories from our community</p>
          </ScrollReveal>
          <div className="past-events-grid">
            {pastEvents.map((e, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="past-event-card">
                  <img src={e.image} alt={e.title} />
                  <div className="past-event-overlay">
                    <h4>{e.title}</h4>
                    <span>{e.date}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="private-event-section">
        <div className="container">
          <ScrollReveal>
            <div className="private-event-card">
              <h2>Host a Private Event</h2>
              <p className="private-event-accent">your vision, our space</p>
              <p>Our beautiful studio is available for private events — bachelorette yoga parties, corporate retreats, birthday celebrations, or any special gathering. We provide the space, mats, and optional instruction.</p>
              <div className="private-event-features">
                <div className="pef-item">
                  <h4>Studio Rental</h4>
                  <p>From $150/hour</p>
                </div>
                <div className="pef-item">
                  <h4>With Instructor</h4>
                  <p>From $250/hour</p>
                </div>
                <div className="pef-item">
                  <h4>Capacity</h4>
                  <p>Up to 30 guests</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">Inquire About Private Events</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        title="Registration Confirmed!"
        message={`You're registered for "${selectedWorkshop}"! A confirmation email with all details and preparation instructions is on its way.`}
      />
    </div>
  )
}

export default Workshops
