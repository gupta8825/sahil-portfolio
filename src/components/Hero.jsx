import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const ROLE_TEXT = 'MERN Stack Full Stack Developer'
const TYPE_MS = 70
const PAUSE_FULL_MS = 1500
const DELETE_MS = 40
const PAUSE_EMPTY_MS = 500

function useTypewriterLoop() {
  const [text, setText] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? ROLE_TEXT
      : '',
  )
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let cancelled = false
    let timer
    const tick = (value, deleting) => {
      if (cancelled) return
      setText(value)
      if (!deleting && value === ROLE_TEXT) {
        timer = setTimeout(() => tick(value.slice(0, -1), true), PAUSE_FULL_MS)
      } else if (deleting && value === '') {
        timer = setTimeout(() => tick(ROLE_TEXT.slice(0, 1), false), PAUSE_EMPTY_MS)
      } else if (deleting) {
        timer = setTimeout(() => tick(value.slice(0, -1), true), DELETE_MS)
      } else {
        timer = setTimeout(() => tick(ROLE_TEXT.slice(0, value.length + 1), false), TYPE_MS)
      }
    }
    timer = setTimeout(() => tick(ROLE_TEXT.slice(0, 1), false), 300)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [])
  return text
}

function Hero() {
  const d = portfolioData
  const typed = useTypewriterLoop()
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-label">Hello, I'm</span>
          <h1>
            {d.name}
            <br />
            <span className="typewriter">
              <span className="sr-only">{ROLE_TEXT}</span>
              <span className="typewriter-ghost" aria-hidden="true">{ROLE_TEXT}</span>
              <span className="typewriter-live" aria-hidden="true">{typed}<span className="typewriter-cursor">|</span></span>
            </span>
          </h1>
          <p className="lead">{d.tagline}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-outline" href={d.resumePath} target="_blank" rel="noreferrer">View Resume</a>
            <a className="btn btn-outline" href={d.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub /> GitHub
            </a>
            <a className="btn btn-outline" href={d.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <pre aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<span class="k">const</span> developer = {
  name: <span class="s">"Sahil Gupta"</span>,
  role: <span class="s">"MERN Stack Developer"</span>,
  stack: [<span class="s">"MongoDB"</span>, <span class="s">"Express"</span>,
          <span class="s">"React"</span>, <span class="s">"Node.js"</span>],
  <span class="fn">build</span>: () => <span class="s">"clean, scalable apps"</span>,
}` }} />
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
