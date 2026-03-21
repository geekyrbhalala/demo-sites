<template>
  <main class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <span class="hero-tag">Est. 2011 &middot; Harmony Hills, CA</span>
        <h1>Where Music<br>Comes Alive</h1>
        <p class="hero-sub">World-class instruction in piano, guitar, violin, drums, voice, and music theory for students of every age and skill level.</p>
        <div class="hero-btns">
          <router-link to="/programs" class="btn btn-secondary">Start Your Journey</router-link>
          <router-link to="/schedule" class="btn btn-outline" style="border-color:#fff;color:#fff;">View Schedule</router-link>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">500+</span>
            <span class="stat-label">Students</span>
          </div>
          <div class="stat">
            <span class="stat-num">20+</span>
            <span class="stat-label">Instructors</span>
          </div>
          <div class="stat">
            <span class="stat-num">15</span>
            <span class="stat-label">Years</span>
          </div>
          <div class="stat">
            <span class="stat-num">50+</span>
            <span class="stat-label">Awards</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>

    <!-- Programs -->
    <section class="section programs-section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Our Programs</h2>
          <p class="section-subtitle">Discover your instrument and unlock your musical potential with our comprehensive programs.</p>
        </ScrollReveal>
        <div class="programs-grid">
          <ScrollReveal v-for="(prog, i) in programs" :key="prog.name" :delay="i * 100">
            <router-link to="/programs" class="program-card">
              <div class="program-icon" v-html="prog.icon"></div>
              <h3>{{ prog.name }}</h3>
              <p>{{ prog.desc }}</p>
              <span class="program-link">Explore &rarr;</span>
            </router-link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Featured Instructors -->
    <section class="section instructors-preview" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Meet Our Instructors</h2>
          <p class="section-subtitle">Learn from accomplished musicians who are passionate about teaching.</p>
        </ScrollReveal>
        <div class="instructors-grid">
          <ScrollReveal v-for="(inst, i) in instructors" :key="inst.name" :delay="i * 150">
            <div class="instructor-card">
              <div class="instructor-photo">
                <img :src="inst.photo" :alt="inst.name" loading="lazy" />
              </div>
              <h3>{{ inst.name }}</h3>
              <span class="instructor-role">{{ inst.role }}</span>
              <p class="instructor-quote">"{{ inst.quote }}"</p>
              <router-link to="/instructors" class="btn btn-outline" style="font-size:0.85rem;padding:8px 20px;">View Profile</router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials-section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Student Stories</h2>
          <p class="section-subtitle">Hear from our students and parents about their experience at Harmony.</p>
        </ScrollReveal>
        <div class="testimonials-grid">
          <ScrollReveal v-for="(t, i) in testimonials" :key="i" :delay="i * 100">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <span v-for="s in 5" :key="s">&#9733;</span>
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

    <!-- Recital Teaser -->
    <section class="section recital-teaser">
      <div class="recital-overlay"></div>
      <div class="container recital-content">
        <ScrollReveal>
          <span class="recital-tag">Upcoming Event</span>
          <h2>Spring Recital 2026</h2>
          <p>Join us for an evening of extraordinary performances by our talented students. From classical masterpieces to contemporary compositions, experience the magic of live music.</p>
          <div class="recital-details">
            <div class="recital-detail">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>April 18, 2026</span>
            </div>
            <div class="recital-detail">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>7:00 PM</span>
            </div>
            <div class="recital-detail">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Harmony Concert Hall</span>
            </div>
          </div>
          <router-link to="/recitals" class="btn btn-secondary">Learn More</router-link>
        </ScrollReveal>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section newsletter-section" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <div class="newsletter-box">
            <div class="newsletter-text">
              <h2>Stay in Tune</h2>
              <p>Subscribe to our newsletter for recital updates, practice tips, and special offers.</p>
            </div>
            <form class="newsletter-form" @submit.prevent="handleNewsletter">
              <input type="email" v-model="newsletterEmail" placeholder="Enter your email" required />
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </ScrollReveal>
      </div>
      <Modal :isOpen="showNewsletterModal" @close="showNewsletterModal = false" title="Subscribed!" message="Welcome to the Harmony family! You'll receive our next newsletter soon." buttonText="Wonderful" />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const newsletterEmail = ref('')
