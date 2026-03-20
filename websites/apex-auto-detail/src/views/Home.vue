<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const counters = ref([
  { target: 5000, current: 0, label: 'Cars Detailed', suffix: '+' },
  { target: 10, current: 0, label: 'Years Experience', suffix: '+' },
  { target: 500, current: 0, label: '5-Star Reviews', suffix: '+' },
  { target: 100, current: 0, label: 'Satisfaction', suffix: '%' }
])

const statsRef = ref(null)
const countersStarted = ref(false)
let statsObserver = null

function animateCounters() {
  if (countersStarted.value) return
  countersStarted.value = true
  counters.value.forEach((counter, i) => {
    const duration = 2000
    const steps = 60
    const increment = counter.target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= counter.target) {
        counters.value[i].current = counter.target
        clearInterval(interval)
      } else {
        counters.value[i].current = Math.floor(current)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  statsObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      animateCounters()
      statsObserver.unobserve(entry.target)
    }
  }, { threshold: 0.3 })
  if (statsRef.value) statsObserver.observe(statsRef.value)
})

onUnmounted(() => {
  if (statsObserver) statsObserver.disconnect()
})

const packages = [
  {
    name: 'Essential',
    price: 49,
    features: ['Exterior hand wash', 'Tire & wheel cleaning', 'Window cleaning', 'Interior vacuum', 'Dashboard wipe'],
    popular: false
  },
  {
    name: 'Premium',
    price: 149,
    features: ['Everything in Essential', 'Clay bar treatment', 'One-step polish', 'Carnauba wax', 'Leather conditioning', 'Engine bay cleaning'],
    popular: true
  },
  {
    name: 'Ultimate Ceramic',
    price: 399,
    features: ['Everything in Premium', 'Paint correction', 'Ceramic coating (2yr)', 'Fabric protection', 'Headlight restoration', 'Paint sealant', '30-day touch-up free'],
    popular: false
  }
]

