import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFilePdf, FaEye, FaDownload, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

function Resume() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="resume">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Resume</p>
          <h2 className="section-title">My resume</h2>
        </motion.div>
        <motion.div
          className="card resume-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tag"><FaFilePdf /> &nbsp;Sahil Gupta — Full Stack Developer</span>
          <p style={{ color: 'var(--muted)', maxWidth: 640 }}>
            Preview my resume directly on this page, open it in a new tab, or download a copy.
          </p>
          <div className="resume-actions">
            <button className="btn btn-primary" onClick={() => setOpen(true)}>
              <FaEye /> View Resume
            </button>
            <a className="btn btn-outline" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Open in New Tab
            </a>
            <a className="btn btn-outline" href={portfolioData.resumePath} download="Sahil-Gupta-Resume.pdf">
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Resume preview"
            >
              <motion.div
                className="modal"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>Sahil Gupta — Resume</h3>
                  <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close resume preview">
                    <FaTimes size={18} />
                  </button>
                </div>
                <div className="modal-body">
                  <iframe title="Sahil Gupta Resume PDF" src={portfolioData.resumePath} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}

export default Resume
