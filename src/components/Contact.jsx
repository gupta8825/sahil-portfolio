import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-sub">The form opens your email app — no backend, no fake "message sent".</p>
        </motion.div>
        <div className="contact-grid">
          <div className="contact-cards">
            <a className="card contact-card" href={`mailto:${portfolioData.email}`}>
              <FaEnvelope size={20} />
              <span><span className="label">Email</span>{portfolioData.email}</span>
            </a>
            <a className="card contact-card" href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}>
              <FaPhone size={18} />
              <span><span className="label">Phone</span>{portfolioData.phone}</span>
            </a>
            <div className="card contact-card">
              <FaMapMarkerAlt size={18} />
              <span><span className="label">Location</span>{portfolioData.location}</span>
            </div>
            <a className="card contact-card" href={portfolioData.github} target="_blank" rel="noreferrer">
              <FaGithub size={20} />
              <span><span className="label">GitHub</span>github.com/gupta8825</span>
            </a>
            <a className="card contact-card" href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
              <span><span className="label">LinkedIn</span>linkedin.com/in/sahil-gupta-744a09302</span>
            </a>
          </div>
          <form className="card" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="btn btn-primary" type="submit">Send via Email</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