const showNewsletterModal = ref(false)

const handleNewsletter = () => {
  showNewsletterModal.value = true
  newsletterEmail.value = ''
}

const programs = [
  { name: 'Piano', desc: 'From classical to jazz, master the keyboard with expert guidance.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><rect x="6" y="12" width="36" height="24" rx="2"/><line x1="14" y1="12" x2="14" y2="36"/><line x1="22" y1="12" x2="22" y2="36"/><line x1="30" y1="12" x2="30" y2="36"/><rect x="10" y="12" width="4" height="14" fill="var(--primary)" rx="1"/><rect x="18" y="12" width="4" height="14" fill="var(--primary)" rx="1"/><rect x="26" y="12" width="4" height="14" fill="var(--primary)" rx="1"/><rect x="34" y="12" width="4" height="14" fill="var(--primary)" rx="1"/></svg>' },
  { name: 'Guitar', desc: 'Acoustic, electric, or classical — find your style and voice.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><ellipse cx="24" cy="30" rx="10" ry="12"/><line x1="24" y1="18" x2="24" y2="4"/><line x1="20" y1="4" x2="28" y2="4"/><circle cx="24" cy="30" r="3" fill="var(--primary)"/></svg>' },
  { name: 'Violin', desc: 'Develop beautiful tone and technique in our string program.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><ellipse cx="20" cy="32" rx="8" ry="10"/><line x1="20" y1="22" x2="20" y2="6"/><line x1="16" y1="6" x2="24" y2="6"/><path d="M12 28c-2-2-2-6 0-8"/><path d="M28 28c2-2 2-6 0-8"/><line x1="36" y1="10" x2="36" y2="40" stroke-width="1.5"/></svg>' },
  { name: 'Drums', desc: 'Rhythm, timing, and groove for all genres and styles.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><ellipse cx="24" cy="20" rx="14" ry="6"/><path d="M10 20v12c0 3.3 6.3 6 14 6s14-2.7 14-6V20"/><line x1="6" y1="10" x2="16" y2="20" stroke-linecap="round"/><line x1="42" y1="10" x2="32" y2="20" stroke-linecap="round"/><circle cx="6" cy="8" r="2" fill="var(--primary)"/><circle cx="42" cy="8" r="2" fill="var(--primary)"/></svg>' },
  { name: 'Voice', desc: 'Unlock your vocal potential with breathing and performance coaching.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><rect x="18" y="6" width="12" height="20" rx="6"/><path d="M12 22c0 6.6 5.4 12 12 12s12-5.4 12-12"/><line x1="24" y1="34" x2="24" y2="42"/><line x1="18" y1="42" x2="30" y2="42"/></svg>' },
  { name: 'Music Theory', desc: 'Understand the language of music — harmony, rhythm, and composition.', icon: '<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="2"><line x1="8" y1="16" x2="40" y2="16"/><line x1="8" y1="22" x2="40" y2="22"/><line x1="8" y1="28" x2="40" y2="28"/><line x1="8" y1="34" x2="40" y2="34"/><circle cx="20" cy="28" r="3" fill="var(--primary)"/><line x1="23" y1="28" x2="23" y2="16"/><circle cx="32" cy="22" r="3" fill="var(--primary)"/><line x1="35" y1="22" x2="35" y2="10"/></svg>' }
]

const instructors = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'Piano & Music Theory',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    quote: 'Music is the art of thinking with sounds.'
  },
  {
    name: 'Marcus Chen',
    role: 'Guitar & Composition',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    quote: 'Every chord tells a story waiting to be heard.'
  },
  {
    name: 'Sofia Andersson',
    role: 'Violin & Ensemble',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    quote: 'In music, we find the truest expression of ourselves.'
  }
]

const testimonials = [
  { text: 'My daughter started piano lessons at Harmony two years ago and her progress has been incredible. The recitals are always such a proud moment for our family.', name: 'Jennifer Walters', role: 'Parent', initials: 'JW' },
  { text: 'The instructors at Harmony don\'t just teach you notes — they teach you to feel the music. I went from complete beginner to performing in just 8 months.', name: 'David Kim', role: 'Adult Guitar Student', initials: 'DK' },
  { text: 'As a voice student, I\'ve found the perfect environment to grow. The supportive community and professional instruction make all the difference.', name: 'Amara Johnson', role: 'Voice Student', initials: 'AJ' }
]
</script>

