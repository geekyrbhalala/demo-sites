import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const featuredDishes = [
  {
    name: 'Truffle Risotto',
    description: 'Arborio rice, black truffle, aged parmesan, white wine reduction',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'
  },
  {
    name: 'Seared Duck Breast',
    description: 'Cherry gastrique, roasted root vegetables, pommes anna',
    price: '$56',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800'
  },
  {
    name: 'Lobster Thermidor',
    description: 'Cognac cream sauce, gruyere gratin, herb butter, asparagus',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
  },
  {
    name: 'Wagyu Carpaccio',
    description: 'A5 wagyu, truffle aioli, capers, micro arugula, lemon oil',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800'
  },
  {
    name: 'Pan-Seared Scallops',
    description: 'Cauliflower puree, brown butter, crispy pancetta, pea shoots',
    price: '$52',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
  },
  {
    name: 'Chocolate Soufflé',
    description: 'Valrhona dark chocolate, Grand Marnier, vanilla bean crème',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800'
  }
]

const testimonials = [
  {
    text: '"An unforgettable evening. The truffle risotto alone was worth the visit, and the wine pairing elevated every course to perfection."',
    author: 'Alexandra M.',
    role: 'Food Critic, NY Times'
  },
  {
    text: '"Savoria is not just a restaurant — it is an experience. From the ambiance to the final dessert, every detail whispers sophistication."',
    author: 'James R.',
    role: 'Michelin Inspector'
  },
  {
    text: '"We celebrated our anniversary here and it was magical. The tasting menu is a journey through flavor that you will never forget."',
    author: 'Catherine & Paul L.',
    role: 'Regular Guests'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800'
]

function Home() {
  const [parallaxY, setParallaxY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setParallaxY(window.scrollY * 0.4)
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page-wrapper home-page">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div
          className="hero-bg"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
            alt="Fine dining ambiance"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tagline-top">Est. 2018 — New York</span>
          <h1 className="hero-title">
            Where Every Dish<br />Tells a Story
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Italian-French Fusion Fine Dining
          </p>
          <Link to="/reservations" className="btn-primary hero-cta">
            Reserve Your Table
          </Link>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy section-padding">
        <div className="container">
          <div className="philosophy-grid">
            <ScrollReveal direction="left" className="philosophy-image">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
                alt="Savoria interior"
              />
              <div className="philosophy-image-border"></div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="philosophy-content">
              <span className="section-label">Our Philosophy</span>
              <h2>A Celebration of Culinary Artistry</h2>
              <div className="gold-line" style={{ margin: '1.5rem 0' }}></div>
              <p>
                At Savoria, we believe dining is more than sustenance — it is a ritual,
                an art form, and a celebration of life's finest moments. Our kitchen
                bridges the warmth of Italian tradition with the precision of French technique,
                creating dishes that honor both heritage and innovation.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                Every ingredient is sourced with intention, every plate composed with passion,
                and every evening crafted to become a cherished memory. Under the guidance of
                Chef Laurent Marchetti, our team transforms the finest seasonal ingredients
                into culinary poetry.
              </p>
              <Link to="/about" className="btn-secondary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Our Story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured section-padding">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>The Menu</span>
            <h2 className="section-title">Signature Creations</h2>
            <p className="section-subtitle">Crafted with passion, served with elegance</p>
          </ScrollReveal>
          <div className="featured-grid">
            {featuredDishes.map((dish, index) => (
              <ScrollReveal key={dish.name} delay={index * 100}>
                <div className="dish-card">
                  <div className="dish-image-wrap">
                    <img src={dish.image} alt={dish.name} />
                    <div className="dish-overlay">
                      <span className="dish-price">{dish.price}</span>
                    </div>
                  </div>
                  <div className="dish-info">
                    <h4>{dish.name}</h4>
                    <p>{dish.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/menu" className="btn-secondary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <div className="testimonials-bg">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800"
            alt="Wine glass"
          />
        </div>
        <div className="testimonials-overlay"></div>
        <div className="container testimonials-container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block', color: 'var(--gold)' }}>Testimonials</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="gold-line"></div>
          </ScrollReveal>
          <div className="testimonials-slider">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide ${i === activeTestimonial ? 'active' : ''}`}
              >
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery section-padding">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Gallery</span>
            <h2 className="section-title">A Feast for the Eyes</h2>
            <p className="section-subtitle">#SavoriaExperience</p>
          </ScrollReveal>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="gallery-item">
                  <img src={img} alt={`Gallery image ${i + 1}`} />
                  <div className="gallery-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-inner">
              <h2>Begin Your Culinary Journey</h2>
              <p>Experience Italian-French fusion at its finest. Reserve your table for an evening you will treasure forever.</p>
              <Link to="/reservations" className="btn-primary">Make a Reservation</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
