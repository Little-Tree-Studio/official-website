import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { Link } from 'react-router'

const links = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '产品', href: '#products' },
  { label: '服务', href: '#services' },
  { label: '团队', href: '#team' },
  { label: '子工作室', href: '#substudios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 py-3.5 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/brand/favicon.png" alt="小树工作室" className="h-8 w-auto" />
          <span className="flex items-baseline gap-3">
            <span className="font-serif-cn text-xl font-bold tracking-wide">小树工作室</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Xiaoshu Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/brand"
            className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            品牌
          </Link>

          {/* 语言切换 */}
          <div className="flex items-center gap-1 rounded-full border border-border px-1 py-1 text-xs font-medium">
            <span className="flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-background">
              <Globe className="h-3 w-3" /> 中
            </span>
            <Link
              to="/en"
              className="rounded-full px-3 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              EN
            </Link>
          </div>

          <a
            href="#products"
            className="rounded-md border border-foreground/80 px-5 py-2 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
          >
            探索产品
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换菜单"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 overflow-hidden rounded-lg border border-border bg-background md:hidden"
          >
            <div className="flex flex-col p-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/brand"
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                品牌
              </Link>
              <Link
                to="/en"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm text-foreground"
              >
                <Globe className="h-4 w-4" /> English Version
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
