import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Classes from './pages/Classes'
import Instructors from './pages/Instructors'
import Pricing from './pages/Pricing'
import Workshops from './pages/Workshops'
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
      <main className={isAdmin ? 'admin-main' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/workshops" element={<Workshops />} />
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
