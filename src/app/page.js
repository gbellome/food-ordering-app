import About from './Components/Layout/About'
import Contact from './Components/Layout/Contact'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import Hero from './Components/Layout/Hero'
import HomeMenu from './Components/Layout/HomeMenu'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
