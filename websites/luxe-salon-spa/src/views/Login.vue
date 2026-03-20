<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-visual">
        <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200" alt="LUXE Spa" />
        <div class="visual-overlay">
          <div class="visual-content">
            <svg class="visual-logo" width="50" height="58" viewBox="0 0 100 120" fill="none">
              <path d="M50 10 C30 10 15 30 15 50 C15 70 30 85 50 85 C55 85 60 83 63 80 C55 82 45 75 45 60 C45 45 55 35 65 30 C60 18 55 10 50 10Z" fill="white" opacity="0.9"/>
              <path d="M55 15 C65 20 80 35 80 55 C80 70 70 82 58 85 C65 80 70 70 70 58 C70 40 60 25 55 15Z" fill="white" opacity="0.5"/>
            </svg>
            <h2>Welcome Back</h2>
            <span class="script-accent visual-script">to your sanctuary</span>
          </div>
        </div>
      </div>

      <div class="login-form-side">
        <div class="login-form-inner">
          <div class="form-header">
            <h1>Sign In</h1>
            <p>Welcome back to LUXE. Sign in to manage your appointments and preferences.</p>
          </div>

          <form @submit.prevent="handleLogin" novalidate>
            <div class="form-group" :class="{ error: errors.email, filled: form.email, focused: focused.email }">
              <div class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <input
                type="email"
                v-model="form.email"
                id="l-email"
                @focus="focused.email = true"
                @blur="focused.email = false"
                required
              />
              <label for="l-email">Email Address</label>
              <span class="field-error" v-if="errors.email">Please enter a valid email address</span>
            </div>

            <div class="form-group" :class="{ error: errors.password, filled: form.password, focused: focused.password }">
              <div class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                id="l-pass"
                @focus="focused.password = true"
                @blur="focused.password = false"
                required
              />
              <label for="l-pass">Password</label>
              <button type="button" class="toggle-pass" @click="showPassword = !showPassword" tabindex="-1">
                <svg v-if="!showPassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22"/></svg>
              </button>
              <span class="field-error" v-if="errors.password">Please enter your password</span>
            </div>

            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" v-model="rememberMe" />
                <span class="custom-check"></span>
                Remember me
              </label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" class="btn btn-primary login-btn">Sign In</button>
          </form>

          <div class="divider">
            <span>or continue with</span>
          </div>

          <div class="social-logins">
            <button class="social-btn google-btn" @click="socialLogin('Google')">
              <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
            <button class="social-btn apple-btn" @click="socialLogin('Apple')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Continue with Apple
            </button>
          </div>

          <p class="register-link">
            Don't have an account? <router-link to="/register">Create one</router-link>
          </p>
        </div>
      </div>
    </div>

    <Modal
      :show="showModal"
      title="Welcome Back!"
      message="You have been successfully signed in. Redirecting to your dashboard..."
      buttonText="Continue"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const showPassword = ref(false)
const rememberMe = ref(false)
const form = reactive({ email: '', password: '' })
const errors = reactive({ email: false, password: false })
const focused = reactive({ email: false, password: false })

const handleLogin = () => {
  Object.keys(errors).forEach(k => errors[k] = false)
  let valid = true
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { errors.email = true; valid = false }
  if (!form.password.trim()) { errors.password = true; valid = false }
  if (!valid) return
  showModal.value = true
}

const socialLogin = (provider) => {
  showModal.value = true
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  padding-top: 80px;
}

.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 80px);
}

.login-visual {
  position: relative;
  overflow: hidden;
}

.login-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(45, 74, 62, 0.85) 0%, rgba(183, 110, 121, 0.6) 100%);
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
.login-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: var(--warm-white);
}

.login-form-inner {
  max-width: 420px;
  width: 100%;
}

.form-header h1 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.form-header p {
  color: #888;
  margin-bottom: 32px;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  z-index: 1;
  transition: color 0.3s;
}

.form-group.focused .input-icon,
.form-group.filled .input-icon {
  color: var(--rose-gold);
}

.form-group input {
  width: 100%;
  padding: 18px 48px 8px 48px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: var(--charcoal);
}

.form-group label {
  position: absolute;
  top: 50%;
  left: 48px;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group.focused input {
  border-color: var(--rose-gold);
}

.form-group input:focus ~ label,
.form-group.filled input ~ label {
  top: 8px;
  transform: none;
  font-size: 0.72rem;
  color: var(--rose-gold);
  left: 48px;
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

.toggle-pass {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: #bbb;
  padding: 4px;
}

.toggle-pass:hover {
  color: var(--rose-gold);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
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

.forgot-link {
  font-size: 0.9rem;
  color: var(--rose-gold);
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 16px;
  font-size: 1rem;
}

.divider {
  display: flex;
  align-items: center;
  margin: 28px 0;
  gap: 16px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e0e0e0;
}

.divider span {
  font-size: 0.85rem;
  color: #999;
  white-space: nowrap;
}

.social-logins {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid #e8e8e8;
  background: white;
  color: var(--charcoal);
  transition: all 0.3s ease;
  width: 100%;
}

.social-btn:hover {
  border-color: var(--rose-gold-light);
  box-shadow: var(--shadow-soft);
}

.apple-btn {
  background: var(--charcoal);
  color: white;
  border-color: var(--charcoal);
}

.apple-btn:hover {
  background: #444;
  border-color: #444;
}

.register-link {
  text-align: center;
  margin-top: 28px;
  color: #888;
  font-size: 0.95rem;
}

.register-link a {
  color: var(--rose-gold);
  font-weight: 600;
}

.register-link a:hover {
  text-decoration: underline;
}

@media (max-width: 968px) {
  .login-wrapper {
    grid-template-columns: 1fr;
  }

  .login-visual {
    display: none;
  }

  .login-form-side {
    padding: 40px 24px;
  }
}
</style>
