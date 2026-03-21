import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const team = [
    { name: 'Marcus Greene', role: 'Founder & Lead Designer', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400', bio: 'ISA Certified Arborist with 20+ years of landscape architecture experience.' },
    { name: 'Elena Vasquez', role: 'Garden Design Specialist', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', bio: 'Masters in Horticulture from OSU. Specializes in native Pacific Northwest gardens.' },
    { name: 'David Nakamura', role: 'Hardscape Foreman', img: 'https://images.unsplash.com/photo-1564429238961-bf8b07a93455?w=400', bio: '15 years of masonry and hardscape construction. Certified in stone installation.' },
    { name: 'Sarah Mitchell', role: 'Irrigation Engineer', img: 'https://images.unsplash.com/photo-1558635924-ae37e19a907d?w=400', bio: 'Water management specialist focused on smart irrigation and conservation systems.' },
    { name: 'Jake Thompson', role: 'Crew Lead', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400', bio: 'Expert in lawn care, tree maintenance, and seasonal property management.' },
  ]

  const milestones = [
    { year: '2009', title: 'Founded', desc: 'Marcus Greene starts Evergreen Landscaping with a truck and a dream.' },
    { year: '2012', title: 'First Commercial Client', desc: 'Landed our first corporate campus maintenance contract.' },
    { year: '2015', title: 'ISA Certification', desc: 'Marcus earns ISA Certified Arborist credentials.' },
    { year: '2017', title: 'Team of 10', desc: 'Expanded to a full crew with specialized divisions.' },
    { year: '2020', title: 'Eco-Friendly Pivot', desc: 'Committed to 100% organic fertilizers and native plantings.' },
    { year: '2024', title: '2,000+ Projects', desc: 'Reached milestone of 2,000 completed landscape projects.' },
  ]

  const certs = [
    'ISA Certified Arborist', 'Oregon Landscape Contractors Board (LCB)',
    'NOFA Organic Land Care', 'EPA WaterSense Partner',
    'Oregon Association of Nurseries Member', 'BBB A+ Rating'
  ]

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920" alt="About Evergreen" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Our Story</span>
          <h1>About Evergreen</h1>
          <p>Transforming outdoor spaces across Portland since 2009.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <ScrollReveal direction="left">
              <div className="about-story-content">
                <span className="section-label">Since 2009</span>
                <h2>Rooted in Passion, Growing with Purpose</h2>
                <p>
                  Evergreen Landscaping was founded by Marcus Greene in 2009 with a simple mission: to create outdoor spaces that inspire and endure. What started as a one-man operation with a pickup truck and a lawnmower has grown into Portland&rsquo;s most trusted full-service landscaping company.
                </p>
                <p>
                  Today, our team of dedicated professionals brings together expertise in garden design, hardscaping, arboriculture, and sustainable land management. We believe that every property has potential, and we are passionate about unlocking it.
                </p>
                <p>
                  Our commitment to eco-friendly practices sets us apart. We use organic fertilizers, prioritize native plant species, and design irrigation systems that conserve water without sacrificing beauty. The Pacific Northwest is our home, and we treat every landscape as an extension of our natural environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="about-story-image">
                <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800" alt="Evergreen team at work" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Journey</span>
              <h2>Company Milestones</h2>
              <div className="section-divider"></div>
            </div>
          </ScrollReveal>

          <div className="timeline">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <span className="timeline-year">{m.year}</span>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">The Crew</span>
              <h2>Meet Our Team</h2>
              <p>Dedicated professionals who bring expertise and passion to every project.</p>
              <div className="section-divider"></div>
            </div>
          </ScrollReveal>

          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="team-card">
                  <div className="team-img">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage)' }}>
        <div className="container">
          <div className="certs-section">
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Credentials</span>
                <h2>Certifications & Memberships</h2>
                <p>We maintain the highest industry standards through ongoing education and professional certifications.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="certs-grid">
                {certs.map((cert, i) => (
                  <div key={i} className="cert-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section about-environment">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Commitment</span>
              <h2>Environmental Responsibility</h2>
              <div className="section-divider"></div>
            </div>
          </ScrollReveal>

          <div className="env-grid">
            <ScrollReveal delay={0}>
              <div className="env-card">
                <span className="env-icon">🌿</span>
                <h3>Organic Practices</h3>
                <p>100% organic fertilizers and pest control. No harmful chemicals on your property or in our waterways.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="env-card">
                <span className="env-icon">🌻</span>
                <h3>Native Plants</h3>
                <p>We prioritize native PNW species that support local pollinators and require less water and maintenance.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="env-card">
                <span className="env-icon">💧</span>
                <h3>Water Conservation</h3>
                <p>Smart irrigation, rain sensors, and drought-tolerant designs that reduce water usage by up to 40%.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="env-card">
                <span className="env-icon">♻️</span>
                <h3>Green Waste Recycling</h3>
                <p>All green waste is composted or recycled. We maintain a zero-landfill policy for organic materials.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
