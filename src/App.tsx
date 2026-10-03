import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BrowseGyms from './pages/BrowseGyms'
import GymDetail from './pages/GymDetail'
import About from './pages/About'
import AddYourGym from './pages/AddYourGym'
import NotFound from './pages/NotFound'

const titles: Record<string, string> = {
  '/': 'GymPeek — See inside the gym before you go',
  '/gyms': 'Browse Gyms in Ghana — GymPeek',
  '/about': 'About GymPeek — Ghana gym directory',
  '/add-your-gym': 'Add your gym to GymPeek — Free listing',
}

function ScrollAndTitle() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'GymPeek'
  }, [pathname])

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollAndTitle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gyms" element={<BrowseGyms />} />
          <Route path="/gyms/:slug" element={<GymDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-your-gym" element={<AddYourGym />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
