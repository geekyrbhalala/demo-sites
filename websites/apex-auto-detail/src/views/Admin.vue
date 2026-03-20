<script setup>
import { ref } from 'vue'

const activeNav = ref('dashboard')

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z' },
  { id: 'bookings', label: 'Bookings', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'customers', label: 'Customers', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m22-4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 11a4 4 0 100-8 4 4 0 000 8z' },
  { id: 'inventory', label: 'Inventory', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { id: 'reports', label: 'Reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z M15 12a3 3 0 11-6 0 3 3 0 016 0z' }
]

const kpis = [
  { label: "Today's Bookings", value: '14', change: '+3', trend: 'up', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Vehicles This Week', value: '47', change: '+12', trend: 'up', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10' },
  { label: 'Monthly Revenue', value: '$28,750', change: '+8.2%', trend: 'up', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Avg Rating', value: '4.9', change: '+0.1', trend: 'up', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
]

const bookings = [
  { id: 'APX-7F2K', client: 'James Mitchell', vehicle: '2024 BMW M4', pkg: 'Ultimate Ceramic', type: 'Shop', time: '9:00 AM', status: 'In Progress' },
  { id: 'APX-9A3L', client: 'Sarah Kim', vehicle: '2023 Tesla Model S', pkg: 'Premium', type: 'Mobile', time: '10:30 AM', status: 'Scheduled' },
  { id: 'APX-1B5M', client: 'David Rodriguez', vehicle: '2024 Porsche 911', pkg: 'Ultimate Ceramic', type: 'Shop', time: '11:00 AM', status: 'Scheduled' },
  { id: 'APX-4C8N', client: 'Emily Chen', vehicle: '2022 Mercedes GLE', pkg: 'Premium', type: 'Mobile', time: '1:00 PM', status: 'Confirmed' },
  { id: 'APX-6D1P', client: 'Mike Thompson', vehicle: '2023 Ford F-150', pkg: 'Essential', type: 'Shop', time: '2:30 PM', status: 'Confirmed' },
  { id: 'APX-8E4Q', client: 'Lisa Park', vehicle: '2024 Audi RS6', pkg: 'Premium', type: 'Mobile', time: '4:00 PM', status: 'Pending' }
]

const revenueData = [
  { month: 'Jan', amount: 22000 },
  { month: 'Feb', amount: 24500 },
  { month: 'Mar', amount: 21000 },
  { month: 'Apr', amount: 26000 },
  { month: 'May', amount: 28750 },
  { month: 'Jun', amount: 27500 }
]

const maxRevenue = Math.max(...revenueData.map(d => d.amount))

const lowStockAlerts = [
  { product: 'Gtechniq Crystal Serum', stock: 2, threshold: 5 },
  { product: 'Koch Chemie Plast Star', stock: 1, threshold: 3 },
  { product: 'Gyeon Q2 Mohs', stock: 3, threshold: 5 },
  { product: 'CarPro CQuartz', stock: 0, threshold: 4 }
]

function statusClass(status) {
  switch (status) {
    case 'In Progress': return 'badge-info'
    case 'Scheduled': return 'badge-warning'
    case 'Confirmed': return 'badge-success'
    case 'Pending': return 'badge-danger'
    default: return ''
  }
}
</script>

<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="admin-sidebar">
      <div class="sidebar-logo">
        <svg viewBox="0 0 50 40" fill="none">
          <polygon points="25,2 48,38 2,38" stroke="#0066ff" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
          <line x1="10" y1="26" x2="40" y2="26" stroke="#0066ff" stroke-width="1.5"/>
        </svg>
        <div class="sidebar-logo-text">
          <span>APEX</span>
          <span class="sidebar-logo-sub">ADMIN</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="sidebar-link"
          :class="{ active: activeNav === item.id }"
          @click="activeNav = item.id"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path :d="item.icon" />
          </svg>
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/" class="sidebar-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 19l-7-7 7-7"/></svg>
          Back to Site
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      <header class="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Marcus. Here is what is happening today.</p>
        </div>
        <div class="header-actions">
          <div class="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="text" placeholder="Search bookings..." />
          </div>
        </div>
      </header>

      <!-- KPI Cards -->
      <section class="kpi-grid">
        <div v-for="kpi in kpis" :key="kpi.label" class="kpi-card">
          <div class="kpi-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path :d="kpi.icon" />
            </svg>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">{{ kpi.label }}</span>
            <span class="kpi-value price">{{ kpi.value }}</span>
            <span class="kpi-change" :class="kpi.trend">{{ kpi.change }} vs last week</span>
          </div>
        </div>
      </section>

      <!-- Content Grid -->
      <div class="admin-content-grid">
        <!-- Booking Queue -->
        <section class="content-card bookings-card">
          <div class="card-header">
            <h2>Today's Booking Queue</h2>
            <button class="btn btn-primary btn-sm">+ New Booking</button>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Vehicle</th>
                  <th>Package</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="booking in bookings" :key="booking.id">
                  <td class="booking-id price">{{ booking.id }}</td>
                  <td>{{ booking.client }}</td>
                  <td>{{ booking.vehicle }}</td>
                  <td>{{ booking.pkg }}</td>
                  <td>
                    <span class="type-badge" :class="booking.type === 'Mobile' ? 'type-mobile' : 'type-shop'">
                      {{ booking.type }}
                    </span>
                  </td>
                  <td class="price">{{ booking.time }}</td>
                  <td><span class="badge" :class="statusClass(booking.status)">{{ booking.status }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Revenue Chart -->
        <section class="content-card chart-card">
          <div class="card-header">
            <h2>Monthly Revenue</h2>
            <span class="chart-total price">$149,750 YTD</span>
          </div>
          <div class="chart">
            <div class="chart-bars">
              <div v-for="data in revenueData" :key="data.month" class="chart-bar-group">
                <div class="chart-bar-wrap">
                  <div
                    class="chart-bar"
                    :style="{ height: (data.amount / maxRevenue * 100) + '%' }"
                  >
                    <span class="bar-value price">${{ (data.amount / 1000).toFixed(0) }}k</span>
                  </div>
                </div>
                <span class="chart-label">{{ data.month }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Low Stock Alerts -->
        <section class="content-card alerts-card">
          <div class="card-header">
            <h2>Low Stock Alerts</h2>
            <span class="badge badge-danger">{{ lowStockAlerts.length }} items</span>
          </div>
          <div class="alerts-list">
            <div v-for="alert in lowStockAlerts" :key="alert.product" class="alert-item">
              <div class="alert-info">
                <span class="alert-product">{{ alert.product }}</span>
                <span class="alert-detail">{{ alert.stock }} remaining (min: {{ alert.threshold }})</span>
              </div>
              <div class="alert-level">
                <div class="stock-bar">
                  <div class="stock-fill" :style="{ width: Math.min(100, (alert.stock / alert.threshold) * 100) + '%' }" :class="{ critical: alert.stock === 0, low: alert.stock > 0 && alert.stock <= 2 }"></div>
                </div>
                <button class="reorder-btn">Reorder</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Quick Actions -->
        <section class="content-card actions-card">
          <h2>Quick Actions</h2>
          <div class="quick-actions">
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              New Booking
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              Add Customer
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              Generate Report
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              Order Supplies
            </button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(45, 45, 45, 0.3) 10px,
      rgba(45, 45, 45, 0.3) 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(45, 45, 45, 0.3) 10px,
      rgba(45, 45, 45, 0.3) 11px
    ),
    var(--bg);
}

/* Sidebar */
.admin-sidebar {
  width: 240px;
  background: var(--secondary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  margin-bottom: 36px;
}

.sidebar-logo svg {
  width: 36px;
  height: 28px;
}

.sidebar-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.sidebar-logo-text span:first-child {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
  letter-spacing: 3px;
}

.sidebar-logo-sub {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 0.6rem;
  color: var(--primary);
  letter-spacing: 3px;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 12px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: none;
  border: none;
  border-radius: var(--radius);
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  text-align: left;
  width: 100%;
}

.sidebar-link svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
}

.sidebar-link.active {
  background: rgba(0, 102, 255, 0.15);
  color: var(--primary);
}

.sidebar-footer {
  padding: 12px 24px;
  border-top: 1px solid var(--border);
  margin-top: 12px;
}

.sidebar-back {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.85rem;
  transition: color 0.2s;
}

.sidebar-back svg {
  width: 16px;
  height: 16px;
}

.sidebar-back:hover {
  color: var(--primary);
}

/* Main */
.admin-main {
  flex: 1;
  margin-left: 240px;
  padding: 32px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.admin-header h1 {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.admin-header p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-width: 250px;
}

.search-box svg {
  width: 18px;
  height: 18px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.search-box input {
  background: none;
  border: none;
  color: var(--white);
  font-size: 0.9rem;
  width: 100%;
}

.search-box input::placeholder {
  color: var(--text-muted);
}

/* KPI Cards */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.kpi-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  transition: var(--transition);
}

.kpi-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-glow);
}

.kpi-icon {
  width: 48px;
  height: 48px;
  background: rgba(0, 102, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.kpi-icon svg {
  width: 24px;
  height: 24px;
}

.kpi-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.kpi-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: var(--font-heading);
}

.kpi-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
}

.kpi-change {
  font-size: 0.75rem;
  font-weight: 500;
}

.kpi-change.up {
  color: #00c853;
}

.kpi-change.down {
  color: #ff4444;
}

/* Content Grid */
.admin-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.content-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h2 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.75rem;
}

