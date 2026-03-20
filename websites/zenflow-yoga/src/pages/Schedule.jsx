import { useState } from 'react'
import Modal from '../components/Modal'
import ScrollReveal from '../components/ScrollReveal'
import './Schedule.css'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const classColors = {
  Vinyasa: '#3b5340',
  Hatha: '#b8705a',
  Yin: '#9e9585',
  Hot: '#c94c4c',
  Meditation: '#6b7c5e',
  Prenatal: '#c4956a',
}

const scheduleData = {
  Monday: [
    { time: '6:30 AM', end: '7:30 AM', name: 'Morning Vinyasa', instructor: 'Sarah Chen', type: 'Vinyasa', level: 'All Levels', duration: '60 min', spots: 6, description: 'Start your week with energizing flows that build heat and focus. Sun salutations, standing sequences, and mindful transitions.', bring: 'Water bottle, towel. Mats provided.' },
    { time: '9:00 AM', end: '10:15 AM', name: 'Gentle Hatha', instructor: 'Marcus Rivera', type: 'Hatha', level: 'Beginner', duration: '75 min', spots: 10, description: 'A slow-paced class focusing on alignment and breath. Perfect for beginners or anyone seeking a grounding practice.', bring: 'Comfortable clothing. Props provided.' },
    { time: '12:00 PM', end: '12:45 PM', name: 'Lunch Flow', instructor: 'Ava Johansson', type: 'Vinyasa', level: 'Intermediate', duration: '45 min', spots: 4, description: 'A quick but complete practice to refresh your midday. Dynamic sequences designed for experienced practitioners.', bring: 'Water bottle, towel.' },
    { time: '5:30 PM', end: '7:00 PM', name: 'Yin Restore', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 12, description: 'Deep, passive stretches held for 3-5 minutes. Targets connective tissue and calms the nervous system.', bring: 'Warm layers. Bolsters and blankets provided.' },
    { time: '7:30 PM', end: '8:30 PM', name: 'Meditation Circle', instructor: 'Marcus Rivera', type: 'Meditation', level: 'All Levels', duration: '60 min', spots: 15, description: 'Guided meditation exploring different techniques: mindfulness, loving-kindness, body scan, and breath awareness.', bring: 'Cushion optional. Meditation cushions provided.' },
  ],
  Tuesday: [
    { time: '7:00 AM', end: '8:15 AM', name: 'Hot Vinyasa', instructor: 'Ava Johansson', type: 'Hot', level: 'Intermediate', duration: '75 min', spots: 3, description: 'A heated (100°F) vinyasa class that builds strength and flexibility. Expect to sweat and detoxify.', bring: 'Large towel, water bottle, light clothing.' },
    { time: '9:30 AM', end: '10:30 AM', name: 'Prenatal Yoga', instructor: 'Lena Kowalski', type: 'Prenatal', level: 'All Levels', duration: '60 min', spots: 8, description: 'Safe, nurturing practice for all trimesters. Modified poses, breathing techniques, and community support.', bring: 'Water, small towel. All props provided.' },
    { time: '12:15 PM', end: '1:00 PM', name: 'Power Lunch', instructor: 'Sarah Chen', type: 'Vinyasa', level: 'Advanced', duration: '45 min', spots: 5, description: 'Fast-paced power flow with arm balances and inversions. For experienced practitioners seeking a challenge.', bring: 'Water bottle, towel.' },
    { time: '5:00 PM', end: '6:15 PM', name: 'Hatha Fundamentals', instructor: 'Marcus Rivera', type: 'Hatha', level: 'Beginner', duration: '75 min', spots: 11, description: 'Learn the foundational poses with detailed instruction. Build confidence and body awareness.', bring: 'Comfortable clothing. All equipment provided.' },
    { time: '6:30 PM', end: '7:30 PM', name: 'Breathwork & Sound', instructor: 'Priya Sharma', type: 'Meditation', level: 'All Levels', duration: '60 min', spots: 14, description: 'Pranayama techniques paired with crystal singing bowls. A deeply relaxing, transformative experience.', bring: 'Eye mask optional. Blankets provided.' },
  ],
  Wednesday: [
    { time: '6:30 AM', end: '7:30 AM', name: 'Sunrise Vinyasa', instructor: 'Ava Johansson', type: 'Vinyasa', level: 'All Levels', duration: '60 min', spots: 7, description: 'Greet the day with flowing sequences that awaken body and mind. Suitable for all levels.', bring: 'Water bottle.' },
    { time: '9:00 AM', end: '10:30 AM', name: 'Deep Yin', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 13, description: 'Extended holds of 5-7 minutes targeting the hips, spine, and shoulders. Meditative and deeply restorative.', bring: 'Warm clothing. All props provided.' },
    { time: '12:00 PM', end: '12:45 PM', name: 'Express Hatha', instructor: 'Marcus Rivera', type: 'Hatha', level: 'Intermediate', duration: '45 min', spots: 6, description: 'A condensed hatha practice hitting all major muscle groups. Efficient, mindful, complete.', bring: 'Water bottle.' },
    { time: '5:30 PM', end: '6:45 PM', name: 'Hot Power Yoga', instructor: 'Sarah Chen', type: 'Hot', level: 'Advanced', duration: '75 min', spots: 2, description: 'Intense heated flow with challenging sequences. Builds endurance, strength, and mental focus.', bring: 'Large towel, water bottle, light clothing.' },
    { time: '7:15 PM', end: '8:15 PM', name: 'Evening Meditation', instructor: 'Priya Sharma', type: 'Meditation', level: 'All Levels', duration: '60 min', spots: 16, description: 'Wind down with guided visualization and body scan meditation. Perfect transition from day to evening.', bring: 'Comfortable clothing.' },
  ],
  Thursday: [
    { time: '7:00 AM', end: '8:00 AM', name: 'Energize Flow', instructor: 'Sarah Chen', type: 'Vinyasa', level: 'Intermediate', duration: '60 min', spots: 5, description: 'Upbeat vinyasa sequences designed to energize your morning. Creative transitions and peak poses.', bring: 'Water bottle, towel.' },
    { time: '9:30 AM', end: '10:30 AM', name: 'Prenatal Gentle', instructor: 'Lena Kowalski', type: 'Prenatal', level: 'All Levels', duration: '60 min', spots: 9, description: 'Nurturing class for expecting mothers. Gentle stretches, breathing, and relaxation techniques.', bring: 'Water, pillows welcome.' },
    { time: '12:15 PM', end: '1:00 PM', name: 'Lunch Meditation', instructor: 'Marcus Rivera', type: 'Meditation', level: 'All Levels', duration: '45 min', spots: 18, description: 'Reset your afternoon with guided meditation. Perfect for office workers seeking mental clarity.', bring: 'Nothing needed.' },
    { time: '5:00 PM', end: '6:15 PM', name: 'Slow Flow Hatha', instructor: 'Marcus Rivera', type: 'Hatha', level: 'All Levels', duration: '75 min', spots: 8, description: 'Mindful movement with long holds. Focus on alignment, breath coordination, and inner awareness.', bring: 'Comfortable clothing.' },
    { time: '6:30 PM', end: '8:00 PM', name: 'Restorative Yin', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 11, description: 'The ultimate wind-down. Supported poses, aromatherapy, and gentle music for total relaxation.', bring: 'Warm layers, eye mask optional.' },
  ],
  Friday: [
    { time: '6:30 AM', end: '7:30 AM', name: 'TGIF Flow', instructor: 'Ava Johansson', type: 'Vinyasa', level: 'All Levels', duration: '60 min', spots: 8, description: 'Celebrate the end of the week with a joyful, playful flow. Music-driven, community-focused.', bring: 'Water bottle, smile.' },
    { time: '9:00 AM', end: '10:15 AM', name: 'Hatha & Pranayama', instructor: 'Marcus Rivera', type: 'Hatha', level: 'Intermediate', duration: '75 min', spots: 7, description: 'Classical hatha poses combined with breathwork techniques. Builds prana and mental clarity.', bring: 'Light clothing.' },
    { time: '12:00 PM', end: '1:00 PM', name: 'Hot Noon', instructor: 'Sarah Chen', type: 'Hot', level: 'Intermediate', duration: '60 min', spots: 4, description: 'A heated class perfect for lunch break. Modified Bikram-inspired sequence in a warm room.', bring: 'Towel, water bottle.' },
    { time: '4:30 PM', end: '6:00 PM', name: 'Community Yin', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 14, description: 'Begin the weekend by releasing the week. Deep stretches with community sharing circle at the end.', bring: 'Warm clothing, open heart.' },
  ],
  Saturday: [
    { time: '8:00 AM', end: '9:15 AM', name: 'Weekend Vinyasa', instructor: 'Sarah Chen', type: 'Vinyasa', level: 'All Levels', duration: '75 min', spots: 5, description: 'A longer, more explorative vinyasa practice. Weekend vibes, creative sequences, arm balances.', bring: 'Water bottle, towel.' },
    { time: '9:30 AM', end: '10:30 AM', name: 'Beginner Welcome', instructor: 'Marcus Rivera', type: 'Hatha', level: 'Beginner', duration: '60 min', spots: 12, description: 'Designed specifically for new students. Learn basic poses, breathing, and studio etiquette.', bring: 'Comfortable clothing. Everything provided.' },
    { time: '11:00 AM', end: '12:00 PM', name: 'Prenatal Saturday', instructor: 'Lena Kowalski', type: 'Prenatal', level: 'All Levels', duration: '60 min', spots: 7, description: 'Weekend prenatal class with partner exercises (partners welcome). Community and connection.', bring: 'Water, comfortable clothing.' },
    { time: '2:00 PM', end: '3:30 PM', name: 'Deep Stretch Yin', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 10, description: 'Afternoon deep stretching with aromatherapy. Long holds, gentle music, total surrender.', bring: 'Warm layers.' },
  ],
  Sunday: [
    { time: '9:00 AM', end: '10:15 AM', name: 'Sunday Flow', instructor: 'Ava Johansson', type: 'Vinyasa', level: 'All Levels', duration: '75 min', spots: 6, description: 'A mindful, unhurried flow to honor your Sunday. Gratitude-themed, heart-opening sequences.', bring: 'Water bottle.' },
    { time: '10:30 AM', end: '11:30 AM', name: 'Meditation & Chanting', instructor: 'Priya Sharma', type: 'Meditation', level: 'All Levels', duration: '60 min', spots: 20, description: 'Guided meditation followed by optional kirtan (call and response chanting). Deeply centering.', bring: 'Open mind.' },
    { time: '12:00 PM', end: '1:00 PM', name: 'Hot Yoga', instructor: 'Sarah Chen', type: 'Hot', level: 'Intermediate', duration: '60 min', spots: 4, description: 'End the weekend strong with a heated practice. Detoxify, strengthen, and prepare for the week.', bring: 'Towel, water bottle.' },
    { time: '4:00 PM', end: '5:30 PM', name: 'Restore & Renew', instructor: 'Priya Sharma', type: 'Yin', level: 'All Levels', duration: '90 min', spots: 15, description: 'Sunday evening restorative. Fully supported poses, guided relaxation, set intentions for the week.', bring: 'Warm clothing, eye mask.' },
  ],
}

