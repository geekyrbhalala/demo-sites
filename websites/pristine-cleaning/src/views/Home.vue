<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920" alt="Clean modern space" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="hero-badge">Trusted by 2,000+ Happy Homes</span>
        <h1>A Cleaner Space,<br>A Clearer Mind</h1>
        <p class="hero-sub">Professional residential &amp; commercial cleaning services in San Francisco. Eco-friendly products, insured teams, and satisfaction guaranteed.</p>
        <div class="hero-actions">
          <router-link to="/booking" class="btn btn-primary btn-lg">Get Free Estimate</router-link>
          <router-link to="/services" class="btn btn-outline btn-lg">Our Services</router-link>
        </div>
        <div class="hero-trust">
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Fully Insured</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Background Checked</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            <span>Eco-Friendly</span>
          </div>
          <div class="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section services-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">What We Do</span>
            <h2>Our Cleaning Services</h2>
            <p>From routine housekeeping to deep commercial sanitization, we have a solution for every space.</p>
          </div>
        </ScrollReveal>

        <div class="services-grid">
          <ScrollReveal v-for="(service, i) in services" :key="i" :delay="i * 100">
            <div class="service-card">
              <div class="service-icon" v-html="service.icon"></div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <router-link to="/services" class="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section how-it-works" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Simple Process</span>
            <h2>How It Works</h2>
            <p>Getting your space cleaned has never been easier. Three simple steps to a sparkling space.</p>
          </div>
        </ScrollReveal>

        <div class="steps-grid">
          <ScrollReveal v-for="(step, i) in steps" :key="i" :delay="i * 150">
            <div class="step-card">
              <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <section class="section pricing-preview">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Transparent Pricing</span>
            <h2>Choose Your Plan</h2>
            <p>Simple, honest pricing. No hidden fees, no surprises.</p>
          </div>
        </ScrollReveal>

        <div class="pricing-grid">
          <ScrollReveal v-for="(plan, i) in plans" :key="i" :delay="i * 100">
            <div class="pricing-card" :class="{ featured: plan.featured }">
              <div class="pricing-badge" v-if="plan.featured">Most Popular</div>
              <h3>{{ plan.name }}</h3>
              <div class="pricing-price">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/ visit</span>
              </div>
              <p class="pricing-desc">{{ plan.description }}</p>
              <ul class="pricing-features">
                <li v-for="feature in plan.features" :key="feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link to="/booking" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'" style="width: 100%">
                Get Started
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials-section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Client Stories</span>
            <h2>What Our Clients Say</h2>
            <p>Real reviews from real customers who love their clean spaces.</p>
          </div>
        </ScrollReveal>

        <div class="testimonials-grid">
          <ScrollReveal v-for="(t, i) in testimonials" :key="i" :delay="i * 100">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" fill="#FFB300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="testimonial-text">"{{ t.text }}"</p>
              <div class="testimonial-author">
                <div class="author-avatar">{{ t.initials }}</div>
                <div>
                  <strong>{{ t.name }}</strong>
                  <span>{{ t.role }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <ScrollReveal>
          <div class="cta-content">
            <h2>Ready for a Spotless Space?</h2>
            <p>Book your first cleaning today and get 20% off. No commitment, satisfaction guaranteed.</p>
            <div class="cta-actions">
              <router-link to="/booking" class="btn btn-white btn-lg">Book Free Estimate</router-link>
              <a href="tel:4155550123" class="btn btn-outline btn-lg" style="border-color: white; color: white">Call (415) 555-0123</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Regular home cleaning tailored to your needs. We handle everything from dusting to mopping so you can enjoy your free time.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  },
  {
    title: 'Commercial Cleaning',
    description: 'Keep your workplace productive and professional. Office, retail, and medical facility cleaning with flexible scheduling.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/></svg>'
  },
  {
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean that reaches every corner. Perfect for seasonal refreshes or first-time cleanings.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    title: 'Move In / Out',
    description: 'Starting fresh in a new place or leaving one behind? We make sure every surface is spotless for the transition.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="6" width="22" height="14" rx="2"/><path d="M1 10h22"/><path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>'
  }
]

const steps = [
  { title: 'Book Online', description: 'Choose your service, pick a date and time that works for you. Get an instant quote in under 2 minutes.' },
  { title: 'We Clean', description: 'Our vetted, insured professionals arrive on time with all supplies and eco-friendly products needed.' },
  { title: 'You Relax', description: 'Come home to a beautifully clean space. Not happy? We will re-clean for free within 24 hours.' }
]

