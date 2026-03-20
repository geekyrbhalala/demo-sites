import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Artists.css'

const artists = [
  {
    name: 'Marcus Chen',
    title: 'Lead Artist & Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    bio: 'Marcus founded Inkcraft in 2014 with a vision to elevate tattoo art to gallery-level craft. Trained in fine arts at RISD, he brings architectural precision to every piece. Known for pushing the boundaries of geometric and blackwork styles.',
    specialties: ['Geometric', 'Blackwork', 'Dotwork', 'Ornamental'],
    years: 12,
    instagram: '@marcus.ink',
    portfolio: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
  },
  {
    name: 'Elena Vasquez',
    title: 'Senior Artist',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    bio: 'Elena specializes in hyperrealistic portraiture and watercolor techniques. Her background in oil painting gives her work an unmistakable depth and luminosity. She\'s been featured in Inked Magazine and Tattoo Life.',
    specialties: ['Realism', 'Portraits', 'Watercolor', 'Color Work'],
    years: 9,
    instagram: '@elena.vasquez.ink',
    portfolio: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=800',
  },
  {
    name: 'Kai Takahashi',
    title: 'Master Japanese Traditional',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800',
    bio: 'Kai apprenticed under a traditional Irezumi master in Osaka for 5 years before joining Inkcraft. His work honors centuries of Japanese tattoo tradition while incorporating contemporary elements. Specializes in large-scale body suits.',
    specialties: ['Japanese', 'Irezumi', 'Neo-Traditional', 'Large Scale'],
    years: 15,
    instagram: '@kai.irezumi',
    portfolio: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=1200',
  },
  {
    name: 'Luna Park',
    title: 'Fine Line Specialist',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
    bio: 'Luna brings a delicate, minimalist sensibility to the studio. Her fine line work and single-needle technique create pieces of extraordinary subtlety. She holds a degree in illustration from Parsons and her work bridges art and fashion.',
    specialties: ['Minimalist', 'Fine Line', 'Botanical', 'Script'],
    years: 6,
    instagram: '@luna.fineline',
    portfolio: 'https://images.unsplash.com/photo-1598371839696-5c5bb1c12015?w=1200',
  },
  {
    name: 'Devon Blake',
    title: 'Piercing Specialist & Tattoo Artist',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    bio: 'Devon is our resident piercing expert and versatile tattoo artist. APP certified with 8 years of piercing experience, he\'s also a skilled tattoo artist specializing in traditional and bold color work. Safety and precision are his hallmarks.',
    specialties: ['Body Piercing', 'Traditional', 'Bold Color', 'Lettering'],
    years: 8,
    instagram: '@devon.pierce',
    portfolio: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200',
  },
]

function Artists() {
  return (
    <div className="artists-page">
      <section className="artists-hero">
        <div className="container">
          <h1 className="artists-page-title">OUR ARTISTS</h1>
          <p className="artists-page-subtitle">World-class talent united by a passion for the craft</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="artists-list">
            {artists.map((artist, i) => (
              <ScrollReveal key={artist.name} delay={i * 100}>
                <div className={`artist-profile ${i % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="artist-profile-img">
                    <img src={artist.img} alt={artist.name} loading="lazy" />
                    <div className="artist-profile-portfolio">
                      <img src={artist.portfolio} alt={`${artist.name} work`} loading="lazy" />
                    </div>
                  </div>
                  <div className="artist-profile-info">
                    <div className="artist-profile-header">
                      <span className="artist-number">{String(i + 1).padStart(2, '0')}</span>
                      <span className="artist-title-label">{artist.title}</span>
                    </div>
                    <h2 className="artist-profile-name">{artist.name}</h2>
                    <p className="artist-profile-bio">{artist.bio}</p>
                    <div className="artist-tags">
                      {artist.specialties.map(s => (
                        <span key={s} className="artist-tag">{s}</span>
                      ))}
                    </div>
                    <div className="artist-meta">
                      <div className="artist-meta-item">
                        <span className="meta-value">{artist.years}</span>
                        <span className="meta-label">Years Experience</span>
                      </div>
                      <div className="artist-meta-item">
                        <span className="meta-value">{artist.instagram}</span>
                        <span className="meta-label">Instagram</span>
                      </div>
                    </div>
                    <Link to="/booking" className="btn-primary artist-book-btn">
                      Book with {artist.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Artists
