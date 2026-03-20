import ScrollReveal from '../components/ScrollReveal'
import './About.css'

const timeline = [
  { year: '1992', title: 'The Beginning', text: 'Young Laurent Marchetti discovers his passion for cooking in his grandmother\'s kitchen in Tuscany, where he learns the fundamentals of Italian cuisine.' },
  { year: '2004', title: 'Paris Beckons', text: 'After training at the Culinary Institute of Rome, Laurent moves to Paris to apprentice under a three-Michelin-star chef at Le Cinq, mastering French technique.' },
  { year: '2010', title: 'Rising Star', text: 'Named "Young Chef of the Year" by Gault & Millau. His innovative fusion of Italian and French cuisines begins to attract international attention.' },
  { year: '2015', title: 'New York Calling', text: 'Laurent relocates to New York City with a vision: to create a restaurant that bridges two of the world\'s greatest culinary traditions.' },
  { year: '2018', title: 'Savoria Opens', text: 'Savoria opens its doors in Lower Manhattan. Within six months, it becomes one of the most sought-after reservations in the city.' },
  { year: '2023', title: 'Michelin Recognition', text: 'Savoria earns its first Michelin star, cementing its place among New York\'s finest dining establishments.' }
]

const team = [
  {
    name: 'Laurent Marchetti',
    role: 'Executive Chef & Founder',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200',
    bio: 'With over 20 years of experience spanning Rome and Paris, Chef Laurent brings a visionary approach to Italian-French fusion cuisine.'
  },
  {
    name: 'Sophie Dubois',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800',
    bio: 'Trained at Le Cordon Bleu, Sophie creates desserts that are both architectural marvels and symphonies of flavor.'
  },
  {
    name: 'Marco Bellini',
    role: 'Sommelier',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    bio: 'A certified Master Sommelier, Marco curates our award-winning wine list spanning over 500 labels from Italy and France.'
  },
  {
    name: 'Isabelle Chen',
    role: 'General Manager',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920',
    bio: 'With a background in luxury hospitality, Isabelle ensures every guest receives an experience worthy of the Savoria name.'
  }
]

const awards = [
  { icon: '★', title: 'Michelin Star', year: '2023', desc: 'One Star — High Quality Cooking' },
  { icon: '◆', title: 'James Beard Award', year: '2022', desc: 'Best New Restaurant Nominee' },
  { icon: '●', title: 'Wine Spectator', year: '2023', desc: 'Award of Excellence' },
  { icon: '✦', title: 'AAA Five Diamond', year: '2024', desc: 'Five Diamond Distinction' },
  { icon: '▲', title: 'Zagat Rated', year: '2023', desc: '29/30 Food Rating' },
  { icon: '◇', title: 'Forbes Travel Guide', year: '2024', desc: 'Recommended Restaurant' }
]

function About() {
  return (
    <div className="page-wrapper about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="section-label">Our Story</span>
          <h1>About Savoria</h1>
          <div className="gold-line"></div>
          <p className="about-hero-sub">A legacy of passion, precision, and artistry</p>
        </div>
      </section>

      {/* Chef Story Intro */}
      <section className="about-intro section-padding">
        <div className="container">
          <div className="about-intro-grid">
            <ScrollReveal direction="left" className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200"
                alt="Chef Laurent Marchetti"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" className="about-intro-content">
              <span className="section-label">The Chef</span>
              <h2>Chef Laurent Marchetti</h2>
              <div className="gold-line" style={{ margin: '1.5rem 0' }}></div>
              <p>
                Born in the rolling hills of Tuscany and refined in the grand kitchens of Paris,
                Chef Laurent Marchetti is the creative force behind Savoria. His culinary philosophy
                is simple yet profound: honor the ingredient, respect the tradition, and dare to innovate.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Every dish at Savoria reflects Laurent's journey — the warmth of his Italian roots
                melded with the discipline of French haute cuisine. His tasting menus are not just
                meals; they are narratives that transport diners across continents and centuries.
              </p>
              <blockquote className="about-quote">
                "Cooking is the most intimate form of art. You create something beautiful,
                and it becomes part of someone."
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section-padding">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Journey</span>
            <h2 className="section-title">Our Timeline</h2>
            <div className="gold-line"></div>
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
              </ScrollReveal>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <section className="parallax-break">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
          alt="Restaurant interior"
        />
        <div className="parallax-overlay">
          <div className="parallax-text">
            <h2>Where Tradition Meets Innovation</h2>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section section-padding">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>The Team</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The passionate minds behind every exceptional evening</p>
          </ScrollReveal>
          <div className="team-grid">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 120}>
                <div className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-overlay">
                      <p>{member.bio}</p>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="awards-section section-padding">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Recognition</span>
            <h2 className="section-title">Awards & Accolades</h2>
            <p className="section-subtitle">Honored by the world's most respected culinary authorities</p>
          </ScrollReveal>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <ScrollReveal key={award.title} delay={index * 80}>
                <div className="award-card">
                  <span className="award-icon">{award.icon}</span>
                  <h4>{award.title}</h4>
                  <span className="award-year">{award.year}</span>
                  <p>{award.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
