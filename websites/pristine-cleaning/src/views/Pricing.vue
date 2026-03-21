<template>
  <div class="pricing-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Pricing</span>
        <h1>Simple, Transparent<br>Pricing</h1>
        <p>No hidden fees. No surprises. Just honest pricing for exceptional cleaning.</p>
      </div>
    </section>

    <!-- Plans -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Residential Plans</span>
            <h2>Choose Your Cleaning Plan</h2>
            <p>Every plan includes eco-friendly products, insured cleaners, and our satisfaction guarantee.</p>
          </div>
        </ScrollReveal>

        <div class="plans-grid">
          <ScrollReveal v-for="(plan, i) in plans" :key="i" :delay="i * 100">
            <div class="plan-card" :class="{ featured: plan.featured }">
              <div class="plan-badge" v-if="plan.featured">Most Popular</div>
              <h3>{{ plan.name }}</h3>
              <div class="plan-price">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/ visit</span>
              </div>
              <p class="plan-desc">{{ plan.description }}</p>

              <div class="plan-features">
                <div v-for="(feat, fi) in plan.features" :key="fi" class="plan-feature" :class="{ disabled: !feat.included }">
                  <svg v-if="feat.included" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span>{{ feat.text }}</span>
                </div>
              </div>

              <router-link to="/booking" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'" style="width: 100%">
                {{ plan.featured ? 'Get Started' : 'Choose Plan' }}
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Frequency Discounts -->
    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Save More</span>
            <h2>Frequency Discounts</h2>
            <p>Book recurring cleanings and save on every visit.</p>
          </div>
        </ScrollReveal>

        <div class="discounts-grid">
          <ScrollReveal v-for="(d, i) in discounts" :key="i" :delay="i * 100">
            <div class="discount-card" :class="{ highlight: d.highlight }">
              <div class="discount-badge" v-if="d.badge">{{ d.badge }}</div>
              <h3>{{ d.frequency }}</h3>
              <div class="discount-amount">{{ d.discount }}</div>
              <p>{{ d.description }}</p>
              <div class="discount-example">
                <span>Standard Plan:</span>
                <span class="original">${{ d.original }}</span>
                <span class="discounted">${{ d.discounted }}/visit</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Compare</span>
            <h2>Feature Comparison</h2>
            <p>See exactly what's included in each plan at a glance.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="comparison-table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th class="highlight-col">Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.feature">
                  <td>{{ row.feature }}</td>
                  <td>
                    <span v-if="typeof row.basic === 'boolean'" :class="row.basic ? 'check' : 'cross'">
                      {{ row.basic ? '\u2713' : '\u2715' }}
                    </span>
                    <span v-else>{{ row.basic }}</span>
                  </td>
                  <td class="highlight-col">
                    <span v-if="typeof row.standard === 'boolean'" :class="row.standard ? 'check' : 'cross'">
                      {{ row.standard ? '\u2713' : '\u2715' }}
                    </span>
                    <span v-else>{{ row.standard }}</span>
                  </td>
                  <td>
                    <span v-if="typeof row.premium === 'boolean'" :class="row.premium ? 'check' : 'cross'">
                      {{ row.premium ? '\u2713' : '\u2715' }}
                    </span>
                    <span v-else>{{ row.premium }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Commercial CTA -->
    <section class="section commercial-cta">
      <div class="container">
        <ScrollReveal>
          <div class="commercial-content">
            <div class="commercial-text">
              <span class="section-label">For Businesses</span>
              <h2>Need Commercial Cleaning?</h2>
              <p>We offer custom packages for offices, retail spaces, and medical facilities. Get a tailored quote for your business needs.</p>
              <ul class="commercial-perks">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Custom scheduling (including evenings &amp; weekends)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Dedicated account manager
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Volume pricing available
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Industry-specific protocols
                </li>
              </ul>
              <router-link to="/contact" class="btn btn-primary btn-lg">Request Commercial Quote</router-link>
            </div>
            <div class="commercial-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Modern office space" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const plans = [
  {
    name: 'Basic',
    price: '99',
    description: 'Essential cleaning for maintained homes',
    featured: false,
    features: [
      { text: 'Dusting all surfaces', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Kitchen wipe-down', included: true },
      { text: 'Bathroom sanitization', included: true },
      { text: 'Up to 2 bedrooms', included: true },
      { text: 'Inside appliances', included: false },
      { text: 'Baseboard cleaning', included: false },
      { text: 'Inside cabinets', included: false },
      { text: 'Wall spot cleaning', included: false }
    ]
  },
  {
    name: 'Standard',
    price: '149',
    description: 'Our most popular comprehensive clean',
    featured: true,
    features: [
      { text: 'Dusting all surfaces', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Kitchen deep clean', included: true },
      { text: 'Bathroom sanitization', included: true },
      { text: 'Up to 4 bedrooms', included: true },
      { text: 'Inside appliances', included: true },
      { text: 'Baseboard cleaning', included: true },
      { text: 'Inside cabinets', included: false },
      { text: 'Wall spot cleaning', included: false }
    ]
  },
  {
    name: 'Premium',
    price: '249',
    description: 'The ultimate deep-clean experience',
    featured: false,
    features: [
      { text: 'Dusting all surfaces', included: true },
      { text: 'Vacuuming & mopping', included: true },
      { text: 'Kitchen deep clean', included: true },
      { text: 'Bathroom sanitization', included: true },
      { text: 'Unlimited bedrooms', included: true },
      { text: 'Inside appliances', included: true },
      { text: 'Baseboard cleaning', included: true },
      { text: 'Inside cabinets', included: true },
      { text: 'Wall spot cleaning', included: true }
    ]
  }
]

const discounts = [
  {
    frequency: 'Weekly',
    discount: '20% OFF',
    description: 'Maximum freshness with the best savings. Perfect for families and busy households.',
    original: '149',
    discounted: '119',
    badge: 'Best Value',
    highlight: true
  },
  {
    frequency: 'Biweekly',
    discount: '10% OFF',
    description: 'The sweet spot for most homes. Regular enough to maintain, affordable enough to love.',
    original: '149',
    discounted: '134',
    badge: null,
    highlight: false
  },
  {
    frequency: 'Monthly',
    discount: '5% OFF',
    description: 'A reliable monthly refresh. Great for maintaining a clean baseline.',
    original: '149',
    discounted: '142',
    badge: null,
    highlight: false
  },
  {
    frequency: 'One-Time',
    discount: 'Standard Rate',
    description: 'No commitment needed. Perfect for deep cleans, move-ins, or trying us out.',
    original: '149',
    discounted: '149',
    badge: null,
    highlight: false
  }
]

const comparisonRows = [
  { feature: 'Surface Dusting', basic: true, standard: true, premium: true },
  { feature: 'Vacuuming & Mopping', basic: true, standard: true, premium: true },
  { feature: 'Kitchen Cleaning', basic: 'Basic', standard: 'Deep', premium: 'Deep' },
  { feature: 'Bathroom Sanitization', basic: true, standard: true, premium: true },
  { feature: 'Bedrooms', basic: 'Up to 2', standard: 'Up to 4', premium: 'Unlimited' },
  { feature: 'Inside Appliances', basic: false, standard: true, premium: true },
  { feature: 'Baseboard Cleaning', basic: false, standard: true, premium: true },
  { feature: 'Window Sills & Tracks', basic: false, standard: true, premium: true },
  { feature: 'Inside Cabinets', basic: false, standard: false, premium: true },
  { feature: 'Wall Spot Cleaning', basic: false, standard: false, premium: true },
  { feature: 'Garage / Patio', basic: false, standard: false, premium: true },
  { feature: 'Fridge & Oven Deep Clean', basic: false, standard: false, premium: true }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 10rem 0 5rem;
  text-align: center;
}

.page-hero .section-label { color: var(--primary-light); }
.page-hero h1 { color: var(--white); margin-bottom: 1rem; }
.page-hero p { color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.plan-card {
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  transition: all var(--transition);
}

.plan-card.featured {
  border-color: var(--primary);
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.plan-badge {
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

.plan-card h3 { font-size: 1.3rem; margin-bottom: 1rem; }

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: 0.75rem;
}

.currency { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--secondary); }
.amount { font-family: var(--font-accent); font-size: 3.5rem; font-weight: 700; color: var(--secondary); line-height: 1; }
.period { font-size: 0.9rem; color: var(--text-muted); margin-left: 4px; }

.plan-desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem; }

.plan-features { text-align: left; margin-bottom: 2rem; }

.plan-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: var(--text);
}

.plan-feature.disabled {
  color: var(--text-muted);
  opacity: 0.5;
}

.plan-feature svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.plan-feature:not(.disabled) svg { color: var(--success); }
.plan-feature.disabled svg { color: var(--text-muted); }

/* Discounts */
.discounts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.discount-card {
  background: var(--white);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
  transition: all var(--transition);
}

.discount-card.highlight {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.discount-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  white-space: nowrap;
}

.discount-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }

.discount-amount {
  font-family: var(--font-accent);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.discount-card p { font-size: 0.85rem; margin-bottom: 1rem; }

.discount-example {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  flex-wrap: wrap;
}

.discount-example .original {
  text-decoration: line-through;
  color: var(--text-muted);
}

.discount-example .discounted {
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-accent);
}

/* Comparison table */
.comparison-table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.comparison-table th {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--secondary);
  background: var(--bg-light);
  font-size: 1rem;
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
  font-weight: 500;
}

.highlight-col {
  background: rgba(33, 150, 243, 0.05);
}

.check { color: var(--success); font-weight: 700; font-size: 1.1rem; }
.cross { color: var(--text-muted); font-size: 1.1rem; }

/* Commercial CTA */
.commercial-cta {
  background: var(--bg-light);
}

.commercial-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.commercial-text h2 {
  margin-bottom: 1rem;
}

.commercial-text > p {
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

.commercial-perks {
  margin-bottom: 2rem;
}

.commercial-perks li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  color: var(--text);
}

.commercial-perks svg {
  width: 18px;
  height: 18px;
  color: var(--success);
  flex-shrink: 0;
}

.commercial-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.commercial-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .plans-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .plan-card.featured { transform: none; }
  .discounts-grid { grid-template-columns: 1fr 1fr; }
  .commercial-content { grid-template-columns: 1fr; gap: 2rem; }
}

@media (max-width: 480px) {
  .discounts-grid { grid-template-columns: 1fr; }
}
</style>
