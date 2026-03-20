import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import CountUp from '../components/CountUp'
import './About.css'

function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(null)

  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      desc: 'Crestview Financial Advisors was founded during the financial crisis with a mission to provide transparent, client-first mortgage advisory services when trust in financial institutions was at an all-time low.'
    },
    {
      year: '2012',
      title: 'Expansion into Financial Planning',
      desc: 'After helping hundreds of families navigate the housing recovery, we expanded our services to include comprehensive financial planning and wealth management.'
    },
    {
      year: '2016',
      title: 'Regional Growth',
      desc: 'Opened offices in Boston and Washington D.C., growing our team to 30 professionals. Crossed the $200M mark in managed assets and earned our first Forbes recognition.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      desc: 'Launched our digital client portal and remote advisory services, enabling us to serve clients nationwide. Achieved a 98% client satisfaction rating during the pandemic.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      desc: 'Surpassed $500M in managed assets and 2,500 active clients. Named a top 50 advisory firm by Financial Advisor Magazine and expanded our insurance and tax divisions.'
    }
  ]

  const team = [
    {
      name: 'Jonathan Blake',
      title: 'Founder & CEO',
      credentials: 'CFP, CFA, MBA',
      specialty: 'Strategic Planning & Wealth Management',
      bio: 'With over 25 years in financial services, Jonathan founded Crestview to bring Wall Street expertise to Main Street. He holds a CFA charter and CFP certification, and previously managed institutional portfolios at Goldman Sachs.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800'
    },
    {
      name: 'Sarah Mitchell',
      title: 'VP, Mortgage Services',
      credentials: 'AMP, CMB',
      specialty: 'Residential & Commercial Mortgages',
      bio: 'Sarah leads our mortgage division with 18 years of lending experience. She has personally closed over $1.2B in mortgage transactions and is recognized as one of the top mortgage brokers in the Northeast.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'
    },
    {
      name: 'David Chen',
      title: 'Director, Financial Planning',
      credentials: 'CFP, CPA',
      specialty: 'Retirement & Tax Planning',
      bio: 'David brings a unique dual perspective as both a certified financial planner and CPA. His integrated approach to tax and financial planning has helped clients reduce their lifetime tax burden by an average of 22%.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Director, Client Relations',
      credentials: 'MBA, Series 65',
      specialty: 'Client Experience & Portfolio Management',
      bio: 'Elena ensures every client receives personalized attention throughout their journey with Crestview. She manages our advisory relationships and oversees the implementation of financial plans across all service areas.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800'
    }
  ]

  const certifications = [
    'NMLS Registered Mortgage Brokerage (#123456)',
    'SEC Registered Investment Advisor (RIA)',
    'Member, Financial Planning Association (FPA)',
    'National Association of Mortgage Brokers (NAMB)',
    'Better Business Bureau A+ Rating',
    'FINRA Licensed (Series 6, 7, 63, 65)'
  ]

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
            alt="Modern office interior"
          />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <ScrollReveal>
            <span className="about-hero-badge">About Crestview</span>
            <h1>Building Financial<br />Confidence Since 2008</h1>
            <p className="about-hero-desc">
              We combine deep expertise with genuine care to help individuals and businesses
              navigate the complexities of mortgages, investments, and financial planning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat">
              <span className="about-stat-number"><CountUp end={15} suffix="+" /></span>
              <span className="about-stat-label">Years of Excellence</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number"><CountUp end={2500} suffix="+" /></span>
              <span className="about-stat-label">Families Served</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number"><CountUp prefix="$" end={500} suffix="M" /></span>
              <span className="about-stat-label">Assets Under Management</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number"><CountUp end={50} suffix="+" /></span>
              <span className="about-stat-label">Lending Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From a small office during the financial crisis to a nationally recognized advisory firm.
            </p>
          </ScrollReveal>

          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
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

      {/* Team */}
      <section className="section about-team-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals dedicated to your financial success.
            </p>
          </ScrollReveal>

          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div
                  className={`team-card ${activeTeamMember === i ? 'flipped' : ''}`}
                  onMouseEnter={() => setActiveTeamMember(i)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  <div className="team-card-front">
                    <div className="team-image-wrap">
                      <img src={member.image} alt={member.name} className="team-image" />
                      <div className="team-image-overlay">
                        <span>View Profile</span>
                      </div>
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">{member.name}</h3>
                      <span className="team-title">{member.title}</span>
                      <span className="team-credentials">{member.credentials}</span>
                    </div>
                  </div>
                  <div className="team-card-back">
                    <h3 className="team-name">{member.name}</h3>
                    <span className="team-specialty-label">Specialty</span>
                    <span className="team-specialty">{member.specialty}</span>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section about-certs-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Licenses & Certifications</h2>
            <p className="section-subtitle">
              Fully licensed and certified to provide comprehensive financial services nationwide.
            </p>
          </ScrollReveal>

          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="cert-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section about-community-section">
        <div className="container">
          <div className="community-grid">
            <ScrollReveal direction="left">
              <div className="community-content">
                <h2>Community Involvement</h2>
                <p>
                  At Crestview, we believe in giving back. Our team actively participates in financial
                  literacy programs, affordable housing initiatives, and community development.
                </p>
                <ul className="community-list">
                  <li>
                    <strong>Financial Literacy Program:</strong> Free monthly workshops for first-time
                    homebuyers, reaching over 500 families annually.
                  </li>
                  <li>
                    <strong>Habitat for Humanity Partnership:</strong> Proud sponsor and volunteer
                    partner, contributing to 12 homes built since 2015.
                  </li>
                  <li>
                    <strong>College Scholarship Fund:</strong> Annual $10,000 scholarship for students
                    pursuing degrees in finance and economics.
                  </li>
                  <li>
                    <strong>Pro Bono Advisory:</strong> Complimentary financial consultations for
                    veterans, senior citizens, and non-profit organizations.
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
                alt="Family home"
                className="community-image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="about-office-section">
        <div className="container">
          <ScrollReveal>
            <div className="office-banner">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
                alt="Crestview office"
                className="office-image"
              />
              <div className="office-overlay">
                <h2>Visit Our Office</h2>
                <p>250 Financial District Blvd, Suite 1200, New York, NY 10005</p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default About
