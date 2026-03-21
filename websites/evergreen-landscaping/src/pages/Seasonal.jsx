import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Seasonal.css'

function Seasonal() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [activeSeason, setActiveSeason] = useState('spring')

  const seasons = {
    spring: {
      icon: '🌱',
      title: 'Spring',
      subtitle: 'Renewal & Growth',
      color: '#8BC34A',
      services: [
        { name: 'Spring Cleanup', desc: 'Remove winter debris, dead branches, and leaves. Prepare beds for new growth.', price: '$150+' },
        { name: 'Lawn Aeration & Overseeding', desc: 'Core aeration to relieve soil compaction, followed by premium seed application.', price: '$200+' },
        { name: 'Mulching & Bed Preparation', desc: 'Fresh mulch application and garden bed prep for spring planting season.', price: '$100+' },
        { name: 'Early Fertilization', desc: 'Custom fertilizer program to jumpstart healthy lawn and plant growth.', price: '$75+' },
        { name: 'Irrigation Startup', desc: 'System inspection, activation, and adjustment for the growing season.', price: '$95' },
      ],
      tips: [
        'Start mowing when grass reaches 3 inches',
        'Apply pre-emergent weed control early',
        'Divide and transplant perennials before active growth',
        'Test soil pH and amend as needed',
      ]
    },
    summer: {
      icon: '☀️',
      title: 'Summer',
      subtitle: 'Maintenance & Enjoyment',
      color: '#FF6D00',
      services: [
        { name: 'Weekly Lawn Care', desc: 'Regular mowing, edging, and trimming to keep your lawn pristine all summer.', price: '$45/visit' },
        { name: 'Irrigation Management', desc: 'Smart watering schedules, system checks, and adjustments for heat waves.', price: '$75/month' },
        { name: 'Pest & Disease Control', desc: 'Monitoring and treatment for common summer pests and lawn diseases.', price: '$125+' },
        { name: 'Hedge & Shrub Trimming', desc: 'Professional shaping and trimming to maintain clean, polished landscapes.', price: '$100+' },
        { name: 'Container Garden Care', desc: 'Maintenance of potted plants, seasonal color rotations, and watering.', price: '$60/visit' },
      ],
      tips: [
        'Water deeply but infrequently — early morning is best',
        'Raise mower height during heat waves',
        'Deadhead flowering plants to encourage blooming',
        'Watch for signs of drought stress in trees',
      ]
    },
    fall: {
      icon: '🍂',
      title: 'Fall',
      subtitle: 'Preparation & Protection',
      color: '#795548',
      services: [
        { name: 'Leaf Removal', desc: 'Complete leaf cleanup and disposal to prevent lawn damage and disease.', price: '$125+' },
        { name: 'Fall Aeration & Seeding', desc: 'Ideal time for overseeding — cool nights and warm soil promote germination.', price: '$200+' },
        { name: 'Winterization', desc: 'Prepare gardens, shrubs, and sensitive plants for cold weather protection.', price: '$175+' },
        { name: 'Irrigation Blowout', desc: 'Compressed air blowout to prevent frozen pipes and system damage.', price: '$85' },
        { name: 'Tree Pruning', desc: 'Dormant season pruning for optimal tree health and structural integrity.', price: '$150+' },
      ],
      tips: [
        'Keep mowing until grass stops growing',
        'Plant spring-blooming bulbs before first frost',
        'Apply fall fertilizer for winter root development',
        'Wrap young trees to prevent sunscald',
      ]
    },
    winter: {
      icon: '❄️',
      title: 'Winter',
      subtitle: 'Planning & Protection',
      color: '#1B5E20',
      services: [
        { name: 'Snow Removal', desc: 'Reliable snow plowing, shoveling, and de-icing for driveways and walkways.', price: '$75/visit' },
        { name: 'Ice Management', desc: 'Salt and sand application for safe walkways and parking areas.', price: '$50/visit' },
        { name: 'Winter Monitoring', desc: 'Regular property checks for storm damage, fallen branches, and hazards.', price: '$45/visit' },
        { name: 'Holiday Lighting', desc: 'Professional installation and removal of holiday lights and decorations.', price: '$300+' },
        { name: 'Design Consultation', desc: 'Plan your spring landscaping project during the quiet winter months.', price: 'Free' },
      ],
      tips: [
        'Avoid walking on frozen lawns',
        'Shake heavy snow off evergreen branches',
        'Plan next year\'s garden projects during winter downtime',
        'Check stored equipment for maintenance needs',
      ]
    }
  }

  const current = seasons[activeSeason]

  return (
    <div className="seasonal-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920" alt="Seasonal services" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Year-Round Care</span>
          <h1>Seasonal Services</h1>
          <p>Expert care for every season to keep your property looking its best all year.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="season-tabs">
              {Object.keys(seasons).map(key => (
                <button
                  key={key}
                  className={`season-tab ${activeSeason === key ? 'active' : ''}`}
                  onClick={() => setActiveSeason(key)}
                  style={activeSeason === key ? { borderColor: seasons[key].color } : {}}
                >
                  <span className="season-tab-icon">{seasons[key].icon}</span>
                  <span className="season-tab-title">{seasons[key].title}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="season-content">
            <div className="season-header">
              <span className="season-icon-lg">{current.icon}</span>
              <div>
                <h2>{current.title}</h2>
                <p className="season-subtitle">{current.subtitle}</p>
              </div>
            </div>

            <div className="season-grid">
              <div className="season-services">
                <h3>Services</h3>
                {current.services.map((service, i) => (
                  <div key={i} className="season-service-card">
                    <div className="season-service-info">
                      <h4>{service.name}</h4>
                      <p>{service.desc}</p>
                    </div>
                    <span className="season-service-price">{service.price}</span>
                  </div>
                ))}
              </div>

              <div className="season-tips">
                <h3>Monthly Tips</h3>
                <div className="tips-card">
                  {current.tips.map((tip, i) => (
                    <div key={i} className="tip-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

                <div className="seasonal-promo">
                  <h4>Seasonal Special</h4>
                  <p>Book a seasonal package and save 15% on bundled services. Contact us for details.</p>
                  <Link to="/estimates" className="btn btn-primary">Get Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Seasonal
