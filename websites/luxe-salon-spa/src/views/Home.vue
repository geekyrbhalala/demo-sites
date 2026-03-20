<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920" alt="LUXE Salon & Spa" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content container">
        <span class="hero-script">Indulge in the Art of Self-Care</span>
        <h1>Where Beauty <br>Meets Tranquility</h1>
        <p>Premium hair salon and day spa services designed to nurture your body, mind, and soul in an atmosphere of pure luxury.</p>
        <div class="hero-btns">
          <router-link to="/booking" class="btn btn-primary">Book Your Experience</router-link>
          <router-link to="/services" class="btn btn-secondary btn-hero-sec">Our Services</router-link>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section services-preview">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">What we offer</span>
            <h2>Our Signature Services</h2>
            <p>From rejuvenating facials to transformative hair styling, every service is a curated experience designed to leave you feeling radiant.</p>
          </div>
        </ScrollReveal>

        <div class="services-grid">
          <ScrollReveal v-for="(service, i) in services" :key="service.title" :delay="i * 100">
            <router-link to="/services" class="service-card">
              <div class="service-icon" v-html="service.icon"></div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
              <span class="service-link">Explore <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </router-link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Before/After Transformation -->
    <section class="section transformation">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">Transformations</span>
            <h2>See the Difference</h2>
            <p>Witness the artistry of our stylists through stunning before and after transformations.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="transform-container">
            <div class="transform-slider" @mousemove="handleSlider" @touchmove="handleTouchSlider" ref="sliderRef">
              <div class="transform-before">
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200" alt="Before styling" />
                <span class="transform-label label-before">Before</span>
              </div>
              <div class="transform-after" :style="{ clipPath: `inset(0 0 0 ${sliderPos}%)` }">
                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200" alt="After styling" />
                <span class="transform-label label-after">After</span>
              </div>
              <div class="slider-handle" :style="{ left: sliderPos + '%' }">
                <div class="handle-line"></div>
                <div class="handle-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M8 4l-6 8 6 8M16 4l6 8-6 8"/>
                  </svg>
                </div>
                <div class="handle-line"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Meet Our Artists -->
    <section class="section team-preview" style="background: var(--blush);">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">Our talented team</span>
            <h2>Meet Our Artists</h2>
            <p>Passionate professionals dedicated to making you look and feel your absolute best.</p>
          </div>
        </ScrollReveal>

        <div class="team-grid">
          <ScrollReveal v-for="(member, i) in team" :key="member.name" :delay="i * 150">
            <div class="team-card">
              <div class="team-photo">
                <img :src="member.photo" :alt="member.name" />
                <div class="team-overlay">
                  <span class="team-role">{{ member.role }}</span>
                </div>
              </div>
              <h4>{{ member.name }}</h4>
              <p>{{ member.specialty }}</p>
            </div>
          </ScrollReveal>
        </div>

        <div class="team-cta">
          <router-link to="/about" class="btn btn-secondary">Meet the Full Team</router-link>
        </div>
      </div>
    </section>

    <!-- Client Reviews -->
    <section class="section reviews">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">Kind words</span>
            <h2>What Our Clients Say</h2>
          </div>
        </ScrollReveal>

        <div class="reviews-grid">
          <ScrollReveal v-for="(review, i) in reviews" :key="i" :delay="i * 100">
            <div class="review-card">
              <StarRating :rating="review.stars" />
              <p class="review-text">"{{ review.text }}"</p>
              <div class="review-author">
                <div class="author-avatar">{{ review.name.charAt(0) }}</div>
                <div>
                  <strong>{{ review.name }}</strong>
                  <span>{{ review.service }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Promotional Banner -->
    <section class="promo-banner">
      <div class="container">
        <ScrollReveal>
          <div class="promo-content">
            <div class="promo-text">
              <span class="script-accent promo-script">Limited time offer</span>
              <h2>Spring Renewal Package</h2>
              <p>Enjoy 20% off our signature facial, Swedish massage, and botanical hair treatment when booked together. The ultimate rejuvenation experience.</p>
              <div class="promo-price">
                <span class="price-old">$285</span>
                <span class="price-new">$228</span>
              </div>
              <router-link to="/booking" class="btn btn-primary">Book This Package</router-link>
            </div>
            <div class="promo-image">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200" alt="Spa experience" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import StarRating from '../components/StarRating.vue'

const sliderPos = ref(50)
const sliderRef = ref(null)

const handleSlider = (e) => {
  if (!sliderRef.value) return
  const rect = sliderRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPos.value = pct
}

const handleTouchSlider = (e) => {
  if (!sliderRef.value) return
  const rect = sliderRef.value.getBoundingClientRect()
  const x = e.touches[0].clientX - rect.left
  const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
  sliderPos.value = pct
}

const services = [
  {
    title: 'Hair Studio',
    desc: 'Expert cuts, color, balayage, and styling from our master artisans using premium organic products.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><circle cx="14" cy="34" r="6"/><circle cx="34" cy="34" r="6"/><path d="M20 34c0-12 4-20 4-20M28 34c0-12-4-20-4-20"/><path d="M24 8c-2-4 0-6 0-6s2 2 0 6"/></svg>'
  },
  {
    title: 'Skin & Facials',
    desc: 'Customized facials, peels, and advanced skincare treatments for a naturally luminous complexion.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><circle cx="24" cy="20" r="10"/><path d="M14 20c0 8 10 18 10 18s10-10 10-18"/><path d="M20 16c1-2 4-2 4 0s3 2 4 0"/><circle cx="19" cy="19" r="1" fill="#b76e79"/><circle cx="29" cy="19" r="1" fill="#b76e79"/></svg>'
  },
  {
    title: 'Nail Studio',
    desc: 'Luxurious manicures, pedicures, and nail art in a relaxing, pristine environment.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><path d="M16 36h16c2 0 4-2 4-4V18c0-6-4-10-12-10S12 12 12 18v14c0 2 2 4 4 4z"/><path d="M20 12v20M24 10v22M28 12v20"/></svg>'
  },
  {
    title: 'Massage & Body',
    desc: 'Swedish, deep tissue, hot stone, and aromatherapy massage for complete mind-body wellness.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#b76e79" stroke-width="1.5"><path d="M12 36c4-8 8-12 12-12s8 4 12 12"/><circle cx="24" cy="16" r="6"/><path d="M18 28c2-2 4-2 6 0s4 2 6 0"/></svg>'
  }
]

const team = [
  {
    name: 'Isabella Rossi',
    role: 'Master Stylist',
    specialty: 'Color & Balayage Specialist',
    photo: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800'
  },
  {
    name: 'Sophia Chen',
    role: 'Skin Specialist',
    specialty: 'Advanced Facials & Peels',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800'
  },
  {
    name: 'Emma Laurent',
    role: 'Massage Therapist',
    specialty: 'Deep Tissue & Aromatherapy',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800'
  }
]

const reviews = [
  {
    name: 'Olivia Martinez',
    stars: 5,
    text: 'Absolutely incredible experience! Isabella transformed my hair with the most gorgeous balayage. The salon atmosphere is so calming and luxurious. Will definitely be coming back!',
    service: 'Hair Coloring'
  },
  {
    name: 'Rachel Thompson',
    stars: 5,
    text: 'The botanical facial was heavenly. My skin has never looked this radiant. Sophia really knows her craft and the products they use are top-notch organic brands.',
    service: 'Botanical Facial'
  },
  {
    name: 'Jennifer Wu',
    stars: 5,
    text: 'Best massage I have ever had. The hot stone treatment melted away months of tension. The whole spa area is beautifully designed with a garden theme. Pure bliss.',
    service: 'Hot Stone Massage'
  },
  {
    name: 'Amanda Blake',
    stars: 4,
    text: 'Love the nail studio! The gel manicure lasted over three weeks and the nail art was exactly what I wanted. Such a serene and clean environment. Highly recommend.',
    service: 'Gel Manicure'
  },
  {
    name: 'Sarah Kim',
    stars: 5,
    text: 'I booked the bridal package for my wedding and the team went above and beyond. Hair, makeup, nails all done to perfection. My bridesmaids and I felt like royalty!',
    service: 'Bridal Package'
  }
]
</script>

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
  background: linear-gradient(135deg, rgba(254, 250, 246, 0.85) 0%, rgba(244, 228, 222, 0.6) 50%, rgba(254, 250, 246, 0.3) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 650px;
}

.hero-script {
  font-family: var(--font-script);
  font-size: 2.5rem;
  color: var(--rose-gold);
  display: block;
  margin-bottom: 8px;
}

.hero h1 {
  font-size: 3.8rem;
  line-height: 1.15;
  margin-bottom: 20px;
  color: var(--charcoal);
}

.hero p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 36px;
  max-width: 500px;
  line-height: 1.8;
}

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-hero-sec {
  background: rgba(255,255,255,0.5);
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.hero-scroll span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--rose-gold);
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: var(--rose-gold);
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  50.01% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* Services Preview */
.services-preview {
  background: var(--warm-white);
}

