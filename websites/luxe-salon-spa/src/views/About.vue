<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="script-accent header-script">Our story</span>
        <h1>About LUXE</h1>
        <p>Where passion for beauty meets a commitment to your well-being. Discover the story, values, and people behind LUXE Salon & Spa.</p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section story-section">
      <div class="container">
        <div class="story-grid">
          <ScrollReveal>
            <div class="story-images">
              <div class="story-img story-img-1">
                <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800" alt="LUXE salon interior" />
              </div>
              <div class="story-img story-img-2">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200" alt="Spa treatment room" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200">
            <div class="story-text">
              <span class="script-accent" style="font-size: 1.6rem;">Est. 2018</span>
              <h2>A Haven of Beauty & Wellness</h2>
              <p>LUXE Salon & Spa was born from a vision to create a sanctuary where beauty, wellness, and nature converge. Founded in 2018 by Isabella Rossi, a master stylist with over 15 years of experience in the beauty industry, LUXE was designed to be more than just a salon.</p>
              <p>Inspired by botanical gardens and organic luxury, every detail of our space has been thoughtfully curated to provide an immersive sensory experience. From the moment you step through our doors, you are greeted by the gentle fragrance of essential oils, the soft sound of flowing water, and the warm embrace of our dedicated team.</p>
              <p>We believe that true beauty radiates from within, and our holistic approach combines premium treatments with mindful relaxation to help you look and feel your absolute best. Every product we use is carefully selected for its natural ingredients, ethical sourcing, and exceptional results.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section values-section" style="background: var(--blush);">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">What drives us</span>
            <h2>Our Core Values</h2>
          </div>
        </ScrollReveal>

        <div class="values-grid">
          <ScrollReveal v-for="(val, i) in values" :key="val.title" :delay="i * 120">
            <div class="value-card">
              <div class="value-icon" v-html="val.icon"></div>
              <h3>{{ val.title }}</h3>
              <p>{{ val.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Team Profiles -->
    <section class="section team-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">The people behind LUXE</span>
            <h2>Meet Our Team</h2>
            <p>Our talented artists bring passion, expertise, and creativity to every appointment.</p>
          </div>
        </ScrollReveal>

        <div class="team-profiles">
          <ScrollReveal v-for="(member, i) in teamMembers" :key="member.name" :delay="i * 150">
            <div class="profile-card">
              <div class="profile-photo">
                <img :src="member.photo" :alt="member.name" />
              </div>
              <div class="profile-info">
                <h3>{{ member.name }}</h3>
                <span class="profile-role">{{ member.role }}</span>
                <p>{{ member.bio }}</p>
                <div class="profile-specialties">
                  <span v-for="s in member.specialties" :key="s" class="specialty-tag">{{ s }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Certifications & Partnerships -->
    <section class="section certifications" style="background: var(--forest);">
      <div class="container">
        <ScrollReveal>
          <div class="section-title">
            <span class="script-accent section-title-script">Trusted quality</span>
            <h2 style="color: white;">Certifications & Partners</h2>
            <p style="color: rgba(255,255,255,0.6);">We partner with industry-leading brands and maintain the highest professional standards.</p>
          </div>
        </ScrollReveal>

        <div class="cert-grid">
          <ScrollReveal v-for="(cert, i) in certifications" :key="cert.name" :delay="i * 100">
            <div class="cert-card">
              <div class="cert-icon" v-html="cert.icon"></div>
              <h4>{{ cert.name }}</h4>
              <p>{{ cert.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const values = [
  {
    title: 'Organic Luxury',
    desc: 'We use only the finest natural and organic products that deliver exceptional results without compromising on your health or the environment.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2d4a3e" stroke-width="1.5"><path d="M24 44c0-16 12-24 12-32a12 12 0 10-24 0c0 8 12 16 12 32z"/><path d="M24 20v16M20 28l4-4 4 4"/></svg>'
  },
  {
    title: 'Artistry & Skill',
    desc: 'Our team of artists continuously trains in the latest techniques and trends to bring cutting-edge artistry to every treatment we provide.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2d4a3e" stroke-width="1.5"><circle cx="24" cy="24" r="16"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6"/><circle cx="24" cy="24" r="6"/></svg>'
  },
  {
    title: 'Personalized Care',
    desc: 'Every client is unique. We take the time to understand your individual needs and create customized treatment plans that deliver real results.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2d4a3e" stroke-width="1.5"><path d="M24 4C14 4 8 14 8 20c0 10 16 24 16 24s16-14 16-24c0-6-6-16-16-16z"/><circle cx="24" cy="20" r="6"/></svg>'
  },
  {
    title: 'Sustainability',
    desc: 'From our eco-friendly products to our energy-efficient salon design, we are committed to minimizing our environmental impact at every step.',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#2d4a3e" stroke-width="1.5"><path d="M14 40V28c0-6 4-10 10-10s10 4 10 10v12"/><circle cx="24" cy="14" r="6"/><path d="M8 40h32"/></svg>'
  }
]

const teamMembers = [
  {
    name: 'Isabella Rossi',
    role: 'Founder & Master Stylist',
    photo: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800',
    bio: 'With over 15 years in the beauty industry, Isabella founded LUXE to create a sanctuary where artistry meets wellness. Trained at the Vidal Sassoon Academy in London, she specializes in transformative color work and precision cutting. Her vision of organic luxury has shaped every aspect of the LUXE experience.',
    specialties: ['Balayage', 'Color Correction', 'Precision Cuts', 'Bridal']
  },
  {
    name: 'Sophia Chen',
    role: 'Lead Skin Specialist',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    bio: 'A licensed esthetician with a background in dermatological science, Sophia brings a clinical precision to our facial and skin treatments. She holds advanced certifications in chemical peels, microneedling, and LED therapy. Her holistic approach combines science with botanical ingredients for truly remarkable results.',
    specialties: ['Advanced Facials', 'Chemical Peels', 'Anti-Aging', 'Acne Treatment']
  },
  {
    name: 'Emma Laurent',
    role: 'Senior Massage Therapist',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
    bio: 'Emma is a certified massage therapist with specializations in Swedish, deep tissue, and prenatal massage. With training from the Esalen Institute and a passion for aromatherapy, she creates deeply therapeutic experiences that address both physical tension and emotional stress.',
    specialties: ['Deep Tissue', 'Hot Stone', 'Aromatherapy', 'Prenatal']
  },
  {
    name: 'Maya Patel',
    role: 'Nail Artist & Technician',
    photo: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    bio: 'Maya is our resident nail art virtuoso. With an eye for detail and a background in fine arts, she transforms nails into miniature canvases. From minimalist elegance to elaborate designs, Maya stays ahead of trends while maintaining the highest hygiene standards in our nail studio.',
    specialties: ['Nail Art', 'Gel Extensions', 'Spa Pedicures', 'Dip Powder']
  }
]

const certifications = [
  {
    name: 'Aveda Partner Salon',
    desc: 'Official Aveda partner using their full range of plant-based, cruelty-free professional products.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><circle cx="18" cy="18" r="14"/><path d="M12 18l4 4 8-8"/></svg>'
  },
  {
    name: 'Green Circle Certified',
    desc: 'We recycle and repurpose up to 95% of salon waste through the Green Circle sustainability program.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><path d="M18 4a14 14 0 110 28 14 14 0 010-28z"/><path d="M14 18c2-6 4-8 4-8s2 2 4 8-2 8-4 8-6-2-4-8z"/></svg>'
  },
  {
    name: 'ORIBE Professional',
    desc: 'Select partner for ORIBE luxury haircare, bringing the finest formulations to our styling services.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><rect x="6" y="6" width="24" height="24" rx="4"/><path d="M14 14h8M14 18h8M14 22h4"/></svg>'
  },
  {
    name: 'CIDESCO Certified',
    desc: 'International beauty therapy certification ensuring the highest global standards of skincare expertise.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><path d="M18 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z"/></svg>'
  },
  {
    name: 'Dermalogica Expert',
    desc: 'Certified Dermalogica skin therapy center with specially trained skin health professionals.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><circle cx="18" cy="18" r="14"/><circle cx="18" cy="18" r="6"/><path d="M18 4v8M18 24v8M4 18h8M24 18h8"/></svg>'
  },
  {
    name: 'Cruelty-Free Promise',
    desc: 'All products and treatments are 100% cruelty-free and never tested on animals. Beauty with compassion.',
    icon: '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#9cac8b" stroke-width="1.5"><path d="M18 30s-12-8-12-16a8 8 0 0116 0 8 8 0 0116 0c0 8-12 16-12 16z" fill="none"/></svg>'
  }
]
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
}

.section-title-script {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 4px;
}

/* Story */
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-images {
  position: relative;
  height: 500px;
}

.story-img {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-medium);
}

.story-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-img-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 65%;
  height: 70%;
}

.story-img-2 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 55%;
  border: 4px solid var(--warm-white);
}

.story-text h2 {
  font-size: 2rem;
  margin: 8px 0 20px;
}

.story-text p {
  color: #555;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.value-card {
  background: white;
  padding: 36px 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-6px);
}

.value-icon {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.value-card h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
  color: var(--forest);
}

.value-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.7;
}

/* Team Profiles */
.team-profiles {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.profile-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  align-items: start;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: box-shadow 0.3s ease;
}

.profile-card:hover {
  box-shadow: var(--shadow-medium);
}

.profile-photo {
  height: 360px;
  overflow: hidden;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  padding: 36px 36px 36px 0;
}

.profile-info h3 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.profile-role {
  display: block;
  color: var(--rose-gold);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.profile-info p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.profile-specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.specialty-tag {
  padding: 6px 16px;
  background: var(--blush);
  color: var(--rose-gold);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Certifications */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cert-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.cert-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--sage);
  transform: translateY(-4px);
}

.cert-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.cert-card h4 {
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 8px;
}

.cert-card p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .story-images {
    height: 350px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .profile-card {
    grid-template-columns: 1fr;
  }

  .profile-photo {
    height: 280px;
  }

  .profile-info {
    padding: 0 28px 28px;
  }

  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .story-images {
    height: 280px;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
