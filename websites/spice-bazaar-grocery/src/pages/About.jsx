import ScrollReveal from '../components/ScrollReveal'
import './About.css'

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', bio: 'Born in Jaipur, Rajesh brings 25 years of spice trading expertise.' },
  { name: 'Anita Desai', role: 'Head of Sourcing', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', bio: 'Anita personally visits farms across India to ensure quality.' },
  { name: 'Vikram Singh', role: 'Store Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', bio: 'Vikram ensures every customer leaves with a smile and full bags.' },
  { name: 'Lakshmi Rao', role: 'Head Chef & Recipe Creator', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', bio: 'Lakshmi creates all our recipe cards and hosts cooking workshops.' },
]

const milestones = [
  { year: '2008', event: 'Founded Spice Bazaar', desc: 'Rajesh and family open a small spice shop in the neighborhood.' },
  { year: '2012', event: 'Direct Farm Sourcing', desc: 'Established partnerships with 15 farms across Rajasthan, Kerala, and Kashmir.' },
  { year: '2015', event: 'Expanded Product Line', desc: 'Added fresh produce, ready-to-cook meals, and artisanal beverages.' },
  { year: '2018', event: 'Community Kitchen Launch', desc: 'Opened our in-store kitchen for cooking classes and tastings.' },
  { year: '2021', event: 'Online Store Launch', desc: 'Brought the Spice Bazaar experience online with same-day delivery.' },
  { year: '2024', event: 'Catering Services', desc: 'Launched full-service catering for events with authentic Indian menus.' },
]

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>From a small family shop to your trusted neighborhood grocer</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <ScrollReveal direction="left">
              <div className="story-content">
                <span className="story-tag">Est. 2008</span>
                <h2>A Family Tradition of Flavor</h2>
                <p>
                  Spice Bazaar was born from a simple idea: everyone deserves access to the same
                  quality spices that Indian families have used for generations. Rajesh Kumar,
                  a third-generation spice trader from Jaipur, moved to the United States with
                  a suitcase full of spices and a dream.
                </p>
                <p>
                  What started as a small shop has grown into a beloved community institution.
                  We still hand-select every batch of spices, maintain relationships with
                  multi-generational farms across India, and grind many of our masalas fresh
                  in-store every week.
                </p>
                <p>
                  Today, Spice Bazaar serves not just the Indian community but anyone who
                  believes that great food starts with great ingredients.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1534483509719-8017d63a3b96?w=1200" alt="Spice market" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Direct from Indian Farms</h2>
            <p className="section-subtitle">We know exactly where every ingredient comes from</p>
          </ScrollReveal>
          <div className="sourcing-grid">
            <ScrollReveal delay={0}>
              <div className="sourcing-card">
                <div className="sourcing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Quality Guaranteed</h3>
                <p>Every batch is tested for purity, potency, and freshness before it reaches our shelves.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="sourcing-card">
                <div className="sourcing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Fair Trade Practices</h3>
                <p>We pay fair prices to our farming partners, supporting sustainable livelihoods.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="sourcing-card">
                <div className="sourcing-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3>Small Batch Freshness</h3>
                <p>We import in small quantities to ensure you always get the freshest spices.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The passionate people behind Spice Bazaar</p>
          </ScrollReveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="team-card">
                  <div className="team-img">
                    <img src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Key milestones in the Spice Bazaar story</p>
          </ScrollReveal>
          <div className="timeline">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 100}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="price timeline-year">{m.year}</span>
                    <h3>{m.event}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section community-section">
        <div className="container">
          <ScrollReveal>
            <div className="community-inner">
              <h2>Community Events</h2>
              <p>
                We host monthly cooking classes, spice-tasting events, and cultural celebrations.
                Join us to learn, cook, and connect with fellow food lovers.
              </p>
              <div className="community-events">
                <div className="community-event">
                  <span className="price">Every Saturday</span>
                  <h4>Live Cooking Demo</h4>
                  <p>Watch Chef Lakshmi prepare a seasonal dish</p>
                </div>
                <div className="community-event">
                  <span className="price">1st Sunday</span>
                  <h4>Spice Tasting</h4>
                  <p>Discover new spices and flavor profiles</p>
                </div>
                <div className="community-event">
                  <span className="price">Monthly</span>
                  <h4>Kids Cooking Class</h4>
                  <p>Fun, hands-on cooking for ages 6-12</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default About
