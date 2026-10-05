import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolioData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = portfolioData.navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          Sahil<span>.dev</span>
        </a>
        <button
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {portfolioData.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
