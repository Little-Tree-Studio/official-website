import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';
import { Check } from 'lucide-react';

const values = [0, 1, 2, 3];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { lang, t } = useI18n();

  const keywords = lang === 'zh'
    ? ['开源', '实用', '有趣', '创造', '生长']
    : String(t('about.keywords')).split(',');

  const titleLines = String(t('about.title')).split('\n');

  return (
    <section id="about" className="section-padding bg-[#0e1319] border-t border-[rgba(0,230,118,0.08)]">
      <div ref={ref} className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Text content */}
          <div className="lg:col-span-7">
            {/* Section tag */}
            <div className="flex items-baseline gap-4 mb-4">
              <span className={`section-tag transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {t('about.sectionTag')}
              </span>
              {lang === 'zh' && (
                <span className={`text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '80ms' }}>
                  ABOUT US
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className={`section-title mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              {titleLines[0]}
              <br />
              <span className={lang === 'zh' ? 'text-[#00e676]' : ''}>{titleLines[1]}</span>
            </h2>

            {/* Body */}
            <p className={`text-[#8a9ba8] leading-[1.8] text-sm md:text-base mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '180ms' }}>
              {t('about.body')}
            </p>

            {/* Values list */}
            <div className="border border-[rgba(0,230,118,0.08)]">
              {values.map((idx, i) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-4 py-3.5 transition-all duration-600 ${
                    i < values.length - 1 ? 'border-b border-[rgba(0,230,118,0.06)]' : ''
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${350 + i * 80}ms` }}
                >
                  <Check className="w-3.5 h-3.5 text-[#00e676] flex-shrink-0" />
                  <span className="text-[#8a9ba8] text-sm">{t(`about.values.${idx}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative keywords block */}
          <div className={`lg:col-span-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative aspect-[4/3] max-w-[360px] mx-auto lg:mx-0 lg:ml-auto border border-[rgba(0,230,118,0.1)] bg-[rgba(0,230,118,0.015)]">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[rgba(0,230,118,0.3)]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[rgba(0,230,118,0.3)]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[rgba(0,230,118,0.3)]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[rgba(0,230,118,0.3)]" />

              {/* Inner frame */}
              <div className="absolute inset-6 border border-[rgba(0,230,118,0.06)]" />

              {/* Keywords */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-wrap justify-center gap-2.5 max-w-[200px]">
                  {keywords.map((word, i) => (
                    <span
                      key={word}
                      className={`px-3.5 py-1.5 border border-[rgba(0,230,118,0.15)] text-xs font-bold text-[#69f0ae] uppercase tracking-wider bg-[rgba(0,230,118,0.04)] transition-all duration-600 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${500 + i * 120}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
