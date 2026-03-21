<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <router-link to="/" class="login-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 2L22 12L32 10L24 18L34 22L24 24L28 34L20 26L12 34L16 24L6 22L16 18L8 10L18 12L20 2Z" fill="#2196F3"/>
              <circle cx="20" cy="20" r="4" fill="#1a237e"/>
            </svg>
            <div>
              <span class="logo-pristine">PRISTINE</span>
              <span class="logo-cleaning">CLEANING CO.</span>
            </div>
          </router-link>
          <h1>Welcome Back</h1>
          <p>Sign in to your Pristine account to manage bookings and preferences.</p>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="form.email" :class="{ error: errors.email }" placeholder="your@email.com" @input="clearError('email')" />
            <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label>
              Password
              <a href="#" class="forgot-link">Forgot password?</a>
            </label>
            <input type="password" v-model="form.password" :class="{ error: errors.password }" placeholder="Enter your password" @input="clearError('password')" />
            <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
          </div>

          <div class="form-check">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.remember" />
              <span>Remember me for 30 days</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%">Sign In</button>
        </form>

        <div class="login-divider">
          <span>or continue with</span>
        </div>

        <div class="social-buttons">
          <button class="social-btn" type="button">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
          <button class="social-btn" type="button">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            GitHub
          </button>
        </div>

        <p class="login-footer">
          Don't have an account? <router-link to="/register">Create one</router-link>
        </p>
      </div>
    </div>

    <Modal :isOpen="showModal" @close="showModal = false" title="Welcome Back!" message="You've been successfully signed in. Redirecting to your dashboard..." />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const errors = ref({})

const form = ref({
  email: '',
  password: '',
  remember: false
})

const clearError = (field) => {
  if (errors.value[field]) errors.value[field] = ''
}

const handleSubmit = () => {
  const errs = {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errs.email = 'Valid email is required'
  if (form.value.password.length < 6) errs.password = 'Password must be at least 6 characters'
  if (Object.keys(errs).length > 0) {
    errors.value = errs
    return
  }
  showModal.value = true
  form.value = { email: '', password: '', remember: false }
  errors.value = {}
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  padding: 2rem;
}

.login-container {
  width: 100%;
  max-width: 460px;
}

.login-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-lg);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.login-logo svg {
  width: 36px;
  height: 36px;
}

.login-logo div {
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

.login-header h1 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.login-header p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.form-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 0.8rem;
  color: var(--primary);
  font-weight: 400;
}

.forgot-link:hover { text-decoration: underline; }

.form-check {
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-light);
  cursor: pointer;
}

.checkbox-label input {
  accent-color: var(--primary);
  width: 16px;
  height: 16px;
}

.login-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.login-divider::before,
.login-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.login-divider span {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  background: var(--white);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.social-btn:hover {
  border-color: var(--primary-light);
  background: var(--bg-light);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

.login-footer {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

.login-footer a {
  color: var(--primary);
  font-weight: 600;
}

.login-footer a:hover { text-decoration: underline; }

@media (max-width: 480px) {
  .login-card { padding: 2rem 1.5rem; }
}
</style>
