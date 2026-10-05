import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

function About() {
  const { about } = portfolioData
  return (
    <section id="about">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>
        <div className="about-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p><strong>{about.intro}</strong></p>
            <p>{about.body}</p>
          </motion.div>
          <motion.div className="highlights" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            {about.highlights.map((h) => (
              <div className="highlight-item" key={h}>{h}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
