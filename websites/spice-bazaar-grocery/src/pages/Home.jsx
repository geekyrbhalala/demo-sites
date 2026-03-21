import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Home.css'

const categories = [
  { name: 'Spices & Masalas', icon: '🌶️', desc: 'Whole & ground spices, masala blends' },
  { name: 'Lentils & Grains', icon: '🫘', desc: 'Dals, rice, millets, flours' },
  { name: 'Snacks & Sweets', icon: '🍪', desc: 'Namkeen, mithai, ready-to-eat' },
  { name: 'Beverages', icon: '🍵', desc: 'Chai, lassi mixes, juices' },
  { name: 'Fresh Produce', icon: '🥬', desc: 'Seasonal vegetables & herbs' },
  { name: 'Ready-to-Cook', icon: '🍛', desc: 'Curry pastes, meal kits, gravies' },
]

const featuredProducts = [
  { name: 'Kashmiri Red Chili', weight: '200g', price: '6.99', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400' },
  { name: 'Organic Turmeric', weight: '150g', price: '5.49', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400' },
  { name: 'Basmati Rice', weight: '5 kg', price: '14.99', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
  { name: 'Garam Masala', weight: '100g', price: '4.99', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400' },
  { name: 'Toor Dal', weight: '1 kg', price: '7.49', img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400' },
  { name: 'Masala Chai', weight: '250g', price: '8.99', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400' },
  { name: 'Cumin Seeds', weight: '200g', price: '5.99', img: 'https://images.unsplash.com/photo-1599909533601-aa1e5c1b1455?w=400' },
  { name: 'Mango Pickle', weight: '400g', price: '6.49', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400' },
]

const testimonials = [
  { name: 'Priya Sharma', text: 'The spices here are incredibly fresh — my curries have never tasted better! The staff is always helpful.', role: 'Regular Customer' },
  { name: 'Aiden Mitchell', text: 'I started cooking Indian food last year and Spice Bazaar has everything I need. Their recipe suggestions are fantastic.', role: 'Home Chef' },
  { name: 'Meera Patel', text: 'Reminds me of markets back home. The quality of lentils and spices is unmatched in this area.', role: 'Customer since 2012' },
]

function Home() {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [cartModal, setCartModal] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowModal(true)
      setEmail('')
    }
  }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920" alt="Colorful spices" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">Authentic Flavors,<br />Delivered Fresh</h1>
          <p className="hero-subtitle">
            Premium Indian spices, lentils, grains, and artisanal ingredients —
            sourced directly from trusted farms across India.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/deals" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
              Weekly Deals
            </Link>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="price">500+</span>
              <span>Products</span>
            </div>
            <div className="hero-badge">
              <span className="price">15+</span>
              <span>Years</span>
            </div>
            <div className="hero-badge">
              <span className="price">4.9★</span>
              <span>Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Everything you need for authentic Indian cooking</p>
          </ScrollReveal>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 80}>
                <Link to="/products" className="category-card">
                  <span className="category-icon">{cat.icon}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Handpicked favorites our customers love</p>
          </ScrollReveal>
          <div className="products-grid">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 60}>
                <div className="product-card card">
                  <div className="product-img">
                    <img src={product.img} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <span className="product-weight">{product.weight}</span>
                    <div className="product-bottom">
                      <span className="price product-price">${product.price}</span>
                      <button
                        className="btn btn-primary btn-small"
                        onClick={() => setCartModal(true)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Weekly Deals Banner */}
      <section className="deals-banner">
        <div className="container deals-banner-inner">
          <ScrollReveal direction="left">
            <div className="deals-text">
              <span className="deals-tag">This Week Only</span>
              <h2>Curry Essentials Bundle</h2>
              <p>Get turmeric, cumin, coriander, chili, and garam masala — all for one special price.</p>
              <div className="deals-price-row">
                <span className="price deals-old-price">$28.99</span>
                <span className="price deals-new-price">$19.99</span>
              </div>
              <Link to="/deals" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                View All Deals
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="deals-image">
              <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800" alt="Spice jars" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recipe of the Week */}
      <section className="recipe-week section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Recipe of the Week</h2>
            <p className="section-subtitle">Cook something amazing with our ingredients</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="recipe-featured">
              <div className="recipe-featured-img">
                <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200" alt="Butter Chicken" />
              </div>
              <div className="recipe-featured-content">
                <span className="recipe-badge">Chef's Pick</span>
                <h3>Classic Butter Chicken</h3>
                <p>
                  Rich, creamy, and perfectly spiced — this butter chicken recipe uses our freshly
                  ground garam masala and Kashmiri chili for an authentic flavor that will transport
                  you straight to Delhi.
                </p>
                <div className="recipe-meta">
                  <span><strong>Prep:</strong> 20 min</span>
                  <span><strong>Cook:</strong> 40 min</span>
                  <span><strong>Serves:</strong> 4</span>
                  <span><strong>Level:</strong> Medium</span>
                </div>
                <Link to="/recipes" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  View Full Recipe
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Join thousands of happy home cooks</p>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
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

      {/* Newsletter */}
      <section className="newsletter section">
        <div className="container">
          <ScrollReveal>
            <div className="newsletter-inner">
              <h2>Stay in the Spice Loop</h2>
              <p>Get weekly deals, new arrivals, and exclusive recipes delivered to your inbox.</p>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to the Family!"
        message="You've been subscribed to our newsletter. Expect delicious recipes and exclusive deals every week."
      />

      <Modal
        isOpen={cartModal}
        onClose={() => setCartModal(false)}
        title="Added to Cart!"
        message="Your item has been added. Continue shopping or proceed to checkout."
      />
    </div>
  )
}

export default Home
