<template>
  <main class="register-page">
    <div class="register-wrapper">
      <div class="register-visual">
        <div class="register-visual-overlay"></div>
        <div class="register-visual-content">
          <svg viewBox="0 0 40 40" width="48" height="48" class="register-logo">
            <path d="M20 2C20 2 14 8 14 18C14 24 16 28 18 30C18 34 16 36 16 36C16 36 18 38 20 38C22 38 24 36 24 36C24 36 22 34 22 30C24 28 26 24 26 18C26 8 20 2 20 2Z" fill="currentColor" opacity="0.9"/>
            <circle cx="18" cy="32" r="3" fill="currentColor"/>
            <path d="M22 8V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M22 8C22 8 28 10 28 14C28 18 22 16 22 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
          <h2>Begin Your<br>Musical Journey</h2>
          <p>Join hundreds of students discovering the joy of music at Harmony Music Academy.</p>
          <div class="trial-banner">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <span>Includes a FREE 30-minute trial lesson</span>
          </div>
        </div>
      </div>

      <div class="register-form-side">
        <div class="register-form-inner">
          <div class="register-header">
            <h1>Create Account</h1>
            <p>Fill out the form below to get started with your musical education.</p>
          </div>

          <form class="register-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group" :class="{ 'has-error': errors.name }">
                <label for="name">Full Name *</label>
                <input id="name" v-model="form.name" type="text" placeholder="Your full name" @input="clearError('name')" />
                <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
              </div>
              <div class="form-group" :class="{ 'has-error': errors.email }">
                <label for="email">Email *</label>
                <input id="email" v-model="form.email" type="email" placeholder="your@email.com" @input="clearError('email')" />
                <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group" :class="{ 'has-error': errors.phone }">
                <label for="phone">Phone *</label>
                <input id="phone" v-model="form.phone" type="tel" placeholder="(555) 123-4567" @input="clearError('phone')" />
                <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
              </div>
              <div class="form-group">
                <label for="age">Age Group *</label>
                <select id="age" v-model="form.ageGroup">
                  <option value="">Select age group</option>
                  <option value="child">Child (5-12)</option>
                  <option value="teen">Teen (13-17)</option>
                  <option value="adult">Adult (18+)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Instruments of Interest *</label>
              <div class="checkbox-grid" :class="{ 'has-error': errors.instruments }">
                <label v-for="inst in instrumentOptions" :key="inst" class="checkbox-item">
                  <input type="checkbox" :value="inst" v-model="form.instruments" @change="clearError('instruments')" />
                  <span>{{ inst }}</span>
                </label>
              </div>
              <span v-if="errors.instruments" class="error-text">{{ errors.instruments }}</span>
            </div>

            <div class="form-group">
              <label for="experience">Experience Level</label>
              <select id="experience" v-model="form.experience">
                <option value="">Select your level</option>
                <option value="none">No Experience</option>
                <option value="beginner">Beginner (less than 1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            <div class="form-row">
              <div class="form-group" :class="{ 'has-error': errors.password }">
                <label for="password">Password *</label>
                <input id="password" v-model="form.password" type="password" placeholder="Min 6 characters" @input="clearError('password')" />
                <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
                <div v-if="form.password" class="strength-bar">
                  <div class="strength-fill" :style="{ width: strengthPercent + '%' }" :class="strengthClass"></div>
                </div>
                <span v-if="form.password" class="strength-label" :class="strengthClass">{{ strengthLabel }}</span>
              </div>
              <div class="form-group" :class="{ 'has-error': errors.confirmPassword }">
                <label for="confirmPassword">Confirm Password *</label>
                <input id="confirmPassword" v-model="form.confirmPassword" type="password" placeholder="Repeat password" @input="clearError('confirmPassword')" />
                <span v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</span>
              </div>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.terms }">
              <label class="terms-label">
                <input type="checkbox" v-model="form.terms" @change="clearError('terms')" />
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
              </label>
              <span v-if="errors.terms" class="error-text">{{ errors.terms }}</span>
            </div>

            <button type="submit" class="btn btn-primary register-btn">Create Account</button>
          </form>

          <p class="login-link">
            Already have an account? <router-link to="/login">Sign in</router-link>
          </p>
        </div>
      </div>
    </div>

    <Modal
      :isOpen="showModal"
      @close="showModal = false"
      title="Welcome to Harmony!"
      message="Your account has been created successfully. Check your email for a confirmation link and details about your free trial lesson."
      buttonText="Start Exploring"
    />
  </main>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)

