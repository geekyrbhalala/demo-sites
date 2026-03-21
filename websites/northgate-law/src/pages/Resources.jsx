import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Resources.css'

const articles = [
  {
    title: 'What to Do After an Accident: A Legal Guide',
    category: 'Personal Injury',
    date: 'March 15, 2026',
    excerpt: 'Learn the essential steps to protect your rights and build a strong case after an accident, from documenting evidence to filing a claim.',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Estate Planning: A Comprehensive Overview',
    category: 'Estate Planning',
    date: 'March 8, 2026',
    excerpt: 'From wills and trusts to powers of attorney, explore the key components of a solid estate plan and why every adult needs one.',
    readTime: '8 min read',
  },
  {
    title: 'Business Formation Guide: LLC vs Corporation',
    category: 'Corporate Law',
    date: 'February 28, 2026',
    excerpt: 'Choosing the right business structure is one of the most important decisions you will make. Compare LLCs, S-Corps, and C-Corps.',
    readTime: '7 min read',
  },
  {
    title: 'Navigating Child Custody: Rights and Responsibilities',
    category: 'Family Law',
    date: 'February 20, 2026',
    excerpt: 'A guide for parents facing custody disputes, including factors courts consider and strategies for achieving the best outcome.',
    readTime: '5 min read',
  },
  {
    title: 'Commercial Real Estate Transactions: What to Know',
    category: 'Real Estate',
    date: 'February 12, 2026',
    excerpt: 'Key considerations when buying, selling, or leasing commercial property, including due diligence, zoning, and financing.',
    readTime: '9 min read',
  },
  {
    title: 'Immigration Visa Options for Skilled Workers',
    category: 'Immigration',
    date: 'February 5, 2026',
    excerpt: 'Explore H-1B, L-1, O-1, and other visa categories available to skilled workers seeking employment in the United States.',
    readTime: '6 min read',
  },
  {
    title: 'White Collar Crime: Understanding Federal Charges',
    category: 'Criminal Defense',
    date: 'January 28, 2026',
    excerpt: 'What constitutes white collar crime, potential penalties, and defense strategies in federal fraud, embezzlement, and securities cases.',
    readTime: '7 min read',
  },
  {
    title: 'Prenuptial Agreements: Protecting Your Future',
    category: 'Family Law',
    date: 'January 15, 2026',
    excerpt: 'Why prenuptial agreements are not just for the wealthy, and how to approach this important conversation with your partner.',
    readTime: '5 min read',
  },
]

const faqs = [
  {
    q: 'How much does a consultation cost?',
    a: 'Your initial consultation is completely free. We will discuss your case, explain your legal options, and provide an honest assessment of your situation with no obligation.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Bring any relevant documents such as contracts, correspondence, court papers, police reports, medical records, or financial statements related to your matter.',
  },
  {
    q: 'How long does a typical case take?',
    a: 'Case timelines vary significantly depending on complexity, jurisdiction, and whether the matter is resolved through negotiation or litigation. We provide realistic timeline estimates during your consultation.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes, we offer flexible fee arrangements including hourly rates, flat fees, contingency fees (for applicable cases), and payment plans to make quality legal representation accessible.',
  },
  {
    q: 'Will my case go to trial?',
    a: 'Most cases are resolved through negotiation or settlement. However, our attorneys are experienced trial lawyers prepared to take your case to court if it serves your best interests.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Our attorneys are licensed to practice in New York, New Jersey, Connecticut, and several other states. We also handle federal cases nationwide. Contact us to discuss your specific jurisdiction.',
  },
]

const glossary = [
  { term: 'Affidavit', def: 'A written statement confirmed by oath or affirmation, used as evidence in court.' },
  { term: 'Brief', def: 'A written legal document used in various legal adversarial systems that is presented to a court arguing why one party should prevail.' },
  { term: 'Deposition', def: 'An out-of-court sworn testimony of a witness, typically transcribed by a court reporter.' },
  { term: 'Discovery', def: 'The pre-trial phase where each party can obtain evidence from the opposing party.' },
  { term: 'Fiduciary', def: 'A person who holds a legal or ethical relationship of trust with another party.' },
  { term: 'Injunction', def: 'A court order requiring a party to do or refrain from doing a specific act.' },
  { term: 'Litigation', def: 'The process of taking legal action; the process of resolving disputes through the court system.' },
  { term: 'Probate', def: 'The legal process of administering a deceased person\'s estate, resolving claims and distributing assets.' },
]

export default function Resources() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="resources-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Knowledge Center</span>
            <h1 className="page-hero-title">Legal Resources</h1>
            <p className="page-hero-subtitle">
              Informative articles, answers to common questions, and legal terminology to help
              you understand your rights and options.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="section resources-articles">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Featured Articles</span>
              <h2 className="section-title">Legal Insights</h2>
              <p className="section-subtitle">
                Stay informed with guides and analysis from our experienced attorneys.
              </p>
            </div>
          </ScrollReveal>
          <div className="articles-grid">
            {articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="article-card">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="article-read-time">{article.readTime}</span>
                    <span className="article-link">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark faq-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Common Questions</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="faq-question">
                    <h3>{faq.q}</h3>
                    <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="section glossary-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Reference</span>
              <h2 className="section-title">Legal Glossary</h2>
              <p className="section-subtitle">
                Common legal terms explained in plain language.
              </p>
            </div>
          </ScrollReveal>
          <div className="glossary-grid">
            {glossary.map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="glossary-item">
                  <h4 className="glossary-term">{item.term}</h4>
                  <p className="glossary-def">{item.def}</p>
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
            <h2 className="cta-title">Have a Legal Question?</h2>
            <p className="cta-text">
              Our attorneys are ready to provide personalized guidance for your situation.
            </p>
            <Link to="/contact" className="btn btn-gold">Free Consultation</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
