import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Wallet, Navigation, Check, Close, Mail, Phone, Pin, ArrowRight, Whatsapp, Instagram, Twitter, Linkedin } from '../components/Icons'
import '../styles/pages.css'

const beforeItems = [
  'Sitting in traffic just to inspect rusty dumbbells or missing squat racks.',
  'Awkward desk conversations discovering unlisted "guest registration fees".',
  'Outdated Instagram pages with zero location pins or active schedules.',
]

const afterItems = [
  'Full spatial visual previews of cardio, free weights, and changing facilities.',
  'Clear Ghana Cedi pricing for daily pass, monthly, and personal training.',
  'One-click Google Maps routing with recognizable local landmarks.',
]

export default function About() {
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="page-hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="container-narrow text-center" style={{ position: 'relative' }}>
          <span className="hero-badge">Our mission &amp; story</span>
          <h1 className="display-hero" style={{ marginTop: 18 }}>
            About GymPeek
          </h1>
          <p className="hero-sub" style={{ margin: '14px auto 0' }}>
            We help people in Ghana find the right gym by showing what it looks like, what it
            costs, and how to get there.
          </p>
          <div className="hero-chip-row">
            <span className="chip chip-on-dark">
              <Pin size={14} /> Accra • Kumasi • Takoradi • Tema
            </span>
            <span className="chip chip-on-dark">
              <Eye size={14} /> Actual floor views
            </span>
            <span className="chip chip-on-dark">
              <Wallet size={14} /> Upfront Cedi rates
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- CHALLENGE ---------------- */}
      <section className="section">
        <div className="container-narrow">
          <article className="card card-pad challenge-card">
            <div className="challenge-head">
              <div>
                <span className="eyebrow">The challenge in Ghana</span>
                <h2 className="headline-xl" style={{ marginTop: 10 }}>
                  Finding a good workout space shouldn&rsquo;t be a mystery.
                </h2>
              </div>
              <span className="feature-icon challenge-icon">
                <Pin size={20} />
              </span>
            </div>

            <p className="muted" style={{ marginTop: 16 }}>
              Gyms across Accra, Kumasi, and beyond are often hard to discover online. Too often,
              people travel across town in traffic only to find outdated equipment, crowded floors,
              or unexpected walk-in rates that weren&rsquo;t posted anywhere. You shouldn&rsquo;t
              have to show up in gym clothes just to find out what membership costs or what the
              weights look like.
            </p>

            <div className="compare-grid">
              <div className="compare-box compare-before">
                <h3 className="headline-sm">
                  <Close size={17} /> Before GymPeek
                </h3>
                <ul>
                  {beforeItems.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="compare-box compare-after">
                <h3 className="headline-sm">
                  <Check size={17} /> With GymPeek
                </h3>
                <ul>
                  {afterItems.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--gutter-lg)' }}>
            <span className="eyebrow">The core experience</span>
            <h2 className="headline-xl" style={{ marginTop: 6 }}>
              What we do
            </h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Three clear answers before you step foot out the door.
            </p>
          </div>

          <div className="benefits-grid">
            <article className="card card-hover feature-card">
              <span className="feature-icon">
                <Eye size={20} />
              </span>
              <h3>See inside</h3>
              <p>
                High-resolution photo galleries of the actual workout floor, free weights, cardio
                deck, and locker rooms.
              </p>
              <Link to="/gyms" className="feature-link">
                Inspect equipment <ArrowRight size={15} />
              </Link>
            </article>

            <article className="card card-hover feature-card">
              <span className="feature-icon navy">
                <Wallet size={20} />
              </span>
              <h3>Know the price</h3>
              <p>
                Transparent daily, weekly, and monthly rates with zero surprise desk fees or hidden
                charges.
              </p>
              <Link to="/gyms" className="feature-link">
                View sample fees <ArrowRight size={15} />
              </Link>
            </article>

            <article className="card card-hover feature-card">
              <span className="feature-icon green">
                <Navigation size={20} />
              </span>
              <h3>Get directions</h3>
              <p>
                Accurate Google Maps directions and landmark references tailored for Ghanaian roads
                and neighborhoods.
              </p>
              <Link to="/gyms" className="feature-link">
                Route navigation <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ marginBottom: 'var(--gutter-lg)' }}>
            <span className="eyebrow">Get in touch</span>
            <h2 className="headline-xl" style={{ marginTop: 6 }}>
              Contact us
            </h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Have questions about a listing, neighborhood coverage, or listing a gym?
            </p>
          </div>

          <div className="contact-grid">
            <article className="card card-pad">
              <h3 className="headline-md">Send us a direct note</h3>
              <p className="body-sm muted" style={{ marginTop: 6, marginBottom: 18 }}>
                We review inquiries across Ghana daily.
              </p>

              {sent && (
                <div className="form-success">
                  <Check size={16} /> Thanks — your message is queued. We reply within 24 hours.
                </div>
              )}

              <form className="contact-form stack-md" onSubmit={submit}>
                <div className="field">
                  <label htmlFor="fullname">Full name</label>
                  <input id="fullname" name="fullname" placeholder="e.g. Kwame Mensah" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="kwame@example.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="topic">Subject / topic</label>
                  <input id="topic" name="topic" placeholder="General question" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us which gym or area you are inquiring about…"
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            </article>

            <div className="stack-lg">
              <article className="card card-pad">
                <h3 className="headline-md" style={{ marginBottom: 16 }}>
                  Direct contact channels
                </h3>
                <ul className="contact-channels">
                  <li>
                    <span className="channel-icon">
                      <Mail size={16} />
                    </span>
                    <div>
                      <span className="channel-label">Direct email</span>
                      <a href="mailto:hello@gympeek.com">hello@gympeek.com</a>
                    </div>
                  </li>
                  <li>
                    <span className="channel-icon">
                      <Phone size={16} />
                    </span>
                    <div>
                      <span className="channel-label">WhatsApp support</span>
                      <a href="https://wa.me/233241234567" target="_blank" rel="noreferrer">
                        +233 24 123 4567
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="channel-icon">
                      <Pin size={16} />
                    </span>
                    <div>
                      <span className="channel-label">Location</span>
                      <span>Accra, Ghana (East Legon)</span>
                    </div>
                  </li>
                </ul>

                <div className="channel-social">
                  <span className="channel-label">Connect with us</span>
                  <div className="chip-row">
                    <a className="chip" href="https://x.com" target="_blank" rel="noreferrer">
                      <Twitter size={14} /> X / Twitter
                    </a>
                    <a className="chip" href="https://instagram.com" target="_blank" rel="noreferrer">
                      <Instagram size={14} /> Instagram
                    </a>
                    <a className="chip" href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </article>

              <article className="card card-pad owner-promo">
                <span className="feature-icon navy">
                  <Whatsapp size={18} />
                </span>
                <div>
                  <h3 className="headline-sm">Are you a gym manager?</h3>
                  <p className="body-sm muted">
                    You can list your facility directly. Showcase your equipment and membership
                    tiers to active gym-goers.
                  </p>
                </div>
                <Link to="/add-your-gym" className="btn btn-primary btn-block">
                  Add your gym profile <ArrowRight size={16} />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