/* Bookings Table */
.bookings-card {
  grid-column: 1 / -1;
}

.table-wrap {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
}

.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.data-table th {
  color: var(--text-muted);
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
  font-weight: 600;
}

.data-table td {
  color: var(--silver);
}

.data-table tbody tr:hover {
  background: rgba(0, 102, 255, 0.03);
}

.booking-id {
  font-size: 0.8rem;
  color: var(--primary) !important;
}

.type-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.type-mobile {
  background: rgba(0, 102, 255, 0.1);
  color: var(--primary);
}

.type-shop {
  background: rgba(192, 192, 192, 0.1);
  color: var(--silver);
}

/* Chart */
.chart-total {
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 700;
}

.chart {
  height: 220px;
  display: flex;
  align-items: flex-end;
}

.chart-bars {
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
  align-items: flex-end;
}

.chart-bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
}

.chart-bar-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.chart-bar {
  width: 100%;
  max-width: 48px;
  background: linear-gradient(180deg, var(--primary) 0%, rgba(0, 102, 255, 0.3) 100%);
  border-radius: 6px 6px 0 0;
  position: relative;
  transition: height 0.5s;
  min-height: 20px;
}

.bar-value {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: var(--silver);
  white-space: nowrap;
}

.chart-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-family: var(--font-heading);
  letter-spacing: 0.5px;
}

