<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const activeTab = ref('exterior')

const tabs = [
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'specialty', label: 'Specialty' }
]

const services = {
  exterior: [
    { name: 'Hand Wash & Dry', desc: 'Meticulous two-bucket hand wash using pH-neutral soap, grit guards, and microfiber mitts. Finished with filtered water rinse and premium chamois dry.', duration: '45 min', price: 35 },
    { name: 'Clay Bar Treatment', desc: 'Professional-grade clay bar decontamination to remove embedded contaminants, overspray, and industrial fallout for a glass-smooth finish.', duration: '1 hr', price: 60 },
    { name: 'Machine Polish', desc: 'Dual-action machine polishing to remove light swirl marks, water spots, and minor scratches. Restores depth and clarity to your paint.', duration: '2-3 hrs', price: 150 },
    { name: 'Carnauba Wax', desc: 'Premium carnauba wax hand-applied for a deep, warm gloss and 3-month protection. Ideal for show cars and weekend drivers.', duration: '1.5 hrs', price: 80 },
    { name: 'Ceramic Coating', desc: 'Professional-grade SiO2 ceramic coating providing 2+ years of hydrophobic protection, UV resistance, and enhanced gloss. Includes paint correction prep.', duration: '6-8 hrs', price: 399 },
    { name: 'Paint Correction', desc: 'Multi-stage compound and polish to remove deep scratches, heavy swirls, and oxidation. Restores your paint to better-than-new condition.', duration: '4-6 hrs', price: 300 },
    { name: 'Headlight Restoration', desc: 'Complete headlight lens restoration including wet sanding, polishing, and UV sealant. Dramatically improves visibility and appearance.', duration: '1 hr', price: 60 }
  ],
  interior: [
    { name: 'Full Interior Vacuum', desc: 'Comprehensive vacuuming of seats, carpets, floor mats, trunk, and all crevices using professional-grade equipment with HEPA filtration.', duration: '30 min', price: 25 },
    { name: 'Carpet & Upholstery Shampoo', desc: 'Hot water extraction shampooing of all fabric surfaces. Removes deep stains, odors, and allergens. Includes pre-treatment of tough spots.', duration: '1.5 hrs', price: 80 },
    { name: 'Leather Conditioning', desc: 'Gentle pH-balanced leather cleaning followed by premium conditioner application. Protects against cracking, fading, and UV damage.', duration: '1 hr', price: 60 },
    { name: 'Odor Elimination', desc: 'Professional ozone treatment combined with enzyme-based odor neutralizers. Eliminates smoke, pet, food, and mildew odors permanently.', duration: '2 hrs', price: 75 },
    { name: 'Fabric Protection', desc: 'Nano-particle fabric sealant creates an invisible barrier against spills, stains, and UV damage. Lasts up to 12 months.', duration: '45 min', price: 50 }
  ],
  specialty: [
    { name: 'Engine Bay Detailing', desc: 'Careful degreasing, cleaning, and dressing of engine bay components. Protects wiring and components while making your engine bay showroom-worthy.', duration: '1.5 hrs', price: 80 },
    { name: 'Wheel & Rim Restoration', desc: 'Deep cleaning of wheels, rims, and brake calipers. Iron decontamination, polish, and ceramic rim coating for lasting protection.', duration: '2 hrs', price: 120 },
    { name: 'Pet Hair Removal', desc: 'Specialized tools and techniques for thorough pet hair removal from all interior surfaces. Includes anti-allergen treatment.', duration: '1 hr', price: 50 },
    { name: 'New Car Package', desc: 'Protect your investment from day one. Ceramic coating exterior, fabric/leather protection interior, and paint protection film on high-impact areas.', duration: '8-10 hrs', price: 599 }
  ]
}

const addOns = [
  { name: 'Trim Restoration', price: 30, desc: 'Restore faded black trim to like-new condition' },
  { name: 'Rain Repellent', price: 25, desc: 'Hydrophobic glass treatment for all windows' },
  { name: 'Tire Dressing', price: 15, desc: 'Premium tire shine and UV protection' },
  { name: 'Air Freshener', price: 10, desc: 'Long-lasting premium car fragrance' },
  { name: 'Door Jamb Detail', price: 20, desc: 'Clean and protect all door jamb areas' },
  { name: 'Exhaust Tip Polish', price: 25, desc: 'Mirror-finish polish on exhaust tips' }
]
</script>

<template>
  <main class="services-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920" alt="Detailing process" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>Our Services</h1>
        <p>Professional detailing services for every need</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="services-list">
          <ScrollReveal v-for="(service, i) in services[activeTab]" :key="service.name" :delay="i * 80">
            <div class="service-card glossy-card">
              <div class="service-info">
                <h3>{{ service.name }}</h3>
                <p>{{ service.desc }}</p>
                <div class="service-meta">
                  <span class="service-duration">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
                    {{ service.duration }}
                  </span>
                </div>
              </div>
              <div class="service-price-block">
                <span class="service-price price">${{ service.price }}</span>
                <router-link to="/booking" class="btn btn-primary btn-sm">Book Now</router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="section addons-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Add-Ons</h2>
            <p class="section-subtitle">Enhance any service with these extras</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="addons-grid">
          <ScrollReveal v-for="(addon, i) in addOns" :key="addon.name" :delay="i * 60">
            <div class="addon-card glossy-card">
              <div class="addon-info">
                <h4>{{ addon.name }}</h4>
                <p>{{ addon.desc }}</p>
              </div>
              <span class="addon-price price">+${{ addon.price }}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <ScrollReveal>
          <div class="cta-box glossy-card">
            <h2>Need a Custom Package?</h2>
            <p>Every vehicle is unique. Contact us for a personalized quote tailored to your car's needs.</p>
            <div class="cta-actions">
              <router-link to="/booking" class="btn btn-primary">Get Custom Quote</router-link>
              <router-link to="/contact" class="btn btn-outline">Contact Us</router-link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
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

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0;
}

.tab-btn {
  padding: 14px 32px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  border-bottom: 3px solid transparent;
  margin-bottom: -1px;
}

.tab-btn:hover {
  color: var(--white);
}

.tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 32px;
  gap: 32px;
}

.service-info h3 {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.service-info p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 600px;
}

.service-meta {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.service-duration {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--silver);
  font-size: 0.85rem;
}

.service-duration svg {
  color: var(--primary);
}

.service-price-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex-shrink: 0;
}

.service-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
}

.btn-sm {
  padding: 8px 20px;
  font-size: 0.8rem;
}

.addons-section {
  background: var(--secondary);
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.addon-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  gap: 16px;
}

.addon-info h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.addon-info p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.addon-price {
  font-size: 1.2rem;
  color: var(--primary);
  font-weight: 700;
  white-space: nowrap;
}

.cta-box {
  text-align: center;
  padding: 60px 40px;
}

.cta-box h2 {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.cta-box p {
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto 28px;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .page-hero {
    height: 300px;
  }

  .page-hero-content h1 {
    font-size: 2.2rem;
  }

  .tabs {
    overflow-x: auto;
  }

  .tab-btn {
    padding: 12px 20px;
    font-size: 0.95rem;
    white-space: nowrap;
  }

  .service-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }

  .service-price-block {
    align-items: flex-start;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
  }

  .addons-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 {
    font-size: 1.8rem;
  }
}
</style>
