import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const members = [
  {
    name: '小树',
    en: 'Xiaoshu',
    avatar: '/images/team/avatar-xiaoshu.jpg',
    role: '团队负责人',
    desc: '负责项目整体规划和 UI 设计，团队的技术和设计方向把控者。',
    tags: ['项目管理', 'UI设计', '架构设计'],
  },
  {
    name: 'Kyle',
    en: 'Kyle',
    avatar: '/images/team/avatar-kyle.jpg',
    role: '功能开发和性能优化',
    desc: '专注于前端开发和性能优化，确保产品的高效稳定运行。',
    tags: ['前端开发', '性能优化', '系统架构'],
  },
  {
    name: 'wzr',
    en: 'wzr',
    avatar: '/images/team/avatar-wzr.jpg',
    role: '内部工具 / AI / 设计',
    desc: '负责内部工具建设、AI 应用与项目设计，提升团队研发效率。',
    tags: ['内部工具', 'AI 应用', '项目设计'],
  },
  {
    name: '一诺',
    en: 'yinuo',
    avatar: '/images/team/avatar-yinuo.jpg',
    role: '内部 AI 模型 / 内部工具',
    desc: '提供内部 AI 模型，负责内部工具的研发与维护，为团队提供智能化支撑。',
    tags: ['AI 模型', '内部工具', '效率支撑'],
  },
  {
    name: 'Sophia',
    en: 'Sophia',
    avatar: '/images/team/avatar-sophia.jpg',
    role: '艺术设计与宣传',
    desc: '负责艺术设计、宣传图与推广策划，塑造团队的视觉形象。',
    tags: ['艺术设计', '宣传图', '宣传策划'],
  },
  {
    name: '泉岚',
    en: 'quanlan',
    avatar: '/images/team/avatar-quanlan.jpg',
    role: '文案创作',
    desc: '负责项目文案撰写与内容创作，完善团队对外表达。',
    tags: ['文案撰写', '内容策划', '品牌表达'],
  },
  {
    name: '孙口鸟',
    en: 'Jellish',
    avatar: '/images/team/avatar-jellish.jpg',
    role: '音乐创作',
    desc: '负责宣传片音乐、节日音乐、音效等内容的声音创作。',
    tags: ['宣传片音乐', '音效', '配乐'],
  },
]

export default function Team() {
  return (
    <section id="team" className="border-t border-border bg-card/50 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="04"
          eyebrow="Team / 核心团队"
          title="一群热爱创造的人"
          italic="the makers"
          description="小而精的团队，每个人都有自己专注的方向，共同组成 8 人核心团队。"
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-foreground/15 bg-background transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/10">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-serif-cn mt-6 text-xl font-bold">{m.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary">{m.role}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-loose text-muted-foreground">
                {m.desc}
              </p>
              <p className="mt-4 text-xs tracking-[0.12em] text-muted-foreground/80">
                {m.tags.map((t, idx) => (
                  <span key={t}>
                    {idx > 0 && <span className="font-serif-en mx-1.5 text-primary/60">·</span>}
                    {t}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
