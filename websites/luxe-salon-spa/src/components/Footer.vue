<template>
  <footer class="footer">
    <div class="footer-cta">
      <div class="container">
        <div class="cta-content">
          <span class="script-accent cta-script">Ready to feel your best?</span>
          <h2>Book Your Experience Today</h2>
          <p>Step into a world of relaxation, beauty, and self-care. Your transformation begins here.</p>
          <router-link to="/booking" class="btn btn-primary">Book an Appointment</router-link>
        </div>
      </div>
    </div>

    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <svg width="32" height="38" viewBox="0 0 100 120" fill="none">
                <path d="M50 10 C30 10 15 30 15 50 C15 70 30 85 50 85 C55 85 60 83 63 80 C55 82 45 75 45 60 C45 45 55 35 65 30 C60 18 55 10 50 10Z" fill="#b76e79" opacity="0.85"/>
                <path d="M55 15 C65 20 80 35 80 55 C80 70 70 82 58 85 C65 80 70 70 70 58 C70 40 60 25 55 15Z" fill="#fff" opacity="0.5"/>
              </svg>
              <div>
                <span class="f-logo-name">LUXE</span>
                <span class="f-logo-sub">salon &amp; spa</span>
              </div>
            </div>
            <p class="footer-desc">Where beauty meets tranquility. Experience premium salon and spa services in an atmosphere of pure luxury and relaxation.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/>
                  <path d="M9 18l1.5-6"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link to="/services">Our Services</router-link></li>
              <li><router-link to="/booking">Book Online</router-link></li>
              <li><router-link to="/gallery">Gallery</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li><router-link to="/services">Hair Styling</router-link></li>
              <li><router-link to="/services">Skin & Facials</router-link></li>
              <li><router-link to="/services">Nail Studio</router-link></li>
              <li><router-link to="/services">Massage & Body</router-link></li>
              <li><router-link to="/services">Bridal Packages</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Visit Us</h4>
            <ul class="contact-info">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>247 Blossom Avenue<br>Beverly Hills, CA 90210</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <span>(310) 555-LUXE</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>hello@luxesalonspa.com</span>
              </li>
            </ul>
            <div class="hours">
              <p>Mon-Fri: 9am - 8pm</p>
              <p>Saturday: 9am - 6pm</p>
              <p>Sunday: 10am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 LUXE Salon & Spa. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Gift Cards</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
}

.footer-cta {
  background: linear-gradient(135deg, var(--forest) 0%, #1a3329 100%);
  padding: 80px 0;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-script {
  font-size: 2rem;
  display: block;
  margin-bottom: 12px;
}

.cta-content h2 {
  color: white;
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
  font-size: 1.05rem;
}

.footer-main {
  background: var(--charcoal);
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.f-logo-name {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: white;
  display: block;
}

.f-logo-sub {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--rose-gold);
}

.footer-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.social-links a:hover {
  border-color: var(--rose-gold);
  color: var(--rose-gold);
  transform: translateY(-2px);
}

.footer-col h4 {
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-col ul li a:hover {
  color: var(--rose-gold);
}

.contact-info li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.contact-info li span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
}

.hours {
  margin-top: 20px;
}

.hours p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  line-height: 1.8;
}

.footer-bottom {
  background: #222;
  padding: 20px 0;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.footer-bottom-links a:hover {
  color: var(--rose-gold);
}

@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-cta {
    padding: 60px 0;
  }

  .cta-content h2 {
    font-size: 1.6rem;
  }

  .footer-bottom .container {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
