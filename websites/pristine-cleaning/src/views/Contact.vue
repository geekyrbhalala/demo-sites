<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Get In Touch</span>
        <h1>Contact Us</h1>
        <p>Have a question or ready to book? We'd love to hear from you.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Form -->
          <ScrollReveal>
            <div class="contact-form-card">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 2 hours.</p>

              <form @submit.prevent="handleSubmit">
                <div class="form-row">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" v-model="form.name" :class="{ error: errors.name }" placeholder="Jane Smith" @input="clearError('name')" />
                    <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" v-model="form.email" :class="{ error: errors.email }" placeholder="jane@example.com" @input="clearError('email')" />
                    <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" v-model="form.phone" :class="{ error: errors.phone }" placeholder="(415) 555-0000" @input="clearError('phone')" />
                    <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
                  </div>
                  <div class="form-group">
                    <label>Service Interest</label>
                    <select v-model="form.service" :class="{ error: errors.service }">
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="moveinout">Move In / Out</option>
                      <option value="specialty">Specialty Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                    <span v-if="errors.service" class="error-msg">{{ errors.service }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label>Message</label>
                  <textarea v-model="form.message" :class="{ error: errors.message }" placeholder="Tell us about your cleaning needs, questions, or how we can help..." rows="5" @input="clearError('message')"></textarea>
                  <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%">Send Message</button>
              </form>
            </div>
          </ScrollReveal>

          <!-- Info -->
          <ScrollReveal :delay="200">
            <div class="contact-info">
              <div class="info-card">
                <h3>Contact Information</h3>
                <div class="info-items">
                  <div class="info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <strong>Address</strong>
                      <p>123 Clean Street, Suite 100<br>San Francisco, CA 94102</p>
                    </div>
                  </div>
                  <div class="info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    <div>
                      <strong>Phone</strong>
                      <p>(415) 555-0123</p>
                    </div>
                  </div>
                  <div class="info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div>
                      <strong>Email</strong>
                      <p>hello@pristineclean.co</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="info-card">
                <h3>Business Hours</h3>
                <div class="hours-list">
                  <div class="hours-row">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div class="hours-row">
                    <span>Saturday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div class="hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div class="info-card">
                <h3>Service Area</h3>
                <p class="service-area-text">We proudly serve the greater San Francisco Bay Area including:</p>
                <div class="area-tags">
                  <span v-for="area in areas" :key="area" class="area-tag">{{ area }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <Modal :isOpen="showModal" @close="showModal = false" title="Message Sent!" message="Thank you for reaching out! We'll respond to your inquiry within 2 business hours." />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const errors = ref({})

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const areas = ['San Francisco', 'Daly City', 'South San Francisco', 'Pacifica', 'Millbrae', 'San Bruno', 'Burlingame', 'San Mateo', 'Oakland', 'Berkeley']

const clearError = (field) => {
  if (errors.value[field]) errors.value[field] = ''
}

const validate = () => {
  const errs = {}
  if (!form.value.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Valid email is required'
  if (form.value.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Invalid phone number'
  if (!form.value.service) errs.service = 'Please select a service'
  if (!form.value.message.trim()) errs.message = 'Message is required'
  return errs
}

const handleSubmit = () => {
  const errs = validate()
  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }
  showModal.value = true
  form.value = { name: '', email: '', phone: '', service: '', message: '' }
  errors.value = {}
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-form-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 3rem;
}

.contact-form-card h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.contact-form-card > p { margin-bottom: 2rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
}

.info-card h3 {
  font-size: 1.15rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.info-items { display: flex; flex-direction: column; gap: 1.25rem; }

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-item svg {
  width: 22px;
  height: 22px;
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.info-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--secondary);
  margin-bottom: 0.15rem;
}

.info-item p { font-size: 0.9rem; margin: 0; }

.hours-list { display: flex; flex-direction: column; gap: 0.75rem; }

.hours-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.hours-row span:first-child { color: var(--text); font-weight: 500; }
.hours-row span:last-child { color: var(--text-light); }

.service-area-text { font-size: 0.9rem; margin-bottom: 1rem; }

.area-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.area-tag {
  font-size: 0.8rem;
  padding: 0.3rem 0.75rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 50px;
  color: var(--text);
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
  .contact-form-card { padding: 2rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
