<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="script-accent header-script">Our expertise</span>
        <h1>Our Services</h1>
        <p>Discover our complete menu of premium beauty and wellness treatments, each thoughtfully designed to rejuvenate your body, mind, and spirit.</p>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="section services-content">
      <div class="container">
        <div v-for="(category, catIdx) in categories" :key="category.name" class="service-category">
          <ScrollReveal>
            <div class="category-header" @click="toggleCategory(catIdx)">
              <div class="category-info">
                <div class="category-icon" v-html="category.icon"></div>
                <div>
                  <h2>{{ category.name }}</h2>
                  <p>{{ category.tagline }}</p>
                </div>
              </div>
              <button class="category-toggle" :class="{ open: category.expanded }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
          </ScrollReveal>

          <transition name="expand">
            <div v-if="category.expanded" class="category-services">
              <div class="botanical-divider">
                <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
                  <path d="M0 10h50M70 10h50" stroke="#d4a0a8" stroke-width="0.5"/>
                  <path d="M55 2c3 4 5 8 5 8s2-4 5-8" stroke="#9cac8b" stroke-width="1" fill="none"/>
                  <path d="M55 18c3-4 5-8 5-8s2 4 5 8" stroke="#9cac8b" stroke-width="1" fill="none"/>
                </svg>
              </div>

              <div class="services-list">
                <ScrollReveal v-for="(service, sIdx) in category.services" :key="service.name" :delay="sIdx * 80">
                  <div class="service-item">
                    <div class="service-details">
                      <div class="service-name-row">
                        <h3>{{ service.name }}</h3>
                        <span class="service-dots"></span>
                        <span class="service-price">{{ service.price }}</span>
                      </div>
                      <p class="service-desc">{{ service.description }}</p>
                      <span class="service-duration">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                        </svg>
                        {{ service.duration }}
                      </span>
                    </div>
                    <router-link to="/booking" class="btn btn-secondary btn-sm">Book This Service</router-link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Image Banner -->
    <section class="services-banner">
      <div class="banner-grid">
        <div class="banner-img">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800" alt="Massage therapy" />
        </div>
        <div class="banner-img">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800" alt="Facial treatment" />
        </div>
        <div class="banner-img">
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800" alt="Nail studio" />
        </div>
      </div>
    </section>

    <!-- Note -->
    <section class="section services-note">
      <div class="container">
        <ScrollReveal>
          <div class="note-card">
            <span class="script-accent" style="font-size: 1.6rem;">A note from us</span>
            <h3>Customized for You</h3>
            <p>Every treatment at LUXE can be tailored to your unique needs. During your consultation, our artists will create a personalized plan to achieve your desired results. We use only premium, organic products that are gentle on your skin and the environment.</p>
            <router-link to="/booking" class="btn btn-primary">Schedule a Consultation</router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const categories = reactive([
  {
    name: 'Hair Services',
    tagline: 'Transform your look with our expert stylists',
    expanded: true,
    icon: '<svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><circle cx="14" cy="34" r="6"/><circle cx="34" cy="34" r="6"/><path d="M20 34c0-12 4-20 4-20M28 34c0-12-4-20-4-20"/></svg>',
    services: [
      { name: 'Signature Haircut & Style', price: '$85+', duration: '60 min', description: 'Includes consultation, shampoo, precision cut, and blowout styling tailored to your face shape and lifestyle.' },
      { name: 'Balayage & Highlights', price: '$195+', duration: '120–180 min', description: 'Hand-painted, sun-kissed highlights using ammonia-free formulas for a natural, dimensional look that grows out beautifully.' },
      { name: 'Full Color Treatment', price: '$150+', duration: '90–120 min', description: 'Complete color transformation with premium organic dyes. Includes toner, deep conditioning treatment, and style finish.' },
      { name: 'Keratin Smoothing Treatment', price: '$250+', duration: '150 min', description: 'Eliminate frizz and reduce styling time with our formaldehyde-free keratin treatment. Results last 3-5 months.' },
      { name: 'Botanical Deep Conditioning', price: '$55', duration: '30 min', description: 'Intensive hair repair using plant-based proteins and essential oils to restore moisture, shine, and elasticity.' },
      { name: 'Bridal Hair Styling', price: '$175+', duration: '90 min', description: 'Your dream wedding hair brought to life. Includes trial session, day-of styling, and touch-up kit for the reception.' }
    ]
  },
  {
    name: 'Skin & Facial',
    tagline: 'Reveal your natural radiance',
    expanded: false,
    icon: '<svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><circle cx="24" cy="20" r="10"/><path d="M14 20c0 8 10 18 10 18s10-10 10-18"/></svg>',
    services: [
      { name: 'Signature Luxe Facial', price: '$120', duration: '60 min', description: 'Our signature treatment combining deep cleansing, exfoliation, extractions, mask, and hydrating serum application.' },
      { name: 'Anti-Aging Collagen Boost', price: '$165', duration: '75 min', description: 'Advanced peptide and collagen-infused facial targeting fine lines, wrinkles, and loss of firmness. Includes LED therapy.' },
      { name: 'Botanical Brightening Peel', price: '$140', duration: '45 min', description: 'Gentle yet effective plant-based chemical peel to even skin tone, reduce hyperpigmentation, and reveal luminous skin.' },
      { name: 'Hydrafacial Deluxe', price: '$195', duration: '60 min', description: 'Multi-step treatment that cleanses, extracts, and hydrates using patented technology with nourishing botanical serums.' },
      { name: 'Acne Clarifying Treatment', price: '$110', duration: '60 min', description: 'Targeted treatment for acne-prone skin using salicylic acid, blue LED therapy, and calming botanical extracts.' },
      { name: 'Gentleman\'s Facial', price: '$95', duration: '45 min', description: 'Designed specifically for men\'s skin. Deep cleanse, exfoliation, and hydration with a relaxing facial massage.' }
    ]
  },
  {
    name: 'Nail Studio',
    tagline: 'Artistry at your fingertips',
    expanded: false,
    icon: '<svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><path d="M16 36h16c2 0 4-2 4-4V18c0-6-4-10-12-10S12 12 12 18v14c0 2 2 4 4 4z"/><path d="M20 12v20M24 10v22M28 12v20"/></svg>',
    services: [
      { name: 'Classic Manicure', price: '$40', duration: '30 min', description: 'Nail shaping, cuticle care, hand massage, and your choice of polish from our premium collection.' },
      { name: 'Gel Manicure', price: '$55', duration: '45 min', description: 'Long-lasting gel polish application with chip-free finish that lasts up to 3 weeks. UV-cured for instant dry.' },
      { name: 'Luxury Spa Pedicure', price: '$70', duration: '60 min', description: 'Foot soak in botanical-infused water, callus removal, detailed nail care, exfoliating scrub, mask, and massage.' },
      { name: 'Nail Art & Design', price: '$25+', duration: '15–30 min add-on', description: 'Custom nail art ranging from minimalist line work to elaborate designs. Includes hand-painted art, foils, and gems.' },
      { name: 'Dip Powder Manicure', price: '$60', duration: '45 min', description: 'Durable, lightweight alternative to gel and acrylic. Strengthens natural nails while providing vibrant, long-lasting color.' },
      { name: 'Paraffin Wax Treatment', price: '$20', duration: '15 min add-on', description: 'Warm paraffin wax treatment for hands or feet to deeply moisturize, soften skin, and soothe joint stiffness.' }
    ]
  },
  {
    name: 'Massage & Body',
    tagline: 'Complete mind and body wellness',
    expanded: false,
    icon: '<svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><path d="M12 36c4-8 8-12 12-12s8 4 12 12"/><circle cx="24" cy="16" r="6"/></svg>',
    services: [
      { name: 'Swedish Relaxation Massage', price: '$95', duration: '60 min', description: 'Classic full-body massage using flowing strokes to promote relaxation, improve circulation, and ease muscle tension.' },
      { name: 'Deep Tissue Therapy', price: '$120', duration: '60 min', description: 'Firm pressure targeting deep muscle layers to release chronic tension, knots, and adhesions. Ideal for active lifestyles.' },
      { name: 'Hot Stone Experience', price: '$140', duration: '75 min', description: 'Heated basalt stones placed on key points while warm stone massage melts away stress. Deeply soothing and therapeutic.' },
      { name: 'Aromatherapy Journey', price: '$115', duration: '60 min', description: 'Custom-blended essential oils combined with Swedish techniques to balance mood, ease tension, and nourish skin.' },
      { name: 'Prenatal Wellness Massage', price: '$110', duration: '60 min', description: 'Specially designed for expectant mothers. Gentle techniques to relieve pregnancy discomforts and promote relaxation.' },
      { name: 'Couples Retreat Package', price: '$240', duration: '90 min', description: 'Side-by-side massages in our private couples suite. Includes champagne toast, chocolate truffles, and aromatherapy.' }
    ]
  }
])

