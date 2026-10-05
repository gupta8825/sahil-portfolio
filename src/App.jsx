import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Education from './components/Education'
import Training from './components/Training'
import Opportunities from './components/Opportunities'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Education />
        <Training />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
