import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const artists = [
  { name: 'Marcus Chen', specialty: 'Geometric & Blackwork', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', exp: '12 years' },
  { name: 'Elena Vasquez', specialty: 'Realism & Portraits', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', exp: '9 years' },
  { name: 'Kai Takahashi', specialty: 'Japanese Traditional', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800', exp: '15 years' },
]

const styles = [
  { name: 'Geometric', desc: 'Sacred geometry & precision linework' },
  { name: 'Realism', desc: 'Photorealistic portraits & imagery' },
  { name: 'Traditional', desc: 'Bold lines, bright colors, classic icons' },
  { name: 'Japanese', desc: 'Irezumi, koi, dragons, waves' },
  { name: 'Blackwork', desc: 'Heavy black ink, ornamental patterns' },
  { name: 'Watercolor', desc: 'Painterly splashes, soft gradients' },
  { name: 'Minimalist', desc: 'Fine line, subtle, understated' },
  { name: 'Neo-Traditional', desc: 'Modern twist on classic motifs' },
]

const recentWork = [
  { img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800', title: 'Geometric Sleeve', artist: 'Marcus Chen' },
  { img: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=800', title: 'Floral Backpiece', artist: 'Elena Vasquez' },
  { img: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=1200', title: 'Japanese Dragon', artist: 'Kai Takahashi' },
  { img: 'https://images.unsplash.com/photo-1590246814883-57c511e76783?w=1920', title: 'Blackwork Mandala', artist: 'Marcus Chen' },
  { img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200', title: 'Portrait Realism', artist: 'Elena Vasquez' },
  { img: 'https://images.unsplash.com/photo-1598371839696-5c5bb1c12015?w=1200', title: 'Neo-Trad Rose', artist: 'Kai Takahashi' },
]

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We sit down, listen to your vision, discuss placement, size, style preferences, and answer any questions.' },
  { step: '02', title: 'Design', desc: 'Your artist creates a custom design based on our consultation. Revisions are welcome until you love it.' },
  { step: '03', title: 'Session', desc: 'We bring your design to life in our sterile, comfortable studio. Breaks as needed, no rush.' },
  { step: '04', title: 'Aftercare', desc: 'Detailed aftercare instructions and follow-up support to ensure your tattoo heals perfectly.' },
]

const pricing = [
  { size: 'Small', price: '$80+', desc: 'Up to 2 inches. Fine line, small symbols, lettering.', time: '30-60 min' },
  { size: 'Medium', price: '$200+', desc: '3-5 inches. Detailed designs, small portraits.', time: '1-3 hours' },
  { size: 'Large', price: '$500+', desc: '6-10 inches. Complex pieces, half sleeves.', time: '3-6 hours' },
  { size: 'Full Sleeve', price: '$2,000+', desc: 'Full arm or leg coverage. Multiple sessions.', time: '15-30+ hours' },
]

const testimonials = [
  { name: 'Jordan R.', text: 'Marcus turned my rough sketch into a masterpiece. The geometric detail is insane. Best studio in Portland, hands down.', rating: 5 },
  { name: 'Priya M.', text: 'Elena did my portrait tattoo and I literally cried when I saw it. It looks like a photograph on my arm. Incredible talent.', rating: 5 },
  { name: 'Alex T.', text: 'Got my first tattoo here and the whole team made me feel so comfortable. The studio is immaculate and the art speaks for itself.', rating: 5 },
]

const faqs = [
  { q: 'How old do I need to be to get a tattoo?', a: 'You must be 18 years or older with a valid government-issued photo ID. We do not tattoo minors under any circumstances, even with parental consent.' },
  { q: 'How much does a tattoo cost?', a: 'Pricing depends on size, detail, placement, and style. Small pieces start at $80, with our minimum being $80. Larger pieces and full sleeves are quoted during consultation. We charge a $50 non-refundable deposit that goes toward your final cost.' },
  { q: 'How should I prepare for my tattoo session?', a: 'Get a good night\'s sleep, eat a solid meal before your appointment, stay hydrated, and avoid alcohol for 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed.' },
  { q: 'Can you tattoo over scars or existing tattoos?', a: 'Yes! We specialize in cover-ups and scar work. During your consultation, we\'ll assess the area and discuss the best approach. Some scars need to be fully healed (at least 1-2 years old) before tattooing.' },
  { q: 'What is your cancellation policy?', a: 'We require 48 hours notice for cancellations or rescheduling. Late cancellations or no-shows forfeit the deposit. We understand emergencies happen — just communicate with us and we\'ll work something out.' },
]

function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const heroText = "YOUR SKIN. OUR CANVAS."

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grain"></div>
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1590246814883-57c511e76783?w=1920"
            alt="Tattoo art"
            loading="eager"
          />
        </div>
        <div className="hero-content container">
          <h1 className={`hero-title ${heroLoaded ? 'animate' : ''}`}>
            {heroText.split('').map((char, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className={`hero-subtitle ${heroLoaded ? 'animate' : ''}`}>
            Premium tattoo artistry in Portland&apos;s Arts District
          </p>
          <div className={`hero-ctas ${heroLoaded ? 'animate' : ''}`}>
            <Link to="/booking" className="btn-primary">Book Your Session</Link>
            <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
          </div>
          <div className={`hero-scroll-indicator ${heroLoaded ? 'animate' : ''}`}>
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* ARTIST SPOTLIGHT */}
      <section className="section artists-spotlight">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">MEET THE ARTISTS</h2>
            <p className="section-subtitle">World-class talent, dedicated to your vision</p>
          </ScrollReveal>
          <div className="artists-grid">
            {artists.map((artist, i) => (
              <ScrollReveal key={artist.name} delay={i * 150}>
                <Link to="/artists" className="artist-card">
                  <div className="artist-card-img">
                    <img src={artist.img} alt={artist.name} loading="lazy" />
                  </div>
                  <div className="artist-card-info">
                    <h3>{artist.name}</h3>
                    <span className="artist-specialty">{artist.specialty}</span>
                    <span className="artist-exp">{artist.exp} experience</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STYLE GALLERY */}
      <section className="section styles-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">FIND YOUR STYLE</h2>
            <p className="section-subtitle">From bold blackwork to delicate fine line</p>
          </ScrollReveal>
          <div className="styles-grid">
            {styles.map((style, i) => (
              <ScrollReveal key={style.name} delay={i * 80}>
                <Link to="/portfolio" className="style-card">
                  <span className="style-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{style.name}</h3>
                  <p>{style.desc}</p>
                  <span className="style-arrow">&#8594;</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="section recent-work-section">
        <div className="container">
          <ScrollReveal>
            <div className="recent-work-header">
              <div>
                <h2 className="section-title">RECENT WORK</h2>
                <p className="section-subtitle">Fresh ink from the studio</p>
              </div>
              <Link to="/portfolio" className="btn-outline">View All</Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="recent-work-scroll" ref={scrollRef}>
          {recentWork.map((work, i) => (
            <div key={i} className="recent-work-item">
              <img src={work.img} alt={work.title} loading="lazy" />
              <div className="recent-work-overlay">
                <h4>{work.title}</h4>
                <span>by {work.artist}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="section process-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">THE PROCESS</h2>
            <p className="section-subtitle">From concept to completion</p>
          </ScrollReveal>
          <div className="process-timeline">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 200}>
                <div className="process-step">
                  <div className="process-number">{step.step}</div>
                  <div className="process-line"></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">PRICING</h2>
            <p className="section-subtitle">Transparent rates, no surprises. $50 deposit required for all appointments.</p>
          </ScrollReveal>
          <div className="pricing-grid">
            {pricing.map((tier, i) => (
              <ScrollReveal key={tier.size} delay={i * 120}>
                <div className={`pricing-card ${i === 2 ? 'featured' : ''}`}>
                  {i === 2 && <span className="pricing-badge">POPULAR</span>}
                  <h3>{tier.size}</h3>
                  <div className="pricing-price">{tier.price}</div>
                  <p>{tier.desc}</p>
                  <span className="pricing-time">{tier.time}</span>
                  <Link to="/booking" className="btn-primary">Book Now</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">CLIENT VOICES</h2>
            <p className="section-subtitle">What people are saying about Inkcraft</p>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="var(--burnt-orange)">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <span className="testimonial-name">{t.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">Everything you need to know</p>
          </ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
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
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content">
              <h2>READY TO GET INKED?</h2>
              <p>Book your consultation today and let&apos;s create something extraordinary.</p>
              <Link to="/booking" className="btn-primary">Book Your Session</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
