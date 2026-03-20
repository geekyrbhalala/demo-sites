import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Pricing.css'

const plans = [
  {
    name: 'Drop-In',
    price: '22',
    period: 'per class',
    description: 'Perfect for visitors and occasional practitioners.',
    features: {
      'Unlimited classes': false,
      'Single class access': true,
      'All class types': true,
      'Mat rental included': true,
      'Workshop discount': false,
      'Guest passes': false,
      'Priority booking': false,
      'Retail discount': false,
      'Locker access': false,
    },
  },
  {
    name: '5-Class Pack',
    price: '90',
    period: 'per pack',
    description: 'Flexible pack for regular practice. Valid for 2 months.',
    features: {
      'Unlimited classes': false,
      '5 class credits': true,
      'All class types': true,
      'Mat rental included': true,
      'Workshop discount': false,
      'Guest passes': false,
      'Priority booking': false,
      'Retail discount': false,
      'Locker access': false,
    },
  },
  {
    name: 'Monthly Unlimited',
    price: '139',
    period: 'per month',
    description: 'For dedicated practitioners. Our most popular option.',
    popular: true,
    features: {
      'Unlimited classes': true,
      'All class types': true,
      'Mat rental included': true,
      '10% workshop discount': true,
      '1 guest pass/month': true,
      'Priority booking': true,
      'Retail discount': false,
      'Dedicated locker': false,
      'Private session discount': false,
    },
  },
  {
    name: 'Annual Membership',
    price: '1,188',
    period: 'per year',
    description: 'Best value — save $480/year vs. monthly billing.',
    best: true,
    features: {
      'Unlimited classes': true,
      'All class types': true,
      'Mat rental included': true,
      '20% workshop discount': true,
      '2 guest passes/month': true,
      'Priority booking': true,
      '10% retail discount': true,
      'Dedicated locker': true,
      'Private session discount': true,
    },
  },
]

const faqs = [
  {
    question: 'What is your cancellation policy?',
    answer: 'Monthly memberships can be cancelled anytime with 30 days notice. Annual memberships can be cancelled after 6 months with a $100 early termination fee. Class pack credits are non-refundable but transferable.',
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes! Monthly members can freeze for up to 2 months per year at no cost. Annual members can freeze for up to 3 months. Simply notify us 7 days before your billing date.',
  },
  {
    question: 'How far in advance can I book a class?',
    answer: 'Priority booking members can book 7 days in advance. Standard members can book 3 days in advance. Drop-in and class pack holders can book 24 hours in advance.',
  },
  {
    question: 'What happens if a class is full?',
    answer: 'You can join the waitlist and we will automatically notify you if a spot opens. We recommend booking early, especially for popular evening and weekend classes.',
  },
  {
    question: 'Do you offer a trial period?',
    answer: 'Yes! New students get their first week completely free — unlimited classes, no commitment. Just register and start practicing.',
  },
  {
    question: 'Are there student or senior discounts?',
    answer: 'We offer 15% off monthly and annual memberships for students (with valid ID) and seniors (65+). These discounts cannot be combined with other promotions.',
  },
]

function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Simple, Honest Pricing</h1>
            <p className="pricing-hero-accent">invest in your wellbeing</p>
            <p className="pricing-hero-desc">No hidden fees, no contracts, no pressure. Choose the plan that fits your practice and your life.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pricing-promo">
        <div className="container">
          <ScrollReveal>
            <div className="promo-banner">
              <div className="promo-blob"></div>
              <span className="promo-accent">New to Zenflow?</span>
              <h2>Your First Week is Free</h2>
              <p>Unlimited classes for 7 days. No credit card required. No strings attached. Just yoga.</p>
              <Link to="/register" className="btn-primary">Start Your Free Week</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="container">
          <div className="pricing-cards-grid">
            {plans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`pricing-full-card ${plan.popular ? 'popular' : ''} ${plan.best ? 'best' : ''}`}>
                  {plan.popular && <span className="badge-popular">Most Popular</span>}
                  {plan.best && <span className="badge-best">Best Value</span>}
                  <div className="pricing-card-blob"></div>
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="pricing-dollar">$</span>
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period">/{plan.period.split(' ')[1]}</span>
                  </div>
                  <p className="pricing-desc">{plan.description}</p>
                  <ul className="pricing-features">
                    {Object.entries(plan.features).map(([feature, included], fi) => (
                      <li key={fi} className={included ? 'included' : 'excluded'}>
                        {included ? (
                          <svg viewBox="0 0 20 20" width="16" height="16">
                            <path d="M5 10 L8 13 L15 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg viewBox="0 0 20 20" width="16" height="16">
                            <path d="M6 6 L14 14 M14 6 L6 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/register" className={plan.popular || plan.best ? 'btn-primary pricing-cta-btn' : 'btn-secondary pricing-cta-btn'}>
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="discounts-section">
        <div className="container">
          <div className="discounts-grid">
            <ScrollReveal>
              <div className="discount-card">
                <div className="discount-icon">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <path d="M24 4 L28 16 L40 16 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 L20 16Z" fill="none" stroke="var(--moss)" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Student Discount</h3>
                <span className="discount-amount">15% Off</span>
                <p>Valid student ID required. Applies to monthly and annual memberships.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="discount-card">
                <div className="discount-icon">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <circle cx="24" cy="20" r="10" fill="none" stroke="var(--moss)" strokeWidth="2"/>
                    <path d="M10 42 C10 34, 16 28, 24 28 C32 28, 38 34, 38 42" fill="none" stroke="var(--moss)" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Senior Discount</h3>
                <span className="discount-amount">15% Off</span>
                <p>For practitioners 65 and older. Applies to monthly and annual memberships.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="discount-card">
                <div className="discount-icon">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <rect x="8" y="12" width="32" height="24" rx="4" fill="none" stroke="var(--moss)" strokeWidth="2"/>
                    <path d="M8 20 L40 20" stroke="var(--moss)" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Corporate Packages</h3>
                <span className="discount-amount">Custom</span>
                <p>Tailored wellness programs for your team. Contact us for a custom quote.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">everything you need to know</p>
          </ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.question}</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" className="faq-chevron">
                      <path d="M6 9 L12 15 L18 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="pricing-cta-card">
              <h2>Ready to Begin?</h2>
              <p className="pricing-cta-accent">your mat is waiting</p>
              <p>Start with a free week, no commitment. Experience the Zenflow difference for yourself.</p>
              <div className="pricing-cta-buttons">
                <Link to="/register" className="btn-primary">Start Free Trial</Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Pricing
