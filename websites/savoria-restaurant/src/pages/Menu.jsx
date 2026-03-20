import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Menu.css'

const menuData = {
  starters: [
    { name: 'Truffle Burrata', description: 'Creamy burrata, black truffle shavings, heirloom tomatoes, aged balsamic reduction, micro basil', price: '$24', tags: ['V', 'GF'] },
    { name: 'Tuna Tartare', description: 'Yellowfin tuna, avocado mousse, sesame crisp, soy yuzu dressing, wasabi pearls', price: '$28', tags: ['GF'] },
    { name: 'French Onion Soup', description: 'Caramelized Vidalia onions, cognac broth, gruyere crouton, fresh thyme', price: '$18', tags: [] },
    { name: 'Foie Gras Terrine', description: 'Duck foie gras, Sauternes gelée, toasted brioche, fig compote, fleur de sel', price: '$32', tags: [] },
    { name: 'Lobster Bisque', description: 'Maine lobster, brandy cream, crème fraîche, chive oil, lobster claw garnish', price: '$22', tags: ['GF'] },
    { name: 'Beetroot Carpaccio', description: 'Roasted golden & red beets, goat cheese mousse, candied walnuts, honey vinaigrette', price: '$19', tags: ['V', 'GF'] }
  ],
  mains: [
    { name: 'Wagyu Ribeye', description: 'A5 Japanese wagyu, truffle pommes purée, charred broccolini, red wine jus, bone marrow butter', price: '$95', tags: ['GF'] },
    { name: 'Pan-Roasted Dover Sole', description: 'Whole Dover sole, brown butter, capers, lemon, haricots verts, almond flakes', price: '$72', tags: ['GF'] },
    { name: 'Rack of Lamb', description: 'Herb-crusted New Zealand lamb, ratatouille, rosemary jus, pommes dauphinoise', price: '$68', tags: ['GF'] },
    { name: 'Lobster Thermidor', description: 'Maine lobster, cognac cream, gruyere gratin, asparagus, saffron rice', price: '$78', tags: [] },
    { name: 'Duck Confit', description: 'Slow-braised duck leg, cherry gastrique, roasted root vegetables, pommes sarladaises', price: '$56', tags: ['GF'] },
    { name: 'Wild Mushroom Risotto', description: 'Arborio rice, porcini, chanterelle, morel mushrooms, truffle oil, aged parmesan', price: '$42', tags: ['V', 'GF'] }
  ],
  desserts: [
    { name: 'Chocolate Soufflé', description: 'Valrhona dark chocolate, Grand Marnier, vanilla bean crème anglaise', price: '$22', tags: ['V'] },
    { name: 'Crème Brûlée', description: 'Madagascar vanilla bean custard, caramelized sugar, fresh berries, tuile cookie', price: '$18', tags: ['V', 'GF'] },
    { name: 'Tarte Tatin', description: 'Caramelized apple tart, Calvados cream, vanilla ice cream, caramel sauce', price: '$20', tags: ['V'] },
    { name: 'Tiramisu Reimagined', description: 'Espresso-soaked savoiardi, mascarpone mousse, cocoa powder, amaretto cream', price: '$19', tags: ['V'] },
    { name: 'Lemon Posset', description: 'Silky lemon cream, shortbread crumble, fresh raspberries, mint', price: '$16', tags: ['V', 'GF'] }
  ],
  wines: [
    { name: 'Château Margaux 2015', description: 'Bordeaux, France — Full-bodied, notes of blackcurrant, violet, and cedar. Elegant tannins.', price: '$85/glass', tags: [] },
    { name: 'Barolo Riserva 2016', description: 'Piedmont, Italy — Rich and complex with dried rose, tar, and cherry. Perfect with red meat.', price: '$65/glass', tags: [] },
    { name: 'Puligny-Montrachet 2018', description: 'Burgundy, France — Crisp white with notes of citrus, hazelnut, and minerality.', price: '$55/glass', tags: [] },
    { name: 'Amarone della Valpolicella', description: 'Veneto, Italy — Intense dried fruit, chocolate, and spice. Velvety and luxurious.', price: '$70/glass', tags: [] },
    { name: 'Negroni Classico', description: 'Tanqueray gin, Campari, sweet vermouth, orange peel — The timeless Italian aperitif.', price: '$22', tags: [] },
    { name: 'French 75', description: 'Hendrick\'s gin, fresh lemon juice, simple syrup, topped with Moët Champagne.', price: '$26', tags: [] },
    { name: 'Espresso Martini', description: 'Grey Goose vodka, Kahlúa, freshly brewed espresso, vanilla syrup.', price: '$24', tags: [] }
  ]
}

const categories = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains', label: 'Mains' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'wines', label: 'Wine & Cocktails' }
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')

  return (
    <div className="page-wrapper menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content">
          <span className="section-label">Savoria</span>
          <h1>Our Menu</h1>
          <div className="gold-line"></div>
          <p className="menu-hero-sub">A curated selection of Italian-French fusion cuisine</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-section section-padding">
        <div className="container">
          {/* Category Tabs */}
          <div className="menu-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`menu-tab ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            {menuData[activeCategory].map((item, index) => (
              <ScrollReveal key={`${activeCategory}-${index}`} delay={index * 80}>
                <div className="menu-item">
                  <div className="menu-item-header">
                    <div className="menu-item-name-wrap">
                      <h3 className="menu-item-name">{item.name}</h3>
                      {item.tags.length > 0 && (
                        <div className="menu-item-tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="dietary-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Legend */}
          <div className="menu-legend">
            <span className="legend-item"><span className="dietary-tag">V</span> Vegetarian</span>
            <span className="legend-item"><span className="dietary-tag">GF</span> Gluten Free</span>
          </div>
        </div>
      </section>

      {/* Chef's Note */}
      <section className="chefs-note section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="chefs-note-inner">
              <div className="chefs-note-image">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200"
                  alt="Chef Laurent Marchetti"
                />
              </div>
              <div className="chefs-note-content">
                <span className="section-label">From the Chef</span>
                <h2>A Note from Chef Laurent</h2>
                <div className="gold-line" style={{ margin: '1.5rem 0' }}></div>
                <p className="chefs-quote">
                  "Each dish on our menu is a reflection of my journey through the kitchens
                  of Rome and Paris. I invite you to explore these flavors with an open heart
                  and curious palate. Our menu changes with the seasons, honoring the rhythm
                  of nature and the finest ingredients each moment brings."
                </p>
                <p className="chefs-signature">— Chef Laurent Marchetti</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Menu
