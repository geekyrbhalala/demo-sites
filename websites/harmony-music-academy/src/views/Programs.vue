<template>
  <main class="programs-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>Our Programs</h1>
        <p>Comprehensive music education for every instrument, style, and skill level.</p>
      </div>
    </section>

    <!-- Programs List -->
    <section class="section">
      <div class="container">
        <div class="programs-list">
          <ScrollReveal v-for="(prog, i) in programs" :key="prog.name" :delay="i * 80" :direction="i % 2 === 0 ? 'left' : 'right'">
            <div class="program-detail" :class="{ reverse: i % 2 !== 0 }">
              <div class="program-image">
                <img :src="prog.image" :alt="prog.name" loading="lazy" />
                <div class="program-badge">{{ prog.type }}</div>
              </div>
              <div class="program-info">
                <h2>{{ prog.name }}</h2>
                <p class="program-desc">{{ prog.desc }}</p>
                <div class="program-levels">
                  <h4>Levels Available</h4>
                  <div class="level-tags">
                    <span v-for="level in prog.levels" :key="level" class="level-tag">{{ level }}</span>
                  </div>
                </div>
                <div class="program-meta">
                  <div class="meta-item">
                    <span class="meta-label">Duration</span>
                    <span class="meta-value">{{ prog.duration }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Per Lesson</span>
                    <span class="meta-value price">{{ prog.price }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Package (10)</span>
                    <span class="meta-value price">{{ prog.package }}</span>
                  </div>
                </div>
                <div class="program-options">
                  <span class="option-tag private">Private Lessons</span>
                  <span v-if="prog.group" class="option-tag group">Group Classes</span>
                </div>
                <div class="program-instructor">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Lead Instructor: <strong>{{ prog.instructor }}</strong></span>
                </div>
                <router-link to="/contact" class="btn btn-primary">Enroll Now</router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Group Classes Promo -->
    <section class="section group-promo" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <div class="promo-box">
            <div class="promo-text">
              <h2>Group Classes Available</h2>
              <p>Learn alongside fellow musicians! Our group classes offer a collaborative environment with 3-6 students per session, at reduced rates.</p>
              <ul class="promo-benefits">
                <li>Ensemble experience from day one</li>
                <li>Collaborative learning environment</li>
                <li>30% more affordable than private lessons</li>
                <li>Performance opportunities every semester</li>
              </ul>
              <router-link to="/schedule" class="btn btn-secondary">View Group Schedule</router-link>
            </div>
            <div class="promo-image">
              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800" alt="Group music class" loading="lazy" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const programs = [
  {
    name: 'Piano',
    type: 'Keyboard',
    desc: 'Our piano program covers classical, jazz, pop, and contemporary styles. Students develop sight-reading, technique, ear training, and performance skills through a carefully structured curriculum that adapts to each learner\'s goals.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    duration: '30 or 60 min',
    price: '$55/hr',
    package: '$480',
    group: true,
    instructor: 'Dr. Elena Vasquez'
  },
  {
    name: 'Guitar',
    type: 'String',
    desc: 'Whether you dream of acoustic fingerpicking, electric rock solos, or classical repertoire, our guitar program provides a solid foundation in technique, music theory, and creative expression.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    duration: '30 or 60 min',
    price: '$50/hr',
    package: '$440',
    group: true,
    instructor: 'Marcus Chen'
  },
  {
    name: 'Violin',
    type: 'String',
    desc: 'Develop beautiful tone, precise intonation, and expressive playing in our violin program. Students explore classical repertoire, orchestral excerpts, and contemporary pieces with emphasis on Suzuki and traditional methods.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    duration: '30 or 60 min',
    price: '$55/hr',
    package: '$480',
    group: true,
    instructor: 'Sofia Andersson'
  },
  {
    name: 'Drums & Percussion',
    type: 'Rhythm',
    desc: 'Master rhythm, timing, and groove across rock, jazz, Latin, and orchestral percussion. Our fully equipped drum studio features acoustic and electronic kits for a comprehensive learning experience.',
    image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    duration: '30 or 60 min',
    price: '$50/hr',
    package: '$440',
    group: false,
    instructor: 'Jamal Wright'
  },
  {
    name: 'Voice',
    type: 'Vocal',
    desc: 'Unlock your vocal potential through proper breathing technique, pitch control, performance coaching, and repertoire selection. Styles covered include classical, musical theater, pop, R&B, and jazz.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    duration: '30 or 60 min',
    price: '$55/hr',
    package: '$480',
    group: true,
    instructor: 'Priya Kapoor'
  },
  {
    name: 'Music Theory',
    type: 'Academic',
    desc: 'Understand the building blocks of music — scales, chords, harmony, rhythm, form, and composition. Essential for any serious musician, our theory courses complement all instrumental programs.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    duration: '60 min',
    price: '$45/hr',
    package: '$380',
    group: true,
    instructor: 'Dr. Elena Vasquez'
  },
  {
    name: 'Composition',
    type: 'Creative',
    desc: 'Learn to write your own music! From songwriting to orchestration, our composition program guides you through melody, harmony, arrangement, and notation using both traditional and digital tools.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
    levels: ['Intermediate', 'Advanced'],
    duration: '60 min',
    price: '$60/hr',
    package: '$520',
    group: false,
    instructor: 'Marcus Chen'
  },
  {
    name: 'Ensemble',
    type: 'Performance',
    desc: 'Play with others! Our ensemble program brings students together in small groups, chamber settings, and full orchestra experiences. Develop listening skills, teamwork, and stage presence.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800',
    levels: ['Intermediate', 'Advanced'],
    duration: '90 min',
    price: '$35/session',
    package: '$300',
    group: true,
    instructor: 'Sofia Andersson'
  }
]
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  background: url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920') center/cover no-repeat;
  color: var(--white);
  text-align: center;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.85), rgba(55, 71, 79, 0.85));
}

