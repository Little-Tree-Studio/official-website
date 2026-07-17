import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const advantages = [
  { num: 'i.', title: '开源透明', desc: '开源透明的产品策略，代码经得起审视与检验。' },
  { num: 'ii.', title: '现代技术', desc: '现代化的技术实现，保持技术栈的持续进化。' },
  { num: 'iii.', title: '体验至上', desc: '注重用户体验的界面设计，好用更要好看。' },
  { num: 'iv.', title: '跨平台', desc: '跨平台的兼容性支持，在哪里都能流畅运行。' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="01"
          eyebrow="About / 关于我们"
          title="让「实用」与「有趣」完美结合"
          italic="practical & playful"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 理念 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-loose text-foreground/80">
              小树工作室以「创新软件，自由创造」为核心理念，相信技术应该让生活更美好。我们致力于将「实用」与「有趣」完美结合，既解决用户的实际需求，又提供愉悦的使用体验。
            </p>

            {/* 品牌定位：引用块 */}
            <blockquote className="relative mt-12 border-l-2 border-primary pl-8">
              <span className="font-serif-en absolute -left-5 -top-7 select-none text-7xl text-primary/15">
                “
              </span>
              <p className="font-serif-cn text-xl font-semibold leading-relaxed md:text-2xl">
                作为独立软件工作室，我们专注于为寻求高质量、个性化软件解决方案的用户群体提供服务。
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                特别关注
                <span className="font-serif-en mx-1.5 text-base text-primary">桌面美化</span>·
                <span className="font-serif-en mx-1.5 text-base text-primary">游戏体验</span>·
                <span className="font-serif-en mx-1.5 text-base text-primary">效率提升</span>
                领域
              </footer>
            </blockquote>
          </motion.div>

          {/* 核心优势：编号列表 */}
          <div>
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-6 border-b border-border py-7 transition-colors first:border-t hover:bg-card/60"
              >
                <span className="font-serif-en w-10 shrink-0 pt-1 text-xl text-primary/70">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-serif-cn text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
