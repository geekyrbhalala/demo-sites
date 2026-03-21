import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Portfolio.css'

function Portfolio() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const categories = ['All', 'Residential', 'Commercial', 'Garden', 'Hardscape']

  const projects = [
    { id: 1, title: 'Modern Garden Oasis', type: 'Residential', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800', desc: 'Complete backyard transformation featuring native plantings, curved stone pathways, and a meditation garden.', scope: 'Full Landscape Design', timeline: '6 weeks' },
    { id: 2, title: 'Luxury Stone Patio', type: 'Hardscape', img: 'https://images.unsplash.com/photo-1564429238961-bf8b07a93455?w=800', desc: 'Custom flagstone patio with integrated fire pit, pergola, and outdoor dining area.', scope: 'Hardscape Design & Build', timeline: '4 weeks' },
    { id: 3, title: 'Estate Grounds', type: 'Commercial', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', desc: 'Full property renovation for a 5-acre estate including irrigation, lighting, and seasonal beds.', scope: 'Complete Property Management', timeline: '12 weeks' },
    { id: 4, title: 'Cottage Flower Garden', type: 'Garden', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', desc: 'English cottage-style garden with perennials, climbing roses, and ornamental grasses.', scope: 'Garden Design & Planting', timeline: '3 weeks' },
    { id: 5, title: 'Corporate Campus Green', type: 'Commercial', img: 'https://images.unsplash.com/photo-1558635924-ae37e19a907d?w=800', desc: 'Year-round maintenance and seasonal color programs for a corporate office campus.', scope: 'Commercial Maintenance', timeline: 'Ongoing' },
    { id: 6, title: 'Backyard Retreat', type: 'Residential', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800', desc: 'Family-friendly backyard with play area, raised garden beds, and automated irrigation.', scope: 'Residential Landscape', timeline: '8 weeks' },
    { id: 7, title: 'Zen Water Garden', type: 'Garden', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800', desc: 'Japanese-inspired garden with water feature, koi pond, and stepping stone path.', scope: 'Specialty Garden Design', timeline: '5 weeks' },
    { id: 8, title: 'Retaining Wall System', type: 'Hardscape', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800', desc: 'Multi-tier retaining wall system for a sloped property, with integrated planters and drainage.', scope: 'Hardscape Engineering', timeline: '4 weeks' },
    { id: 9, title: 'Rooftop Garden', type: 'Commercial', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', desc: 'Rooftop container garden for a downtown Portland restaurant with herbs and seasonal flowers.', scope: 'Urban Garden Design', timeline: '2 weeks' },
  ]

  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1564429238961-bf8b07a93455?w=1920" alt="Portfolio" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent)' }}>Our Work</span>
          <h1>Project Portfolio</h1>
          <p>Browse our completed projects and see what Evergreen can do for your property.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="portfolio-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="portfolio-masonry">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <div
                  className="portfolio-masonry-item"
                  onClick={() => setLightbox(project)}
                >
                  <div className="masonry-img">
                    <img src={project.img} alt={project.title} loading="lazy" />
                    <div className="masonry-overlay">
                      <span className="masonry-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                      <span className="masonry-view">View Details</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
            <div className="lightbox-image">
              <img src={lightbox.img} alt={lightbox.title} />
            </div>
            <div className="lightbox-info">
              <span className="lightbox-type">{lightbox.type}</span>
              <h2>{lightbox.title}</h2>
              <p>{lightbox.desc}</p>
              <div className="lightbox-meta">
                <div>
                  <strong>Scope</strong>
                  <span>{lightbox.scope}</span>
                </div>
                <div>
                  <strong>Timeline</strong>
                  <span>{lightbox.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
