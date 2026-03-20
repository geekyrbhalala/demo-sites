import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const reservations = [
  { id: 'R-1024', name: 'Alexandra Mitchell', date: 'Mar 19, 2026', time: '7:00 PM', guests: 4, status: 'confirmed' },
  { id: 'R-1023', name: 'James Thornton', date: 'Mar 19, 2026', time: '7:30 PM', guests: 2, status: 'confirmed' },
  { id: 'R-1022', name: 'Sofia Rossi', date: 'Mar 19, 2026', time: '8:00 PM', guests: 6, status: 'pending' },
  { id: 'R-1021', name: 'William Chen', date: 'Mar 19, 2026', time: '6:30 PM', guests: 3, status: 'confirmed' },
  { id: 'R-1020', name: 'Catherine Dubois', date: 'Mar 19, 2026', time: '8:30 PM', guests: 2, status: 'pending' },
  { id: 'R-1019', name: 'Michael Anderson', date: 'Mar 18, 2026', time: '7:00 PM', guests: 4, status: 'confirmed' },
  { id: 'R-1018', name: 'Emily Watson', date: 'Mar 18, 2026', time: '9:00 PM', guests: 2, status: 'cancelled' },
  { id: 'R-1017', name: 'Robert Laurent', date: 'Mar 18, 2026', time: '7:30 PM', guests: 5, status: 'confirmed' }
]

const weeklyRevenue = [
  { day: 'Mon', amount: 3200, pct: 52 },
  { day: 'Tue', amount: 2800, pct: 45 },
  { day: 'Wed', amount: 3500, pct: 57 },
  { day: 'Thu', amount: 4100, pct: 67 },
  { day: 'Fri', amount: 5800, pct: 94 },
  { day: 'Sat', amount: 6200, pct: 100 },
  { day: 'Sun', amount: 4500, pct: 73 }
]

function Admin() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <svg viewBox="0 0 100 120" width="40" height="48">
              <circle cx="50" cy="45" r="38" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
              <text x="50" y="60" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="44" fontWeight="bold">S</text>
              <text x="50" y="102" textAnchor="middle" fill="#c9a84c" fontFamily="'Playfair Display', serif" fontSize="11" letterSpacing="4">SAVORIA</text>
            </svg>
          </Link>
          <span className="sidebar-badge">Admin</span>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`sidebar-link ${activeNav === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveNav('dashboard')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Dashboard
          </button>
          <button
            className={`sidebar-link ${activeNav === 'reservations' ? 'active' : ''}`}
            onClick={() => setActiveNav('reservations')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Reservations
          </button>
          <button
            className={`sidebar-link ${activeNav === 'menu' ? 'active' : ''}`}
            onClick={() => setActiveNav('menu')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            Menu Items
          </button>
          <button
            className={`sidebar-link ${activeNav === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveNav('customers')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Customers
          </button>
          <button
            className={`sidebar-link ${activeNav === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveNav('analytics')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Analytics
          </button>
          <button
            className={`sidebar-link ${activeNav === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveNav('settings')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link sidebar-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Chef Laurent. Here is your daily overview.</p>
          </div>
          <div className="admin-header-right">
            <span className="admin-date">March 19, 2026</span>
            <div className="admin-avatar">LM</div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-icon-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Today's Reservations</span>
              <span className="stat-value">12</span>
              <span className="stat-change positive">+3 from yesterday</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Customers</span>
              <span className="stat-value">1,847</span>
              <span className="stat-change positive">+124 this month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Revenue (Today)</span>
              <span className="stat-value">$24,580</span>
              <span className="stat-change positive">+12% from last week</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon-burgundy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Avg. Rating</span>
              <span className="stat-value">4.9</span>
              <span className="stat-change positive">Based on 342 reviews</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="admin-content-grid">
          {/* Reservations Table */}
          <div className="admin-card reservations-card">
            <div className="admin-card-header">
              <h3>Recent Reservations</h3>
              <button className="admin-view-all">View All</button>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Guest</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr key={r.id}>
                      <td className="td-id">{r.id}</td>
                      <td className="td-name">{r.name}</td>
                      <td>{r.date}</td>
                      <td>{r.time}</td>
                      <td>{r.guests}</td>
                      <td>
                        <span className={`status-badge status-${r.status}`}>
                          {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Revenue Chart */}
          <div className="admin-card chart-card">
            <div className="admin-card-header">
              <h3>Weekly Revenue</h3>
              <span className="chart-total">$30,100</span>
            </div>
            <div className="chart-container">
              {weeklyRevenue.map((d) => (
                <div key={d.day} className="chart-bar-group">
                  <span className="chart-amount">${(d.amount / 1000).toFixed(1)}k</span>
                  <div className="chart-bar-track">
                    <div
                      className="chart-bar-fill"
                      style={{ height: `${d.pct}%` }}
                    ></div>
                  </div>
                  <span className="chart-label">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="admin-card quick-actions-card">
          <div className="admin-card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions-grid">
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Reservation
            </button>
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit Menu
            </button>
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
              Add Customer
            </button>
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Export Report
            </button>
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send Newsletter
            </button>
            <button className="quick-action">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              View Analytics
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
