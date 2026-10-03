import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getGym, directionsUrl, whatsappUrl, gyms } from '../data/gyms'
import GymCard, { StatusChip } from '../components/GymCard'
import MapEmbed from '../components/MapEmbed'
import {
  ArrowLeft,
  Share,
  Bookmark,
  Pin,
  Navigation,
  Whatsapp,
  Phone,
  Camera,
  Check,
  Clock,
  Layers,
  Wallet,
} from '../components/Icons'
import '../styles/pages.css'

export default function GymDetail() {
  const { slug } = useParams()
  const gym = getGym(slug ?? '')
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setActive(0)
  }, [slug])

  if (!gym) return <Navigate to="/gyms" replace />

  const sameCity = gyms.filter((g) => g.slug !== gym.slug && g.city === gym.city)
  const related = (sameCity.length ? sameCity : gyms.filter((g) => g.slug !== gym.slug)).slice(0, 3)

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: gym.name, url })
      else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      /* user dismissed the share sheet */
    }
  }

  return (
    <>
      {/* ---------------- HEAD ---------------- */}
      <section className="detail-head">
        <div className="hero-glow hero-glow-1" />
        <div className="container" style={{ position: 'relative' }}>
          <div className="detail-topbar">
            <Link to="/gyms" className="detail-back">
              <ArrowLeft size={16} /> Back to gyms
            </Link>
            <div className="detail-topbar-actions">
              <button className="btn btn-sm btn-on-dark" onClick={share}>
                <Share size={15} /> {copied ? 'Link copied' : 'Share gym'}
              </button>
              <button className="btn btn-sm btn-on-dark">
                <Bookmark size={15} /> Save
              </button>
            </div>
          </div>

          <div className="detail-title-row">
            <div>
              <div className="detail-status-row">
                <StatusChip status={gym.status} onDark />
                <span className="chip chip-static-on-dark">Closes {gym.closesAt}</span>
                <span className="chip chip-static-on-dark">
                  {gym.area}, {gym.city}
                </span>
              </div>
              <h1 className="display-hero detail-name">{gym.name}</h1>
              <p className="detail-address">
                <Pin size={15} /> {gym.address}
              </p>
            </div>

            <div className="detail-pass">
              <span>Pass starts at</span>
              <strong>
                GHC{gym.rates[0].price} <em>/ {gym.rates[0].label.replace(' Pass', '').toLowerCase()}</em>
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-main">
            <img
              src={gym.gallery[active].photo}
              alt={`${gym.name} — ${gym.gallery[active].label}`}
            />
            <span className="gallery-zone">
              <Pin size={14} /> {gym.city} Central Zone
            </span>
            <span className="gallery-count">
              <Camera size={14} /> {gym.photoCount} photos
            </span>
            <div className="gallery-caption">
              <h3>Gym photo — {gym.gallery[active].label} area</h3>
              <p>{gym.name}, {gym.area}, {gym.city}. Real interior views uploaded by the gym.</p>
            </div>
          </div>

          <div className="gallery-thumbs">
            {gym.gallery.map((item, i) => (
              <button
                key={item.label}
                className={`gallery-thumb${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`View ${item.label} photos`}
              >
                <img src={item.photo} alt="" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BODY ---------------- */}
      <section className="section">
        <div className="container detail-layout">
          <div className="detail-main stack-lg">
            {/* About */}
            <article className="card card-pad">
              <div className="card-title-row">
                <span className="feature-icon">
                  <Layers size={18} />
                </span>
                <h2 className="headline-md">About this gym</h2>
              </div>
              <p className="muted detail-copy">{gym.description}</p>
              <div className="stat-row">
                {gym.stats.map((s) => (
                  <div key={s.label} className="stat-box">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Facilities */}
            <article className="card card-pad">
              <div className="card-title-row">
                <span className="feature-icon navy">
                  <Check size={18} />
                </span>
                <h2 className="headline-md">Facilities &amp; amenities</h2>
                <span className="chip chip-static" style={{ marginLeft: 'auto' }}>
                  {gym.amenities.length} available
                </span>
              </div>
              <ul className="amenity-grid">
                {gym.amenities.map((a) => (
                  <li key={a}>
                    <Check size={16} /> {a}
                  </li>
                ))}
              </ul>
            </article>

            {/* Hours */}
            <article className="card card-pad">
              <div className="card-title-row">
                <span className="feature-icon green">
                  <Clock size={18} />
                </span>
                <h2 className="headline-md">Opening hours</h2>
                <span className="chip chip-static" style={{ marginLeft: 'auto' }}>
                  Standard schedule
                </span>
              </div>
              <ul className="hours-list">
                {gym.hours.map((h) => (
                  <li key={h.day}>
                    <span className="hours-day">
                      {h.day}
                      {h.today && <em className="hours-today">Open today</em>}
                    </span>
                    <span className={`hours-time${h.hours === 'Closed' ? ' closed' : ''}`}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="body-sm muted" style={{ marginTop: 12 }}>
                Public holidays: special hours apply (7:00 AM – 2:00 PM).
              </p>
            </article>

            {/* Location */}
            <article className="card card-pad">
              <div className="card-title-row">
                <span className="feature-icon">
                  <Pin size={18} />
                </span>
                <h2 className="headline-md">Location &amp; directions</h2>
              </div>

              <MapEmbed
                query={gym.mapsQuery}
                directionsQuery={gym.mapsQuery}
                label={gym.name}
                regionLabel={`${gym.city}, ${gym.region} Region`}
              />

              <dl className="location-list">
                <dt>Physical address</dt>
                <dd>{gym.address}</dd>
                <dt>Landmark reference</dt>
                <dd>{gym.landmark}</dd>
              </dl>

              <a
                className="btn btn-accent"
                href={directionsUrl(gym.mapsQuery)}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={16} /> Get directions via Google Maps
              </a>
            </article>
          </div>

          {/* ---------------- RATES SIDEBAR ---------------- */}
          <aside className="detail-aside">
            <div className="card card-pad rates-card">
              <div className="card-title-row">
                <span className="feature-icon navy">
                  <Wallet size={18} />
                </span>
                <h2 className="headline-md">Rates &amp; access</h2>
              </div>
              <p className="body-sm muted">
                Drop in casually or lock in monthly savings. Flexible payment options accepted at
                the desk.
              </p>

              <ul className="rates-list">
                {gym.rates.map((r) => (
                  <li key={r.label}>
                    <div>
                      <strong>{r.label}</strong>
                      <span className="body-sm muted">{r.detail}</span>
                    </div>
                    <div className="rate-price">
                      {r.badge && <em className="rate-badge">{r.badge}</em>}
                      <b>
                        GHC{r.price}
                        <i>/ {r.unit ?? 'day'}</i>
                      </b>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rates-note">
                One-time registration fee <span>GHC{gym.registrationFee}</span>
              </div>

              <ul className="rates-perks">
                <li>
                  <Check size={15} /> No lock-in contracts, cancel anytime
                </li>
                <li>
                  <Check size={15} /> Full access to weight room, studio &amp; showers
                </li>
                <li>
                  <Check size={15} /> Complimentary locker usage during workouts
                </li>
                <li>
                  <Check size={15} /> Pay at desk via Mobile Money (MoMo)
                </li>
              </ul>

              <div className="rates-actions">
                <a
                  className="btn btn-accent btn-block"
                  href={directionsUrl(gym.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={16} /> Get directions
                </a>
                <a
                  className="btn btn-primary btn-block"
                  href={whatsappUrl(gym.whatsapp)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Whatsapp size={16} /> Chat on WhatsApp
                </a>
                <a className="btn btn-glass btn-block" href={`tel:${gym.phone.replace(/\s/g, '')}`}>
                  <Phone size={16} /> Call Gym Desk ({gym.phone})
                </a>
              </div>

              <p className="body-sm muted rates-foot">
                Pay at desk via Mobile Money (MoMo) • Card accepted
              </p>
            </div>

            <div className="card card-pad owner-card">
              <strong>Own this gym?</strong>
              <p className="body-sm muted">
                Keep your rates, photos and hours up to date on GymPeek.
              </p>
              <Link to="/add-your-gym" className="btn btn-dark btn-block btn-sm">
                Claim this listing
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- MORE IN CITY ---------------- */}
      <section className="section-sm">
        <div className="container">
          <div className="section-head">
            <h2 className="headline-lg">More gyms in {gym.city}</h2>
            <Link to="/gyms" className="btn btn-ghost">
              Browse all <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
          <div className="related-row">
            {related.map((g) => (
              <GymCard key={g.id} gym={g} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
