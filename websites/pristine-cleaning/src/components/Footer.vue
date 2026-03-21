<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 40 40" fill="none">
              <path d="M20 2L22 12L32 10L24 18L34 22L24 24L28 34L20 26L12 34L16 24L6 22L16 18L8 10L18 12L20 2Z" fill="#2196F3"/>
              <circle cx="20" cy="20" r="4" fill="#ffffff"/>
            </svg>
            <div class="footer-logo-text">
              <span class="logo-pristine">PRISTINE</span>
              <span class="logo-cleaning">CLEANING CO.</span>
            </div>
          </div>
          <p class="footer-description">
            Professional residential and commercial cleaning services.
            Making spaces sparkle since 2015.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li><router-link to="/services">Residential Cleaning</router-link></li>
            <li><router-link to="/services">Commercial Cleaning</router-link></li>
            <li><router-link to="/services">Deep Cleaning</router-link></li>
            <li><router-link to="/services">Move In/Out</router-link></li>
            <li><router-link to="/services">Post-Construction</router-link></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/booking">Book Online</router-link></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>123 Clean Street, Suite 100<br>San Francisco, CA 94102</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span>(415) 555-0123</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>hello@pristineclean.co</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Mon-Fri: 7am - 7pm<br>Sat: 8am - 5pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Pristine Cleaning Co. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--secondary);
  color: rgba(255, 255, 255, 0.8);
  padding: 5rem 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.footer-logo .logo-icon {
  width: 36px;
  height: 36px;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.footer-logo-text .logo-pristine {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--white);
  letter-spacing: 0.08em;
}

.footer-logo-text .logo-cleaning {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.6rem;
  color: var(--primary-light);
  letter-spacing: 0.2em;
}

.footer-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
}

.footer-social a:hover {
  background: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
}

.footer-social svg {
  width: 18px;
  height: 18px;
}

.footer-links h4,
.footer-contact h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 1.25rem;
}

.footer-links ul li {
  margin-bottom: 0.75rem;
}

.footer-links ul li a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.footer-links ul li a:hover {
  color: var(--primary-light);
}

.footer-contact ul li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-contact svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--primary-light);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  transition: color var(--transition-fast);
}

.footer-bottom-links a:hover {
  color: var(--primary-light);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