.page-hero-content {
  position: relative;
  z-index: 2;
}

.page-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 560px;
  margin: 0 auto;
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.program-detail {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;
}

.program-detail.reverse {
  direction: rtl;
}

.program-detail.reverse > * {
  direction: ltr;
}

.program-image {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.program-image img {
  width: 100%;
  height: 340px;
  object-fit: cover;
}

.program-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--primary);
  color: var(--white);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: var(--font-accent);
  letter-spacing: 1px;
}

.program-info h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.program-desc {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.program-levels h4 {
  font-size: 0.85rem;
  font-family: var(--font-accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.level-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.level-tag {
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(74, 20, 140, 0.08);
  color: var(--primary);
  border: 1px solid rgba(74, 20, 140, 0.15);
}

.program-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-light);
  font-family: var(--font-accent);
}

.meta-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

.meta-value.price {
  color: var(--primary);
  font-family: var(--font-accent);
}

.program-options {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.option-tag {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.option-tag.private {
  background: rgba(194, 24, 91, 0.1);
  color: var(--accent);
}

.option-tag.group {
  background: rgba(255, 179, 0, 0.15);
  color: #e6a100;
}

.program-instructor {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 20px;
}

.program-instructor svg {
  color: var(--primary);
}

.program-instructor strong {
  color: var(--text);
}

/* Group Promo */
.promo-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.promo-text h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.promo-text p {
  color: var(--text-light);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.promo-benefits {
  margin-bottom: 28px;
}

.promo-benefits li {
  padding: 6px 0;
  padding-left: 28px;
  position: relative;
  color: var(--text);
  font-size: 0.95rem;
}

.promo-benefits li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 16px;
  height: 16px;
  background: var(--secondary);
  border-radius: 50%;
  opacity: 0.8;
}

.promo-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.promo-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .program-detail,
  .program-detail.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 24px;
  }

  .program-image img {
    height: 240px;
  }

  .promo-box {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .promo-image img {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .page-hero h1 {
    font-size: 2rem;
  }

  .program-meta {
    gap: 16px;
  }
}
</style>
