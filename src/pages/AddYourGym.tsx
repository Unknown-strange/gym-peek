import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  Camera,
  Wallet,
  Pin,
  Navigation,
  ArrowRight,
  Eye,
  Star,
} from '../components/Icons'
import '../styles/pages.css'

const perks = [
  { icon: <Camera size={18} />, title: 'Photo gallery', text: 'Upload real shots of your floor, equipment and changing rooms.' },
  { icon: <Wallet size={18} />, title: 'Transparent rates', text: 'Publish daily, weekly, monthly and student prices in Cedis.' },
  { icon: <Pin size={18} />, title: 'Pin your location', text: 'Landmark-based directions that work across Ghanaian roads.' },
  { icon: <Eye size={18} />, title: 'Real previews', text: 'Members arrive already knowing what your gym looks like.' },
  { icon: <Navigation size={18} />, title: 'One-tap directions', text: 'Visitors navigate straight to your front desk from the listing.' },
  { icon: <Star size={18} />, title: 'Verified badge', text: 'Confirmed listings get the verified chip in search results.' },
]

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    highlight: false,
    features: [
      'Full gym profile page',
      'Up to 5 photos',
      'Basic rates display',
      'Google Maps directions',
    ],
  },
  {
    name: 'Verified',
    price: 'GHC150',
    period: '/ month',
    highlight: true,
    features: [
      'Everything in Starter',
      'Unlimited photos',
      'Verified badge in search',
      'Priority placement in browse results',
      'WhatsApp chat button',
    ],
  },
  {
    name: 'Partner',
    price: 'GHC400',
    period: '/ month',
    highlight: false,
    features: [
      'Everything in Verified',
      'Featured home page slot',
      'Promo & discount announcements',
      'Monthly performance report',
      'Dedicated account contact',
    ],
  },
]

export default function AddYourGym() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="page-hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-3" />
        <div className="container-narrow text-center" style={{ position: 'relative' }}>
          <span className="hero-badge">For fitness center operators</span>
          <h1 className="display-hero" style={{ marginTop: 18 }}>
            Advertise your gym <span className="hero-gradient-text">free</span>
          </h1>
          <p className="hero-sub" style={{ margin: '14px auto 0' }}>
            List your facility on Ghana&rsquo;s gym directory. Show real photos, publish honest
            rates, and reach people already searching for a gym near them.
          </p>
          <div className="hero-chip-row">
            <span className="chip chip-on-dark">
              <Check size={14} /> No listing fee to start
            </span>
            <span className="chip chip-on-dark">
              <Check size={14} /> Live in 24 hours
            </span>
            <span className="chip chip-on-dark">
              <Check size={14} /> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- PERKS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--gutter-lg)' }}>
            <span className="eyebrow">Why list on GymPeek</span>
            <h2 className="headline-xl" style={{ marginTop: 6 }}>
              Everything a member checks before they walk in
            </h2>
          </div>

          <div className="perks-grid">
            {perks.map((p) => (
              <article className="card card-hover feature-card" key={p.title}>
                <span className="feature-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PLANS ---------------- */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--gutter-lg)' }}>
            <span className="eyebrow">Simple pricing</span>
            <h2 className="headline-xl" style={{ marginTop: 6 }}>
              Pick a plan
            </h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Start free, upgrade when you want more visibility.
            </p>
          </div>

          <div className="plans-grid">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`card card-pad plan-card${p.highlight ? ' plan-highlight' : ''}`}
              >
                {p.highlight && <span className="plan-flag">Most popular</span>}
                <h3 className="headline-sm">{p.name}</h3>
                <div className="plan-price">
                  <strong>{p.price}</strong>
                  <span>{p.period}</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={15} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn btn-block ${p.highlight ? 'btn-primary' : 'btn-glass'}`}
                  href="#list-form"
                >
                  {p.price === 'Free' ? 'List for free' : 'Choose plan'}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FORM ---------------- */}
      <section className="section" id="list-form">
        <div className="container">
          <div className="list-form-layout">
            <div>
              <span className="eyebrow">Get listed</span>
              <h2 className="headline-xl" style={{ marginTop: 6 }}>
                Tell us about your gym
              </h2>
              <p className="muted" style={{ marginTop: 12 }}>
                Fill this in and our onboarding team will call to verify your details, collect
                photos, and publish your page. Most gyms are live within 24 hours.
              </p>

              <ul className="list-checklist">
                <li>
                  <Check size={16} /> We photograph your floor if you don&rsquo;t have photos yet.
                </li>
                <li>
                  <Check size={16} /> You approve every rate and detail before it goes public.
                </li>
                <li>
                  <Check size={16} /> Update your prices any time, free of charge.
                </li>
                <li>
                  <Check size={16} /> Pay Mobile Money or bank transfer for paid plans.
                </li>
              </ul>

              <div className="card card-pad" style={{ marginTop: 'var(--gutter)' }}>
                <span className="channel-label">Prefer to talk?</span>
                <p className="headline-sm" style={{ marginTop: 6 }}>
                  WhatsApp +233 24 123 4567
                </p>
                <p className="body-sm muted">Mon–Sat, 8:00 AM – 6:00 PM GMT</p>
              </div>
            </div>

            <article className="card card-pad">
              {submitted ? (
                <div className="form-done">
                  <span className="feature-icon green">
                    <Check size={22} />
                  </span>
                  <h3 className="headline-md">Request received</h3>
                  <p className="muted">
                    Thanks for reaching out. Our onboarding team will contact you within 24 hours
                    to verify and publish your listing.
                  </p>
                  <Link to="/gyms" className="btn btn-primary">
                    Browse existing listings <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form className="contact-form stack-md" onSubmit={submit}>
                  <div className="field">
                    <label htmlFor="gym-name">Gym name</label>
                    <input id="gym-name" name="gymName" placeholder="e.g. Pulse Fitness Hub" required />
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="city">City</label>
                      <select id="city" name="city" defaultValue="Accra">
                        <option>Accra</option>
                        <option>Kumasi</option>
                        <option>Takoradi</option>
                        <option>Tamale</option>
                        <option>Tema</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="area">Area / neighborhood</label>
                      <input id="area" name="area" placeholder="e.g. East Legon" required />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="address">Street address &amp; landmark</label>
                    <input
                      id="address"
                      name="address"
                      placeholder="Boundary Road, near A&C Mall"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="contact-name">Contact person</label>
                      <input id="contact-name" name="contactName" placeholder="Full name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" placeholder="+233 24 000 0000" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="monthly">Monthly rate (GHC)</label>
                      <input id="monthly" name="monthly" type="number" min={0} placeholder="180" required />
                    </div>
                    <div className="field">
                      <label htmlFor="gym-type">Gym type</label>
                      <select id="gym-type" name="gymType" defaultValue="Weightlifting / Strength">
                        <option>Weightlifting / Strength</option>
                        <option>CrossFit &amp; HIIT</option>
                        <option>Boxing &amp; Combat</option>
                        <option>Luxury / Wellness</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="notes">Anything else?</label>
                    <textarea
                      id="notes"
                      name="notes"
                      placeholder="Opening hours, facilities, membership tiers…"
                    />
                    <span className="field-hint">Photos are collected during onboarding.</span>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Submit listing request <ArrowRight size={16} />
                  </button>
                  <p className="body-sm muted text-center">
                    Free to list • No card required • You approve everything before it goes live
                  </p>
                </form>
              )}
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
