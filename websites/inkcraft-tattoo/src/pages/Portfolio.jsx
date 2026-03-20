import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Portfolio.css'

const filters = ['All', 'Geometric', 'Realism', 'Traditional', 'Japanese', 'Blackwork', 'Watercolor', 'Minimalist']

const works = [
  { id: 1, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800', title: 'Sacred Geometry Sleeve', style: 'Geometric', artist: 'Marcus Chen', desc: 'Full sleeve featuring interconnected sacred geometry patterns with dotwork shading. 24 hours over 6 sessions.' },
  { id: 2, img: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=800', title: 'Ocean Waves Half-Sleeve', style: 'Japanese', artist: 'Kai Takahashi', desc: 'Traditional Japanese wave patterns flowing around koi fish. Bold lines and rich coloring.' },
  { id: 3, img: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=1200', title: 'Portrait Realism', style: 'Realism', artist: 'Elena Vasquez', desc: 'Photorealistic family portrait with incredible detail and depth. Single session, 8 hours.' },
  { id: 4, img: 'https://images.unsplash.com/photo-1590246814883-57c511e76783?w=1920', title: 'Blackwork Mandala', style: 'Blackwork', artist: 'Marcus Chen', desc: 'Intricate mandala design with heavy blackwork and ornamental borders. Forearm placement.' },
  { id: 5, img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200', title: 'Watercolor Hummingbird', style: 'Watercolor', artist: 'Elena Vasquez', desc: 'Vibrant watercolor hummingbird with paint splash effects. Shoulder blade placement.' },
  { id: 6, img: 'https://images.unsplash.com/photo-1598371839696-5c5bb1c12015?w=1200', title: 'Fine Line Constellation', style: 'Minimalist', artist: 'Luna Park', desc: 'Delicate fine line constellation map with subtle dotwork stars. Inner forearm.' },
  { id: 7, img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200', title: 'Neo-Trad Rose & Dagger', style: 'Traditional', artist: 'Kai Takahashi', desc: 'Bold neo-traditional rose intertwined with a dagger. Rich colors and clean outlines.' },
  { id: 8, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Geometric Wolf', style: 'Geometric', artist: 'Marcus Chen', desc: 'Low-poly geometric wolf head with clean angles and negative space.' },
  { id: 9, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', title: 'Dragon Full Back', style: 'Japanese', artist: 'Kai Takahashi', desc: 'Traditional Japanese dragon spanning the entire back. 40+ hours across 10 sessions.' },
  { id: 10, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800', title: 'Watercolor Galaxy', style: 'Watercolor', artist: 'Elena Vasquez', desc: 'Abstract galaxy with nebula colors blending into skin. Upper arm wrap.' },
  { id: 11, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800', title: 'Minimalist Botanical', style: 'Minimalist', artist: 'Luna Park', desc: 'Single needle botanical illustration. Wrist placement with extreme fine detail.' },
  { id: 12, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800', title: 'Ornamental Blackwork', style: 'Blackwork', artist: 'Marcus Chen', desc: 'Full ornamental blackwork band with intricate pattern work. Bicep placement.' },
  { id: 13, img: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=800', title: 'Realistic Eye', style: 'Realism', artist: 'Elena Vasquez', desc: 'Hyperrealistic human eye with reflection detail. Incredible depth and texture.' },
  { id: 14, img: 'https://images.unsplash.com/photo-1590246814883-57c511e76783?w=1920', title: 'Traditional Eagle', style: 'Traditional', artist: 'Kai Takahashi', desc: 'Bold American traditional eagle with banner. Classic chest placement.' },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedWork, setSelectedWork] = useState(null)
  const [animating, setAnimating] = useState(false)

  const filtered = activeFilter === 'All' ? works : works.filter(w => w.style === activeFilter)

  const handleFilter = (filter) => {
    if (filter === activeFilter) return
    setAnimating(true)
    setTimeout(() => {
      setActiveFilter(filter)
      setAnimating(false)
    }, 300)
  }

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <p className="portfolio-subtitle">Every piece tells a story. Explore our collection of custom tattoo artistry.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => handleFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="filter-count">
            Showing {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </div>

          <div className={`masonry-grid ${animating ? 'animating' : ''}`}>
            {filtered.map((work, i) => (
              <div
                key={work.id}
                className="masonry-item"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setSelectedWork(work)}
              >
                <img src={work.img} alt={work.title} loading="lazy" />
                <div className="masonry-overlay">
                  <span className="masonry-style">{work.style}</span>
                  <h3>{work.title}</h3>
                  <span className="masonry-artist">by {work.artist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)} title={selectedWork?.title}>
        {selectedWork && (
          <div className="lightbox-content">
            <img src={selectedWork.img} alt={selectedWork.title} className="lightbox-img" />
            <div className="lightbox-meta">
              <span className="lightbox-style">{selectedWork.style}</span>
              <span className="lightbox-artist">Artist: {selectedWork.artist}</span>
            </div>
            <p>{selectedWork.desc}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Portfolio
