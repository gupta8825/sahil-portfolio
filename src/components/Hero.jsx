import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

function Hero() {
  const d = portfolioData
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
            <span className="grad">{d.role}</span>
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
