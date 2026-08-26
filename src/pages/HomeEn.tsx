import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  BookOpen,
  KeyRound,
  Sparkles,
  Menu,
  X,
  Sprout,
  LineChart,
  Music2,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const serif = "font-['Instrument_Serif'] italic font-normal"
const mono = "font-['JetBrains_Mono']"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.75, delay, ease: EASE },
})

const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E"

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
  {
    name: 'Little Tree Mix',
    full: '小树音乐',
    url: 'https://mix.zsxiaoshu.cn/',
    icon: Music2,
    motto: 'Let inspiration be heard',
    desc: 'A music studio focused on original music, scoring and sound design — shaping expressive sonic experiences for products, films and brands.',
    tags: ['Original Music', 'Scoring', 'Sound Design'],
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
    name: 'Little Tree Clock',
    tag: 'Utility',
    icon: '/images/clock-icon.png',
    url: 'https://clock.zsxiaoshu.cn',
    desc: 'A feature-rich, highly customizable desktop clock — pomodoro focus timer, advanced alarms, world clock and a plugin system.',
  },
  {
    name: 'Cyber Glass',
    tag: 'Creative',
    icon: '/images/cyberglass-icon.png',
    url: 'https://github.com/shu-shu-1/glass',
    desc: 'A delightfully “useless” creative app that brings a moment of calm to a busy day.',
  },
]

const team = [
  { name: 'Xiaoshu', role: 'Founder & Lead', avatar: '/images/team/avatar-xiaoshu.jpg' },
  { name: 'Kyle', role: 'Dev & Performance', avatar: '/images/team/avatar-kyle.jpg' },
  { name: 'wzr', role: 'Tools / AI / Design', avatar: '/images/team/avatar-wzr.jpg' },
  { name: 'yinuo', role: 'Internal AI & Tools', avatar: '/images/team/avatar-yinuo.jpg' },
  { name: 'Sophia', role: 'Art & Marketing', avatar: '/images/team/avatar-sophia.jpg' },
  { name: 'quanlan', role: 'Copywriting', avatar: '/images/team/avatar-quanlan.jpg' },
  { name: 'Jellish', role: 'Music', avatar: '/images/team/avatar-jellish.jpg' },
]

const marqueeItems = [
  'Open Source',
  'Desktop',
  'Gaming',
  'Productivity',
  'Cross-Platform',
  'Made with care',
]

function EnNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const links = [
    { label: 'Products', href: '#products' },
    { label: 'Studio', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Sub-studios', href: '#substudios' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-[#0A0E0D]/85 py-3 backdrop-blur-md'
          : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/images/brand/logo-light.png" alt="Little Tree Studio" className="h-7 w-auto" />
          <span className="text-[15px] font-medium tracking-tight text-white">
            Little Tree Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`${mono} text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/brand?lang=en"
            className={`${mono} text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white`}
          >
            Brand
          </Link>
          <div
            className={`flex items-center gap-2.5 rounded-full border border-white/[0.12] px-3.5 py-1.5 ${mono} text-[11px] uppercase tracking-[0.12em]`}
          >
            <Link to="/" className="text-white/40 transition-colors hover:text-white">
              中文
            </Link>
            <span className="h-2.5 w-px bg-white/20" />
            <span className="text-[#7FE3B8]">EN</span>
          </div>
          <a
            href="#products"
            className="rounded-[3px] bg-[#7FE3B8] px-5 py-2.5 text-[13px] font-semibold text-[#0A0E0D] transition-colors hover:bg-[#97ecc7]"
          >
            Get the apps
          </a>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.08] bg-[#0A0E0D] px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm text-white/70 ${mono} uppercase tracking-[0.15em]`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/brand?lang=en"
            onClick={() => setOpen(false)}
            className={`block py-3 text-sm text-white/70 ${mono} uppercase tracking-[0.15em]`}
          >
            Brand
          </Link>
          <Link to="/" onClick={() => setOpen(false)} className="block py-3 text-sm text-[#7FE3B8]">
            中文版本
          </Link>
        </div>
      )}
    </header>
  )
}

function SectionHead({
  index,
  label,
  title,
  desc,
}: {
  index: string
  label: string
  title: React.ReactNode
  desc?: string
}) {
  return (
    <div>
      <motion.div {...fade(0)} className="flex items-center gap-5">
        <span className={`${mono} text-[11px] tracking-[0.2em] text-[#7FE3B8]`}>( {index} )</span>
        <span className={`${mono} text-[11px] uppercase tracking-[0.25em] text-white/40`}>
          {label}
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
      </motion.div>
      <motion.h2
        {...fade(0.08)}
        className="mt-9 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-white md:text-6xl"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p {...fade(0.16)} className="mt-6 max-w-xl leading-relaxed text-white/50">
          {desc}
        </motion.p>
      )}
    </div>
  )
}

