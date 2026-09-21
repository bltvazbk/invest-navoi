import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Government } from './components/Government'
import { WhyNavoi } from './components/WhyNavoi'
import { Sectors } from './components/Sectors'
import { Projects } from './components/Projects'
import { InteractiveMap } from './components/InteractiveMap'
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
        <Government />
        <WhyNavoi />
        <Sectors />
        <Projects />
        <InteractiveMap />
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
