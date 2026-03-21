import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './PracticeAreas.css'

const areas = [
  {
    id: 'corporate',
    title: 'Corporate Law',
    tagline: 'Strategic counsel for businesses at every stage.',
    desc: 'Our Corporate Law team advises on the full spectrum of business legal matters, from formation and governance to complex M&A transactions. We represent Fortune 500 companies, mid-market firms, and emerging startups alike.',
    services: ['Mergers & Acquisitions', 'Corporate Governance', 'Securities & Compliance', 'Commercial Contracts', 'Joint Ventures', 'Business Formation'],
    lead: 'Victoria Ashford',
    leadTitle: 'Senior Partner, Head of Corporate',
    result: 'Negotiated a $12.5M cross-border merger for a technology holding company.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Law',
    tagline: 'Protecting your property interests with precision.',
    desc: 'We handle every facet of real estate law — from multi-million-dollar commercial transactions to residential closings and complex land use disputes. Our deep understanding of zoning, title, and environmental regulations ensures seamless deals.',
    services: ['Commercial Transactions', 'Residential Closings', 'Zoning & Land Use', 'Construction Disputes', 'Landlord-Tenant Law', 'Title & Easements'],
    lead: 'David Harrington',
    leadTitle: 'Partner, Real Estate Practice',
    result: 'Secured $8.2M in damages in a landmark commercial property dispute.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  },
  {
    id: 'family',
    title: 'Family Law',
    tagline: 'Compassionate advocacy when it matters most.',
    desc: 'Family legal matters require sensitivity, discretion, and determination. Our family law attorneys guide clients through divorce, custody battles, prenuptial agreements, and adoption proceedings with care and strategic precision.',
    services: ['Divorce & Separation', 'Child Custody & Support', 'Prenuptial Agreements', 'Adoption', 'Domestic Violence Protection', 'Mediation & Arbitration'],
    lead: 'Maria Gonzalez',
    leadTitle: 'Partner, Family Law',
    result: 'Achieved full custody for a client in a high-profile international custody case.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
  },
  {
    id: 'criminal',
    title: 'Criminal Defense',
    tagline: 'Aggressive defense. Proven results.',
    desc: 'When your freedom is at stake, you need an experienced criminal defense team. Our attorneys have successfully defended clients in state and federal courts on charges ranging from DUI to complex white-collar crimes.',
    services: ['DUI / DWI Defense', 'White Collar Crime', 'Federal Offenses', 'Drug Charges', 'Appeals & Post-Conviction', 'Juvenile Defense'],
    lead: 'Marcus Williams',
    leadTitle: 'Senior Partner, Criminal Defense',
    result: 'Obtained full acquittal for a client facing federal fraud charges.',
    img: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800',
  },
  {
    id: 'estate',
    title: 'Estate Planning',
    tagline: 'Protecting your legacy for generations.',
    desc: 'Our estate planning team helps individuals and families protect their assets, minimize tax exposure, and ensure their wishes are carried out. From simple wills to complex trust structures, we design plans tailored to your goals.',
    services: ['Wills & Trusts', 'Probate Administration', 'Asset Protection', 'Tax Planning', 'Power of Attorney', 'Charitable Giving'],
    lead: 'Elizabeth Warren-Park',
    leadTitle: 'Of Counsel, Estate Planning',
    result: 'Structured a multi-generational trust preserving $45M in family assets.',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
  },
  {
    id: 'immigration',
    title: 'Immigration Law',
    tagline: 'Navigating the path to a new future.',
    desc: 'We assist individuals, families, and businesses with all immigration-related matters. Whether you are seeking a work visa, pursuing permanent residency, or facing deportation, our team provides knowledgeable, compassionate counsel.',
    services: ['Work Visas (H-1B, L-1, O-1)', 'Green Cards', 'Citizenship & Naturalization', 'Deportation Defense', 'Asylum & Refugee Claims', 'Employer Compliance'],
    lead: 'Raj Patel',
    leadTitle: 'Partner, Immigration',
    result: 'Secured expedited visa processing for 200+ employees of a tech firm.',
    img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800',
  },
]

export default function PracticeAreas() {
  return (
    <main className="practice-areas-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Our Expertise</span>
            <h1 className="page-hero-title">Practice Areas</h1>
            <p className="page-hero-subtitle">
              Comprehensive legal services across six core practice areas, each led by
              recognized experts in their field.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="pa-quick-nav">
        <div className="container">
          <div className="pa-nav-links">
            {areas.map((a) => (
              <a key={a.id} href={`#${a.id}`} className="pa-nav-link">{a.title}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Area Details */}
      {areas.map((area, i) => (
        <section
          key={area.id}
          id={area.id}
          className={`section pa-detail ${i % 2 === 0 ? 'section-light' : 'section-dark'}`}
        >
          <div className="container">
            <div className={`pa-detail-grid ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="pa-detail-img">
                  <img src={area.img} alt={area.title} />
                </div>
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className="pa-detail-content">
                  <span className="section-label">{area.tagline}</span>
                  <h2 className={`pa-detail-title ${i % 2 !== 0 ? 'light' : ''}`}>{area.title}</h2>
                  <p className="pa-detail-desc">{area.desc}</p>
                  <div className="pa-services-list">
                    {area.services.map((s, j) => (
                      <div key={j} className="pa-service-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pa-lead">
                    <div className="pa-lead-info">
                      <strong>{area.lead}</strong>
                      <span>{area.leadTitle}</span>
                    </div>
                  </div>
                  <div className="pa-notable">
                    <span className="pa-notable-label">Notable Result:</span>
                    <p>{area.result}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="cta-title">Need Legal Guidance?</h2>
            <p className="cta-text">
              Our attorneys are ready to discuss your case and develop a strategy tailored to your needs.
            </p>
            <Link to="/contact" className="btn btn-gold">Schedule a Free Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
