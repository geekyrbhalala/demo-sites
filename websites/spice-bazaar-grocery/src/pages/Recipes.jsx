import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import Modal from '../components/Modal'
import './Recipes.css'

const recipes = [
  {
    id: 1,
    title: 'Classic Butter Chicken',
    cuisine: 'North Indian',
    difficulty: 'Medium',
    time: '60 min',
    servings: 4,
    mealType: 'Dinner',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    ingredients: ['Chicken 500g', 'Butter 50g', 'Tomato puree 200ml', 'Cream 100ml', 'Kashmiri Chili 1 tsp', 'Garam Masala 1 tsp', 'Ginger-Garlic paste 2 tbsp'],
    instructions: [
      'Marinate chicken with yogurt, chili, and ginger-garlic paste for 2 hours.',
      'Grill or pan-fry the marinated chicken until charred.',
      'In a pan, melt butter and saute onions until golden.',
      'Add tomato puree, spices, and cook for 15 minutes.',
      'Add cream and simmer. Add grilled chicken pieces.',
      'Garnish with butter, cream, and fresh cilantro.',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Dal Tadka',
    cuisine: 'Pan-Indian',
    difficulty: 'Easy',
    time: '35 min',
    servings: 4,
    mealType: 'Lunch',
    img: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=800',
    ingredients: ['Toor Dal 1 cup', 'Onion 1', 'Tomatoes 2', 'Cumin seeds 1 tsp', 'Turmeric 1/2 tsp', 'Red chili 2', 'Ghee 2 tbsp'],
  },
  {
    id: 3,
    title: 'Masala Chai',
    cuisine: 'Indian',
    difficulty: 'Easy',
    time: '10 min',
    servings: 2,
    mealType: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
    ingredients: ['Black tea 2 tsp', 'Milk 1 cup', 'Ginger 1 inch', 'Cardamom 3', 'Cinnamon 1 stick', 'Sugar to taste'],
  },
  {
    id: 4,
    title: 'Vegetable Biryani',
    cuisine: 'Hyderabadi',
    difficulty: 'Hard',
    time: '90 min',
    servings: 6,
    mealType: 'Dinner',
    img: 'https://images.unsplash.com/photo-1534483509719-8017d63a3b96?w=800',
    ingredients: ['Basmati Rice 2 cups', 'Mixed vegetables 3 cups', 'Biryani masala 2 tbsp', 'Saffron strands', 'Yogurt 1/2 cup', 'Fried onions 1 cup', 'Ghee 3 tbsp'],
  },
  {
    id: 5,
    title: 'Paneer Tikka',
    cuisine: 'Punjabi',
    difficulty: 'Easy',
    time: '30 min',
    servings: 3,
    mealType: 'Snack',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    ingredients: ['Paneer 300g', 'Bell peppers 2', 'Yogurt 1/2 cup', 'Tikka masala 2 tbsp', 'Lemon juice 1 tbsp', 'Onion 1'],
  },
  {
    id: 6,
    title: 'Samosa',
    cuisine: 'North Indian',
    difficulty: 'Medium',
    time: '60 min',
    servings: 8,
    mealType: 'Snack',
    img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800',
    ingredients: ['All-purpose flour 2 cups', 'Potatoes 4', 'Green peas 1/2 cup', 'Cumin seeds 1 tsp', 'Coriander powder 1 tsp', 'Oil for frying'],
  },
  {
    id: 7,
    title: 'Mango Lassi',
    cuisine: 'Indian',
    difficulty: 'Easy',
    time: '5 min',
    servings: 2,
    mealType: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
    ingredients: ['Mango pulp 1 cup', 'Yogurt 1 cup', 'Sugar 2 tbsp', 'Cardamom powder', 'Ice cubes'],
  },
  {
    id: 8,
    title: 'Chana Masala',
    cuisine: 'Punjabi',
    difficulty: 'Medium',
    time: '45 min',
    servings: 4,
    mealType: 'Lunch',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    ingredients: ['Chickpeas 2 cups', 'Onion 2', 'Tomatoes 3', 'Chana masala 2 tbsp', 'Ginger 1 inch', 'Green chilies 2', 'Coriander leaves'],
  },
]

const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']

function Recipes() {
  const [filter, setFilter] = useState('All')
  const [showModal, setShowModal] = useState(false)

  const featured = recipes.find(r => r.featured)
  const filtered = filter === 'All' ? recipes : recipes.filter(r => r.mealType === filter)

  return (
    <div className="recipes-page">
      <section className="recipes-hero">
        <div className="container">
          <h1>Recipes & Inspiration</h1>
          <p>Cook authentic Indian dishes with our premium ingredients</p>
        </div>
      </section>

      {/* Featured Recipe */}
      {featured && (
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <h2 className="section-title">Featured Recipe</h2>
              <p className="section-subtitle">Our chef's pick of the week</p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="featured-recipe">
                <div className="featured-recipe-img">
                  <img src={featured.img} alt={featured.title} />
                </div>
                <div className="featured-recipe-content">
                  <div className="recipe-tags">
                    <span className="recipe-tag">{featured.cuisine}</span>
                    <span className="recipe-tag">{featured.difficulty}</span>
                    <span className="recipe-tag">{featured.time}</span>
                  </div>
                  <h3>{featured.title}</h3>
                  <div className="recipe-meta-row">
                    <span>Serves {featured.servings}</span>
                    <span>{featured.time}</span>
                    <span>{featured.difficulty}</span>
                  </div>

                  <div className="featured-ingredients">
                    <h4>Ingredients</h4>
                    <ul>
                      {featured.ingredients.map(ing => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                    <button className="btn btn-green btn-small" style={{ marginTop: '0.75rem' }} onClick={() => setShowModal(true)}>
                      Add All to Cart
                    </button>
                  </div>

                  <div className="featured-instructions">
                    <h4>Instructions</h4>
                    <ol>
                      {featured.instructions.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* All Recipes */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">All Recipes</h2>
            <p className="section-subtitle">Browse by meal type and find your next favorite dish</p>
          </ScrollReveal>

          <div className="recipe-filters">
            {mealTypes.map(type => (
              <button
                key={type}
                className={`recipe-filter-btn ${filter === type ? 'active' : ''}`}
                onClick={() => setFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="recipes-grid">
            {filtered.map((recipe, i) => (
              <ScrollReveal key={recipe.id} delay={i * 80}>
                <div className="recipe-card card">
                  <div className="recipe-card-img">
                    <img src={recipe.img} alt={recipe.title} loading="lazy" />
                    <span className="recipe-difficulty">{recipe.difficulty}</span>
                  </div>
                  <div className="recipe-card-body">
                    <div className="recipe-card-tags">
                      <span>{recipe.cuisine}</span>
                      <span>{recipe.mealType}</span>
                    </div>
                    <h3>{recipe.title}</h3>
                    <div className="recipe-card-meta">
                      <span className="price">{recipe.time}</span>
                      <span>Serves {recipe.servings}</span>
                    </div>
                    <div className="recipe-card-ingredients">
                      <strong>Key Ingredients:</strong>
                      <p>{recipe.ingredients.slice(0, 4).join(', ')}</p>
                    </div>
                    <button className="btn btn-green btn-small" style={{ width: '100%', marginTop: '0.75rem' }} onClick={() => setShowModal(true)}>
                      Add Ingredients to Cart
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Added to Cart!"
        message="All recipe ingredients have been added to your cart."
      />
    </div>
  )
}

export default Recipes
