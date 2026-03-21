<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">About Us</span>
        <h1>The Pristine<br>Story</h1>
        <p>Founded on the belief that everyone deserves a clean, healthy space to live and work.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="container">
        <div class="story-grid">
          <ScrollReveal>
            <div class="story-text">
              <span class="section-label">Our Story</span>
              <h2>From a Single Mop to 50+ Cleaning Professionals</h2>
              <p>Pristine Cleaning Co. started in 2015 when founder Maya Torres noticed a gap in San Francisco's cleaning industry: services that were either affordable but unreliable, or professional but overpriced. She believed it was possible to offer both quality and value.</p>
              <p>Starting with just herself and a commitment to eco-friendly products, Maya built Pristine from the ground up. Today, we're a team of over 50 trained professionals serving both residential and commercial clients across the Bay Area.</p>
              <p>Our approach hasn't changed: treat every space like our own, use products we'd trust in our homes, and never cut corners. It's simple, and it works.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200">
            <div class="story-image">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200" alt="Pristine Cleaning team" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>These principles guide every decision we make and every space we clean.</p>
          </div>
        </ScrollReveal>

        <div class="values-grid">
          <ScrollReveal v-for="(v, i) in values" :key="i" :delay="i * 100">
            <div class="value-card">
              <div class="value-icon" v-html="v.icon"></div>
              <h3>{{ v.title }}</h3>
              <p>{{ v.description }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Our People</span>
            <h2>Meet the Leadership Team</h2>
            <p>Passionate professionals dedicated to making your space shine.</p>
          </div>
        </ScrollReveal>

        <div class="team-grid">
          <ScrollReveal v-for="(m, i) in team" :key="i" :delay="i * 100">
            <div class="team-card">
              <div class="team-avatar">{{ m.initials }}</div>
              <h4>{{ m.name }}</h4>
              <span class="team-role">{{ m.role }}</span>
              <p>{{ m.bio }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Our Journey</span>
            <h2>Milestones</h2>
          </div>
        </ScrollReveal>

        <div class="timeline">
          <ScrollReveal v-for="(m, i) in milestones" :key="i" :delay="i * 100">
            <div class="timeline-item" :class="{ right: i % 2 === 1 }">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-year">{{ m.year }}</span>
                <h4>{{ m.title }}</h4>
                <p>{{ m.description }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-label">Credentials</span>
            <h2>Certifications &amp; Standards</h2>
            <p>We hold ourselves to the highest industry standards.</p>
          </div>
        </ScrollReveal>

        <div class="certs-grid">
          <ScrollReveal v-for="(c, i) in certifications" :key="i" :delay="i * 80">
            <div class="cert-card">
              <div class="cert-icon" v-html="c.icon"></div>
              <h4>{{ c.title }}</h4>
              <p>{{ c.description }}</p>
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
            <h2>Join 2,000+ Happy Clients</h2>
            <p>Experience the Pristine difference with a risk-free first cleaning.</p>
            <router-link to="/booking" class="btn btn-white btn-lg">Book Your First Clean</router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const values = [
  { title: 'Eco-Friendly', description: 'We exclusively use plant-based, biodegradable cleaning products that are safe for your family, pets, and the planet.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>' },
  { title: 'Reliability', description: 'We show up on time, every time. Our 99.5% on-time arrival rate means you can always count on us.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { title: 'Thoroughness', description: 'We don\'t cut corners. Our 50-point checklist ensures nothing is missed, from ceiling fans to baseboards.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
  { title: 'Transparency', description: 'No hidden fees, no surprises. Every service is clearly priced upfront, and you only pay for what you need.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' }
]

const team = [
  { name: 'Maya Torres', role: 'Founder & CEO', initials: 'MT', bio: 'Former environmental scientist who combined her passion for sustainability with cleaning expertise.' },
  { name: 'James Park', role: 'Operations Director', initials: 'JP', bio: 'Manages our 50+ person team with military-grade precision and a heart of gold.' },
  { name: 'Aisha Johnson', role: 'Client Relations Lead', initials: 'AJ', bio: 'Ensures every client has a five-star experience from booking to completion.' },
  { name: 'Carlos Rivera', role: 'Training Manager', initials: 'CR', bio: 'Develops our proprietary training program and ensures quality standards.' }
]

const milestones = [
  { year: '2015', title: 'Founded', description: 'Maya Torres launches Pristine Cleaning as a solo operation from her SF apartment.' },
  { year: '2017', title: 'First Office', description: 'Grew to 10 employees and opened our first office space in the Mission District.' },
  { year: '2019', title: '1,000 Clients', description: 'Hit the milestone of 1,000 active residential clients across San Francisco.' },
  { year: '2021', title: 'Commercial Launch', description: 'Expanded into commercial cleaning, partnering with 50+ Bay Area businesses.' },
  { year: '2023', title: 'Eco Certification', description: 'Became the first cleaning company in SF to receive Green Business certification.' },
  { year: '2025', title: '2,000+ Clients', description: 'Serving over 2,000 happy homes and businesses with a team of 50+ professionals.' }
]

const certifications = [
  { title: 'Green Business Certified', description: 'Recognized by the SF Green Business Program for sustainable practices.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { title: 'Fully Insured & Bonded', description: '$2M general liability insurance and bonded employees for your protection.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>' },
  { title: 'Background Verified', description: 'Every team member passes a comprehensive background check and drug screening.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>' },
  { title: 'ISSA Certified', description: 'Meets the Cleaning Industry Management Standard for quality and professionalism.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' }
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

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text .section-label { margin-bottom: 0.75rem; }
.story-text h2 { margin-bottom: 1.5rem; }
.story-text p { font-size: 1rem; line-height: 1.8; }

.story-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
}

.value-icon {
  width: 56px;
  height: 56px;
  background: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: var(--primary);
  padding: 14px;
}

.value-card h3 { font-size: 1.15rem; margin-bottom: 0.75rem; }
.value-card p { font-size: 0.9rem; margin: 0; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.team-card {
  text-align: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 1.5rem;
  transition: all var(--transition);
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0 auto 1.25rem;
}

.team-card h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
.team-role { font-size: 0.85rem; color: var(--primary); font-weight: 500; display: block; margin-bottom: 1rem; }
.team-card p { font-size: 0.85rem; margin: 0; }

/* Timeline */
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
  position: relative;
}

.timeline-item.right {
  justify-content: flex-end;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 1.5rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--white);
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  width: 45%;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}

.timeline-year {
  font-family: var(--font-accent);
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 700;
}

.timeline-content h4 { font-size: 1rem; margin: 0.25rem 0 0.5rem; }
.timeline-content p { font-size: 0.85rem; margin: 0; }

.certs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.cert-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
}

.cert-icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
  margin: 0 auto 1rem;
  padding: 8px;
}

.cert-card h4 { font-size: 1rem; margin-bottom: 0.5rem; }
.cert-card p { font-size: 0.85rem; margin: 0; }

/* CTA */
.cta-section {
  background: linear-gradient(135deg, var(--secondary) 0%, #283593 100%);
  padding: 6rem 0;
}

.cta-content { text-align: center; }
.cta-content h2 { color: var(--white); margin-bottom: 1rem; }
.cta-content p { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 2rem; }

@media (max-width: 768px) {
  .story-grid { grid-template-columns: 1fr; gap: 2rem; }
  .story-image img { height: 300px; }
  .values-grid, .team-grid, .certs-grid { grid-template-columns: 1fr 1fr; }
  .timeline::before { left: 20px; }
  .timeline-item, .timeline-item.right { justify-content: flex-end; }
  .timeline-dot { left: 20px; }
  .timeline-content { width: calc(100% - 50px); }
}

@media (max-width: 480px) {
  .values-grid, .team-grid, .certs-grid { grid-template-columns: 1fr; }
}
</style>
