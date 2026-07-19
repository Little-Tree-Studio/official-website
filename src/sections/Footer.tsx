import { motion } from 'framer-motion'
import { ArrowUpRight, Github, BookOpen, KeyRound, Sparkles } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '核心产品', href: '#products' },
  { label: '服务', href: '#services' },
  { label: '团队', href: '#team' },
]

const productLinks = [
  { label: '小树壁纸', href: 'https://wp.zsxiaoshu.cn' },
  { label: 'MineLauncher', href: 'https://ml.zsxiaoshu.cn' },
  { label: '赛博玻璃', href: 'https://github.com/shu-shu-1/glass' },
  { label: '小树时钟', href: 'https://clock.zsxiaoshu.cn' },
]

const resourceLinks = [
  { label: 'GitHub 组织', href: 'https://github.com/Little-Tree-Studio', icon: Github },
  { label: '产品文档', href: 'https://docs.zsxiaoshu.cn', icon: BookOpen },
  { label: '统一登录', href: 'https://auth.zsxiaoshu.cn', icon: KeyRound },
  { label: 'AI聚合平台', href: 'https://ai.lianhaotian.com', icon: Sparkles },
]

export default function Footer() {
  return (
    <footer>
      {/* CTA */}
      <div className="border-t border-border py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl px-6 text-center"
        >
          <p className="font-serif-en text-xl text-primary md:text-2xl">Have an idea?</p>
          <h2 className="font-serif-cn mx-auto mt-6 max-w-3xl text-4xl font-black leading-snug md:text-6xl">
            有一个想法？
            <br />
            让我们一起把它变成现实
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-loose text-muted-foreground">
            无论是软件定制开发、网站建设，还是创意设计，小树工作室都期待与你合作。
          </p>
          <a
            href="#services"
            className="group mt-11 inline-flex items-center gap-2.5 rounded-md bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            了解我们的服务
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>

      {/* 主页脚 */}
      <div className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <p className="font-serif-cn text-3xl font-black">小树工作室</p>
              <p className="font-serif-en mt-2 text-sm text-muted-foreground">
                Xiaoshu Studio — est. 2026
              </p>
              <p className="mt-6 max-w-xs text-sm leading-loose text-muted-foreground">
                创新软件，自由创造。相信技术应该让生活更美好，致力于开发实用且有趣的软件产品。
              </p>
              <div className="mt-7 flex gap-3">
                {resourceLinks.map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={r.label}
                    aria-label={r.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <r.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">导航</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-foreground/75 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">产品</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 text-sm text-foreground/75 hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">资源</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-foreground/75 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row">
            <span>© 2026 小树工作室 Xiaoshu Studio. 保留所有权利</span>
            <span className="font-serif-en text-sm">Crafted freely, with care.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
