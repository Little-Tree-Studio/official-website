import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stats = [
  { value: '06', label: '核心团队成员' },
  { value: '04', label: '核心产品' },
  { value: '100%', label: '开源理念' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 背景：超大浅色衬线水印 */}
      <div
        aria-hidden
        className="font-serif-en pointer-events-none absolute -right-10 top-16 select-none text-[26vw] leading-none text-foreground/[0.035] lg:text-[19rem]"
      >
        Studio
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-40 md:pb-28 md:pt-52">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          <span className="hairline w-10" />
          <span className="font-serif-en text-base normal-case tracking-normal text-primary">
            Independent Software Studio
          </span>
          独立软件工作室
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="font-serif-cn mt-10 text-6xl font-black leading-[1.18] tracking-tight md:text-8xl"
        >
          创新软件，
          <br />
          <span className="text-primary">自由创造</span>
          <span className="font-serif-en ml-4 align-top text-2xl font-medium text-muted-foreground md:text-4xl">
            &amp; beyond.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-10 max-w-xl text-base leading-loose text-muted-foreground md:text-lg"
        >
          相信技术应该让生活更美好，
          <br />
          致力于开发实用且有趣的软件产品。
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2.5 rounded-md bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            探索我们的产品
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            了解工作室
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* 底部数据条 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-20 border-t border-border pt-8 md:mt-28"
        >
          <div className="flex flex-wrap gap-x-14 gap-y-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <span className="font-serif-cn text-4xl font-bold text-foreground md:text-5xl">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
