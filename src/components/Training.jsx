import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaEye, FaDownload, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

function Training() {
  const [openFile, setOpenFile] = useState(null)

  useEffect(() => {
    if (!openFile) return
    const onKey = (e) => e.key === 'Escape' && setOpenFile(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openFile])

  return (
    <section id="training">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Certifications &amp; Training</p>
          <h2 className="section-title">Certifications &amp; professional training</h2>
        </motion.div>
        <div className="timeline">
          {portfolioData.training.map((t) => (
            <motion.div
              className="card"
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>{t.title}</h3>
              <p className="meta" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 12 }}>
                {t.role} · {t.location} · {t.period}
              </p>
              <ul style={{ color: 'var(--muted)', paddingLeft: 18, fontSize: '0.93rem' }}>
                {t.points.map((pt) => <li key={pt} style={{ marginBottom: 6 }}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}

          {portfolioData.certifications.map((c) => (
            <motion.div
              className="card"
              key={c.certificateId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>
                <FaCertificate style={{ color: 'var(--accent)', marginRight: 8, verticalAlign: '-2px' }} aria-hidden="true" />
                {c.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 4 }}>
                {c.provider} · Issued by {c.issuedBy} · {c.date}
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 16 }}>
                Course code: {c.courseCode} · Certificate ID: {c.certificateId}
              </p>
              <div className="resume-actions">
                <button className="btn btn-primary" onClick={() => setOpenFile(c)}>
                  <FaEye /> View Certificate
                </button>
                <a className="btn btn-outline" href={c.file} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Open in New Tab
                </a>
                <a className="btn btn-outline" href={c.file} download="IBM-Python-101-Data-Science-Certificate.pdf">
                  <FaDownload /> Download Certificate
                </a>
                <a className="btn btn-outline" href={c.verifyUrl} target="_blank" rel="noreferrer">
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {openFile && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenFile(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`${openFile.title} certificate preview`}
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
                  <h3>{openFile.title} — Certificate</h3>
                  <button className="modal-close" onClick={() => setOpenFile(null)} aria-label="Close certificate preview">
                    <FaTimes size={18} />
                  </button>
                </div>
                <div className="modal-body">
                  <iframe title={`${openFile.title} certificate PDF`} src={openFile.file} />
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

export default Training
