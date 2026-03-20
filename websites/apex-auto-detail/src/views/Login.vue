<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const form = ref({ email: '', password: '' })
const errors = ref({})

function validate() {
  const errs = {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Invalid email address'
  if (form.value.password.length < 6) errs.password = 'Password must be at least 6 characters'
  return errs
}

function handleSubmit() {
  const errs = validate()
  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }
  showModal.value = true
  form.value = { email: '', password: '' }
  errors.value = {}
}

function handleChange(field) {
  if (errors.value[field]) errors.value[field] = ''
}
</script>

<template>
  <main class="login-page">
    <div class="login-bg">
      <div class="speed-lines"></div>
    </div>
    <div class="login-container">
      <div class="login-card">
        <div class="login-logo">
          <svg viewBox="0 0 50 40" fill="none">
            <polygon points="25,2 48,38 2,38" stroke="#0066ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
            <line x1="10" y1="26" x2="40" y2="26" stroke="#0066ff" stroke-width="1.5"/>
            <line x1="16" y1="32" x2="34" y2="32" stroke="#0066ff" stroke-width="1"/>
          </svg>
        </div>
        <h1>Access Your Garage</h1>
        <p class="login-subtitle">Sign in to manage your bookings and vehicle history</p>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              v-model="form.email"
              :class="{ error: errors.email }"
              @input="handleChange('email')"
              placeholder="your@email.com"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              v-model="form.password"
              :class="{ error: errors.password }"
              @input="handleChange('password')"
              placeholder="Enter your password"
            />
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>
          <div class="form-extras">
            <label class="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary login-btn">Sign In</button>
        </form>

        <div class="divider">
          <span>or continue with</span>
        </div>

        <div class="social-login">
          <button class="social-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button class="social-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </button>
        </div>

        <p class="login-footer">
          Don't have an account? <router-link to="/register">Join the Apex Club</router-link>
        </p>
      </div>
    </div>

    <Modal
      :isOpen="showModal"
      title="Welcome Back!"
      message="You have successfully signed in to your Apex account."
      @close="showModal = false"
    />
  </main>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 60px;
  position: relative;
}

.login-bg {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 60%),
    var(--bg);
  z-index: -1;
}

.login-container {
  width: 100%;
  max-width: 440px;
}

.login-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  text-align: center;
}

.login-logo {
  width: 60px;
  height: 48px;
  margin: 0 auto 24px;
}

.login-logo svg {
  width: 100%;
  height: 100%;
}

.login-card h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.login-subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 32px;
}

.login-card .form-group {
  text-align: left;
}

.form-extras {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 0.85rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  cursor: pointer;
}

.remember-me input {
  accent-color: var(--primary);
}

.forgot-link {
  color: var(--primary);
  transition: opacity 0.2s;
}

.forgot-link:hover {
  opacity: 0.8;
}

.login-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
}

.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 28px 0;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 28px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: var(--carbon);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--silver);
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
}

.social-btn:hover {
  border-color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
}

.login-footer {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.login-footer a {
  color: var(--primary);
  font-weight: 600;
}

.login-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-card {
    padding: 32px 24px;
  }

  .login-card h1 {
    font-size: 1.6rem;
  }
}
</style>
