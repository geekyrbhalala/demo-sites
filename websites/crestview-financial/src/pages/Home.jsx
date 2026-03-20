import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Home.css'

function Home() {
  const [calcLoan, setCalcLoan] = useState(350000)
  const [calcRate, setCalcRate] = useState(6.5)
  const [calcTerm, setCalcTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    calculatePayment()
  }, [calcLoan, calcRate, calcTerm])

  const calculatePayment = () => {
    const principal = calcLoan
    const monthlyRate = calcRate / 100 / 12
    const numPayments = calcTerm * 12

    if (monthlyRate === 0) {
      setMonthlyPayment((principal / numPayments).toFixed(2))
      return
    }

    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    setMonthlyPayment(payment.toFixed(2))
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterError('')
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.')
      return
    }
    setShowModal(true)
    setNewsletterEmail('')
  }

  const testimonials = [
    {
      name: 'Robert & Sarah Chen',
      role: 'First-Time Homebuyers',
      text: 'Crestview made our dream of homeownership a reality. They found us a rate we never thought possible and guided us through every step. We closed in under 30 days.',
      rating: 5
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Medical Professional',
      text: 'As a physician with complex income, other brokers couldn\'t help. Crestview understood my situation immediately and secured approval for my practice expansion loan within two weeks.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Real Estate Investor',
      text: 'I\'ve worked with many brokers over 20 years. Crestview is in a league of their own. Their market insight and negotiation skills have saved me hundreds of thousands in interest.',
      rating: 5
    }
  ]

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'Residential Mortgages',
      desc: 'Competitive rates for first-time buyers, move-up buyers, and luxury properties. Access to 50+ lenders for the best terms.',
      link: '/services'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Financial Planning',
      desc: 'Comprehensive wealth management strategies tailored to your goals. Retirement planning, investment advisory, and portfolio optimization.',
      link: '/services'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Insurance Advisory',
      desc: 'Life, home, and business insurance solutions. We analyze your coverage needs and find policies that protect what matters most.',
      link: '/services'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      title: 'Tax Advisory',
      desc: 'Strategic tax planning and preparation services for individuals and businesses. Maximize deductions and minimize liabilities.',
      link: '/services'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="Corporate skyline"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content container">
          <div className="hero-text">
            <span className="hero-badge">Trusted Since 2008</span>
            <h1 className="hero-title">Navigate Your Financial Future with Confidence</h1>
            <p className="hero-subtitle">
              Expert mortgage brokerage and financial advisory. We help families and businesses
              secure their financial future with personalized strategies and unmatched market access.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
              <Link to="/calculator" className="btn btn-secondary btn-lg">Calculate Payment</Link>
            </div>
            <div className="hero-trust">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>NMLS #123456 | Insured & Licensed in All 50 States</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-number"><CountUp end={15} suffix="+" /></span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number"><CountUp end={2500} suffix="+" /></span>
              <span className="trust-label">Clients Served</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number"><CountUp prefix="$" end={500} suffix="M+" /></span>
              <span className="trust-label">Assets Managed</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number"><CountUp end={4.9} decimals={1} suffix="★" /></span>
              <span className="trust-label">Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Comprehensive Financial Services</h2>
            <p className="section-subtitle">
              From securing your first mortgage to planning your retirement, we provide
              end-to-end financial solutions tailored to your unique situation.
            </p>
          </ScrollReveal>
          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link to={service.link} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                  <span className="service-card-link">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator Widget */}
      <section className="section calc-section">
        <div className="container">
          <div className="calc-wrapper">
            <ScrollReveal direction="left">
              <div className="calc-info">
                <h2>Quick Mortgage Calculator</h2>
                <p>
                  Get an instant estimate of your monthly mortgage payment. Adjust the sliders
                  to see how different loan parameters affect your payment.
                </p>
                <Link to="/calculator" className="btn btn-primary" style={{ marginTop: '16px' }}>
                  Full Calculator
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="calc-widget">
                <div className="calc-field">
                  <label className="calc-label">
                    Loan Amount
                    <span className="calc-value">${calcLoan.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={calcLoan}
                    onChange={(e) => setCalcLoan(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>
                <div className="calc-field">
                  <label className="calc-label">
                    Interest Rate
                    <span className="calc-value">{calcRate}%</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.1"
                    value={calcRate}
                    onChange={(e) => setCalcRate(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>
                <div className="calc-field">
                  <label className="calc-label">
                    Loan Term
                    <span className="calc-value">{calcTerm} years</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="5"
                    value={calcTerm}
                    onChange={(e) => setCalcTerm(Number(e.target.value))}
                    className="calc-slider"
                  />
                </div>
                <div className="calc-result">
                  <span className="calc-result-label">Estimated Monthly Payment</span>
                  <span className="calc-result-amount">
                    ${monthlyPayment ? Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '---'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Hear from real clients who trusted Crestview to guide them through
              life's most important financial decisions.
            </p>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="featured-section">
        <div className="container">
          <p className="featured-label">Featured In</p>
          <div className="featured-logos">
            <span className="featured-logo">Forbes</span>
            <span className="featured-logo">Bloomberg</span>
            <span className="featured-logo">WSJ</span>
            <span className="featured-logo">CNBC</span>
            <span className="featured-logo">Financial Times</span>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter-content">
              <h2>Stay Ahead of the Market</h2>
              <p>
                Get weekly insights on mortgage rates, market trends, and financial planning
                strategies delivered to your inbox.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => { setNewsletterEmail(e.target.value); setNewsletterError(''); }}
                    className={`newsletter-input ${newsletterError ? 'error' : ''}`}
                  />
                  <button type="submit" className="btn btn-primary newsletter-btn">Subscribe</button>
                </div>
                {newsletterError && <span className="form-error" style={{ color: '#ff8a80', marginTop: '8px', display: 'block' }}>{newsletterError}</span>}
              </form>
              <p className="newsletter-disclaimer">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Welcome Aboard!">
        <p>Thank you for subscribing to the Crestview Financial newsletter. You'll receive our latest insights and market updates every week.</p>
      </Modal>
    </div>
  )
}

export default Home
