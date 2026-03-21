<template>
  <main class="contact-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>Contact Us</h1>
        <p>Get in touch to start your musical journey or ask any questions.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <ScrollReveal direction="left">
            <div class="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p class="form-intro">Interested in lessons? Have a question? Fill out the form below and we'll get back to you within 24 hours.</p>

              <form class="contact-form" @submit.prevent="handleSubmit">
                <div class="form-row">
                  <div class="form-group" :class="{ 'has-error': errors.name }">
                    <label for="name">Full Name *</label>
                    <input id="name" v-model="form.name" name="name" type="text" placeholder="Your full name" @input="clearError('name')" />
                    <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
                  </div>
                  <div class="form-group" :class="{ 'has-error': errors.email }">
                    <label for="email">Email *</label>
                    <input id="email" v-model="form.email" name="email" type="email" placeholder="your@email.com" @input="clearError('email')" />
                    <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group" :class="{ 'has-error': errors.phone }">
                    <label for="phone">Phone</label>
                    <input id="phone" v-model="form.phone" name="phone" type="tel" placeholder="(555) 123-4567" @input="clearError('phone')" />
                    <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
                  </div>
                  <div class="form-group">
                    <label for="interest">Instrument of Interest</label>
                    <select id="interest" v-model="form.interest">
                      <option value="">Select an instrument</option>
                      <option value="piano">Piano</option>
                      <option value="guitar">Guitar</option>
                      <option value="violin">Violin</option>
                      <option value="drums">Drums</option>
                      <option value="voice">Voice</option>
                      <option value="theory">Music Theory</option>
                      <option value="composition">Composition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="level">Experience Level</label>
                  <select id="level" v-model="form.level">
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div class="form-group" :class="{ 'has-error': errors.message }">
                  <label for="message">Message *</label>
                  <textarea id="message" v-model="form.message" name="message" placeholder="Tell us about your musical goals..." rows="5" @input="clearError('message')"></textarea>
                  <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div class="contact-info">
              <div class="info-card">
                <h3>Visit Our Academy</h3>
                <div class="info-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <strong>Address</strong>
                    <p>456 Melody Lane, Suite 200<br>Harmony Hills, CA 90210</p>
                  </div>
                </div>
                <div class="info-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div>
                    <strong>Phone</strong>
                    <p>(555) 432-8900</p>
                  </div>
                </div>
                <div class="info-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <strong>Email</strong>
                    <p>info@harmonymusic.edu</p>
                  </div>
                </div>
              </div>

              <div class="hours-card">
                <h3>Hours of Operation</h3>
                <div class="hours-list">
                  <div class="hours-row">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div class="hours-row">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div class="hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div class="trial-card">
                <div class="trial-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--white)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3>Free Trial Lesson</h3>
                <p>Not sure where to start? Book a complimentary 30-minute trial lesson with any of our instructors. No commitment required.</p>
                <router-link to="/register" class="btn btn-secondary trial-btn">Book Free Trial</router-link>
              </div>

              <!-- Map Placeholder -->
              <div class="map-placeholder">
                <div class="map-inner">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p>456 Melody Lane, Harmony Hills, CA</p>
                  <span>Map view</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <Modal
      :isOpen="showModal"
      @close="showModal = false"
      title="Message Sent!"
      message="Thank you for reaching out! We'll respond within 24 hours. Feel free to call us at (555) 432-8900 for immediate assistance."
      buttonText="Wonderful"
    />
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  interest: '',
  level: '',
  message: ''
})

const errors = reactive({})

const clearError = (field) => {
  if (errors[field]) {
    errors[field] = ''
  }
}

const validate = () => {
  const errs = {}
  if (!form.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
  if (form.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number'
  if (!form.message.trim()) errs.message = 'Message is required'
  return errs
}

const handleSubmit = () => {
  const errs = validate()
  Object.keys(errors).forEach(k => delete errors[k])
  if (Object.keys(errs).length > 0) {
    Object.assign(errors, errs)
    return
  }
  showModal.value = true
  form.name = ''
  form.email = ''
  form.phone = ''
  form.interest = ''
  form.level = ''
  form.message = ''
}
</script>

<style scoped>
.page-hero {
  position: relative;
  padding: 160px 0 100px;
  background: url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920') center/cover no-repeat;
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: flex-start;
}

.contact-form-wrapper h2 {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.form-intro {
  color: var(--text-light);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form .btn {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
  margin-top: 8px;
}

/* Info Cards */
.info-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 20px;
}

.info-card h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.info-item strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}

.info-item p {
  color: var(--text-light);
  font-size: 0.92rem;
  line-height: 1.6;
}

.hours-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 20px;
}

.hours-card h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.92rem;
}

.hours-row:last-child {
  border-bottom: none;
}

.hours-row span:first-child {
  color: var(--text);
  font-weight: 500;
}

.hours-row span:last-child {
  color: var(--text-light);
  font-family: var(--font-accent);
  font-size: 0.85rem;
}

.trial-card {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: var(--radius-lg);
  padding: 28px;
  color: var(--white);
  text-align: center;
  margin-bottom: 20px;
}

.trial-icon {
  margin-bottom: 12px;
}

.trial-card h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--white);
  margin-bottom: 8px;
}

.trial-card p {
  font-size: 0.92rem;
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
}

.trial-btn {
  width: 100%;
}

.map-placeholder {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.map-inner {
  padding: 48px 28px;
  text-align: center;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    rgba(74, 20, 140, 0.03) 20px,
    rgba(74, 20, 140, 0.03) 21px
  ),
  repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(74, 20, 140, 0.03) 20px,
    rgba(74, 20, 140, 0.03) 21px
  );
}

.map-inner p {
  font-size: 0.95rem;
  color: var(--text);
  margin-top: 8px;
  font-weight: 500;
}

.map-inner span {
  font-size: 0.8rem;
  color: var(--text-light);
  font-family: var(--font-accent);
}

@media (max-width: 768px) {
  .page-hero { padding: 120px 0 60px; }
  .page-hero h1 { font-size: 2.5rem; }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 480px) {
  .page-hero h1 { font-size: 2rem; }
}
</style>