const instrumentOptions = ['Piano', 'Guitar', 'Violin', 'Drums', 'Voice', 'Music Theory', 'Composition', 'Other']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  ageGroup: '',
  instruments: [],
  experience: '',
  password: '',
  confirmPassword: '',
  terms: false
})

const errors = reactive({})

const clearError = (field) => {
  if (errors[field]) errors[field] = ''
}

const passwordStrength = computed(() => {
  let score = 0
  const p = form.password
  if (p.length >= 6) score++
  if (p.length >= 10) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  return score
})

const strengthPercent = computed(() => (passwordStrength.value / 5) * 100)

const strengthClass = computed(() => {
  if (passwordStrength.value <= 1) return 'weak'
  if (passwordStrength.value <= 3) return 'medium'
  return 'strong'
})

const strengthLabel = computed(() => {
  if (passwordStrength.value <= 1) return 'Weak'
  if (passwordStrength.value <= 3) return 'Medium'
  return 'Strong'
})

const validate = () => {
  const errs = {}
  if (!form.name.trim()) errs.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
  if (!/^[\d\s\-\+\(\)]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number'
  if (form.instruments.length === 0) errs.instruments = 'Please select at least one instrument'
  if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
  if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
  if (!form.terms) errs.terms = 'You must agree to the terms'
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
  form.ageGroup = ''
  form.instruments = []
  form.experience = ''
  form.password = ''
  form.confirmPassword = ''
  form.terms = false
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
}

.register-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  min-height: 100vh;
}

.register-visual {
  position: relative;
  background: url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.register-visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.9), rgba(194, 24, 91, 0.7));
}

.register-visual-content {
  position: relative;
  z-index: 2;
  color: var(--white);
  text-align: center;
  max-width: 380px;
}

.register-logo {
  color: var(--secondary);
  margin-bottom: 24px;
}

.register-visual-content h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.2;
}

.register-visual-content p {
  font-size: 1.05rem;
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 28px;
}

.trial-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 12px 20px;
  background: rgba(255, 179, 0, 0.2);
  border-radius: var(--radius);
  border: 1px solid rgba(255, 179, 0, 0.4);
}

.trial-banner svg {
  color: var(--secondary);
  flex-shrink: 0;
}

.trial-banner span {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
}

.register-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  background: var(--bg);
}

.register-form-inner {
  max-width: 560px;
  width: 100%;
}

.register-header {
  margin-bottom: 32px;
}

.register-header h1 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.register-header p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: var(--radius);
  background: var(--white);
}

.checkbox-grid.has-error {
  border-color: var(--accent);
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 4px 0;
}

.checkbox-item input {
  accent-color: var(--primary);
}

.strength-bar {
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s ease, background 0.3s ease;
}

.strength-fill.weak { background: #e53935; }
.strength-fill.medium { background: var(--secondary); }
.strength-fill.strong { background: #43a047; }

.strength-label {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 4px;
  display: block;
}

.strength-label.weak { color: #e53935; }
.strength-label.medium { color: var(--secondary); }
.strength-label.strong { color: #43a047; }

.terms-label {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--text);
}

.terms-label input {
  margin-top: 4px;
  accent-color: var(--primary);
}

.terms-label a {
  color: var(--primary);
  font-weight: 500;
}

.terms-label a:hover {
  text-decoration: underline;
}

.register-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
  margin-top: 8px;
}

.login-link {
  text-align: center;
  font-size: 0.92rem;
  color: var(--text-light);
  margin-top: 24px;
}

.login-link a {
  color: var(--primary);
  font-weight: 600;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .register-wrapper {
    grid-template-columns: 1fr;
  }

  .register-visual {
    display: none;
  }

  .register-form-side {
    padding: 100px 24px 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .checkbox-grid {
    grid-template-columns: 1fr;
  }
}
</style>
