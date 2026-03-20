<template>
  <div class="register-page">
    <div class="register-wrapper">
      <div class="register-visual">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920" alt="LUXE Salon" />
        <div class="visual-overlay">
          <div class="visual-content">
            <svg width="50" height="58" viewBox="0 0 100 120" fill="none">
              <path d="M50 10 C30 10 15 30 15 50 C15 70 30 85 50 85 C55 85 60 83 63 80 C55 82 45 75 45 60 C45 45 55 35 65 30 C60 18 55 10 50 10Z" fill="white" opacity="0.9"/>
              <path d="M55 15 C65 20 80 35 80 55 C80 70 70 82 58 85 C65 80 70 70 70 58 C70 40 60 25 55 15Z" fill="white" opacity="0.5"/>
            </svg>
            <h2>Join LUXE</h2>
            <span class="script-accent visual-script">Begin your beauty journey</span>
          </div>
        </div>
      </div>

      <div class="register-form-side">
        <div class="register-form-inner" v-if="!showWelcome">
          <div class="form-header">
            <h1>Create Account</h1>
            <p>Join the LUXE community and enjoy exclusive perks, easy booking, and personalized experiences.</p>
          </div>

          <!-- Profile Type Toggle -->
          <div class="profile-toggle">
            <button
              :class="{ active: profileType === 'client' }"
              @click="profileType = 'client'"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Client
            </button>
            <button
              :class="{ active: profileType === 'staff' }"
              @click="profileType = 'staff'"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
              Staff
            </button>
          </div>

          <form @submit.prevent="handleRegister" novalidate>
            <div class="form-group" :class="{ error: errors.name, filled: form.name }">
              <input type="text" v-model="form.name" id="r-name" required />
              <label for="r-name">Full Name</label>
              <span class="field-error" v-if="errors.name">Please enter your full name</span>
            </div>

            <div class="form-group" :class="{ error: errors.email, filled: form.email }">
              <input type="email" v-model="form.email" id="r-email" required />
              <label for="r-email">Email Address</label>
              <span class="field-error" v-if="errors.email">Please enter a valid email address</span>
            </div>

            <div class="form-group" :class="{ error: errors.phone, filled: form.phone }">
              <input type="tel" v-model="form.phone" id="r-phone" required />
              <label for="r-phone">Phone Number</label>
              <span class="field-error" v-if="errors.phone">Please enter a valid phone number</span>
            </div>

            <div class="form-group" :class="{ error: errors.password, filled: form.password }">
              <input :type="showPassword ? 'text' : 'password'" v-model="form.password" id="r-pass" required />
              <label for="r-pass">Password</label>
              <span class="field-error" v-if="errors.password">Password must be at least 8 characters</span>
              <div class="password-strength" v-if="form.password">
                <div class="strength-bar">
                  <div class="strength-fill" :style="{ width: passwordStrength.width, background: passwordStrength.color }"></div>
                </div>
                <span :style="{ color: passwordStrength.color }">{{ passwordStrength.label }}</span>
              </div>
            </div>

            <div class="form-group" :class="{ error: errors.confirm, filled: form.confirm }">
              <input :type="showPassword ? 'text' : 'password'" v-model="form.confirm" id="r-confirm" required />
              <label for="r-confirm">Confirm Password</label>
              <span class="field-error" v-if="errors.confirm">Passwords do not match</span>
            </div>

            <label class="checkbox-label terms-check">
              <input type="checkbox" v-model="agreeTerms" />
              <span class="custom-check"></span>
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
            <span class="field-error" v-if="errors.terms">You must agree to the terms to continue</span>

            <button type="submit" class="btn btn-primary register-btn">Create Account</button>
          </form>

          <p class="login-link">
            Already have an account? <router-link to="/login">Sign in</router-link>
          </p>
        </div>

        <!-- Welcome Animation -->
        <div class="welcome-screen" v-else>
          <div class="welcome-anim">
            <div class="welcome-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l5 5L20 7"/>
              </svg>
            </div>
            <span class="script-accent" style="font-size: 2.5rem;">Welcome!</span>
            <h2>You're All Set, {{ form.name.split(' ')[0] }}</h2>
            <p>Your LUXE account has been created. You can now book appointments, save favorites, and earn rewards.</p>
            <div class="welcome-actions">
              <router-link to="/booking" class="btn btn-primary">Book Your First Visit</router-link>
              <router-link to="/" class="btn btn-secondary">Explore LUXE</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const showWelcome = ref(false)
const showPassword = ref(false)
const profileType = ref('client')
const agreeTerms = ref(false)

