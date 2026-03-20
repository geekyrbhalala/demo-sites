<template>
  <div class="admin-page">
    <!-- Admin Header -->
    <section class="admin-header">
      <div class="container">
        <div class="admin-header-content">
          <div>
            <span class="script-accent" style="font-size: 1.6rem;">Dashboard</span>
            <h1>Welcome back, Isabella</h1>
            <p>Here is what is happening at LUXE today.</p>
          </div>
          <router-link to="/booking" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            Quick Booking
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats Cards -->
    <section class="admin-stats">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card" :style="{ borderTopColor: stat.color }">
            <div class="stat-icon" :style="{ background: stat.bg }" v-html="stat.icon"></div>
            <div class="stat-info">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
            <span class="stat-change" :class="stat.positive ? 'up' : 'down'">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="stat.positive ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'"/>
              </svg>
              {{ stat.change }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="admin-content">
      <div class="container">
        <div class="admin-grid">
          <!-- Today's Appointments -->
          <div class="admin-card appointments-card">
            <div class="card-header">
              <h3>Today's Appointments</h3>
              <span class="card-badge">{{ appointments.length }} Total</span>
            </div>
            <div class="appointments-table-wrap">
              <table class="appointments-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Time</th>
                    <th>Stylist</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="apt in appointments" :key="apt.name">
                    <td>
                      <div class="client-cell">
                        <div class="client-avatar">{{ apt.name.charAt(0) }}</div>
                        <div>
                          <strong>{{ apt.name }}</strong>
                          <span>{{ apt.email }}</span>
                        </div>
                      </div>
                    </td>
                    <td>{{ apt.service }}</td>
                    <td>{{ apt.time }}</td>
                    <td>{{ apt.stylist }}</td>
                    <td>
                      <span class="status-badge" :class="apt.status.toLowerCase()">{{ apt.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Side Cards -->
          <div class="admin-side">
            <!-- Popular Services -->
            <div class="admin-card">
              <div class="card-header">
                <h3>Popular Services</h3>
              </div>
              <div class="popular-list">
                <div v-for="(svc, i) in popularServices" :key="svc.name" class="popular-item">
                  <div class="popular-rank">{{ i + 1 }}</div>
                  <div class="popular-info">
                    <strong>{{ svc.name }}</strong>
                    <div class="popular-bar-wrap">
                      <div class="popular-bar" :style="{ width: svc.percent + '%', background: svc.color }"></div>
                    </div>
                  </div>
                  <span class="popular-count">{{ svc.count }}</span>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="admin-card">
              <div class="card-header">
                <h3>Recent Activity</h3>
              </div>
              <div class="activity-list">
                <div v-for="act in activities" :key="act.text" class="activity-item">
                  <div class="activity-dot" :style="{ background: act.color }"></div>
                  <div class="activity-info">
                    <p>{{ act.text }}</p>
                    <span>{{ act.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  {
    label: "Today's Appointments",
    value: '12',
    change: '+3 from yesterday',
    positive: true,
    color: '#b76e79',
    bg: 'rgba(183, 110, 121, 0.1)',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b76e79" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'
  },
  {
    label: 'Total Clients',
    value: '892',
    change: '+24 this month',
    positive: true,
    color: '#2d4a3e',
    bg: 'rgba(45, 74, 62, 0.1)',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d4a3e" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>'
  },
  {
    label: 'Monthly Revenue',
    value: '$12,450',
    change: '+8.2% vs last month',
    positive: true,
    color: '#9cac8b',
    bg: 'rgba(156, 172, 139, 0.1)',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9cac8b" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>'
  },
  {
    label: 'Avg. Rating',
    value: '4.9',
    change: '142 reviews',
    positive: true,
    color: '#f39c12',
    bg: 'rgba(243, 156, 18, 0.1)',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#f39c12" stroke="#f39c12" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  }
]

const appointments = [
  { name: 'Olivia Martinez', email: 'olivia@email.com', service: 'Balayage & Highlights', time: '9:00 AM', stylist: 'Isabella Rossi', status: 'Confirmed' },
  { name: 'Rachel Thompson', email: 'rachel@email.com', service: 'Signature Luxe Facial', time: '10:30 AM', stylist: 'Sophia Chen', status: 'In Progress' },
  { name: 'Jennifer Wu', email: 'jennifer@email.com', service: 'Hot Stone Massage', time: '11:00 AM', stylist: 'Emma Laurent', status: 'Confirmed' },
  { name: 'Sarah Kim', email: 'sarah@email.com', service: 'Gel Manicure + Art', time: '1:30 PM', stylist: 'Maya Patel', status: 'Pending' },
  { name: 'Amanda Blake', email: 'amanda@email.com', service: 'Full Color Treatment', time: '3:00 PM', stylist: 'Isabella Rossi', status: 'Confirmed' }
]

const popularServices = [
  { name: 'Balayage & Highlights', count: 48, percent: 100, color: '#b76e79' },
  { name: 'Signature Luxe Facial', count: 36, percent: 75, color: '#9cac8b' },
  { name: 'Swedish Massage', count: 31, percent: 65, color: '#2d4a3e' },
  { name: 'Gel Manicure', count: 28, percent: 58, color: '#d4a0a8' },
  { name: 'Keratin Treatment', count: 19, percent: 40, color: '#c5d4b8' }
]

const activities = [
  { text: 'New booking: Olivia Martinez - Balayage', time: '2 minutes ago', color: '#b76e79' },
  { text: 'Payment received: $165.00 - Rachel Thompson', time: '15 minutes ago', color: '#9cac8b' },
  { text: 'Review posted: 5 stars by Jennifer Wu', time: '1 hour ago', color: '#f39c12' },
  { text: 'Appointment rescheduled: Sarah Kim', time: '2 hours ago', color: '#3498db' },
  { text: 'New client registered: Amanda Blake', time: '3 hours ago', color: '#2d4a3e' }
]
</script>

<style scoped>
.admin-page {
  background: #f8f6f3;
  min-height: 100vh;
}

.admin-header {
  padding: 140px 0 40px;
  background: linear-gradient(135deg, var(--warm-white) 0%, var(--blush) 100%);
}

.admin-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-header h1 {
  font-size: 2rem;
  margin-bottom: 4px;
}

.admin-header p {
  color: #888;
}

.admin-header .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Stats */
.admin-stats {
  padding: 32px 0;
  margin-top: -20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border-top: 3px solid;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-value {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--charcoal);
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #999;
  margin-top: 2px;
}

.stat-change {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.72rem;
  display: flex;
  align-items: center;
  gap: 3px;
}

.stat-change.up { color: #27ae60; }
.stat-change.down { color: #e74c3c; }

/* Admin Grid */
.admin-content {
  padding: 0 0 60px;
}

.admin-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
}

.admin-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.card-header h3 {
  font-size: 1.1rem;
}

.card-badge {
  font-size: 0.8rem;
  padding: 4px 12px;
  background: var(--blush);
  color: var(--rose-gold);
  border-radius: 50px;
  font-weight: 500;
}

/* Appointments Table */
.appointments-table-wrap {
  overflow-x: auto;
}

.appointments-table {
  width: 100%;
  border-collapse: collapse;
}

.appointments-table th {
  text-align: left;
  padding: 14px 20px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  font-weight: 600;
  background: #fafaf8;
}

.appointments-table td {
  padding: 16px 20px;
  font-size: 0.9rem;
  border-bottom: 1px solid #f5f5f5;
  vertical-align: middle;
}

.client-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.client-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--blush);
  color: var(--rose-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.client-cell strong {
  display: block;
  font-size: 0.9rem;
}

.client-cell span {
  font-size: 0.78rem;
  color: #999;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.confirmed {
  background: rgba(156, 172, 139, 0.15);
  color: #5a7a4a;
}

.status-badge.pending {
  background: rgba(243, 156, 18, 0.15);
  color: #b8860b;
}

.status-badge.in\ progress {
  background: rgba(183, 110, 121, 0.15);
  color: #a0525e;
}

/* Side Cards */
.admin-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Popular Services */
.popular-list {
  padding: 16px 28px 24px;
}

.popular-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
}

.popular-rank {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--blush);
  color: var(--rose-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

.popular-info {
  flex: 1;
}

.popular-info strong {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.popular-bar-wrap {
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
}

.popular-bar {
  height: 100%;
  border-radius: 2px;
  transition: width 1s ease;
}

.popular-count {
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  flex-shrink: 0;
}

/* Activity */
.activity-list {
  padding: 16px 28px 24px;
}

.activity-item {
  display: flex;
  gap: 14px;
  padding: 10px 0;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.activity-info p {
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 2px;
}

.activity-info span {
  font-size: 0.75rem;
  color: #bbb;
}

@media (max-width: 1100px) {
  .admin-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .admin-header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .admin-header h1 {
    font-size: 1.6rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .appointments-table th:nth-child(4),
  .appointments-table td:nth-child(4) {
    display: none;
  }
}

@media (max-width: 500px) {
  .appointments-table th:nth-child(2),
  .appointments-table td:nth-child(2) {
    display: none;
  }
}
</style>
