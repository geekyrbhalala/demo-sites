import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Artists from './pages/Artists'
import Booking from './pages/Booking'
import Piercing from './pages/Piercing'
import Aftercare from './pages/Aftercare'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'

function App() {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'

  return (
    <div className="app">
      {!isAdmin && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/piercing" element={<Piercing />} />
          <Route path="/aftercare" element={<Aftercare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  )
}

export default App
