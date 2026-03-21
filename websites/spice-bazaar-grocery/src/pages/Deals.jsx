import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Deals.css'

const weeklySpecials = [
  { name: 'Premium Basmati Rice', weight: '5 kg', oldPrice: 18.99, newPrice: 14.99, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', savings: '21%' },
  { name: 'Kashmiri Chili Powder', weight: '250g', oldPrice: 8.99, newPrice: 5.99, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400', savings: '33%' },
  { name: 'Darjeeling First Flush', weight: '200g', oldPrice: 15.99, newPrice: 11.49, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400', savings: '28%' },
  { name: 'Mixed Lentil Pack', weight: '2 kg', oldPrice: 12.99, newPrice: 8.99, img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400', savings: '31%' },
]

const bundles = [
  {
    name: 'Curry Essentials Pack',
    items: ['Turmeric 200g', 'Cumin Powder 200g', 'Coriander Powder 200g', 'Red Chili 200g', 'Garam Masala 100g'],
    oldPrice: 28.99,
    newPrice: 19.99,
    img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800',
  },
  {
    name: 'Dal Lovers Kit',
    items: ['Toor Dal 1kg', 'Moong Dal 1kg', 'Chana Dal 1kg', 'Tadka Masala 100g', 'Hing 50g'],
    oldPrice: 32.49,
    newPrice: 24.99,
    img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=800',
  },
  {
    name: 'Chai Collection',
    items: ['Masala Chai 250g', 'Darjeeling Tea 200g', 'Cardamom Pods 50g', 'Jaggery 500g'],
    oldPrice: 34.99,
    newPrice: 26.99,
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
  },
]

function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date()
      const next = new Date(now)
      next.setDate(now.getDate() + (7 - now.getDay()))
      next.setHours(23, 59, 59, 999)
      return next
    }

    const target = getNextSunday()

    const interval = setInterval(() => {
      const now = new Date()
      const diff = target - now

      if (diff <= 0) {
        clearInterval(interval)
        return
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown">
      <div className="countdown-block">
        <span className="countdown-number price">{String(time.days).padStart(2, '0')}</span>
        <span className="countdown-label">Days</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-block">
        <span className="countdown-number price">{String(time.hours).padStart(2, '0')}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-block">
        <span className="countdown-number price">{String(time.mins).padStart(2, '0')}</span>
        <span className="countdown-label">Mins</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-block">
        <span className="countdown-number price">{String(time.secs).padStart(2, '0')}</span>
        <span className="countdown-label">Secs</span>
      </div>
    </div>
  )
}

function Deals() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="deals-page">
      <section className="deals-hero">
        <div className="container">
          <h1>Weekly Deals & Offers</h1>
          <p>Fresh deals every week — stock up on your favorites and save big</p>
          <CountdownTimer />
          <span className="deals-hero-note">Deals refresh every Sunday at midnight</span>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">This Week's Specials</h2>
            <p className="section-subtitle">Limited time prices on popular items</p>
          </ScrollReveal>
          <div className="specials-grid">
            {weeklySpecials.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <div className="special-card card">
                  <div className="special-badge">{item.savings} OFF</div>
                  <div className="special-img">
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>
                  <div className="special-body">
                    <h3>{item.name}</h3>
                    <span className="special-weight">{item.weight}</span>
                    <div className="special-prices">
                      <span className="price special-old">${item.oldPrice.toFixed(2)}</span>
                      <span className="price special-new">${item.newPrice.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary btn-small" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setShowModal(true)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Bundle Deals</h2>
            <p className="section-subtitle">Curated packs for the perfect pantry</p>
          </ScrollReveal>
          <div className="bundles-grid">
            {bundles.map((bundle, i) => (
              <ScrollReveal key={bundle.name} delay={i * 100}>
                <div className="bundle-card card">
                  <div className="bundle-img">
                    <img src={bundle.img} alt={bundle.name} loading="lazy" />
                  </div>
                  <div className="bundle-body">
                    <h3>{bundle.name}</h3>
                    <ul className="bundle-items">
                      {bundle.items.map(item => (
                        <li key={item}>
                          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bundle-prices">
                      <span className="price bundle-old">${bundle.oldPrice.toFixed(2)}</span>
                      <span className="price bundle-new">${bundle.newPrice.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => setShowModal(true)}>
                      Add Bundle to Cart
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Rewards */}
      <section className="section loyalty-section">
        <div className="container">
          <ScrollReveal>
            <div className="loyalty-inner">
              <div className="loyalty-content">
                <span className="deals-tag" style={{ background: 'var(--green)' }}>Loyalty Program</span>
                <h2>Join Spice Rewards</h2>
                <p>
                  Earn points on every purchase and unlock exclusive discounts, early access to
                  seasonal collections, and birthday surprises.
                </p>
                <div className="loyalty-tiers">
                  <div className="tier">
                    <span className="tier-name">Bronze</span>
                    <span className="price">1x Points</span>
                  </div>
                  <div className="tier">
                    <span className="tier-name">Silver</span>
                    <span className="price">1.5x Points</span>
                  </div>
                  <div className="tier">
                    <span className="tier-name">Gold</span>
                    <span className="price">2x Points</span>
                  </div>
                </div>
                <Link to="/register" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Sign Up Free
                </Link>
              </div>
              <div className="loyalty-visual">
                <div className="loyalty-card-preview">
                  <div className="loyalty-card-top">
                    <span>SPICE BAZAAR</span>
                    <span>GOLD</span>
                  </div>
                  <div className="loyalty-card-number price">**** **** **** 7890</div>
                  <div className="loyalty-card-bottom">
                    <span>Spice Rewards Member</span>
                    <span className="price">2,450 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Seasonal Promotions */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Seasonal Promotions</h2>
            <p className="section-subtitle">Special offers for the season</p>
          </ScrollReveal>
          <div className="promos-grid">
            <ScrollReveal delay={0}>
              <div className="promo-card" style={{ background: 'linear-gradient(135deg, #E65100, #BF360C)' }}>
                <h3>Spring Festival Sale</h3>
                <p>Up to 30% off on festive sweets, snacks, and gift hampers</p>
                <span className="price promo-discount">30% OFF</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="promo-card" style={{ background: 'linear-gradient(135deg, #2E7D32, #1B5E20)' }}>
                <h3>Organic Collection</h3>
                <p>Try our new organic spice range — buy 3 get 1 free</p>
                <span className="price promo-discount">B3G1 FREE</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="promo-card" style={{ background: 'linear-gradient(135deg, #5D4037, #3E2723)' }}>
                <h3>Bulk Buy Savings</h3>
                <p>Save 15% on orders above $75 — perfect for families</p>
                <span className="price promo-discount">15% OFF</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Added to Cart!"
        message="Great deal! Your item has been added to the cart."
      />
    </div>
  )
}

export default Deals