const plans = [
  {
    name: 'Basic',
    price: '99',
    description: 'Essential cleaning for maintained homes',
    features: ['Dusting all surfaces', 'Vacuuming & mopping', 'Kitchen wipe-down', 'Bathroom sanitization', '2 bedrooms included'],
    featured: false
  },
  {
    name: 'Standard',
    price: '149',
    description: 'Our most popular comprehensive clean',
    features: ['Everything in Basic', 'Inside appliances', 'Baseboard cleaning', 'Window sills & tracks', 'Up to 4 bedrooms', 'Laundry room included'],
    featured: true
  },
  {
    name: 'Premium',
    price: '249',
    description: 'The ultimate deep-clean experience',
    features: ['Everything in Standard', 'Inside cabinets & closets', 'Wall spot cleaning', 'Garage or patio sweep', 'Unlimited bedrooms', 'Fridge & oven deep clean'],
    featured: false
  }
]

const stats = [
  { number: '2,000+', label: 'Happy Clients' },
  { number: '15,000+', label: 'Cleanings Done' },
  { number: '4.9', label: 'Average Rating' },
  { number: '100%', label: 'Satisfaction Rate' }
]

const testimonials = [
  {
    text: 'Pristine has been cleaning our home weekly for over a year. The consistency and attention to detail is remarkable. I cannot imagine going back.',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    initials: 'SM'
  },
  {
    text: 'We switched to Pristine for our office cleaning and the difference was immediate. Our team loves coming into a fresh, clean workspace every morning.',
    name: 'David Chen',
    role: 'Office Manager',
    initials: 'DC'
  },
  {
    text: 'The move-out cleaning was incredible. We got our full deposit back and the landlord actually complimented how clean the apartment was. Worth every penny.',
    name: 'Emily Rodriguez',
    role: 'Renter',
    initials: 'ER'
  }
]
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
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
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.85) 0%, rgba(33, 150, 243, 0.6) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 8rem 2rem 4rem;
  max-width: 800px;
}

.hero-badge {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.85rem;
  color: var(--primary-light);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.hero h1 {
  color: var(--white);
  font-weight: 800;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.hero-sub {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-actions .btn-outline {
  border-color: rgba(255, 255, 255, 0.5);
  color: var(--white);
}

.hero-actions .btn-outline:hover {
  background: var(--white);
  color: var(--primary);
  border-color: var(--white);
}

.hero-trust {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-weight: 500;
}

.trust-item svg {
  width: 18px;
  height: 18px;
  color: var(--primary-light);
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.service-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  transition: all var(--transition);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

.service-icon {
  width: 56px;
  height: 56px;
  background: var(--accent);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--primary);
  padding: 14px;
}

.service-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.service-card p {
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary);
  transition: gap var(--transition);
}

.service-link:hover {
  gap: 0.75rem;
}

.service-link svg {
  width: 16px;
  height: 16px;
}

/* Steps */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step-card {
  text-align: center;
  padding: 2.5rem 2rem;
}

.step-number {
  font-family: var(--font-accent);
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-light);
  margin-bottom: 1rem;
  line-height: 1;
}

.step-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.step-card p {
  font-size: 0.95rem;
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.pricing-card {
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  transition: all var(--transition);
}

.pricing-card.featured {
  border-color: var(--primary);
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.4rem 1.25rem;
  border-radius: 50px;
  white-space: nowrap;
}

.pricing-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.pricing-price {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.currency {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary);
}

.amount {
  font-family: var(--font-accent);
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--secondary);
  line-height: 1;
}

.period {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-left: 4px;
}

.pricing-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.pricing-features {
  text-align: left;
  margin-bottom: 2rem;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--text);
}

.pricing-features svg {
  width: 18px;
  height: 18px;
  color: var(--success);
  flex-shrink: 0;
}

/* Stats */
.stats-section {
  background: var(--primary);
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-number {
  display: block;
  font-family: var(--font-accent);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-sm);
}

.testimonial-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 1.25rem;
}

.testimonial-stars svg {
  width: 18px;
  height: 18px;
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text);
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.85rem;
}

.testimonial-author strong {
  display: block;
  font-size: 0.9rem;
  color: var(--secondary);
}

.testimonial-author span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* CTA */
.cta-section {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 6rem 0;
}

.cta-content {
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--white);
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    padding: 7rem 1.25rem 3rem;
  }

  .hero-trust {
    gap: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .pricing-card.featured {
    transform: none;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
    text-align: center;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
  }
}
</style>
