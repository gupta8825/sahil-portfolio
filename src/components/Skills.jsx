import { motion } from 'framer-motion'
import { FaCode, FaLayerGroup, FaTools } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const icons = [<FaCode key="a" />, <FaLayerGroup key="b" />, <FaTools key="c" />]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-sub">A practical toolkit for building full-stack web applications end to end.</p>
        </motion.div>
        <div className="skills-grid">
          {portfolioData.skills.map((group, i) => (
            <motion.div
              className="card skill-card"
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <h3>{icons[i % icons.length]} {group.category}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
