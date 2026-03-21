<template>
  <main class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>About Harmony</h1>
        <p>Nurturing musical talent and passion since 2011.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="container">
        <div class="story-grid">
          <ScrollReveal direction="left">
            <div class="story-text">
              <span class="section-tag">Our Story</span>
              <h2>A Legacy of Musical Excellence</h2>
              <p>Founded in 2011 by Dr. Elena Vasquez and Marcus Chen, Harmony Music Academy was born from a shared belief that music education should be accessible, inspiring, and deeply personal.</p>
              <p>What started as a small piano studio in downtown Harmony Hills has grown into a comprehensive music academy serving over 500 students. Our vision has always been simple: create an environment where every student — regardless of age, background, or experience — can discover the transformative power of music.</p>
              <p>Today, Harmony is recognized as one of California's premier music academies, with award-winning instructors, state-of-the-art facilities, and a thriving community of musicians who support and inspire one another.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="story-image">
              <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800" alt="Harmony Music Academy studio" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section mission-section" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <div class="mission-box">
            <h2>Our Mission</h2>
            <p class="mission-text">To cultivate musical excellence, creativity, and lifelong appreciation for music through personalized instruction, community performance, and a supportive learning environment.</p>
          </div>
        </ScrollReveal>

        <div class="values-grid">
          <ScrollReveal v-for="(value, i) in values" :key="value.title" :delay="i * 100">
            <div class="value-card">
              <div class="value-icon" v-html="value.icon"></div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Our Facilities</h2>
          <p class="section-subtitle">State-of-the-art studios and performance spaces designed for optimal learning.</p>
        </ScrollReveal>
        <div class="facilities-grid">
          <ScrollReveal v-for="(facility, i) in facilities" :key="facility.name" :delay="i * 100">
            <div class="facility-card">
              <div class="facility-image">
                <img :src="facility.image" :alt="facility.name" loading="lazy" />
              </div>
              <div class="facility-info">
                <h3>{{ facility.name }}</h3>
                <p>{{ facility.desc }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section timeline-section" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Our Journey</h2>
          <p class="section-subtitle">Key milestones in Harmony's history.</p>
        </ScrollReveal>
        <div class="timeline">
          <ScrollReveal v-for="(item, i) in timeline" :key="item.year" :delay="i * 100">
            <div class="timeline-item" :class="{ right: i % 2 !== 0 }">
              <div class="timeline-dot"></div>
              <div class="timeline-card">
                <span class="timeline-year">{{ item.year }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Awards & Partnerships -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Awards & Recognition</h2>
          <p class="section-subtitle">Honored for our commitment to music education excellence.</p>
        </ScrollReveal>
        <div class="awards-grid">
          <ScrollReveal v-for="(award, i) in awards" :key="award.title" :delay="i * 100">
            <div class="award-card">
              <div class="award-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--secondary)" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <h3>{{ award.title }}</h3>
              <p>{{ award.desc }}</p>
              <span class="award-year">{{ award.year }}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const values = [
  {
    title: 'Excellence',
    desc: 'We maintain the highest standards of musical instruction, continually evolving our curriculum and teaching methods.',
    icon: '<svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="20,2 25,15 39,15 28,23 32,37 20,29 8,37 12,23 1,15 15,15"/></svg>'
  },
  {
    title: 'Inclusivity',
    desc: 'Music is for everyone. We welcome students of all ages, backgrounds, and abilities into our warm community.',
    icon: '<svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="var(--primary)" stroke-width="2"><circle cx="14" cy="14" r="5"/><circle cx="26" cy="14" r="5"/><path d="M4 32c0-6 5-10 10-10h12c5 0 10 4 10 10"/></svg>'
  },
  {
    title: 'Creativity',
    desc: 'Beyond technique, we nurture artistic expression, improvisation, and the joy of creating original music.',
    icon: '<svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M20 4v14M12 12l8 6 8-6"/><circle cx="20" cy="28" r="8"/><circle cx="20" cy="28" r="3"/></svg>'
  },
  {
    title: 'Community',
    desc: 'We foster connections through ensemble playing, recitals, workshops, and a supportive learning environment.',
    icon: '<svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M20 8C20 8 14 14 14 22C14 28 20 32 20 32C20 32 26 28 26 22C26 14 20 8 20 8Z"/><circle cx="20" cy="22" r="3"/></svg>'
  }
]

const facilities = [
  { name: 'Piano Studios', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800', desc: '6 acoustically-treated private piano studios, each with a grand or upright piano, ideal for lessons and practice.' },
  { name: 'Recording Studio', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800', desc: 'Professional recording studio with industry-standard equipment for student projects, audition tapes, and compositions.' },
  { name: 'Ensemble Hall', image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800', desc: 'A 120-seat performance hall with excellent acoustics, used for recitals, ensemble rehearsals, and community events.' },
  { name: 'Practice Rooms', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800', desc: '12 individual practice rooms available for student use, equipped with mirrors, music stands, and basic recording capability.' }
]

const timeline = [
  { year: '2011', title: 'Founded', desc: 'Dr. Elena Vasquez and Marcus Chen open a small piano and guitar studio in Harmony Hills.' },
  { year: '2014', title: 'Expansion', desc: 'Added violin, drums, and voice programs. Moved to a larger space with 8 studios.' },
  { year: '2016', title: 'First Grand Concert', desc: 'Hosted our first annual Grand Concert with 50 student performers at the community theater.' },
  { year: '2018', title: 'Recording Studio', desc: 'Built our professional recording studio, opening creative possibilities for students.' },
  { year: '2020', title: 'Online Lessons Launch', desc: 'Adapted to hybrid instruction, reaching students beyond Harmony Hills for the first time.' },
  { year: '2023', title: 'New Concert Hall', desc: 'Opened the 120-seat Harmony Concert Hall, a purpose-built performance and rehearsal space.' },
  { year: '2025', title: '500 Students', desc: 'Reached our milestone of 500 active students, with 20+ instructors across all programs.' }
]

const awards = [
  { title: 'Best Music Academy', desc: 'Harmony Hills Business Excellence Award for outstanding contribution to arts education.', year: '2024' },
  { title: 'Teaching Excellence', desc: 'California Music Educators Association recognition for innovative curriculum design.', year: '2023' },
  { title: 'Community Impact', desc: 'City of Harmony Hills Arts & Culture award for community engagement and outreach.', year: '2022' },
  { title: 'Student Achievement', desc: 'Over 50 student competition wins at state and regional levels across all instruments.', year: '2020-2025' }
]
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  background: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920') center/cover no-repeat;
  color: var(--white);
  text-align: center;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.85), rgba(55, 71, 79, 0.85));
}

.page-hero-content { position: relative; z-index: 2; }
.page-hero h1 { font-size: 3.5rem; margin-bottom: 16px; }
.page-hero p { font-size: 1.2rem; opacity: 0.9; max-width: 560px; margin: 0 auto; }

/* Story */
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.section-tag {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--secondary);
  display: block;
  margin-bottom: 12px;
}

.story-text h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.story-text p {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 16px;
}

.story-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.story-image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

/* Mission */
.mission-box {
  text-align: center;
  margin-bottom: 60px;
}

.mission-box h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.mission-text {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  text-align: center;
  padding: 32px 20px;
  background: var(--bg);
  border-radius: var(--radius-lg);
  transition: all var(--transition);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  margin-bottom: 16px;
}

.value-card h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.value-card p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Facilities */
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.facility-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  background: var(--white);
  transition: all var(--transition);
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.facility-image img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.facility-info {
  padding: 24px;
}

.facility-info h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.facility-info p {
  color: var(--text-light);
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
  opacity: 0.2;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding-right: 40px;
  margin-bottom: 32px;
}

.timeline-item.right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: 40px;
}

.timeline-dot {
  position: absolute;
  right: -8px;
  top: 20px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--secondary);
  border: 3px solid var(--white);
  box-shadow: 0 0 0 3px var(--primary);
  z-index: 1;
}

.timeline-item.right .timeline-dot {
  left: -8px;
  right: auto;
}

.timeline-card {
  background: var(--bg);
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.timeline-year {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 1px;
}

.timeline-card h3 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--primary);
  margin: 4px 0 8px;
}

.timeline-card p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Awards */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.award-card {
  text-align: center;
  padding: 32px 20px;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}

.award-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.award-icon {
  margin-bottom: 16px;
}

.award-card h3 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.award-card p {
  color: var(--text-light);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 12px;
}

.award-year {
  font-family: var(--font-accent);
  font-size: 0.8rem;
  color: var(--secondary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-hero { padding: 120px 0 60px; }
  .page-hero h1 { font-size: 2.5rem; }

  .story-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .story-image img {
    height: 280px;
  }

  .values-grid,
  .awards-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before { left: 0; }

  .timeline-item,
  .timeline-item.right {
    width: 100%;
    margin-left: 0;
    padding-left: 32px;
    padding-right: 0;
  }

  .timeline-dot,
  .timeline-item.right .timeline-dot {
    left: -8px;
    right: auto;
  }
}

@media (max-width: 480px) {
  .page-hero h1 { font-size: 2rem; }
  .values-grid, .awards-grid { grid-template-columns: 1fr; }
}
</style>
