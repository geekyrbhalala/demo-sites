import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

function Home() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <PortfolioPreview />
      <WhyChoose />
      <StatsSection />
      <TestimonialsSection />
      <SeasonalTip />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920" alt="Beautiful landscaped garden" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <span className="hero-label">Professional Landscaping Since 2009</span>
        <h1>Transform Your<br/>Outdoor Space</h1>
        <p className="hero-subtitle">
          Expert landscaping, garden design, and property maintenance that brings your dream outdoor living to life.
        </p>
        <div className="hero-actions">
          <Link to="/estimates" className="btn btn-accent">Get Free Estimate</Link>
          <Link to="/portfolio" className="btn btn-light">View Our Work</Link>
        </div>
        <div className="hero-badges">
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>ISA Certified</span>
          </div>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Eco-Friendly</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: '🌿', title: 'Lawn Care', desc: 'Mowing, fertilizing, aeration, and weed control for a lush, healthy lawn year-round.', link: '/services' },
    { icon: '🌸', title: 'Garden Design', desc: 'Custom flower beds, native plantings, and ornamental gardens tailored to your vision.', link: '/services' },
    { icon: '🧱', title: 'Hardscaping', desc: 'Patios, walkways, retaining walls, and outdoor living spaces built to last.', link: '/services' },
    { icon: '🌳', title: 'Tree Service', desc: 'Professional trimming, removal, planting, and health assessments by certified arborists.', link: '/services' },
    { icon: '💧', title: 'Irrigation', desc: 'Smart irrigation systems — installation, repair, and seasonal adjustments for efficiency.', link: '/services' },
    { icon: '🍂', title: 'Seasonal', desc: 'Spring cleanup, fall preparation, snow removal, and year-round property maintenance.', link: '/seasonal' },
  ]

  return (
    <section className="section services-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Our Services</h2>
            <p>Comprehensive landscaping solutions for every season and every need.</p>
            <div className="section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Link to={service.link} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-link">Learn More &rarr;</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioPreview() {
  const projects = [
    { img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800', title: 'Modern Garden Oasis', type: 'Residential', desc: 'Complete backyard transformation with native plantings and stone pathways.' },
    { img: 'https://images.unsplash.com/photo-1564429238961-bf8b07a93455?w=800', title: 'Luxury Patio Design', type: 'Hardscape', desc: 'Custom flagstone patio with built-in fire pit and outdoor kitchen.' },
    { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', title: 'Estate Landscaping', type: 'Commercial', desc: 'Full property renovation with irrigation, lighting, and seasonal plantings.' },
  ]

  return (
    <section className="section portfolio-preview" style={{ background: 'var(--sage)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Our Work</span>
            <h2>Featured Projects</h2>
            <p>See how we have transformed outdoor spaces across the Portland area.</p>
            <div className="section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="portfolio-card">
                <div className="portfolio-img">
                  <img src={project.img} alt={project.title} loading="lazy" />
                  <span className="portfolio-badge">{project.type}</span>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const features = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind. We carry comprehensive liability coverage on every project.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'ISA Certified', desc: 'Our arborists hold ISA certification, ensuring expert tree care backed by industry-leading knowledge.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>, title: 'Eco-Friendly', desc: 'We use organic fertilizers, native plants, and sustainable practices to protect our local ecosystem.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>, title: '15+ Years Experience', desc: 'Since 2009, we have completed over 2,000 projects. Our experience means quality results, every time.' },
  ]

  return (
    <section className="section why-choose">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Why Us</span>
            <h2>Why Choose Evergreen</h2>
            <p>We are not just landscapers — we are outdoor living specialists committed to excellence.</p>
            <div className="section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="features-grid">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { number: '2,000+', label: 'Projects Completed' },
    { number: '567', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'Sarah Mitchell', role: 'Homeowner, Lake Oswego', text: 'Evergreen completely transformed our backyard. The garden design is stunning, and their crew was professional and respectful of our property. Could not recommend them more highly.', rating: 5 },
    { name: 'David Chen', role: 'Property Manager', text: 'We use Evergreen for all our commercial properties. Their seasonal maintenance keeps everything looking pristine, and they are always responsive to our needs.', rating: 5 },
    { name: 'Amanda Ross', role: 'Homeowner, Beaverton', text: 'The patio and walkway they designed exceeded our expectations. From concept to completion, the team was fantastic. Our neighbors are jealous!', rating: 5 },
  ]

  return (
    <section className="section testimonials-section" style={{ background: 'var(--sage)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>We let our work and our clients speak for themselves.</p>
            <div className="section-divider"></div>
          </div>
        </ScrollReveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="var(--highlight)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeasonalTip() {
  return (
    <section className="section seasonal-tip">
      <div className="container">
        <ScrollReveal>
          <div className="seasonal-tip-card">
            <div className="seasonal-tip-content">
              <span className="section-label">Seasonal Tip</span>
              <h2>Spring Is the Perfect Time to Plan</h2>
              <p>
                Schedule your spring cleanup and garden renovation now. Early planning ensures your yard is ready to bloom when the warm weather arrives. Our team will assess your property, recommend seasonal plantings, and create a maintenance plan tailored to your landscape.
              </p>
              <div className="seasonal-tip-actions">
                <Link to="/seasonal" className="btn btn-primary">View Seasonal Guide</Link>
                <Link to="/estimates" className="btn btn-secondary">Book Spring Cleanup</Link>
              </div>
            </div>
            <div className="seasonal-tip-image">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800" alt="Spring flowers blooming" loading="lazy" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <img src="https://images.unsplash.com/photo-1558635924-ae37e19a907d?w=1920" alt="Beautiful lawn" />
        <div className="cta-overlay"></div>
      </div>
      <div className="container cta-content">
        <ScrollReveal>
          <h2>Ready to Transform Your Landscape?</h2>
          <p>Get a free estimate today and discover what Evergreen can do for your property.</p>
          <div className="cta-actions">
            <Link to="/estimates" className="btn btn-accent">Get Free Estimate</Link>
            <a href="tel:5035558733" className="btn btn-light">Call (503) 555-TREE</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Home
