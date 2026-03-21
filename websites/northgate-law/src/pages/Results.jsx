import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Results.css'

const caseResults = [
  { amount: '$12.5M', type: 'Corporate', category: 'settlement', desc: 'Successfully negotiated a complex multi-party merger involving a Fortune 500 technology subsidiary and three international entities.' },
  { amount: '$8.2M', type: 'Real Estate', category: 'verdict', desc: 'Landmark verdict in a commercial property dispute involving breach of contract and fraudulent concealment of property defects.' },
  { amount: '$5.8M', type: 'Criminal Defense', category: 'settlement', desc: 'Secured dismissal and civil settlement for a client wrongfully accused of financial fraud by a former business partner.' },
  { amount: '$4.1M', type: 'Estate Planning', category: 'settlement', desc: 'Resolved complex probate dispute involving contested wills and multi-state property holdings for a prominent family.' },
  { amount: '$3.7M', type: 'Family Law', category: 'settlement', desc: 'High-net-worth divorce settlement involving international assets, business valuations, and custodial arrangements.' },
  { amount: '$3.2M', type: 'Corporate', category: 'verdict', desc: 'Jury verdict in breach of fiduciary duty case against former executives of a publicly traded company.' },
  { amount: '$2.9M', type: 'Real Estate', category: 'settlement', desc: 'Negotiated settlement in zoning dispute that preserved client\'s commercial development rights on a contested parcel.' },
  { amount: '$2.4M', type: 'Immigration', category: 'settlement', desc: 'Secured damages and visa relief for 150+ workers subjected to exploitative employment practices by a staffing agency.' },
  { amount: '$1.8M', type: 'Criminal Defense', category: 'verdict', desc: 'Complete acquittal and civil damages awarded to client falsely charged with securities fraud in a federal case.' },
  { amount: '$1.5M', type: 'Family Law', category: 'settlement', desc: 'Successfully mediated custody and asset division in a complex international divorce involving three jurisdictions.' },
  { amount: '$1.2M', type: 'Corporate', category: 'settlement', desc: 'Resolved partnership dissolution dispute including IP rights, non-compete enforcement, and revenue share agreements.' },
  { amount: '$950K', type: 'Estate Planning', category: 'verdict', desc: 'Upheld validity of trust amendments in contested probate case, protecting beneficiary rights against fraudulent claims.' },
]

const filters = ['All', 'Corporate', 'Real Estate', 'Family Law', 'Criminal Defense', 'Estate Planning', 'Immigration']

const successStories = [
  {
    quote: 'After a two-year legal battle, Northgate Law not only won our case but restored our faith in the justice system. They were tireless.',
    name: 'Robert & Susan Chen',
    type: 'Real Estate Dispute',
  },
  {
    quote: 'Facing federal charges that could have ended my career, Marcus Williams and his team secured a full acquittal. I owe them everything.',
    name: 'Dr. Michael Torres',
    type: 'Criminal Defense',
  },
  {
    quote: 'The estate planning team helped us protect our family legacy with a comprehensive trust strategy that will serve generations.',
    name: 'The Whitfield Family',
    type: 'Estate Planning',
  },
]

export default function Results() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseResults
    : caseResults.filter((r) => r.type === activeFilter)

  const verdictCount = caseResults.filter(r => r.category === 'verdict').length
  const settlementCount = caseResults.filter(r => r.category === 'settlement').length

  return (
    <main className="results-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Proven Track Record</span>
            <h1 className="page-hero-title">Case Results</h1>
            <p className="page-hero-subtitle">
              Our attorneys have secured millions in verdicts and settlements for our clients.
              Results speak louder than promises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Breakdown Stats */}
      <section className="results-breakdown">
        <div className="container">
          <div className="breakdown-grid">
            <div className="breakdown-card">
              <span className="breakdown-number">$48M+</span>
              <span className="breakdown-label">Total Recovered</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-number">{verdictCount}</span>
              <span className="breakdown-label">Verdicts Won</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-number">{settlementCount}</span>
              <span className="breakdown-label">Settlements Negotiated</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-number">98%</span>
              <span className="breakdown-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Results */}
      <section className="section results-section">
        <div className="container">
          <div className="results-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`results-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="results-cards-grid">
            {filtered.map((r, i) => (
              <ScrollReveal key={`${r.amount}-${r.type}-${i}`} delay={i * 50}>
                <div className="results-card-item">
                  <div className="results-card-top">
                    <span className="results-card-amount">{r.amount}</span>
                    <span className={`results-card-badge ${r.category}`}>
                      {r.category === 'verdict' ? 'Verdict' : 'Settlement'}
                    </span>
                  </div>
                  <span className="results-card-type">{r.type}</span>
                  <p className="results-card-desc">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Client Success Stories</span>
              <h2 className="section-title">Real People, Real Results</h2>
            </div>
          </ScrollReveal>
          <div className="success-grid">
            {successStories.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="success-card">
                  <p className="success-quote">&ldquo;{s.quote}&rdquo;</p>
                  <div className="success-author">
                    <strong>{s.name}</strong>
                    <span>{s.type}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="results-disclaimer">
        <div className="container">
          <p>
            <strong>Disclaimer:</strong> Past results do not guarantee future outcomes.
            Each case is unique and must be evaluated on its own facts and circumstances.
            The amounts listed above are approximate and may reflect gross recoveries before
            fees, costs, and expenses. This information is provided for informational purposes
            only and does not constitute a guarantee or prediction of the outcome of any future case.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="cta-title">Let Us Fight for You</h2>
            <p className="cta-text">
              Discover how our experienced attorneys can help you achieve the best possible outcome.
            </p>
            <Link to="/contact" className="btn btn-gold">Free Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
