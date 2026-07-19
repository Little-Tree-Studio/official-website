import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router'
import {
  Download, Globe, ArrowLeft, Check, X as XIcon, AlertTriangle, Copy, ExternalLink,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
})

const downloads = [
  { name: { zh: '全彩 · PNG · 1024px', en: 'Full color · PNG · 1024px' }, file: '/images/brand/logo-1024.png', fmt: 'PNG' },
  { name: { zh: '全彩 · PNG · 512px', en: 'Full color · PNG · 512px' }, file: '/images/brand/logo-512.png', fmt: 'PNG' },
  { name: { zh: '全彩 · PNG · 256px', en: 'Full color · PNG · 256px' }, file: '/images/brand/logo-256.png', fmt: 'PNG' },
  { name: { zh: '单色（浅色）· PNG', en: 'Mono (light) · PNG' }, file: '/images/brand/logo-light.png', fmt: 'PNG' },
  { name: { zh: '单色（深色）· PNG', en: 'Mono (dark) · PNG' }, file: '/images/brand/logo-dark.png', fmt: 'PNG' },
  { name: { zh: '矢量 · SVG', en: 'Vector · SVG' }, file: '/images/brand/logo.svg', fmt: 'SVG' },
]

const copy = {
  zh: {
    brandName: '小树工作室',
    eyebrow: '品牌与 Logo',
    title: 'Logo 下载与品牌资产',
    introPre: '小树工作室（Little Tree Studio）全部品牌视觉资源（Logo、图标、配色等）均受',
    introLicense: ' LTS-OVAL 许可',
    introPost: ' 保护。下载与使用即表示你同意遵守该许可的全部条款。请勿修改、变形或更改 Logo 颜色。',
    readLicense: '阅读完整 LTS-OVAL 许可',
    preview: '标志预览',
    previewNote: '上：浅色背景下的彩色标志 · 下：深色背景下的单色（浅色）标志。请始终在标志周围保留足够的留白空间。',
    downloadTitle: '下载文件',
    download: '下载',
    attrTitle: '署名格式（强制要求）',
    attrNote: '在任何允许的使用场景中，须在显著位置完整署名，且不小于正文最小字号。',
    attrSub: '中文场景：© 小树工作室 | https://zsxiaoshu.cn · GitHub 引用：Assets by Little Tree Studio (https://github.com/shu-shu-1)',
    copied: '已复制',
    copy: '复制',
    rulesTitle: 'Logo 使用规范',
    rulesNote: 'Logo 是小树工作室的核心品牌资产，授权极为严格。以下为分场景摘要：',
    commercialTitle: '商业授权',
    commercial: '超出本许可范围的使用（商业分发、衍生品开发、AI 训练、大规模印刷等），请发送邮件至 studio@zsxiaoshu.cn，标题格式「[商业授权申请] + 项目名称」。授权生效后不得转授第三方。',
    backHome: '返回首页',
    rights: '© 2026 小树工作室 Little Tree Studio. 保留所有权利',
    footerSerif: 'Respect copyright, create together.',
    rules: [
      { ok: true, text: '在介绍小树工作室的第三方文章中展示（须用官网标准文件，不得变形、改色）' },
      { ok: 'warn', text: '合作项目联合 Logo：仅限签署 MOU 的伙伴，须用官方联合标识模板' },
      { ok: false, text: '将 Logo 用作自身产品图标或启动画面（严格禁止）' },
      { ok: false, text: '修改 Logo 颜色 / 字体 / 结构后使用（含“致敬”“仿制”均视为侵权）' },
    ],
  },
  en: {
    brandName: 'Little Tree Studio',
    eyebrow: 'Brand & Logo',
    title: 'Logo Downloads & Brand Assets',
    introPre: 'All brand visual assets of Little Tree Studio (logo, icons, colors, etc.) are protected under the',
    introLicense: ' LTS-OVAL License',
    introPost: '. By downloading or using them you agree to all its terms. Do not modify, distort or recolor the logo.',
    readLicense: 'Read the full LTS-OVAL License',
    preview: 'Logo Preview',
    previewNote: 'Top: full-color logo on light background · Bottom: mono (light) logo on dark background. Always keep generous clear space around the logo.',
    downloadTitle: 'Download Files',
    download: 'Download',
    attrTitle: 'Attribution (required)',
    attrNote: 'In any permitted use, full attribution must appear in a prominent position, no smaller than the smallest body text.',
    attrSub: 'For English contexts: © Little Tree Studio | https://zsxiaoshu.cn · GitHub: Assets by Little Tree Studio (https://github.com/shu-shu-1)',
    copied: 'Copied',
    copy: 'Copy',
    rulesTitle: 'Logo Usage Rules',
    rulesNote: 'The logo is Little Tree Studio’s core brand asset and is strictly licensed. Summary by scenario:',
    commercialTitle: 'Commercial Licensing',
    commercial: 'For use beyond this license (commercial distribution, derivatives, AI training, large-scale printing, etc.), email studio@zsxiaoshu.cn with the subject “[Commercial License Request] + Project Name”. Licenses are non-transferable once granted.',
    backHome: 'Back to home',
    rights: '© 2026 Little Tree Studio. All rights reserved.',
    footerSerif: 'Respect copyright, create together.',
    rules: [
      { ok: true, text: 'Display in third-party articles about Little Tree Studio (must use official files; no distortion or recoloring)' },
      { ok: 'warn', text: 'Co-branding / joint logos: only for partners with a signed MOU, using the official co-branding template' },
      { ok: false, text: 'Using the logo as your own product icon or splash screen (strictly prohibited)' },
      { ok: false, text: 'Using the logo after altering its color / typeface / structure (including “tribute” or “imitation”, which count as infringement)' },
    ],
  },
}

