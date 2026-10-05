import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>© {YEAR} {portfolioData.name}. Built with React & Vite.</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
