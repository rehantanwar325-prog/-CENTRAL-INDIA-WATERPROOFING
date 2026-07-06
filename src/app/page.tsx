import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Services />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}