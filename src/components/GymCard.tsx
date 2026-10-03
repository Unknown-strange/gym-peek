import { Link } from 'react-router-dom'
import type { Gym } from '../data/gyms'
import { directionsUrl } from '../data/gyms'
import { Pin, Camera, Navigation, ArrowRight } from './Icons'

function StatusChip({ status, onDark = false }: { status: Gym['status']; onDark?: boolean }) {
  if (status === 'open') {
    return (
      <span className={`status status-open${onDark ? ' on-dark' : ''}`}>
        <span className="status-dot" /> Open now
      </span>
    )
  }
  if (status === 'soon') {
    return (
      <span className={`status status-soon${onDark ? ' on-dark' : ''}`}>
        <span className="status-dot" /> Closes soon
      </span>
    )
  }
  return (
    <span className={`status status-closed${onDark ? ' on-dark' : ''}`}>
      <span className="status-dot" /> Closed
    </span>
  )
}

export { StatusChip }

export default function GymCard({ gym }: { gym: Gym }) {
  return (
    <article className="gym-card">
      <Link to={`/gyms/${gym.slug}`} className="gym-card-media">
        <img src={gym.photo} alt={`${gym.name} workout floor`} loading="lazy" />
        <div className="gym-card-media-top">
          <span className="media-badge">
            <Camera size={13} /> {gym.photoCount} photos
          </span>
          <StatusChip status={gym.status} onDark />
        </div>
        <div className="gym-card-title">
          <h3>{gym.name}</h3>
          <p>
            <Pin size={13} /> {gym.area}, {gym.city}
          </p>
        </div>
      </Link>

      <div className="gym-card-body">
        <div className="gym-card-meta">
          <span>
            Open today until {gym.closesAt}
          </span>
          <span className="gym-card-rating">
            ★ {gym.rating.toFixed(1)} ({gym.reviews})
          </span>
        </div>

        <div className="chip-row">
          {gym.tags.slice(0, 4).map((t) => (
            <span className="chip chip-static" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="price-block">
          <div className="price-label">Starts at</div>
          <div className="price-value">
            GHC{gym.priceFrom} <span>/ mo</span>
          </div>
        </div>

        <div className="gym-card-actions">
          <Link to={`/gyms/${gym.slug}`} className="btn btn-view">
            View gym <ArrowRight size={15} />
          </Link>
          <a
            className="btn btn-accent"
            href={directionsUrl(gym.mapsQuery)}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={15} /> Directions
          </a>
        </div>
      </div>
    </article>
  )
}
