import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Attorneys.css'

const attorneys = [
  {
    name: 'Victoria Ashford',
    title: 'Senior Partner',
    areas: ['Corporate Law', 'M&A'],
    bar: 'New York, Connecticut, Massachusetts',
    education: 'J.D., Harvard Law School; B.A., Yale University',
    bio: 'Victoria leads the firm\'s corporate practice with over 20 years of experience advising on high-value transactions. She has been named among the Top 50 Women in Law by the National Law Journal.',
    cases: 'Led $12.5M technology merger; advised on 100+ corporate transactions',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
  },
  {
    name: 'David Harrington',
    title: 'Partner',
    areas: ['Real Estate', 'Construction'],
    bar: 'New York, New Jersey',
    education: 'J.D., Columbia Law School; B.S., NYU',
    bio: 'David brings 18 years of real estate law expertise, representing developers, investors, and landlords in complex commercial transactions across the tri-state area.',
    cases: 'Secured $8.2M verdict in commercial property dispute',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
  },
  {
    name: 'Maria Gonzalez',
    title: 'Partner',
    areas: ['Family Law', 'Mediation'],
    bar: 'New York, Florida',
    education: 'J.D., Georgetown University Law Center; B.A., Duke University',
    bio: 'Maria is a compassionate yet fierce advocate for families in transition. She specializes in high-net-worth divorce proceedings and international custody matters.',
    cases: 'Won full custody in international child custody case spanning 3 jurisdictions',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800',
  },
  {
    name: 'Marcus Williams',
    title: 'Senior Partner',
    areas: ['Criminal Defense', 'Appeals'],
    bar: 'New York, California, D.C.',
    education: 'J.D., Stanford Law School; B.A., Morehouse College',
    bio: 'A formidable courtroom presence with 22 years of criminal defense experience. Marcus has successfully defended clients in over 500 federal and state trials.',
    cases: 'Achieved full acquittal in high-profile federal fraud case',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
  {
    name: 'Elizabeth Warren-Park',
    title: 'Of Counsel',
    areas: ['Estate Planning', 'Tax'],
    bar: 'New York, Connecticut',
    education: 'LL.M. in Taxation, NYU School of Law; J.D., Penn Law',
    bio: 'Elizabeth is one of the region\'s foremost estate planning attorneys, with deep expertise in tax-efficient wealth transfer strategies for high-net-worth families.',
    cases: 'Structured multi-generational trust preserving $45M in family assets',
    img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800',
  },
  {
    name: 'Raj Patel',
    title: 'Partner',
    areas: ['Immigration', 'Employment'],
    bar: 'New York, New Jersey, Pennsylvania',
    education: 'J.D., University of Michigan Law School; B.A., Cornell University',
    bio: 'Raj is passionate about helping individuals and businesses navigate the complexities of U.S. immigration law. He has assisted over 1,000 clients in obtaining visas and permanent residency.',
    cases: 'Secured expedited visa processing for 200+ tech company employees',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
  },
  {
    name: 'Catherine Blake',
    title: 'Associate',
    areas: ['Corporate Law', 'Securities'],
    bar: 'New York',
    education: 'J.D., Columbia Law School; B.A., Brown University',
    bio: 'Catherine is a rising star in the corporate practice, focusing on securities regulation, compliance, and IPO advisory. She previously clerked for the Hon. Amy Chen in the Southern District of New York.',
    cases: 'Supported legal due diligence for 15 M&A transactions totaling $200M+',
    img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800',
  },
  {
    name: 'Thomas O\'Brien',
    title: 'Associate',
    areas: ['Criminal Defense', 'Civil Rights'],
    bar: 'New York, Massachusetts',
    education: 'J.D., Boston University School of Law; B.A., Boston College',
    bio: 'Thomas is a dedicated advocate for justice, combining criminal defense work with a passion for civil rights litigation. He leads the firm\'s pro bono initiative.',
    cases: 'Successfully appealed wrongful conviction resulting in client exoneration',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
  },
]

export default function Attorneys() {
  return (
    <main className="attorneys-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Our Team</span>
            <h1 className="page-hero-title">Meet Our Attorneys</h1>
            <p className="page-hero-subtitle">
              Experienced, dedicated, and recognized leaders in their respective fields of law.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Attorney Grid */}
      <section className="section attorneys-section">
        <div className="container">
          <div className="attorneys-grid">
            {attorneys.map((atty, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="attorney-card">
                  <div className="attorney-img-wrap">
                    <img src={atty.img} alt={atty.name} className="attorney-img" />
                    <div className="attorney-overlay">
                      <Link to="/contact" className="btn btn-gold btn-sm">
                        Schedule with {atty.name.split(' ')[0]}
                      </Link>
                    </div>
                  </div>
                  <div className="attorney-info">
                    <h3 className="attorney-name">{atty.name}</h3>
                    <span className="attorney-title">{atty.title}</span>
                    <div className="attorney-areas">
                      {atty.areas.map((area, j) => (
                        <span key={j} className="attorney-area-tag">{area}</span>
                      ))}
                    </div>
                    <div className="attorney-details">
                      <div className="attorney-detail">
                        <strong>Bar Admissions</strong>
                        <span>{atty.bar}</span>
                      </div>
                      <div className="attorney-detail">
                        <strong>Education</strong>
                        <span>{atty.education}</span>
                      </div>
                    </div>
                    <p className="attorney-bio">{atty.bio}</p>
                    <div className="attorney-notable">
                      <span className="attorney-notable-label">Notable:</span>
                      <span>{atty.cases}</span>
                    </div>
                  </div>
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
            <h2 className="cta-title">Work With the Best</h2>
            <p className="cta-text">
              Schedule a consultation with one of our attorneys to discuss your legal needs.
            </p>
            <Link to="/contact" className="btn btn-gold">Schedule Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
