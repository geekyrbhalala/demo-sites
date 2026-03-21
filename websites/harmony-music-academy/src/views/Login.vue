<template>
  <main class="login-page">
    <div class="login-wrapper">
      <div class="login-visual">
        <div class="login-visual-overlay"></div>
        <div class="login-visual-content">
          <svg class="login-logo" viewBox="0 0 40 40" width="48" height="48">
            <path d="M20 2C20 2 14 8 14 18C14 24 16 28 18 30C18 34 16 36 16 36C16 36 18 38 20 38C22 38 24 36 24 36C24 36 22 34 22 30C24 28 26 24 26 18C26 8 20 2 20 2Z" fill="currentColor" opacity="0.9"/>
            <circle cx="18" cy="32" r="3" fill="currentColor"/>
            <path d="M22 8V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M22 8C22 8 28 10 28 14C28 18 22 16 22 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
          <h2>Welcome Back,<br>Musician</h2>
          <p>Access your lesson schedule, track your progress, and connect with your instructors.</p>
        </div>
      </div>

      <div class="login-form-side">
        <div class="login-form-inner">
          <div class="login-header">
            <h1>Sign In</h1>
            <p>Enter your credentials to access the student portal.</p>
          </div>

          <form class="login-form" @submit.prevent="handleSubmit">
            <div class="form-group" :class="{ 'has-error': errors.email }">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" placeholder="student@email.com" @input="clearError('email')" />
              <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
            </div>

            <div class="form-group" :class="{ 'has-error': errors.password }">
              <label for="password">Password</label>
              <div class="password-wrapper">
                <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" @input="clearError('password')" />
                <button type="button" class="toggle-pass" @click="showPassword = !showPassword">
                  {{ showPassword ? 'Hide' : 'Show' }}
                </button>
              </div>
              <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
            </div>

            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.remember" />
                <span>Remember me</span>
              </label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" class="btn btn-primary login-btn">Sign In</button>
          </form>

          <div class="divider">
            <span>or continue with</span>
          </div>

          <div class="social-buttons">
            <button class="social-btn google" type="button">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button class="social-btn apple" type="button">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Apple
            </button>
          </div>

          <p class="register-link">
            Don't have an account? <router-link to="/register">Create one</router-link>
          </p>
        </div>
      </div>
    </div>

    <Modal
      :isOpen="showModal"
      @close="showModal = false"
      title="Welcome Back!"
      message="You've successfully signed in to the Harmony Music Academy student portal."
      buttonText="Go to Dashboard"
    />
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)
const showPassword = ref(false)

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const errors = reactive({})

const clearError = (field) => {
  if (errors[field]) errors[field] = ''
}

const validate = () => {
  const errs = {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
  if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
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
  form.email = ''
  form.password = ''
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
}

.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.login-visual {
  position: relative;
  background: url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(74, 20, 140, 0.9), rgba(55, 71, 79, 0.85));
}

.login-visual-content {
  position: relative;
  z-index: 2;
  color: var(--white);
  text-align: center;
  max-width: 400px;
}

.login-logo {
  color: var(--secondary);
  margin-bottom: 24px;
}

.login-visual-content h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.2;
}

.login-visual-content p {
  font-size: 1.05rem;
  opacity: 0.85;
  line-height: 1.7;
}

.login-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--bg);
}

.login-form-inner {
  max-width: 420px;
  width: 100%;
}

.login-header {
  margin-bottom: 32px;
}

.login-header h1 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.login-header p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  width: 100%;
  padding: 12px 16px;
  padding-right: 60px;
  border: 2px solid #e0e0e0;
  border-radius: var(--radius);
  font-size: 1rem;
  transition: border-color var(--transition), box-shadow var(--transition);
  background: var(--white);
}

.password-wrapper input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(74, 20, 140, 0.1);
}

.toggle-pass {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  cursor: pointer;
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
  cursor: pointer;
  color: var(--text);
}

.checkbox-label input {
  accent-color: var(--primary);
}

.forgot-link {
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
}

.divider {
  text-align: center;
  margin: 24px 0;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #e0e0e0;
}

.divider span {
  position: relative;
  background: var(--bg);
  padding: 0 16px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.social-buttons {
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
  border: 2px solid #e0e0e0;
  border-radius: var(--radius);
  background: var(--white);
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text);
  cursor: pointer;
  transition: all var(--transition);
}

.social-btn:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.register-link {
  text-align: center;
  font-size: 0.92rem;
  color: var(--text-light);
}

.register-link a {
  color: var(--primary);
  font-weight: 600;
}

.register-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-wrapper {
    grid-template-columns: 1fr;
  }

  .login-visual {
    display: none;
  }

  .login-form-side {
    padding: 100px 24px 40px;
  }
}
</style>
