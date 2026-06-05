import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}