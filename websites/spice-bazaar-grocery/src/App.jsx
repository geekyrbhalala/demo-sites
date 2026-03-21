import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Deals from './pages/Deals'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Catering from './pages/Catering'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<About />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  )
}

export default App
