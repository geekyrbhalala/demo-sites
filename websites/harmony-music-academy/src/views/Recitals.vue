<template>
  <main class="recitals-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>Recitals & Events</h1>
        <p>Celebrate the magic of live music at our student showcases and special events.</p>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Upcoming Events</h2>
          <p class="section-subtitle">Mark your calendars for these exciting performances and workshops.</p>
        </ScrollReveal>

        <div class="events-timeline">
          <ScrollReveal v-for="(event, i) in upcomingEvents" :key="event.title" :delay="i * 100">
            <div class="event-card" :class="{ featured: event.featured }">
              <div class="event-date">
                <span class="event-month">{{ event.month }}</span>
                <span class="event-day">{{ event.day }}</span>
                <span class="event-year">{{ event.year }}</span>
              </div>
              <div class="event-info">
                <div class="event-tags">
                  <span class="event-tag" :class="event.tagClass">{{ event.tag }}</span>
                  <span v-if="event.featured" class="event-tag featured-tag">Featured</span>
                </div>
                <h3>{{ event.title }}</h3>
                <p>{{ event.desc }}</p>
                <div class="event-meta">
                  <span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ event.time }}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {{ event.location }}
                  </span>
                </div>
                <router-link to="/contact" class="btn btn-primary event-cta">{{ event.cta }}</router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Student Spotlight -->
    <section class="section spotlight-section" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Student Spotlight</h2>
          <p class="section-subtitle">Celebrating the achievements of our talented students.</p>
        </ScrollReveal>
        <div class="spotlight-grid">
          <ScrollReveal v-for="(student, i) in spotlights" :key="student.name" :delay="i * 100">
            <div class="spotlight-card">
              <div class="spotlight-photo">
                <img :src="student.photo" :alt="student.name" loading="lazy" />
              </div>
              <div class="spotlight-info">
                <h3>{{ student.name }}</h3>
                <span class="spotlight-instrument">{{ student.instrument }}</span>
                <p>{{ student.achievement }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Past Recitals Gallery -->
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Past Recital Highlights</h2>
          <p class="section-subtitle">Relive the magic of our previous performances.</p>
        </ScrollReveal>
        <div class="gallery-grid">
          <ScrollReveal v-for="(img, i) in galleryImages" :key="i" :delay="i * 80">
            <div class="gallery-item">
              <img :src="img.src" :alt="img.alt" loading="lazy" />
              <div class="gallery-caption">
                <h4>{{ img.title }}</h4>
                <span>{{ img.date }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Annual Concert -->
    <section class="section annual-section">
      <div class="annual-overlay"></div>
      <div class="container annual-content">
        <ScrollReveal>
          <span class="annual-tag">Annual Event</span>
          <h2>The Harmony Grand Concert</h2>
          <p>Every December, Harmony Music Academy presents its flagship event — a full evening of student and faculty performances at the Harmony Hills Performing Arts Center. Over 200 performers take the stage in this celebration of musical excellence.</p>
          <div class="annual-features">
            <div class="annual-feature">
              <span class="feature-num">200+</span>
              <span>Performers</span>
            </div>
            <div class="annual-feature">
              <span class="feature-num">800+</span>
              <span>Audience</span>
            </div>
            <div class="annual-feature">
              <span class="feature-num">3</span>
              <span>Hours</span>
            </div>
          </div>
          <router-link to="/contact" class="btn btn-secondary">Register to Perform</router-link>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const upcomingEvents = [
  {
    month: 'APR', day: '18', year: '2026',
    title: 'Spring Recital 2026',
    desc: 'An evening of extraordinary performances featuring piano, violin, guitar, and vocal soloists. Students from all levels showcase their semester progress.',
    time: '7:00 PM', location: 'Harmony Concert Hall',
    tag: 'Recital', tagClass: 'tag-recital', cta: 'Register to Perform', featured: true
  },
  {
    month: 'MAY', day: '02', year: '2026',
    title: 'Jazz Night',
    desc: 'Our jazz ensemble and advanced students perform standards and original compositions in an intimate club-style setting.',
    time: '8:00 PM', location: 'The Blue Note Lounge',
    tag: 'Concert', tagClass: 'tag-concert', cta: 'Reserve Seats', featured: false
  },
  {
    month: 'MAY', day: '16', year: '2026',
    title: 'Chamber Music Festival',
    desc: 'Small ensemble performances featuring string quartets, piano trios, and wind ensembles. A celebration of collaborative musicianship.',
    time: '3:00 PM', location: 'Harmony Concert Hall',
    tag: 'Festival', tagClass: 'tag-festival', cta: 'Learn More', featured: false
  },
  {
    month: 'JUN', day: '07', year: '2026',
    title: 'Young Musicians Showcase',
    desc: 'Our youngest students (ages 5-12) take the stage for their first performances. A heartwarming afternoon of new beginnings.',
    time: '2:00 PM', location: 'Academy Recital Room',
    tag: 'Showcase', tagClass: 'tag-showcase', cta: 'Register to Perform', featured: false
  },
  {
    month: 'JUN', day: '21', year: '2026',
    title: 'Summer Music Workshop',
    desc: 'A week-long intensive workshop open to the public. Masterclasses, group sessions, and performances covering all instruments and genres.',
    time: '9:00 AM - 5:00 PM', location: 'Harmony Music Academy',
    tag: 'Workshop', tagClass: 'tag-workshop', cta: 'Enroll Now', featured: true
  }
]

const spotlights = [
  {
    name: 'Emma Richardson',
    instrument: 'Piano, Age 16',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    achievement: 'Won first place at the California State Youth Piano Competition 2025. Performed Chopin\'s Ballade No. 1 to a standing ovation.'
  },
  {
    name: 'Lucas Martinez',
    instrument: 'Guitar, Age 22',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    achievement: 'Accepted to Berklee College of Music on a partial scholarship. Has been studying at Harmony for 4 years.'
  },
  {
    name: 'Ava Thompson',
    instrument: 'Violin, Age 14',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    achievement: 'Selected as concertmaster of the Harmony Hills Youth Orchestra. Will perform at the regional arts festival.'
  }
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600', alt: 'Piano recital', title: 'Winter Recital 2025', date: 'December 2025' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600', alt: 'Orchestra performance', title: 'Grand Concert 2025', date: 'December 2025' },
  { src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600', alt: 'Guitar ensemble', title: 'Guitar Showcase', date: 'October 2025' },
  { src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600', alt: 'String quartet', title: 'Chamber Music Night', date: 'September 2025' },
  { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600', alt: 'Vocal performance', title: 'Voice Recital', date: 'August 2025' },
  { src: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=600', alt: 'Drum solo', title: 'Rhythm Night', date: 'July 2025' }
]
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  background: url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1920') center/cover no-repeat;
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

/* Events Timeline */
.events-timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.event-card {
  display: flex;
  gap: 32px;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  border-left: 4px solid var(--primary);
}

.event-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
}

.event-card.featured {
  border-left-color: var(--secondary);
  background: linear-gradient(135deg, rgba(255, 179, 0, 0.03), rgba(74, 20, 140, 0.03));
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  padding: 12px;
  background: var(--primary);
  border-radius: var(--radius);
  color: var(--white);
}

.event-month {
  font-family: var(--font-accent);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.event-day {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.event-year {
  font-family: var(--font-accent);
  font-size: 0.7rem;
  opacity: 0.7;
}

.event-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.event-tag {
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  font-family: var(--font-accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tag-recital { background: rgba(74, 20, 140, 0.1); color: var(--primary); }
.tag-concert { background: rgba(255, 179, 0, 0.15); color: #e6a100; }
.tag-festival { background: rgba(194, 24, 91, 0.1); color: var(--accent); }
.tag-showcase { background: rgba(0, 150, 136, 0.1); color: #009688; }
.tag-workshop { background: rgba(55, 71, 79, 0.1); color: var(--slate); }
.featured-tag { background: var(--secondary); color: var(--charcoal); }

.event-info h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.event-info p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.event-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.event-meta span {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-light);
  font-family: var(--font-accent);
}

.event-meta svg { color: var(--secondary); }

.event-cta {
  font-size: 0.85rem;
  padding: 8px 20px;
}

/* Student Spotlight */
.spotlight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.spotlight-card {
  background: var(--bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}

.spotlight-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.spotlight-photo {
  height: 240px;
  overflow: hidden;
}

.spotlight-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
}

.spotlight-card:hover .spotlight-photo img {
  transform: scale(1.05);
}

.spotlight-info {
  padding: 24px;
}

.spotlight-info h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--primary);
  margin-bottom: 4px;
}

.spotlight-instrument {
  font-size: 0.85rem;
  color: var(--secondary);
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}

.spotlight-info p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform var(--transition);
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: var(--white);
}

.gallery-caption h4 {
  font-family: var(--font-heading);
  font-size: 1rem;
  margin-bottom: 2px;
}

.gallery-caption span {
  font-size: 0.8rem;
  opacity: 0.7;
  font-family: var(--font-accent);
}

/* Annual Concert */
.annual-section {
  position: relative;
  background: url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920') center/cover no-repeat;
  color: var(--white);
  text-align: center;
}

.annual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.9), rgba(44, 44, 44, 0.9));
}

.annual-content { position: relative; z-index: 2; }

.annual-tag {
  display: inline-block;
  font-family: var(--font-accent);
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: var(--secondary);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.annual-section h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.annual-section p {
  max-width: 660px;
  margin: 0 auto 36px;
  font-size: 1.05rem;
  opacity: 0.9;
  line-height: 1.8;
}

.annual-features {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 36px;
}

.annual-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-num {
  font-family: var(--font-accent);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary);
  line-height: 1;
}

.annual-feature span:last-child {
  font-size: 0.85rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .page-hero { padding: 120px 0 60px; }
  .page-hero h1 { font-size: 2.5rem; }

  .event-card {
    flex-direction: column;
    gap: 16px;
  }

  .event-date {
    flex-direction: row;
    gap: 8px;
    justify-content: center;
  }

  .spotlight-grid,
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .annual-features {
    gap: 32px;
  }
}

@media (max-width: 480px) {
  .page-hero h1 { font-size: 2rem; }
  .spotlight-grid, .gallery-grid { grid-template-columns: 1fr; }
  .annual-section h2 { font-size: 2rem; }
  .annual-features { gap: 20px; }
  .feature-num { font-size: 2rem; }
}
</style>
