import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const kpis = [
  { label: "Today's Classes", value: '8', change: '+2 vs last week', icon: 'calendar' },
  { label: 'Registered Students', value: '456', change: '+12 this month', icon: 'users' },
  { label: 'Monthly Revenue', value: '$18,200', change: '+8.5% vs last month', icon: 'revenue' },
  { label: 'Active Memberships', value: '234', change: '+5 this week', icon: 'membership' },
]

const todaySchedule = [
  { time: '6:30 AM', name: 'Morning Vinyasa', instructor: 'Sarah Chen', enrolled: 14, capacity: 20, status: 'completed' },
  { time: '9:00 AM', name: 'Gentle Hatha', instructor: 'Marcus Rivera', enrolled: 12, capacity: 20, status: 'completed' },
  { time: '10:30 AM', name: 'Prenatal Yoga', instructor: 'Lena Kowalski', enrolled: 8, capacity: 12, status: 'in-progress' },
  { time: '12:00 PM', name: 'Lunch Flow', instructor: 'Ava Johansson', enrolled: 16, capacity: 20, status: 'upcoming' },
  { time: '5:30 PM', name: 'Yin Restore', instructor: 'Priya Sharma', enrolled: 10, capacity: 25, status: 'upcoming' },
  { time: '6:30 PM', name: 'Hot Vinyasa', instructor: 'Sarah Chen', enrolled: 18, capacity: 20, status: 'upcoming' },
  { time: '7:30 PM', name: 'Meditation Circle', instructor: 'Marcus Rivera', enrolled: 7, capacity: 30, status: 'upcoming' },
  { time: '8:30 PM', name: 'Candlelight Yin', instructor: 'Priya Sharma', enrolled: 5, capacity: 20, status: 'upcoming' },
]

const newMembers = [
  { name: 'Emma Thompson', email: 'emma.t@email.com', joined: 'Mar 19', plan: 'Monthly', experience: 'Beginner' },
  { name: 'James Park', email: 'jpark@email.com', joined: 'Mar 18', plan: 'Free Trial', experience: 'Intermediate' },
  { name: 'Sofia Rodriguez', email: 'sofia.r@email.com', joined: 'Mar 18', plan: 'Annual', experience: 'Advanced' },
  { name: 'Oliver White', email: 'o.white@email.com', joined: 'Mar 17', plan: 'Free Trial', experience: 'New' },
  { name: 'Mia Chen', email: 'mia.c@email.com', joined: 'Mar 17', plan: '5-Class Pack', experience: 'Beginner' },
]

const classPopularity = [
  { name: 'Vinyasa Flow', count: 142, color: '#3b5340' },
  { name: 'Hot Yoga', count: 98, color: '#c94c4c' },
  { name: 'Hatha Yoga', count: 87, color: '#b8705a' },
  { name: 'Yin & Restorative', count: 76, color: '#9e9585' },
  { name: 'Meditation', count: 65, color: '#6b7c5e' },
  { name: 'Prenatal', count: 34, color: '#c4956a' },
]

const maxPopularity = Math.max(...classPopularity.map(c => c.count))

const expiringMemberships = [
  { name: 'Rachel Green', type: 'Monthly', expires: 'Mar 22', email: 'rachel.g@email.com' },
  { name: 'Tom Hardy', type: 'Annual', expires: 'Mar 25', email: 'tom.h@email.com' },
  { name: 'Lisa Wong', type: 'Monthly', expires: 'Mar 28', email: 'lisa.w@email.com' },
]

const workshopStatus = [
  { title: 'Spring Equinox Flow', date: 'Mar 28', registered: 22, capacity: 30, revenue: '$990' },
  { title: 'Breathwork & Sound', date: 'Apr 5', registered: 18, capacity: 25, revenue: '$990' },
  { title: 'Arm Balances', date: 'Apr 19', registered: 15, capacity: 20, revenue: '$750' },
]