const toggleCategory = (idx) => {
  categories[idx].expanded = !categories[idx].expanded
}
</script>

<style scoped>
.page-header {
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--blush) 0%, var(--warm-white) 100%);
  text-align: center;
}

.header-script {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-header p {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
  font-size: 1.05rem;
}

/* Category */
.service-category {
  margin-bottom: 16px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 36px;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-soft);
}

.category-header:hover {
  box-shadow: var(--shadow-rose);
}

.category-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.category-info h2 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.category-info p {
  color: #888;
  font-size: 0.9rem;
}

.category-toggle {
  background: var(--blush);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rose-gold);
  transition: all 0.3s ease;
}

.category-toggle.open {
  transform: rotate(180deg);
  background: var(--rose-gold);
  color: white;
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 2000px;
}

.category-services {
  padding: 20px 0;
}

.botanical-divider {
  text-align: center;
  margin-bottom: 20px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(244, 228, 222, 0.5);
  transition: all 0.3s ease;
}

.service-item:hover {
  border-color: var(--rose-gold-light);
  box-shadow: var(--shadow-soft);
}

.service-details {
  flex: 1;
  margin-right: 24px;
}

.service-name-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
}

.service-name-row h3 {
  font-size: 1.1rem;
  white-space: nowrap;
}

.service-dots {
  flex: 1;
  border-bottom: 1px dotted #ccc;
  min-width: 40px;
}

