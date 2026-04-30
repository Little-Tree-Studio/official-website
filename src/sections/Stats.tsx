import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';

const statsData = [
  { key: 'products', value: 4 },
  { key: 'members', value: 2 },
  { key: 'opensource', value: 100, suffix: '%' },
  { key: 'repos', value: 7 },
];

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const duration = 1500;
    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, target]);

  return <span className="tabular-nums">{count}{suffix || ''}</span>;
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { lang, t } = useI18n();

  const enMap: Record<string, string> = {
    products: 'PRODUCTS',
    members: 'MEMBERS',
    opensource: 'OPEN SOURCE',
    repos: 'REPOS',
  };

  return (
    <section className="bg-[#0e1319] border-y border-[rgba(0,230,118,0.08)] py-14 md:py-16">
      <div ref={ref} className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {statsData.map((stat, i) => (
            <div
              key={stat.key}
              className={`relative text-center py-6 px-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${i < statsData.length - 1 ? 'md:border-r border-[rgba(0,230,118,0.08)]' : ''} ${i === 0 ? '' : 'border-l border-[rgba(0,230,118,0.08)] md:border-l-0'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number */}
              <div className="text-[clamp(2rem,4vw,3rem)] font-black text-[#00e676] leading-none mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              {/* Label - bilingual compact */}
              <div className="text-[10px] font-bold text-[#8a9ba8] uppercase tracking-[0.15em]">
                {lang === 'zh' ? (
                  <>
                    <span className="text-[#4a5a66] mr-1.5">{enMap[stat.key]}</span>
                    <span>{t(`stats.${stat.key}`)}</span>
                  </>
                ) : (
                  t(`stats.${stat.key}`)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
