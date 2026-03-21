import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Services.css'

function Services() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const services = [
    {
      id: 'lawn',
      icon: '🌿',
      title: 'Lawn Maintenance',
      desc: 'A healthy, vibrant lawn is the foundation of any beautiful property. Our comprehensive lawn care program keeps your turf looking its best throughout every season.',
      features: ['Weekly / bi-weekly mowing & edging', 'Custom fertilization programs', 'Core aeration & overseeding', 'Weed & pest control', 'Soil testing & amendment', 'Dethatching & scalping'],
      img: 'https://images.unsplash.com/photo-1558635924-ae37e19a907d?w=800',
      price: '$45/visit',
    },
    {
      id: 'garden',
      icon: '🌸',
      title: 'Garden Design',
      desc: 'Transform your outdoor space into a living work of art. Our garden designers create custom landscapes that reflect your personal style while thriving in the Pacific Northwest climate.',
      features: ['Custom flower bed design & installation', 'Native plant gardens', 'Perennial & annual planting plans', 'Raised garden beds', 'Pollinator & butterfly gardens', 'Container garden design'],
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      price: '$500+',
    },
    {
      id: 'hardscape',
      icon: '🧱',
      title: 'Hardscaping',
      desc: 'Extend your living space outdoors with beautifully crafted hardscape features. From elegant patios to functional retaining walls, we build structures that enhance your landscape and stand the test of time.',
      features: ['Patios & outdoor living areas', 'Walkways & stepping stones', 'Retaining walls & terracing', 'Fire pits & outdoor fireplaces', 'Water features & fountains', 'Outdoor kitchens & pergolas'],
      img: 'https://images.unsplash.com/photo-1564429238961-bf8b07a93455?w=800',
      price: '$2,000+',
    },
    {
      id: 'tree',
      icon: '🌳',
      title: 'Tree Service',
      desc: 'Protect your property and preserve the health of your trees with our ISA-certified arborist services. We handle everything from routine trimming to emergency removal.',
      features: ['Crown trimming & shaping', 'Tree removal (any size)', 'Stump grinding & removal', 'New tree planting & selection', 'Tree health assessments', 'Emergency storm damage cleanup'],
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      price: '$150+',
    },
    {
      id: 'irrigation',
      icon: '💧',
      title: 'Irrigation Systems',
      desc: 'Efficient watering is essential for a thriving landscape and responsible water usage. Our irrigation experts design, install, and maintain systems that keep your property green while conserving resources.',
      features: ['Sprinkler system design & install', 'Drip irrigation for gardens', 'Smart controller upgrades', 'Seasonal adjustments & winterization', 'Leak detection & repair', 'Rain sensor & weather integration'],
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
      price: '$800+',
    },
    {
      id: 'seasonal',
      icon: '🍂',
      title: 'Seasonal Services',
      desc: 'Keep your property in peak condition year-round with our seasonal maintenance programs. We handle the heavy lifting so you can enjoy your outdoor spaces every season.',
      features: ['Spring cleanup & bed prep', 'Summer maintenance programs', 'Fall leaf removal & winterizing', 'Holiday lighting installation', 'Snow & ice management', 'Year-round property monitoring'],
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      price: '$75/visit',
    },
  ]

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920" alt="Landscaping services" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>What We Offer</span>
          <h1>Our Services</h1>
          <p>Comprehensive landscaping solutions tailored to your property and your vision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((service, i) => (
            <ScrollReveal key={service.id}>
              <div className={`service-detail ${i % 2 !== 0 ? 'reverse' : ''}`} id={service.id}>
                <div className="service-detail-content">
                  <span className="service-detail-icon">{service.icon}</span>
                  <h2>{service.title}</h2>
                  <p className="service-detail-desc">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((f, j) => (
                      <li key={j}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-detail-footer">
                    <span className="service-price">Starting at <strong>{service.price}</strong></span>
                    <Link to="/estimates" className="btn btn-primary">Request Quote</Link>
                  </div>
                </div>
                <div className="service-detail-image">
                  <img src={service.img} alt={service.title} loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2>Not Sure What You Need?</h2>
            <p>Schedule a free on-site consultation and our experts will assess your property and recommend the best services.</p>
            <Link to="/estimates" className="btn btn-accent">Get Free Estimate</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Services
