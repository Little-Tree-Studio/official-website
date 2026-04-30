import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'zh' | 'en';

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string | string[];
}

const I18nContext = createContext<I18nContextType>({
  lang: 'zh',
  setLang: () => {},
  toggleLang: () => {},
  t: () => '',
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('zh');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev: Lang) => {
      const next = prev === 'zh' ? 'en' : 'zh';
      document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = translations[lang][key];
      return value ?? key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

// Helper for mixed display: returns [zh, en] or [en]
export function useMixed(labelZh: string, labelEn: string) {
  const { lang } = useI18n();
  if (lang === 'en') return { main: labelEn, sub: '' };
  return { main: labelZh, sub: labelEn };
}

const translations: Record<Lang, Record<string, string | string[]>> = {
  zh: {
    // Nav
    'nav.about': '关于我们',
    'nav.products': '产品展示',
    'nav.tech': '技术栈',
    'nav.team': '团队介绍',
    'nav.docs': '文档中心',
    'nav.contact': '联系我们',
    'nav.passport': '通行证',

    // Hero
    'hero.tag': '独立软件工作室',
    'hero.title': '创新软件，自由创造',
    'hero.subtitle': '相信技术应该让生活更美好，致力于开发实用且有趣的软件产品',
    'hero.cta.products': '查看产品',
    'hero.cta.docs': '文档中心',
    'hero.cta.github': 'GitHub',

    // Stats
    'stats.products': '核心产品',
    'stats.members': '核心成员',
    'stats.opensource': '开源理念',
    'stats.repos': 'GitHub 仓库',

    // Products
    'products.sectionTag': '产品展示',
    'products.sectionTitle': '产品生态系统',
    'products.sectionSubtitle': '涵盖不同用户需求场景，从桌面美化到游戏工具',
    'products.wallpaper.name': '小树壁纸',
    'products.wallpaper.desc': '智能壁纸管理软件，多源壁纸获取，AI智能分类，自动更换机制，跨平台支持',
    'products.wallpaper.tags': 'AI智能,跨平台,开源免费',
    'products.mine.name': 'MineLauncher',
    'products.mine.desc': '专业的开源 Minecraft 游戏启动器，多版本支持，智能模组管理，极速启动体验',
    'products.mine.tags': '多版本,模组管理,极速启动',
    'products.video.name': '视频压缩',
    'products.video.desc': '高效的视频压缩软件，在保持画质的同时大幅减小文件大小，简单拖拽操作',
    'products.video.tags': '高效压缩,保持画质,简单易用',
    'products.cyber.name': '赛博玻璃',
    'products.cyber.desc': '创意互动应用，一个非常无聊的软件...但也许正是这份无聊，能在繁忙的生活中给你带来片刻的宁静与思考',
    'products.cyber.tags': '创意互动,情绪价值,艺术表达',
    'products.more': '了解更多',

    // About
    'about.sectionTag': '关于我们',
    'about.title': '专注于实用与有趣的\n独立软件工作室',
    'about.body': '小树工作室以「创新软件，自由创造」为核心理念，相信技术应该让生活更美好。我们致力于将「实用」与「有趣」完美结合，既解决用户的实际需求，又提供愉悦的使用体验。作为独立软件工作室，我们专注于为寻求高质量、个性化软件解决方案的用户群体提供服务，特别关注桌面美化、游戏体验和效率提升领域。',
    'about.values.0': '开源透明的产品策略',
    'about.values.1': '现代化的技术实现',
    'about.values.2': '注重用户体验的界面设计',
    'about.values.3': '跨平台的兼容性支持',
    'about.keywords': '开源,实用,有趣,创造,生长',

    // Tech
    'tech.sectionTag': '技术栈',
    'tech.title': '掌握现代化技术',
    'tech.subtitle': '构建高质量产品',

    // Team
    'team.sectionTag': '团队介绍',
    'team.title': '小团队，大梦想',
    'team.xiaoshu.role': '团队负责人',
    'team.xiaoshu.bio': '负责项目整体规划和 UI 设计，团队的技术和设计方向把控者',
    'team.xiaoshu.tags': '项目管理,UI 设计,架构设计',
    'team.kyle.role': '功能开发和性能优化',
    'team.kyle.bio': '专注于前端开发和性能优化，同时参与宣传片音乐、节日音乐和音效等内容创作',
    'team.kyle.tags': '前端开发,性能优化,系统架构,音乐创作',
    'team.wzr.role': '内部工具 / AI / 设计',
    'team.wzr.bio': '负责团队内部工具开发、AI 相关探索与项目设计支持',
    'team.wzr.tags': '内部工具,AI 应用,项目设计',
    'team.sophia.role': '艺术设计与宣传',
    'team.sophia.bio': '负责艺术设计、宣传图创作与宣传相关工作',
    'team.sophia.tags': '艺术设计,宣传图,宣传策划',
    'team.sunkouniao.role': '音乐创作',
    'team.sunkouniao.bio': '负责宣传片音乐、节日音乐、音效等内容创作',
    'team.sunkouniao.tags': '宣传片音乐,节日音乐,音效设计',
    'team.quanlan.role': '文案创作',
    'team.quanlan.bio': '负责项目文案撰写与内容创作，完善团队对外表达',
    'team.quanlan.tags': '文案创作,内容策划,品牌表达',

    // Contact
    'contact.title': '创造美好数字体验',
    'contact.subtitle': '无论你有项目合作、技术交流还是产品反馈，欢迎随时联系我们',
    'contact.email.label': '邮箱联系',
    'contact.email.value': 'studio@zsxiaoshu.cn',
    'contact.email.action': '发送邮件',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'Little-Tree-Studio',
    'contact.github.action': '访问 GitHub',
    'contact.site.label': '官方网站',
    'contact.site.value': 'zsxiaoshu.cn',
    'contact.site.action': '访问网站',
    'contact.passport.label': '通行证',
    'contact.passport.value': 'auth.zsxiaoshu.cn',
    'contact.passport.action': '账号登录',

    // Footer
    'footer.brand': '小树工作室',
    'footer.slogan': '创新软件，自由创造',
    'footer.brand-resources': '品牌资源',
    'footer.copyright': '\u00A9 2023-2026 小树工作室. 保留所有权利.',

    // Misc
    'lang.zh': '中',
    'lang.en': 'EN',
    'scroll': 'SCROLL',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.tech': 'Tech Stack',
    'nav.team': 'Team',
    'nav.docs': 'Docs',
    'nav.contact': 'Contact',
    'nav.passport': 'Passport',

    // Hero
    'hero.tag': 'INDIE SOFTWARE STUDIO',
    'hero.title': 'INNOVATE SOFTWARE\nCREATE FREELY',
    'hero.subtitle': 'We believe technology should make life better. Dedicated to developing practical and fun software products.',
    'hero.cta.products': 'View Products',
    'hero.cta.docs': 'Documentation',
    'hero.cta.github': 'GitHub',

    // Stats
    'stats.products': 'Core Products',
    'stats.members': 'Team Members',
    'stats.opensource': 'Open Source',
    'stats.repos': 'GitHub Repos',

    // Products
    'products.sectionTag': 'PRODUCTS',
    'products.sectionTitle': 'Product Ecosystem',
    'products.sectionSubtitle': 'Covering diverse user needs, from desktop beautification to gaming tools',
    'products.wallpaper.name': 'Little Tree Wallpaper',
    'products.wallpaper.desc': 'Smart wallpaper manager with multi-source fetching, AI categorization, auto-switching, and cross-platform support',
    'products.wallpaper.tags': 'AI Powered,Cross-Platform,Free & Open',
    'products.mine.name': 'MineLauncher',
    'products.mine.desc': 'Professional open-source Minecraft launcher with multi-version support, smart mod management, and blazing-fast launch',
    'products.mine.tags': 'Multi-Version,Mod Manager,Fast Launch',
    'products.video.name': 'Video Compressor',
    'products.video.desc': 'Efficient video compression that dramatically reduces file size while maintaining visual quality, with simple drag-and-drop',
    'products.video.tags': 'Efficient,Quality Kept,Easy Use',
    'products.cyber.name': 'Cyber Glass',
    'products.cyber.desc': 'A creative interactive app. A very boring software... but perhaps this boredom brings a moment of peace and reflection in busy life',
    'products.cyber.tags': 'Creative,Emotional,Artistic',
    'products.more': 'Learn More',

    // About
    'about.sectionTag': 'ABOUT',
    'about.title': 'An Indie Studio\nFocused on Practical & Fun',
    'about.body': 'Little Tree Studio is built on the core philosophy of "Innovate Software, Create Freely." We believe technology should make life better. We strive to perfectly blend "practicality" with "fun" — solving real user needs while delivering delightful experiences. As an independent software studio, we focus on serving users seeking high-quality, personalized software solutions, with special attention to desktop beautification, gaming experiences, and productivity enhancement.',
    'about.values.0': 'Open & transparent product strategy',
    'about.values.1': 'Modern technology implementation',
    'about.values.2': 'User-centric interface design',
    'about.values.3': 'Cross-platform compatibility',
    'about.keywords': 'Open,Practical,Fun,Create,Grow',

    // Tech
    'tech.sectionTag': 'TECH STACK',
    'tech.title': 'Modern Technologies',
    'tech.subtitle': 'Building Quality Products',

    // Team
    'team.sectionTag': 'TEAM',
    'team.title': 'Small Team, Big Dreams',
    'team.xiaoshu.role': 'Team Lead',
    'team.xiaoshu.bio': 'Responsible for overall project planning and UI design, guiding the technical and creative direction of the team',
    'team.xiaoshu.tags': 'Project Mgmt,UI Design,Architecture',
    'team.kyle.role': 'Dev & Performance',
    'team.kyle.bio': 'Focused on frontend development and performance optimization while also contributing music for trailers, holiday releases, and sound effects',
    'team.kyle.tags': 'Frontend,Performance,System Arch,Music',
    'team.wzr.role': 'Internal Tools / AI / Design',
    'team.wzr.bio': 'Builds internal team tools, explores AI-related work, and contributes to project design',
    'team.wzr.tags': 'Internal Tools,AI Work,Project Design',
    'team.sophia.role': 'Art & Promotion',
    'team.sophia.bio': 'Oversees art design, promotional visuals, and outreach materials',
    'team.sophia.tags': 'Art Design,Promo Visuals,Promotion',
    'team.sunkouniao.role': 'Music Production',
    'team.sunkouniao.bio': 'Creates music for trailers, holiday releases, and sound effects',
    'team.sunkouniao.tags': 'Trailer Music,Holiday Music,SFX',
    'team.quanlan.role': 'Copywriting',
    'team.quanlan.bio': 'Creates project copy and written content to strengthen the team\'s external communication',
    'team.quanlan.tags': 'Copywriting,Content Planning,Brand Voice',

    // Contact
    'contact.title': 'Create Great Digital Experiences',
    'contact.subtitle': 'Whether for project collaboration, tech exchange, or product feedback — we are here',
    'contact.email.label': 'Email',
    'contact.email.value': 'studio@zsxiaoshu.cn',
    'contact.email.action': 'Send Email',
    'contact.github.label': 'GitHub',
    'contact.github.value': 'Little-Tree-Studio',
    'contact.github.action': 'Visit GitHub',
    'contact.site.label': 'Website',
    'contact.site.value': 'zsxiaoshu.cn',
    'contact.site.action': 'Visit Site',
    'contact.passport.label': 'Passport',
    'contact.passport.value': 'auth.zsxiaoshu.cn',
    'contact.passport.action': 'Account Login',

    // Footer
    'footer.brand': 'Little Tree Studio',
    'footer.slogan': 'Innovate Software, Create Freely',
    'footer.brand-resources': 'Brand Assets',
    'footer.copyright': '\u00A9 2023-2026 Little Tree Studio. All rights reserved.',

    // Misc
    'lang.zh': '中',
    'lang.en': 'EN',
    'scroll': 'SCROLL',
  },
};
