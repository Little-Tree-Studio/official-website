import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Services from '../sections/Services'
import Team from '../sections/Team'
import SubStudios from '../sections/SubStudios'
import Footer from '../sections/Footer'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: '小树工作室 - 创新软件，自由创造',
    description:
      '小树工作室（Little Tree Studio）—— 创新软件，自由创造。相信技术应该让生活更美好，致力于开发实用且有趣的软件产品，包括小树壁纸、MineLauncher、小树时钟、赛博玻璃等。',
    path: '/',
    lang: 'zh',
  })
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