export default function HomeEn() {
  useSEO({
    title: 'Little Tree Studio - Innovative Software, Free Creation',
    description:
      'Little Tree Studio — innovative software, free creation. We believe technology should make life better, building practical and delightful products like Xiaoshu Wallpaper, MineLauncher, Xiaoshu Clock and CyberGlass.',
    path: '/en',
    lang: 'en',
  })
  return (
    <div className="min-h-screen bg-[#0A0E0D] font-['Space_Grotesk'] text-[#E8EDE9] antialiased">
      {/* film grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <EnNav />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-52">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_55%_55%_at_50%_-10%,rgba(127,227,184,0.08),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div {...fade(0)} className="flex items-center gap-5">
            <span className="h-1.5 w-1.5 bg-[#7FE3B8]" />
            <span className={`${mono} text-[11px] uppercase tracking-[0.28em] text-[#7FE3B8]`}>
              Independent software studio
            </span>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="mt-10 text-[clamp(3.2rem,9vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white"
          >
            Software, made
            <br />
            <span className={`${serif} tracking-[-0.01em] text-[#7FE3B8]`}>with care.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.p {...fade(0.2)} className="max-w-md text-[17px] leading-relaxed text-white/50">
              We believe technology should make life better. Little Tree Studio builds practical
              yet delightful apps — open, modern and cross-platform.
            </motion.p>
            <motion.div {...fade(0.3)} className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2.5 rounded-[3px] bg-[#7FE3B8] px-7 py-3.5 text-[15px] font-semibold text-[#0A0E0D] transition-colors hover:bg-[#97ecc7]"
              >
                Explore products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/Little-Tree-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-[3px] border border-white/[0.14] px-7 py-3.5 text-[15px] font-medium text-white/75 transition-colors hover:border-white/30 hover:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fade(0.45)}
            className="mt-24 grid grid-cols-3 divide-x divide-white/[0.08] border-t border-white/[0.08]"
          >
            {[
              ['07', 'Team members'],
              ['04', 'Core products'],
              ['100%', 'Open source'],
            ].map(([v, l], i) => (
              <div key={l} className={i === 0 ? 'pt-7 pr-6' : 'pt-7 pl-6 md:pl-10'}>
                <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {v}
                </div>
                <div
                  className={`mt-2.5 ${mono} text-[10px] uppercase tracking-[0.22em] text-white/35`}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <div className="overflow-hidden border-y border-white/[0.08] py-5">
        <div className="flex w-max animate-marquee gap-14">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`flex items-center gap-14 ${mono} text-[11px] uppercase tracking-[0.3em] text-white/30`}
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-[#7FE3B8]/60" />
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            index="01"
            label="Products"
            title={
              <>
                Things we’ve <span className={`${serif} text-[#7FE3B8]`}>built.</span>
              </>
            }
          />

          <motion.div {...fade(0.1)} className="mt-16 border-t border-white/[0.08]">
            {products.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 border-b border-white/[0.08] py-7 transition-colors duration-300 hover:bg-white/[0.02] md:grid md:grid-cols-12 md:items-center md:gap-6 md:py-9"
              >
                <div
                  className={`hidden md:col-span-1 md:block ${mono} text-[12px] tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-[#7FE3B8]`}
                >
                  0{i + 1}
                </div>
                <div className="flex items-center gap-5 md:col-span-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-2">
                    <img src={p.icon} alt={p.name} className="h-full w-full object-contain" />
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#7FE3B8] md:text-[1.7rem]">
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/45 md:col-span-4">{p.desc}</p>
                <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                  <span
                    className={`${mono} rounded-full border border-white/[0.12] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/40`}
                  >
                    {p.tag}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-white/40 transition-all duration-300 group-hover:border-[#7FE3B8] group-hover:bg-[#7FE3B8] group-hover:text-[#0A0E0D]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section id="about" className="border-t border-white/[0.08] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            index="02"
            label="Studio"
            title={
              <>
                Practical, and a little <span className={`${serif} text-[#7FE3B8]`}>playful.</span>
              </>
            }
          />

          <div className="mt-16 grid gap-14 lg:grid-cols-2">
            <motion.div {...fade(0.1)}>
              <p className="text-[17px] leading-relaxed text-white/50">
                Guided by our motto “create freely, craft with care”, Little Tree Studio focuses
                on high-quality, personalized software — especially desktop customization, gaming
                experience and productivity.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-white/50">
                Every product is built in the open, designed to be used daily and loved for
                years — not shipped and forgotten.
              </p>
              <p className={`mt-10 ${serif} text-2xl leading-snug text-white/70`}>
                “Create freely, craft with care.”
              </p>
            </motion.div>

            <div>
              {[
                ['Open & transparent', 'Open-source product strategy you can inspect.'],
                ['Modern stack', 'Modern tech that keeps evolving.'],
                ['Experience first', 'Interfaces designed to be used and loved.'],
                ['Cross-platform', 'Runs smoothly wherever you are.'],
              ].map(([t, d], i) => (
                <motion.div
                  key={t}
                  {...fade(i * 0.07)}
                  className="group flex items-baseline gap-6 border-t border-white/[0.08] py-6 last:border-b"
                >
                  <span className={`${mono} text-[11px] tracking-[0.15em] text-white/25`}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white">{t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/45">{d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-t border-white/[0.08] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            index="03"
            label="Team"
            title={
              <>
                The people <span className={`${serif} text-[#7FE3B8]`}>behind it.</span>
              </>
            }
          />

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:grid-cols-7">
            {team.map((m, i) => (
              <motion.div key={m.name} {...fade(i * 0.05)} className="group border-t border-white/[0.08] pt-5">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-white/[0.1]">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">{m.name}</h3>
                <p
                  className={`mt-1.5 ${mono} text-[9px] uppercase leading-relaxed tracking-[0.15em] text-[#7FE3B8]/60`}
                >
                  {m.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-STUDIOS */}
      <section id="substudios" className="border-t border-white/[0.08] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            index="04"
            label="Sub-studios"
            title={
              <>
                One tree, <span className={`${serif} text-[#7FE3B8]`}>a whole grove.</span>
              </>
            }
            desc="Three sub-brands growing around Little Tree Studio — exploring open-source philanthropy, quantitative technology and music creation."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {substudios.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fade(i * 0.1)}
                className="group flex flex-col rounded-[4px] border border-white/[0.08] p-8 transition-colors duration-300 hover:border-[#7FE3B8]/35 hover:bg-white/[0.015] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className={`${mono} text-[11px] tracking-[0.2em] text-white/25`}>
                    ( 0{i + 1} )
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/[0.12] text-[#7FE3B8] transition-colors duration-300 group-hover:border-[#7FE3B8]/50">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mt-9 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {s.name}
                </h3>
                <p className={`mt-2 ${serif} text-lg text-white/40`}>{s.full}</p>
                <p className={`mt-6 ${serif} text-xl text-[#7FE3B8]`}>{s.motto}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/50">{s.desc}</p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.08] pt-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`${mono} text-[10px] uppercase tracking-[0.18em] text-white/35`}
                    >
                      <span className="mr-2 text-[#7FE3B8]/60">·</span>
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className={`mt-8 inline-flex items-center gap-2 ${mono} text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover:text-[#7FE3B8]`}
                >
                  Visit site
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="flex items-center gap-3.5">
              <img src="/images/brand/logo-color.png" alt="logo" className="h-9 w-auto" />
              <div>
                <div className="text-[15px] font-medium text-white">Little Tree Studio</div>
                <div className={`mt-0.5 ${serif} text-sm text-white/40`}>
                  Create freely, craft with care.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {[
                { icon: Github, url: 'https://github.com/Little-Tree-Studio', label: 'GitHub' },
                { icon: BookOpen, url: 'https://docs.zsxiaoshu.cn', label: 'Docs' },
                { icon: KeyRound, url: 'https://auth.zsxiaoshu.cn', label: 'Sign in' },
                { icon: Sparkles, url: 'https://ai.lianhaotian.com', label: 'AI' },
              ].map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 ${mono} text-[11px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white`}
                >
                  <r.icon className="h-3.5 w-3.5 text-white/35 transition-colors group-hover:text-[#7FE3B8]" />
                  {r.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
            <span className={`${mono} text-[10px] uppercase tracking-[0.18em] text-white/30`}>
              © 2026 Little Tree Studio — All rights reserved
            </span>
            <Link
              to="/brand?lang=en"
              className={`${mono} text-[10px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-[#7FE3B8]`}
            >
              Brand assets & license ↗
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
