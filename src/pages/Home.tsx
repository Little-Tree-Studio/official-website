import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Services from '../sections/Services'
import Team from '../sections/Team'
import SubStudios from '../sections/SubStudios'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Team />
        <SubStudios />
      </main>
      <Footer />
    </div>
  )
}
