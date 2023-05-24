import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
