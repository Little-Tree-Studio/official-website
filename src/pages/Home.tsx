import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Products from '@/sections/Products';
import About from '@/sections/About';
import TechStack from '@/sections/TechStack';
import Team from '@/sections/Team';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Products />
        <About />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
