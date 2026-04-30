import { useEffect, useState, useRef } from 'react';
import { ArrowRight, BookOpen, KeyRound } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang, t } = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Bilingual title composition
  const mainTitle = lang === 'zh'
    ? ['创新软件', '自由创造']
    : ['INNOVATE', 'FREELY'];
  const accentTitle = lang === 'zh'
    ? ['INNOVATE', 'SOFTWARE']
    : ['SOFTWARE', 'CREATE'];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) contrast(1.1)' }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/50 via-[#080c10]/30 to-[#080c10]" />
      </div>

      {/* Corner frames */}
      <div className="absolute inset-6 md:inset-10 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[rgba(0,230,118,0.2)]" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[rgba(0,230,118,0.2)]" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[rgba(0,230,118,0.2)]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[rgba(0,230,118,0.2)]" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-[800px] mx-auto">
        {/* Studio tag */}
        <div className={`mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="section-tag border border-[rgba(0,230,118,0.2)] px-4 py-2 bg-[rgba(0,230,118,0.03)]">
            {lang === 'zh' ? 'INDIE STUDIO' : 'INDIE SOFTWARE STUDIO'} · 2023-2026
          </span>
        </div>

        {/* Main Title - bilingual stacked */}
        <h1 className="mb-8">
          <span className={`block transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
            <span className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-[-0.03em] leading-[0.95] text-[#f0f4f8] uppercase">
              {mainTitle[0]}
            </span>
          </span>
          <span className={`block transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <span className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-[-0.03em] leading-[0.95] text-[#00e676] uppercase">
              {mainTitle[1]}
            </span>
          </span>
          {/* Cross-language echo */}
          <span className={`block mt-3 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '550ms' }}>
            <span className="text-xs font-bold tracking-[0.35em] text-[#4a5a66] uppercase">
              {accentTitle[0]} {accentTitle[1]}
            </span>
          </span>
        </h1>

        {/* Divider */}
        <div className={`w-20 h-[1px] bg-[#00e676] mx-auto mb-8 transition-all duration-700 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '650ms' }} />

        {/* Subtitle */}
        <p className={`text-[#8a9ba8] text-base md:text-lg max-w-[520px] mx-auto leading-relaxed mb-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '750ms' }}>
          {t('hero.subtitle')}
        </p>

        {/* Keywords line for zh */}
        {lang === 'zh' && (
          <p className={`text-[10px] font-bold tracking-[0.3em] text-[#4a5a66] uppercase mb-10 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '850ms' }}>
            Practical · Fun · Open Source · Creative
          </p>
        )}
        {lang === 'en' && <div className="mb-8" />}

        {/* CTA Buttons - 3 core actions */}
        <div className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '950ms' }}>
          <button
            onClick={() => scrollTo('products')}
            className="group inline-flex items-center gap-2 px-7 py-3 bg-[#00e676] text-[#080c10] font-bold uppercase tracking-wider text-xs hover:shadow-[0_0_25px_rgba(0,230,118,0.25)] transition-all duration-300"
          >
            {t('hero.cta.products')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://docs.zsxiaoshu.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[rgba(0,230,118,0.25)] text-[#f0f4f8] font-bold uppercase tracking-wider text-xs hover:border-[rgba(0,230,118,0.5)] hover:bg-[rgba(0,230,118,0.05)] transition-all duration-300"
          >
            <BookOpen className="w-3.5 h-3.5" />
            {t('hero.cta.docs')}
          </a>

          <a
            href="https://auth.zsxiaoshu.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-[#00e676] text-[#00e676] font-bold uppercase tracking-wider text-xs hover:bg-[#00e676] hover:text-[#080c10] transition-all duration-300"
          >
            <KeyRound className="w-3.5 h-3.5" />
            {t('nav.passport')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] text-[#4a5a66] uppercase tracking-[0.25em] font-bold">{t('scroll')}</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#00e676] to-transparent" />
        </div>
      </div>
    </section>
  );
}
