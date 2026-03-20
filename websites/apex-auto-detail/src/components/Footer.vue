<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()

const services = [
  { label: 'Exterior Detailing', path: '/services' },
  { label: 'Interior Detailing', path: '/services' },
  { label: 'Ceramic Coating', path: '/services' },
  { label: 'Paint Correction', path: '/services' },
  { label: 'Packages', path: '/packages' }
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/login' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-main container">
      <div class="footer-brand">
        <router-link to="/" class="footer-logo">
          <svg class="footer-logo-icon" viewBox="0 0 50 40" fill="none">
            <polygon points="25,2 48,38 2,38" stroke="#0066ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
            <line x1="10" y1="26" x2="40" y2="26" stroke="#0066ff" stroke-width="1.5"/>
            <line x1="16" y1="32" x2="34" y2="32" stroke="#0066ff" stroke-width="1"/>
          </svg>
          <div class="footer-logo-text">
            <span class="footer-logo-apex">APEX</span>
            <span class="footer-logo-detail">AUTO DETAIL</span>
          </div>
        </router-link>
        <p class="footer-desc">
          Premium mobile and shop-based car detailing. We treat every vehicle like a supercar, delivering perfection in every detail.
        </p>
        <div class="footer-social">
          <a href="#" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.27a8.16 8.16 0 003.76.92V6.69z"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#0a0a0a"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li v-for="item in services" :key="item.label">
            <router-link :to="item.path">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li v-for="item in company" :key="item.label">
            <router-link :to="item.path">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Hours & Contact</h4>
        <ul class="footer-info">
          <li>
            <span class="info-label">Mon - Fri</span>
            <span>8:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span class="info-label">Saturday</span>
            <span>9:00 AM - 5:00 PM</span>
          </li>
          <li>
            <span class="info-label">Sunday</span>
            <span>By Appointment</span>
          </li>
          <li class="footer-phone">
            <a href="tel:+15551234567">(555) 123-4567</a>
          </li>
          <li>
            <a href="mailto:info@apexautodetail.com">info@apexautodetail.com</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; {{ currentYear }} Apex Auto Detail. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--secondary);
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 48px;
  padding: 80px 24px 60px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.footer-logo-icon {
  width: 38px;
  height: 30px;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.footer-logo-apex {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
  letter-spacing: 4px;
}

.footer-logo-detail {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.6rem;
  color: var(--primary);
  letter-spacing: 3px;
}

.footer-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--carbon);
  border-radius: 50%;
  color: var(--silver);
  transition: var(--transition);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.social-link:hover {
  background: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
}

.footer-col h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-col ul li a:hover {
  color: var(--primary);
}

.footer-info li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.info-label {
  color: var(--silver);
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-phone a {
  font-family: var(--font-accent);
  font-size: 1rem;
  color: var(--primary) !important;
  font-weight: 600;
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  color: var(--text-muted);
  transition: color 0.2s;
}

.footer-bottom-links a:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    padding: 48px 16px 36px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-bottom-inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