/* Alerts */
.alerts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.alert-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.alert-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.alert-product {
  color: var(--silver);
  font-size: 0.9rem;
  font-weight: 500;
}

.alert-detail {
  color: var(--text-muted);
  font-size: 0.75rem;
}

.alert-level {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stock-bar {
  width: 60px;
  height: 6px;
  background: var(--carbon);
  border-radius: 3px;
  overflow: hidden;
}

.stock-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s;
  background: var(--gold);
}

.stock-fill.critical {
  background: #ff4444;
}

.stock-fill.low {
  background: #ff9800;
}

.reorder-btn {
  padding: 4px 12px;
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.3);
  border-radius: 4px;
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: var(--transition-fast);
  white-space: nowrap;
}

.reorder-btn:hover {
  background: var(--primary);
  color: var(--white);
}

/* Quick Actions */
.actions-card h2 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: var(--carbon);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--silver);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.action-btn svg {
  width: 20px;
  height: 20px;
  color: var(--primary);
  flex-shrink: 0;
}

.action-btn:hover {
  border-color: var(--primary);
  background: rgba(0, 102, 255, 0.05);
  color: var(--white);
}

@media (max-width: 768px) {
  .admin-sidebar {
    width: 60px;
    padding: 16px 0;
  }

  .sidebar-logo-text,
  .sidebar-link span,
  .sidebar-footer {
    display: none;
  }

  .sidebar-logo {
    justify-content: center;
    padding: 0;
  }

  .sidebar-logo svg {
    width: 28px;
    height: 22px;
  }

  .sidebar-link {
    justify-content: center;
    padding: 12px;
  }

  .admin-main {
    margin-left: 60px;
    padding: 20px;
  }

  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .admin-content-grid {
    grid-template-columns: 1fr;
  }

  .admin-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .search-box {
    min-width: auto;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }

  .quick-actions {
    grid-template-columns: 1fr;
  }
}
</style>
