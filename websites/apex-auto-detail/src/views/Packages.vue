<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const packages = [
  {
    name: 'Essential',
    price: 49,
    tagline: 'Quick Clean',
    description: 'A thorough wash and basic interior cleaning. Perfect for regular maintenance between deep cleans.',
    features: {
      'Exterior hand wash': true,
      'Tire & wheel cleaning': true,
      'Window cleaning': true,
      'Interior vacuum': true,
      'Dashboard wipe': true,
      'Clay bar treatment': false,
      'Machine polish': false,
      'Carnauba wax': false,
      'Leather conditioning': false,
      'Engine bay cleaning': false,
      'Paint correction': false,
      'Ceramic coating': false,
      'Fabric protection': false,
      'Headlight restoration': false,
      '30-day touch-up': false
    }
  },
  {
    name: 'Premium',
    price: 149,
    tagline: 'Full Detail',
    popular: true,
    description: 'Complete interior and exterior detail with paint enhancement. Our most popular package for a reason.',
    features: {
      'Exterior hand wash': true,
      'Tire & wheel cleaning': true,
      'Window cleaning': true,
      'Interior vacuum': true,
      'Dashboard wipe': true,
      'Clay bar treatment': true,
      'Machine polish': true,
      'Carnauba wax': true,
      'Leather conditioning': true,
      'Engine bay cleaning': true,
      'Paint correction': false,
      'Ceramic coating': false,
      'Fabric protection': false,
      'Headlight restoration': false,
      '30-day touch-up': false
    }
  },
  {
    name: 'Ultimate Ceramic',
    price: 399,
    tagline: 'Maximum Protection',
    description: 'Our flagship package with full paint correction and ceramic coating. The ultimate in protection and shine.',
    features: {
      'Exterior hand wash': true,
      'Tire & wheel cleaning': true,
      'Window cleaning': true,
      'Interior vacuum': true,
      'Dashboard wipe': true,
      'Clay bar treatment': true,
      'Machine polish': true,
      'Carnauba wax': true,
      'Leather conditioning': true,
      'Engine bay cleaning': true,
      'Paint correction': true,
      'Ceramic coating': true,
      'Fabric protection': true,
      'Headlight restoration': true,
      '30-day touch-up': true
    }
  },
  {
    name: 'Fleet',
    price: null,
    tagline: 'Corporate & Fleet',
    description: 'Custom pricing for businesses with multiple vehicles. Volume discounts, scheduled service, and priority booking.',
    features: {
      'Exterior hand wash': true,
      'Tire & wheel cleaning': true,
      'Window cleaning': true,
      'Interior vacuum': true,
      'Dashboard wipe': true,
      'Clay bar treatment': true,
      'Machine polish': true,
      'Carnauba wax': true,
      'Leather conditioning': true,
      'Engine bay cleaning': true,
      'Paint correction': true,
      'Ceramic coating': true,
      'Fabric protection': true,
      'Headlight restoration': true,
      '30-day touch-up': true
    }
  }
]

const featureNames = Object.keys(packages[0].features)

const addOns = [
  { name: 'Trim Restoration', price: 30 },
  { name: 'Rain Repellent (All Windows)', price: 25 },
  { name: 'Tire Dressing', price: 15 },
  { name: 'Door Jamb Detail', price: 20 },
  { name: 'Exhaust Tip Polish', price: 25 },
  { name: 'Ceramic Rim Coating', price: 60 },
  { name: 'Paint Protection Film (Front)', price: 250 },
  { name: 'Odor Elimination Treatment', price: 75 }
]

const showGiftCard = ref(false)
</script>

