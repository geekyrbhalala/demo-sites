<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Lead Technician',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    bio: 'IDA Certified Detailer with 15+ years of experience. Former automotive painter turned detailing perfectionist.',
    certifications: ['IDA Certified', 'Gtechniq Accredited']
  },
  {
    name: 'David Torres',
    role: 'Senior Detailing Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    bio: 'Ceramic coating expert with 8 years in the industry. Specializes in paint correction on exotic vehicles.',
    certifications: ['Ceramic Pro Certified', 'PPF Installer']
  },
  {
    name: 'James Wilson',
    role: 'Mobile Service Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
    bio: 'Manages our fleet of mobile detailing units. 6 years experience with a passion for customer service.',
    certifications: ['IDA Certified', 'Mobile Detail Specialist']
  }
]

const certifications = [
  { name: 'IDA Certified', desc: 'International Detailing Association' },
  { name: 'Gtechniq Accredited', desc: 'Crystal Serum Certified Installer' },
  { name: 'Ceramic Pro', desc: 'Authorized Ceramic Pro Dealer' },
  { name: 'XPEL Certified', desc: 'Paint Protection Film Installer' }
]

const products = [
  'Gtechniq', 'Ceramic Pro', 'XPEL', 'Koch Chemie', 'Gyeon', 'CarPro', 'Rupes', 'Flex'
]

const shopImages = [
  'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
  'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800'
]
</script>

<template>
  <main class="about-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494ceb8?w=1920" alt="Luxury car" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>About Apex</h1>
        <p>Our story, our team, our obsession with perfection</p>
      </div>
    </section>

    <!-- Founder Story -->
    <section class="section">
      <div class="container story-grid">
        <ScrollReveal direction="left">
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200" alt="Detailing process" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div class="story-content">
            <span class="section-tag">Our Story</span>
            <h2 class="section-title">Born from a Passion for Perfection</h2>
            <p>Apex Auto Detail was founded in 2014 by Marcus Chen, a former automotive painter who became obsessed with the art and science of detailing. What started as a one-man mobile operation has grown into the region's most trusted detailing brand.</p>
            <p>Marcus noticed that most detailing shops cut corners, using cheap products and rushing through jobs. He set out to create something different: a detail shop that treats every vehicle like a supercar, using only professional-grade products and proven techniques.</p>
            <p>Today, Apex operates both a state-of-the-art detailing shop and a fleet of fully equipped mobile units, serving over 5,000 vehicles and counting. Our mission remains the same: perfection in every detail.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section certs-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Certifications & Accreditations</h2>
            <p class="section-subtitle">Trained and certified by industry leaders</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="certs-grid">
          <ScrollReveal v-for="(cert, i) in certifications" :key="cert.name" :delay="i * 100">
            <div class="cert-card glossy-card">
              <div class="cert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 15l-2 5l2-2l2 2l-2-5" />
                  <circle cx="12" cy="9" r="6" />
                  <path d="M9 9l2 2l4-4" />
                </svg>
              </div>
              <h3>{{ cert.name }}</h3>
              <p>{{ cert.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Products We Trust</h2>
            <p class="section-subtitle">We only use professional-grade products from the best brands in the industry</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="products-grid">
            <div v-for="product in products" :key="product" class="product-badge">
              {{ product }}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Team -->
    <section class="section team-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Meet the Team</h2>
            <p class="section-subtitle">The experts behind every flawless finish</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="team-grid">
          <ScrollReveal v-for="(member, i) in team" :key="member.name" :delay="i * 150">
            <div class="team-card glossy-card">
              <div class="team-image">
                <img :src="member.image" :alt="member.name" />
              </div>
              <div class="team-info">
                <h3>{{ member.name }}</h3>
                <span class="team-role">{{ member.role }}</span>
                <p>{{ member.bio }}</p>
                <div class="team-certs">
                  <span v-for="cert in member.certifications" :key="cert" class="badge badge-info">{{ cert }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Shop Tour -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <h2 class="section-title">Our Shop</h2>
            <p class="section-subtitle">2,500 sq ft climate-controlled detailing facility</p>
            <div class="blue-line"></div>
          </div>
        </ScrollReveal>
        <div class="shop-gallery">
          <ScrollReveal v-for="(img, i) in shopImages" :key="i" :delay="i * 80">
            <div class="shop-image">
              <img :src="img" :alt="'Shop image ' + (i + 1)" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Environmental -->
    <section class="section env-section">
      <div class="container">
        <ScrollReveal>
          <div class="env-content">
            <div class="env-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="24" cy="24" r="20" />
                <path d="M24 12c-4 4-8 12 0 24c8-12 4-20 0-24" />
                <path d="M16 28c4-2 12-2 16 0" />
              </svg>
            </div>
            <h2 class="section-title">Our Environmental Commitment</h2>
            <p>At Apex, we believe premium detailing and environmental responsibility go hand in hand. Our water reclamation system captures and filters 95% of wash water. We use biodegradable, VOC-free products wherever possible. Our shop runs on 60% solar energy, and we recycle all packaging and waste products.</p>
            <div class="env-stats">
              <div class="env-stat">
                <span class="stat-number price">95%</span>
                <span>Water Reclaimed</span>
              </div>
              <div class="env-stat">
                <span class="stat-number price">60%</span>
                <span>Solar Powered</span>
              </div>
              <div class="env-stat">
                <span class="stat-number price">100%</span>
                <span>Eco Products</span>
              </div>
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

/* Story */
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.section-tag {
  display: inline-block;
  color: var(--primary);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.story-content .section-title {
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.story-content p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}

/* Certifications */
.certs-section {
  background: var(--secondary);
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.cert-card {
  padding: 32px 24px;
  text-align: center;
}

.cert-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  color: var(--primary);
}

.cert-icon svg {
  width: 100%;
  height: 100%;
}

.cert-card h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.cert-card p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Products */
.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.product-badge {
  padding: 16px 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--silver);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: var(--transition);
}

.product-badge:hover {
  border-color: var(--primary);
  color: var(--primary);
  box-shadow: var(--shadow-glow);
}

/* Team */
.team-section {
  background: var(--secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.team-card {
  overflow: hidden;
}

.team-image {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-info {
  padding: 24px;
}

.team-info h3 {
  font-size: 1.2rem;
  margin-bottom: 4px;
}

.team-role {
  color: var(--primary);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.team-info p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 12px 0;
}

.team-certs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Shop Gallery */
.shop-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.shop-image {
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.shop-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.shop-image:hover img {
  transform: scale(1.05);
}

/* Environmental */
.env-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.env-icon {
  width: 64px;
  height: 64px;
  color: var(--primary);
  margin: 0 auto 20px;
}

.env-icon svg {
  width: 100%;
  height: 100%;
}

.env-content p {
  color: var(--text-muted);
  line-height: 1.8;
  margin: 20px 0 36px;
}

.env-stats {
  display: flex;
  gap: 48px;
  justify-content: center;
}

.env-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}

.env-stat .stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.env-stat span:last-child {
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: var(--font-heading);
}

@media (max-width: 768px) {
  .page-hero { height: 300px; }
  .page-hero-content h1 { font-size: 2.2rem; }

  .story-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .certs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .shop-gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .env-stats {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 1.8rem; }

  .certs-grid {
    grid-template-columns: 1fr;
  }

  .shop-gallery {
    grid-template-columns: 1fr;
  }

  .env-stats {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
