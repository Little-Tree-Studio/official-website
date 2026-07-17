import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, Globe, Github, BookOpen, KeyRound, Menu, X, Sprout, LineChart } from 'lucide-react'

const serif = "font-['EB_Garamond'] italic"

const substudios = [
  {
    name: 'LTS Foundation',
    full: 'Little Tree Studio Foundation',
    url: 'https://foundation.zsxiaoshu.cn/',
    icon: Sprout,
    motto: 'Tech for good, growing like a tree',
    desc: 'A tech foundation funded by Chuangda Quant, dedicated to the open-source ecosystem — sponsoring projects, subsidizing the studio and partnering with other foundations.',
    tags: ['OSS Grants', 'Studio Subsidy', 'Foundation'],
  },
  {
    name: 'Chuangda Quant',
    full: 'Quantitative Trading Lab',
    url: 'https://quant.zsxiaoshu.cn/',
    icon: LineChart,
    motto: 'Quantifying the unknown',
    desc: 'A quantitative trading research collective focused on risk models, HFT and backtesting — donating 50% of revenue to the LTS Foundation to support open-source quant tools.',
    tags: ['Risk Models', 'HFT', 'Backtesting'],
  },
]

const products = [
  {
    name: 'LT Wallpaper',
    tag: 'Desktop',
    icon: '/images/wallpaper-icon.png',
    url: 'https://wp.zsxiaoshu.cn',
    desc: 'A smart wallpaper manager with multi-source fetching, AI categorization and auto-rotation.',
  },
  {
    name: 'MineLauncher',
    tag: 'Gaming',
    icon: '/images/minecraft-icon.png',
    url: 'https://ml.zsxiaoshu.cn',
    desc: 'An open-source Minecraft launcher with multi-version support and fast startup.',
  },
  {
    name: 'LT Video Compressor',
    tag: 'Utility',
    icon: '/images/cyberglass-icon.png',
    url: 'https://github.com/shu-shu-1/glass',
    desc: 'Compress videos dramatically while keeping quality, with simple drag-and-drop.',
  },
  {
    name: 'Cyber Glass',
    tag: 'Creative',
    icon: '/images/clock-icon.png',
    url: 'https://clock.zsxiaoshu.cn',
    desc: 'A delightfully “useless” creative app that brings a moment of calm to a busy day.',
  },
]

const team = [
  { name: 'Xiaoshu', role: 'Founder & Lead', avatar: '/images/team/avatar-xiaoshu.jpg' },
  { name: 'Kyle', role: 'Engineering', avatar: '/images/team/avatar-kyle.jpg' },
  { name: 'wzr', role: 'Tools / AI / Design', avatar: '/images/team/avatar-wzr.jpg' },
  { name: 'yinuo', role: 'Internal AI & Tools', avatar: '/images/team/avatar-yinuo.jpg' },
  { name: 'Sophia', role: 'Art & Marketing', avatar: '/images/team/avatar-sophia.jpg' },
  { name: 'quanlan', role: 'Content', avatar: '/images/team/avatar-quanlan.jpg' },
  { name: 'Jellish', role: 'Music', avatar: '/images/team/avatar-jellish.jpg' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.6, delay },
})

function EnNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'border-b border-white/10 bg-[#06090a]/90 py-3 backdrop-blur-md' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/images/brand/logo-light.png" alt="Little Tree Studio" className="h-8 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-white">Little Tree Studio</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#about" className="transition-colors hover:text-white">Studio</a>
          <a href="#team" className="transition-colors hover:text-white">Team</a>
          <a href="#substudios" className="transition-colors hover:text-white">Sub-studios</a>
          <Link to="/brand?lang=en" className="transition-colors hover:text-white">Brand</Link>
          <div className="flex items-center gap-1 rounded-full border border-white/15 px-1 py-1 text-xs">
            <Link to="/" className="rounded-full px-3 py-1 text-white/50 transition-colors hover:text-white">中文</Link>
            <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-black">
              <Globe className="h-3 w-3" /> EN
            </span>
          </div>
          <a
            href="#products"
            className="rounded-md bg-emerald-400 px-4 py-2 font-medium text-emerald-950 transition-colors hover:bg-emerald-300"
          >
            Get the apps
          </a>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#06090a] px-6 py-4 md:hidden">
          {['Products', 'About', 'Team'].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-white/70">{l}</a>
          ))}
          <Link to="/brand?lang=en" onClick={() => setOpen(false)} className="block py-2.5 text-sm text-white/70">Brand</Link>
          <Link to="/" onClick={() => setOpen(false)} className="block py-2.5 text-sm text-emerald-300">中文版本</Link>
        </div>
      )}
    </header>
  )
}

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-[#06090a] font-['Space_Grotesk'] text-white antialiased">
      <EnNav />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p {...fade(0)} className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300 ${serif}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Independent software studio
          </motion.p>
          <motion.h1 {...fade(0.1)} className="mt-7 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Software, made <span className={`${serif} font-medium text-emerald-300`}>with care.</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            We believe technology should make life better. Little Tree Studio builds practical yet
            delightful apps — open, modern and cross-platform.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#products" className="group inline-flex items-center gap-2 rounded-md bg-emerald-400 px-7 py-3.5 font-semibold text-emerald-950 transition-colors hover:bg-emerald-300">
              Explore products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://github.com/Little-Tree-Studio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          <motion.div {...fade(0.45)} className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 md:max-w-lg">
            {[['6', 'Team members'], ['4', 'Core products'], ['100%', 'Open source']].map(([v, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-emerald-300 md:text-4xl">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/45">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fade(0)}>
            <p className={`text-sm text-emerald-300 ${serif}`}>Our work</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Things we’ve <span className={`${serif} font-medium text-emerald-300`}>built</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {products.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fade(i * 0.07)}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#0b1110] p-2">
                    <img src={p.icon} alt={p.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/50">{p.tag}</span>
                </div>
                <h3 className="mt-6 flex items-center gap-2 text-xl font-semibold">
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section id="about" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2">
            <motion.div {...fade(0)}>
              <p className={`text-sm text-emerald-300 ${serif}`}>The studio</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Practical, and a little <span className={`${serif} font-medium text-emerald-300`}>playful.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/60">
                Guided by our motto “create freely, craft with care”, Little Tree Studio focuses on
                high-quality, personalized software — especially desktop customization, gaming
                experience and productivity.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Open & transparent', 'Open-source product strategy you can inspect.'],
                ['Modern stack', 'Modern tech that keeps evolving.'],
                ['Experience first', 'Interfaces designed to be used and loved.'],
                ['Cross-platform', 'Runs smoothly wherever you are.'],
              ].map(([t, d], i) => (
                <motion.div key={t} {...fade(i * 0.07)} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-emerald-300">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fade(0)}>
            <p className={`text-sm text-emerald-300 ${serif}`}>Team</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              The people <span className={`${serif} font-medium text-emerald-300`}>behind it</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((m, i) => (
              <motion.div key={m.name} {...fade(i * 0.06)} className="group text-center">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-white/15 transition-transform duration-300 group-hover:scale-105">
                  <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs text-emerald-300/80">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-STUDIOS */}
      <section id="substudios" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fade(0)}>
            <p className={`text-sm text-emerald-300 ${serif}`}>Sub-studios</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              One tree, <span className={`${serif} font-medium text-emerald-300`}>a whole grove</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/60">
              Two sub-brands growing around Little Tree Studio — one rooted in open-source
              philanthropy, one reaching into quantitative technology.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {substudios.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fade(i * 0.1)}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <span className={`text-2xl text-emerald-400/70 ${serif}`}>
                    {i === 0 ? 'ⅰ' : 'ⅱ'}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-6 flex flex-wrap items-baseline gap-x-3 text-2xl font-semibold">
                  {s.name}
                  <span className={`text-sm font-normal text-white/45 ${serif}`}>{s.full}</span>
                </h3>
                <p className={`mt-3 text-base text-emerald-300 ${serif}`}>{s.motto}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-white/10 pt-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-[0.15em] text-white/45">
                      <span className="mr-1.5 text-emerald-400/60">·</span>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-emerald-300">
                  Visit site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img src="/images/brand/logo-color.png" alt="logo" className="h-9 w-auto" />
              <div>
                <div className="font-semibold">Little Tree Studio</div>
                <div className="text-xs text-white/45">Create freely, craft with care.</div>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Github, url: 'https://github.com/Little-Tree-Studio', label: 'GitHub' },
                { icon: BookOpen, url: 'https://docs.zsxiaoshu.cn', label: 'Docs' },
                { icon: KeyRound, url: 'https://auth.zsxiaoshu.cn', label: 'Sign in' },
              ].map((r) => (
                <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" title={r.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-emerald-400 hover:text-emerald-300">
                  <r.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
            <span>© 2026 Little Tree Studio. All rights reserved.</span>
            <Link to="/brand?lang=en" className="transition-colors hover:text-emerald-300">Brand assets & license →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
