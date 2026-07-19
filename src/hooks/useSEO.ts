import { useEffect } from 'react'

interface SEOOptions {
  title: string
  description: string
  path?: string
  lang?: 'zh' | 'en'
}

const SITE_URL = 'https://zsxiaoshu.cn'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function useSEO({ title, description, path = '/', lang = 'zh' }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:locale', lang === 'zh' ? 'zh_CN' : 'en_US')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = url
  }, [title, description, path, lang])
}
