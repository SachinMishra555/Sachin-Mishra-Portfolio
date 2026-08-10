import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Process from './components/Process'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import useScrollReveal from './hooks/useScrollReveal'
import useSmoothScroll from './hooks/useSmoothScroll'

export default function App() {
  useScrollReveal()
  useSmoothScroll()

  return (
    <>
      <Loader />
      <CustomCursor />

      {/* Navbar + Hero share the hero-bg image */}
      <div
        className="relative overflow-hidden rounded-xl mt-5 max-w-[98%] mx-auto"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        <Navbar />
        <Hero />
      </div>

      <main>
        <About />
        <Work />
        <Process />
        <Skills />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