<style scoped>
/* Hero */
.hero {
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--white);
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(74, 20, 140, 0.75), rgba(44, 44, 44, 0.85));
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: var(--header-height);
}

.hero-tag {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: var(--secondary);
  margin-bottom: 24px;
  text-transform: uppercase;
}

.hero h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease;
}

.hero-sub {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 40px;
  opacity: 0.9;
  line-height: 1.8;
  animation: fadeInUp 0.8s 0.2s ease both;
}

.hero-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s 0.4s ease both;
}

.hero-stats {
  display: flex;
  gap: 48px;
  justify-content: center;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s 0.6s ease both;
}

.stat {
  text-align: center;
}

.stat-num {
  display: block;
  font-family: var(--font-accent);
  font-size: 2rem;
  font-weight: 700;
  color: var(--secondary);
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: float 2s ease-in-out infinite;
  z-index: 2;
}

/* Programs */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.program-card {
  display: block;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px 28px;
  text-align: center;
  transition: all var(--transition);
  border: 2px solid transparent;
  box-shadow: var(--shadow-sm);
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.program-icon {
  margin-bottom: 20px;
}

.program-card h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.program-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.program-link {
  font-weight: 600;
  color: var(--secondary);
  font-size: 0.9rem;
  transition: color var(--transition);
}

.program-card:hover .program-link {
  color: var(--accent);
}

/* Instructors */
.instructors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.instructor-card {
  text-align: center;
  padding: 32px 24px;
}

.instructor-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid var(--secondary);
  box-shadow: var(--shadow-md);
}

.instructor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instructor-card h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 4px;
}

.instructor-role {
  font-size: 0.9rem;
  color: var(--secondary);
  font-weight: 600;
  display: block;
  margin-bottom: 16px;
}

.instructor-quote {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition);
}

.testimonial-card:hover {
  transform: translateY(-4px);
}

.testimonial-stars {
  color: var(--secondary);
  font-size: 1.1rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.testimonial-text {
  font-style: italic;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  font-family: var(--font-accent);
}

.testimonial-author strong {
  display: block;
  font-size: 0.95rem;
  color: var(--text);
}

.testimonial-author span {
  font-size: 0.8rem;
  color: var(--text-light);
}

/* Recital Teaser */
.recital-teaser {
  position: relative;
  background: url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200') center/cover no-repeat;
  color: var(--white);
}

.recital-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.9), rgba(55, 71, 79, 0.9));
}

.recital-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.recital-tag {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: var(--secondary);
  text-transform: uppercase;
  margin-bottom: 16px;
  background: rgba(255, 179, 0, 0.15);
  padding: 4px 14px;
  border-radius: 20px;
}

.recital-teaser h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.recital-teaser p {
  font-size: 1.05rem;
  opacity: 0.9;
  line-height: 1.8;
  margin-bottom: 28px;
}

.recital-details {
  display: flex;
  gap: 28px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.recital-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-accent);
  font-size: 0.9rem;
}

.recital-detail svg {
  color: var(--secondary);
}

/* Newsletter */
.newsletter-box {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: var(--radius-lg);
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 40px;
  color: var(--white);
}

.newsletter-text {
  flex: 1;
}

.newsletter-text h2 {
  font-size: 2rem;
  margin-bottom: 8px;
  color: var(--white);
}

.newsletter-text p {
  opacity: 0.85;
  font-size: 1.05rem;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  flex: 1;
  max-width: 440px;
}

.newsletter-form input {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
}

.newsletter-form input::placeholder {
  color: var(--text-light);
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .hero-stats {
    gap: 24px;
    flex-wrap: wrap;
  }

  .stat-num {
    font-size: 1.5rem;
  }

  .programs-grid,
  .instructors-grid,
  .testimonials-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .newsletter-box {
    flex-direction: column;
    padding: 40px 24px;
    text-align: center;
  }

  .newsletter-form {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
  }

  .recital-details {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .hero-sub {
    font-size: 1rem;
  }

  .programs-grid,
  .instructors-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .recital-teaser h2 {
    font-size: 2rem;
  }
}
</style>
