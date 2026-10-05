import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
        </motion.div>
        <div className="timeline">
          {portfolioData.education.map((e) => (
            <motion.div
              className="timeline-item"
              key={e.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>{e.degree}</h3>
              <p className="meta">{e.institution} · {e.location} · {e.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
