import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PracticeAreas from './pages/PracticeAreas'
import Attorneys from './pages/Attorneys'
import Results from './pages/Results'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practice-areas" element={<PracticeAreas />} />
                <Route path="/attorneys" element={<Attorneys />} />
                <Route path="/results" element={<Results />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