function Admin() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <svg viewBox="0 0 50 60" width="28" height="34">
            <circle cx="25" cy="10" r="5" fill="none" stroke="var(--white)" strokeWidth="1.8"/>
            <path d="M25 15 C25 15, 25 22, 25 28 C25 32, 23 36, 18 42 M25 28 C25 32, 27 36, 32 42 M25 22 C22 22, 16 24, 12 22 M25 22 C28 22, 34 24, 38 22" fill="none" stroke="var(--white)" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <span>Zenflow Admin</span>
        </div>
        <nav className="admin-nav">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </button>
          <button className={activeTab === 'schedule' ? 'active' : ''} onClick={() => setActiveTab('schedule')}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Schedule
          </button>
          <button className={activeTab === 'members' ? 'active' : ''} onClick={() => setActiveTab('members')}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Members
          </button>
          <button className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            Analytics
          </button>
        </nav>
        <div className="admin-sidebar-bottom">
          <Link to="/" className="admin-back-link">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Website
          </Link>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <div>
            <h1>Dashboard</h1>
            <p className="admin-date">Wednesday, March 19, 2026</p>
          </div>
          <div className="admin-header-actions">
            <span className="admin-user">Admin User</span>
          </div>
        </div>

        <div className="admin-body">
          {/* KPI Cards */}
          <div className="kpi-grid">
            {kpis.map((kpi, i) => (
              <div key={i} className="kpi-card">
                <div className="kpi-icon">
                  {kpi.icon === 'calendar' && (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--moss)" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  )}
                  {kpi.icon === 'users' && (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--moss)" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    </svg>
                  )}
                  {kpi.icon === 'revenue' && (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--moss)" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )}
                  {kpi.icon === 'membership' && (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--moss)" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  )}
                </div>
                <div className="kpi-info">
                  <span className="kpi-label">{kpi.label}</span>
                  <span className="kpi-value">{kpi.value}</span>
                  <span className="kpi-change">{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-grid-2col">
            {/* Today's Schedule */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h2>Today&apos;s Schedule</h2>
                <span className="admin-card-badge">{todaySchedule.length} classes</span>
              </div>
              <div className="schedule-timeline">
                {todaySchedule.map((cls, i) => (
                  <div key={i} className={`timeline-item ${cls.status}`}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-top">
                        <span className="timeline-time">{cls.time}</span>
                        <span className={`timeline-status status-${cls.status}`}>
                          {cls.status === 'completed' ? 'Completed' : cls.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <h4>{cls.name}</h4>
                      <span className="timeline-instructor">{cls.instructor}</span>
                      <div className="timeline-enrollment">
                        <div className="enrollment-bar">
                          <div className="enrollment-fill" style={{
                            width: `${(cls.enrolled / cls.capacity) * 100}%`,
                            background: cls.enrolled / cls.capacity > 0.85 ? 'var(--clay)' : 'var(--moss)'
                          }}></div>
                        </div>
                        <span className="enrollment-text">{cls.enrolled}/{cls.capacity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="admin-right-col">
              {/* Class Popularity */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <h2>Class Popularity</h2>
                  <span className="admin-card-sub">This month</span>
                </div>
                <div className="popularity-chart">
                  {classPopularity.map((cls, i) => (
                    <div key={i} className="popularity-row">
                      <span className="pop-name">{cls.name}</span>
                      <div className="pop-bar-wrap">
                        <div className="pop-bar" style={{ width: `${(cls.count / maxPopularity) * 100}%`, background: cls.color }}></div>
                      </div>
                      <span className="pop-count">{cls.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Membership Alerts */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <h2>Expiring Memberships</h2>
                  <span className="admin-card-badge alert">{expiringMemberships.length} alerts</span>
                </div>
                <div className="alert-list">
                  {expiringMemberships.map((m, i) => (
                    <div key={i} className="alert-item">
                      <div className="alert-info">
                        <strong>{m.name}</strong>
                        <span>{m.type} - expires {m.expires}</span>
                      </div>
                      <button className="alert-action">Notify</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="admin-grid-2col">
            {/* New Members Table */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h2>New Members</h2>
                <span className="admin-card-sub">Last 7 days</span>
              </div>
              <div className="members-table-wrap">
                <table className="members-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Joined</th>
                      <th>Plan</th>
                      <th>Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newMembers.map((m, i) => (
                      <tr key={i}>
                        <td><strong>{m.name}</strong></td>
                        <td>{m.email}</td>
                        <td>{m.joined}</td>
                        <td><span className="plan-badge">{m.plan}</span></td>
                        <td><span className="level-badge">{m.experience}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Workshop Status */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h2>Workshop Registration</h2>
                <span className="admin-card-sub">Upcoming</span>
              </div>
              <div className="workshop-status-list">
                {workshopStatus.map((w, i) => (
                  <div key={i} className="workshop-status-item">
                    <div className="ws-top">
                      <h4>{w.title}</h4>
                      <span className="ws-revenue">{w.revenue}</span>
                    </div>
                    <span className="ws-date">{w.date}</span>
                    <div className="ws-progress">
                      <div className="ws-bar">
                        <div className="ws-fill" style={{ width: `${(w.registered / w.capacity) * 100}%` }}></div>
                      </div>
                      <span className="ws-count">{w.registered}/{w.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
