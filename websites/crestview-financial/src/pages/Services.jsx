import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Services.css'

function Services() {
  const [openService, setOpenService] = useState(0)

  const services = [
    {
      id: 0,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Residential Mortgages',
      overview: 'Whether you are purchasing your first home, upgrading to your dream property, or investing in real estate, our residential mortgage specialists connect you with the best rates from over 50 lending partners. We handle the entire process from pre-approval to closing, ensuring a smooth and transparent experience.',
      benefits: [
        'Access to 50+ lender partners for competitive rate comparisons',
        'Specialized programs for first-time buyers with as low as 3% down',
        'Fixed, variable, and hybrid rate options tailored to your situation',
        'Average savings of $12,000 over the life of the loan vs. big banks'
      ],
      steps: [
        { title: 'Initial Consultation', desc: 'We assess your financial profile, goals, and timeline to create a personalized strategy.' },
        { title: 'Rate Shopping', desc: 'We compare rates across 50+ lenders to find the best terms for your unique situation.' },
        { title: 'Application & Approval', desc: 'Our team manages all documentation and communication with the chosen lender.' },
        { title: 'Closing', desc: 'We coordinate with all parties to ensure a smooth, on-time closing with no surprises.' }
      ]
    },
    {
      id: 1,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      title: 'Commercial Mortgages',
      overview: 'Our commercial mortgage division provides financing solutions for businesses of all sizes. From office buildings and retail spaces to multi-family apartments and industrial facilities, we structure deals that align with your business objectives and cash flow requirements.',
      benefits: [
        'Loan amounts from $500K to $50M for diverse commercial properties',
        'Flexible amortization periods up to 30 years',
        'Bridge financing and construction loans available',
        'Dedicated commercial underwriting team for faster approvals'
      ],
      steps: [
        { title: 'Property Analysis', desc: 'We evaluate the property, market conditions, and projected income to structure the optimal loan.' },
        { title: 'Financial Review', desc: 'Comprehensive analysis of your business financials, tax returns, and projections.' },
        { title: 'Lender Matching', desc: 'We present your deal to institutional lenders, credit unions, and private capital sources.' },
        { title: 'Due Diligence & Close', desc: 'We manage appraisals, environmental reviews, and all closing requirements.' }
      ]
    },
    {
      id: 2,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      title: 'Refinancing Solutions',
      overview: 'Lower your monthly payments, access your home equity, or consolidate debt through strategic refinancing. Our team monitors market conditions daily to identify optimal refinancing windows and ensure you benefit from every rate movement.',
      benefits: [
        'Rate-and-term refinancing to reduce monthly payments by up to 30%',
        'Cash-out refinancing to fund renovations, education, or investments',
        'Debt consolidation to simplify finances and lower overall interest costs',
        'No-cost refinancing options available for qualifying borrowers'
      ],
      steps: [
        { title: 'Break-Even Analysis', desc: 'We calculate exactly when refinancing becomes profitable based on your specific numbers.' },
        { title: 'Market Timing', desc: 'Our rate monitoring alerts you to optimal refinancing opportunities as they emerge.' },
        { title: 'Streamlined Process', desc: 'For existing clients, we offer expedited processing with reduced documentation.' },
        { title: 'Seamless Transition', desc: 'We coordinate the payoff of your existing mortgage and transition to the new terms.' }
      ]
    },
    {
      id: 3,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      title: 'Financial Planning',
      overview: 'Our certified financial planners develop comprehensive strategies that address every aspect of your financial life. From retirement planning and investment management to estate planning and education funding, we create a roadmap to your financial goals.',
      benefits: [
        'Personalized retirement projections with detailed income modeling',
        'Tax-efficient investment strategies across registered and non-registered accounts',
        'Estate planning coordination with your legal and tax professionals',
        'Regular portfolio rebalancing and quarterly performance reviews'
      ],
      steps: [
        { title: 'Discovery Meeting', desc: 'We explore your current financial picture, goals, risk tolerance, and timeline.' },
        { title: 'Plan Development', desc: 'Our team creates a detailed financial plan with projections and recommendations.' },
        { title: 'Implementation', desc: 'We help you execute each recommendation, coordinating with other professionals as needed.' },
        { title: 'Ongoing Management', desc: 'Quarterly reviews, annual plan updates, and proactive adjustments as life changes.' }
      ]
    },
    {
      id: 4,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Insurance Advisory',
      overview: 'Protect your family, property, and business with the right insurance coverage. We work as independent advisors, analyzing your risk profile and shopping the market to find comprehensive protection at competitive premiums.',
      benefits: [
        'Independent analysis across 20+ insurance carriers for best pricing',
        'Life insurance strategies including term, whole life, and universal coverage',
        'Property and casualty insurance for homes, autos, and businesses',
        'Annual coverage reviews to ensure protection keeps pace with your life'
      ],
      steps: [
        { title: 'Risk Assessment', desc: 'We identify your exposure areas and evaluate your current coverage gaps.' },
        { title: 'Market Survey', desc: 'We shop the market across 20+ carriers to find the optimal coverage and price.' },
        { title: 'Coverage Placement', desc: 'We place your policies and ensure all terms and conditions are clearly understood.' },
        { title: 'Claims Support', desc: 'If you need to file a claim, we advocate on your behalf throughout the process.' }
      ]
    },
    {
      id: 5,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
          <path d="M7 8h2m2 0h2m2 0h2"/>
          <path d="M7 11h2m2 0h2m2 0h2"/>
        </svg>
      ),
      title: 'Tax Services',
      overview: 'Strategic tax planning and preparation services that go beyond simple filing. Our tax professionals identify opportunities to minimize your tax burden, maximize deductions, and structure your finances for optimal tax efficiency throughout the year.',
      benefits: [
        'Year-round tax planning, not just annual filing',
        'Business structuring advice for optimal tax treatment',
        'Capital gains planning and tax-loss harvesting strategies',
        'Coordination with your financial plan for holistic tax optimization'
      ],
      steps: [
        { title: 'Tax Review', desc: 'We analyze your current tax situation, prior returns, and identify missed opportunities.' },
        { title: 'Strategy Development', desc: 'We create a proactive tax strategy aligned with your financial plan.' },
        { title: 'Implementation', desc: 'We implement strategies throughout the year, not just at filing time.' },
        { title: 'Filing & Compliance', desc: 'Accurate, timely preparation and filing of all required returns.' }
      ]
    }
  ]

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <ScrollReveal>
            <span className="services-hero-badge">Our Expertise</span>
            <h1>Comprehensive Financial Services</h1>
            <p className="services-hero-desc">
              From your first mortgage to retirement planning, we provide integrated financial solutions
              backed by deep expertise and a commitment to your success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-accordion">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 80}>
                <div className={`service-accordion-item ${openService === service.id ? 'open' : ''}`}>
                  <button
                    className="service-accordion-header"
                    onClick={() => setOpenService(openService === service.id ? -1 : service.id)}
                    aria-expanded={openService === service.id}
                  >
                    <div className="service-accordion-left">
                      <div className="service-accordion-icon">{service.icon}</div>
                      <div>
                        <h3 className="service-accordion-title">{service.title}</h3>
                        <p className="service-accordion-preview">
                          {service.overview.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <svg className="service-accordion-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>

                  <div className="service-accordion-content">
                    <div className="service-detail-grid">
                      <div className="service-detail-main">
                        <h4>Overview</h4>
                        <p>{service.overview}</p>

                        <h4>Key Benefits</h4>
                        <ul className="service-benefits-list">
                          {service.benefits.map((benefit, i) => (
                            <li key={i}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-detail-steps">
                        <h4>Our Process</h4>
                        <div className="service-steps">
                          {service.steps.map((step, i) => (
                            <div key={i} className="service-step">
                              <div className="service-step-number">{i + 1}</div>
                              <div>
                                <span className="service-step-title">{step.title}</span>
                                <p className="service-step-desc">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px', width: '100%' }}>
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <ScrollReveal>
            <div className="services-cta-content">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
                alt="Handshake partnership"
                className="services-cta-img"
              />
              <div className="services-cta-text">
                <h2>Ready to Take the Next Step?</h2>
                <p>
                  Schedule a complimentary consultation with one of our advisors. We will review
                  your situation and recommend the best path forward, with no obligation.
                </p>
                <div className="services-cta-actions">
                  <Link to="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
                  <Link to="/calculator" className="btn btn-outline btn-lg">Try Calculator</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Services
