import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo, Menu, User, Close, ArrowRight } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gyms', label: 'Browse Gyms' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand" aria-label="GymPeek home">
            <Logo size={32} />
            <span>GymPeek</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <Link to="/add-your-gym" className="btn btn-primary btn-sm nav-cta">
              Add your gym <ArrowRight size={15} />
            </Link>
            <span className="nav-avatar" aria-hidden>
              <User size={18} />
            </span>
            <button
              className="nav-burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="nav-mobile-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/add-your-gym" className="nav-link">
            Add your gym
          </NavLink>
        </div>
      )}
    </>
  )
}
