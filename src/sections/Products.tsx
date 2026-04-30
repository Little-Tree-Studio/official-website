import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';
import { ArrowUpRight } from 'lucide-react';

const productKeys = ['wallpaper', 'mine', 'video', 'cyber'];
const productIcons: Record<string, string> = {
  wallpaper: '/images/wallpaper-icon.png',
  mine: '/images/minecraft-icon.png',
  video: '/images/video-icon.png',
  cyber: '/images/cyberglass-icon.png',
};
const productEnNames: Record<string, string> = {
  wallpaper: 'WALLPAPER MANAGER',
  mine: 'MC LAUNCHER',
  video: 'VIDEO COMPRESSOR',
  cyber: 'CYBER GLASS',
};

export default function Products() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { lang, t } = useI18n();

  return (
    <section id="products" className="section-padding bg-[#080c10]">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-baseline gap-4 mb-3">
            <span className={`section-tag transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('products.sectionTag')}
            </span>
            {lang === 'zh' && (
              <span className={`text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
                PRODUCT ECOSYSTEM
              </span>
            )}
          </div>
          <h2 className={`section-title mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '80ms' }}>
            {t('products.sectionTitle')}
          </h2>
          <p className={`section-subtitle max-w-[480px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '160ms' }}>
            {t('products.sectionSubtitle')}
          </p>
        </div>

        {/* Product Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productKeys.map((key, i) => {
            const tags = String(t(`products.${key}.tags`)).split(',');
            return (
              <a
                key={key}
                href="https://github.com/Little-Tree-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block border border-[rgba(0,230,118,0.1)] bg-[rgba(0,230,118,0.02)] p-6 md:p-8 transition-all duration-400 hover:border-[rgba(0,230,118,0.3)] hover:bg-[rgba(0,230,118,0.04)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${250 + i * 120}ms` }}
              >
                {/* Top row: icon + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 border border-[rgba(0,230,118,0.15)] flex items-center justify-center bg-[rgba(0,230,118,0.03)] group-hover:border-[rgba(0,230,118,0.35)] transition-colors">
                    <img src={productIcons[key]} alt="" className="w-5 h-5 object-contain" loading="lazy" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#4a5a66] group-hover:text-[#00e676] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[#f0f4f8] mb-1 uppercase tracking-wide">
                  {t(`products.${key}.name`)}
                </h3>

                {/* English name for zh */}
                {lang === 'zh' && (
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase mb-3">
                    {productEnNames[key]}
                  </p>
                )}
                {lang === 'en' && <div className="mb-2" />}

                {/* Description */}
                <p className="text-[#8a9ba8] text-sm leading-relaxed mb-5 line-clamp-2">
                  {t(`products.${key}.desc`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-0.5 border border-[rgba(0,230,118,0.12)] text-[#69f0ae] uppercase tracking-wider">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
