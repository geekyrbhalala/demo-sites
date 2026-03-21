import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const practiceAreas = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="6" width="32" height="36" rx="2" />
        <line x1="14" y1="14" x2="34" y2="14" />
        <line x1="14" y1="20" x2="34" y2="20" />
        <line x1="14" y1="26" x2="28" y2="26" />
        <path d="M18 34 L22 38 L30 30" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Corporate Law',
    desc: 'Mergers & acquisitions, contracts, compliance, and business formation for enterprises of all sizes.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="18" width="36" height="24" rx="2" />
        <path d="M6 18 L24 6 L42 18" />
        <rect x="18" y="28" width="12" height="14" />
        <rect x="10" y="24" width="8" height="8" />
        <rect x="30" y="24" width="8" height="8" />
      </svg>
    ),
    title: 'Real Estate',
    desc: 'Transactions, disputes, zoning, and commercial property law with proven results.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="8" />
        <circle cx="32" cy="16" r="8" />
        <circle cx="24" cy="32" r="6" />
        <path d="M16 24 Q16 28 20 32" />
        <path d="M32 24 Q32 28 28 32" />
      </svg>
    ),
    title: 'Family Law',
    desc: 'Divorce, custody, prenuptial agreements, and adoption handled with sensitivity.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 12 L24 24 L32 28" strokeWidth="2.5" />
        <path d="M12 36 L8 42" />
        <path d="M36 36 L40 42" />
      </svg>
    ),
    title: 'Criminal Defense',
    desc: 'DUI, white collar crimes, appeals, and aggressive courtroom representation.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="32" height="32" rx="3" />
        <line x1="8" y1="16" x2="40" y2="16" />
        <line x1="14" y1="24" x2="34" y2="24" />
        <line x1="14" y1="30" x2="30" y2="30" />
        <path d="M28 34 L32 38 L38 32" strokeWidth="2" />
      </svg>
    ),
    title: 'Estate Planning',
    desc: 'Wills, trusts, probate, and asset protection strategies for your legacy.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 42 C8 30 16 24 24 24 C32 24 40 30 40 42" />
        <rect x="16" y="30" width="16" height="8" rx="2" />
      </svg>
    ),
    title: 'Immigration',
    desc: 'Visas, green cards, citizenship, and deportation defense for individuals and businesses.',
  },
]

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '5,000+', label: 'Cases Handled' },
  { number: '98%', label: 'Success Rate' },
  { number: '50+', label: 'Attorneys' },
]

const caseResults = [
  { amount: '$12.5M', type: 'Corporate Merger', desc: 'Successfully negotiated a complex multi-party merger for a Fortune 500 subsidiary.' },
  { amount: '$8.2M', type: 'Real Estate Dispute', desc: 'Recovered damages in a high-profile commercial property dispute.' },
  { amount: '$3.7M', type: 'Personal Injury', desc: 'Landmark settlement for client injured due to corporate negligence.' },
]

const testimonials = [
  {
    text: 'Northgate Law turned what seemed like an impossible situation into a complete victory. Their professionalism and expertise are unmatched.',
    name: 'Richard Montgomery',
    role: 'CEO, Montgomery Industries',
  },
  {
    text: 'During my divorce, the team at Northgate handled everything with discretion and compassion. I could not have asked for better representation.',
    name: 'Sarah Chen',
    role: 'Private Client',
  },
  {
    text: 'Their corporate law team saved our company millions in a complex merger negotiation. Brilliant strategists and tireless advocates.',
    name: 'James Whitfield',
    role: 'Managing Director, Whitfield Capital',
  },
]

const awards = [
  'Best Law Firms 2024 — U.S. News',
  'Super Lawyers Top 100',
  'Martindale-Hubbell AV Rated',
  'Chambers USA Ranked',
  'American Bar Association',
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920"
          alt="Courthouse"
          className="hero-bg"
        />
        <div className="hero-content container">
          <ScrollReveal>
            <span className="hero-label">Established 1998</span>
            <h1 className="hero-title">
              Justice. Integrity.<br />
              <span className="hero-accent">Results.</span>
            </h1>
            <p className="hero-subtitle">
              Northgate Law is a premier full-service law firm dedicated to delivering
              exceptional legal counsel with unwavering commitment to our clients.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">Schedule Consultation</Link>
              <Link to="/practice-areas" className="btn btn-outline">Our Practice Areas</Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat-number">{stat.number}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section practice-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Practice Areas</h2>
              <p className="section-subtitle">
                Our attorneys bring decades of experience across a wide range of legal disciplines,
                providing strategic counsel for every challenge.
              </p>
            </div>
          </ScrollReveal>
          <div className="practice-grid">
            {practiceAreas.map((area, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link to="/practice-areas" className="practice-card">
                  <div className="practice-icon">{area.icon}</div>
                  <h3 className="practice-card-title">{area.title}</h3>
                  <p className="practice-card-desc">{area.desc}</p>
                  <span className="practice-card-link">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section section-dark about-preview">
        <div className="container about-preview-inner">
          <ScrollReveal direction="left">
            <div className="about-preview-img">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
                alt="Northgate Law Office"
              />
              <div className="about-preview-badge">
                <span className="badge-number">25+</span>
                <span className="badge-text">Years of<br />Legal Excellence</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="about-preview-text">
              <span className="section-label">About the Firm</span>
              <h2 className="section-title">A Legacy of Legal<br />Excellence</h2>
              <p>
                Founded in 1998, Northgate Law has grown from a boutique practice into one of
                the most respected full-service law firms in the region. Our attorneys are
                recognized leaders in their fields, committed to achieving the best possible
                outcomes for every client.
              </p>
              <p>
                We believe in building lasting relationships based on trust, transparency, and
                results. Every case receives the focused attention it deserves.
              </p>
              <Link to="/about" className="btn btn-gold">About Our Firm</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Results */}
      <section className="section results-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Proven Track Record</span>
              <h2 className="section-title">Notable Case Results</h2>
              <p className="section-subtitle">
                Our commitment to excellence speaks through the results we achieve for our clients.
              </p>
            </div>
          </ScrollReveal>
          <div className="results-grid">
            {caseResults.map((result, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="result-card">
                  <span className="result-amount">{result.amount}</span>
                  <span className="result-type">{result.type}</span>
                  <p className="result-desc">{result.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="results-cta">
            <Link to="/results" className="btn btn-primary">View All Results</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Client Testimonials</span>
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="testimonial-card">
                  <svg className="testimonial-quote" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Bar */}
      <section className="awards-bar">
        <div className="container">
          <div className="awards-list">
            {awards.map((award, i) => (
              <div key={i} className="award-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <ScrollReveal>
            <h2 className="cta-title">Ready to Discuss Your Case?</h2>
            <p className="cta-text">
              Schedule a free, confidential consultation with one of our experienced attorneys today.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold">Free Consultation</Link>
              <a href="tel:2125550190" className="btn btn-outline">(212) 555-0190</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
