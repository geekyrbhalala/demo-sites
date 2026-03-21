<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-card">
        <div class="register-header">
          <router-link to="/" class="register-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 2L22 12L32 10L24 18L34 22L24 24L28 34L20 26L12 34L16 24L6 22L16 18L8 10L18 12L20 2Z" fill="#2196F3"/>
              <circle cx="20" cy="20" r="4" fill="#1a237e"/>
            </svg>
            <div>
              <span class="logo-pristine">PRISTINE</span>
              <span class="logo-cleaning">CLEANING CO.</span>
            </div>
          </router-link>
          <h1>Create Account</h1>
          <p>Join Pristine to manage your bookings, preferences, and more.</p>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" v-model="form.firstName" :class="{ error: errors.firstName }" placeholder="Jane" @input="clearError('firstName')" />
              <span v-if="errors.firstName" class="error-msg">{{ errors.firstName }}</span>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" v-model="form.lastName" :class="{ error: errors.lastName }" placeholder="Smith" @input="clearError('lastName')" />
              <span v-if="errors.lastName" class="error-msg">{{ errors.lastName }}</span>
            </div>
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="form.email" :class="{ error: errors.email }" placeholder="jane@example.com" @input="clearError('email')" />
            <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" v-model="form.phone" :class="{ error: errors.phone }" placeholder="(415) 555-0000" @input="clearError('phone')" />
            <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
          </div>

          <div class="form-group">
            <label>Address</label>
            <input type="text" v-model="form.address" :class="{ error: errors.address }" placeholder="123 Main St, San Francisco, CA" @input="clearError('address')" />
            <span v-if="errors.address" class="error-msg">{{ errors.address }}</span>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.password" :class="{ error: errors.password }" placeholder="Create a strong password" @input="clearError('password')" />
            <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
            <div class="password-strength" v-if="form.password">
              <div class="strength-bar">
                <div class="strength-fill" :style="{ width: strengthPercent + '%' }" :class="strengthClass"></div>
              </div>
              <span class="strength-label" :class="strengthClass">{{ strengthLabel }}</span>
            </div>
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" v-model="form.confirmPassword" :class="{ error: errors.confirmPassword }" placeholder="Re-enter your password" @input="clearError('confirmPassword')" />
            <span v-if="errors.confirmPassword" class="error-msg">{{ errors.confirmPassword }}</span>
          </div>

          <div class="form-group">
            <label>Preferred Services</label>
            <div class="pref-grid">
              <label v-for="pref in preferences" :key="pref" class="pref-option" :class="{ checked: form.preferences.includes(pref) }">
                <input type="checkbox" :value="pref" v-model="form.preferences" />
                {{ pref }}
              </label>
            </div>
          </div>

          <div class="form-check">
            <label class="checkbox-label" :class="{ 'error-text': errors.terms }">
              <input type="checkbox" v-model="form.terms" />
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>
            <span v-if="errors.terms" class="error-msg">{{ errors.terms }}</span>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%">Create Account</button>
        </form>

        <p class="register-footer">
          Already have an account? <router-link to="/login">Sign in</router-link>
        </p>
      </div>
    </div>

    <Modal :isOpen="showModal" @close="showModal = false" title="Account Created!" message="Welcome to Pristine! Your account has been created successfully. You can now manage your bookings online." />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const errors = ref({})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  confirmPassword: '',
  preferences: [],
  terms: false
})

const preferences = ['Regular Cleaning', 'Deep Cleaning', 'Move In/Out', 'Commercial', 'Carpet Cleaning']

const passwordStrength = computed(() => {
  const pw = form.value.password
  let score = 0
  if (pw.length >= 6) score++
  if (pw.length >= 10) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
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

const clearError = (field) => {
  if (errors.value[field]) errors.value[field] = ''
}

const handleSubmit = () => {
  const errs = {}
  if (!form.value.firstName.trim()) errs.firstName = 'First name is required'
  if (!form.value.lastName.trim()) errs.lastName = 'Last name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Valid email is required'
  if (form.value.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(form.value.phone)) errs.phone = 'Invalid phone number'
  if (!form.value.address.trim()) errs.address = 'Address is required'
  if (form.value.password.length < 6) errs.password = 'Password must be at least 6 characters'
  if (form.value.password !== form.value.confirmPassword) errs.confirmPassword = 'Passwords do not match'
  if (!form.value.terms) errs.terms = 'You must accept the terms'

  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }

  showModal.value = true
  form.value = { firstName: '', lastName: '', email: '', phone: '', address: '', password: '', confirmPassword: '', preferences: [], terms: false }
  errors.value = {}
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  padding: 2rem;
}

.register-container {
  width: 100%;
  max-width: 560px;
}

.register-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-lg);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.register-logo svg {
  width: 36px;
  height: 36px;
}

.register-logo div {
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}

.logo-pristine {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--secondary);
  letter-spacing: 0.08em;
}

.logo-cleaning {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.6rem;
  color: var(--primary);
  letter-spacing: 0.2em;
}

.register-header h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
.register-header p { font-size: 0.9rem; color: var(--text-muted); }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.password-strength {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.strength-bar {
  flex: 1;
  height: 4px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease, background 0.3s ease;
}

.strength-fill.weak { background: var(--danger); }
.strength-fill.medium { background: var(--warning); }
.strength-fill.strong { background: var(--success); }

.strength-label {
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.strength-label.weak { color: var(--danger); }
.strength-label.medium { color: var(--warning); }
.strength-label.strong { color: var(--success); }

.pref-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pref-option {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.pref-option:hover { border-color: var(--primary-light); }

.pref-option.checked {
  background: rgba(33, 150, 243, 0.1);
  border-color: var(--primary);
  color: var(--primary);
}

.pref-option input { display: none; }

.form-check {
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-light);
  cursor: pointer;
}

.checkbox-label input {
  accent-color: var(--primary);
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;
}

.checkbox-label a {
  color: var(--primary);
  font-weight: 500;
}

.error-text { color: var(--danger); }

.register-footer {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 1.5rem 0 0;
}

.register-footer a {
  color: var(--primary);
  font-weight: 600;
}

@media (max-width: 480px) {
  .register-card { padding: 2rem 1.5rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
