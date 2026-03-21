import { useState } from 'react'
import './Admin.css'

const kpiCards = [
  { label: "Today's Orders", value: '23', change: '+12%', icon: '📦', color: 'var(--primary)' },
  { label: 'Products in Stock', value: '450', change: '+5', icon: '🏪', color: 'var(--green)' },
  { label: 'Monthly Revenue', value: '$34,500', change: '+8.3%', icon: '💰', color: 'var(--brown)' },
  { label: 'Active Customers', value: '1,200', change: '+45', icon: '👥', color: 'var(--secondary)' },
]

const orders = [
  { id: 'ORD-2401', customer: 'Priya Sharma', items: 'Spice Bundle, Rice', total: '42.99', status: 'Delivered', time: '10:30 AM' },
  { id: 'ORD-2402', customer: 'Aiden Mitchell', items: 'Masala Chai, Lentils', total: '28.50', status: 'Processing', time: '11:15 AM' },
  { id: 'ORD-2403', customer: 'Meera Patel', items: 'Bulk Spices Order', total: '156.00', status: 'Shipped', time: '12:00 PM' },
  { id: 'ORD-2404', customer: 'James Wilson', items: 'Catering Package', total: '425.00', status: 'Pending', time: '1:45 PM' },
  { id: 'ORD-2405', customer: 'Sunita Reddy', items: 'Weekly Grocery Box', total: '67.80', status: 'Delivered', time: '2:30 PM' },
  { id: 'ORD-2406', customer: 'Carlos Rivera', items: 'Curry Kit, Naan', total: '33.25', status: 'Processing', time: '3:15 PM' },
  { id: 'ORD-2407', customer: 'Ananya Gupta', items: 'Tea Collection', total: '55.99', status: 'Shipped', time: '4:00 PM' },
]

const popularProducts = [
  { name: 'Basmati Rice 5kg', sold: 85, pct: 95 },
  { name: 'Garam Masala', sold: 72, pct: 80 },
  { name: 'Kashmiri Chili', sold: 68, pct: 75 },
  { name: 'Masala Chai', sold: 61, pct: 68 },
  { name: 'Toor Dal 1kg', sold: 54, pct: 60 },
  { name: 'Turmeric Powder', sold: 48, pct: 53 },
]

const lowStock = [
  { name: 'Saffron Strands', stock: 3, threshold: 10 },
  { name: 'Asafoetida (Hing)', stock: 5, threshold: 15 },
  { name: 'Black Cardamom', stock: 8, threshold: 20 },
  { name: 'Fenugreek Seeds', stock: 4, threshold: 12 },
]

const sidebarLinks = [
  { label: 'Dashboard', icon: '📊', active: true },
  { label: 'Orders', icon: '📦' },
  { label: 'Products', icon: '🏪' },
  { label: 'Customers', icon: '👥' },
  { label: 'Inventory', icon: '📋' },
  { label: 'Reports', icon: '📈' },
  { label: 'Settings', icon: '⚙️' },
]

function Admin() {
  const [activeLink, setActiveLink] = useState('Dashboard')
  const [search, setSearch] = useState('')

  const statusClass = (status) => {
    switch (status) {
      case 'Delivered': return 'status-delivered'
      case 'Processing': return 'status-processing'
      case 'Shipped': return 'status-shipped'
      case 'Pending': return 'status-pending'
      default: return ''
    }
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <svg viewBox="0 0 48 48" width="32" height="32">
            <circle cx="24" cy="24" r="22" fill="none" stroke="var(--cream)" strokeWidth="2" />
            <path d="M24 8c0 0-6 4-6 12s6 16 6 16 6-8 6-16S24 8 24 8z" fill="var(--cream)" opacity="0.3" />
            <path d="M24 12c-2 3-3 6-3 8 0 4 3 10 3 10s3-6 3-10c0-2-1-5-3-8z" fill="var(--cream)" />
          </svg>
          <div>
            <span className="sidebar-title">Spice Bazaar</span>
            <span className="sidebar-subtitle">Admin Panel</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarLinks.map(link => (
            <button
              key={link.label}
              className={`sidebar-link ${activeLink === link.label ? 'active' : ''}`}
              onClick={() => setActiveLink(link.label)}
            >
              <span className="sidebar-icon">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href="/" className="sidebar-link">
            <span className="sidebar-icon">🏠</span>
            Back to Store
          </a>
        </div>
      </aside>

      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div className="admin-header-left">
            <h1>Dashboard</h1>
            <span className="admin-date">March 21, 2026</span>
          </div>
          <div className="admin-header-right">
            <div className="admin-search">
              <input
                type="text"
                placeholder="Search orders, products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="admin-avatar">RK</div>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="kpi-grid">
          {kpiCards.map(kpi => (
            <div className="kpi-card" key={kpi.label}>
              <div className="kpi-icon" style={{ background: kpi.color }}>{kpi.icon}</div>
              <div className="kpi-content">
                <span className="kpi-label">{kpi.label}</span>
                <span className="kpi-value price">{kpi.value}</span>
                <span className="kpi-change">{kpi.change} from yesterday</span>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-grid">
          {/* Orders Table */}
          <div className="admin-card orders-card">
            <div className="admin-card-header">
              <h2>Recent Orders</h2>
              <button className="btn btn-small btn-secondary">View All</button>
            </div>
            <div className="table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td className="price">{order.id}</td>
                      <td>{order.customer}</td>
                      <td className="order-items">{order.items}</td>
                      <td className="price">${order.total}</td>
                      <td><span className={`status-badge ${statusClass(order.status)}`}>{order.status}</span></td>
                      <td className="price">{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Products Chart */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Popular Products</h2>
              <span className="admin-card-period">This Week</span>
            </div>
            <div className="chart-area">
              {popularProducts.map(product => (
                <div className="chart-row" key={product.name}>
                  <span className="chart-label">{product.name}</span>
                  <div className="chart-bar-wrapper">
                    <div
                      className="chart-bar"
                      style={{ width: `${product.pct}%` }}
                    ></div>
                  </div>
                  <span className="chart-value price">{product.sold}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className="admin-card low-stock-card">
            <div className="admin-card-header">
              <h2>Low Stock Alerts</h2>
              <span className="alert-count">{lowStock.length}</span>
            </div>
            <div className="low-stock-list">
              {lowStock.map(item => (
                <div className="low-stock-item" key={item.name}>
                  <div className="low-stock-info">
                    <span className="low-stock-name">{item.name}</span>
                    <span className="low-stock-detail">
                      <span className="price">{item.stock}</span> / {item.threshold} units
                    </span>
                  </div>
                  <div className="low-stock-bar-wrapper">
                    <div
                      className="low-stock-bar"
                      style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                    ></div>
                  </div>
                  <button className="btn btn-small btn-primary">Reorder</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="admin-card quick-actions-card">
            <div className="admin-card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <button className="quick-action-btn">
                <span>📦</span>
                <span>New Order</span>
              </button>
              <button className="quick-action-btn">
                <span>🏪</span>
                <span>Add Product</span>
              </button>
              <button className="quick-action-btn">
                <span>📋</span>
                <span>Inventory Check</span>
              </button>
              <button className="quick-action-btn">
                <span>📈</span>
                <span>Sales Report</span>
              </button>
              <button className="quick-action-btn">
                <span>🎫</span>
                <span>Create Deal</span>
              </button>
              <button className="quick-action-btn">
                <span>📧</span>
                <span>Send Newsletter</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
