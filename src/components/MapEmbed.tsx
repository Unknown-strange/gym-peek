import { directionsUrl } from '../data/gyms'
import { Navigation, ArrowRight } from './Icons'

interface MapEmbedProps {
  /** Place name / address searched on the map */
  query: string
  /** Destination used for turn-by-turn directions */
  directionsQuery: string
  /** Small label shown on the map pin */
  label?: string
  /** Region label pinned bottom-left, like the design mockup */
  regionLabel?: string
}

/**
 * Live Google Maps preview with no API key required.
 *
 * The iframe itself has pointer events disabled, so a single click anywhere on
 * the map follows through to Google Maps turn-by-turn directions — which is the
 * behaviour gym visitors actually want on mobile.
 */
export default function MapEmbed({
  query,
  directionsQuery,
  label,
  regionLabel,
}: MapEmbedProps) {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&z=15&output=embed`
  const directions = directionsUrl(directionsQuery)

  return (
    <div className="map-embed">
      {/* Decorative fallback shown if the iframe is blocked or offline */}
      <div className="map-fallback" aria-hidden />

      <iframe
        className="map-embed-frame"
        src={embedSrc}
        title={`Map of ${query}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
      />

      {label && (
        <span className="map-embed-pin">
          <Navigation size={15} />
          <em>{label}</em>
        </span>
      )}

      {regionLabel && <span className="map-embed-region">{regionLabel}</span>}

      {/* The clickable layer: covers the map and opens Google Maps directions */}
      <a
        className="map-embed-hit"
        href={directions}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open directions to ${query} in Google Maps`}
      >
        <span className="map-embed-cta">
          <Navigation size={16} /> Open in Google Maps
          <ArrowRight size={15} />
        </span>
      </a>
    </div>
  )
}
