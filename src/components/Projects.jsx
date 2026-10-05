import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShoppingCart } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const bannerIcons = { robot: <FaRobot size={34} />, store: <FaShoppingCart size={34} /> }

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">Real-world full-stack projects built with the MERN stack.</p>
        </motion.div>
        <div className="projects-grid">
          {portfolioData.projects.map((p, i) => (
            <motion.article
              className="card project-card"
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="project-banner" aria-hidden="true">
                {bannerIcons[p.icon] || <FaRobot size={34} />}
              </div>
              <div className="project-head">
                <h3>{p.title}</h3>
                <span className="project-stack">{p.stack} · {p.date}</span>
              </div>
              <p>{p.description}</p>

              {p.frontend && p.backend ? (
                <div className="fb-split">
                  <div className="fb-block">
                    <span className="fb-label">Frontend</span>
                    <div className="chip-list">
                      {p.frontend.technologies.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                    <div className="project-actions">
                      <a className="btn btn-primary" href={p.frontend.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a className="btn btn-outline" href={p.frontend.github} target="_blank" rel="noreferrer">
                        <FaGithub /> Frontend GitHub
                      </a>
                    </div>
                  </div>
                  <div className="fb-block">
                    <span className="fb-label">Backend</span>
                    <div className="chip-list">
                      {p.backend.technologies.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                    <div className="project-actions">
                      <a className="btn btn-outline" href={p.backend.github} target="_blank" rel="noreferrer">
                        <FaGithub /> Backend GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-actions">
                    {p.live && (
                      <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    <a className="btn btn-outline" href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    {p.githubBackend && (
                      <a className="btn btn-outline" href={p.githubBackend} target="_blank" rel="noreferrer">
                        <FaGithub /> Backend
                      </a>
                    )}
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
