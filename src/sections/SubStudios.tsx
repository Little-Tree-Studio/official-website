import { motion } from 'framer-motion'
import { ArrowUpRight, Sprout, LineChart, Music2 } from 'lucide-react'

const studios = [
  {
    num: 'ⅰ',
    name: '小树工作室基金会',
    en: 'Little Tree Studio Foundation',
    url: 'https://foundation.zsxiaoshu.cn/',
    icon: Sprout,
    motto: '科技向善，如树生长',
    desc: '由创达股科资助成立，专注于开源生态建设的科技基金会。致力于开源项目赞助、工作室补贴与基金会合作，让开源之火燃烧得更旺。',
    tags: ['开源赞助', '工作室补贴', '基金会合作'],
  },
  {
    num: 'ⅱ',
    name: '创达股科',
    en: 'Chuangda Quant',
    url: 'https://quant.zsxiaoshu.cn/',
    icon: LineChart,
    motto: '量化未知边界',
    desc: '量化交易科技研究员组织，深耕风控模型、高频交易与回测系统。将 50% 的收入捐赠至小树工作室基金会，支持开源量化工具与教育普及。',
    tags: ['风控模型', '高频交易', '回测系统'],
  },
  {
    num: 'ⅲ',
    name: '小树音乐',
    en: 'Little Tree Mix',
    url: 'https://music.zsxiaoshu.cn/',
    icon: Music2,
    motto: '让灵感被听见',
    desc: '专注于原创音乐、配乐与声音设计的音乐工作室，用旋律记录灵感，为产品、影像与品牌创作富有感染力的声音体验。',
    tags: ['原创音乐', '影视配乐', '声音设计'],
  },
]

export default function SubStudios() {
  return (
    <section id="substudios" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="font-serif-en text-lg normal-case tracking-normal text-primary">
              N° 05
            </span>
            <span className="hairline w-10" />
            Sub-studios / 子工作室
          </p>
          <h2 className="font-serif-cn mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            一棵小树，一片森林
            <span className="font-serif-en ml-3 text-3xl font-medium text-muted-foreground md:text-4xl">
              the grove
            </span>
          </h2>
          <p className="mt-5 max-w-2xl leading-loose text-muted-foreground">
            围绕小树工作室生长的子品牌，在开源公益、量化科技与音乐创作中探索更多可能。
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studios.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif-en text-3xl text-primary/60">{s.num}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="font-serif-cn mt-7 flex items-baseline gap-3 text-2xl font-bold">
                {s.name}
                <span className="font-serif-en text-sm font-medium text-muted-foreground">
                  {s.en}
                </span>
              </h3>

              <p className="font-serif-en mt-3 text-base italic text-primary">{s.motto}</p>

              <p className="mt-4 flex-1 text-sm leading-loose text-muted-foreground">{s.desc}</p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-border pt-5">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs uppercase tracking-[0.15em] text-muted-foreground/80">
                    <span className="mr-1.5 text-primary/60">·</span>
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                访问官网
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
