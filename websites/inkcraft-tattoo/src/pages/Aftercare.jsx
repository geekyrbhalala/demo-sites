import ScrollReveal from '../components/ScrollReveal'
import './Aftercare.css'

const timeline = [
  {
    period: 'Day 1-3',
    title: 'Initial Healing',
    instructions: [
      'Leave the bandage on for 2-4 hours after your session (or as directed by your artist).',
      'Gently wash with lukewarm water and fragrance-free antibacterial soap.',
      'Pat dry with a clean paper towel — never use cloth towels.',
      'Apply a thin layer of unscented moisturizer or aftercare balm.',
      'Expect some oozing, redness, and mild swelling. This is completely normal.',
    ],
  },
  {
    period: 'Week 1',
    title: 'Early Recovery',
    instructions: [
      'Wash your tattoo 2-3 times daily with lukewarm water and mild soap.',
      'Apply a thin layer of moisturizer after each wash.',
      'Avoid submerging in water — no baths, pools, hot tubs, or ocean.',
      'Wear loose, breathable clothing over the tattooed area.',
      'Sleep on clean sheets and avoid sleeping directly on the tattoo.',
    ],
  },
  {
    period: 'Week 2-4',
    title: 'Peeling & Itching',
    instructions: [
      'Your tattoo will begin to peel and flake — this is normal healing.',
      'DO NOT pick, scratch, or peel the flaking skin.',
      'Continue moisturizing 2-3 times daily to relieve itching.',
      'Gently slap (don\'t scratch) if itching becomes intense.',
      'Colors may look dull during this phase — they will brighten as healing completes.',
    ],
  },
  {
    period: 'Month 2-3',
    title: 'Full Recovery',
    instructions: [
      'Outer layers should be fully healed. Deeper layers continue to heal.',
      'Resume normal activities but continue applying sunscreen (SPF 30+).',
      'UV exposure is the #1 enemy of tattoo longevity.',
      'If any areas need touch-up, contact us — included free within 3 months.',
      'Your tattoo should now be vibrant and settled into the skin.',
    ],
  },
]

const dos = [
  'Wash gently with clean hands and mild, fragrance-free soap',
  'Pat dry with clean paper towels',
  'Apply thin layer of recommended moisturizer',
  'Wear loose, clean clothing over the tattoo',
  'Stay hydrated and eat nutritious food',
  'Apply SPF 30+ sunscreen once fully healed',
  'Sleep on clean sheets',
  'Contact your artist if you have concerns',
]

const donts = [
  'Don\'t submerge in water (pools, baths, ocean) for 2-4 weeks',
  'Don\'t pick, scratch, or peel flaking skin',
  'Don\'t expose to direct sunlight during healing',
  'Don\'t apply alcohol, peroxide, or Neosporin',
  'Don\'t wear tight clothing over the tattoo',
  'Don\'t let others touch your fresh tattoo',
  'Don\'t over-moisturize — thin layers only',
  'Don\'t work out heavily for the first 48 hours',
]

const products = [
  { name: 'Aquaphor Healing Ointment', type: 'Days 1-3', desc: 'Thin layer for initial healing. Petroleum-based barrier protection.' },
  { name: 'Hustle Butter Deluxe', type: 'Week 1-4', desc: 'All-natural tattoo aftercare. Shea butter, mango, aloe base.' },
  { name: 'Cetaphil Gentle Cleanser', type: 'Throughout', desc: 'Fragrance-free, non-comedogenic gentle cleanser for daily washing.' },
  { name: 'Eucerin Original Healing', type: 'Week 2+', desc: 'Rich moisturizer for the peeling phase. Fragrance-free formula.' },
  { name: 'EltaMD UV Sport SPF 50', type: 'Post-healing', desc: 'Broad-spectrum sunscreen. Water-resistant, won\'t fade your tattoo.' },
]

const contactReasons = [
  'Increasing pain or swelling after the first 3 days',
  'Red streaks spreading from the tattoo area',
  'Excessive or colored (green/yellow) discharge',
  'Fever or chills developing after your session',
  'Raised bumps or rash appearing around the tattoo',
  'Any signs that seem abnormal or concerning to you',
]

function Aftercare() {
  return (
    <div className="aftercare-page">
      <section className="aftercare-hero">
        <div className="container">
          <h1 className="aftercare-title">AFTERCARE</h1>
          <p className="aftercare-subtitle">Your tattoo is an investment. Proper aftercare ensures it stays vibrant for a lifetime.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">HEALING TIMELINE</h2>
            <p className="section-subtitle">What to expect during each phase of healing</p>
          </ScrollReveal>
          <div className="aftercare-timeline">
            {timeline.map((phase, i) => (
              <ScrollReveal key={phase.period} delay={i * 150}>
                <div className="timeline-phase">
                  <div className="timeline-marker">
                    <span className="timeline-period">{phase.period}</span>
                    <div className="timeline-dot"></div>
                    {i < timeline.length - 1 && <div className="timeline-connector"></div>}
                  </div>
                  <div className="timeline-content">
                    <h3>{phase.title}</h3>
                    <ul>
                      {phase.instructions.map((inst, j) => (
                        <li key={j}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="section dos-donts-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">DO&apos;S & DON&apos;TS</h2>
            <p className="section-subtitle">The essential rules for tattoo aftercare</p>
          </ScrollReveal>
          <div className="dos-donts-grid">
            <ScrollReveal direction="left">
              <div className="dos-card">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  DO
                </h3>
                <ul>
                  {dos.map((item, i) => (
                    <li key={i}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="donts-card">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  DON&apos;T
                </h3>
                <ul>
                  {donts.map((item, i) => (
                    <li key={i}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="3">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Recommendations */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">RECOMMENDED PRODUCTS</h2>
            <p className="section-subtitle">Artist-recommended products for optimal healing</p>
          </ScrollReveal>
          <div className="products-grid">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <div className="product-card">
                  <span className="product-timing">{p.type}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* When to Contact */}
      <section className="section contact-warning-section">
        <div className="container">
          <ScrollReveal>
            <div className="contact-warning">
              <div className="warning-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h2 className="section-title">WHEN TO CONTACT US</h2>
              <p className="section-subtitle">Most healing is straightforward, but reach out if you experience any of the following:</p>
              <ul className="warning-list">
                {contactReasons.map((reason, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--burnt-orange)" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="warning-contact">
                <p>Call us at <strong>(503) 555-0142</strong> or email <strong>aftercare@inkcraftstudio.com</strong></p>
                <p className="warning-note">When in doubt, always reach out. We&apos;d rather check on a healing tattoo than have a client worry alone.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Aftercare
