import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

function Opportunities() {
  return (
    <section id="opportunities">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label" style={{ marginBottom: 10 }}>Open to Opportunities</p>
          <h2>Have a role in mind? Let's talk.</h2>
          <p>
            I'm open to full-time opportunities, internships, and freelance work.
            If you're looking for a MERN stack developer who cares about clean code and good UX, I'd love to connect.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${portfolioData.email}`}>Email Me</a>
            <a className="btn btn-outline" href={portfolioData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Opportunities