const beforeAfterPairs = [
  { before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800', after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', label: 'Exterior Detail' },
  { before: 'https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=800', after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', label: 'Paint Correction' },
  { before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800', after: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800', label: 'Full Restoration' }
]

const sliderPositions = ref([50, 50, 50])
const dragging = ref(-1)

function startDrag(index, event) {
  event.preventDefault()
  dragging.value = index
}

function onDrag(index, event) {
  if (dragging.value !== index) return
  const rect = event.currentTarget.getBoundingClientRect()
  const clientX = event.touches ? event.touches[0].clientX : event.clientX
  let x = ((clientX - rect.left) / rect.width) * 100
  x = Math.max(5, Math.min(95, x))
  sliderPositions.value[index] = x
}

function stopDrag() {
  dragging.value = -1
}

const features = [
  { icon: '&#9733;', title: 'Premium Products', desc: 'We use only top-tier ceramic coatings, polishes, and cleaning solutions from trusted automotive brands.' },
  { icon: '&#9881;', title: 'Certified Technicians', desc: 'IDA-certified professionals with years of experience handling luxury and exotic vehicles.' },
  { icon: '&#9202;', title: 'Mobile Service', desc: 'We come to you. Full detailing service at your home or office with our equipped mobile units.' },
  { icon: '&#10003;', title: 'Satisfaction Guaranteed', desc: '100% satisfaction guarantee on every service. If you are not happy, we will make it right.' }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
  'https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=800',
  'https://images.unsplash.com/photo-1494976388531-d1058494ceb8?w=800',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800'
]

const testimonials = [
  { name: 'James M.', car: '2023 BMW M4', text: 'Absolutely incredible work. My car looks better than when I drove it off the lot. The ceramic coating is flawless.', stars: 5 },
  { name: 'Sarah K.', car: '2022 Tesla Model S', text: 'The mobile service is so convenient. They came to my office and my car was showroom-ready by 5pm. Highly recommend!', stars: 5 },
  { name: 'Mike R.', car: '2024 Porsche 911', text: 'As someone who is very particular about their car, Apex exceeded my expectations. True professionals who care about quality.', stars: 5 }
]
</script>

<template>
  <main class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920" alt="Shiny car" />
        <div class="hero-overlay"></div>
        <div class="speed-lines"></div>
      </div>
      <div class="hero-content container">
        <h1 class="hero-title">Perfection in<br/><span class="hero-highlight">Every Detail</span></h1>
        <p class="hero-sub">Mobile & Shop Detailing &bull; Ceramic Coating &bull; Paint Correction</p>
        <div class="hero-actions">
          <router-link to="/booking" class="btn btn-primary btn-glow">Get a Free Quote</router-link>
          <router-link to="/services" class="btn btn-outline">Our Services</router-link>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-bar" ref="statsRef">
      <div class="container stats-grid">
        <div v-for="(stat, i) in counters" :key="i" class="stat-item">
          <span class="stat-number">{{ stat.current.toLocaleString() }}{{ stat.suffix }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section class="section packages-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Our Packages</h2>
            <p class="section-subtitle">Choose the level of perfection your vehicle deserves</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="packages-grid">
          <ScrollReveal v-for="(pkg, i) in packages" :key="pkg.name" :delay="i * 150">
            <div class="package-card glossy-card" :class="{ popular: pkg.popular }">
              <div v-if="pkg.popular" class="popular-badge">Most Popular</div>
              <h3 class="package-name">{{ pkg.name }}</h3>
              <div class="package-price">
                <span class="price-currency">$</span>
                <span class="price-amount price">{{ pkg.price }}</span>
              </div>
              <ul class="package-features">
                <li v-for="feature in pkg.features" :key="feature">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="check-icon"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link to="/booking" class="btn" :class="pkg.popular ? 'btn-primary' : 'btn-outline'">
                Select Package
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Before/After -->
    <section class="section ba-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Before & After</h2>
            <p class="section-subtitle">Drag the slider to see the transformation</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="ba-grid">
          <ScrollReveal v-for="(pair, i) in beforeAfterPairs" :key="i" :delay="i * 100">
            <div
              class="ba-slider"
              @mousemove="onDrag(i, $event)"
              @touchmove="onDrag(i, $event)"
              @mouseup="stopDrag"
              @mouseleave="stopDrag"
              @touchend="stopDrag"
            >
              <div class="ba-before">
                <img :src="pair.before" :alt="'Before ' + pair.label" />
                <span class="ba-label ba-label-before">Before</span>
              </div>
              <div class="ba-after" :style="{ clipPath: `inset(0 0 0 ${sliderPositions[i]}%)` }">
                <img :src="pair.after" :alt="'After ' + pair.label" />
                <span class="ba-label ba-label-after">After</span>
              </div>
              <div
                class="ba-handle"
                :style="{ left: sliderPositions[i] + '%' }"
                @mousedown="startDrag(i, $event)"
                @touchstart="startDrag(i, $event)"
              >
                <div class="ba-handle-line"></div>
                <div class="ba-handle-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="8,4 4,12 8,20" /><polyline points="16,4 20,12 16,20" />
                  </svg>
                </div>
                <div class="ba-handle-line"></div>
              </div>
              <span class="ba-pair-label">{{ pair.label }}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="section features-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Why Choose Apex</h2>
            <p class="section-subtitle">We set the standard in automotive detailing</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="features-grid">
          <ScrollReveal v-for="(feat, i) in features" :key="i" :delay="i * 100">
            <div class="feature-card glossy-card">
              <div class="feature-icon" v-html="feat.icon"></div>
              <h3>{{ feat.title }}</h3>
              <p>{{ feat.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section gallery-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Recent Work</h2>
            <p class="section-subtitle">A selection of our latest projects</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="gallery-grid">
          <ScrollReveal v-for="(img, i) in galleryImages" :key="i" :delay="i * 80">
            <div class="gallery-item">
              <img :src="img" :alt="'Car detail work ' + (i + 1)" />
              <div class="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div class="gallery-cta">
          <router-link to="/gallery" class="btn btn-outline">View Full Gallery</router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Client Reviews</h2>
            <p class="section-subtitle">What our customers have to say</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="testimonials-grid">
          <ScrollReveal v-for="(t, i) in testimonials" :key="i" :delay="i * 150">
            <div class="testimonial-card glossy-card">
              <div class="stars">{{ '★'.repeat(t.stars) }}</div>
              <p class="testimonial-text">"{{ t.text }}"</p>
              <div class="testimonial-author">
                <strong>{{ t.name }}</strong>
                <span>{{ t.car }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Service Area -->
    <section class="section service-area-section">
      <div class="container">
        <ScrollReveal>
          <div class="service-area-content">
            <h2 class="section-title">Serving the Greater Metro Area</h2>
            <p>We provide mobile detailing services within a 30-mile radius of downtown. Our fully equipped mobile units bring the Apex experience directly to your home, office, or anywhere convenient. For our Ultimate Ceramic package and paint correction services, visit our state-of-the-art detailing shop.</p>
            <div class="service-area-cta">
              <router-link to="/booking" class="btn btn-primary">Book Mobile Service</router-link>
              <router-link to="/contact" class="btn btn-outline">Get Directions to Shop</router-link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-highlight {
  color: var(--primary);
  display: inline-block;
}

.hero-sub {
  font-size: 1.2rem;
  color: var(--silver);
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-glow {
  animation: glowPulse 2s infinite;
}

@keyframes glowPulse {
  0%, 100% { box-shadow: 0 4px 15px rgba(0, 102, 255, 0.4); }
  50% { box-shadow: 0 4px 30px rgba(0, 102, 255, 0.7); }
}

/* Stats */
.stats-bar {
  background: var(--secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-accent);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-heading);
}

/* Packages */
.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: start;
}

.package-card {
  padding: 40px 32px;
  text-align: center;
  position: relative;
}

.package-card.popular {
  border-color: var(--primary);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  padding: 6px 24px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0 0 8px 8px;
  font-family: var(--font-heading);
}

.package-name {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  margin-top: 16px;
}

.package-price {
  margin-bottom: 28px;
}

.price-currency {
  font-size: 1.2rem;
  color: var(--silver);
  vertical-align: super;
}

.price-amount {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.package-features {
  text-align: left;
  margin-bottom: 32px;
}

.package-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  color: var(--text);
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.check-icon {
  width: 18px;
  height: 18px;
  color: var(--primary);
  flex-shrink: 0;
}

.package-card .btn {
  width: 100%;
}

/* Before/After */
.ba-section {
  background: var(--secondary);
}

.ba-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.ba-slider {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: ew-resize;
  aspect-ratio: 4 / 3;
  user-select: none;
}

.ba-before,
.ba-after {
  position: absolute;
  inset: 0;
}

.ba-before img,
.ba-after img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5) brightness(0.7);
}

.ba-after img {
  filter: none;
}

.ba-label {
  position: absolute;
  bottom: 12px;
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: 0.75rem;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

.ba-label-before { left: 12px; }
.ba-label-after { right: 12px; }

.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}

.ba-handle-line {
  flex: 1;
  width: 2px;
  background: var(--primary);
}

.ba-handle-circle {
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
  box-shadow: 0 0 15px rgba(0, 102, 255, 0.5);
}

.ba-handle-circle svg {
  width: 20px;
  height: 20px;
}

.ba-pair-label {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: var(--white);
  padding: 4px 16px;
  border-radius: 4px;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 6;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 36px 24px;
  text-align: center;
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--primary);
  margin: 0 auto 20px;
}

.feature-card h3 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 102, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-overlay span {
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid var(--white);
  padding: 8px 24px;
  border-radius: var(--radius);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-cta {
  text-align: center;
  margin-top: 40px;
}

/* Testimonials */
.testimonials-section {
  background: var(--secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  padding: 32px;
}

.testimonial-text {
  font-style: italic;
  color: var(--text);
  line-height: 1.8;
  margin: 16px 0 20px;
  font-size: 0.95rem;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testimonial-author strong {
  color: var(--white);
}

.testimonial-author span {
  color: var(--primary);
  font-size: 0.85rem;
  font-family: var(--font-heading);
}

/* Service Area */
.service-area-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.service-area-content p {
  color: var(--text-muted);
  line-height: 1.8;
  margin: 20px 0 32px;
}

.service-area-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }

  .hero-sub {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .packages-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .package-card.popular {
    transform: none;
  }

  .ba-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 600px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
