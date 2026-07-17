import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const services = [
  {
    num: 'ⅰ',
    title: '软件开发',
    en: 'Software Development',
    desc: '从创意到实现的全方位软件开发服务，多技术栈支持，包括 Python、C#、Java、C++、React、FastAPI 等。',
    points: ['桌面应用开发', 'Web 应用开发', '移动应用开发', '注重用户体验和代码质量'],
  },
  {
    num: 'ⅱ',
    title: '网站建设',
    en: 'Web Design',
    desc: '帮助客户建立精美的个人网站，独特的设计理念，打造令人印象深刻的用户体验。',
    points: ['现代化 Web 开发技术', '响应式设计', '个人品牌网站', '小型企业官网'],
  },
  {
    num: 'ⅲ',
    title: '创意设计',
    en: 'Creative Design',
    desc: '独特的设计理念，强调用户体验，UI/UX 设计、交互设计、视觉设计服务。',
    points: ['UI/UX 设计', '交互设计', '视觉设计', '现代简约风格'],
  },
]

const techRowA = ['Python', 'JavaScript', 'React', 'FastAPI', 'Java', 'C++', 'C#']
const techRowB = ['Flet', 'HTML5', 'CSS3', 'Android', 'Git', 'Machine Learning', 'AI']

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden border-b border-border first:border-t">
      <div className={`flex shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap py-5 text-sm tracking-[0.2em] text-muted-foreground"
          >
            <span className="px-6">{t}</span>
            <span className="font-serif-en text-primary/50">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          eyebrow="Services / 我们的服务"
          title="从创意到实现，全方位交付"
          italic="idea → product"
          description="软件开发、网站建设、创意设计——三种能力，一个标准：注重体验，打磨细节。"
        />

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group border-t-2 border-foreground/15 pt-8 transition-colors hover:border-primary"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif-en text-2xl text-primary/70">{s.num}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.en}
                </span>
              </div>
              <h3 className="font-serif-cn mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-4 text-sm leading-loose text-muted-foreground">{s.desc}</p>
              <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                {s.points.map((point) => (
                  <li key={point} className="flex items-baseline gap-3 text-sm text-foreground/75">
                    <span className="hairline w-4 shrink-0 translate-y-[-3px]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 技术栈：纯文字滚动带 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        className="mt-24"
      >
        <p className="mb-10 text-center text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Tech Stack · 技术栈
        </p>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <MarqueeRow items={techRowA} />
          <MarqueeRow items={techRowB} reverse />
        </div>
      </motion.div>
    </section>
  )
}
