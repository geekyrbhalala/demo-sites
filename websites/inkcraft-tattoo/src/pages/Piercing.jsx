import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Piercing.css'

const piercingTypes = [
  { name: 'Lobe', category: 'Ear', price: '$30', healing: '6-8 weeks', desc: 'Classic earlobe piercing. The most popular and versatile piercing, perfect for beginners.' },
  { name: 'Helix', category: 'Ear', price: '$40', healing: '3-6 months', desc: 'Upper ear cartilage piercing. Can be placed anywhere along the outer rim for a sleek look.' },
  { name: 'Tragus', category: 'Ear', price: '$45', healing: '3-6 months', desc: 'Small cartilage flap in front of the ear canal. Subtle yet striking, great for studs.' },
  { name: 'Conch', category: 'Ear', price: '$50', healing: '6-9 months', desc: 'Inner ear cartilage. Can be worn with a stud or hoop for dramatically different aesthetics.' },
  { name: 'Industrial', category: 'Ear', price: '$60', healing: '6-12 months', desc: 'Two holes connected by a single barbell. Bold statement piece across the upper ear.' },
  { name: 'Daith', category: 'Ear', price: '$50', healing: '6-9 months', desc: 'Inner cartilage fold. Beautiful with a seamless ring, often sought for migraine relief.' },
  { name: 'Nostril', category: 'Nose', price: '$40', healing: '2-4 months', desc: 'Classic nose piercing on either side. Versatile for studs, hoops, and L-shaped jewelry.' },
  { name: 'Septum', category: 'Nose', price: '$50', healing: '6-8 weeks', desc: 'Through the sweet spot of the nasal septum. Easy to hide, bold when shown.' },
  { name: 'Labret', category: 'Lip', price: '$45', healing: '6-8 weeks', desc: 'Below the lower lip, centered. Classic placement for a subtle but noticeable accent.' },
  { name: 'Monroe', category: 'Lip', price: '$45', healing: '6-8 weeks', desc: 'Above the upper lip, off-center. Named after Marilyn Monroe\'s iconic beauty mark.' },
  { name: 'Eyebrow', category: 'Eyebrow', price: '$45', healing: '6-8 weeks', desc: 'Vertical piercing through the eyebrow ridge. Edgy and expressive, typically with a curved barbell.' },
  { name: 'Navel', category: 'Navel', price: '$50', healing: '6-12 months', desc: 'Belly button piercing, typically through the upper rim. Stunning with dangling jewelry.' },
]

const jewelry = [
  { name: 'Titanium Studs', price: 'From $15', desc: 'Implant-grade titanium. Hypoallergenic, lightweight, available in various colors.', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200' },
  { name: 'Gold Hoops', price: 'From $35', desc: '14k solid gold seamless rings and clickers. Elegant and safe for healed piercings.', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200' },
  { name: 'Gemstone Collection', price: 'From $25', desc: 'CZ and genuine gemstone ends in various cuts. Add sparkle to any piercing.', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200' },
  { name: 'Custom Pieces', price: 'From $50', desc: 'Bespoke jewelry designed to your specifications. Unique pieces for unique people.', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200' },
]

const aftercareFaqs = [
  { q: 'How do I clean my new piercing?', a: 'Clean 2-3 times daily with sterile saline solution. Spray directly on the piercing, let sit for 30 seconds, then gently pat dry with clean gauze. Avoid cotton balls or Q-tips.' },
  { q: 'Can I change the jewelry early?', a: 'No. Keep the initial jewelry until fully healed. Changing too early can cause irritation, rejection, or infection. Your piercer will let you know when it\'s safe to switch.' },
  { q: 'What should I avoid during healing?', a: 'Avoid touching with unwashed hands, submerging in pools/lakes, sleeping directly on the piercing, using alcohol or peroxide, and applying makeup or skincare products near the area.' },
  { q: 'How do I know if it\'s infected?', a: 'Signs of infection include increasing pain after the first few days, spreading redness, green/yellow discharge, fever, and excessive swelling. If you suspect infection, contact us immediately — do not remove the jewelry.' },
  { q: 'Is some swelling normal?', a: 'Yes, mild swelling, redness, and clear/white discharge are normal parts of healing. Initial jewelry is sized to accommodate swelling. If swelling is severe or worsening after 5-7 days, contact us.' },
]

function Piercing() {
  const [openFaq, setOpenFaq] = useState(null)
  const [filterCat, setFilterCat] = useState('All')
  const categories = ['All', 'Ear', 'Nose', 'Lip', 'Eyebrow', 'Navel']

  const filtered = filterCat === 'All' ? piercingTypes : piercingTypes.filter(p => p.category === filterCat)

  return (
    <div className="piercing-page">
      <section className="piercing-hero">
        <div className="container">
          <h1 className="piercing-title">BODY PIERCING</h1>
          <p className="piercing-subtitle">Professional piercing with premium jewelry. APP standards, always.</p>
        </div>
      </section>

      {/* Piercing Types */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">PIERCING SERVICES</h2>
            <p className="section-subtitle">All piercings include implant-grade titanium starter jewelry</p>
          </ScrollReveal>

          <div className="piercing-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filterCat === c ? 'active' : ''}`}
                onClick={() => setFilterCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="piercing-grid">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <div className="piercing-card">
                  <div className="piercing-card-header">
                    <div>
                      <span className="piercing-category">{p.category}</span>
                      <h3>{p.name}</h3>
                    </div>
                    <div className="piercing-price">{p.price}</div>
                  </div>
                  <p className="piercing-desc">{p.desc}</p>
                  <div className="piercing-meta">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Healing: {p.healing}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jewelry */}
      <section className="section jewelry-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">JEWELRY SHOWCASE</h2>
            <p className="section-subtitle">Premium materials, stunning designs</p>
          </ScrollReveal>
          <div className="jewelry-grid">
            {jewelry.map((j, i) => (
              <ScrollReveal key={j.name} delay={i * 120}>
                <div className="jewelry-card">
                  <div className="jewelry-img">
                    <img src={j.img} alt={j.name} loading="lazy" />
                  </div>
                  <div className="jewelry-info">
                    <h3>{j.name}</h3>
                    <span className="jewelry-price">{j.price}</span>
                    <p>{j.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="section piercing-aftercare">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">AFTERCARE FAQ</h2>
            <p className="section-subtitle">Everything you need to know about healing</p>
          </ScrollReveal>
          <div className="piercing-faq-list">
            {aftercareFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" className="faq-plus-v" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="piercing-cta">
        <div className="container">
          <ScrollReveal>
            <div className="piercing-cta-content">
              <h2>READY FOR YOUR NEW PIERCING?</h2>
              <p>Walk-ins welcome, appointments preferred. All piercers are APP certified.</p>
              <Link to="/booking" className="btn-primary">Book Piercing</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Piercing