.section-title-script {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 4px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.service-card {
  display: block;
  background: white;
  padding: 40px 28px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 2px solid var(--rose-gold);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(183, 110, 121, 0.12);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.service-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: var(--charcoal);
}

.service-card p {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 16px;
  line-height: 1.6;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--rose-gold);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Transformation */
.transformation {
  background: var(--blush);
}

.transform-container {
  max-width: 800px;
  margin: 0 auto;
}

.transform-slider {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: col-resize;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-medium);
}

.transform-before,
.transform-after {
  position: absolute;
  inset: 0;
}

.transform-before img,
.transform-after img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transform-after {
  z-index: 2;
}

.transform-label {
  position: absolute;
  bottom: 20px;
  padding: 8px 20px;
  background: rgba(44, 44, 44, 0.7);
  color: white;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
}

.label-before {
  left: 20px;
}

.label-after {
  right: 20px;
}

.slider-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
}

.handle-line {
  flex: 1;
  width: 2px;
  background: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.handle-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--rose-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  flex-shrink: 0;
}

/* Team Preview */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.team-card {
  text-align: center;
}

.team-photo {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid white;
  box-shadow: var(--shadow-soft);
}

.team-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-photo img {
  transform: scale(1.08);
}

.team-overlay {
  position: absolute;
  inset: 0;
  background: rgba(183, 110, 121, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.team-role {
  color: white;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.team-card h4 {
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.team-card p {
  color: var(--rose-gold);
  font-size: 0.9rem;
}

.team-cta {
  text-align: center;
  margin-top: 48px;
}

/* Reviews */
.reviews {
  background: var(--warm-white);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.review-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
}

.review-text {
  margin: 16px 0 20px;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  font-style: italic;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--blush);
  color: var(--rose-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
}

.review-author strong {
  display: block;
  font-size: 0.9rem;
}

.review-author span {
  font-size: 0.8rem;
  color: #999;
}

/* Promo Banner */
.promo-banner {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--forest) 0%, #1a3329 100%);
}

.promo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.promo-script {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 8px;
}

.promo-text h2 {
  color: white;
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.promo-text p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
  font-size: 1.05rem;
}

.promo-price {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.price-old {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: line-through;
}

.price-new {
  font-size: 2.2rem;
  color: var(--rose-gold);
  font-family: var(--font-heading);
  font-weight: 700;
}

.promo-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.promo-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid > *:last-child {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.6rem;
  }

  .hero-script {
    font-size: 1.8rem;
  }

  .hero-scroll {
    display: none;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .team-grid > *:last-child {
    grid-column: 1 / -1;
    max-width: 280px;
    margin: 0 auto;
  }

  .team-photo {
    width: 150px;
    height: 150px;
  }

  .promo-content {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .promo-image {
    order: -1;
  }

  .promo-image img {
    height: 280px;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .reviews-grid > *:last-child {
    display: block;
  }
}

@media (max-width: 500px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-script {
    font-size: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-grid > *:last-child {
    max-width: none;
  }

  .hero-btns {
    flex-direction: column;
  }
}
</style>
