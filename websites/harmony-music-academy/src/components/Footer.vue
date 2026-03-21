<template>
  <footer class="footer">
    <div class="footer-inner container">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <svg viewBox="0 0 40 40" width="36" height="36">
              <path d="M20 2C20 2 14 8 14 18C14 24 16 28 18 30C18 34 16 36 16 36C16 36 18 38 20 38C22 38 24 36 24 36C24 36 22 34 22 30C24 28 26 24 26 18C26 8 20 2 20 2Z" fill="currentColor" opacity="0.9"/>
              <circle cx="18" cy="32" r="3" fill="currentColor"/>
              <path d="M22 8V22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
              <path d="M22 8C22 8 28 10 28 14C28 18 22 16 22 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
            <div>
              <span class="footer-name">HARMONY</span>
              <span class="footer-sub">MUSIC ACADEMY</span>
            </div>
          </router-link>
          <p class="footer-desc">Nurturing musical talent and passion since 2011. We believe every person has a song within them waiting to be heard.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/programs">Programs</router-link></li>
            <li><router-link to="/instructors">Instructors</router-link></li>
            <li><router-link to="/schedule">Schedule</router-link></li>
            <li><router-link to="/recitals">Recitals</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><router-link to="/programs">Piano</router-link></li>
            <li><router-link to="/programs">Guitar</router-link></li>
            <li><router-link to="/programs">Violin</router-link></li>
            <li><router-link to="/programs">Drums</router-link></li>
            <li><router-link to="/programs">Voice</router-link></li>
            <li><router-link to="/programs">Music Theory</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>456 Melody Lane, Suite 200<br>Harmony Hills, CA 90210</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>(555) 432-8900</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>info@harmonymusic.edu</span>
            </li>
          </ul>
          <div class="footer-hours">
            <h5>Hours</h5>
            <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Harmony Music Academy. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <router-link to="/login">Student Portal</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--charcoal);
  color: var(--text-on-dark);
  padding: 80px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--secondary);
  margin-bottom: 16px;
}

.footer-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  line-height: 1.1;
}

.footer-sub {
  font-size: 0.6rem;
  letter-spacing: 2px;
  opacity: 0.7;
  display: block;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-on-dark);
  transition: all var(--transition);
}

.footer-socials a:hover {
  background: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
}

.footer-col h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: var(--secondary);
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  transition: color var(--transition);
}

.footer-col ul li a:hover {
  color: var(--secondary);
}

.footer-contact li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-contact li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--secondary);
}

.footer-hours {
  margin-top: 20px;
}

.footer-hours h5 {
  font-family: var(--font-heading);
  color: var(--secondary);
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.footer-hours p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  line-height: 1.8;
}

.footer-bottom {
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  transition: color var(--transition);
}

.footer-bottom-links a:hover {
  color: var(--secondary);
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