<template>
  <main class="packages-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494ceb8?w=1920" alt="Luxury car" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>Packages & Pricing</h1>
        <p>Transparent pricing. No hidden fees. Premium results.</p>
      </div>
    </section>

    <!-- Package Cards -->
    <section class="section">
      <div class="container">
        <div class="packages-cards">
          <ScrollReveal v-for="(pkg, i) in packages" :key="pkg.name" :delay="i * 120">
            <div class="pkg-card glossy-card" :class="{ popular: pkg.popular }">
              <div v-if="pkg.popular" class="pop-badge">Most Popular</div>
              <span class="pkg-tagline">{{ pkg.tagline }}</span>
              <h3 class="pkg-name">{{ pkg.name }}</h3>
              <div class="pkg-price">
                <template v-if="pkg.price">
                  <span class="price-currency">$</span>
                  <span class="price-value price">{{ pkg.price }}</span>
                </template>
                <template v-else>
                  <span class="price-value price custom-price">Custom</span>
                </template>
              </div>
              <p class="pkg-desc">{{ pkg.description }}</p>
              <router-link to="/booking" class="btn" :class="pkg.popular ? 'btn-primary' : 'btn-outline'" style="width: 100%;">
                {{ pkg.price ? 'Select Package' : 'Request Quote' }}
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section comparison-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Feature Comparison</h2>
            <p class="section-subtitle">See what is included in each package</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="comparison-table-wrap">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th v-for="pkg in packages" :key="pkg.name">{{ pkg.name }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="feature in featureNames" :key="feature">
                  <td>{{ feature }}</td>
                  <td v-for="pkg in packages" :key="pkg.name + feature">
                    <span v-if="pkg.features[feature]" class="check-mark">&#10003;</span>
                    <span v-else class="cross-mark">&mdash;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="section addons-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Add-On Pricing</h2>
            <p class="section-subtitle">Enhance any package with these extras</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="addons-list">
          <ScrollReveal v-for="(addon, i) in addOns" :key="addon.name" :delay="i * 50">
            <div class="addon-row">
              <span class="addon-name">{{ addon.name }}</span>
              <span class="addon-dots"></span>
              <span class="addon-price price">${{ addon.price }}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Fleet + Gift Card + Guarantee -->
    <section class="section extras-section">
      <div class="container extras-grid">
        <ScrollReveal>
          <div class="extra-card glossy-card">
            <div class="extra-icon">&#128666;</div>
            <h3>Fleet & Corporate</h3>
            <p>Own a fleet of vehicles? We offer volume discounts, scheduled recurring service, and priority booking for businesses. Contact us for a custom corporate plan.</p>
            <router-link to="/contact" class="btn btn-outline" style="width:100%;">Inquire Now</router-link>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="150">
          <div class="extra-card glossy-card">
            <div class="extra-icon">&#127873;</div>
            <h3>Gift Cards</h3>
            <p>Give the gift of a clean car. Apex Auto Detail gift cards are available in any amount and never expire. Perfect for birthdays, holidays, or just because.</p>
            <button class="btn btn-outline" style="width:100%;" @click="showGiftCard = true">
              Purchase Gift Card
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="300">
          <div class="extra-card glossy-card guarantee-card">
            <div class="guarantee-badge">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="36" stroke="#0066ff" stroke-width="2"/>
                <circle cx="40" cy="40" r="28" stroke="#0066ff" stroke-width="1" stroke-dasharray="4 4"/>
                <text x="40" y="35" text-anchor="middle" fill="#0066ff" font-family="Orbitron" font-size="10" font-weight="700">100%</text>
                <text x="40" y="50" text-anchor="middle" fill="#c0c0c0" font-family="Rajdhani" font-size="8">GUARANTEED</text>
              </svg>
            </div>
            <h3>Money-Back Guarantee</h3>
            <p>Not satisfied with our work? We will re-do the service at no charge, or give you a full refund. No questions asked. That is the Apex promise.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Gift Card Modal -->
    <Teleport to="body">
      <div v-if="showGiftCard" class="modal-overlay" @click="showGiftCard = false">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="showGiftCard = false">&times;</button>
          <div class="modal-checkmark">
            <svg viewBox="0 0 80 80">
              <circle class="checkmark-circle" cx="40" cy="40" r="36" fill="none" stroke="#0066ff" stroke-width="3"/>
              <text x="40" y="45" text-anchor="middle" fill="#0066ff" font-family="Orbitron" font-size="16" font-weight="700">&#127873;</text>
            </svg>
          </div>
          <h3 class="modal-title" style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--white); margin-bottom: 8px;">Gift Cards</h3>
          <p style="color: var(--text-muted); margin-bottom: 24px;">Gift cards can be purchased in-store or by calling us at <strong style="color: var(--primary);">(555) 123-4567</strong>. Available in any denomination.</p>
          <button class="btn btn-primary" style="min-width: 160px;" @click="showGiftCard = false">Got It</button>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%);
}

.page-hero-content {
  position: relative;
  text-align: center;
  z-index: 2;
}

.page-hero-content h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.page-hero-content p {
  color: var(--silver);
  font-size: 1.2rem;
}

.packages-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: start;
}

.pkg-card {
  padding: 32px 24px;
  text-align: center;
  position: relative;
}

.pkg-card.popular {
  border-color: var(--primary);
}

.pop-badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: var(--white);
  padding: 4px 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0 0 6px 6px;
  font-family: var(--font-heading);
}

.pkg-tagline {
  color: var(--primary);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.pkg-name {
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 8px 0 16px;
}

.pkg-price {
  margin-bottom: 16px;
}

.price-currency {
  font-size: 1rem;
  color: var(--silver);
  vertical-align: super;
}

.price-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.custom-price {
  font-size: 2rem;
}

.pkg-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

/* Comparison Table */
.comparison-section {
  background: var(--secondary);
}

.comparison-table-wrap {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

.comparison-table th,
.comparison-table td {
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
}

.comparison-table th {
  background: var(--carbon);
  color: var(--white);
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
  font-weight: 500;
  color: var(--silver);
}

.check-mark {
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
}

.cross-mark {
  color: var(--text-muted);
  opacity: 0.4;
}

.comparison-table tbody tr:hover {
  background: rgba(0, 102, 255, 0.05);
}

/* Add-ons */
.addons-list {
  max-width: 700px;
  margin: 0 auto;
}

.addon-row {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  gap: 12px;
}

.addon-name {
  color: var(--silver);
  font-weight: 500;
  white-space: nowrap;
}

.addon-dots {
  flex: 1;
  border-bottom: 1px dotted var(--border);
  min-width: 40px;
}

.addon-price {
  color: var(--white);
  font-weight: 700;
  white-space: nowrap;
}

/* Extras */
.extras-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.extra-card {
  padding: 36px 28px;
  text-align: center;
}

.extra-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.extra-card h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.extra-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.guarantee-badge {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.guarantee-badge svg {
  width: 100%;
  height: 100%;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  color: var(--text-muted);
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
}

.modal-checkmark {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
}

.modal-checkmark svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .page-hero { height: 300px; }
  .page-hero-content h1 { font-size: 2.2rem; }

  .packages-cards {
    grid-template-columns: 1fr 1fr;
  }

  .extras-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 1.8rem; }

  .packages-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
