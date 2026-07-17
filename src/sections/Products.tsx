import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const products = [
  {
    num: '01',
    name: 'LT壁纸',
    en: 'LT Wallpaper',
    icon: '/images/wallpaper-icon.png',
    url: 'https://wp.zsxiaoshu.cn',
    desc: '智能壁纸管理软件，多源壁纸获取，AI智能分类，自动更换机制，跨平台支持。',
    tags: ['AI智能', '跨平台', '开源免费'],
  },
  {
    num: '02',
    name: 'MineLauncher',
    en: 'Minecraft Launcher',
    icon: '/images/minecraft-icon.png',
    url: 'https://ml.zsxiaoshu.cn',
    desc: '专业的开源 Minecraft 游戏启动器，多版本支持，智能模组管理，极速启动体验。',
    tags: ['多版本', '模组管理', '极速启动'],
  },
  {
    num: '03',
    name: 'LT视频压缩',
    en: 'LT Video Compressor',
    icon: '/images/cyberglass-icon.png',
    url: 'https://github.com/shu-shu-1/glass',
    desc: '高效的视频压缩软件，在保持画质的同时大幅减小文件大小，简单拖拽操作。',
    tags: ['高效压缩', '保持画质', '简单易用'],
  },
  {
    num: '04',
    name: '赛博玻璃',
    en: 'Cyber Glass',
    icon: '/images/clock-icon.png',
    url: 'https://clock.zsxiaoshu.cn',
    desc: '创意互动应用，一个非常无聊的软件……但也许正是这份无聊，能在繁忙的生活中给你带来片刻的宁静与思考。',
    tags: ['创意互动', '情绪价值', '艺术表达'],
  },
]

export default function Products() {
  return (
    <section id="products" className="border-t border-border bg-card/50 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="02"
          eyebrow="Products / 核心产品"
          title="每一款产品，都值得用心打磨"
          italic="crafted with care"
          description="从桌面美化到游戏体验，从效率工具到情绪价值——我们用代码回应真实的需求。"
        />

        <div className="mt-16">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid gap-5 border-b border-border py-9 transition-colors first:border-t hover:bg-background/70 md:grid-cols-[88px_1fr_auto] md:items-center md:gap-8"
            >
              <div className="flex items-center gap-5 md:gap-0">
                <span className="font-serif-en w-9 shrink-0 text-xl text-muted-foreground/70 transition-colors group-hover:text-primary md:hidden">
                  {p.num}
                </span>
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-background p-2 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md md:h-20 md:w-20">
                  <img
                    src={p.icon}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-serif-en hidden w-9 text-xl text-muted-foreground/70 md:inline">
                    {p.num}
                  </span>
                  <h3 className="font-serif-cn text-2xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                    {p.name}
                  </h3>
                  <span className="font-serif-en text-sm text-muted-foreground">{p.en}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-[0.15em] text-muted-foreground/80"
                    >
                      <span className="mr-1.5 text-primary/60">·</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:flex">
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
