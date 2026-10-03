import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from '../components/Icons'
import '../styles/pages.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="hero-glow hero-glow-1" />
      <div className="container-narrow text-center" style={{ position: 'relative' }}>
        <span className="hero-badge">404 — page not found</span>
        <h1 className="display-hero" style={{ marginTop: 18 }}>
          This route isn&rsquo;t on the map.
        </h1>
        <p className="hero-sub" style={{ margin: '14px auto 0' }}>
          The page you were looking for moved or never existed. The gym listings are one tap away.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-glass">
            <ArrowLeft size={16} /> Back home
          </Link>
          <Link to="/gyms" className="btn btn-primary">
            <Search size={16} /> Browse gyms
          </Link>
        </div>
      </div>
    </section>
  )
}
