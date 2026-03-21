import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

const timeline = [
  { year: '1998', title: 'Founded', desc: 'Northgate Law was established by Victoria Ashford and Marcus Williams with a vision to provide top-tier legal services with unwavering integrity.' },
  { year: '2003', title: 'Expansion', desc: 'Opened our second office in Connecticut and expanded into corporate and real estate law practices.' },
  { year: '2008', title: 'National Recognition', desc: 'Named among Best Law Firms by U.S. News & World Report for the first time. Added immigration and estate planning divisions.' },
  { year: '2013', title: '50-Attorney Milestone', desc: 'Grew to 50+ attorneys across three offices. Established our pro bono initiative serving underrepresented communities.' },
  { year: '2018', title: '20th Anniversary', desc: 'Celebrated 20 years of legal excellence with over 4,000 cases successfully resolved and $100M+ in client recoveries.' },
  { year: '2024', title: 'Modern Era', desc: 'Launched our digital client portal and continued our tradition of legal excellence with Chambers USA rankings across all practice areas.' },
]

const values = [
  { title: 'Integrity', desc: 'We uphold the highest ethical standards in every interaction, every case, and every decision.', icon: '⚖' },
  { title: 'Excellence', desc: 'We pursue outstanding results through meticulous preparation, deep expertise, and relentless advocacy.', icon: '★' },
  { title: 'Client Focus', desc: 'Every client receives personalized attention and a tailored strategy designed for their unique situation.', icon: '◆' },
  { title: 'Community', desc: 'We give back through pro bono work, mentorship, and active participation in the communities we serve.', icon: '●' },
]

const offices = [
  {
    name: 'New York (Headquarters)',
    address: '450 Justice Avenue, Suite 1200, New York, NY 10001',
    phone: '(212) 555-0190',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  },
  {
    name: 'Hartford',
    address: '225 Constitution Plaza, Suite 800, Hartford, CT 06103',
    phone: '(860) 555-0145',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
  },
  {
    name: 'Newark',
    address: '100 Federal Street, Suite 600, Newark, NJ 07102',
    phone: '(973) 555-0167',
    img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800',
  },
]

const awards = [
  'U.S. News Best Law Firms (2008–2024)',
  'Super Lawyers — Top 100 (NY Metro)',
  'Martindale-Hubbell AV Preeminent',
  'Chambers USA — Ranked in 4 Practice Areas',
  'American Lawyer — Top 200',
  'Best Lawyers in America — 12 Attorneys Listed',
]

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Our Story</span>
            <h1 className="page-hero-title">About Northgate Law</h1>
            <p className="page-hero-subtitle">
              For over 25 years, we have been a trusted partner for individuals and businesses
              seeking exceptional legal representation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission">
        <div className="container about-mission-grid">
          <ScrollReveal direction="left">
            <div className="about-mission-img">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200"
                alt="Northgate Law Team"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="about-mission-content">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Dedicated to Justice,<br />Driven by Integrity</h2>
              <p>
                Northgate Law was founded on the belief that every person and business deserves
                access to world-class legal counsel. Our mission is to deliver exceptional
                results while maintaining the highest standards of professional ethics and
                personal integrity.
              </p>
              <p>
                We measure our success not only by the verdicts and settlements we achieve,
                but by the trust our clients place in us and the lasting relationships we build.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark about-values">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">What Guides Us</span>
              <h2 className="section-title">Our Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">Firm History</h2>
            </div>
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section section-dark about-offices">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Our Locations</span>
              <h2 className="section-title">Office Locations</h2>
            </div>
          </ScrollReveal>
          <div className="offices-grid">
            {offices.map((office, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="office-card">
                  <img src={office.img} alt={office.name} className="office-img" />
                  <div className="office-info">
                    <h3 className="office-name">{office.name}</h3>
                    <p className="office-address">{office.address}</p>
                    <p className="office-phone">{office.phone}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Bono & Diversity */}
      <section className="section about-commitment">
        <div className="container">
          <div className="commitment-grid">
            <ScrollReveal direction="left">
              <div className="commitment-card">
                <span className="section-label">Giving Back</span>
                <h3>Pro Bono Commitment</h3>
                <p>
                  Every attorney at Northgate Law dedicates a minimum of 50 hours annually to
                  pro bono work. We partner with legal aid societies, refugee organizations, and
                  community groups to provide free legal services to those who need them most.
                  Since 2013, our attorneys have contributed over 15,000 hours of pro bono service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="commitment-card">
                <span className="section-label">Our Pledge</span>
                <h3>Diversity & Inclusion</h3>
                <p>
                  We believe that diverse perspectives lead to better outcomes. Our firm reflects
                  the communities we serve, with attorneys from a wide range of backgrounds,
                  cultures, and experiences. We actively recruit diverse talent and foster an
                  inclusive environment where every voice is valued and heard.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section section-dark about-awards">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Recognition</span>
              <h2 className="section-title">Awards & Rankings</h2>
            </div>
          </ScrollReveal>
          <div className="awards-grid">
            {awards.map((award, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="award-card">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{award}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="cta-title">Join the Northgate Family</h2>
            <p className="cta-text">
              Whether you need legal representation or want to explore career opportunities, we would love to hear from you.
            </p>
            <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
