import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { gyms, popularAreas, gymTypes } from '../data/gyms'
import GymCard from '../components/GymCard'
import { Search, Dumbbell, Eye, Wallet, Navigation, ArrowRight, Pin, Star } from '../components/Icons'
import heroImage from '../assets/gym_image.jpg'
import '../styles/pages.css'

export default function Home() {
  const navigate = useNavigate()
  const [area, setArea] = useState('')
  const [type, setType] = useState(gymTypes[0])

  const search = (preset?: string) => {
    const q = preset ?? area
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (type !== gymTypes[0]) params.set('type', type)
    navigate(`/gyms?${params.toString()}`)
  }

  const featured = gyms.filter((g) => g.featured).slice(0, 4)

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div
          className="hero-photo"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Dumbbell rack inside a gym"
        />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        <div className="container-narrow hero-inner">
          <span className="hero-badge">
            <Pin size={14} /> Find your gym in Ghana
          </span>

          <h1 className="display-hero">
            See <span className="hero-gradient-text">inside the gym</span> before you go.
          </h1>

          <p className="hero-sub">
            Photos, prices and directions for gyms near you, all in one place.
          </p>

          <div className="search-dock">
            <div className="search-dock-field">
              <Search size={20} />
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && search()}
                placeholder="Enter area or neighborhood (e.g. East Legon)"
                aria-label="Search by area"
              />
            </div>

            <span className="search-dock-divider" />

            <div className="search-dock-field">
              <Dumbbell size={18} />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                aria-label="Gym type"
              >
                {gymTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary search-dock-btn" onClick={() => search()}>
              <Search size={17} /> Search gyms
            </button>
          </div>

          <div className="popular-row">
            <span>Popular in Accra:</span>
            {popularAreas.map((a) => (
              <button key={a} className="chip" onClick={() => search(a)}>
                {a}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="benefits">
        <div className="container benefits-grid">
          <h2 className="visually-hidden">Why use GymPeek</h2>
          <article className="card card-hover feature-card">
            <span className="feature-icon">
              <Eye size={20} />
            </span>
            <h3>See inside</h3>
            <p>
              High-resolution real gallery peeks of equipment, changing rooms, and workout floors
              before you step through the door.
            </p>
          </article>

          <article className="card card-hover feature-card">
            <span className="feature-icon navy">
              <Wallet size={20} />
            </span>
            <h3>Know the price</h3>
            <p>
              Transparent monthly, daily, and student membership fees clearly listed with zero desk
              surprise walk-in charges.
            </p>
          </article>

          <article className="card card-hover feature-card">
            <span className="feature-icon green">
              <Navigation size={20} />
            </span>
            <h3>Get directions</h3>
            <p>
              One-tap Google Maps directions, landmark navigation, and peak-hour traffic guidance
              right across Ghanaian roads.
            </p>
          </article>
        </div>
      </section>

      {/* ---------------- FEATURED ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Spotlight locations</span>
              <h2 className="headline-xl">Featured Gyms</h2>
              <p className="muted" style={{ marginTop: 8 }}>
                Popular workout spots with verified photos &amp; transparent rates
              </p>
            </div>
            <Link to="/gyms" className="btn btn-ghost">
              Browse all gyms <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gym-grid">
            {featured.map((g) => (
              <GymCard key={g.id} gym={g} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="how">
        <div className="container text-center">
          <span className="eyebrow">Simple discovery</span>
          <h2 className="headline-xl" style={{ marginTop: 6 }}>
            How it works
          </h2>
          <p className="muted" style={{ marginTop: 8 }}>
            Find and visit your ideal gym in 3 easy steps
          </p>

          <ol className="steps">
            <li>
              <span className="step-num">1</span>
              <h3 className="headline-sm">Search</h3>
              <p className="muted">
                Filter gyms by neighborhood in Ghana, budget, and desired training facilities.
              </p>
            </li>
            <li>
              <span className="step-num step-num-blue">2</span>
              <h3 className="headline-sm">Peek inside</h3>
              <p className="muted">
                Inspect clean photos of gym equipment, free-weight areas, amenities, and accurate
                price tiers.
              </p>
            </li>
            <li>
              <span className="step-num step-num-green">3</span>
              <h3 className="headline-sm">Go</h3>
              <p className="muted">
                Tap directions to navigate straight to the front desk and begin your workout.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="stats-band">
        <div className="container stats-grid">
          <div>
            <strong>{gyms.length}+</strong>
            <span>Listed gyms</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Cities covered</span>
          </div>
          <div>
            <strong>GHC100</strong>
            <span>Cheapest monthly</span>
          </div>
          <div>
            <strong>
              <Star size={18} /> 4.6
            </strong>
            <span>Average rating</span>
          </div>
        </div>
      </section>

      {/* ---------------- LIST CTA ---------------- */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="cta-pill">For fitness center operators</span>
              <h2 className="headline-xl">Own a gym? List it free</h2>
              <p>
                Showcase your equipment, display real membership rates, and welcome fitness
                enthusiasts from across Ghana.
              </p>
            </div>
            <Link to="/add-your-gym" className="btn btn-glass btn-lg">
              List your gym free <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