.service-price {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--rose-gold);
  font-size: 1.1rem;
  white-space: nowrap;
}

.service-desc {
  color: #777;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 8px;
}

.service-duration {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--sage);
  font-weight: 500;
}

.btn-sm {
  padding: 10px 24px;
  font-size: 0.75rem;
  white-space: nowrap;
}

/* Banner */
.services-banner {
  overflow: hidden;
}

.banner-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.banner-img {
  overflow: hidden;
  height: 300px;
}

.banner-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.banner-img:hover img {
  transform: scale(1.05);
}

/* Note */
.services-note {
  background: var(--blush);
}

.note-card {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  background: white;
  padding: 60px 48px;
  border-radius: 20px;
  box-shadow: var(--shadow-soft);
}

.note-card h3 {
  margin: 8px 0 16px;
  font-size: 1.6rem;
}

.note-card p {
  color: #666;
  margin-bottom: 28px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .category-header {
    padding: 20px 24px;
  }

  .category-info {
    gap: 14px;
  }

  .category-info h2 {
    font-size: 1.2rem;
  }

  .category-icon {
    display: none;
  }

  .service-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px;
  }

  .service-details {
    margin-right: 0;
  }

  .service-name-row {
    flex-wrap: wrap;
  }

  .service-dots {
    display: none;
  }

  .banner-grid {
    grid-template-columns: 1fr;
  }

  .banner-img {
    height: 200px;
  }

  .note-card {
    padding: 40px 24px;
  }
}
</style>
