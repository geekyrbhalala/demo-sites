<template>
  <main class="instructors-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>Our Instructors</h1>
        <p>Accomplished musicians and dedicated educators committed to your musical growth.</p>
      </div>
    </section>

    <!-- Instructors Grid -->
    <section class="section">
      <div class="container">
        <div class="instructors-grid">
          <ScrollReveal v-for="(inst, i) in instructors" :key="inst.name" :delay="i * 100">
            <div class="instructor-card">
              <div class="instructor-photo">
                <img :src="inst.photo" :alt="inst.name" loading="lazy" />
                <div class="instructor-overlay">
                  <router-link to="/contact" class="btn btn-secondary">Book a Lesson</router-link>
                </div>
              </div>
              <div class="instructor-info">
                <h3>{{ inst.name }}</h3>
                <span class="instructor-specialty">{{ inst.specialty }}</span>
                <p class="instructor-bio">{{ inst.bio }}</p>
                <div class="instructor-quals">
                  <span v-for="qual in inst.qualifications" :key="qual" class="qual-tag">{{ qual }}</span>
                </div>
                <blockquote class="instructor-quote">
                  "{{ inst.quote }}"
                </blockquote>
                <router-link to="/contact" class="btn btn-outline instructor-cta">Book a Lesson</router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <section class="section join-section" style="background: var(--white);">
      <div class="container">
        <ScrollReveal>
          <div class="join-box">
            <h2>Join Our Teaching Team</h2>
            <p>Are you a passionate musician and educator? We're always looking for talented instructors to join the Harmony family.</p>
            <router-link to="/contact" class="btn btn-primary">Apply Now</router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const instructors = [
  {
    name: 'Dr. Elena Vasquez',
    specialty: 'Piano & Music Theory',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600',
    bio: 'A Juilliard graduate with 18 years of teaching experience, Dr. Vasquez specializes in classical piano and advanced music theory. She has performed at Carnegie Hall and trained over 200 students, many of whom have gone on to study at top conservatories.',
    qualifications: ['DMA - Juilliard', 'Carnegie Hall Performer', '18 Years Teaching'],
    quote: 'Music is the art of thinking with sounds. Every student carries a unique melody within them.'
  },
  {
    name: 'Marcus Chen',
    specialty: 'Guitar & Composition',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    bio: 'A versatile guitarist proficient in classical, jazz, and rock, Marcus brings energy and creativity to every lesson. His compositions have been featured in independent films and he regularly performs at jazz festivals across the West Coast.',
    qualifications: ['MM - Berklee', 'Film Composer', 'Jazz Festival Artist'],
    quote: 'Every chord tells a story waiting to be heard. My job is to help you find your voice on the guitar.'
  },
  {
    name: 'Sofia Andersson',
    specialty: 'Violin & Ensemble',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
    bio: 'Former first violinist of the Stockholm Philharmonic, Sofia brings world-class orchestral experience to Harmony. She is certified in both Suzuki and traditional methods, making her instruction adaptable to students of all ages and backgrounds.',
    qualifications: ['Stockholm Philharmonic', 'Suzuki Certified', '15 Years Teaching'],
    quote: 'In music, we find the truest expression of ourselves. The violin is a voice that never lies.'
  },
  {
    name: 'Jamal Wright',
    specialty: 'Drums & Percussion',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600',
    bio: 'Jamal has toured with Grammy-nominated artists and brings professional studio and stage experience to his teaching. His lessons focus on groove, musicality, and developing a personal style across rock, jazz, funk, and Latin percussion.',
    qualifications: ['Grammy-Nominated Tours', 'Session Musician', '12 Years Teaching'],
    quote: 'Rhythm is the heartbeat of all music. Once you find the groove, everything else falls into place.'
  },
  {
    name: 'Priya Kapoor',
    specialty: 'Voice & Musical Theater',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
    bio: 'With a background in opera and musical theater, Priya coaches students in classical technique, pop vocal styling, and stage performance. She has performed lead roles in national touring productions and coaches aspiring Broadway performers.',
    qualifications: ['BFA - NYU Tisch', 'Broadway National Tour', 'Vocal Coach'],
    quote: 'Your voice is the most personal instrument. Learning to use it fully is a journey of self-discovery.'
  },
  {
    name: 'Thomas Bergman',
    specialty: 'Cello & Chamber Music',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    bio: 'A graduate of the Royal Academy of Music in London, Thomas brings European classical training and a love of chamber music to Harmony. He founded the academy\'s chamber music program and leads the annual string festival.',
    qualifications: ['Royal Academy of Music', 'Chamber Music Director', '20 Years Teaching'],
    quote: 'Chamber music teaches us to listen, to respond, to breathe together. It is music at its most intimate.'
  },
  {
    name: 'Lisa Nakamura',
    specialty: 'Flute & Woodwinds',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
    bio: 'Lisa is a principal flutist with the California Symphony and a passionate educator. She specializes in baroque and contemporary flute repertoire and has developed a unique approach to breath control and tone production.',
    qualifications: ['CA Symphony Principal', 'MM - Eastman', '10 Years Teaching'],
    quote: 'The flute is a breath of life transformed into song. I help students find that transformation.'
  },
  {
    name: 'Robert Okafor',
    specialty: 'Jazz Studies & Saxophone',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
    bio: 'Robert is a jazz saxophonist, composer, and educator who has recorded three solo albums. He teaches improvisation, jazz theory, and saxophone technique, drawing from bebop, modal jazz, and contemporary fusion.',
    qualifications: ['3 Solo Albums', 'Jazz Festival Director', '14 Years Teaching'],
    quote: 'Jazz is the music of freedom. Learning to improvise means learning to trust yourself.'
  }
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

.instructors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.instructor-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.instructor-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.instructor-photo {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.instructor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
}

.instructor-card:hover .instructor-photo img {
  transform: scale(1.05);
}

.instructor-overlay {
  position: absolute;
  inset: 0;
  background: rgba(74, 20, 140, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
}

.instructor-card:hover .instructor-overlay {
  opacity: 1;
}

.instructor-info {
  padding: 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.instructor-info h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 4px;
}

.instructor-specialty {
  font-size: 0.9rem;
  color: var(--secondary);
  font-weight: 600;
  display: block;
  margin-bottom: 14px;
}

.instructor-bio {
  color: var(--text-light);
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

.instructor-quals {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.qual-tag {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-accent);
  background: rgba(74, 20, 140, 0.08);
  color: var(--primary);
  letter-spacing: 0.5px;
}

.instructor-quote {
  font-family: var(--font-heading);
  font-style: italic;
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 16px;
  border-left: 3px solid var(--secondary);
  background: rgba(255, 179, 0, 0.05);
  border-radius: 0 var(--radius) var(--radius) 0;
  margin-bottom: 20px;
  flex: 1;
}

.instructor-cta {
  align-self: flex-start;
  font-size: 0.9rem;
  padding: 10px 24px;
}

/* Join Section */
.join-box {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: var(--radius-lg);
  padding: 60px;
  text-align: center;
  color: var(--white);
}

.join-box h2 {
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 16px;
}

.join-box p {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 540px;
  margin: 0 auto 28px;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .instructors-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .instructor-photo {
    height: 240px;
  }

  .join-box {
    padding: 40px 24px;
  }
}

@media (max-width: 480px) {
  .page-hero h1 {
    font-size: 2rem;
  }
}
</style>