const legend = [
  { type: 'Vinyasa', color: classColors.Vinyasa },
  { type: 'Hatha', color: classColors.Hatha },
  { type: 'Yin', color: classColors.Yin },
  { type: 'Hot', color: classColors.Hot },
  { type: 'Meditation', color: classColors.Meditation },
  { type: 'Prenatal', color: classColors.Prenatal },
]

function Schedule() {
  const [typeFilter, setTypeFilter] = useState('All')
  const [levelFilter, setLevelFilter] = useState('All')
  const [selectedClass, setSelectedClass] = useState(null)
  const [showBooking, setShowBooking] = useState(false)

  const today = new Date().getDay()
  const todayName = days[(today + 6) % 7]

  const types = ['All', 'Vinyasa', 'Hatha', 'Yin', 'Hot', 'Meditation', 'Prenatal']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels']

  const filterClasses = (classes) => {
    return classes.filter(c => {
      const typeMatch = typeFilter === 'All' || c.type === typeFilter
      const levelMatch = levelFilter === 'All' || c.level === levelFilter
      return typeMatch && levelMatch
    })
  }

  const handleBook = () => {
    setSelectedClass(null)
    setShowBooking(true)
  }

  return (
    <div className="schedule-page">
      <section className="schedule-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Class Schedule</h1>
            <p className="schedule-hero-accent">find your perfect practice</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="schedule-filters">
        <div className="container">
          <div className="filters-row">
            <div className="filter-group">
              <label>Class Type</label>
              <div className="filter-buttons">
                {types.map(t => (
                  <button key={t} className={`filter-btn ${typeFilter === t ? 'active' : ''}`} onClick={() => setTypeFilter(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <label>Level</label>
              <div className="filter-buttons">
                {levels.map(l => (
                  <button key={l} className={`filter-btn ${levelFilter === l ? 'active' : ''}`} onClick={() => setLevelFilter(l)}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="schedule-legend">
            {legend.map(l => (
              <div key={l.type} className="legend-item">
                <span className="legend-dot" style={{ background: l.color }}></span>
                <span>{l.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule-calendar">
        <div className="container">
          <div className="calendar-grid">
            {days.map(day => (
              <div key={day} className={`calendar-day ${day === todayName ? 'today' : ''}`}>
                <div className="day-header">
                  <span className="day-name">{day}</span>
                  {day === todayName && <span className="today-badge">Today</span>}
                </div>
                <div className="day-classes">
                  {filterClasses(scheduleData[day] || []).map((cls, i) => (
                    <button
                      key={i}
                      className="class-block"
                      style={{ borderLeftColor: classColors[cls.type] || '#ccc' }}
                      onClick={() => setSelectedClass(cls)}
                    >
                      <span className="class-block-time">{cls.time}</span>
                      <span className="class-block-name">{cls.name}</span>
                      <span className="class-block-instructor">{cls.instructor}</span>
                      <div className="class-block-meta">
                        <span className="class-block-level" style={{ color: classColors[cls.type] }}>{cls.level}</span>
                        <span className="class-block-spots" style={{ color: cls.spots <= 3 ? 'var(--clay)' : 'var(--stone)' }}>{cls.spots} spots</span>
                      </div>
                    </button>
                  ))}
                  {filterClasses(scheduleData[day] || []).length === 0 && (
                    <p className="no-classes">No matching classes</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="toast-overlay" onClick={() => setSelectedClass(null)}>
          <div className="class-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedClass(null)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="class-detail-header" style={{ borderBottomColor: classColors[selectedClass.type] }}>
              <span className="class-detail-type" style={{ background: classColors[selectedClass.type] }}>{selectedClass.type}</span>
              <h3>{selectedClass.name}</h3>
              <p className="class-detail-instructor">with {selectedClass.instructor}</p>
            </div>
            <div className="class-detail-body">
              <div className="class-detail-info">
                <div className="detail-row">
                  <span className="detail-label">Time</span>
                  <span>{selectedClass.time} - {selectedClass.end}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration</span>
                  <span>{selectedClass.duration}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Level</span>
                  <span>{selectedClass.level}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Spots Left</span>
                  <span className={selectedClass.spots <= 3 ? 'spots-warning' : ''}>{selectedClass.spots}</span>
                </div>
              </div>
              <p className="class-detail-desc">{selectedClass.description}</p>
              <div className="class-detail-bring">
                <strong>What to bring:</strong>
                <p>{selectedClass.bring}</p>
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleBook}>Book This Class</button>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        title="Class Booked!"
        message="You're all set! We've reserved your spot. You'll receive a confirmation email shortly. Remember to arrive 10 minutes early."
      />
    </div>
  )
}

export default Schedule
