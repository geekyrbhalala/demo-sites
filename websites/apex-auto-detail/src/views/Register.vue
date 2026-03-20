<script setup>
import { ref, computed } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  carMake: '',
  carModel: '',
  carYear: '',
  carColor: '',
  smsNotify: false,
  dealsNotify: false,
  newServicesNotify: false,
  agreeTerms: false
})
const errors = ref({})

const passwordStrength = computed(() => {
  const p = form.value.password
  if (!p) return { score: 0, label: '', color: '' }
  let score = 0
  if (p.length >= 6) score++
  if (p.length >= 10) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  if (score <= 1) return { score: 1, label: 'Weak', color: '#ff4444' }
  if (score <= 2) return { score: 2, label: 'Fair', color: '#ff9800' }
  if (score <= 3) return { score: 3, label: 'Good', color: '#ffd700' }
  if (score <= 4) return { score: 4, label: 'Strong', color: '#00c853' }
  return { score: 5, label: 'Excellent', color: '#0066ff' }
})

function validate() {
  const errs = {}
  if (!form.value.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Invalid email address'
  if (form.value.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Invalid phone number'
  if (form.value.password.length < 6) errs.password = 'Password must be at least 6 characters'
  if (form.value.password !== form.value.confirmPassword) errs.confirmPassword = 'Passwords do not match'
  if (!form.value.agreeTerms) errs.agreeTerms = 'You must agree to the terms'
  return errs
}

function handleSubmit() {
  const errs = validate()
  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }
  showModal.value = true
  form.value = {
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    carMake: '', carModel: '', carYear: '', carColor: '',
    smsNotify: false, dealsNotify: false, newServicesNotify: false, agreeTerms: false
  }
  errors.value = {}
}

function handleChange(field) {
  if (errors.value[field]) errors.value[field] = ''
}
</script>

<template>
  <main class="register-page">
    <div class="register-bg">
      <div class="speed-lines"></div>
    </div>
    <div class="register-container">
      <div class="register-card">
        <div class="register-logo">
          <svg viewBox="0 0 50 40" fill="none">
            <polygon points="25,2 48,38 2,38" stroke="#0066ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
            <line x1="10" y1="26" x2="40" y2="26" stroke="#0066ff" stroke-width="1.5"/>
            <line x1="16" y1="32" x2="34" y2="32" stroke="#0066ff" stroke-width="1"/>
          </svg>
        </div>
        <h1>Join the Apex Club</h1>
        <p class="register-subtitle">Create an account to book services, track history, and get exclusive deals</p>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Full Name *</label>
            <input type="text" v-model="form.name" :class="{ error: errors.name }" @input="handleChange('name')" placeholder="John Doe" />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Email *</label>
              <input type="email" v-model="form.email" :class="{ error: errors.email }" @input="handleChange('email')" placeholder="john@example.com" />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" v-model="form.phone" :class="{ error: errors.phone }" @input="handleChange('phone')" placeholder="(555) 123-4567" />
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
          </div>

          <div class="form-group">
            <label>Password *</label>
            <input type="password" v-model="form.password" :class="{ error: errors.password }" @input="handleChange('password')" placeholder="Min 6 characters" />
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
            <div v-if="form.password" class="password-strength">
              <div class="strength-bar">
                <div class="strength-fill" :style="{ width: (passwordStrength.score / 5 * 100) + '%', background: passwordStrength.color }"></div>
              </div>
              <span class="strength-label" :style="{ color: passwordStrength.color }">{{ passwordStrength.label }}</span>
            </div>
          </div>
          <div class="form-group">
            <label>Confirm Password *</label>
            <input type="password" v-model="form.confirmPassword" :class="{ error: errors.confirmPassword }" @input="handleChange('confirmPassword')" placeholder="Repeat your password" />
            <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
          </div>

          <div class="vehicle-section">
            <h3>Vehicle Information <span class="optional">(optional)</span></h3>
            <div class="form-row">
              <div class="form-group">
                <label>Make</label>
                <input type="text" v-model="form.carMake" placeholder="BMW" />
              </div>
              <div class="form-group">
                <label>Model</label>
                <input type="text" v-model="form.carModel" placeholder="M4" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Year</label>
                <input type="text" v-model="form.carYear" placeholder="2024" />
              </div>
              <div class="form-group">
                <label>Color</label>
                <input type="text" v-model="form.carColor" placeholder="Black" />
              </div>
            </div>
          </div>

          <div class="notifications-section">
            <h3>Notification Preferences</h3>
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.smsNotify" />
              <span>SMS appointment reminders</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.dealsNotify" />
              <span>Exclusive deals & promotions</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.newServicesNotify" />
              <span>New services & product announcements</span>
            </label>
          </div>

          <label class="checkbox-label terms-check" :class="{ 'has-error': errors.agreeTerms }">
            <input type="checkbox" v-model="form.agreeTerms" @change="handleChange('agreeTerms')" />
            <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> *</span>
          </label>
          <span v-if="errors.agreeTerms" class="error-message">{{ errors.agreeTerms }}</span>

          <button type="submit" class="btn btn-primary register-btn">Create Account</button>
        </form>

        <p class="register-footer">
          Already have an account? <router-link to="/login">Sign In</router-link>
        </p>
      </div>
    </div>

    <Modal
      :isOpen="showModal"
      title="Welcome to Apex!"
      message="Your account has been created successfully. You are now a member of the Apex Club."
      @close="showModal = false"
    />
  </main>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 60px;
  position: relative;
}

.register-bg {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 60%),
    var(--bg);
  z-index: -1;
}

.register-container {
  width: 100%;
  max-width: 540px;
}

.register-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  text-align: center;
}

.register-logo {
  width: 60px;
  height: 48px;
  margin: 0 auto 24px;
}

.register-logo svg {
  width: 100%;
  height: 100%;
}

.register-card h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.register-subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 32px;
}

.register-card .form-group {
  text-align: left;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.password-strength {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.strength-bar {
  flex: 1;
  height: 4px;
  background: var(--carbon);
  border-radius: 2px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s, background 0.3s;
}

.strength-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: var(--font-heading);
  white-space: nowrap;
}

.vehicle-section,
.notifications-section {
  text-align: left;
  margin: 24px 0;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.vehicle-section h3,
.notifications-section h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.optional {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 6px 0;
  text-align: left;
}

.checkbox-label input {
  accent-color: var(--primary);
  width: 16px;
  height: 16px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label a {
  color: var(--primary);
}

.terms-check {
  margin-top: 20px;
  margin-bottom: 4px;
}

.terms-check.has-error {
  color: #ff4444;
}

.register-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
  margin-top: 20px;
}

.register-footer {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 24px;
}

.register-footer a {
  color: var(--primary);
  font-weight: 600;
}

.register-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .register-card {
    padding: 32px 24px;
  }

  .register-card h1 {
    font-size: 1.6rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
