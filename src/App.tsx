import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { WhyNavoi } from './components/WhyNavoi'
import { Sectors } from './components/Sectors'
import { Projects } from './components/Projects'
import { FreeZone } from './components/FreeZone'
import { Incentives } from './components/Incentives'
import { Process } from './components/Process'
import { Opportunities } from './components/Opportunities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyNavoi />
        <Sectors />
        <Projects />
        <FreeZone />
        <Incentives />
        <Process />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
