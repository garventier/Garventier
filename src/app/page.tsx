
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Framework from '@/components/Framework'
import Insights from '@/components/Insights'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Framework />
      <Insights />
      <Footer />
    </main>
  )
}
