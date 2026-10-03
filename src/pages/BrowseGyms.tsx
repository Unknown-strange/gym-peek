import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { gyms, regions, priceBands, gymTypes, type Gym } from '../data/gyms'
import GymCard from '../components/GymCard'
import { Search, Pin, Wallet, Filter, Camera, ArrowRight, Close } from '../components/Icons'
import '../styles/pages.css'

type QuickPick = 'open' | 'ac' | 'weights' | 'budget' | 'cardio'

const quickPicks: { id: QuickPick; label: string }[] = [
  { id: 'open', label: 'Open Now' },
  { id: 'ac', label: 'AC & Chilled' },
  { id: 'weights', label: 'Free Weights' },
  { id: 'budget', label: 'Budget-friendly (< GHC200)' },
  { id: 'cardio', label: 'Cardio Deck' },
]

export default function BrowseGyms() {
  const [params, setParams] = useSearchParams()

  const [query, setQuery] = useState(params.get('q') ?? '')
  const [region, setRegion] = useState(regions[0])
  const [bandIndex, setBandIndex] = useState(0)
  const [type, setType] = useState(gymTypes[0])
  const [picks, setPicks] = useState<QuickPick[]>([])
  const [sort, setSort] = useState('popular')

  // Reflect URL params written by the home hero search
  useEffect(() => {
    const q = params.get('q')
    const t = params.get('type')
    if (q) setQuery(q)
    if (t && gymTypes.includes(t)) setType(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  const togglePick = (id: QuickPick) =>
    setPicks((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const band = priceBands[bandIndex]

    const filtered = gyms.filter((g) => {
      if (q) {
        const haystack = `${g.name} ${g.area} ${g.city} ${g.region} ${g.address} ${g.type}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      if (region !== regions[0] && g.region !== region) return false
      if (type !== gymTypes[0] && g.type !== type) return false
      if (g.priceFrom < band.min || g.priceFrom > band.max) return false
      if (picks.includes('open') && g.status === 'closed') return false
      if (picks.includes('ac') && !g.amenities.some((a) => /air|ac|chilled/i.test(a))) return false
      if (picks.includes('weights') && !g.amenities.some((a) => /weight|powerlift|olympic/i.test(a)))
        return false
      if (picks.includes('budget') && g.priceFrom >= 200) return false
      if (picks.includes('cardio') && !g.tags.some((t) => /cardio/i.test(t))) return false
      return true
    })

    const sorted: Gym[] = [...filtered]
    if (sort === 'price-low') sorted.sort((a, b) => a.priceFrom - b.priceFrom)
    else if (sort === 'price-high') sorted.sort((a, b) => b.priceFrom - a.priceFrom)
    else if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    else sorted.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))

    return sorted
  }, [query, region, type, bandIndex, picks, sort])

  const applyFilters = () => {
    const next = new URLSearchParams()
    if (query.trim()) next.set('q', query.trim())
    setParams(next)
  }

  const reset = () => {
    setQuery('')
    setRegion(regions[0])
    setBandIndex(0)
    setType(gymTypes[0])
    setPicks([])
    setParams(new URLSearchParams())
  }

  return (
    <>
      {/* ---------------- PAGE HEAD ---------------- */}
      <section className="browse-hero">
        <div className="hero-glow hero-glow-1" />
        <div className="container-narrow text-center" style={{ position: 'relative' }}>
          <span className="hero-badge">
            <Pin size={14} /> Ghana fitness network
          </span>
          <h1 className="display-hero" style={{ marginTop: 18 }}>
            Browse gyms
          </h1>
          <p className="hero-sub" style={{ margin: '14px auto 0' }}>
            Find the right gym by area and price. See interior equipment, real daylight, and verify
            facilities before you step out.
          </p>

          <div className="search-dock browse-dock">
            <div className="search-dock-field">
              <Search size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
                placeholder="Search gym, landmark…"
                aria-label="Search gyms"
              />
            </div>

            <span className="search-dock-divider" />

            <div className="search-dock-field">
              <Pin size={18} />
              <select value={region} onChange={(e) => setRegion(e.target.value)} aria-label="Region">
                {regions.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>

            <span className="search-dock-divider" />

            <div className="search-dock-field">
              <Wallet size={18} />
              <select
                value={bandIndex}
                onChange={(e) => setBandIndex(Number(e.target.value))}
                aria-label="Price"
              >
                {priceBands.map((b, i) => (
                  <option key={b.label} value={i}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary search-dock-btn" onClick={applyFilters}>
              <Filter size={17} /> Filter
            </button>
          </div>

          <div className="quick-picks">
            <span className="quick-picks-label">Quick picks:</span>
            {quickPicks.map((p) => (
              <button
                key={p.id}
                className={`chip${picks.includes(p.id) ? ' active' : ''}`}
                onClick={() => togglePick(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RESULTS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="results-bar">
            <div className="results-count">
              Showing <strong>{results.length}</strong> gyms found in Ghana
              <span className="chip chip-static" style={{ marginLeft: 10 }}>
                Verified
              </span>
            </div>

            <label className="sort-control">
              Sort by:
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </label>
          </div>

          {results.length > 0 ? (
            <div className="gym-grid">
              {results.map((g) => (
                <GymCard key={g.id} gym={g} />
              ))}
            </div>
          ) : (
            <div className="empty-state card">
              <span className="feature-icon">
                <Camera size={22} />
              </span>
              <h3 className="headline-md">No gyms match those filters</h3>
              <p className="muted">
                Try widening the area or price band — we are still onboarding new gyms across Ghana
                every week.
              </p>
              <button className="btn btn-primary" onClick={reset}>
                <Close size={16} /> Clear all filters
              </button>
            </div>
          )}

          {results.length > 0 && results.length < gyms.length && (
            <div className="text-center" style={{ marginTop: 'var(--gutter-lg)' }}>
              <button className="btn btn-glass" onClick={reset}>
                Clear filters and show all {gyms.length} gyms <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