const form = reactive({ name: '', email: '', phone: '', password: '', confirm: '' })
const errors = reactive({ name: false, email: false, phone: false, password: false, confirm: false, terms: false })

const passwordStrength = computed(() => {
  const p = form.password
  if (p.length < 4) return { width: '20%', color: '#e74c3c', label: 'Weak' }
  if (p.length < 8) return { width: '50%', color: '#f39c12', label: 'Fair' }
  if (p.length >= 8 && /[A-Z]/.test(p) && /[0-9]/.test(p)) return { width: '100%', color: '#27ae60', label: 'Strong' }
  return { width: '75%', color: '#9cac8b', label: 'Good' }
})

const handleRegister = () => {
  Object.keys(errors).forEach(k => errors[k] = false)
  let valid = true

  if (!form.name.trim()) { errors.name = true; valid = false }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { errors.email = true; valid = false }
  if (!form.phone.trim() || form.phone.trim().length < 7) { errors.phone = true; valid = false }
  if (!form.password || form.password.length < 8) { errors.password = true; valid = false }
  if (form.password !== form.confirm) { errors.confirm = true; valid = false }
  if (!agreeTerms.value) { errors.terms = true; valid = false }

  if (!valid) return
  showWelcome.value = true
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  padding-top: 80px;
}

.register-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  min-height: calc(100vh - 80px);
}

.register-visual {
  position: relative;
  overflow: hidden;
}

.register-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(183, 110, 121, 0.8) 0%, rgba(45, 74, 62, 0.85) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-content {
  text-align: center;
  color: white;
}

.visual-content h2 {
  color: white;
  font-size: 2.4rem;
  margin: 20px 0 4px;
}

.visual-script {
  font-size: 2rem;
}

/* Form Side */
.register-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: var(--warm-white);
}

.register-form-inner {
  max-width: 460px;
  width: 100%;
}

.form-header h1 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.form-header p {
  color: #888;
  margin-bottom: 24px;
}

/* Profile Toggle */
.profile-toggle {
  display: flex;
  gap: 0;
  margin-bottom: 28px;
  background: var(--blush);
  border-radius: 12px;
  padding: 4px;
}

.profile-toggle button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 10px;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  transition: all 0.3s ease;
}

.profile-toggle button.active {
  background: white;
  color: var(--rose-gold);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* Form */
.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-group input {
  width: 100%;
  padding: 18px 20px 8px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: var(--charcoal);
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

.form-group input:focus {
  border-color: var(--rose-gold);
}

.form-group input:focus ~ label,
.form-group.filled input ~ label {
  top: 8px;
  transform: none;
  font-size: 0.72rem;
  color: var(--rose-gold);
}

.form-group.error input {
  border-color: #e74c3c;
}

.field-error {
  display: block;
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 4px;
}

.password-strength {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.strength-bar {
  flex: 1;
  height: 4px;
  background: #e8e8e8;
  border-radius: 2px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.password-strength span {
  font-size: 0.75rem;
  font-weight: 600;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #666;
  cursor: pointer;
  margin-bottom: 8px;
}

.checkbox-label input {
  display: none;
}

.custom-check {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s;
  flex-shrink: 0;
}

.checkbox-label input:checked ~ .custom-check {
  background: var(--rose-gold);
  border-color: var(--rose-gold);
}

.checkbox-label input:checked ~ .custom-check::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.terms-check a {
  color: var(--rose-gold);
}

.terms-check a:hover {
  text-decoration: underline;
}

.register-btn {
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  margin-top: 20px;
}

.login-link {
  text-align: center;
  margin-top: 24px;
  color: #888;
  font-size: 0.95rem;
}

.login-link a {
  color: var(--rose-gold);
  font-weight: 600;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Welcome Screen */
.welcome-screen {
  text-align: center;
  max-width: 500px;
}

.welcome-anim {
  animation: fadeIn 0.5s ease;
}

.welcome-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--sage);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  animation: scaleIn 0.5s ease;
}

.welcome-circle svg {
  width: 44px;
  height: 44px;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: drawCheck 0.5s ease 0.3s forwards;
}

@keyframes scaleIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes drawCheck {
  to { stroke-dashoffset: 0; }
}

.welcome-screen h2 {
  margin: 12px 0;
  font-size: 1.8rem;
}

.welcome-screen p {
  color: #666;
  margin-bottom: 32px;
  line-height: 1.7;
}

.welcome-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 968px) {
  .register-wrapper {
    grid-template-columns: 1fr;
  }

  .register-visual {
    display: none;
  }

  .register-form-side {
    padding: 40px 24px;
  }
}

@media (max-width: 500px) {
  .welcome-actions {
    flex-direction: column;
  }
}
</style>
