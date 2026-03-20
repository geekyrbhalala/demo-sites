<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  vehicleType: '',
  serviceInterest: '',
  message: ''
})
const errors = ref({})

const vehicleTypes = ['Sedan', 'SUV', 'Truck', 'Van', 'Luxury / Exotic', 'Other']
const serviceInterests = [
  'Exterior Detail',
  'Interior Detail',
  'Full Detail Package',
  'Ceramic Coating',
  'Paint Correction',
  'Mobile Service',
  'Fleet/Corporate',
  'Other'
]

function validate() {
  const errs = {}
  if (!form.value.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Invalid email address'
  if (form.value.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Invalid phone number'
  if (!form.value.message.trim()) errs.message = 'Message is required'
  return errs
}

function handleSubmit() {
  const errs = validate()
  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }
  showModal.value = true
  form.value = { name: '', email: '', phone: '', vehicleType: '', serviceInterest: '', message: '' }
  errors.value = {}
}

function handleChange(field) {
  if (errors.value[field]) {
    errors.value[field] = ''
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920" alt="Car detail" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="page-hero-content container">
        <h1>Contact Us</h1>
        <p>Get in touch for a free quote or any questions</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <!-- Form -->
        <ScrollReveal direction="left">
          <div class="contact-form-card glossy-card">
            <h2>Quick Quote</h2>
            <p class="form-intro">Fill out the form below and we will get back to you within 1 hour during business hours.</p>
            <form @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    v-model="form.name"
                    :class="{ error: errors.name }"
                    @input="handleChange('name')"
                    placeholder="John Doe"
                  />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    v-model="form.email"
                    :class="{ error: errors.email }"
                    @input="handleChange('email')"
                    placeholder="john@example.com"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  v-model="form.phone"
                  :class="{ error: errors.phone }"
                  @input="handleChange('phone')"
                  placeholder="(555) 123-4567"
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Vehicle Type</label>
                  <select v-model="form.vehicleType">
                    <option value="" disabled>Select vehicle type</option>
                    <option v-for="vt in vehicleTypes" :key="vt" :value="vt">{{ vt }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Service Interest</label>
                  <select v-model="form.serviceInterest">
                    <option value="" disabled>Select service</option>
                    <option v-for="si in serviceInterests" :key="si" :value="si">{{ si }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Message *</label>
                <textarea
                  v-model="form.message"
                  :class="{ error: errors.message }"
                  @input="handleChange('message')"
                  placeholder="Tell us about your vehicle and what services you are interested in..."
                  rows="5"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>
        </ScrollReveal>

        <!-- Info -->
        <ScrollReveal direction="right">
          <div class="contact-info">
            <!-- Call/Text -->
            <div class="info-card glossy-card call-card">
              <div class="call-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3>Call or Text</h3>
              <a href="tel:+15551234567" class="phone-number price">(555) 123-4567</a>
              <p>Fastest way to get a quote. We respond to texts within minutes.</p>
            </div>

            <!-- Service Area -->
            <div class="info-card glossy-card">
              <h3>Service Area</h3>
              <div class="map-placeholder">
                <svg viewBox="0 0 200 120" fill="none">
                  <rect width="200" height="120" rx="8" fill="#1a1a1a" />
                  <circle cx="100" cy="60" r="40" stroke="#0066ff" stroke-width="1" stroke-dasharray="4 4" />
                  <circle cx="100" cy="60" r="20" stroke="#0066ff" stroke-width="1.5" />
                  <circle cx="100" cy="60" r="4" fill="#0066ff" />
                  <text x="100" y="105" text-anchor="middle" fill="#888888" font-family="Barlow" font-size="8">30-mile mobile service radius</text>
                </svg>
              </div>
              <p class="info-address">1234 Motor Drive, Suite 100<br/>Autoville, CA 90210</p>
            </div>

            <!-- Hours -->
            <div class="info-card glossy-card">
              <h3>Business Hours</h3>
              <div class="hours-list">
                <div class="hours-row">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-row">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div class="hours-row">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            <!-- Social -->
            <div class="info-card glossy-card">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="#" class="social-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                  <span>@apexautodetail</span>
                </a>
                <a href="#" class="social-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.27a8.16 8.16 0 003.76.92V6.69z"/></svg>
                  <span>@apexdetail</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Modal
      :isOpen="showModal"
      title="Message Sent!"
      message="Thank you for reaching out. We will get back to you within 1 hour during business hours."
      @close="showModal = false"
    />
  </main>
</template>

<style scoped>
.page-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%);
}

.page-hero-content {
  position: relative;
  text-align: center;
  z-index: 2;
}

.page-hero-content h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 12px;
}

.page-hero-content p {
  color: var(--silver);
  font-size: 1.2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: start;
}

.contact-form-card {
  padding: 40px;
}

.contact-form-card h2 {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.form-intro {
  color: var(--text-muted);
  margin-bottom: 28px;
  font-size: 0.9rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 28px;
}

.info-card h3 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.call-card {
  text-align: center;
}

.call-icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
  margin: 0 auto 12px;
}

.call-icon svg {
  width: 100%;
  height: 100%;
}

.phone-number {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 8px;
}

.call-card p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.map-placeholder {
  margin-bottom: 16px;
}

.map-placeholder svg {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
}

.info-address {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.hours-row span:last-child {
  color: var(--silver);
  font-weight: 500;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--carbon);
  border-radius: var(--radius);
  color: var(--silver);
  transition: var(--transition);
}

.social-btn svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.social-btn:hover {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
}

@media (max-width: 768px) {
  .page-hero { height: 300px; }
  .page-hero-content h1 { font-size: 2.2rem; }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-form-card {
    padding: 28px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 1.8rem; }
}
</style>