const attribution = '© Little Tree Studio | https://zsxiaoshu.cn'

export default function Brand() {
  const [scrolled, setScrolled] = useState(false)
  const [params] = useSearchParams()
  const [lang, setLang] = useState<'zh' | 'en'>(params.get('lang') === 'en' ? 'en' : 'zh')
  const [copied, setCopied] = useState(false)
  const t = copy[lang]

  useSEO({
    title:
      lang === 'zh'
        ? '品牌资产与 Logo 下载 - 小树工作室'
        : 'Brand Assets & Logo Downloads - Little Tree Studio',
    description:
      lang === 'zh'
        ? '小树工作室（Little Tree Studio）品牌视觉资源与 Logo 下载，全部品牌资产受 LTS-OVAL 许可保护。'
        : 'Download official Little Tree Studio logos and brand assets, protected under the LTS-OVAL License.',
    path: '/brand',
    lang,
  })

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  const copyAttribution = () => {
    navigator.clipboard.writeText(attribution).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 导航 */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-border bg-background/90 py-3.5 backdrop-blur-md' : 'py-6'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img src="/images/brand/favicon.png" alt={t.brandName} className="h-7 w-auto shrink-0 md:h-8" />
            <span className={`truncate text-lg font-bold md:text-xl ${lang === 'zh' ? 'font-serif-cn' : "font-['EB_Garamond'] italic"}`}>
              {t.brandName}
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2.5">
            {/* 移动端：仅返回箭头；桌面端：箭头+文字 */}
            <Link
              to={lang === 'zh' ? '/' : '/en'}
              aria-label={t.backHome}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground sm:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              to={lang === 'zh' ? '/' : '/en'}
              className="hidden items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              <ArrowLeft className="h-4 w-4" /> {t.backHome}
            </Link>

            {/* 语言切换：固定宽度不换行，仅激活态带图标 */}
            <div className="flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full border border-border p-1 text-xs font-medium">
              <button
                onClick={() => setLang('zh')}
                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-1 transition-colors ${lang === 'zh' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {lang === 'zh' && <Globe className="h-3 w-3 shrink-0" />}
                中
              </button>
              <button
                onClick={() => setLang('en')}
                className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-1 transition-colors ${lang === 'en' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {lang === 'en' && <Globe className="h-3 w-3 shrink-0" />}
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-border pt-36 pb-16 md:pt-44">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p {...fade(0)} className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="font-serif-en text-lg normal-case text-primary">Brand Assets</span>
            <span className="hairline w-10" /> {t.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.08)} className={`mt-6 text-4xl font-black md:text-6xl ${lang === 'zh' ? 'font-serif-cn' : "font-['EB_Garamond'] italic font-semibold"}`}>
            {t.title}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-2xl leading-loose text-muted-foreground">
            {t.introPre}
            <span className="font-medium text-foreground">{t.introLicense}</span>
            {t.introPost}
          </motion.p>
          <motion.a
            {...fade(0.24)}
            href="https://docs.zsxiaoshu.cn/en/terms/studio/oval/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {t.readLicense} <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      {/* 预览 + 下载 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div {...fade(0)}>
              <h2 className={`text-2xl font-bold ${lang === 'zh' ? 'font-serif-cn' : "font-['EB_Garamond'] italic"}`}>{t.preview}</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="flex items-center justify-center bg-card py-14">
                  <img src="/images/brand/logo-512.png" alt="Little Tree Studio logo" className="h-44 w-auto" />
                </div>
                <div className="flex items-center justify-center bg-[#0b1512] py-14">
                  <img src="/images/brand/logo-light.png" alt="logo on dark" className="h-40 w-auto" />
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.previewNote}</p>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <h2 className={`text-2xl font-bold ${lang === 'zh' ? 'font-serif-cn' : "font-['EB_Garamond'] italic"}`}>{t.downloadTitle}</h2>
              <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
                {downloads.map((d) => (
                  <div key={d.file} className="flex items-center justify-between gap-4 bg-card/40 px-6 py-4 transition-colors hover:bg-card">
                    <div className="flex items-center gap-4">
                      <span className="w-12 rounded border border-border px-2 py-0.5 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.fmt}
                      </span>
                      <span className="text-sm">{d.name[lang]}</span>
                    </div>
                    <a
                      href={d.file}
                      download
                      className="flex items-center gap-1.5 rounded-md border border-foreground/70 px-4 py-2 text-xs font-medium transition-all hover:bg-foreground hover:text-background"
                    >
                      <Download className="h-3.5 w-3.5" /> {t.download}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-primary/25 bg-primary/5 p-6">
                <h3 className="text-sm font-semibold">{t.attrTitle}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.attrNote}</p>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3">
                  <code className="text-xs text-foreground/85">{attribution}</code>
                  <button
                    onClick={copyAttribution}
                    className="flex shrink-0 items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-colors hover:bg-primary"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? t.copied : t.copy}
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">{t.attrSub}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 使用规范 */}
      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 {...fade(0)} className={`text-2xl font-bold md:text-3xl ${lang === 'zh' ? 'font-serif-cn' : "font-['EB_Garamond'] italic"}`}>
            {t.rulesTitle}
          </motion.h2>
          <motion.p {...fade(0.08)} className="mt-3 max-w-2xl text-sm text-muted-foreground">
            {t.rulesNote}
          </motion.p>
          <div className="mt-10 space-y-4">
            {t.rules.map((r, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="flex items-start gap-4 rounded-lg border border-border bg-background px-6 py-5"
              >
                {r.ok === true && <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />}
                {r.ok === 'warn' && <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />}
                {r.ok === false && <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />}
                <span className="text-sm leading-relaxed">{r.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.2)} className="mt-12 rounded-xl border border-border bg-background p-7">
            <h3 className="font-semibold">{t.commercialTitle}</h3>
            <p className="mt-3 text-sm leading-loose text-muted-foreground">{t.commercial}</p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
          <span>{t.rights}</span>
          <span className="font-serif-en text-sm">{t.footerSerif}</span>
        </div>
      </footer>
    </div>
  )
}
