<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="script-accent header-script">Get in touch</span>
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out for appointments, questions, or just to say hello.</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <ScrollReveal>
            <div class="contact-form-wrap">
              <div class="botanical-bg" aria-hidden="true">
                <svg width="200" height="300" viewBox="0 0 200 300" fill="none" opacity="0.05">
                  <path d="M100 0 C60 40 20 100 20 160 C20 240 60 280 100 300 C140 280 180 240 180 160 C180 100 140 40 100 0Z" fill="#2d4a3e"/>
                </svg>
              </div>
              <h2>Send Us a Message</h2>
              <p class="form-intro">Fill out the form below and we will get back to you within 24 hours.</p>

              <form @submit.prevent="handleSubmit" novalidate>
                <div class="form-row">
                  <div class="form-group" :class="{ error: errors.name, filled: form.name }">
                    <input type="text" v-model="form.name" id="c-name" required />
                    <label for="c-name">Your Name</label>
                    <span class="field-error" v-if="errors.name">Please enter your name</span>
                  </div>
                  <div class="form-group" :class="{ error: errors.email, filled: form.email }">
                    <input type="email" v-model="form.email" id="c-email" required />
                    <label for="c-email">Email Address</label>
                    <span class="field-error" v-if="errors.email">Please enter a valid email</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group" :class="{ error: errors.phone, filled: form.phone }">
                    <input type="tel" v-model="form.phone" id="c-phone" />
                    <label for="c-phone">Phone Number</label>
                    <span class="field-error" v-if="errors.phone">Please enter a valid phone number</span>
                  </div>
                  <div class="form-group" :class="{ filled: form.subject }">
                    <select v-model="form.subject" id="c-subject">
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Appointment Question</option>
                      <option>Feedback</option>
                      <option>Partnership Opportunity</option>
                      <option>Career Inquiry</option>
                    </select>
                    <label for="c-subject" class="select-label">Subject</label>
                  </div>
                </div>

                <div class="form-group" :class="{ error: errors.message, filled: form.message }">
                  <textarea v-model="form.message" id="c-message" rows="5" required></textarea>
                  <label for="c-message">Your Message</label>
                  <span class="field-error" v-if="errors.message">Please enter your message</span>
                </div>

                <button type="submit" class="btn btn-primary submit-btn">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>
                </button>
              </form>
            </div>
          </ScrollReveal>

          <!-- Contact Info -->
          <div class="contact-info-side">
            <ScrollReveal>
              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Visit Our Salon</h3>
                <p>247 Blossom Avenue<br>Beverly Hills, CA 90210</p>
                <div class="map-placeholder">
                  <div class="map-inner">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b76e79" stroke-width="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>247 Blossom Ave, Beverly Hills</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal :delay="100">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Hours of Operation</h3>
                <div class="hours-list">
                  <div class="hours-row">
                    <span>Monday - Friday</span>
                    <strong>9:00 AM - 8:00 PM</strong>
                  </div>
                  <div class="hours-row">
                    <span>Saturday</span>
                    <strong>9:00 AM - 6:00 PM</strong>
                  </div>
                  <div class="hours-row">
                    <span>Sunday</span>
                    <strong>10:00 AM - 5:00 PM</strong>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal :delay="200">
              <div class="info-card">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.66 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.3 1.54.53 2.35.66A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <h3>Get in Touch</h3>
                <div class="contact-methods">
                  <a href="tel:+13105555893" class="contact-method">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.66 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.3 1.54.53 2.35.66A2 2 0 0122 16.92z"/></svg>
                    (310) 555-LUXE
                  </a>
                  <a href="mailto:hello@luxesalonspa.com" class="contact-method">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    hello@luxesalonspa.com
                  </a>
                </div>
                <div class="social-row">
                  <a href="#" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/><path d="M9 18l1.5-6"/></svg>
                  </a>
                  <a href="#" aria-label="TikTok">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <Modal
      :show="showModal"
      title="Message Sent!"
      message="Thank you for reaching out. We will get back to you within 24 hours. In the meantime, feel free to book an appointment online."
      buttonText="Wonderful"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })
const errors = reactive({ name: false, email: false, phone: false, message: false })

const handleSubmit = () => {
  // Reset errors
  Object.keys(errors).forEach(k => errors[k] = false)

  let valid = true
  if (!form.name.trim()) { errors.name = true; valid = false }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { errors.email = true; valid = false }
  if (form.phone && form.phone.trim().length < 7) { errors.phone = true; valid = false }
  if (!form.message.trim()) { errors.message = true; valid = false }

  if (!valid) return

  showModal.value = true
  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: start;
}

/* Form */
.contact-form-wrap {
  background: white;
  border-radius: 20px;
  padding: 48px;
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
}

.botanical-bg {
  position: absolute;
  top: -40px;
  right: -40px;
  pointer-events: none;
}

.contact-form-wrap h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.form-intro {
  color: #888;
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 18px 20px 8px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  background: var(--warm-white);
  color: var(--charcoal);
  transition: border-color 0.3s ease;
}

.form-group select {
  appearance: none;
  cursor: pointer;
  padding-top: 22px;
}

.form-group label {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease;
}

.form-group textarea ~ label {
  top: 18px;
  transform: none;
}

.select-label {
  top: 8px !important;
  transform: none !important;
  font-size: 0.72rem !important;
  color: var(--rose-gold) !important;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--rose-gold);
}

.form-group input:focus ~ label,
.form-group.filled input ~ label,
.form-group textarea:focus ~ label,
.form-group.filled textarea ~ label {
  top: 8px;
  transform: none;
  font-size: 0.72rem;
  color: var(--rose-gold);
}

.form-group.error input,
.form-group.error textarea {
  border-color: #e74c3c;
}

.field-error {
  display: block;
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 4px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Info Cards */
.contact-info-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow-soft);
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--blush);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.info-card h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
}

.info-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.map-placeholder {
  margin-top: 16px;
  background: var(--blush);
  border-radius: 12px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-inner {
  text-align: center;
}

.map-inner span {
  display: block;
  margin-top: 8px;
  font-size: 0.85rem;
  color: #888;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hours-row span {
  color: #666;
  font-size: 0.9rem;
}

.hours-row strong {
  font-size: 0.9rem;
  color: var(--charcoal);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.contact-method {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--charcoal);
  font-size: 0.9rem;
}

.contact-method:hover {
  color: var(--rose-gold);
}

.social-row {
  display: flex;
  gap: 12px;
}

.social-row a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: all 0.3s ease;
}

.social-row a:hover {
  border-color: var(--rose-gold);
  color: var(--rose-gold);
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrap {
    padding: 32px 20px;
  }
}
</style>
