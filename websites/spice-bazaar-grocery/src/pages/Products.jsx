import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Products.css'

const allProducts = [
  // Whole Spices
  { id: 1, name: 'Kashmiri Red Chili', weight: '200g', price: 6.99, category: 'Whole Spices', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400' },
  { id: 2, name: 'Cumin Seeds', weight: '200g', price: 5.99, category: 'Whole Spices', img: 'https://images.unsplash.com/photo-1599909533601-aa1e5c1b1455?w=400' },
  { id: 3, name: 'Black Cardamom', weight: '100g', price: 8.49, category: 'Whole Spices', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400' },
  { id: 4, name: 'Cinnamon Sticks', weight: '150g', price: 7.99, category: 'Whole Spices', img: 'https://images.unsplash.com/photo-1587131782738-de30ea91a542?w=400' },
  // Ground Spices
  { id: 5, name: 'Organic Turmeric', weight: '150g', price: 5.49, category: 'Ground Spices', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400' },
  { id: 6, name: 'Garam Masala', weight: '100g', price: 4.99, category: 'Ground Spices', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400' },
  { id: 7, name: 'Coriander Powder', weight: '200g', price: 4.49, category: 'Ground Spices', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400' },
  // Rice & Grains
  { id: 8, name: 'Basmati Rice', weight: '5 kg', price: 14.99, category: 'Rice & Grains', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
  { id: 9, name: 'Brown Rice', weight: '2 kg', price: 8.99, category: 'Rice & Grains', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
  // Lentils
  { id: 10, name: 'Toor Dal', weight: '1 kg', price: 7.49, category: 'Lentils', img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400' },
  { id: 11, name: 'Moong Dal', weight: '1 kg', price: 6.99, category: 'Lentils', img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400' },
  { id: 12, name: 'Chana Dal', weight: '1 kg', price: 5.99, category: 'Lentils', img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=400' },
  // Snacks
  { id: 13, name: 'Bombay Mix', weight: '300g', price: 4.99, category: 'Snacks', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400' },
  { id: 14, name: 'Mango Pickle', weight: '400g', price: 6.49, category: 'Snacks', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400' },
  // Beverages
  { id: 15, name: 'Masala Chai', weight: '250g', price: 8.99, category: 'Beverages', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400' },
  { id: 16, name: 'Darjeeling Tea', weight: '200g', price: 12.99, category: 'Beverages', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400' },
]

const categories = ['All', 'Whole Spices', 'Ground Spices', 'Rice & Grains', 'Lentils', 'Snacks', 'Beverages']

function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [showModal, setShowModal] = useState(false)

  let filtered = allProducts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  filtered.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return a.name.localeCompare(b.name)
  })

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Explore our curated selection of premium Indian groceries</p>
        </div>
      </section>

      <section className="products-main section">
        <div className="container">
          <ScrollReveal>
            <div className="products-controls">
              <div className="products-search">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <div className="products-sort">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="products-layout">
            <ScrollReveal direction="left">
              <aside className="products-sidebar">
                <h3>Categories</h3>
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`sidebar-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    <span className="cat-count">
                      {cat === 'All' ? allProducts.length : allProducts.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </aside>
            </ScrollReveal>

            <div className="products-grid-page">
              {filtered.length === 0 ? (
                <div className="no-results">
                  <h3>No products found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              ) : (
                filtered.map((product, i) => (
                  <ScrollReveal key={product.id} delay={i * 50}>
                    <div className="product-card-page card">
                      <div className="product-card-img">
                        <img src={product.img} alt={product.name} loading="lazy" />
                        <span className="product-category-badge">{product.category}</span>
                      </div>
                      <div className="product-card-body">
                        <h3>{product.name}</h3>
                        <span className="product-card-weight">{product.weight}</span>
                        <div className="product-card-footer">
                          <span className="price">${product.price.toFixed(2)}</span>
                          <button
                            className="btn btn-primary btn-small"
                            onClick={() => setShowModal(true)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Added to Cart!"
        message="Your item has been added to the cart."
      />
    </div>
  )
}

export default Products
